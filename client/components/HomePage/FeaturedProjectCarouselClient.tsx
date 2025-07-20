"use client"

import * as React from "react"
import { useRef } from "react"
import { useQuery } from "@tanstack/react-query"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ProjectCardSkeleton from "./ProjectCardSkeleton"
import { Button } from "../ui/button"
import ApiError from "../api-error"

// Types
interface Project {
  id: string
  title: string
  description: string
  image?: string
  technologies: string[]
}

// API Function
async function fetchFeaturedProjects(): Promise<Project[]> {
  const response = await fetch('/api/projects?featured=true')
  if (!response.ok) {
    throw new Error('Failed to fetch featured projects')
  }
  return response.json()
}

// Project Card Component
function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full">
      <CardContent className="flex flex-col justify-between h-full p-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span 
              key={tech}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Client Component with TanStack Query
export function FeaturedProjectCarouselClient() {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['featured-projects'],
    queryFn: fetchFeaturedProjects,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000,   // 10 minutes (formerly cacheTime)
  })

  // Handle loading state with skeletons
  if (isLoading) {
    return (
      <Carousel
        opts={{ align: "start" }}
        className="w-full max-w-6xl mt-24 mx-auto"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <ProjectCardSkeleton />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    )
  }

  // Handle error state
  if (error) {
    return (
        <div className="w-full max-w-6xl mt-24 mx-auto">
            <ApiError message="Failed to load featured projects." />
        </div>
    )
  }

  // Render with real data
  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{ align: "start" }}
      className="w-full max-w-6xl mt-24 mx-auto"
    >
      <CarouselContent>
        {projects?.map((project) => (
          <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <ProjectCard project={project} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}