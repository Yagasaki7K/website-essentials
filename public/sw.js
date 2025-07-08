if (!self.define) {
	let e,
		i = {};
	const s = (s, a) => (
		(s = new URL(s + ".js", a).href),
		i[s] ||
			new Promise((i) => {
				if ("document" in self) {
					const e = document.createElement("script");
					(e.src = s), (e.onload = i), document.head.appendChild(e);
				} else (e = s), importScripts(s), i();
			}).then(() => {
				let e = i[s];
				if (!e) throw new Error(`Module ${s} didn’t register its module`);
				return e;
			})
	);
	self.define = (a, n) => {
		const r =
			e ||
			("document" in self ? document.currentScript.src : "") ||
			location.href;
		if (i[r]) return;
		let c = {};
		const d = (e) => s(e, r),
			f = { module: { uri: r }, exports: c, require: d };
		i[r] = Promise.all(a.map((e) => f[e] || d(e))).then((e) => (n(...e), c));
	};
}
define(["./workbox-588899ac"], function (e) {
	"use strict";
	importScripts(),
		self.skipWaiting(),
		e.clientsClaim(),
		e.precacheAndRoute(
			[
				{ url: "/Logo.png", revision: "d4adc1531fe9b2442407115a9a82257f" },
				{
					url: "/_next/static/b_NRrQ8cFxHHDfECoKDMo/_buildManifest.js",
					revision: "acac7cca3c460b958c610ce0d8e2aa6c",
				},
				{
					url: "/_next/static/b_NRrQ8cFxHHDfECoKDMo/_ssgManifest.js",
					revision: "b6652df95db52feb4daf4eca35380933",
				},
				{
					url: "/_next/static/chunks/675-22917c3e09173e62.js",
					revision: "22917c3e09173e62",
				},
				{
					url: "/_next/static/chunks/915-20aa641af4117f1f.js",
					revision: "20aa641af4117f1f",
				},
				{
					url: "/_next/static/chunks/framework-7a7e500878b44665.js",
					revision: "7a7e500878b44665",
				},
				{
					url: "/_next/static/chunks/main-635da261d33f6008.js",
					revision: "635da261d33f6008",
				},
				{
					url: "/_next/static/chunks/pages/_app-6c2f3add9a5c17fb.js",
					revision: "6c2f3add9a5c17fb",
				},
				{
					url: "/_next/static/chunks/pages/_error-54de1933a164a1ff.js",
					revision: "54de1933a164a1ff",
				},
				{
					url: "/_next/static/chunks/pages/browser-b578810e59337b67.js",
					revision: "b578810e59337b67",
				},
				{
					url: "/_next/static/chunks/pages/communication-dad7e84ff4266f81.js",
					revision: "dad7e84ff4266f81",
				},
				{
					url: "/_next/static/chunks/pages/development-cb76673fb36b4e93.js",
					revision: "cb76673fb36b4e93",
				},
				{
					url: "/_next/static/chunks/pages/download-f7d8dffbc9004874.js",
					revision: "f7d8dffbc9004874",
				},
				{
					url: "/_next/static/chunks/pages/entertainment-7f32f8b8480735d9.js",
					revision: "7f32f8b8480735d9",
				},
				{
					url: "/_next/static/chunks/pages/extension-8ce23111141d02dc.js",
					revision: "8ce23111141d02dc",
				},
				{
					url: "/_next/static/chunks/pages/index-e7e7386be157f851.js",
					revision: "e7e7386be157f851",
				},
				{
					url: "/_next/static/chunks/pages/password-df0ab761bb300449.js",
					revision: "df0ab761bb300449",
				},
				{
					url: "/_next/static/chunks/pages/system-6103249ec344bfeb.js",
					revision: "6103249ec344bfeb",
				},
				{
					url: "/_next/static/chunks/pages/utility-1ba999268d6f3bc5.js",
					revision: "1ba999268d6f3bc5",
				},
				{
					url: "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",
					revision: "79330112775102f91e1010318bae2bd3",
				},
				{
					url: "/_next/static/chunks/webpack-d38be8d96a62f950.js",
					revision: "d38be8d96a62f950",
				},
				{ url: "/desktop.png", revision: "695ae9f8f66ab361cb77be63f370de0e" },
				{
					url: "/favicon-192.png",
					revision: "7d9a140b3a1eb667b9b1aed00b06b449",
				},
				{
					url: "/favicon-256.png",
					revision: "19e587e67a228a9c2adf18ea0d414a81",
				},
				{
					url: "/favicon-384.png",
					revision: "9d77d8d9cc7086f4f1c5f77eb719f246",
				},
				{
					url: "/favicon-512.png",
					revision: "8a430955361cda2947a0a03bddc6d472",
				},
				{ url: "/favicon.png", revision: "bed82ef4c656cc6b64ca7730b9af7584" },
				{ url: "/favicon.psd", revision: "b3e7697100a9c8663ef290e39fc67777" },
				{
					url: "/list/1password.png",
					revision: "19b282b21e9e8c4eaf829be22036890d",
				},
				{ url: "/list/7zip.png", revision: "64be31b467a743ab8ff62cd747a6bf55" },
				{
					url: "/list/adblock.png",
					revision: "867f45183f36f9e2f2f445f87805bcc4",
				},
				{
					url: "/list/adobecc.png",
					revision: "d22ee6a006ef90e0a385497c572c768c",
				},
				{
					url: "/list/adobereader.png",
					revision: "1ed9b8ed9b4c029d0505a290b4bb015b",
				},
				{
					url: "/list/advanced.png",
					revision: "363f759e29c3a1cb38f2f76e0ed9f3fd",
				},
				{ url: "/list/all.png", revision: "8a84a27ec53314f405a2b7d69d661c38" },
				{
					url: "/list/anydesk.png",
					revision: "6c113a196aedde9e3d1a49a99ca77d15",
				},
				{
					url: "/list/apache.png",
					revision: "fdea2051130aa7b6880205961cca140f",
				},
				{ url: "/list/atom.png", revision: "5db7cdc3db6bdd7a897b2bca0263fc8a" },
				{
					url: "/list/atube.png",
					revision: "13dfb5d49cd4c3596490085e3306ebd9",
				},
				{
					url: "/list/audacity.png",
					revision: "500155581b79026fdef473c3d84fafcd",
				},
				{
					url: "/list/avast.png",
					revision: "c78c9860c326c15eec2dea3de56aaa61",
				},
				{
					url: "/list/avira.png",
					revision: "2064419c8c51b59c3f3461d6c3d43fc4",
				},
				{
					url: "/list/battlenet.png",
					revision: "5982415a8519acf8d8626a768293e7e4",
				},
				{
					url: "/list/bittorrent.png",
					revision: "d1ef22e685070f8250f833866ddb4840",
				},
				{
					url: "/list/bitwarden.png",
					revision: "7ca6d87606ec49df449f9958b220a785",
				},
				{
					url: "/list/bluestacks.png",
					revision: "f17f3ff14f8c055255e68e7f65603787",
				},
				{
					url: "/list/bonjourr.png",
					revision: "7766326c4afb94be45464699f6312a3d",
				},
				{
					url: "/list/brackets.png",
					revision: "04053ba78878d46e50fe77632b823a7c",
				},
				{
					url: "/list/ccleaner.png",
					revision: "3cee0078919dbc4bca3e32fc2ac72b4b",
				},
				{
					url: "/list/cdburner.png",
					revision: "03445d8746af893b9e3bd04c61d9668c",
				},
				{
					url: "/list/chrome.png",
					revision: "d0c9a7c69be0ff408d9c2e0e96bdc917",
				},
				{
					url: "/list/chromium.png",
					revision: "99a8a6441ea50bdee519da2cbee4ee85",
				},
				{
					url: "/list/citra.png",
					revision: "1127037f555f031db7737899bc295a4c",
				},
				{
					url: "/list/cloudready.png",
					revision: "f41b7a7e60fd55c7c5dea29a5a2d0ef5",
				},
				{ url: "/list/cpuz.png", revision: "83c563869ecdfda323ac81f8266753c2" },
				{
					url: "/list/darkreader.png",
					revision: "4cfb5911cc61169f82c9a35ee7038b4d",
				},
				{
					url: "/list/discord.png",
					revision: "9524da646b40dad5840b4a082e277d07",
				},
				{
					url: "/list/docker.png",
					revision: "3d9b58415390cc58d7e38c8663616a96",
				},
				{
					url: "/list/dolphin.png",
					revision: "68411bb31b429cdc7e7e6c018993977a",
				},
				{
					url: "/list/driverbooster.png",
					revision: "4effe5da58cf5767ab4d5e9f0f2dfb7c",
				},
				{
					url: "/list/dropbox.png",
					revision: "9042be1d44eb9ae6be982d77f7ead5a5",
				},
				{
					url: "/list/eartrumpet.png",
					revision: "3cfdac33f7b5c3c22fe8d3629ef6e8f4",
				},
				{ url: "/list/edge.png", revision: "a4141aa609870c09ca735300b3365cc4" },
				{
					url: "/list/emclient.png",
					revision: "4325ca6d9b56e5d26bcda1e8e170f3a8",
				},
				{
					url: "/list/epicgames.png",
					revision: "d7ab9418b5917fc0177d9e382d329db8",
				},
				{
					url: "/list/files.png",
					revision: "050396bfa5d067e55ec5ce0545a57dd3",
				},
				{
					url: "/list/filezilla.png",
					revision: "5e1b63b58327970ff6a70059c1543c2e",
				},
				{
					url: "/list/firefox.png",
					revision: "8940000f6403716134dd4a17ba14f55f",
				},
				{
					url: "/list/franz.png",
					revision: "2b756d9b8e3236fde5c90af9b579cdf4",
				},
				{
					url: "/list/fraps.png",
					revision: "6a1686ef229028dec5f6ae6b2cc8eebe",
				},
				{
					url: "/list/gamersclub.png",
					revision: "df5c0abd42dd55c0227a4e99c68ce8a9",
				},
				{
					url: "/list/geforce.png",
					revision: "548bf69f730aa6b603e83d4f24351c8f",
				},
				{ url: "/list/git.png", revision: "9aeabacd1b11b3a6a57e90ee6d46c0c2" },
				{
					url: "/list/github.png",
					revision: "7f9799976ec1395e7017e21362b628ca",
				},
				{
					url: "/list/googledrive.png",
					revision: "c8ee6ca1c1886a62b15124934a90c285",
				},
				{
					url: "/list/gumbo.png",
					revision: "73b9cc240c69e2e5d2077100824563cd",
				},
				{
					url: "/list/hamachi.png",
					revision: "e6fa518246a0c8d54e5a85583fa24bc5",
				},
				{ url: "/list/hp.png", revision: "61b9b8c00b332f7728cc5d060d18d976" },
				{
					url: "/list/hyperx.png",
					revision: "677eb0075cc6cd947d0a8aad0a6cff0f",
				},
				{
					url: "/list/icloud.png",
					revision: "42f9754e79bfa4bb2acddbbe4224143d",
				},
				{
					url: "/list/inkscape.png",
					revision: "24566fa595afdb1d09bc683e554e6c65",
				},
				{
					url: "/list/insomnia.png",
					revision: "41b42cf284ada186a986a4a071e3113f",
				},
				{
					url: "/list/irfanview.png",
					revision: "e5bbd12ffca9e7bb36f106cb7124ada3",
				},
				{
					url: "/list/itunes.png",
					revision: "9cac0f556129b5783e99ba6395c1b939",
				},
				{
					url: "/list/kindle.png",
					revision: "a069b2dd5a0175ccf111fd3a738e8b4b",
				},
				{
					url: "/list/klite.png",
					revision: "c1a33f2ee6612a823f6b3a702ed5253c",
				},
				{ url: "/list/kms.png", revision: "eb74881435d33550ce34c33d93211852" },
				{
					url: "/list/lastpass.png",
					revision: "9fc964bd6ba81ef00b2f91ae0d5ee9fb",
				},
				{
					url: "/list/libreoffice.png",
					revision: "06bc2c8882d52482e4935abaada523ec",
				},
				{
					url: "/list/lightshot.png",
					revision: "9f9855e18ec89b2ed3811f557f4b7e1f",
				},
				{
					url: "/list/linux.png",
					revision: "ffa1a9ceccd402a02c2f82e002433dd2",
				},
				{
					url: "/list/mailbird.png",
					revision: "3c0e764f2311a4f9b4833fadef4185b6",
				},
				{
					url: "/list/mailspring.png",
					revision: "000fb05f20a894a1b7bc9aba7c890bee",
				},
				{
					url: "/list/malware.png",
					revision: "4ed3bee4a3eb00c5dcc6974771114dd3",
				},
				{ url: "/list/mega.png", revision: "58d88f3658bf79efcc02b7803c041140" },
				{ url: "/list/mgba.png", revision: "7c208a267a579f819de780f875b9d65a" },
				{
					url: "/list/minimaltwitter.png",
					revision: "93d8914b7a3a7210bf3a3195d4b55352",
				},
				{
					url: "/list/modernflyouts.png",
					revision: "982f85f9d5f329d47c0831f2e1de6de8",
				},
				{
					url: "/list/msiafterburner.png",
					revision: "3765b1c020df59d2682dea753a6fe1a5",
				},
				{
					url: "/list/netbeans.png",
					revision: "804cdbff92f04bf98534bdf3aee1d063",
				},
				{
					url: "/list/netflix.png",
					revision: "e2492c80917053b9baf127c37d446196",
				},
				{
					url: "/list/netframework.png",
					revision: "4e7daea63936baddcd8fea49f98ee638",
				},
				{
					url: "/list/nodejs.png",
					revision: "521c4299abcebe410a422b2522e89614",
				},
				{
					url: "/list/notepad++.png",
					revision: "f149077d41db142e43d23382c40e3af7",
				},
				{
					url: "/list/notepad.png",
					revision: "a4a4ebe187430f74fef30f3f6229509f",
				},
				{
					url: "/list/notepads.png",
					revision: "c071bf8fdaa843aa05dbd3858b63370e",
				},
				{
					url: "/list/notion.png",
					revision: "466844fb7365fa197799fc33c8ebd7c7",
				},
				{
					url: "/list/noxplayer.png",
					revision: "409242dcc1533d30481da4a2145ab3d0",
				},
				{ url: "/list/obs.png", revision: "267d54903ac997020973a788e02a0fac" },
				{
					url: "/list/onedrive.png",
					revision: "3baa6fd9d90098a54e7030be906f7ae3",
				},
				{
					url: "/list/onepassword.png",
					revision: "950d5a9d8eb9f9bd7c193783d7c23827",
				},
				{
					url: "/list/opera.png",
					revision: "e7574abffd5eb8a34cef9b18f7133116",
				},
				{
					url: "/list/operagx.png",
					revision: "7821b1c573d29ef4f7090e9aab134df2",
				},
				{
					url: "/list/operamail.png",
					revision: "4b86adbd5d8b9c7442026441c782eba2",
				},
				{
					url: "/list/operaneon.png",
					revision: "22552bbc4c68f8878788d8aeeb5fef55",
				},
				{
					url: "/list/origin.png",
					revision: "fe64cdf7ee007d532d5797f7cc70c4dc",
				},
				{
					url: "/list/pantherbar.png",
					revision: "9e73a5e1dccb3c1c708b5fd964d0d0cf",
				},
				{
					url: "/list/pcsx2.png",
					revision: "9e0ea7dd325657b78d28f3ae6529b5c8",
				},
				{
					url: "/list/postman.png",
					revision: "dd45df517f039ed7bc967f00addf994f",
				},
				{
					url: "/list/powertoys.png",
					revision: "8671a5afa9df8d3bf05a0b90e32b1521",
				},
				{
					url: "/list/quantum.png",
					revision: "cb76927e077131c7ba73324a659e450a",
				},
				{
					url: "/list/razercortex.png",
					revision: "0f4176d957975492e577e3f6fe2805dd",
				},
				{
					url: "/list/razersynapse.png",
					revision: "93fa251792fae5f713351dd7ea732f4b",
				},
				{
					url: "/list/realtek.png",
					revision: "34316094be19ff4c3bb207513f6ead7a",
				},
				{
					url: "/list/responsively.png",
					revision: "a992d6a35b1a984930531b4f440c8617",
				},
				{
					url: "/list/rocketchat.png",
					revision: "86b8cf15613d7b1f0f836b2dc3db078f",
				},
				{
					url: "/list/rpcs3.png",
					revision: "0976c0fc71801ec9f9922f7e69121345",
				},
				{
					url: "/list/safari.png",
					revision: "495026c41ae2b6cb69b3a5aff55d100d",
				},
				{
					url: "/list/slack.png",
					revision: "0d431f8bffab1853aa826cc987ea9db9",
				},
				{
					url: "/list/slimdrivers.png",
					revision: "713282077cb804ecfcb7bd6724902c0d",
				},
				{
					url: "/list/soundbooster.png",
					revision: "8d6f461aac75e7b332bc01f13ab1084c",
				},
				{
					url: "/list/soundswitch.png",
					revision: "e642d47c71beefec71907ae0e0a47e52",
				},
				{
					url: "/list/spotify.png",
					revision: "9bc8ca0344d9a1729446d43588428704",
				},
				{
					url: "/list/steam.png",
					revision: "cd88559590ba24cfbd9df966af2e1111",
				},
				{
					url: "/list/steamarch.png",
					revision: "520dfaf4f06ea359a0caf729908a3f63",
				},
				{
					url: "/list/streamlabs.png",
					revision: "0291967dc61e7b6b6665026d7d02d940",
				},
				{
					url: "/list/sublime.png",
					revision: "cdb530df5df9fd9341329d6deac6abe2",
				},
				{
					url: "/list/tabmuter.png",
					revision: "c49087a0d49e2b6f8b909a1b8beb1a9c",
				},
				{
					url: "/list/taskbarx.png",
					revision: "0578f40646827c9e99845fb2d5001ad3",
				},
				{
					url: "/list/teamspeak.png",
					revision: "679f1f08abb77b8c30a289ed37fb798f",
				},
				{
					url: "/list/teamviewer.png",
					revision: "3386d43abee6a2614fe391e93ca8b9e1",
				},
				{
					url: "/list/telegram.png",
					revision: "b0fa645d615a09cccc38c7fd4cc8f8d0",
				},
				{
					url: "/list/thunderbird.png",
					revision: "61af31629db2bb7f92e5a889be8bb793",
				},
				{ url: "/list/tor.png", revision: "f52951703990613d877573e257d0a4ff" },
				{
					url: "/list/translucent.png",
					revision: "3f6b7b883faf07a5dacdb6570d5e8b5e",
				},
				{
					url: "/list/unetbootin.png",
					revision: "e357bb62f758b3153f8aab1cf33ceb56",
				},
				{
					url: "/list/unhook.png",
					revision: "8dfa7bdf655dfa46562d44ab8f243c0a",
				},
				{
					url: "/list/uninstaller.png",
					revision: "0284ae00f7cf043c1bd9bf5e13720d22",
				},
				{
					url: "/list/uplay.png",
					revision: "a79ed65c15bbb88a46836c2c98110998",
				},
				{
					url: "/list/utorrent.png",
					revision: "ef53e7813265271c20eb79608aacf506",
				},
				{
					url: "/list/ventoy.png",
					revision: "079fc00a6300976105e1f4671e3ae093",
				},
				{
					url: "/list/virtualbox.png",
					revision: "9d4dd9200ce382ea92bcd834b69e0f3f",
				},
				{
					url: "/list/visualstudio.png",
					revision: "f8ae653c5945989c59dfbbd555ad798c",
				},
				{
					url: "/list/vivaldi.png",
					revision: "4cff5a4ca81464f5702ac0cff87456a0",
				},
				{ url: "/list/vlc.png", revision: "f86a3dc370aed493b9df2ba2186350d8" },
				{
					url: "/list/wawebplus.png",
					revision: "093199322947fb234e1922150d60dcd0",
				},
				{
					url: "/list/whatsapp.png",
					revision: "4080a31e442c99cccab14472f46be7ef",
				},
				{
					url: "/list/windows10.png",
					revision: "5d86946a391c55899157ac2309a377d4",
				},
				{
					url: "/list/windows7.png",
					revision: "dc8ae07a132fc6d244d1de066555e062",
				},
				{
					url: "/list/windowsxp.png",
					revision: "cf689dbe272e654c6f1c71e53a27ee78",
				},
				{
					url: "/list/winrar.png",
					revision: "1b779d440a928b497dc7c749281ab9cc",
				},
				{ url: "/list/yuzu.png", revision: "144bef3b8f969bc4b7147f001328aee4" },
				{
					url: "/list/zsnes.png",
					revision: "dbcf71d9bc8737d6243f50a14190835b",
				},
				{ url: "/manifest.json", revision: "11df24e2c86162eb65d49f78d176d8a8" },
				{
					url: "/seo-thumbnail.png",
					revision: "f3983cf270930a865ec871443a93ff35",
				},
				{ url: "/sun.svg", revision: "82aed5afeba3116f460da0624737beca" },
			],
			{ ignoreURLParametersMatching: [] },
		),
		e.cleanupOutdatedCaches(),
		e.registerRoute(
			"/",
			new e.NetworkFirst({
				cacheName: "start-url",
				plugins: [
					{
						cacheWillUpdate: async ({
							request: e,
							response: i,
							event: s,
							state: a,
						}) =>
							i && "opaqueredirect" === i.type
								? new Response(i.body, {
										status: 200,
										statusText: "OK",
										headers: i.headers,
									})
								: i,
					},
				],
			}),
			"GET",
		),
		e.registerRoute(
			/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
			new e.CacheFirst({
				cacheName: "google-fonts-webfonts",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
				],
			}),
			"GET",
		),
		e.registerRoute(
			/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
			new e.StaleWhileRevalidate({
				cacheName: "google-fonts-stylesheets",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
				],
			}),
			"GET",
		),
		e.registerRoute(
			/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
			new e.StaleWhileRevalidate({
				cacheName: "static-font-assets",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
				],
			}),
			"GET",
		),
		e.registerRoute(
			/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
			new e.StaleWhileRevalidate({
				cacheName: "static-image-assets",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
				],
			}),
			"GET",
		),
		e.registerRoute(
			/\/_next\/image\?url=.+$/i,
			new e.StaleWhileRevalidate({
				cacheName: "next-image",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
				],
			}),
			"GET",
		),
		e.registerRoute(
			/\.(?:mp3|wav|ogg)$/i,
			new e.CacheFirst({
				cacheName: "static-audio-assets",
				plugins: [
					new e.RangeRequestsPlugin(),
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			"GET",
		),
		e.registerRoute(
			/\.(?:mp4)$/i,
			new e.CacheFirst({
				cacheName: "static-video-assets",
				plugins: [
					new e.RangeRequestsPlugin(),
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			"GET",
		),
		e.registerRoute(
			/\.(?:js)$/i,
			new e.StaleWhileRevalidate({
				cacheName: "static-js-assets",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			"GET",
		),
		e.registerRoute(
			/\.(?:css|less)$/i,
			new e.StaleWhileRevalidate({
				cacheName: "static-style-assets",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			"GET",
		),
		e.registerRoute(
			/\/_next\/data\/.+\/.+\.json$/i,
			new e.StaleWhileRevalidate({
				cacheName: "next-data",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			"GET",
		),
		e.registerRoute(
			/\.(?:json|xml|csv)$/i,
			new e.NetworkFirst({
				cacheName: "static-data-assets",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			"GET",
		),
		e.registerRoute(
			({ url: e }) => {
				if (!(self.origin === e.origin)) return !1;
				const i = e.pathname;
				return !i.startsWith("/api/auth/") && !!i.startsWith("/api/");
			},
			new e.NetworkFirst({
				cacheName: "apis",
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
				],
			}),
			"GET",
		),
		e.registerRoute(
			({ url: e }) => {
				if (!(self.origin === e.origin)) return !1;
				return !e.pathname.startsWith("/api/");
			},
			new e.NetworkFirst({
				cacheName: "others",
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			"GET",
		),
		e.registerRoute(
			({ url: e }) => !(self.origin === e.origin),
			new e.NetworkFirst({
				cacheName: "cross-origin",
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
				],
			}),
			"GET",
		);
});
