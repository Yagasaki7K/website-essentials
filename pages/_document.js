import { ServerStyleSheet } from 'styled-components';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { useEffect } from 'react';

export default class MyDocument extends Document {

    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* PWA primary color */}
                    <link rel="shortcut icon" href="/favicon.png" type="image/png"></link>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                    
                    <meta name="title" content="Web Essentials"/>
                    <meta name="description" content="Essential softwares for your computer"/>
                    <meta name="keywords" content="web, essentials, formatting, software, essencial, ethernet, 
                    internet, linux, windows, ios, apple, lost, app, desktop, open, source, iobit, dropbox, 
                    google, drive, icloud, mega, onedrive, whatsapp, telegram, hamachi, discord"/>
                    <meta name="robots" content="index, follow"/>
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
                    <meta name="language" content="English"/>
                    <meta name="author" content="Anderson 'Yagasaki' Marlon"/>
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