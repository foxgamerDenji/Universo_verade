const CACHE_NAME = "universo-verade-v1";
const ARQUIVOS = ["./", "./index.html", "./manifest.json", "./logo.png"];
self.addEventListener("install", (evento) => {
  evento.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ARQUIVOS)));
});
self.addEventListener("fetch", (evento) => {
  evento.respondWith(caches.match(evento.request).then((resposta) => resposta || fetch(evento.request)));
});
