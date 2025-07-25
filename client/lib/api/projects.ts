import { ProjectsApiResponse, ProjectsApiResponseSchema } from "../schemas"
import { getApiUrl } from "../utils";

type ProjectFilterType = boolean | 'all';

const getQueryParam = (featured: ProjectFilterType): string => {
  if (featured === true) {
    return '?featured=true';
  } else if (featured === false) {
    return '?featured=false';
  }
  return '';
};

export async function fetchProjects(featured: ProjectFilterType): Promise<ProjectsApiResponse> {
  const response = await fetch(`${getApiUrl()}/api/projects${getQueryParam(featured)}`, {
    next: { revalidate: 600 },
  });
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const rawData = await response.json()
  return ProjectsApiResponseSchema.parse(rawData)
}