const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8'
};

const server = http.createServer((req, res) => {
  const parsedPath = req.url.split('?')[0];
  const normalized = path.normalize(parsedPath).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(__dirname, normalized === '/' ? 'index.html' : normalized);

  fs.stat(filePath, (err, stats) => {
    if (err) {
      // Fallback para SPA index.html se não for arquivo com extensão
      if (!path.extname(filePath)) {
        filePath = path.join(__dirname, 'index.html');
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404 - Arquivo não encontrado');
        return;
      }
    } else if (stats.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Access-Control-Allow-Origin': '*'
    });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`☕ Fratti Cafeteria App rodando em: http://localhost:${PORT}`);
  console.log(`   Disponível também na rede local.`);
});
