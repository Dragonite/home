"use client"

import { useConfig } from "@/contexts/global-config";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import HomePageIconButton from "@/components/home-page/icon-button";

const CTAActionList = () => {
  const { config, mediaRoot } = useConfig();
  if (!config) return <></>;

  const { resume_file, github_url, linkedin_url } = config;
  return (
    <div className="mt-4 sm:mt-6 flex items-center justify-center gap-4">
      <Button asChild variant="secondary">
        <Link href={`${mediaRoot}${resume_file}`} className="flex items-center">
          Resume
        </Link>
      </Button>
      <HomePageIconButton
        href={github_url}
        icon={<GitHubLogoIcon className="w-6 h-6 hover:opacity-70 transition-opacity duration-200" />}
        className="flex items-center"
      />
      <HomePageIconButton
        href={linkedin_url}
        icon={<LinkedInLogoIcon className="w-6 h-6 hover:opacity-70 transition-opacity duration-200" />}
        className="flex items-center"
      />
    </div>
  );
}

export default CTAActionList;