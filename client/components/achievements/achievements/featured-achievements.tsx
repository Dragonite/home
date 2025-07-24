import { Suspense } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { AchievementCarousel } from "./achievement-carousel"
import CardSkeleton from "@/components/ui/card-skeleton"

// Server-side Skeleton Carousel
function SkeletonCarousel() {
  return (
    <Carousel
      opts={{ align: "start" }}
      className="w-full max-w-6xl mx-auto"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <CardSkeleton />
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
export function FeaturedAchievements() {
  return (
    <Suspense fallback={<SkeletonCarousel />}>
      <AchievementCarousel />
    </Suspense>
  )
}