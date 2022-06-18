import { ServerStyleSheet } from 'styled-components';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {

    render() {
        return (
            <Html lang="pt-br">
                    <title>Web Essentials</title>
                <Head>
                    {/* PWA primary color */}
                    <link rel="shortcut icon" href="/favicon.png" type="image/png"></link>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

                    <meta name="title" content="Web Essentials"/>
                    <meta name="description" content="Softwares essenciais para o seu computador"/>
                    <meta name="keywords" content="web, essentials, formatting, software, essencial, ethernet, 
                    internet, linux, windows, ios, apple, lost, app, desktop, open, source, iobit, dropbox, 
                    google, drive, icloud, mega, onedrive, whatsapp, telegram, hamachi, discord"/>
                    <meta name="robots" content="index, follow"/>
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
                    <meta name="author" content="Anderson 'Yagasaki' Marlon"/>

                    <meta property="og:site_name" content="Web Essentials" />
                    <meta property="og:url" content="http://www.webessentials.com.br" />
                    <meta name="og:title" content="Web Essentials"/>
                    <meta name="og:image" content="https://webessentials.com.br/Logo.png"/>
                    <meta name="og:description" content="Softwares essenciais para o seu computador"/>
                    <meta property="og:type" content="website" />
                    <meta property="og:image:height" content="418" />
                    <meta property="og:image:width" content="800" />

                    <meta name="twitter:site" content="@KalifyInc" />
                    <meta name="twitter:creator" content="@KalifyInc" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:image:src" content="https://webessentials.com.br/Logo.png" />

                    <link rel="image_src" href="https://webessentials.com.br/Logo.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
                    )
    }

    static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
                });

        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: (
        <>
            {initialProps.styles}
            {sheet.getStyleElement()}
        </>
        )
        };
    } finally {
        sheet.seal();
    }
  }
}