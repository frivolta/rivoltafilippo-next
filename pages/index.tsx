import React from "react"
import Layout from "../components/layout"
import PersonalBlog from "../containers/HomePage"
import { GetAllPosts, GraphPost } from "../types/post"
import { graphcms } from "./_app"
import { GET_ALL_POSTS } from "../lib/graphql/api"

interface Props {
  posts: GraphPost[]
}

export default function Home({ posts }: Props) {
  return (
    <Layout>
      <PersonalBlog posts={posts} />
    </Layout>
  )
}
/*
export const getStaticProps = async () => {
  const {posts} = await graphcms.request<GetAllPosts>(GET_ALL_POSTS)
  return {props: { posts }}
}
*/
export const getStaticProps = async () => {
  const { blogPosts } = await graphcms.request<GetAllPosts>(GET_ALL_POSTS)
  return { props: { posts: blogPosts } }
}
