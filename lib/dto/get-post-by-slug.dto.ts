import PostType, { PostApi } from "../../types/post"

export type GetPostBySlugInputDto  = Pick<PostType, 'slug'>

export interface GetPostBySlugOutputDto {
  post: PostApi;
}