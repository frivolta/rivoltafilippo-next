import * as React from "react"
import Image from "gatsby-image"
import { IconWrapper } from "./style"

type Icon = {
  id: string
  name: string
  url: string
  title: string
}
type IconListProps = {
  icons: Icon[]
}

const IconList: React.FunctionComponent<IconListProps> = ({ icons }) => {
  return (
    <div>
      {icons.map(icon => (
        <IconWrapper key={icon.id}>
          <img src={icon.url} alt={icon.name} />
          <span>{icon.title}</span>
        </IconWrapper>
      ))}
    </div>
  )
}

export default IconList
