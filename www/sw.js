const CACHE_NAME = 'astro-atlas-v685';
const ASSETS = [
  '/',
  '/index.html',
  '/lunar-data.js',
  '/custom-messages.js',
  '/manifest.json',
  '/knowledge-graph.js',
  '/knowledge-graph-part2.js',
  '/knowledge-graph-part3.js',
  '/ai-adapter.js',
  '/learner-profile.js',
  'https://cdn.jsdelivr.net/npm/astronomy-engine@2.1.19/astronomy.browser.min.js'
];

function clearEverything() {
  return self.registration.getNotifications().then(notifications => {
    notifications.forEach(n => n.close());
    var p = Promise.resolve();
    if ('clearAppBadge' in self.navigator) p = p.then(() => self.navigator.clearAppBadge().catch(()=>{}));
    if ('setAppBadge' in self.navigator) p = p.then(() => self.navigator.setAppBadge(0).catch(()=>{}));
    return p;
  }).catch(()=>{});
}

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => clearEverything()).then(() => self.clients.claim())
  );
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    clearEverything().then(() => {
      var url = '/';
      if (e.notification.data && e.notification.data.dreamAlarm) url = '/?dreamAlarm=1';
      if (e.notification.data && e.notification.data.dailyQuiz) url = '/?dailyQuiz=1';
      if (e.notification.data && e.notification.data.interpret) url = '/?interpret=' + encodeURIComponent(e.notification.data.interpret);
      return clients.matchAll({type:'window',includeUncontrolled:true}).then(cls => {
        if (cls.length > 0) { cls[0].navigate(url); return cls[0].focus(); }
        return clients.openWindow(url);
      });
    })
  );
});

self.addEventListener('notificationclose', e => {
  e.waitUntil(
    new Promise(r => setTimeout(r,300))
      .then(() => self.registration.getNotifications())
      .then(ns => { if (ns.length === 0) return clearEverything(); })
  );
});

self.addEventListener('message', e => {
  if (e.data && e.data.type === 'CLEAR_BADGES') {
    e.waitUntil(self.registration.getNotifications().then(ns => ns.forEach(n => n.close())).catch(()=>{}));
  }
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
  if (e.data && e.data.type === 'DREAM_ALARM') {
    e.waitUntil(self.registration.showNotification(e.data.title, {
      body: e.data.body, icon: '/icons/icon-192.png', badge: '/icons/icon-192.png',
      tag: 'dream-alarm', requireInteraction: true, vibrate: [300,200,300,200,300],
      data: { dreamAlarm: true }
    }));
  }
  if (e.data && e.data.type === 'SET_BADGE') {
    var count = e.data.count || 0;
    e.waitUntil(count > 0
      ? (self.navigator.setAppBadge ? self.navigator.setAppBadge(count).catch(()=>{}) : Promise.resolve())
      : (self.navigator.clearAppBadge ? self.navigator.clearAppBadge().catch(()=>{}) : Promise.resolve()));
  }
});

self.addEventListener('fetch', e => {
  const url = e.request.url;
  if (url.includes('accounts.google.com') || url.includes('googleapis.com') || url.includes('open-meteo.com') || url.includes('earthquake.usgs.gov') || url.includes('upload.wikimedia.org')) return;
  const isCore = url.endsWith('/') || url.includes('index.html');
  if (isCore) {
    e.respondWith(fetch(e.request,{cache:'no-store'}).then(r => { caches.open(CACHE_NAME).then(c=>c.put(e.request,r.clone())); return r; }).catch(() => caches.match(e.request)));
    return;
  }
  e.respondWith(fetch(e.request).then(r => { caches.open(CACHE_NAME).then(c=>c.put(e.request,r.clone())); return r; }).catch(() => caches.match(e.request)));
});
