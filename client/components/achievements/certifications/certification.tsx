import { Button } from "@/components/ui/button";
import { Certification } from "@/lib/schemas/certifications";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";

export const CertificationItem = ({ certification }: {certification: Certification}) => {
  const { id, name, description, issued_date, link, certification_file } = certification;

  const formattedDate = new Date(Date.parse(issued_date)).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
  return (
    <div key={`certification-${id}`} className="flex flex-col gap-2">
      <h3 className="text-md font-semibold">
        {link ? 
          <Link href={link} className="hover:underline">
            {name}
          </Link>
        : name}
      </h3>
      <p>{description}</p>
      <div className="flex items-center space-x-4 h-5">
        <span className="text-xs text-muted-foreground">Issued {formattedDate}</span>
        {certification_file && (
          <>
            <Separator orientation="vertical"/>
            <Button asChild variant="link" className="text-xs text-muted-foreground h-max flex gap-1 p-0">
              <Link href={certification_file}>
                <div className="flex items-center gap-1">
                  <span>View certification</span>
                  <ArrowUpRight />
                </div>
              </Link>
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default CertificationItem;
