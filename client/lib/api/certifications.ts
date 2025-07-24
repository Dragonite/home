import { CertificationApiResponse, CertificationApiResponseSchema } from "../schemas/certifications"
import { getApiUrl } from "../utils"

export async function fetchCertifications(): Promise<CertificationApiResponse> {
  const response = await fetch(`${getApiUrl()}/api/certifications/`)
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const rawData = await response.json()
  return CertificationApiResponseSchema.parse(rawData)
}