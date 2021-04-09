import "../styles/globals.css"
import "../styles/Home.module.css"
import { ThemeProvider } from "styled-components"
import { theme } from "../theme"
import ResetCss from "../components/resetCSS"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ResetCss />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
