import * as React from "react"
import BlogPostsWrapper from "./style"
import  { PostApi } from "../../../types/post"
import PostCard from "../../../components/PostCard/postCard"

type PostsProps = {
  posts: PostApi[]
}

const Posts: React.FunctionComponent<PostsProps> = ({ posts }) => {
  return (
    <BlogPostsWrapper>
      {posts.map((post) => {
        return (
          <PostCard
            key={post.slug}
            title={post.title}
            image={post.img}
            url={post.slug}
            excerpt={post.excerpt}
            date={post.publishedAt}
          />
        )
      })}
    </BlogPostsWrapper>
  )
}

export default Posts
