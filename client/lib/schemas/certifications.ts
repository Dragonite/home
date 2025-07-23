import { z } from 'zod'
import { ApiResponseSchema } from './api'

export const CertificationSchema = z.object({
  id: z.number(),
  name: z.string(),
  identifier: z.string().optional(),
  credential_id: z.string().optional(),
  description: z.string(),
  issued_by: z.string(),
  issued_date: z.string(),
  link: z.string().nullable(),
  certification_file: z.string().nullable(),
  image: z.string().nullable(),
});

export const CertificationDataSchema = z.object({
  certifications: z.record(z.string(), z.array(CertificationSchema)),
});

export const CertificationApiResponseSchema = ApiResponseSchema(CertificationDataSchema)

export type Certification = z.infer<typeof CertificationSchema>;
export type CertificationData = z.infer<typeof CertificationDataSchema>;
export type CertificationApiResponse = z.infer<typeof CertificationApiResponseSchema>;
