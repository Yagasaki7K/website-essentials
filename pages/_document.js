import { ServerStyleSheet } from 'styled-components';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {

    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* PWA primary color */}
                    <link rel="shortcut icon" href="/favicon.png" type="image/png"></link>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                    <title>Web Essentials by Kalify</title>
                    <link rel="canonical" href="https://webessentials.netlify.com" />
                    <meta name="description" content="Essential applications for your computer"></meta>
                    <meta name="keywords" content="Anderson, Marlon, Design, Github, Código Aberto, Open Source, Open, Source, 
                    Antech, Developers, Software, Essentials, Web, Formatação, Windows, Serial, Key, Onigiri, Hardcore, Essencial, 
                    Programas, Internet, Brasil, Linux, Ubuntu, Telegram, Whatsapp, NERV, Aperture, Laboratories, Labs"/>
                    <meta name="author" content="Anderson Marlon"/>
                    <meta name="robots" content="index, follow"></meta>
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