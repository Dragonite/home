import { CertificationApiResponse, CertificationApiResponseSchema } from "../schemas/certifications"

export async function fetchCertifications(): Promise<CertificationApiResponse> {
  const response = await fetch('http://127.0.0.1:8000/api/certifications/')
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const rawData = await response.json()
  return CertificationApiResponseSchema.parse(rawData)
}