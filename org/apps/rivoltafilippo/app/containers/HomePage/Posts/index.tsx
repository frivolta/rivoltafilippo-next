import * as React from "react"
import BlogPostsWrapper from "./style"
import {  GraphPost } from "../../../types/post"
import PostCard from "../../../components/PostCard/postCard"

interface PostsProps {
  posts: GraphPost[]
}

const Posts: React.FunctionComponent<PostsProps> = ({ posts }) => {
  return (
    <BlogPostsWrapper>
      {posts.map((post) => {
        return (
          <PostCard
            key={post.slug}
            title={post.title}
            image={post.coverImage}
            url={post.slug}
            excerpt={post.excerpt}
            date={post.date}
          />
        )
      })}
    </BlogPostsWrapper>
  )
}

export default Posts
