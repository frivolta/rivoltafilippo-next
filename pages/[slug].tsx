import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostDetails from "../components/PostDetails/postDetails"

import {
  BlogPostDetailsWrapper,
  BlogPostFooter,
} from "../theme/templates.style"
import  { PostApi } from "../types/post"
import {  getAllPostsFromApi, getPostFromApi } from "../lib/api"
import { Params } from "next/dist/next-server/server/router"
import markdownToHtml from "../lib/markDownToHtml"

type PostWithMarkdown = PostApi & { markdownContent: string }

interface Props {
  post: PostWithMarkdown
  morePosts: PostApi[]
  preview?: boolean
}

const BlogPostTemplate = ({ post }: Props) => {
  return (
    <Layout>
      <SEO title={post.title} description={post.excerpt} />
      <BlogPostDetailsWrapper>
        <PostDetails
          title={post.title}
          date={post.publishedAt}
          preview={post.img}
          description={post.content}
          markdownContent={post.markdownContent}
        />

        <BlogPostFooter></BlogPostFooter>
      </BlogPostDetailsWrapper>
    </Layout>
  )
}

export default BlogPostTemplate

export async function getStaticProps({ params }: Params) {

  const post = await getPostFromApi(params.slug)
  const content = await markdownToHtml(post.content || "")
  const markdownContent = post.content

  return {
    props: {
      post: {
        ...post,
        content,
        markdownContent,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = await getAllPostsFromApi()

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}
