import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fetchProjects } from "@/lib/api/projects";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";

const ProjectAccordion = async () => {
  const projects = await fetchProjects('all');
  if (!projects || !projects.data || !projects.data.projects || !projects.data.projects.length) return <></>;
  const projectList = projects.data.projects;
  return (
    <div className="px-8 sm:px-16 lg:px-24 w-full mt-12 mb-8 max-w-6xl">
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue={`${projectList[0].id}`}
      >
        {projectList.map(project => {
          const { id, name, description, year, skills, image, link } = project;
          return (
            <AccordionItem
              key={`project-accordion-${id}`}
              value={id.toString()}
            >
              <AccordionTrigger className="hover:no-underline hover:[&_[data-project-name]]:underline">
                <div className="flex items-center justify-between w-full">
                  <span data-project-name >{name}</span>
                  <Badge variant="secondary" className="text-xs ml-2">
                    {year}
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <div className="bg-cover bg-center bg-no-repeat w-full h-36 rounded-lg shadow-md brightness-80" style={{ backgroundImage: `url('${image}')` }} />
                <p>
                  {description}
                </p>
                <div className="flex items-center">
                  <div className="flex flex-wrap gap-2 h-max flex-1">
                    {skills.map(skill => (
                      <Badge 
                        key={`project-accordion-${id}-${skill.name}`} 
                        variant="default"
                        className="text-xs"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                  {link && (
                    <Button asChild variant="link" className="text-xs text-muted-foreground h-max p-0 ml-2 flex gap-1">
                      <Link href={link}>
                        <span>Check out here</span>
                        <ExternalLink />
                      </Link>
                    </Button>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
}

export default ProjectAccordion;