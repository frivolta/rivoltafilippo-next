import * as React from "react"
import {
  ProjectWrapper,
  ProjectDetails,
  ProjectPageTitle,
  ProjectStructureImageWrapper,
  ProjectStructureImage,
  ProjectNotice,
} from "./style"

import FullTitle from "../../components/FullTitle/fullTitle"
import Timeline from "../../components/Timeline/timeline"
import TagList from "../../components/TagList/tagList"

interface ProjectProps {}

const Project: React.FunctionComponent<ProjectProps> = () => {
  //Define array of timeline
  const timelineItems = [
    {
      title: "Ui / Ux Design",
      active: false,
    },
    {
      title: "REST API / Backend Dev",
      active: false,
    },
    {
      title: "Front-end development",
      active: true,
    },
    {
      title: "MVP Release",
      active: false,
    },
  ]

  //Define array of tags
  const tagList = [
    "React",
    "Express",
    "MongoDB",
    "Node",
    "JavaScript",
    "Redux",
    "Passport",
    "React Native",
  ]

  return (
    <ProjectWrapper>
      <ProjectDetails>
        <ProjectPageTitle>
          <ProjectNotice>
            <p>
              <strong>
                <span>Note:</span> Due to lack of time after the mvp relase this
                project is going to be rebuild with one of the following tool
                stack:
              </strong>
              <ul>
                <li>
                  Graphql, Apollo, NestJS, React, Postgres, Styled components,
                  Cognito, Cypress.
                </li>
                <li>
                  NestJS Rest Api, Postgres, React, Styled components, Cognito,
                  Cypress.
                </li>
              </ul>
            </p>
          </ProjectNotice>
          <h2>
            <span>Budgety</span> is a <span>MERN stack</span> based web and
            native application. Cross-platform, everyday, cash flow and{" "}
            <span>expense tracker.</span>
          </h2>
        </ProjectPageTitle>
        <p>
          Nowadays using an expense tracker is a must, living in a big city can
          easily lead you to lose your financial control. I have come across
          many budgeting applications, most of them were overcomplicated for
          everyday purposes or didn't give me the right look and feel. For this
          reason, I decided to start developing an{" "}
          <strong>
            experimental, fast and intuitive app for everyday expenses with a
            synced database to easily manage data between multiple devices.
          </strong>
        </p>
        <ProjectPageTitle>
          <FullTitle
            title="Front-end Development"
            subtitle="CURRENTLY WORKING ON"
          />
          <Timeline timelineItems={timelineItems} />
        </ProjectPageTitle>
        <ProjectPageTitle>
          <FullTitle title="Technologies" subtitle="STACK TAGS" />
          <TagList tagList={tagList} />
        </ProjectPageTitle>
        <ProjectPageTitle>
          <h2>
            Budgety is made with <span>Mongo</span>, <span>Nginx</span>,{" "}
            <span>React</span>, <span>Node</span>. The app is powered by{" "}
            <span>microservices</span> and deployed on Digitalocean.
          </h2>
        </ProjectPageTitle>
        <p>
          The application frontend, developed with <strong>React</strong> for
          the web application and <strong>React Native</strong> for the mobile
          application, uses a single source of truth thanks to the help of{" "}
          <strong>Redux</strong>. Axios takes care of the communication to the{" "}
          <strong>Express's controller through REST Api's.</strong>
          Authentication is made easy with Passport strategies and JWT tokens.
          As soon as the user lands on the login page is prompted with a
          login/signup form, and then is invited to start a new balance account.
          The idea is to drive the user in a{" "}
          <strong>simple decision flow without</strong> the need for any
          tutorial. The web application is studied to let people manage their
          accounts and expenses in a global manner, on the other hand, the
          native application prefers a more straightforward use, allowing the
          immediate insertion of expenses. All components, from buttons to forms
          are tailored to the application from scratch. Future steps involve{" "}
          <strong>A/B testing and refactoring</strong>. The application's
          minimum viable product will be available soon for beta testing.
        </p>
        <ProjectPageTitle>
          <FullTitle title="Achitecture" subtitle="Structure" />
        </ProjectPageTitle>
        <ProjectStructureImageWrapper>
          <ProjectStructureImage src="/images/mern_stack_architecture.svg" />
        </ProjectStructureImageWrapper>
      </ProjectDetails>
    </ProjectWrapper>
  )
}

export default Project
