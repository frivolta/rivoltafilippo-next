import React from "react"
import Layout from "../components/layout"
import PersonalBlog from "../containers/HomePage"
import { getAllPosts, getAllPostsFromApi } from "../lib/api"
import PostType from "../types/post"

type Props = {
  allPosts: PostType[]
}

export default function Home({ allPosts }: Props) {
  return (
    <Layout>
      <PersonalBlog posts={allPosts} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ])
  const allPostsFromApi = await getAllPostsFromApi()

  return {
    props: { allPosts, allPostsFromApi },
  }
}
