'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "16ec07ff1a7451275f7286035ba8c84d",
".git/config": "cb04c200d83d76ec0a4e7f9fdac1104a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "482458b227897585c2bac8f33b90e23d",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f3bb1a2672c459638b15c2004fb799f0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5acafac9495d5f44b0f489fa55fa8c22",
".git/logs/refs/heads/master": "0b45effade04d557e82361fe4a14b4fc",
".git/logs/refs/remotes/origin/master": "546e1c23bff4b60ee4af20a448769df8",
".git/objects/03/7ad47f870a001b44b4477cab3525ef08cc5cb3": "e24921a042544fdcf3d9f373db0130b8",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/1b/4fc238fba2cafb51fd917569d440b91c112e0d": "bacf21576526fc157bead9ed5613fe88",
".git/objects/1e/165232d1e8011bb9be9d9454bde40c30427af1": "222e0543c69df0e35336f6906f0f4633",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/33/04173cfab37ccd0636ec375d24b3f09d357aef": "66cebb3da0fc6a407b13213821409ca6",
".git/objects/42/5fc57d84ebd1aa76194afa4d7e299ed0978f54": "5c4080907d5dd6aec4c092233253420a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/768264692a3e524624a45df25bf40f57230c9f": "2c29412137789c37c1922a670f816a9a",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4c/d02621c01612a9e35dce0773138804559b93e6": "c4aedab4b5b5075f838d4a772d16ad29",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/54/64e18765ea16d17652804bb8e50dc47c44f13c": "a0719f7ded95f6ba5d1c0c5532f13db7",
".git/objects/59/e068359f4b9dda12819a2fb672e1138a75c464": "ddba9050d1ec98168370e3e637d21af6",
".git/objects/66/7b2d48a988acb9272eb0757197b5ea3904168d": "a484df887754a2a8b16d1f0ac7c7bc31",
".git/objects/6b/2870467848e512932e959a273709d66a36131d": "ab3d6a0a162f45712c98321a145567a2",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/2b9ba77d094ade195a5e31f6c01e04dd9cd64c": "db66d18f20e5aa09437dafbc02fde154",
".git/objects/7e/31b04d5f5f7bb93fdd34cdf836bf406eee304d": "72f67ac913e4f8a791b51915f33999e0",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/87/01542ded2f8352f5e6bda0e7ab7286d6afac32": "810bca145094b20857157984b2b43e27",
".git/objects/87/13d52dcaa96b8d6f4a5ac5edab46800037b087": "0060fe6bdb03d77fe8c6d60eb35546a5",
".git/objects/8c/d297c39097a4e7c6cb03301d28859eb618853e": "955a2d04d9dae4efb37ea694397f4feb",
".git/objects/8d/ab0f0b850a907313950b3358cf82f7889c101a": "cde48dd859193fc418d62560cf6c89d2",
".git/objects/9e/b388799a61b4b4909a56258bd2e18500b9382f": "09084897889c45ac0d5e42a5ee2ff511",
".git/objects/a1/31b11a2a5cb917859c551435d85d1c75fc5732": "114800ab81d69089e84fa1455afe403a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/03e15ce82cee67e77e70150045da9611e26338": "c338dd64d0af8dafaa2e4c46902775b3",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/c1/bf34aa252273392f20219fa621accc31a66594": "f373cc4b5349b7a5e6289afd400e6100",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c6/98a1e1b8870af043d03b0c273822faba781a58": "601ed89ec933b441e878378b5bbe3600",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ea/2a8e8879c5a64bdb9130655ad580b067ff39ce": "c34c2e9736ec5658db9bcd090c03a155",
".git/objects/ec/e04778cc192076ee1f2c16c1c00b5c12062e39": "6a7879a17e2da654afe2ca1889caebdd",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f2/950b52a3253d97cb3c33fd90b007589598ec6e": "d46bdad07806bf939893258d9f3cb172",
".git/objects/f9/337740e6f70321cdfb6f808de00883fb68e1a1": "39d442b1e954c73cbbbd4679f88f0c6a",
".git/objects/fb/bba4b2aef69db3382a65931b880a9321ea0ff0": "ece2dd561afff04dc5ac1ef23b12310a",
".git/objects/ff/43b8058ae8f4ccb261376ba7df1a21f1f3b869": "1c12021012bad01cba67759a35c42557",
".git/ORIG_HEAD": "c7552da114a2ab6344b9bd40bcf37c06",
".git/refs/heads/master": "c7552da114a2ab6344b9bd40bcf37c06",
".git/refs/remotes/origin/master": "c7552da114a2ab6344b9bd40bcf37c06",
"assets/AssetManifest.json": "0f67dabd52ae102ea180685e09580d59",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/download.svg": "bb4912898a2077c7dc9c786aa36b8d8c",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/linkedin.svg": "a157958e66512ab958dfb109701270fc",
"assets/assets/icons/twitter.svg": "d5a30d454d6f671ae08a306efb87f0f9",
"assets/assets/icons/youtube.svg": "e40c4b07cf1932445470ca59a5ed9c2d",
"assets/assets/images/background.jpg": "a12cb8c290c729cfebed3cbaa9e65ede",
"assets/assets/images/dp.jpeg": "8ad5c74d51c4ac1a9387d9dfb9149e81",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/loading.gif": "05909501f4a6e300442458b93ec44579",
"assets/NOTICES": "af12d6eedd5234d90f4cc534f91befb8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"icons/android-chrome-192x192.png": "eb65a94d9a7dd7ebada31ed5fad01bf8",
"icons/android-chrome-512x512.png": "5ebc0dfe153b0027d9c4ad5f8aa4711a",
"icons/apple-touch-icon.png": "21c7dd8bedef8fb747d8665e7d88a548",
"index.html": "18631ec2956c15f79f22570394da8a7d",
"/": "18631ec2956c15f79f22570394da8a7d",
"logo.png": "eb65a94d9a7dd7ebada31ed5fad01bf8",
"main.dart.js": "766df695ce317906ee111fd383a36d34",
"manifest.json": "882a2213493df54f5d7223716c841e33",
"version.json": "cc1fa9cce5af273c0909d105387fee89"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
