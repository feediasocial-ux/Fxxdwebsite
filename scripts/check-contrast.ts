/**
 * Verifica que todas las combinaciones de color de marca usadas en texto
 * cumplan el contraste WCAG AA (>= 4.5:1 para texto normal, >= 3.0:1 para texto grande).
 */
const HEX: Record<string, string> = {
  cream: '#FFF6E5',
  'cream-deep': '#F5E6C8',
  ink: '#1B1B1F',
  'ink-soft': '#3D3D45',
  coral: '#FF5A36',
  'coral-deep': '#C2381A',
  lemon: '#E8F05A',
  sky: '#BFE3FF',
  maroon: '#5A2530',
};

function luminance(hex: string): number {
  const n = parseInt(hex.slice(1), 16);
  const rgb = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
}

function ratio(a: string, b: string): number {
  const l1 = luminance(HEX[a]);
  const l2 = luminance(HEX[b]);
  const [bright, dark] = l1 > l2 ? [l1, l2] : [l2, l1];
  return (bright + 0.05) / (dark + 0.05);
}

const PAIRS: { bg: string; fg: string; min: number; use: string }[] = [
  { bg: 'cream', fg: 'ink', min: 4.5, use: 'Texto base sobre crema' },
  { bg: 'cream', fg: 'ink-soft', min: 4.5, use: 'Texto secundario sobre crema' },
  { bg: 'cream', fg: 'coral-deep', min: 4.5, use: 'Acento de texto sobre crema' },
  { bg: 'cream-deep', fg: 'ink', min: 4.5, use: 'Tarjetas crema oscura' },
  { bg: 'coral', fg: 'ink', min: 4.5, use: 'Botones y tarjetas coral con texto tinta' },
  { bg: 'lemon', fg: 'ink', min: 4.5, use: 'Tarjetas y pegatinas limón' },
  { bg: 'sky', fg: 'ink', min: 4.5, use: 'Tarjetas y etiquetas celeste' },
  { bg: 'maroon', fg: 'cream', min: 4.5, use: 'Bloques burdeos y tema sobrio' },
  { bg: 'ink', fg: 'cream', min: 4.5, use: 'Secciones oscuras y footer' },
  { bg: 'ink', fg: 'lemon', min: 4.5, use: 'Cinta y acentos sobre tinta' },
];

let failed = false;
console.log('--- Verificación de contraste WCAG AA ---');
for (const p of PAIRS) {
  const r = ratio(p.bg, p.fg);
  const ok = r >= p.min;
  if (!ok) failed = true;
  console.log(`${ok ? '✅' : '❌'} ${p.bg} / ${p.fg}: ${r.toFixed(2)}:1 (mín ${p.min}:1) — ${p.use}`);
}

if (failed) {
  console.error('Fallo de contraste WCAG AA.');
  process.exit(1);
}
