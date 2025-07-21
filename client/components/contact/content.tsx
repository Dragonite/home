"use client"

import Link from "next/link"
import { Button } from "../ui/button"
import { useConfig } from "@/contexts/global-config";

const ContactContent = () => {
  const { config } = useConfig();
  return (
    <div className="flex flex-col space-between h-full">
      <div className="text-sm text-muted-foreground">
        <span>Feel free to reach out to me through this form, or through</span>
        <Button 
          asChild
          className="py-0 pl-1 pr-0"
          variant="link"
        >
          <Link href={`mailto:${config && config.email ? config.email : 'haolin@haolin.dev'}`}>email</Link>
        </Button>
        <span>.</span>
      </div>
      <div className="text-sm text-muted-foreground mt-auto">
        <span>Website designed and built by Haolin Wu. For the source code visit the</span>
        <Button 
          asChild
          className="py-0 pl-1 pr-0"
          variant="link"
        >
          <Link href="https://www.github.com">GitHub</Link>
        </Button>
        <span>.</span>
      </div>
    </div>
  )
};

export default ContactContent;