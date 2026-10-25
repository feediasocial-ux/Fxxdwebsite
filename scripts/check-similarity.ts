/**
 * Script de verificación anti-duplicado y de campos obligatorios para landings de nicho y ciudad.
 * - El build DEBE FALLAR si falta cualquier campo obligatorio en una landing de nicho.
 * - El build DEBE FALLAR si dos landings comparten más de un 40 % de texto (umbral 0.40).
 * - Verifica también que la regla anti-doorway de ciudades se respete.
 */
import { ALL_NICHES, type NicheLandingData } from '../src/content/niches/index.ts';
import { CITY_LANDINGS, CITY_LANDINGS_ENABLED } from '../src/content/cities.ts';

const MAX_SIMILARITY = 0.4; // 40 % máximo permitido

function extractCorpus(n: NicheLandingData): string {
  const parts: string[] = [
    n.metaTitle,
    n.metaDescription,
    n.h1,
    n.intro,
    ...n.nicheVocabulary,
    n.painsTitle,
    ...n.pains.flatMap((p) => [p.title, p.text]),
    n.objectionsTitle,
    ...n.objections.flatMap((o) => [o.objection, o.answer]),
    n.reelIdeasTitle,
    n.reelIdeasSubtitle,
    ...n.reelIdeas.flatMap((r) => [r.title, r.hook, r.visual, r.goal]),
    n.calendarTitle,
    n.calendarSubtitle,
    ...n.sampleCalendar.flatMap((w) => [w.week, w.focus, ...w.pieces]),
    n.faqTitle,
    ...n.faqs.flatMap((f) => [f.q, f.a]),
    n.waMessage,
  ];
  return parts.join(' ');
}

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 2);
}

function buildShingles(words: string[], k = 3): Set<string> {
  const set = new Set<string>();
  for (let i = 0; i <= words.length - k; i++) {
    set.add(words.slice(i, i + k).join(' '));
  }
  return set;
}

/**
 * Calcula tanto el coeficiente de solapamiento (containment: intersección / min(A, B))
 * como Jaccard sobre 3-gramas de palabras significativas, y toma el máximo (más estricto).
 */
function similarity(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 || b.size === 0) return 0;
  let inter = 0;
  for (const item of a) {
    if (b.has(item)) inter++;
  }
  const containment = inter / Math.min(a.size, b.size);
  return containment;
}

let errors = 0;
console.log('--- Validación de landings de nicho (campos obligatorios + similitud <= 40 %) ---');

if (ALL_NICHES.length < 8) {
  console.error(`❌ Se esperaban al menos 8 landings (4 nichos × 2 países), encontradas: ${ALL_NICHES.length}`);
  errors++;
}

for (const n of ALL_NICHES) {
  const label = `${n.country}/${n.slug}`;
  if (!n.h1 || !n.intro || !n.waMessage || !n.metaTitle || !n.metaDescription) {
    console.error(`❌ [${label}] Faltan campos base obligatorios`);
    errors++;
  }
  if (!n.nicheVocabulary || n.nicheVocabulary.length < 5) {
    console.error(`❌ [${label}] Debe incluir al menos 5 términos de vocabulario propio del nicho y país`);
    errors++;
  }
  if (!n.pains || n.pains.length !== 3) {
    console.error(`❌ [${label}] Debe incluir exactamente 3 dolores específicos`);
    errors++;
  }
  if (!n.objections || n.objections.length !== 3) {
    console.error(`❌ [${label}] Debe incluir exactamente 3 objeciones con respuesta`);
    errors++;
  }
  if (!n.reelIdeas || n.reelIdeas.length < 3) {
    console.error(`❌ [${label}] Debe incluir al menos 3 ideas de reels reales`);
    errors++;
  }
  if (!n.sampleCalendar || n.sampleCalendar.length < 4) {
    console.error(`❌ [${label}] Debe incluir ejemplo de calendario mensual (4 semanas)`);
    errors++;
  }
  if (!n.faqs || n.faqs.length < 5 || n.faqs.length > 8) {
    console.error(`❌ [${label}] Debe tener entre 5 y 8 FAQs propias (tiene ${n.faqs?.length ?? 0})`);
    errors++;
  }
}

const shingleMap = ALL_NICHES.map((n) => ({
  label: `${n.country}/${n.slug}`,
  shingles: buildShingles(tokenize(extractCorpus(n)), 3),
}));

let maxObserved = 0;
let maxPair = '';

for (let i = 0; i < shingleMap.length; i++) {
  for (let j = i + 1; j < shingleMap.length; j++) {
    const A = shingleMap[i];
    const B = shingleMap[j];
    const sim = similarity(A.shingles, B.shingles);
    if (sim > maxObserved) {
      maxObserved = sim;
      maxPair = `${A.label} ↔ ${B.label}`;
    }
    if (sim > MAX_SIMILARITY) {
      console.error(`❌ Similitud excesiva (${(sim * 100).toFixed(1)} % > 40 %): ${A.label} ↔ ${B.label}`);
      errors++;
    } else {
      console.log(`✅ ${A.label} ↔ ${B.label}: ${(sim * 100).toFixed(1)} % de solapamiento (máx 40 %)`);
    }
  }
}

// Regla anti-doorway de ciudades
if (CITY_LANDINGS_ENABLED) {
  for (const c of CITY_LANDINGS) {
    if (c.enabled && (c.verifiedLocalInsights.length < 3 || c.verifiedLocalCases.length < 1)) {
      console.error(`❌ Ciudad ${c.cityName} activada sin contenido único ni casos locales verificados (anti-doorway)`);
      errors++;
    }
  }
} else {
  console.log('✅ Sistema de páginas por ciudad: preparado y desactivado (regla anti-doorway activa).');
}

console.log(`📊 Par con mayor similitud: ${maxPair} (${(maxObserved * 100).toFixed(1)} %, límite 40.0 %)`);

if (errors > 0) {
  console.error(`\n❌ Fallaron ${errors} validaciones en check-similarity.ts`);
  process.exit(1);
}
console.log('✅ Todas las landings de nicho cumplen campos obligatorios y < 40 % de similitud.');
