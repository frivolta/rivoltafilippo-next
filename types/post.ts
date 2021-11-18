import Author from "./author"
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
