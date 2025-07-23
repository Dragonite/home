import { z } from 'zod'
import { ApiResponseSchema } from './api'

export const AchievementSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  priority: z.number(),
  link: z.string().nullable(),
  year: z.number(),
  image: z.string().nullable(),
});

export const AchievementDataSchema = z.object({
  achievements: z.record(z.string(), z.array(AchievementSchema)),
});

export const AchievementApiResponseSchema = ApiResponseSchema(AchievementDataSchema)

export type Achievement = z.infer<typeof AchievementSchema>;
export type AchievementData = z.infer<typeof AchievementDataSchema>;
export type AchievementApiResponse = z.infer<typeof AchievementApiResponseSchema>;
