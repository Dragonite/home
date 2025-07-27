import BlogPostSummary from "@/components/blog/post-summary";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Haolin Wu - Software & Data Engineer | Blog',
  description: 'Haolin\'s important announcements, thoughts and ramblings.',
};

export default function Page() {
  return (
    <div className="w-full flex items-center justify-center flex-col grow">
      <div className="px-8 sm:px-16 lg:px-24 w-full flex flex-col items-center">
        <div className="text-center w-full text-primary leading-tighter max-w-2xl text-4xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:tracking-tighter">
          Haolin&apos;s Blog
        </div>
        <div className="text-center text-muted-foreground mt-4">
          Announcements, my thoughts, and even some ramblings about my life.
        </div>
      </div>
      <div className="w-full flex items-center justify-center flex-col mb-auto">
        <BlogPostSummary />
      </div>
    </div>
  );
}