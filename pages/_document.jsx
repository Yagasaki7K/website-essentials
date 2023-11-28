import { ServerStyleSheet } from 'styled-components';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {

    render() {
        return (
            <Html lang="pt-br">
                <title>Essentials | Apps, Navegadores e Extensões</title>
                <Head>
                    {/* PWA primary color */}
                    <link rel="shortcut icon" type="image/png" href="/favicon.png" />
                    <link rel="apple-touch-icon" href="/favicon-512.png" />
                    <meta name="application-name" content="Essentials" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                    <meta name="apple-mobile-web-app-title" content="Essentials" />
                    <link rel="manifest" href="/manifest.json" />
                    <meta name="theme-color" content='#bd93f9' />

                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>

                    <meta name="title" content="Essentials | Apps, Navegadores e Extensões" />
                    <meta name="keywords" content="web, essentials, formatting, software, essencial, ethernet,
                    internet, linux, windows, ios, apple, lost, app, desktop, open, source, iobit, dropbox,
                    google, drive, icloud, mega, onedrive, whatsapp, telegram, hamachi, discord"/>
                    <meta name="robots" content="index, follow" />
                    <meta name="author" content="Anderson 'Yagasaki' Marlon" />

                    <meta name="description" content="Lista de softwares essenciais para ter instalado em seu computador. Especialmente se você acabou de formatar ou não lembra de quais softwares são importantes para você." />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://webessentials.com.br/" />
                    <meta property="og:title" content="Essentials | Apps, Navegadores e Extensões" />
                    <meta property="og:description" content="Lista de softwares essenciais para ter instalado em seu computador. Especialmente se você acabou de formatar ou não lembra de quais softwares são importantes para você." />
                    <meta property="og:image" content="https://user-images.githubusercontent.com/23272064/234155935-2426d680-0f9d-44b8-af07-45be480aa968.png" />

                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://webessentials.com.br/" />
                    <meta property="twitter:title" content="Essentials | Apps, Navegadores e Extensões" />
                    <meta property="twitter:description" content="Lista de softwares essenciais para ter instalado em seu computador. Especialmente se você acabou de formatar ou não lembra de quais softwares são importantes para você." />
                    <meta property="twitter:image" content="https://user-images.githubusercontent.com/23272064/234155935-2426d680-0f9d-44b8-af07-45be480aa968.png" />
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
