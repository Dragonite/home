"use client"

import * as React from "react"
import { useRef } from "react"
import { useQuery } from "@tanstack/react-query"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ProjectCardSkeleton from "./project-card-skeleton"
import ApiError from "../../api-error"
import { fetchProjects } from "@/lib/api/projects"
import { Project } from "@/lib/schemas"
import ProjectCard from "./project-card"


// Client Component with TanStack Query
export function FeaturedProjectCarousel() {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['featured-projects'],
    queryFn: () => fetchProjects(true),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000,   // 10 minutes (formerly cacheTime)
  })

  // Handle loading state with skeletons
  if (isLoading) {
    return (
      <Carousel
        opts={{ align: "start" }}
        className="w-full max-w-6xl mx-auto"
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
        <div className="w-full max-w-6xl mx-auto">
            <ApiError message="Failed to load featured projects." />
        </div>
    )
  }

  // Render with real data
  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{ align: "start" }}
      className="w-full max-w-6xl mx-auto"
    >
      <CarouselContent>
        {projects?.data.projects.map((project: Project) => 
            <CarouselItem key={`${project.id}__carousel`} className="md:basis-1/2 lg:basis-1/3 pt-2">
                <ProjectCard key={project.id} project={project}/>
            </CarouselItem>
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}