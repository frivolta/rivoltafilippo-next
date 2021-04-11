import "../styles/globals.css"
import "../styles/Home.module.css"
import { ThemeProvider } from "styled-components"
import { theme } from "../theme"
import ResetCss from "../components/resetCSS"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Filippo Rivolta, Front-End Developer</title>
        <link rel="shortcut icon" href="/favicon-32x32.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ResetCss />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
