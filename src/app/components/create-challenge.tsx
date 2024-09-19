import { Button } from "@/components/ui/button";
import { FileIcon, PlusCircle } from "lucide-react";
import Link from "next/link";

interface EmptyStateProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

export function CreateChallenge({
  title,
  description,
  buttonText,
  href,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-10 ">
      <div className="flex size-20 items-center justify-center rounded-full bg-primary/10 ">
        <FileIcon className="size-10 text-primary " />
      </div>
      <h2 className="mt-6 text-xl fotn-semibold">{title}</h2>

      <p className="mb-8 mt-2 text-center text-sm leading-tight text-muted-foreground max-w-sm  mx-auto">
        {description}
      </p>

      <Button asChild>
        <Link href={href}>
          <PlusCircle className="m-2 size-4" />
          {buttonText}
        </Link>
      </Button>
    </div>
  );
}
