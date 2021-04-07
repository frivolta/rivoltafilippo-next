import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../containers/Project"

type ProjectPageProps = {}

const ProjectPage: React.FunctionComponent<ProjectPageProps> = () => {
  return (
    <Layout>
      <SEO
        title="Filippo Rivolta - Project Me"
        description="I am a highly motivated Front-end developer crafting rich User Experiences with minimal and aesthetically pleasing interfaces located in Milan, Italy."
      />

      <Project />
    </Layout>
  )
}

export default ProjectPage
