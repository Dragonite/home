import { ProjectsApiResponse, ProjectsApiResponseSchema } from "../schemas"

type ProjectFilterType = boolean | 'all';

export async function fetchProjects(featured: ProjectFilterType): Promise<ProjectsApiResponse> {
  const queryParam = featured === true ? '?featured=true' : '';
  const response = await fetch(`http://127.0.0.1:8000/api/projects${queryParam}`);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const rawData = await response.json()
  return ProjectsApiResponseSchema.parse(rawData)
}