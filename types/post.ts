import Author from "./author"
import { CoverImage } from "./coverImage"
// @ToDo Remove PostType
type PostType = {
  slug: string
  title: string
  date: string
  coverImage: string
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
}

export type GraphPost = {
  __typeName: GraphPost;
  title: string;
  mediumUrl: string;
  redditUrl: string;
  coverImage: CoverImage;
  date: string;
  slug: string;
  content:string;
  excerpt: string;
  author: Author;
}

export type GetAllPosts =  {posts: Omit<GraphPost, "content">[]}
export type GetAllSlugs = {posts: Pick<GraphPost, "slug">[]}
export type GetPostBySlug = {post: Omit<GraphPost, "excerpt">}
export type PostApi = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  mediumUrl?: string;
  redditUrl?: string;
  publishedAt: string;
  img: string;
  isDraft: boolean;
  author: Author;
}

export default PostType
