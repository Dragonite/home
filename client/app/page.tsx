import { Metadata } from "next";
import ChevronRightIcon from "@/components/HomePage/ChevronRight";
import { FeaturedProjectCarousel } from "@/components/HomePage/FeaturedProjects";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import HomePageIconButton from "@/components/HomePage/IconButton";

export const metadata: Metadata = {
  title: 'Haolin Wu - Software & Data Engineer',
  description: 'Portfolio of Haolin Wu, Software & Data Engineer specializing in full-stack development and data solutions.',
};

export default function Home() {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <div className="text-center w-full text-primary leading-tighter max-w-2xl text-6xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-5xl xl:tracking-tighter">
        Haolin Wu
      </div>
      <div className="mt-8">
        <div className="m-0 inline-flex mx-auto font-mono tracking-wider text-lg sm:text-2xl">
          <ChevronRightIcon className="mr-1 md:mr-2" />
          <span className="animate-typewriter overflow-hidden whitespace-nowrap">
            Software &amp; Data Engineer</span>
          <div className="ml-2 animate-blink">_</div>
        </div>
      </div>
      <div className="mt-4 sm:mt-6 flex items-center justify-center gap-4">
        <Button asChild variant="secondary">
          <Link href="/projects" className="flex items-center">
            Resume
          </Link>
        </Button>
        <HomePageIconButton
          href="/projects"
          icon={<GitHubLogoIcon className="w-6 h-6 hover:opacity-70 transition-opacity duration-200" />}
          className="flex items-center"
        />
        <HomePageIconButton
          href="/projects"
          icon={<LinkedInLogoIcon className="w-6 h-6 hover:opacity-70 transition-opacity duration-200" />}
          className="flex items-center"
        />
      </div>
      <div className="px-16 sm:px-24 lg:px-32 w-full transition-all duration-200 ease-out">
        <FeaturedProjectCarousel />
      </div>
    </div>
  );
}
