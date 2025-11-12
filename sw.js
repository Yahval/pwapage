const CACHE_NAME = 'cache-1';
self.addEventListener('install',e => {
    const cachePro = caches.open(CACHE_NAME).then(cache => {
        return cache.addAll([
            '/',
            '/index.html',
            '/css/index.css',
            '/img/background-image.jpg',
            '/img/cap-anime.webp',
            '/img/cap-manga.webp',
            '/img/FotoPerfil.jpg',
            '/onepiece.jpg',
            '/js/app.js',
            'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
        ]);
    });
    e.waitUntil(cachePro);
});
self.addEventListener('fetch', e => {
    //e.respondWith(caches.match(e.request));
    const respuesta = caches.match(e.request).then(res => {
        if(res) return res;

        console.log('No existe', e.request.url);
        return fetch(e.request).then(newRes => {
            caches.open(CACHE_NAME).then(cache => {
                cache.put(e.request, newRes);
            });
            return newRes.clone();
        });
    });
    e.respondWith(respuesta);
});