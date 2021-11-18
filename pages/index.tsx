import React from "react"
import Layout from "../components/layout"
import PersonalBlog from "../containers/HomePage"
import { getAllPosts, getAllPostsFromApi } from "../lib/api"
import  { PostApi } from "../types/post"

type Props = {
    allPostsFromApi: PostApi[]
}

export default function Home({  allPostsFromApi }: Props) {
  return (
    <Layout>
      <PersonalBlog posts={allPostsFromApi} />
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
