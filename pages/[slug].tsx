import React from "react"
import _ from "lodash"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostDetails from "../components/PostDetails/postDetails"

import {
  BlogPostDetailsWrapper,
  BlogPostFooter,
} from "../theme/templates.style"
import PostType from "../types/post"
import { getAllPosts, getPostBySlug } from "../lib/api"
import { Params } from "next/dist/next-server/server/router"
import markdownToHtml from "../lib/markDownToHtml"

type PostWithMarkdown = PostType & { markdownContent: string }

interface Props {
  post: PostWithMarkdown
  morePosts: PostType[]
  preview?: boolean
}

const BlogPostTemplate = ({ post }: Props) => {
  return (
    <Layout>
      <SEO title={post.title} description={post.excerpt} />
      <BlogPostDetailsWrapper>
        <PostDetails
          title={post.title}
          date={post.date}
          preview={post.coverImage}
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
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ])
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
  const posts = getAllPosts(["slug"])

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
