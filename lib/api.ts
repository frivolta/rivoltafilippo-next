import fs from "fs"
import { join } from "path"
import matter from "gray-matter"
import axios from "axios"
import { GetAllPostsDto } from "./dto/get-all-posts.dto"
import { PostApi } from "../types/post"
import { GetPostBySlugInputDto, GetPostBySlugOutputDto } from "./dto/get-post-by-slug.dto"
import { BadRequestError } from "../utils/CustomError/BadRequestError"

const postsDirectory = join(process.cwd(), "_posts")

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "")
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug
    }
    if (field === "content") {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

// From API
const API_URL = "https://rivoltafilippo-admin-api-prod-wmm22.ondigitalocean.app"

export async function getAllPostsFromApi():Promise<PostApi[]> {
  try {
    const { data } = await axios.get<GetAllPostsDto>(`${API_URL}/posts/public/all`)
    return data.posts.sort((post1,post2)=>(post1.publishedAt>post2.publishedAt?-1:1))
  }catch(err){
    console.error(err)
    throw new BadRequestError("Something went wrong, cannot load posts :(")
  }
}

export async function getPostFromApi(slug: GetPostBySlugInputDto): Promise<PostApi>{
  try {
    const { data } = await axios.get<GetPostBySlugOutputDto>(`${API_URL}/posts/slug/${slug}`)
    return data.post
  }catch(err){
    console.error(err)
    throw new BadRequestError("Something went wrong, cannot load post :(")
  }
}


