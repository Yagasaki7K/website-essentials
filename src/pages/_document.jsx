import { ServerStyleSheet } from "styled-components";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="pt-br">
				<title>Essentials | Apps, Browsers and Extensions</title>
				<Head>
					{/* PWA primary color */}
					<link rel="shortcut icon" type="image/png" href="/favicon.png" />
					<link rel="apple-touch-icon" href="/favicon-512.png" />
					<meta name="application-name" content="Essentials" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-status-bar-style" content="default" />
					<meta name="apple-mobile-web-app-title" content="Essentials" />
					<link rel="manifest" href="/manifest.json" />
					<meta name="theme-color" content="#bd93f9" />

					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
					<link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>

					<meta name="title" content="Essentials | Apps, Browsers and Extensions" />
					<meta
						name="keywords"
						content="web, essentials, formatting, software, essencial, ethernet,
                    internet, linux, windows, ios, apple, lost, app, desktop, open, source, iobit, dropbox,
                    google, drive, icloud, mega, onedrive, whatsapp, telegram, hamachi, discord, utility, util, apps,
                    softwares, browsers, extensions"
					/>
					<meta name="robots" content="index, follow" />
					<meta name="author" content="Anderson 'Yagasaki' Marlon" />

					<meta
						name="description"
						content="List of essential software to have installed on your computer. Especially if you have just formatted or do not remember which software is important to you."
					/>
					<meta property="og:type" content="website" />
					<meta property="og:url" content="https://webessentials.com.br/" />
					<meta property="og:title" content="Essentials | Apps, Browsers and Extensions" />
					<meta
						property="og:description"
						content="List of essential software to have installed on your computer. Especially if you have just formatted or do not remember which software is important to you."
					/>
					<meta property="og:image" content="https://user-images.githubusercontent.com/23272064/234155935-2426d680-0f9d-44b8-af07-45be480aa968.png" />

					<meta property="twitter:card" content="summary_large_image" />
					<meta property="twitter:url" content="https://webessentials.com.br/" />
					<meta property="twitter:title" content="Essentials | Apps, Browsers and Extensions" />
					<meta
						property="twitter:description"
						content="List of essential software to have installed on your computer. Especially if you have just formatted or do not remember which software is important to you."
					/>
					<meta property="twitter:image" content="https://user-images.githubusercontent.com/23272064/234155935-2426d680-0f9d-44b8-af07-45be480aa968.png" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}

	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
}
