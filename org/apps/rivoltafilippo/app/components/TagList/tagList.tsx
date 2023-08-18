import * as React from "react"
import { TagListWrapper, TagListItem, TagSpan } from "./tagList.style"

type TagListProps = {
  tagList: string[]
}

const TagList: React.FunctionComponent<TagListProps> = ({ tagList }) => {
  return (
    <TagListWrapper>
      {tagList.map((tag, key) => (
        <TagListItem>
          <TagSpan key={key}>{tag}</TagSpan>
        </TagListItem>
      ))}
    </TagListWrapper>
  )
}

export default TagList
