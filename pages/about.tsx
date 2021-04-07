import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../containers/About"

type AboutPageProps = {}

const AboutPage: React.FunctionComponent<AboutPageProps> = () => {
  return (
    <Layout>
      <SEO
        title="About Me"
        description="I am a highly motivated Front-end developer crafting rich User Experiences with minimal and aesthetically pleasing interfaces located in Milan, Italy."
      />

      <About />
    </Layout>
  )
}

export default AboutPage
