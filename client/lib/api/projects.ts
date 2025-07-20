import { ProjectsApiResponse, ProjectsApiResponseSchema } from "../schemas"

export async function fetchFeaturedProjects(): Promise<ProjectsApiResponse> {
  const response = await fetch('http://127.0.0.1:8000/api/projects?featured=true')
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const rawData = await response.json()
  return ProjectsApiResponseSchema.parse(rawData)
}