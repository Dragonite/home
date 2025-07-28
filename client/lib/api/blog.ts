import { BlogPostDetailApiResponse, BlogPostDetailApiResponseSchema, BlogPostSummaryApiResponse, BlogPostSummaryApiResponseSchema } from "../schemas/blog-post"
import { getApiUrl } from "../utils"

export async function fetchBlogSummary(): Promise<BlogPostSummaryApiResponse | null> {
  const response = await fetch(`${getApiUrl()}/api/posts/`)
  
  if (!response.ok) return null;

  const rawData = await response.json()
  return BlogPostSummaryApiResponseSchema.parse(rawData)
}

export async function fetchBlogPost(slug: string): Promise<BlogPostDetailApiResponse | null> {
  const response = await fetch(`${getApiUrl()}/api/posts/${slug}`)

  if (!response.ok) return null;

  const rawData = await response.json()
  return BlogPostDetailApiResponseSchema.parse(rawData)
}
