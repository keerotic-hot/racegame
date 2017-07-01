var dataCacheName = 'pwagame';
var cachedName = 'pwagame';
var base = '';
var filesToCache = [
  base+'/',
  base+'/index.html',
  base+'/css/style.css',
  base+'/js/firebase-init.js',
  base+'/js/three.min.js',
  base+'/js/FBXLoader.js',
  base+'/js/zlib/inflate.min.js',
  base+'/js/game.js',
  base+'/js/game/utils/time.js',
  base+'/js/game/assets/skybox.js',
  base+'/js/game/scenes/mainmenu.js',
  base+'/js/game/scenes/gamestage.js',
  base+'/assets/running2.fbx',
];

self.addEventListener('install', e => {
  console.log('[ServiceWorker] Installed')
  e.waitUntil(preCache())
})

self.addEventListener('fetch', e => {
  console.log('[ServiceWorker] Serving the asset.')
  e.respondWith(fromNetwork(e.request, 1000).catch(() => {
    return fromCache(e.request)
  }))
})

const preCache = () => {
  caches.open(cachedName).then((cache) => {
    console.log('[ServiceWorker] Caching app shell')
    return cache.addAll(filesToCache)
  })
}

const fromNetwork = (req, timeout) => {
  return new Promise((resolve, reject) => {
    let timeoutId = setTimeout(reject, timeout)
    fetch(req).then((res) => {
      clearTimeout(timeoutId)
      resolve(res)
    }, reject)
  })
}

const fromCache = (req) => {
  return caches.open(cachedName).then(cache => {
    return cache.match(req).then(matching => {
      return matching || Promise.reject(new Error('no-match'))
    })
  })
}