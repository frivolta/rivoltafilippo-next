import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostDetails from "../components/PostDetails/postDetails"

import {
  BlogPostDetailsWrapper,
  BlogPostFooter,
} from "../theme/templates.style"
import {  GetAllSlugs, GetPostBySlug, GraphPost, PostApi } from "../types/post"
import { Params } from "next/dist/next-server/server/router"
import markdownToHtml from "../lib/markDownToHtml"
import { graphcms } from "./_app"
import { GET_ALL_SLUGS, GET_POST_BY_SLUG } from "../lib/graphql/api"

type PostWithMarkdown = GraphPost & { markdownContent: string }

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
          date={post.date}
          preview={post.coverImage.url}
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
  const { post } = await graphcms.request<GetPostBySlug, { slug: string }>(GET_POST_BY_SLUG, { slug: params.slug })
  const content = await markdownToHtml(post.content || "")
  const markdownContent = post.content
  return {
    props: {
      post: {
        ...post,
        content,
        markdownContent
      },
    },
  }
}

export async function getStaticPaths() {
  const {posts} = await graphcms.request<GetAllSlugs>(GET_ALL_SLUGS)

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
