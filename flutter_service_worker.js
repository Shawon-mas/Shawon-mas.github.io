'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "33db7b2f65011d475a08bff4810a9965",
".git/config": "f4fd3a1bc56e0095de6dc46585cc98a4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c8c0ebcd728cc31483d85ee31fd0668b",
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
".git/index": "3a637a971e8e32876fd0470af862e6b6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cc8c5c99cb9dcbe88710fffed4e459b7",
".git/logs/refs/heads/main": "e6f39ef98b5c30e094666df3692ee9fd",
".git/logs/refs/remotes/origin/main": "8d06f9ec2577bd1d5c5976502f021273",
".git/objects/00/872401d541499f41b800154c6bfa5c529f8e29": "16076fc3308dbaba6d9a780b8148708a",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/05/243cda220b64cc4e24326e9f98f7871a53e474": "d477ea29cd92a318d208d42f3a1ca249",
".git/objects/07/fa8af4a193763006b6c0151807d947c8b7cdd9": "6e9430bfe87967d060ba07cab3db83ec",
".git/objects/0a/33854f32ca2654e912199386475c9311026861": "562fac2014e455c2df4a433139f09066",
".git/objects/0a/40f4bdc0b7f75cb71b48f8dead29c016f834ff": "7ff3b376d69eb1e3c18042939149d837",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0e/6eb967ca3677bd610209d060fcb28d94c66da9": "8518559627c1c75e5dad00e904a8cab6",
".git/objects/10/2de65dc9ed651dd2e1ab2f4bf6099636177fd1": "4c2cd8540b156c50e7f3aeb2d485bdd8",
".git/objects/11/88b194f603dd19261181ebf3d48b50b2f1ec49": "aaf4cce1f2bcdfbe2ee4c3ee42a58bbe",
".git/objects/12/0532e90495c6065c8eaeec630383b80663921e": "85b262aeb96fe13b86a12c49bfa0f5ed",
".git/objects/12/9eef51a004b9e125477a1e5171bb92bedca3b0": "b513ddd8ba332b4a2cadffa8ebde00f9",
".git/objects/17/7ab534d0100c65eb8c77b316bf54c6e1391442": "38679875de908be2706617ee139936f1",
".git/objects/18/ade7fd7f842a8697b126f9fb316bf27d647c82": "55fb296a876e28c270310b54a04ea376",
".git/objects/1a/0e188e7144be708d07bfbc86a1a038e85b3ed8": "87fbab4a4ffa6664fd1f04beac74373f",
".git/objects/1a/a5fe0ad54e7463a4021b8d4fd6a749f5993799": "b27d05a70280df63c50d5148ca999c38",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/56867e70c434d8dff86a85ca09e6d942a38257": "27d844aa56b9fd88c276a37ccf62cee6",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/637a2213c23dbba8e3df6f7d7fbd36d65eaf3b": "c535e098f2f94d270f07a21b5ada046f",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/2b/5731642202edfcab2b62e45bf164ead6620c21": "0b70a032067b4121f8bd7d1a1dc6a04b",
".git/objects/2f/169ce4fb23fdcb0a759304bf75c2c0bd66072f": "3cdea67e814b6113c229f2398556f214",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/52783cf094b50e73db42eb73229b197d8b4df8": "6a45ae36a11e25001a5ac2dc01a63381",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3c/0e2a3ae40a85baf8b3dd8215b3a8b7363cc4dd": "3b1f40f97033bec5d871e63e7eb7a889",
".git/objects/3e/58ee624f8fe9828a80767c2916b0cb74b4f326": "cf5fe8695e294ce669d695ae7d38fbcc",
".git/objects/3e/ac245fee4d1adbe97ae3da9706d9547b97b307": "737570cbd4d22bd7fce326e4020344c3",
".git/objects/3f/733dabec7db1e3cc4bd190ca5f5ef89adb9d64": "ee8c6837074e6f9fd77828388ce7eb8e",
".git/objects/43/a373284aa89e444e61e1358808ec99ca982d77": "2c2c76ad858754034c138dd2e5e18cd6",
".git/objects/44/348ba2c35c32cebc186d649109ccd66b157060": "cff041e1442ad3a7ff4322bf756b1598",
".git/objects/4a/7cf5cd8f050c52daa26f3be34a279d579ff7aa": "34bb4e8440528f1ae078db6017ec3d9c",
".git/objects/4e/38d9fcffcd665957a99d751dc683fdde0e1cad": "646e717bee3a270a473e8e88bf179d2f",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/53/5a67befe3102c198ab7535042b1182fe8a9417": "2877dd706b7768d1ebcfd93d69a20124",
".git/objects/55/e790644e1012829b0d37371b909208558c5815": "258e729cd0f47f2b6b77101b928edc9c",
".git/objects/56/fedec808e86d16cf825a59a6e0f33b4cb41e36": "501d37449e831224790450b2f40a1739",
".git/objects/58/093cb2c4e1bdb954cf89d6fd25fac30940b591": "69d0801551b0dd28a8d81f8f54270a50",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/2a350abba8ef2504db6e3f3a87d2b2ab3dcf25": "b6ae4070d7350d8fffcb07fc63e3d9f9",
".git/objects/5b/98fc50b5591c9f6ff6246c892e199c0be8348d": "f8271307acfe823432ec16ca1200bd56",
".git/objects/5c/cbd57f33068e42f131acfa023c4d3335ab3b9a": "052f7b4d8deca70c7be2cc856bb3fb0b",
".git/objects/5f/51b5298215e5d2022d4c6e65c76707a7dc996f": "850cf59ff80e12d95e708abe231a5638",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/66/be203ac3aeb6d9f37da1ee120f134317bd0b66": "ebfe6a0654f8ba86fd9bdde0f7fa5b24",
".git/objects/6a/64dc77c78e7a6808aa68180b4fdee52f0d5a35": "bdddeed19125153bac55a86253b70e18",
".git/objects/6c/380f467a1ca94b64d753c9fb660c969640e045": "2cebf43cc47176029fff47b5fd505e88",
".git/objects/6c/678c81d8e42e562d40b933598e0dd1ce0b3c20": "ba1148f6a438c26917fecb76d70e340b",
".git/objects/6d/e2628b648d26f4fba4e94fbbaa8385df6c8967": "f1bb9a1a6a9242438109ce85e9a0ceae",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/71/537ddd4adeff1b6f9adc2b76e3febb612d2e1e": "a55804d576e18906e413c38a107e2da0",
".git/objects/71/5fdde0eab0fc3eddb2e60adc6646f371866c02": "ea3e05e36d35580aee14845ef646256c",
".git/objects/71/8f9002acd48968775e28b4d84f4cbdb41bffb7": "94877fab597436ce2083915b5cbd0def",
".git/objects/71/9e99b31b4eac17e50a657ae860798b5f3d6f94": "0d7cb6b514bc623b2fb4fcba1b46090f",
".git/objects/71/f7882bb3ef91244f78d391ca973be6ef5a4a52": "7ec2b70790f7af86152168e343bd3e2e",
".git/objects/76/97ccdd93a8dffcacba48f0d5d5decc0237280d": "15173bf63eace29871bab71373f379c9",
".git/objects/7d/ec35d7bdeae5b3eb312f0026a27d4b56d57238": "93e2556180c257d7685c6539eb7d6d46",
".git/objects/83/5862c7484932924788d235c8f99b966c82bf6b": "7e0594b98f5a819dd45e69e7bc274f24",
".git/objects/84/7bfd1fca35b683c5d8d8ee962f9e7fb20d0dea": "a615c84d7a3a43e896300d534088028a",
".git/objects/86/1b8475b46186d74197d0ccc903b9cfe30c214c": "0272f51a907812f8cc2da53c227061e1",
".git/objects/86/1f53834ff0853811200afc5a665e0cf566965b": "44a86056787595d41e664719e2a26577",
".git/objects/86/bb971747f241c1ddcd4e1e99efb09988736db1": "173f1c85e49a6e92cf391fc25f68feba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8c/153609055dfa752ff72fa4cead296e9920728a": "fdebce98f13fe0570713179cbe3741d4",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/95/196c2d1d9b02b7359dfed1492740b45274feee": "1d645890572940ad4ee95cf6aa284676",
".git/objects/97/4b6c6364a6cedf3a214b7adbe2e211ee44ad75": "8611c23f13a8459fa123500fef11d68f",
".git/objects/98/70eb5ec38259d155405be9e0a080ab65604247": "a23fd89c56ae709a6e7649de8542e8a9",
".git/objects/9b/1643d80f0507f4978bcf638df2edf132082ff5": "98a4397c5a7fbc4a769cb08563c787e6",
".git/objects/a2/81a54e9a679a359dfa65dea920068f1a0cc4d7": "dbef189bb5a489c617f050c8edbd78d5",
".git/objects/a6/542d92bf3b0f2a5f358111222e6c8e69753696": "0cee750b5926b4b7fa672dc28596ba10",
".git/objects/a7/901b7d4c6d7a9e7648ed837a0c0e3230e2f91b": "9222c2210e7f0e77b6802d6ded69043d",
".git/objects/aa/cc7262fcc2c43a52a7ca68d11939a7799e1a42": "7105b8e051d02a29822ec06f650a5e21",
".git/objects/ab/32e25db5a7ef3b380fccd754c48fe0f141b9c6": "10d8713fc4765fca22ee2ca572a8e47e",
".git/objects/ab/c2196777685dc564220f9c2b8565c260868a8e": "629be97c5f62fca9160c39629d5ae4fb",
".git/objects/ac/b76297436c693172d6fbc79f5f575db491694f": "9164711cc7b13bc3292587f41dea861b",
".git/objects/ad/8f633fbbebdfc9576ff670c8a0a614aaf9560b": "197af9859454296afa62f6c645bb0a04",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/c42b4b11164335701fa33f17e3028777180293": "a63f21b98b052f11b14a65e50385cab3",
".git/objects/b3/1612416c51b3168c529ac2fee3758a5e5ccf58": "567e1ab4167451408648feaee56fd236",
".git/objects/b3/1ca9e59e47225485d1180e2e353aacb4b59148": "a320704733daded4bf75e3f5371bdc90",
".git/objects/b3/efb651e2eaf6534ead71c8187f3ba74763ae82": "014b255822e7b334e916ad718fdbbcaf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c2/35ad5190d8c06570e38c8d79d478ea1670bfe5": "0be5bc5227ba228e2d1cd7c05a2126d0",
".git/objects/c5/c59359c239c0f117a306c5101d1508b4be69de": "3f78e0594810d26f1db29d9940588e6a",
".git/objects/c7/7b9089d2a9880f5f11ce00816914485da74d5c": "ff37394a8490d56465a3149a1a6b8e63",
".git/objects/c8/2ecdc53a10172fa029843de91b14d76b1827d3": "f134beea7760eda2ecd4440c203fccbc",
".git/objects/ca/12a6611a38368c96a5aa4e6d2b90b0375968ca": "8c3b5bdd28ca5615fe297c818fbaeea2",
".git/objects/ca/a823bb281ffd56113d17fad6d20b907b205977": "398a4542f9d932103ad7b0f3afda644a",
".git/objects/cb/2b6536337c067ea6bee4408cc7fcaec1e8bcd1": "df34b060a4374ea62bd9c3ceaca03ff0",
".git/objects/cf/d7609b2259b7d302d267badb3dd533ecd1c9b5": "1a828b8e392e9f28fd3accf9375e1b13",
".git/objects/d1/acdacda229acb75dd2144e6a21fed73e54ff53": "2f6cd9a6e0287d4230695d5c6c7ecfbe",
".git/objects/d2/a11adc1b3a3742a0d1d47572e2066a0bcd6401": "c5ab1d5edd9d85db0402010eabe885b3",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/f0800e5966a1d79429582e6538fe1da5e7d82e": "d7cc1fd2851daa5c6af13e78b9d32b58",
".git/objects/da/01ca841d7dad410a3ebc781340611f0ffcde73": "00263e89b47a59179c43c4f6b4a482c7",
".git/objects/db/75ff409c5038b88eea2bd2d718118de0437a18": "38c700b987052a0886938b6913fb51e0",
".git/objects/dc/2b6a0b3628f6967bbb195b49f1148930aeb1fe": "e5b14a50cb51e3cefbeb048e844cf802",
".git/objects/e0/327f3b7c7d54a4ee81711a79693a1e9226cf85": "1f2f72d7d819727374a14a87a5b01bf7",
".git/objects/e0/6bb0baa4ecb17d48e23ac25c8d01c3e1defc2a": "c87ddd537749f7681d5dff707e4e7553",
".git/objects/e3/da950846a864862cd06d0a4194502262ae9991": "61bee0ad838d1767550d5bad66e83080",
".git/objects/e9/5dbfe703de09f2524808c142eb13739d150f4a": "ebb6bc9f47c891456d6ece32a0e3256f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/20819cfae124f3b2d1edd0b7c45753f0c430dc": "4b2243e2ac2feb69b796f1ce32e52b39",
".git/objects/ec/e6c0ffdb5a68c923d0931dc5054a71e296b18a": "9e06db8e7fc7187e277d347a19af85b8",
".git/objects/f1/ac8888fa6dd80e185041c2fd544720f2134bda": "63d537ebe76a31c0a0e8bfe855950bd5",
".git/objects/f4/0e3ff7bfaa80024a03a4f6237730284eed6ca0": "332f3068eaefab4fcc1f0b390502299c",
".git/objects/f4/63ccf3d9b4d461534ff5212d2ff9aff26c2bbe": "7ea34089249ba9893174035ceddd1e0b",
".git/objects/f5/a3eadc91e5bfcccdc41a8585c4b2318ac4fe9c": "2cd9bc29d814e8421d66563c216dfd86",
".git/objects/f7/537db6373361df0dda15112ed1cd387b1aa84f": "65b8691fd714085147586158b096c7b5",
".git/objects/f8/33a79d6b1edf931e906a88c12abe50eb49288e": "4f5b32849c5537d15cbbc9d9953a695a",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fc/0f322e61617230621468a8090f25edb73110d5": "ecc6495fc2bada51dd28771bea5b58eb",
".git/objects/fd/4a07ce5fe0f765d26bf79fe3271125856988e1": "65acad41b3a3373799bf9bc3846273ef",
".git/objects/fe/2e7e28fbb4f8e1af0c4899b587a860781a9172": "1bc2f0b2577b0b6be589050ee97d9cd3",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/cbaf65dd73f0e80727ebaf7a01bb6d6004e9d8": "8ffd0c9e9f14a0ab1aa4590c869df3fc",
".git/objects/fe/f0075ac08044c8d918455c56d8693f7e0b1e2c": "b88d5db80650d9d64ed833bbf8fd0363",
".git/ORIG_HEAD": "4f9b111365700f59735d592d56c310aa",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "4d9fded2d61f2fbd696059c749cff38e",
".git/refs/remotes/origin/main": "4d9fded2d61f2fbd696059c749cff38e",
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
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "e8a07a0d1860cf5ae6a7cd9abad7e040",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "6ba5d818033439f8e409f5050bd9f992",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d91e59d6290c7be4f464363df0f15a55",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"CNAME": "0adf8dc39794c9592b4c952522a621c0",
"favicon.ico": "254e5fc36067a8003542c36f3ba5035f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "809055383779ccde8d1c1caaf2c289fc",
"/": "809055383779ccde8d1c1caaf2c289fc",
"main.dart.js": "8fe2f3e49a879ddd87a3827403d5e72a",
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
