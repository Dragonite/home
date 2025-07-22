import { FeaturedProjects } from "@/components/projects/featured-projects/featured-projects";
import ProjectAccordion from "@/components/projects/project-accordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Haolin Wu - Software & Data Engineer | Projects',
  description: 'Haolin\'s career projects.',
};

export default async function Page() {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <div className="px-8 sm:px-16 lg:px-24 w-full flex flex-col items-center">
        <div className="text-center w-full text-primary leading-tighter max-w-2xl text-4xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:tracking-tighter">
          Projects
        </div>
        <div className="text-center text-muted-foreground mt-4">
          A collection of projects and applications I&apos;ve built across my career.
        </div>
      </div>
      <div className="w-full flex items-center justify-center flex-col">
        <div className="mt-16 px-16 sm:px-24 lg:px-32 w-full transition-all duration-200 ease-out">
          <FeaturedProjects />
        </div>
      </div>
      <ProjectAccordion />
    </div>
  );
}