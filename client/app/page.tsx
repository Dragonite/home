import { Metadata } from "next";
import ChevronRightIcon from "@/components/home-page/chevron-right";
import { FeaturedProjects } from "@/components/featured-projects/featured-projects";
import CTAActionList from "@/components/home-page/cta-action-list";

export const metadata: Metadata = {
  title: 'Haolin Wu - Software & Data Engineer',
  description: 'Portfolio of Haolin Wu, Software & Data Engineer specializing in full-stack development and data solutions.',
};

export default async function Home() {
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
      <CTAActionList />
      <div className="px-16 sm:px-24 lg:px-32 mt-24 w-full transition-all duration-200 ease-out">
        <FeaturedProjects />
      </div>
    </div>
  );
}
