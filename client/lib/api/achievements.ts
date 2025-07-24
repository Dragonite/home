import { AchievementApiResponse, AchievementApiResponseSchema } from "../schemas/achievements"
import { getApiUrl } from "../utils"

export async function fetchAchievements(): Promise<AchievementApiResponse> {
  const response = await fetch(`${getApiUrl()}/api/achievements/`)
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const rawData = await response.json()
  return AchievementApiResponseSchema.parse(rawData)
}