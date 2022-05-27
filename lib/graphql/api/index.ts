import { gql } from "graphql-request"

export const GET_ALL_POSTS = gql`
{ 
  posts(orderBy: publishedAt_ASC) {
      id
      author{
        name
      }
      date
      slug
      title
      coverImage {
        id
        url
      }
      excerpt
    }
}
`

export const GET_ALL_SLUGS = gql`
query getAllBySlugs{ 
  posts(orderBy: publishedAt_ASC) {
      slug
    }
}
`

export const GET_POST_BY_SLUG = gql`
 query getPostBySlug($slug: String!) {
      post(where: {slug: $slug}
  ) {
      id
      author{
        name
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