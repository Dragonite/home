import { AchievementApiResponse, AchievementApiResponseSchema } from "../schemas/achievements"

export async function fetchAchievements(): Promise<AchievementApiResponse> {
  const response = await fetch('http://127.0.0.1:8000/api/achievements/')
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const rawData = await response.json()
  return AchievementApiResponseSchema.parse(rawData)
}