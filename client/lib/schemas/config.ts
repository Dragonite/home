import { z } from 'zod'
import { ApiResponseSchema } from './api'

export const ConfigSchema = z.object({
  resume_file: z.string(),
  github_url: z.string(),
  linkedin_url: z.string(),
  email: z.string(),
});

export const ConfigDataSchema = z.object({
  configuration: ConfigSchema,
});

export const ConfigApiResponseSchema = ApiResponseSchema(ConfigDataSchema)

export type GlobalConfig = z.infer<typeof ConfigSchema>;
export type GlobalConfigData = z.infer<typeof ConfigDataSchema>;
export type GlobalConfigApiResponse = z.infer<typeof ConfigApiResponseSchema>;
