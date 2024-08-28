const items = [
    {
        id: "arc",
        name: "Arc Browser",
        img: "/list/arc.png",
        url: "https://arc.net/",
        corporation: "The Browser Company",
        categories: "browser"
    },
    {
        id: "chrome",
        name: "Google Chrome",
        img: "/list/chrome.png",
        url: "https://dl.google.com/tag/s/appguid%3D%7B8A69D345-D564-463C-AFF1-A69D9E530F96%7D%26iid%3D%7B402BE041-C559-22A8-07D5-00DF1B7D2DE8%7D%26lang%3Dpt-BR%26browser%3D4%26usagestats%3D0%26appname%3DGoogle%2520Chrome%26needsadmin%3Dprefers%26installdataindex%3Ddefaultbrowser/update2/installers/ChromeSetup.exe",
        corporation: "Google Inc",
        categories: "browser"
    },
    {
        id: "chromium",
        name: "Google Chromium",
        img: "/list/chromium.png",
        url: "https://download-chromium.appspot.com/",
        corporation: "Google Inc",
        categories: "browser"
    },
    {
        id: "microsoftedge",
        name: "Microsoft Edge",
        img: "/list/edge.png",
        url: "https://www.microsoftedgeinsider.com/pt-br/",
        corporation: "Microsoft Corporation",
        categories: "browser"
    },
    {
        id: "firefoxdefault",
        name: "Mozilla Firefox",
        img: "/list/firefox.png",
        url: "https://www.mozilla.org/pt-BR/firefox/new/",
        corporation: "Mozilla Foundation",
        categories: "browser"
    },
    {
        id: "firefoxquantum",
        name: "Mozilla Quantum",
        img: "/list/quantum.png",
        url: "https://www.mozilla.org/en-US/firefox/quantum/",
        corporation: "Mozilla Foundation",
        categories: "browser"
    },
    {
        id: "opera",
        name: "Opera",
        img: "/list/opera.png",
        url: "http://www.opera.com/pt-br",
        corporation: "Opera Software",
        categories: "browser"
    },
    {
        id: "operagx",
        name: "Opera GX",
        img: "/list/operagx.png",
        url: "https://www.opera.com/pt-br/gx#download",
        corporation: "Opera Software",
        categories: "browser"
    },
    {
        id: "operaneon",
        name: "Opera Neon",
        img: "/list/operaneon.png",
        url: "https://www.opera.com/pt-br/computer/neon",
        corporation: "Opera Software",
        categories: "browser"
    },
    {
        id: "vivaldi",
        name: "Vivaldi",
        img: "/list/vivaldi.png",
        url: "https://vivaldi.com/download/",
        corporation: "Vivaldi Technologies",
        categories: "browser"
    },
    {
        id: "tor",
        name: "Tor",
        img: "/list/tor.png",
        url: "https://www.torproject.org/download/",
        corporation: "Tor Project",
        categories: "browser"
    },
    {
        id: "zen",
        name: "Zen",
        img: "/list/zen.png",
        url: "https://www.zen-browser.app/",
        corporation: "zen-browser",
        categories: "browser"
    },
    {
        id: "dropbox",
        name: "Dropbox",
        img: "/list/dropbox.png",
        url: "https://www.dropbox.com/install",
        corporation: "Dropbox",
        categories: 'backup'
    },
    {
        id: "googledrive",
        name: "Google Drive",
        img: "/list/googledrive.png",
        url: "https://www.google.com/intl/pt-BR_ALL/drive/download/",
        corporation: "Google Inc",
        categories: 'backup'
    },
    {
        id: "iclouddrive",
        name: "iCloud Drive",
        img: "/list/icloud.png",
        url: "https://support.apple.com/pt_BR/downloads/icloud",
        corporation: "Apple Inc",
        categories: 'backup'
    },
    {
        id: "mega",
        name: "MEGASync",
        img: "/list/mega.png",
        url: "https://mega.io/sync",
        corporation: "Kim Dotcom",
        categories: 'backup'
    },
    {
        id: "onedrive",
        name: "OneDrive",
        img: "/list/onedrive.png",
        url: "https://onedrive.live.com/about/pt-br/",
        corporation: "Microsoft Corporation",
        categories: 'backup'
    },
    {
        id: "adobecc",
        name: "Adobe CC",
        img: "/list/adobecc.png",
        url: "https://creative.adobe.com/pt/products/download/creative-cloud?promoid=KSPDX",
        corporation: "Adobe Inc",
        categories: "development"
    },
    {
        id: "atom",
        name: "Atom",
        img: "/list/atom.png",
        url: "https://atom.io/",
        corporation: "Gerath Flowers",
        categories: "development"
    },
    {
        id: "audacity",
        name: "Audacity",
        img: "/list/audacity.png",
        url: "http://www.audacityteam.org/download/",
        corporation: "Audacity Team",
        categories: "development"
    },
    {
        id: "brackets",
        name: "Brackets",
        img: "/list/brackets.png",
        url: "http://brackets.io/",
        corporation: "Adobe Inc.",
        categories: "development"
    },
    {
        id: "docker",
        name: "Docker Desktop",
        img: "/list/docker.png",
        url: "https://www.docker.com/products/docker-desktop/",
        corporation: "Docker, Inc.",
        categories: "development"
    },
    {
        id: "filezilla",
        name: "Filezilla",
        img: "/list/filezilla.png",
        url: "https://filezilla-project.org/",
        corporation: "License GNU GPL",
        categories: "development"
    },
    {
        id: "git",
        name: "Git",
        img: "/list/git.png",
        url: "https://git-scm.com/downloads",
        corporation: "Junio Hamano and others",
        categories: "development"
    },
    {
        id: "github-desktop",
        name: "Github Desktop",
        img: "/list/github.png",
        url: "https://desktop.github.com/",
        corporation: "Microsoft Corporation",
        categories: "development"
    },
    {
        id: "github-desktop",
        name: "Desktop.deb",
        img: "/list/github.png",
        url: "https://www.mediafire.com/file/2bkkhdvp2vtrhx9/github-desktop.deb/file",
        corporation: "Shiftkey",
        categories: "development"
    },
    {
        id: "inkscape",
        name: "Inkscape",
        img: "/list/inkscape.png",
        url: "https://inkscape.org/pt-br/release/inkscape-0.92.4/",
        corporation: "Nathan Hurst",
        categories: "development"
    },
    {
        id: "insomnia",
        name: "Insomnia",
        img: "/list/insomnia.png",
        url: "https://insomnia.rest/download",
        corporation: "Kong Inc.",
        categories: "development"
    },
    {
        id: "netBeans",
        name: "NetBeans",
        img: "/list/netbeans.png",
        url: "https://netbeans.org/",
        corporation: "Apache Software",
        categories: "development"
    },
    {
        id: "nodejs",
        name: "NodeJS",
        img: "/list/nodejs.png",
        url: "https://nodejs.org/en/download/",
        corporation: "OpenJS Foundation",
        categories: "development"
    },
    {
        id: "notepad",
        name: "Notepad++",
        img: "/list/notepad.png",
        url: "https://notepad-plus-plus.org/downloads/",
        corporation: "License GPL",
        categories: "development"
    },
    {
        id: "postman",
        name: "Postman",
        img: "/list/postman.png",
        url: "https://www.postman.com/downloads/",
        corporation: "Postman, Inc.",
        categories: "development"
    },
    {
        id: "responsively",
        name: "Responsively",
        img: "/list/responsively.png",
        url: "https://responsively.app/",
        corporation: "Responsively App",
        categories: "development"
    },
    {
        id: "sublime",
        name: "Sublime Text",
        img: "/list/sublime.png",
        url: "https://www.sublimetext.com/download",
        corporation: "Nagware",
        categories: "development"
    },
    {
        id: "visual-studio",
        name: "Visual Studio Code",
        img: "/list/visualstudio.png",
        url: "https://code.visualstudio.com/",
        corporation: "Microsoft Corporation",
        categories: "development"
    },
    {
        id: "adobe",
        name: "Adobe eReader",
        img: "/list/adobereader.png",
        url: "https://www.adobe.com/solutions/ebook/digital-editions/download.html",
        corporation: "Adobe Inc",
        categories: "entertainment"
    },
    {
        id: "amazon-kindle",
        name: "Amazon Kindle",
        img: "/list/kindle.png",
        url: "https://www.amazon.com.br/b?ie=UTF8&node=17877530011",
        corporation: "Amazon Kindle",
        categories: "entertainment"
    },
    {
        id: "archisteamfarm",
        name: "Archi Steam Farm",
        img: "/list/steamarch.png",
        url: "https://github.com/JustArchiNET/ArchiSteamFarm/releases/",
        corporation: "License Apache-2.0",
        categories: "entertainment"
    },
    {
        id: "battlenet",
        name: "Battle.net",
        img: "/list/battlenet.png",
        url: "http://us.battle.net/pt/app/",
        corporation: "Blizzard Entertainment",
        categories: "entertainment"
    },
    {
        id: "bluestacks",
        name: "BlueStacks",
        img: "/list/bluestacks.png",
        url: "http://www.bluestacks.com/pt-br/index.html",
        corporation: "Rosen Sharma",
        categories: "entertainment"
    },
    {
        id: "citra",
        name: "Citra 3DS",
        img: "/list/citra.png",
        url: "https://citra-emu.org/",
        corporation: "Citra",
        categories: "entertainment"
    },
    {
        id: "dolphin",
        name: "Dolphin Gamecube",
        img: "/list/dolphin.png",
        url: "https://br.dolphin-emu.org/",
        corporation: "Dolphin Team",
        categories: "entertainment"
    },
    {
        id: "epicgames",
        name: "Epic Games",
        img: "/list/epicgames.png",
        url: "https://www.epicgames.com/store/pt-BR/",
        corporation: "Epic Games",
        categories: "entertainment"
    },
    {
        id: "fraps",
        name: "Fraps",
        img: "/list/fraps.png",
        url: "https://fraps.com/download.php",
        corporation: "Beepa",
        categories: "entertainment"
    },
    {
        id: "idlemaster",
        name: "IdleMaster",
        img: "/list/steamarch.png",
        url: "https://github.com/JonasNilson/idle_master_extended/releases",
        corporation: "Jonas Nilson",
        categories: "entertainment"
    },
    {
        id: "itunes",
        name: "iTunes",
        img: "/list/itunes.png",
        url: "http://www.apple.com/br/itunes/download/",
        corporation: "Apple Inc.",
        categories: "entertainment"
    },
    {
        id: "klite",
        name: "K-Lite Codec",
        img: "/list/klite.png",
        url: "https://codecguide.com/download_k-lite_codec_pack_full.htm",
        corporation: "Codec Guide",
        categories: "entertainment"
    },
    {
        id: "mgba",
        name: "mGBA",
        img: "/list/mgba.png",
        url: "https://mgba.io/",
        corporation: "Vicki Pfau",
        categories: "entertainment"
    },
    {
        id: "netflix",
        name: "Netflix",
        img: "/list/netflix.png",
        url: "https://www.microsoft.com/pt-br/p/netflix/9wzdncrfj3tj",
        corporation: "Netflix",
        categories: "entertainment"
    },
    {
        id: "noxplayer",
        name: "NoxPlayer",
        img: "/list/noxplayer.png",
        url: "https://www.bignox.com/",
        corporation: "Nox Community",
        categories: "entertainment"
    },
    {
        id: "obs",
        name: "OBS Studio",
        img: "/list/obs.png",
        url: "#",
        corporation: "OBS Project",
        categories: "entertainment"
    },
    {
        id: "origin",
        name: "Origin",
        img: "/list/origin.png",
        url: "https://www.origin.com/bra/en-us/store/download",
        corporation: "Electronic Arts",
        categories: "entertainment"
    },
    {
        id: "pcsx2",
        name: "PCSX2",
        img: "/list/pcsx2.png",
        url: "https://pcsx2.net/download.html",
        corporation: "License GNU GPL",
        categories: "entertainment"
    },
    {
        id: "rpcs3",
        name: "RPCS3",
        img: "/list/rpcs3.png",
        url: "https://rpcs3.net/download",
        corporation: "DH and Hykem",
        categories: "entertainment"
    },
    {
        id: "spotify",
        name: "Spotify",
        img: "/list/spotify.png",
        url: "https://www.spotify.com/us/download/",
        corporation: "Spotify AB",
        categories: "entertainment"
    },
    {
        id: "steam",
        name: "Steam",
        img: "/list/steam.png",
        url: "https://store.steampowered.com/about/",
        corporation: "Valve Corporation",
        categories: "entertainment"
    },
    {
        id: "streamlabs",
        name: "Streamlabs",
        img: "/list/streamlabs.png",
        url: "https://streamlabs.com/",
        corporation: "Streamlabs",
        categories: "entertainment"
    },
    {
        id: "uplay",
        name: "Ubisoft Connect",
        img: "/list/uplay.png",
        url: "https://uplay.ubi.com/",
        corporation: "Ubisoft Entertainment",
        categories: "entertainment"
    },
    {
        id: "vlcvideo",
        name: "VLC Media Player",
        img: "/list/vlc.png",
        url: "https://www.videolan.org/vlc/",
        corporation: "VideoLAN",
        categories: "entertainment"
    },
    {
        id: "xivlauncher",
        name: "XIVLauncher",
        img: "/list/xivlauncher.png",
        url: "https://github.com/goatcorp/FFXIVQuickLauncher/releases",
        corporation: "goatcorp",
        categories: "entertainment"
    },
    {
        id: "yuzu",
        name: "Yuzu",
        img: "/list/yuzu.png",
        url: "https://yuzu-emu.org/",
        corporation: "Yuzu Emulator",
        categories: "entertainment"
    },
    {
        id: "zsnes",
        name: "zSNES",
        img: "/list/zsnes.png",
        url: "https://www.fosshub.com/ZSNES.html",
        corporation: "zSNES Team",
        categories: "entertainment"
    },
    {
        id: "1password",
        name: "1Password",
        img: "/list/1password.png",
        browser: "/list/all.png",
        url: "https://1password.com/pt/downloads/browser-extension/",
        corporation: "AgileBits Inc.",
        categories: "extension"
    },
    {
        id: "adblock",
        name: "Adblock",
        img: "/list/adblock.png",
        browser: "/list/all.png",
        url: "https://adblockplus.org/en/download",
        corporation: "Eyeo GmbH",
        categories: "extension"
    },
    {
        id: "bitwarden",
        name: "Bitwarden",
        img: "/list/bitwarden.png",
        browser: "/list/all.png",
        url: "https://bitwarden.com/download/",
        corporation: "Bitwarden",
        categories: "extension"
    },
    {
        id: "bonjourr",
        name: "Bonjourr",
        img: "/list/bonjourr.png",
        browser: "/list/all.png",
        url: "https://bonjourr.fr/use-bonjourr",
        corporation: "Victor & Tahoe",
        categories: "extension"
    },
    {
        id: "darkreader",
        name: "Dark Reader",
        img: "/list/darkreader.png",
        browser: "/list/all.png",
        url: "https://darkreader.org/",
        corporation: "Dark Reader",
        categories: "extension"
    },
    {
        id: "gamersclub",
        name: "GamersClub Booster",
        browser: "/list/chrome.png",
        img: "/list/gamersclub.png",
        url: "https://chrome.google.com/webstore/detail/gamersclub-booster/dahnmmlhchpmmlgebpkpaofbefjdlpin",
        corporation: "Gamers Club",
        categories: "extension"
    },
    {
        id: "gamersclub",
        name: "GamersClub Booster",
        browser: "/list/firefox.png",
        img: "/list/gamersclub.png",
        url: "https://addons.mozilla.org/pt-BR/firefox/addon/gamersclub-booster/",
        corporation: "Gamers Club",
        categories: "extension"
    },
    {
        id: "gumboc",
        name: "Gumbo: Twitch",
        browser: "/list/chrome.png",
        img: "/list/gumbo.png",
        url: "https://chrome.google.com/webstore/detail/gumbo-twitch-companion/aalmjfpohaedoddkobnibokclgeefamn",
        corporation: "Seldszar",
        categories: "extension"
    },
    {
        id: "gumbof",
        name: "Gumbo: Twitch",
        browser: "/list/firefox.png",
        img: "/list/gumbo.png",
        url: "https://addons.mozilla.org/en-US/firefox/addon/gumbo-twitch-companion/",
        corporation: "Seldszar",
        categories: "extension"
    },
    {
        id: "soundbooster",
        name: "Sound Booster",
        img: "/list/soundbooster.png",
        browser: "/list/chrome.png",
        url: "https://chrome.google.com/webstore/detail/sound-booster-increase-yo/njcpapmgiimlmlelomamnobmdmhpbfhd",
        corporation: "ExtBooster",
        categories: "extension"
    },
    {
        id: "minimaltwitter",
        name: "Minimal Theme for Twitter",
        img: "/list/minimaltwitter.png",
        browser: "/list/chrome.png",
        url: "https://chrome.google.com/webstore/detail/minimal-theme-for-twitter/pobhoodpcipjmedfenaigbeloiidbflp/related",
        corporation: "typefully.com",
        categories: "extension"
    },
    {
        id: "minimaltwitter",
        name: "Minimal Theme for Twitter",
        img: "/list/minimaltwitter.png",
        browser: "/list/firefox.png",
        url: "https://addons.mozilla.org/en-US/firefox/addon/minimaltwitter/",
        corporation: "typefully.com",
        categories: "extension"
    },
    {
        id: "mobilesimulator",
        name: "Mobile Simulator",
        img: "/list/mobilesimulator.png",
        browser: "/list/chrome.png",
        url: "https://chromewebstore.google.com/detail/mobile-simulator-responsi/ckejmhbmlajgoklhgbapkiccekfoccmk",
        corporation: "webmobilefirst.com",
        categories: "extension"
    },
    {
        id: "tabmuter",
        name: "Tab Muter",
        img: "/list/tabmuter.png",
        browser: "/list/chrome.png",
        url: "https://chrome.google.com/webstore/detail/tab-muter/bnclejfcblondkjliiblkojdeloomadd",
        corporation: "tab.muter.computer",
        categories: "extension"
    },
    {
        id: "unhook",
        name: "Unhook",
        img: "/list/unhook.png",
        browser: "/list/all.png",
        url: "https://unhook.app/",
        corporation: "unhook.app",
        categories: "extension"
    },
    {
        id: "whatsupplus",
        name: "WhatsUp+ Whatsapp Web",
        img: "/list/whatsupplus.png",
        browser: "/list/chrome.png",
        url: "https://chromewebstore.google.com/detail/whatsup+-for-whatsapp-web/lpbkofhnclhhlaibcklkgaonbbmhjeco",
        corporation: "whatsup.plus",
        categories: "extension"
    },
    {
        id: "couldready",
        name: "Could Ready",
        img: "/list/cloudready.png",
        url: "https://www.neverware.com/freedownload/",
        corporation: "Neverware",
        categories: "system"
    },
    {
        id: "linuxdistros",
        name: "Linux Distros",
        img: "/list/linux.png",
        url: "https://www.linux.org/pages/download/",
        corporation: "License GNU GPL",
        categories: "system"
    },
    {
        id: "windows786",
        name: "Windows 7 x86",
        img: "/list/windows7.png",
        url: "magnet:?xt=urn:btih:c55fb69644b12436c65564b1448c20df72e797d9&dn=Windows+7+Ultimate+SP1+PT-BR+x32+ISO&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969",
        corporation: "Microsoft Corporation",
        categories: "system"
    },
    {
        id: "windows764",
        name: "Windows 7 x64",
        img: "/list/windows7.png",
        url: "magnet:?xt=urn:btih:56b7f5469af705045e86020573b10f874965ca05&dn=Windows+7+Ultimate+SP1+PT-BR+x64+ISO&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969",
        corporation: "Microsoft Corporation",
        categories: "system"
    },
    {
        id: "windows10",
        name: "Windows 10 x86/x64",
        img: "/list/windows10.png",
        url: "https://www.microsoft.com/pt-br/software-download/windows10",
        corporation: "Microsoft Corporation",
        categories: "system"
    },
    {
        id: "windowsxp86",
        name: "Windows XP x86",
        img: "/list/windowsxp.png",
        url: "https://archive.org/download/WinXPProSP3x86/en_windows_xp_professional_with_service_pack_3_x86_cd_vl_x14-73974.iso",
        corporation: "Microsoft Corporation",
        categories: "system"
    },
    {
        id: "windowsxp64",
        name: "Windows XP x64",
        img: "/list/windowsxp.png",
        url: "https://archive.org/download/WindowsXPProfessional64BitCorporateEdition/Windows%20XP%20Professional%2064-bit%20Corporate%20Edition%28CD%20Key%20VCFQD-V9FX9-46WVH-K3CD4-4J3JM%29.iso",
        corporation: "Microsoft Corporation",
        categories: "system"
    },
    {
        id: "torrent",
        name: "µTorrent",
        img: "/list/utorrent.png",
        url: "http://www.utorrent.com/intl/pt/",
        corporation: "BitTorrent Client",
        categories: "utility"
    },
    {
        id: "1password",
        name: "1Password",
        img: "/list/1password.png",
        url: "https://1password.com/pt/downloads/windows/",
        corporation: "AgileBits Inc.",
        categories: "utility"
    },
    {
        id: "7zip",
        name: "7-Zip",
        img: "/list/7zip.png",
        url: "http://www.7-zip.org/",
        corporation: "License GNU LGPL",
        categories: "utility"
    },
    {
        id: "advancedsystemcare",
        name: "Advanced Systemcare",
        img: "/list/advanced.png",
        url: "https://www.iobit.com/pt/advanced-systemcare-antivirus.php",
        corporation: "IObit Software",
        categories: "utility"
    },
    {
        id: "allruntimes",
        name: "All in One Runtimes",
        img: "/list/windowsxp.png",
        url: "https://www.computerbase.de/downloads/systemtools/all-in-one-runtimes/?url=108453",
        corporation: "Computer Base",
        categories: "utility"
    },
    {
        id: "anydesk",
        name: "AnyDesk",
        img: "/list/anydesk.png",
        url: "https://anydesk.com/en/downloads",
        corporation: "AnyDesk Software GmbH",
        categories: "utility"
    },
    {
        id: "atubecatcher",
        name: "Atube Catcher",
        img: "/list/atube.png",
        url: "https://www.atube.me/",
        corporation: "DsNET Corporation",
        categories: "utility"
    },
    {
        id: "avast",
        name: "Avast Antivirus",
        img: "/list/avast.png",
        url: "https://www.avast.com/",
        corporation: "Avast Software",
        categories: "utility"
    },
    {
        id: "avira",
        name: "Avira Antivirus",
        img: "/list/avira.png",
        url: "https://www.avira.com/pt-br/downloads",
        corporation: "Avira Operations",
        categories: "utility"
    },
    {
        id: "bittorrent",
        name: "BitTorrent",
        img: "/list/bittorrent.png",
        url: "http://www.bittorrent.com/lang/pt_br/downloads/",
        corporation: "BitTorrent Inc.",
        categories: "utility"
    },
    {
        id: "bitwarden",
        name: "Bitwarden",
        img: "/list/bitwarden.png",
        url: "https://bitwarden.com/download/",
        corporation: "Bitwarden.com",
        categories: "utility"
    },
    {
        id: "ccleaner",
        name: "CCleaner",
        img: "/list/ccleaner.png",
        url: "https://www.ccleaner.com/download",
        corporation: "Piriform",
        categories: "utility"
    },
    {
        id: "cdburner",
        name: "CDBurnerXP",
        img: "/list/cdburner.png",
        url: "https://cdburnerxp.se/en/download",
        corporation: "Canneverbe Limited",
        categories: "utility"
    },
    {
        id: "cpuz",
        name: "CPU-Z",
        img: "/list/cpuz.png",
        url: "https://www.cpuid.com/softwares/cpu-z.html",
        corporation: "CPUID",
        categories: "utility"
    },
    {
        id: "driverbooster",
        name: "Driver Booster",
        img: "/list/driverbooster.png",
        url: "https://www.iobit.com/pt/driver-booster.php",
        corporation: "IObit Software",
        categories: "utility"
    },
    {
        id: "eartrumpet",
        name: "EarTrumpet",
        img: "/list/eartrumpet.png",
        url: "https://eartrumpet.app/",
        corporation: "File-New-Project",
        categories: "utility"
    },
    {
        id: "emclient",
        name: "eM Client",
        img: "/list/emclient.png",
        url: "https://www.emclient.com/",
        corporation: "eM Client",
        categories: "utility"
    },
    {
        id: "files",
        name: "Files",
        img: "/list/files.png",
        url: "https://files-community.github.io/",
        corporation: "Yair A",
        categories: "utility"
    },
    {
        id: "geforce",
        name: "Geforce Experience",
        img: "/list/geforce.png",
        url: "http://www.nvidia.com.br/object/geforce-experience-br.html",
        corporation: "Nvidia Corporation",
        categories: "utility"
    },
    {
        id: "hp",
        name: "HP Support Assistant",
        img: "/list/hp.png",
        url: "http://www8.hp.com/br/pt/campaigns/hpsupportassistant/hpsupport.html",
        corporation: "Hewlett Package",
        categories: "utility"
    },
    {
        id: "hyperx",
        name: "HyperX NGenuity",
        img: "/list/hyperx.png",
        url: "https://www.hyperxgaming.com/br/ngenuity",
        corporation: "Kingston Technology",
        categories: "utility"
    },
    {
        id: "irfanview",
        name: "Irfanview",
        img: "/list/irfanview.png",
        url: "https://www.irfanview.com",
        corporation: "Irfanview, Freeware",
        categories: "utility"
    },
    {
        id: "malware",
        name: "Malware Fighter",
        img: "/list/malware.png",
        url: "https://www.iobit.com/pt/malware-fighter.php",
        corporation: "IObit Software",
        categories: "utility"
    },
    {
        id: "lastpass",
        name: "Lastpass",
        img: "/list/lastpass.png",
        url: "https://www.lastpass.com/pt",
        corporation: "Lastpass",
        categories: "utility"
    },
    {
        id: "libreoffice",
        name: "LibreOffice",
        img: "/list/libreoffice.png",
        url: "https://pt-br.libreoffice.org/baixe-ja/",
        corporation: "Document Foundation",
        categories: "utility"
    },
    {
        id: "lightshot",
        name: "Lightshot",
        img: "/list/lightshot.png",
        url: "https://app.prntscr.com/build/setup-lightshot.exe",
        corporation: "Skillbrains",
        categories: "utility"
    },
    {
        id: "mailbird",
        name: "Mailbird",
        img: "/list/mailbird.png",
        url: "https://www.getmailbird.com/",
        corporation: "Mailbird",
        categories: "utility"
    },
    {
        id: "notion",
        name: "Notion",
        img: "/list/notion.png",
        url: "https://www.notion.so/desktop",
        corporation: "Notion Labs, Inc.",
        categories: "utility"
    },
    {
        id: "powertoys",
        name: "Microsoft PowerToys",
        img: "/list/powertoys.png",
        url: "https://github.com/microsoft/PowerToys/releases",
        corporation: "Microsoft Corporation",
        categories: "utility"
    },
    {
        id: "modernflyouts",
        name: "ModernFlyouts",
        img: "/list/modernflyouts.png",
        url: "https://modernflyouts-community.github.io/",
        corporation: "Sam G",
        categories: "utility"
    },
    {
        id: "thunderbird",
        name: "Mozilla Thurderbird",
        img: "/list/thunderbird.png",
        url: "https://www.mozilla.org/pt-BR/thunderbird/",
        corporation: "Mozilla Foundation",
        categories: "utility"
    },
    {
        id: "msiafterburner",
        name: "MSI Afterburner",
        img: "/list/msiafterburner.png",
        url: "https://www.msi.com/Landing/afterburner/graphics-cards",
        corporation: "Micro-Star International",
        categories: "utility"
    },
    {
        id: "netframework",
        name: "NET Framework",
        img: "/list/netframework.png",
        url: "https://www.microsoft.com/pt-br/download/details.aspx?id=17851",
        corporation: "Microsoft Corporation",
        categories: "utility"
    },
    {
        id: "notepads",
        name: "Notepads App",
        img: "/list/notepads.png",
        url: "https://www.notepadsapp.com/",
        corporation: "Jackie Liu",
        categories: "utility"
    },
    {
        id: "operamail",
        name: "Opera Mail",
        img: "/list/operamail.png",
        url: "https://opera-mail.br.jaleco.com/",
        corporation: "Opera Software",
        categories: "utility"
    },
    {
        id: "pantherbar",
        name: "Pantherbar",
        img: "/list/pantherbar.png",
        url: "https://pantherbar-app.com/",
        corporation: "Johannes Tscholl",
        categories: "utility"
    },
    {
        id: "razercortex",
        name: "Razer Cortex",
        img: "/list/razercortex.png",
        url: "http://www.razerzone.com/br-pt/cortex",
        corporation: "Razer Inc.",
        categories: "utility"
    },
    {
        id: "razersynapse",
        name: "Razer Synapse",
        img: "/list/razersynapse.png",
        url: "https://www2.razer.com/br-pt/synapse-3",
        corporation: "Razer Inc.",
        categories: "utility"
    },
    {
        id: "realtek",
        name: "Realtek PCIe GBE",
        img: "/list/realtek.png",
        url: "https://www.realtek.com/en/component/zoo/category/pc-audio-codecs-high-definition-audio-codecs-software",
        corporation: "Realtek Semiconductior",
        categories: "utility"
    },
    {
        id: "slimdrivers",
        name: "SlimDrivers",
        img: "/list/slimdrivers.png",
        url: "https://slimdrivers.br.uptodown.com/windows/download",
        corporation: "SlimWare",
        categories: "utility"
    },
    {
        id: "soundswitch",
        name: "SoundSwitch",
        img: "/list/soundswitch.png",
        url: "https://soundswitch.aaflalo.me/",
        corporation: "Aaflalo",
        categories: "utility"
    },
    {
        id: "taskbarx",
        name: "Taskbar X",
        img: "/list/taskbarx.png",
        url: "https://github.com/ChrisAnd1998/TaskbarX/releases/",
        corporation: "Chris Andriessen",
        categories: "utility"
    },
    {
        id: "translucent",
        name: "Translucent TB",
        img: "/list/translucent.png",
        url: "https://www.microsoft.com/pt-br/p/translucenttb/9pf4kz2vn4w9",
        corporation: "Charles Milette",
        categories: "utility"
    },
    {
        id: "unetbootin",
        name: "Unetbootin",
        img: "/list/unetbootin.png",
        url: "https://unetbootin.github.io/",
        corporation: "HabitLab",
        categories: "utility"
    },
    {
        id: "ventoy",
        name: "Ventoy",
        img: "/list/ventoy.png",
        url: "https://www.ventoy.net/en/download.html",
        corporation: "Longpanda",
        categories: "utility"
    },
    {
        id: "visualc",
        name: "Visual C++ Redistributable",
        img: "/list/windowsxp.png",
        url: "https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170",
        corporation: "Microsoft",
        categories: "utility"
    },

    {
        id: "virtualbox",
        name: "VirtualBox Oracle VM",
        img: "/list/virtualbox.png",
        url: "https://www.virtualbox.org/wiki/Downloads",
        corporation: "Oracle Corporation",
        categories: "utility"
    },
    {
        id: "winrar",
        name: "WinRAR",
        img: "/list/winrar.png",
        url: "https://www.win-rar.com/download.html",
        corporation: "Eugene Roshal",
        categories: "utility"
    },
    {
        id: "uninstaller",
        name: "Uninstaller",
        img: "/list/uninstaller.png",
        url: "https://www.iobit.com/pt/advanceduninstaller.php",
        corporation: "IObit Software",
        categories: "utility"
    },
    {
        id: "apache",
        name: "Apache Guacamole",
        img: "/list/apache.png",
        url: "https://guacamole.apache.org/releases/",
        corporation: "Apache Software",
        categories: 'communication'
    },
    {
        id: "discord",
        name: "Discord",
        img: "/list/discord.png",
        url: "https://discordapp.com/download",
        corporation: "Discord",
        categories: 'communication'
    },
    {
        id: "franz",
        name: "Franz",
        img: "/list/franz.png",
        url: "http://meetfranz.com/#download",
        corporation: "Stefan Malzner",
        categories: 'communication'
    },
    {
        id: "hamachi",
        name: "Hamachi",
        img: "/list/hamachi.png",
        url: "https://www.vpn.net/",
        corporation: "LogMeIn",
        categories: 'communication'
    },
    {
        id: "rocket-chat",
        name: "Rocket Chat",
        img: "/list/rocketchat.png",
        url: "https://rocket.chat/",
        corporation: "rocket.chat",
        categories: 'communication'
    },
    {
        id: "slack",
        name: "Slack",
        img: "/list/slack.png",
        url: "https://slack.com/intl/pt-br/downloads/",
        corporation: "Slack Technologies",
        categories: 'communication'
    },
    {
        id: "teamspeak",
        name: "Teamspeak",
        img: "/list/teamspeak.png",
        url: "https://www.teamspeak.com/en/downloads/",
        corporation: "Teamspeak Systems",
        categories: 'communication'
    },
    {
        id: "teamviewer",
        name: "Teamviewer",
        img: "/list/teamviewer.png",
        url: "https://www.teamviewer.com/pt-br/download/",
        corporation: "Teamviewer",
        categories: 'communication'
    },
    {
        id: "telegram",
        name: "Telegram Desktop",
        img: "/list/telegram.png",
        url: "https://telegram.org/apps",
        corporation: "Telegram Messenger",
        categories: 'communication'
    },
    {
        id: "whatsapp",
        name: "Whatsapp Desktop x64",
        img: "/list/whatsapp.png",
        url: "https://www.mediafire.com/file/clp2tmszdgejvkm/WhatsAppSetup.exe/file",
        corporation: "Facebook Inc",
        categories: 'communication'
    },
    {
        id: "whatsapp",
        name: "Whatsapp Desktop x86",
        img: "/list/whatsapp.png",
        url: "https://www.mediafire.com/file/tzkioucel5gqy0l/WhatsAppSetup_x86.exe/file",
        corporation: "Facebook Inc",
        categories: 'communication'
    }
]

export default items