import { ProjectsApiResponse, ProjectsApiResponseSchema } from "../schemas"
import { getApiUrl } from "../utils";

type ProjectFilterType = boolean | 'all';

export async function fetchProjects(featured: ProjectFilterType): Promise<ProjectsApiResponse> {
  const queryParam = featured === true ? '?featured=true' : '';
  const response = await fetch(`${getApiUrl()}/api/projects${queryParam}`);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const rawData = await response.json()
  return ProjectsApiResponseSchema.parse(rawData)
}