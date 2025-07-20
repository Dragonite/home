import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import type { Project } from "@/lib/schemas"

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full hover:shadow-md transition-shadow duration-200">
      <CardContent className="flex flex-col justify-between h-full p-6">
        <div className="space-y-3">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-muted-foreground">{project.year}</span>
                {project.featured && (
                  <Badge variant="default" className="text-xs">
                    Featured
                  </Badge>
                )}
              </div>
            </div>
            
            {project.link && (
              <Link 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink size={18} />
              </Link>
            )}
          </div>
          
          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.short_description}
          </p>
        </div>
        
        {/* Skills */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.skills.slice(0, 3).map((skill) => (
            <Badge 
              key={skill.id} 
              variant="secondary"
              className="text-xs"
            >
              {skill.name}
            </Badge>
          ))}
          {project.skills.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{project.skills.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default ProjectCard