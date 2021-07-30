'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e04e86ed943e52e94732881ba5835da2",
"index.html": "6d63b0adbef501f29e35341dd1575b6a",
"/": "375689c0e7ae101eebefca2cde986456",
"main.dart.js": "d908e034f1b09bd9aefcd062a4326c9e",
"SmartGate/version.json": "e04e86ed943e52e94732881ba5835da2",
"SmartGate/index.html": "375689c0e7ae101eebefca2cde986456",
"SmartGate/main.dart.js": "d908e034f1b09bd9aefcd062a4326c9e",
"SmartGate/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"SmartGate/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"SmartGate/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"SmartGate/manifest.json": "eb8004c49de6313e52ade4f2fdd8c50a",
"SmartGate/.git/config": "0fc16873bcbdb5b4e5bf06535ddadd97",
"SmartGate/.git/objects/6f/d8e1e84d22053e06f560e3e6aa83804e9c1d93": "7824e624c55abf6b0d1e01cdfa5162fa",
"SmartGate/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"SmartGate/.git/objects/9e/adc8c08ae6e8395fb33cf21f5d1a8d59e36900": "cf534158d69be1465e55e8c6b56e4b11",
"SmartGate/.git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
"SmartGate/.git/objects/34/1f24e60af390c0018dd41594af19f093b39853": "f6f26023aa28ac73d74092fe86dfede1",
"SmartGate/.git/objects/9c/abfa3fb4f262ec433567d8bd88d9e037f26fc3": "5c98e55879f23d280151013f5d12d898",
"SmartGate/.git/objects/b4/83fbcf050c9f2424265ef80046bc5eb77f779f": "c6eef0886a13ba79ddeaf0a130d79195",
"SmartGate/.git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
"SmartGate/.git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
"SmartGate/.git/objects/e2/b0dd462f1d65b7a567a4d6398b6e32f10e3222": "f0b72cff3f7888d4aae15f6824724624",
"SmartGate/.git/objects/c9/b20f100f4097977d4ea6ed6ad9e1f9bec45db0": "6b474b93c34036e3601c64aeba6de051",
"SmartGate/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"SmartGate/.git/objects/4b/6ea064250e6cf1f21970081f7ab7381a079999": "0f6e1bd5246c1da2b897be805b1bf191",
"SmartGate/.git/objects/pack/pack-9bfc4362919a8b93d6b2eef5f67e5033ef240a5e.pack": "a25aa8d9f95567350d75aba7622812a2",
"SmartGate/.git/objects/pack/pack-9bfc4362919a8b93d6b2eef5f67e5033ef240a5e.idx": "57f591b038ca0771aae17f3cd5f136fe",
"SmartGate/.git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
"SmartGate/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"SmartGate/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"SmartGate/.git/objects/6e/ff5eb82abf7bf16b375caa60b980971823a964": "e9b62bc2816cbabc7f10594a55db45b6",
"SmartGate/.git/objects/5d/50e7d5bab1175d7a96d27f602af06add6085b9": "97a18a7292fbea3605f4f8c171a975b5",
"SmartGate/.git/objects/96/2935ecc7a3ad3e3bd89229479b649d1bba6018": "590d9a6c75106dce6855904e2b529422",
"SmartGate/.git/objects/bf/3b019a93c75413def8f6eb0c9749e94364f8b7": "2c2e39a91da356a33c6f650687734870",
"SmartGate/.git/objects/a9/6ce77e78e5430fddec59795209f3840bc29cc1": "94d103788caa2d76c4023b56e1e2d53b",
"SmartGate/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"SmartGate/.git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
"SmartGate/.git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
"SmartGate/.git/objects/e9/ee6977ba88be8da70583603962d926121a5b26": "df9b1c138cf6b0baf763b30bcac48c9d",
"SmartGate/.git/objects/e9/f1ed895167978fc90234b62fbde05b1040ddfd": "86326bdb734ef28902ef143415ed5286",
"SmartGate/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"SmartGate/.git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
"SmartGate/.git/objects/49/bff548554cc2643e716d7db2b37f2da87e00e6": "8c825e7a80daf75977474d6638ce258a",
"SmartGate/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"SmartGate/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"SmartGate/.git/logs/HEAD": "2806a17fb5ff74920d666474e49da89d",
"SmartGate/.git/logs/refs/heads/main": "2806a17fb5ff74920d666474e49da89d",
"SmartGate/.git/logs/refs/remotes/origin/HEAD": "2806a17fb5ff74920d666474e49da89d",
"SmartGate/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"SmartGate/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"SmartGate/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"SmartGate/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"SmartGate/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"SmartGate/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"SmartGate/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"SmartGate/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"SmartGate/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"SmartGate/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"SmartGate/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"SmartGate/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"SmartGate/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"SmartGate/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"SmartGate/.git/refs/heads/main": "9d50f87b52de1d43ec17cbe2f0a8c393",
"SmartGate/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"SmartGate/.git/index": "c3f09c530a46cf839b6bc48f1ec648d6",
"SmartGate/.git/packed-refs": "6c72a8fef3973f86cefcaed6b96162d7",
"SmartGate/.git/FETCH_HEAD": "1f6cbea497fc64cbf0b2a9f7c6b4b402",
"SmartGate/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"SmartGate/assets/NOTICES": "bde9ee889e7cdb2c908965b81d635c52",
"SmartGate/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"SmartGate/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"SmartGate/assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "eb8004c49de6313e52ade4f2fdd8c50a",
"SmartGate_v/README.md": "628fb38f532675fa620afd62e6325236",
"SmartGate_v/.git/config": "5ae9c05bedf7add098d1a8046f515dea",
"SmartGate_v/.git/objects/pack/pack-1b12643475c3d4886e38adb65994d99829e26afb.idx": "807b3af068d3a0902503e7018528b725",
"SmartGate_v/.git/objects/pack/pack-1b12643475c3d4886e38adb65994d99829e26afb.pack": "29115a245c6f4bac5080736c382077e6",
"SmartGate_v/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"SmartGate_v/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"SmartGate_v/.git/logs/HEAD": "7ab9a7e522813ba0f63e68cd2a540860",
"SmartGate_v/.git/logs/refs/heads/main": "7ab9a7e522813ba0f63e68cd2a540860",
"SmartGate_v/.git/logs/refs/remotes/origin/HEAD": "7ab9a7e522813ba0f63e68cd2a540860",
"SmartGate_v/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"SmartGate_v/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"SmartGate_v/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"SmartGate_v/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"SmartGate_v/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"SmartGate_v/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"SmartGate_v/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"SmartGate_v/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"SmartGate_v/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"SmartGate_v/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"SmartGate_v/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"SmartGate_v/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"SmartGate_v/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"SmartGate_v/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"SmartGate_v/.git/refs/heads/main": "79e747387bccff475f1e2779f76346cd",
"SmartGate_v/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"SmartGate_v/.git/index": "5a2f236663c321beff1500d0c8c7ff53",
"SmartGate_v/.git/packed-refs": "ee8bfbf6e21a8bdd29e845be7bfc54ea",
".git/config": "ee13aaa2a2019ff7f1ab7965d5484dbb",
".git/objects/6f/d8e1e84d22053e06f560e3e6aa83804e9c1d93": "7824e624c55abf6b0d1e01cdfa5162fa",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/34655e21d5d54e28745b40fb576598a0dc188c": "c7e34874bd1549ab3190590680b825af",
".git/objects/9e/adc8c08ae6e8395fb33cf21f5d1a8d59e36900": "cf534158d69be1465e55e8c6b56e4b11",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/56/cb34b7f8bb9dfda46cb113ab3ed7677518d641": "e428c355ab4ee88e955cdd6288a897d4",
".git/objects/94/30aea73a50de03588e1ebb2a868a0eb6f1853d": "044fbed3f31750a89ef5566ecccf8e1d",
".git/objects/34/1f24e60af390c0018dd41594af19f093b39853": "f6f26023aa28ac73d74092fe86dfede1",
".git/objects/ad/3b34a898bcd55574a85ab5cb89d46bd3cb090c": "6b6c98f98a39e500b71e1dc10878ac8b",
".git/objects/d0/08fd33e68bb2fed5dd9151655bda2c8f0bc310": "b8e41402ede024959622ff014a78c988",
".git/objects/bd/8ec41efe3d140bd9c7c89c06cab5d96391315c": "a4291d60136174068dd2871c7258c305",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/b0dd462f1d65b7a567a4d6398b6e32f10e3222": "f0b72cff3f7888d4aae15f6824724624",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/ff5eb82abf7bf16b375caa60b980971823a964": "e9b62bc2816cbabc7f10594a55db45b6",
".git/objects/5d/dc9ea8e83be62549895f4e81c08a80b99f30d8": "04b3aa16bb0d963d0d96247fbc1646ef",
".git/objects/91/04ba05b40a05786007c6bf7915da5437d911d1": "3c57c89a377df071d821c2b99dc17aa3",
".git/objects/3f/bf65d1e4bc1db7fcabb214f108555782863b14": "ed40d1984b1799029b03aadebe61052b",
".git/objects/bf/3b019a93c75413def8f6eb0c9749e94364f8b7": "2c2e39a91da356a33c6f650687734870",
".git/objects/ba/5199ecbb2ca02aa35e22d15137ff38e960cdcd": "d1193671d1b2eadcadad7861c24c82b1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/ef116d224d8f796abe72ecfef9271f9d79f069": "a633ba18bbfd84d0c0ea0a4dd6b59348",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/f0/ca7ef109dbe0cff5fe37f273203b461cb73a40": "1e3ab8f7e741ee96bf902c2801e538ae",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/13/6684c56090f83193f6633764607ffcca359fdf": "f8cc827d112e2a6e89026d5ace8cef62",
".git/objects/7f/c358a3c0d9d977e1838e63f86c4139444389f8": "05128cea4b0e4d9735dbf113bc4bc75c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "740eb0df7c1f8138062babcb52f91d17",
".git/logs/refs/heads/master": "fe183b5e759cc24e221d573e71239f66",
".git/logs/refs/remotes/origin/master": "6926f36097fbbae82b0e90f41f9b1e61",
".git/logs/refs/remotes/origin/main": "0455f548cca648fd4b331ee08267f386",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "69bac22dcf64b5a4423dd05ea9efdf9f",
".git/refs/remotes/origin/master": "69bac22dcf64b5a4423dd05ea9efdf9f",
".git/refs/remotes/origin/main": "79e747387bccff475f1e2779f76346cd",
".git/index": "5bfa6635ed5c830795704c463c872e10",
".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/FETCH_HEAD": "f1a5c4d5ecfcf045f49e1847ad9e0263",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "bde9ee889e7cdb2c908965b81d635c52",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
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
