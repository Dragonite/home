import CertificationAccordion from "@/components/achievements/certifications/certification-accordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Haolin Wu - Software & Data Engineer | Achievements',
  description: 'Haolin\'s achievements and certifications.',
};

export default async function Page() {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <div className="px-8 sm:px-16 lg:px-24 w-full flex flex-col items-center">
        <div className="text-center w-full text-primary leading-tighter max-w-2xl text-4xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:tracking-tighter">
          Achievements & Certifications
        </div>
        <div className="text-center text-muted-foreground mt-4">
          Some achievements and certifications I&apos;ve earned throughout my career.
        </div>
      </div>
      <div className="w-full flex items-center justify-center flex-col">
        <CertificationAccordion />
      </div>
    </div>
  );
}