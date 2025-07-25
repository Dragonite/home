import { GlobalConfigApiResponse, ConfigApiResponseSchema, GlobalConfig } from "../schemas"
import { getApiUrl } from "../utils"

async function fetchGlobalConfig(): Promise<GlobalConfigApiResponse> {
  const response = await fetch(`${getApiUrl()}/api/config/`)
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const rawData = await response.json()
  return ConfigApiResponseSchema.parse(rawData)
}


export async function getGlobalConfig(): Promise<GlobalConfig> {
  try {
    const config = await fetchGlobalConfig();
    return config.data.configuration;
  } catch (error) {
    console.error("Failed to fetch global configuration:", error);
    return {
        resume_file: '/media/resumes/Resume.pdf',
        github_url: 'https://www.github.com/Dragonite',
        linkedin_url: 'https://www.linkedin.com/in/haolin-wu-222188160/',
        email: 'haolin@haolin.dev',
        portfolio_github_url: 'https://www.github.com/Dragonite/home',
    }
  }
}