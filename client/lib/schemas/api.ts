import { z } from 'zod'

// Base metadata schema
export const ApiMetadataSchema = z.object({
  correlation_id: z.string(),
  timestamp: z.string(),
})

// Generic API response wrapper
export const ApiResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    metadata: ApiMetadataSchema,
    data: dataSchema,
  })

export type ApiMetadata = z.infer<typeof ApiMetadataSchema>
export type ApiResponse<T> = {
  metadata: ApiMetadata
  data: T
}