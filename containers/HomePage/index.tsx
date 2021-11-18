import * as React from "react"
import PersonalBlogWrapper from "./style"
import Intro from "./Intro"
import Posts from "./Posts"
import  { PostApi } from "../../types/post"

type PersonalBlogProps = {
  posts: PostApi[]
}

const PersonalBlog: React.FunctionComponent<PersonalBlogProps> = ({
  posts,
}) => {
  return (
    <PersonalBlogWrapper>
      <Intro />
      <Posts posts={posts} />
    </PersonalBlogWrapper>
  )
}

export default PersonalBlog
