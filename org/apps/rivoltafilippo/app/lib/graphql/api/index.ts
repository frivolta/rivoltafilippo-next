import { gql } from "graphql-request"

export const GET_ALL_POSTS = gql`
  {
    blogPosts(orderBy: date_DESC, where: {}) {
      id
      date
      slug
      title
      coverImage {
        id
        url
      }
      excerpt
      author {
        ... on Author {
          id
          name
        }
      }
    }
  }
`

export const GET_ALL_SLUGS = gql`
  query getAllBySlugs {
    blogPosts(orderBy: publishedAt_ASC) {
      slug
    }
  }
`

export const GET_POST_BY_SLUG = gql`
  query getPostBySlug($slug: String!) {
    blogPost(where: { slug: $slug }) {
      id
      author {
        ... on Author {
          id
          name
        }
      }
      date
      slug
      title
      content
      coverImage {
        id
        url
      }
    }
  }
`
