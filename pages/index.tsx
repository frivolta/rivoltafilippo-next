import Head from "next/head"
import React from "react"
import Layout from "../components/layout"
import PersonalBlog from "../containers/HomePage"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <Layout>
      <PersonalBlog />
    </Layout>
  )
}
