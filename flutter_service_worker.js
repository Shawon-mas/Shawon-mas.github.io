'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "657776efb39c88d1c642990f8f097c31",
".git/config": "98cd60bcf9739d3a99bd1390aecaa1ac",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7ac693d64a14ca693099652432ca19f4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
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
".git/index": "e8f98d26d0bc65af66203e5e4ad59371",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f81b9e678f68d75e43839bd818a6c7d2",
".git/logs/refs/heads/main": "95a8594eb7d4ce6b3742003055cd0762",
".git/logs/refs/remotes/origin/main": "34d0037d605ac02ca460cc984ee96b45",
".git/logs/refs/remotes/origin-push/main": "dd979aa559596948cbe0699202c6eae2",
".git/objects/00/872401d541499f41b800154c6bfa5c529f8e29": "16076fc3308dbaba6d9a780b8148708a",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/0a/33854f32ca2654e912199386475c9311026861": "562fac2014e455c2df4a433139f09066",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/10/2de65dc9ed651dd2e1ab2f4bf6099636177fd1": "4c2cd8540b156c50e7f3aeb2d485bdd8",
".git/objects/11/88b194f603dd19261181ebf3d48b50b2f1ec49": "aaf4cce1f2bcdfbe2ee4c3ee42a58bbe",
".git/objects/12/0532e90495c6065c8eaeec630383b80663921e": "85b262aeb96fe13b86a12c49bfa0f5ed",
".git/objects/17/7ab534d0100c65eb8c77b316bf54c6e1391442": "38679875de908be2706617ee139936f1",
".git/objects/18/ade7fd7f842a8697b126f9fb316bf27d647c82": "55fb296a876e28c270310b54a04ea376",
".git/objects/1a/a5fe0ad54e7463a4021b8d4fd6a749f5993799": "b27d05a70280df63c50d5148ca999c38",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/56867e70c434d8dff86a85ca09e6d942a38257": "27d844aa56b9fd88c276a37ccf62cee6",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2b/5731642202edfcab2b62e45bf164ead6620c21": "0b70a032067b4121f8bd7d1a1dc6a04b",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/52783cf094b50e73db42eb73229b197d8b4df8": "6a45ae36a11e25001a5ac2dc01a63381",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3c/0e2a3ae40a85baf8b3dd8215b3a8b7363cc4dd": "3b1f40f97033bec5d871e63e7eb7a889",
".git/objects/3e/58ee624f8fe9828a80767c2916b0cb74b4f326": "cf5fe8695e294ce669d695ae7d38fbcc",
".git/objects/3e/ac245fee4d1adbe97ae3da9706d9547b97b307": "737570cbd4d22bd7fce326e4020344c3",
".git/objects/43/a373284aa89e444e61e1358808ec99ca982d77": "2c2c76ad858754034c138dd2e5e18cd6",
".git/objects/4e/38d9fcffcd665957a99d751dc683fdde0e1cad": "646e717bee3a270a473e8e88bf179d2f",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/53/5a67befe3102c198ab7535042b1182fe8a9417": "2877dd706b7768d1ebcfd93d69a20124",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/2a350abba8ef2504db6e3f3a87d2b2ab3dcf25": "b6ae4070d7350d8fffcb07fc63e3d9f9",
".git/objects/5c/cbd57f33068e42f131acfa023c4d3335ab3b9a": "052f7b4d8deca70c7be2cc856bb3fb0b",
".git/objects/5f/51b5298215e5d2022d4c6e65c76707a7dc996f": "850cf59ff80e12d95e708abe231a5638",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/6c/380f467a1ca94b64d753c9fb660c969640e045": "2cebf43cc47176029fff47b5fd505e88",
".git/objects/6d/e2628b648d26f4fba4e94fbbaa8385df6c8967": "f1bb9a1a6a9242438109ce85e9a0ceae",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/71/5fdde0eab0fc3eddb2e60adc6646f371866c02": "ea3e05e36d35580aee14845ef646256c",
".git/objects/71/8f9002acd48968775e28b4d84f4cbdb41bffb7": "94877fab597436ce2083915b5cbd0def",
".git/objects/7d/ec35d7bdeae5b3eb312f0026a27d4b56d57238": "93e2556180c257d7685c6539eb7d6d46",
".git/objects/86/1f53834ff0853811200afc5a665e0cf566965b": "44a86056787595d41e664719e2a26577",
".git/objects/86/bb971747f241c1ddcd4e1e99efb09988736db1": "173f1c85e49a6e92cf391fc25f68feba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/9b/1643d80f0507f4978bcf638df2edf132082ff5": "98a4397c5a7fbc4a769cb08563c787e6",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/c42b4b11164335701fa33f17e3028777180293": "a63f21b98b052f11b14a65e50385cab3",
".git/objects/b3/1ca9e59e47225485d1180e2e353aacb4b59148": "a320704733daded4bf75e3f5371bdc90",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c5/c59359c239c0f117a306c5101d1508b4be69de": "3f78e0594810d26f1db29d9940588e6a",
".git/objects/c8/2ecdc53a10172fa029843de91b14d76b1827d3": "f134beea7760eda2ecd4440c203fccbc",
".git/objects/ca/12a6611a38368c96a5aa4e6d2b90b0375968ca": "8c3b5bdd28ca5615fe297c818fbaeea2",
".git/objects/ca/a823bb281ffd56113d17fad6d20b907b205977": "398a4542f9d932103ad7b0f3afda644a",
".git/objects/cb/2b6536337c067ea6bee4408cc7fcaec1e8bcd1": "df34b060a4374ea62bd9c3ceaca03ff0",
".git/objects/d1/acdacda229acb75dd2144e6a21fed73e54ff53": "2f6cd9a6e0287d4230695d5c6c7ecfbe",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/01ca841d7dad410a3ebc781340611f0ffcde73": "00263e89b47a59179c43c4f6b4a482c7",
".git/objects/db/75ff409c5038b88eea2bd2d718118de0437a18": "38c700b987052a0886938b6913fb51e0",
".git/objects/e0/6bb0baa4ecb17d48e23ac25c8d01c3e1defc2a": "c87ddd537749f7681d5dff707e4e7553",
".git/objects/e3/da950846a864862cd06d0a4194502262ae9991": "61bee0ad838d1767550d5bad66e83080",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/20819cfae124f3b2d1edd0b7c45753f0c430dc": "4b2243e2ac2feb69b796f1ce32e52b39",
".git/objects/ec/e6c0ffdb5a68c923d0931dc5054a71e296b18a": "9e06db8e7fc7187e277d347a19af85b8",
".git/objects/f1/ac8888fa6dd80e185041c2fd544720f2134bda": "63d537ebe76a31c0a0e8bfe855950bd5",
".git/objects/f4/63ccf3d9b4d461534ff5212d2ff9aff26c2bbe": "7ea34089249ba9893174035ceddd1e0b",
".git/objects/f7/537db6373361df0dda15112ed1cd387b1aa84f": "65b8691fd714085147586158b096c7b5",
".git/objects/fc/0f322e61617230621468a8090f25edb73110d5": "ecc6495fc2bada51dd28771bea5b58eb",
".git/objects/fd/4a07ce5fe0f765d26bf79fe3271125856988e1": "65acad41b3a3373799bf9bc3846273ef",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/f0075ac08044c8d918455c56d8693f7e0b1e2c": "b88d5db80650d9d64ed833bbf8fd0363",
".git/ORIG_HEAD": "d644f051520344d587c6451d387dffde",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/REBASE_HEAD": "874b5bfff3ae83aba3f71634bec3480c",
".git/refs/heads/main": "d644f051520344d587c6451d387dffde",
".git/refs/remotes/origin/main": "d644f051520344d587c6451d387dffde",
".git/refs/remotes/origin-push/main": "d644f051520344d587c6451d387dffde",
"assets/AssetManifest.bin": "7813bfd25899b16f3dae5ad2a2e84fdf",
"assets/AssetManifest.json": "a8818096236a1b37dc53c26368ec0cae",
"assets/assets/icons/icon.png": "1d2ec501ea37ebee751d82d3ba41f2c2",
"assets/assets/images/app1.jpg": "638c33cff726c595999900f1dca2bfd8",
"assets/assets/images/app2.jpg": "99633689a7fed901ef646d05d287aa3c",
"assets/assets/images/app3.jpg": "a3901ffb2de855be5ba18c0128d1235f",
"assets/assets/images/app4.jpg": "bcb881438cb60494c832e28ce99b289e",
"assets/assets/images/bg.jpeg": "c6449162dc3940daa640a43101cfd66c",
"assets/assets/images/developing.json": "5a04e81d55080df5fb48907491d784a9",
"assets/assets/images/headerBg.png": "5331321b4a088b429f4f10bc56e2b2b3",
"assets/assets/images/image1.png": "3b407060e4b698e20dc264319767e4ff",
"assets/assets/images/image2.png": "174d99f110cfb34da6d6da89f6136d5f",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "15849c7636ea7cacd69884e6d1cdfcfd",
"assets/NOTICES": "9151796aac0dce3df531907b868ada22",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"CNAME": "0adf8dc39794c9592b4c952522a621c0",
"favicon.ico": "254e5fc36067a8003542c36f3ba5035f",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7f210d0f2f299338c586039278cb2017",
"/": "7f210d0f2f299338c586039278cb2017",
"main.dart.js": "a045f294ce93cf63e8eb65c641323ea8",
"manifest.json": "8a9a1a0426d6a5b7ca32a8d0464367cf",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
