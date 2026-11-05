// Offline support. The site's own files are network-first (updates show up at once, the cache is the
// offline fallback); the pinned face-detection library and models are cache-first, so after the app has
// run once it works with no connection at all.
const SHELL = "shell-v1", LIBS = "libs-v1";
const PRECACHE = ["./", "./app/", "./specs.js?v=3", "./install.js", "./site.css", "./manifest.webmanifest",
  "./icons/icon.svg", "./icons/icon-192.png", "./icons/icon-512.png", "./paypal-qr.png"];
const LIB_HOSTS = ["cdn.jsdelivr.net", "storage.googleapis.com"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(SHELL).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== SHELL && k !== LIBS).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  if (url.origin === location.origin) {
    e.respondWith(fetch(req)
      .then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(SHELL).then(c => c.put(req, copy)); }
        return res;
      })
      .catch(() => caches.match(req).then(hit => hit || caches.match(req, { ignoreSearch: true }))));
    return;
  }

  if (LIB_HOSTS.includes(url.hostname)) {
    e.respondWith(caches.open(LIBS).then(async c => {
      const hit = await c.match(req);
      if (hit) return hit;
      const res = await fetch(req);
      // Plain <script> loads come back opaque (no CORS); they are still the right bytes to keep.
      if (res.ok || res.type === "opaque") c.put(req, res.clone());
      return res;
    }));
  }
});
