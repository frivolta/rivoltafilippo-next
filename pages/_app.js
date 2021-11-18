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
        <meta property="og:title" content={site.siteMetadata.title} />
        <meta property="og:description" content={site.siteMetadata.description} />
        <meta property="og:url" content={site.siteMetadata.siteUrl} />
        <meta name="description" content={site.siteMetadata.description} />
        <meta property="og:type" content="website" />
        <link rel="shortcut icon" href="/favicon-32x32.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ResetCss />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp