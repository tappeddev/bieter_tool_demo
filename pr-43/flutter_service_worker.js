'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"manifest.json": "0f1656b805cff5a438b665d9a12d2998",
"index.html": "e8a915c075c82187ecc920afb628da91",
"/": "e8a915c075c82187ecc920afb628da91",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "09af7dfa633e096f4735ebf092e72685",
"assets/assets/icons/home.svg": "f47ee7a1017b4d9dee6aeced874b354a",
"assets/assets/icons/error.svg": "20b1fec819559807d993f0379376a6c8",
"assets/assets/icons/delete.svg": "57cbea2af9b3dd36535213108b3b7e6b",
"assets/assets/icons/upload.svg": "ec19bc5326f5802ac921fad21a6473d5",
"assets/assets/icons/file_search.svg": "9d1e28eea5cbc522780161d6620eddc5",
"assets/assets/icons/folder.svg": "5a090e5850f8fc85b2432658595c42d8",
"assets/assets/icons/folder_delete.svg": "587bb2e54606a77522ff9b6d4fe29d0b",
"assets/assets/icons/change_circle.svg": "292fda77d7bbbf0924630f89d5b0c129",
"assets/assets/icons/folder_success.svg": "5f0d5ccf6272da75fd9cd72af8cba60c",
"assets/assets/icons/folder_open.svg": "798091bef41a357b357ba3c0ac87d3c1",
"assets/assets/icons/folder_filled.svg": "10d5250c27a35952fc9c04cd3a65865c",
"assets/assets/icons/chevron_right.svg": "944956e559001d86a88eedad9822f654",
"assets/assets/icons/keyboard_arrow_right.svg": "8ba72da292898fead92d68cfa3bfc481",
"assets/assets/icons/vertical_align_bottom.svg": "d212ed01643fd3d08f73e22fbc7a8039",
"assets/assets/icons/document.svg": "74de3552619d0ca5416637a6804685aa",
"assets/assets/icons/file_export.svg": "2502d37855524724efab451af4f53c96",
"assets/assets/icons/forum.svg": "fcde7d477958a0ee9e7947001c6b62f3",
"assets/assets/icons/warning.svg": "0b53645b5e64795cd34562e0106bf187",
"assets/assets/icons/check_circle.svg": "586224d0013a6906d3ef2037bfc03e70",
"assets/assets/icons/info.svg": "fe6e98e101391da2a40b82ff9044a11b",
"assets/assets/icons/move_item.svg": "0bee471634b87846432c2d1ad2760c76",
"assets/assets/icons/help.svg": "89114b3724df87b36db91521b52320fa",
"assets/assets/icons/close.svg": "e558403533ae4c82a6c574f589dfc026",
"assets/assets/icons/file.svg": "b20833b969db83290720247791d26cd6",
"assets/assets/icons/arrow_right.svg": "c7540cec44d7f47d483e9edf1ea7c9ab",
"assets/assets/icons/circle_logo.svg": "833fa2bcb54c6bae27d5a9d030c71e51",
"assets/assets/icons/right_panel_open.svg": "76cd92fed27ec15f4a22475924f790a7",
"assets/assets/icons/check.svg": "accaa05328d9039a6f9bc2630505ec09",
"assets/assets/icons/logout.svg": "c1c23c2f5074ef346b9dcf6ccd309823",
"assets/assets/icons/add.svg": "fcdce523369fb97be98324c5dfdf3f20",
"assets/assets/icons/close_small.svg": "7b9a9310a4cad7ffc5403287cc29f942",
"assets/assets/icons/dashed_border.svg": "b54353c31c4500a3c91cb57a8cfda5e0",
"assets/assets/icons/table_edit.svg": "73504801c248bad2afc419265d315cb7",
"assets/assets/icons/edit.svg": "fbf7f81cba8c96eb30309f1f184ca55a",
"assets/assets/icons/info_filled.svg": "82b829009c34e762d4719ad47cff7308",
"assets/assets/icons/check_small.svg": "a28a4ad9a5d48ff54a07db219f21f8a1",
"assets/assets/icons/settings.svg": "c1588189c57976745c937772d45dc48d",
"assets/assets/icons/arrow_right_alt.svg": "d87bb8f5773d7238dececef26e95e010",
"assets/assets/icons/fact_check.svg": "4389f7159356d86a0c706724222f3b2d",
"assets/assets/icons/search.svg": "dc060e31d7fa297e6ca3e0aa541d1ebf",
"assets/assets/icons/menu.svg": "b0fdd0ebb92f9c749d3105cfc1b2b1a1",
"assets/assets/icons/download.svg": "cc7b0ecaf70db0fe4c94193e859b2e03",
"assets/assets/icons/more_horiz.svg": "8339c578a89a3ea06811feac407d4767",
"assets/assets/icons/home_filled.svg": "ca8a2199a94a591760a8e936f3514d48",
"assets/assets/icons/file_save.svg": "430dc75a6a7d7792adee31adfe28c276",
"assets/assets/icons/file_success.svg": "d2366a8714220e5ac13c2421d8b0e976",
"assets/assets/icons/keyboard_arrow_down.svg": "b1493b78d0180c32133a74093a1b41ff",
"assets/assets/icons/account_circle.svg": "c6e40ae31668a04b52a15c628d52b0e3",
"assets/assets/icons/location.svg": "6d195b12ee184f6926485702559a108d",
"assets/assets/icons/more_vert.svg": "f0e5a67586c5293a6615debbc59ef61f",
"assets/assets/icons/file_error.svg": "258e7064d49819c68b0df7d55ee2e296",
"assets/assets/icons/publish.svg": "f30fb2d5f24e57c7dcbad1bf5c3d99b8",
"assets/assets/icons/settings_filled.svg": "46558b99e649563ee854febfcd23810a",
"assets/assets/icons/wrong.svg": "7d9759c79ccf735fe6ccf90d5b2a6473",
"assets/assets/icons/save.svg": "1d00039bd1bcf160cc1baab4bd83e947",
"assets/assets/icons/folder_error.svg": "4857e90bb8bfb5b36830af440cbd4234",
"assets/assets/fonts/Roboto-Regular.ttf": "303c6d9e16168364d3bc5b7f766cfff4",
"assets/assets/fonts/Roboto-SemiBold.ttf": "dae3c6eddbf79c41f922e4809ca9d09c",
"assets/assets/fonts/Roboto-Bold.ttf": "dd5415b95e675853c6ccdceba7324ce7",
"assets/assets/fonts/Roboto-Medium.ttf": "7d752fb726f5ece291e2e522fcecf86d",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "9b12f54307cf67b9cac2d8f0e2f7abdc",
"assets/packages/aad_oauth/assets/msalv2.js": "7fb1a65e14acf2e247a813225eed3ac8",
"assets/FontManifest.json": "e83983dce1b86afb382d68dd3d139de5",
"assets/AssetManifest.bin": "ebd625b69c684377596ed4bcc8319b13",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_bootstrap.js": "8657fff2e915b83b594523a7ceadfaf1",
"version.json": "9d5ef0910c9943eceed62e057ed86c45",
"main.dart.js": "0eb716c0524749a7e2a0212195048022"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
