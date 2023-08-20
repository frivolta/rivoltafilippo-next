import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { theme } from '../theme';
import { ThemeProvider } from 'styled-components';
import { site } from 'config';
import ResetCSS from 'ResetCSS';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DZD0FG8FEB"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DZD0FG8FEB');
          `,
          }}
        />
        <title>{site.siteMetadata.title}</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta property="og:title" content={site.siteMetadata.title} />
        <meta
          property="og:description"
          content={site.siteMetadata.description}
        />
        <meta property="og:url" content={site.siteMetadata.siteUrl} />
        <meta name="description" content={site.siteMetadata.description} />
        <meta property="og:type" content="website" />
        <link rel="shortcut icon" href="/favicon-32x32.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />
      </Head>
      <main className="app">
        <ResetCSS />
        <ThemeProvider theme={{ theme }}>
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </>
  );
}

export default CustomApp;
