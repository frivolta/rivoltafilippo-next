import * as React from "react"
import _ from "lodash"
import {
  PostCardWrapper,
  PostPreview,
  PostDetails,
  PostDate,
  PostTitle,
  Excerpt,
  PostContent,
} from "./postCard.style"
import Link from "next/link"
import Image from "next/image"
import { CoverImage } from "../../../types/coverImage"

interface PostCardProps {
  image: CoverImage
  title: string
  excerpt?: string
  url: string
  date?: string
  className?: string
}

const PostCard: React.FunctionComponent<PostCardProps> = ({
  image,
  title,
  excerpt,
  url,
  date,
  className,
  ...props
}) => {
  // Add all classs to an array
  const addAllClasses = ["post_card"]

  // className prop checking
  if (className) {
    addAllClasses.push(className)
  }

  const dateFormatter = (date: string): string => {
    const newDate = new Date(date)
    const month = newDate.toLocaleString("en", { month: "short" })
    const year = newDate.toLocaleString("default", { year: "numeric" })
    return `${newDate.getDate()} <span>${month} <strong>${year}</strong></span>`
  }

  return (
    <PostCardWrapper className={addAllClasses.join(" ")} {...props}>
      <Link href={url}>
        <PostPreview className="post_preview">
          <Image
            src={image.url}
            alt="post preview"
            layout="responsive"
            width={1170}
            height={500}
          />
        </PostPreview>
      </Link>

      <PostDetails className="post_details">
        {date && (
          <PostDate
            dangerouslySetInnerHTML={{
              __html: dateFormatter(date),
            }}
            className="post_date"
          />
        )}
        <PostContent className="post_content">
          <PostTitle className="post_title">
            <Link href={url}>{title}</Link>
          </PostTitle>
          {excerpt ? (
            <Excerpt
              dangerouslySetInnerHTML={{
                __html: excerpt,
              }}
              className="excerpt"
            />
          ) : null}
        </PostContent>
      </PostDetails>
    </PostCardWrapper>
  )
}

export default PostCard
