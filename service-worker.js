const CACHE_NAME = "app-yoo-v6";

const filesToCache = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./manifest.json",
    "./images/icon-192.png",
    "./images/icon-512.png"
];

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );

    self.skipWaiting();
});

self.addEventListener("activate", function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames
                    .filter(function (cacheName) {
                        return cacheName !== CACHE_NAME;
                    })
                    .map(function (cacheName) {
                        return caches.delete(cacheName);
                    })
            );
        })
    );

    self.clients.claim();
});

self.addEventListener("fetch", function (event) {
    if (
        event.request.method !== "GET" ||
        new URL(event.request.url).origin !== self.location.origin
    ) {
        return;
    }

    event.respondWith(
        fetch(event.request)
            .then(function (response) {
                if (!response || !response.ok) {
                    return response;
                }

                const responseCopy = response.clone();

                caches.open(CACHE_NAME).then(function (cache) {
                    cache.put(event.request, responseCopy);
                });

                return response;
            })
            .catch(function () {
                return caches.match(event.request);
            })
    );
});