import { BlogPostSummaryApiResponse, BlogPostSummaryApiResponseSchema } from "../schemas/blog-post"
import { getApiUrl } from "../utils"

export async function fetchBlogSummary(): Promise<BlogPostSummaryApiResponse> {
  const response = await fetch(`${getApiUrl()}/api/posts/`)
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const rawData = await response.json()
  return BlogPostSummaryApiResponseSchema.parse(rawData)
}
