import { themeGet } from "@styled-system/theme-get"
import styled from "styled-components"

export const ProjectWrapper = styled.div`
  position: relative;
  padding: 90px 75px 0 75px;
  @media (max-width: 990px) {
    padding: 80px 45px 30px 45px;
  }
  @media (max-width: 575px) {
    padding: 60px 25px 0 25px;
  }
`

export const ProjectNotice = styled.div`
  border: 1px solid ${themeGet("colors.primary")};
  padding: 36px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  span {
    color: ${themeGet("colors.primary")};
  }
  ul {
    margin-left: 16px;
  }
  p {
    margin: 0;
    padding: 0;
  }
`

export const ProjectHeaderWrapper = styled.div`
  width: 870px;
  max-width: 100%;
  margin: 0 auto;
  h1 {
    span {
      color: ${themeGet("colors.primary")};
    }
  }
  h2 {
    font-size: 30px;
    font-weight: 700;
    color: ${themeGet("colors.textColor", "#292929")};
    line-height: 1.53;
    margin-bottom: 10px;
    @media (max-width: 990px) {
      font-size: 26px;
    }
    @media (max-width: 767px) {
      font-size: 22px;
      margin-bottom: 10px;
    }
  }
`

export const ProjectPageTitle = styled.div`
  margin-bottom: 45px;
  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
  span {
    color: ${themeGet("colors.primary")};
  }
  h2 {
    font-size: 30px;
    font-weight: 700;
    color: ${themeGet("colors.textColor", "#292929")};
    line-height: 1.53;
    margin-bottom: 10px;
    @media (max-width: 990px) {
      font-size: 26px;
    }
    @media (max-width: 767px) {
      font-size: 22px;
      margin-bottom: 10px;
    }
  }
`

export const ProjectImage = styled.div`
  margin-bottom: 90px;
  @media (max-width: 990px) {
    margin-bottom: 60px;
  }
  @media (max-width: 767px) {
    margin-bottom: 40px;
  }
`

export const ProjectDetails = styled.div`
  width: 870px;
  max-width: 100%;
  margin: 0 auto;

  h2 {
    font-size: 30px;
    font-weight: 700;
    color: ${themeGet("colors.textColor", "#292929")};
    line-height: 1.53;
    margin-bottom: 10px;
    @media (max-width: 990px) {
      font-size: 26px;
    }
    @media (max-width: 767px) {
      font-size: 22px;
      margin-bottom: 10px;
    }
  }
`
export const SocialProfiles = styled.div`
  margin-top: 60px;
  position: relative;
  @media (max-width: 767px) {
    margin-top: 40px;
  }

  &:before {
    content: "";
    width: 30px;
    height: 1px;
    background: #292929;
    display: block;
    margin-bottom: 60px;
    @media (max-width: 767px) {
      margin-bottom: 40px;
    }
  }
`
export const ProjectStructureImageWrapper = styled.div`
  position: relative;
  display: block;
  margin: 0 auto;
  width: 100%;
`

export const ProjectStructureImage = styled.img`
  position: relative;
  display: block;
  margin: 0 auto;
  max-width: 600px;
  @media (max-width: 990px) {
    max-width: 400px;
  }
  @media (max-width: 767px) {
    max-width: 100%;
  }
`
