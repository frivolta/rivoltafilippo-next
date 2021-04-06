import * as React from "react"
import { FullTitleWrapper } from "./fullTitle.style"

type FullTitleProps = {
  title: string
  subtitle: string
}

const FullTitle: React.FunctionComponent<FullTitleProps> = ({
  title,
  subtitle,
}) => {
  return (
    <FullTitleWrapper>
      <span>{subtitle}</span>
      <h2>{title}</h2>
    </FullTitleWrapper>
  )
}

FullTitle.defaultProps = {
  title: "Title",
  subtitle: "Subtitle",
}

export default FullTitle
