if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js');
}
if(window.caches){
    caches.open('Puebes-1').then(cache => {
        //cache.add('/index.html');
        cache.addAll([
            '/index.html',
            '/css/index.css',
            '/img/background-image.jpg',
            '/img/cap-anime.webp',
            '/img/cap-manga.webp',
            '/img/FotoPerfil.jpg',
            '/onepiece.jpg'
        ]).then(() => {
            //cache.delete('/css/style.css');
            cache.put('index.html', new Response('Hola Mundo'));
        });
    });
    /*
    caches.open('Puebes-2');
    caches.open('Puebes-3');
    caches.has('Puebes-2').then(existe => console.log(existe));
    caches.delete('Puebes-3').then(eliminado => console.log(eliminado));
    */
}
caches.keys().then(keys => {
    console.log(keys);
})
