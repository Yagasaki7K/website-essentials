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

                    <meta name="title" content="Web Essentials by Kalify Inc"/>
                    <meta name="keywords" content="web, essentials, formatting, software, essencial, ethernet, 
                    internet, linux, windows, ios, apple, lost, app, desktop, open, source, iobit, dropbox, 
                    google, drive, icloud, mega, onedrive, whatsapp, telegram, hamachi, discord"/>
                    <meta name="robots" content="index, follow"/>
                    <meta name="author" content="Anderson 'Yagasaki' Marlon"/>

                    <meta name="description" content="Lista de softwares essenciais para ter instalado em seu computador. Especialmente se você acabou de formatar ou não lembra de quais softwares são importantes para você."/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:url" content="https://webessentials.com.br/"/>
                    <meta property="og:title" content="Web Essentials by Kalify Inc"/>
                    <meta property="og:description" content="Lista de softwares essenciais para ter instalado em seu computador. Especialmente se você acabou de formatar ou não lembra de quais softwares são importantes para você."/>
                    <meta property="og:image" content="https://i.imgur.com/Xb2cfxM.png"/>

                    <meta property="twitter:card" content="summary_large_image"/>
                    <meta property="twitter:url" content="https://webessentials.com.br/"/>
                    <meta property="twitter:title" content="Web Essentials by Kalify Inc"/>
                    <meta property="twitter:description" content="Lista de softwares essenciais para ter instalado em seu computador. Especialmente se você acabou de formatar ou não lembra de quais softwares são importantes para você."/>
                    <meta property="twitter:image" content="https://imgur.com/Xb2cfxM.png"/>
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