// Static site server — created by vCode's "Serve this folder".
// Run it (▶) and the preview opens on the printed URL automatically.
// It serves every file in this folder; unknown paths fall back to
// index.html (what single-page apps expect). Edit it freely — it's yours.
import http from "http";
import { readFile } from "fs/promises";
import path from "path";

const root = path.resolve(".");
const mime = {
  ".html": "text/html", ".js": "text/javascript", ".mjs": "text/javascript",
  ".css": "text/css", ".json": "application/json", ".png": "image/png",
  ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".gif": "image/gif",
  ".svg": "image/svg+xml", ".webp": "image/webp", ".ico": "image/x-icon",
  ".woff": "font/woff", ".woff2": "font/woff2", ".txt": "text/plain",
  ".mp4": "video/mp4", ".webm": "video/webm", ".pdf": "application/pdf",
};

const server = http.createServer(async (req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, "http://x").pathname);
  const candidates = [
    path.join(root, pathname),
    path.join(root, pathname, "index.html"),
    path.join(root, "index.html"), // SPA fallback
  ];
  for (const file of candidates) {
    try {
      const data = await readFile(file);
      res.writeHead(200, {
        "Content-Type": mime[path.extname(file)] ?? "application/octet-stream",
        "Cache-Control": "no-store", // always serve fresh edits
      });
      res.end(data);
      console.log(res.statusCode, pathname);
      return;
    } catch {}
  }
  res.writeHead(404).end("not found");
  console.log(404, pathname);
});

// Port 0 = the system picks a free one, so two servers never collide.
server.listen(0, "127.0.0.1", () =>
  console.log(`Serving ${root} at http://127.0.0.1:${server.address().port}`));