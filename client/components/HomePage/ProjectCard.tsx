import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import type { Project } from "@/lib/schemas"

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
        style={{ backgroundImage: `url(http://127.0.0.1:8000${project.image})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end">
        <div className="p-6 text-white">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold">{project.name}</h3>
              <span className="text-sm text-gray-300">{project.year}</span>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-gray-200 text-sm mb-4 leading-relaxed">
            {project.short_description}
          </p>
          
          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {project.skills.slice(0, 3).map((skill) => (
              <Badge 
                key={skill.id} 
                variant="default"
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
        </div>
      </div>
    </div>
  )
}

export default ProjectCard