import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Haolin Wu - Software & Data Engineer | Achievements',
  description: 'Haolin\'s achievements and certifications.',
};

export default async function Page() {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <div>
        Featured achievements
        - Unearthed Hackathon
        - Telstra Pay
        - Published Paper
      </div>
    </div>
  );
}