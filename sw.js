const CACHE_NAME = 'uparapp-studio-v1';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/styles.css',
    '/suite.js',
    '/manifest.json',
    '/upartrivia/index.html',
    '/upartrivia/styles.css',
    '/upartrivia/app.js',
    '/uparpuzzle/index.html',
    '/uparpuzzle/styles.css',
    '/uparpuzzle/app.js',
    '/upargrade/index.html',
    '/upargrade/styles.css',
    '/upargrade/app.js',
    '/uparwheel/index.html',
    '/uparwheel/styles.css',
    '/uparwheel/app.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
        )
    );
    self.clients.claim();
});

// Estrategia Network-First: siempre trae la última versión de Vercel si hay internet, o usa caché si estás sin señal
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});