import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "../../ui/badge";
import { fetchCertifications } from "@/lib/api/certifications";
import CertificationItem from "./certification";

const CertificationAccordion = async () => {
  const certifications = await fetchCertifications();
  if (!certifications || !certifications.data || !certifications.data.certifications || Object.keys(certifications.data.certifications).length === 0) return <></>;
  const certificationList = certifications.data.certifications;
  return (
    <div className="px-8 sm:px-16 lg:px-24 w-full mt-12 mb-8 max-w-6xl">
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue={`${certificationList[Object.keys(certificationList)[0]][0].issued_by}`}
      >
        {Object.keys(certificationList).map(issuer => {
          const certifications = certificationList[issuer];
          return (
            <AccordionItem
              key={`project-accordion-${issuer}`}
              value={issuer.toString()}
            >
              <AccordionTrigger className="hover:no-underline hover:[&_[data-project-name]]:underline">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <span data-project-name >{issuer}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs ml-2">
                    {certifications.length}
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-8 py-4">
                {certifications.map(certification => {
                  return <CertificationItem key={certification.id} certification={certification} />
                })}
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
}

export default CertificationAccordion;