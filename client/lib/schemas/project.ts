import { z } from 'zod'
import { ApiResponseSchema } from './api'

// Skill schema (since it's nested in project)
export const SkillSchema = z.object({
  id: z.number(),
  name: z.string(),
})

// Project schema
export const ProjectSchema = z.object({
  id: z.number(),
  name: z.string(),
  short_description: z.string(),
  description: z.string(),
  priority: z.number(),
  featured: z.boolean(),
  year: z.number(),
  link: z.string(),
  image: z.string(),
  skills: z.array(SkillSchema),
})

// Projects list data schema (what goes inside the "data" field)
export const ProjectsDataSchema = z.object({
  projects: z.array(ProjectSchema),
  count: z.number(),
})

// Complete API response schemas
export const ProjectsApiResponseSchema = ApiResponseSchema(ProjectsDataSchema)
export const SingleProjectApiResponseSchema = ApiResponseSchema(ProjectSchema)

// Export types
export type Skill = z.infer<typeof SkillSchema>
export type Project = z.infer<typeof ProjectSchema>
export type ProjectsData = z.infer<typeof ProjectsDataSchema>
export type ProjectsApiResponse = z.infer<typeof ProjectsApiResponseSchema>
export type SingleProjectApiResponse = z.infer<typeof SingleProjectApiResponseSchema>