import React from "react"
import { IntroWrapper, IntroImage, IntroTitle, Desciption } from "./style"
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io"
import Button from "../../../components/Button/button"
import SocialProfile from "../../../components/SocialProfile/socialProfile"
import Image from "next/image"

type IntroProps = {}

const SocialLinks = [
  {
    icon: <IoLogoInstagram />,
    url: "https://www.instagram.com/filippo.jsx/",
    tooltip: "Instagram",
  },
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
        Front-end <b>development </b>
        and Ui Design.
      </IntroTitle>
      <Desciption>
        Hi, I am a highly motivated <b>front-end developer</b> and Ui designer
        crafting rich <b>User Experiences</b> with minimal and aesthetically
        pleasing interfaces located in <b>Milan, Italy</b>. I have experience in
        developing websites and web applications based on web standard
        technologies like HTML, CSS, <b>JavaScript</b> and PHP. I am passionate
        about web development with a special affinity for{" "}
        <b>client-side technologies.</b>
      </Desciption>
      <Desciption>
        <a href="/downloads/rivoltafilippo-cv-01042021.pdf" target="_blank">
          <Button title="Download CV (IT)" className="no-space margin-top" />
        </a>
      </Desciption>
      <SocialProfile items={SocialLinks} />
    </IntroWrapper>
  )
}

export default Intro
