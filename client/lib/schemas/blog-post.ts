import { z } from 'zod'
import { ApiResponseSchema } from './api'

export const CategorySchema = z.object({
  id: z.number(),
  name: z.string(),
})

export const BlogPostSchema = z.object({
  id: z.number(),
  title: z.string(),
  role: z.string().nullable(),
  short_description: z.string().nullable(),
  image: z.string().nullable(),
  content: z.string(),
  read_duration: z.string(),
  created_at: z.string(),
  categories: z.array(CategorySchema),
});

export const BlogPostSummaryDataSchema = z.object({
  posts: z.array(BlogPostSchema),
  count: z.number(),
})

export const BlogPostDetailDataSchema = z.object({
  post: BlogPostSchema,
})

export const BlogPostSummaryApiResponseSchema = ApiResponseSchema(BlogPostSummaryDataSchema)
export const BlogPostDetailApiResponseSchema = ApiResponseSchema(BlogPostDetailDataSchema)

export type BlogPost = z.infer<typeof BlogPostSchema>;
export type BlogPostSummaryData = z.infer<typeof BlogPostSummaryDataSchema>;
export type BlogPostSummaryApiResponse = z.infer<typeof BlogPostSummaryApiResponseSchema>;
export type BlogPostDetailData = z.infer<typeof BlogPostDetailDataSchema>;
export type BlogPostDetailApiResponse = z.infer<typeof BlogPostDetailApiResponseSchema>;
