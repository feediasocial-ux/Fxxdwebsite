import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const DIST = path.resolve('dist');
const OUT = path.resolve('screenshots');
fs.mkdirSync(OUT, { recursive: true });

const MIME: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.svg': 'image/svg+xml',
  '.avif': 'image/avif',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
};

const server = http.createServer((req, res) => {
  const urlPath = (req.url || '/').split('?')[0];
  let filePath = path.join(DIST, urlPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }
  if (!fs.existsSync(filePath)) {
    res.writeHead(404);
    res.end('Not found');
    return;
  }
  const ext = path.extname(filePath);
  res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(res);
});

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const SHOTS = [
  { file: 'styleguide-390.png', size: '390,1100', path: '/styleguide/' },
  { file: 'styleguide-1440.png', size: '1440,1000', path: '/styleguide/' },
  { file: 'es-home-390.png', size: '390,1100', path: '/es/' },
  { file: 'es-home-1440.png', size: '1440,1000', path: '/es/' },
  { file: 'mx-home-390.png', size: '390,1100', path: '/mx/' },
  { file: 'root-1440.png', size: '1440,900', path: '/' },
];

server.listen(0, '127.0.0.1', () => {
  const addr = server.address();
  const port = typeof addr === 'object' && addr ? addr.port : 4399;
  try {
    for (const s of SHOTS) {
      const target = path.join(OUT, s.file);
      execFileSync(
        CHROME,
        [
          '--headless=new',
          '--no-sandbox',
          '--disable-gpu',
          '--hide-scrollbars',
          '--user-data-dir=/tmp/chrome-headless-profile',
          `--window-size=${s.size}`,
          `--screenshot=${target}`,
          `http://127.0.0.1:${port}${s.path}`,
        ],
        { stdio: 'pipe' }
      );
      console.log(`✅ Captura guardada: screenshots/${s.file}`);
    }
  } finally {
    server.close();
  }
});
