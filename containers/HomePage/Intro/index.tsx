import React from "react"
import { IntroWrapper, IntroImage, IntroTitle, Desciption } from "./style"
import { IoLogoLinkedin } from "react-icons/io"
import Button from "../../../components/Button/button"
import SocialProfile from "../../../components/SocialProfile/socialProfile"
import Image from "next/image"

type IntroProps = {}

const SocialLinks = [
  {
    icon: <IoLogoLinkedin />,
    url: "https://www.linkedin.com/in/filippo-rivolta-49b9723b/",
    tooltip: "Linkedin",
  },
]

const Intro: React.FunctionComponent<IntroProps> = () => {
  const AuthorImage = "/images/author.jpg"

  return (
    <IntroWrapper>
      <IntroImage>
        <Image src={AuthorImage} alt="author" width="210px" height="210px" />
      </IntroImage>
      <IntroTitle>
        Front-end Lead <b>developer </b>
        and Ui Designer.
      </IntroTitle>
      <Desciption>
       Hi, I am a <b>Front-end developer</b> creating <b>accessible</b> and <b>user-centric interfaces</b>. I am a <b>Full-stack development</b> passionate, this enables me to provide valuable contributions to both front-end and back-end projects. My background in UI design allows me to bring a unique perspective and design-minded approach to my development work, resulting in exceptional user experiences. As a <b>team player</b>, I take pride in <b>mentoring</b> other developers to achieve project success.
      </Desciption>
      <Desciption>
        <a href="/downloads/filippo-rivolta-cv-2023.pdf" target="_blank">
          <Button title="Download CV " className="no-space margin-top" />
        </a>
      </Desciption>
      <SocialProfile items={SocialLinks} />
    </IntroWrapper>
  )
}

export default Intro
