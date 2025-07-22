import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fetchProjects } from "@/lib/api/projects";
import { Badge } from "../ui/badge";

const ProjectAccordion = async () => {
  const projects = await fetchProjects('all');
  if (!projects || !projects.data || !projects.data.projects || !projects.data.projects.length) return <></>;
  const projectList = projects.data.projects;
  console.log(projectList);
  return (
    <div className="px-8 sm:px-16 lg:px-24 w-full mt-12 mb-8">
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue={`${projectList[0].id}`}
      >
        {projectList.map(project => {
          const { id, name, description, year, skills } = project;
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
                <p>
                  {description}
                </p>
                <div className="flex flex-wrap gap-2">
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
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
}

export default ProjectAccordion;