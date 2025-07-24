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
import CardSkeleton from "@/components/ui/card-skeleton"
import ApiError from "../../api-error"
import { fetchAchievements } from "@/lib/api/achievements"
import { Achievement } from "@/lib/schemas/achievements"
import AchievementCard from "./achievement-card"
import Link from "next/link"

// Client Component with TanStack Query
export function AchievementCarousel() {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  const { data, isLoading, error } = useQuery({
    queryKey: ['featured-achievements'],
    queryFn: fetchAchievements,
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

  // Handle error state
  if (error) {
    return (
      <div className="w-full max-w-6xl mx-auto">
          <ApiError message="Failed to load featured achievements." />
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
        {data?.data.achievements.map((achievement: Achievement) => 
          <CarouselItem key={`${achievement.id}__carousel`} className="md:basis-1/2 lg:basis-1/3 pt-2">
            {achievement.link ? (
              <Link href={achievement.link}>
                <AchievementCard key={achievement.id} achievement={achievement}/>
              </Link>
            ) : (
              <AchievementCard key={achievement.id} achievement={achievement}/>
            )}
          </CarouselItem>
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}