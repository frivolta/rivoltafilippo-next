import "../styles/globals.css"
import "../styles/Home.module.css"
import { ThemeProvider } from "styled-components"
import { theme } from "../theme"
import ResetCss from "../components/resetCSS"
import Head from "next/head"
import { site } from "../config"



function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{site.siteMetadata.title}</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta property="og:title" content={site.siteMetadata.title} />
        <meta property="og:description" content={site.siteMetadata.description} />
        <meta property="og:url" content={site.siteMetadata.siteUrl} />
        <meta name="description" content={site.siteMetadata.description} />
        <meta property="og:type" content="website" />
        <link rel="shortcut icon" href="/favicon-32x32.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link
              href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
              rel="stylesheet"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"/>
      </Head>
      <ResetCss />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp