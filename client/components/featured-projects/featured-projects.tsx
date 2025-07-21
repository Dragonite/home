import { Suspense } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { FeaturedProjectCarousel } from "./featured-project-carousel"
import ProjectCardSkeleton from "./project-card-skeleton"

// Server-side Skeleton Carousel
function SkeletonCarousel() {
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

// Main Server Component
export function FeaturedProjects() {
  return (
    <Suspense fallback={<SkeletonCarousel />}>
      <FeaturedProjectCarousel />
    </Suspense>
  )
}