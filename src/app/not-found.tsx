import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-5 py-10">
      <div className="flex w-full max-w-md flex-col gap-4 rounded-md border-2 bg-card/60 px-6 py-4 text-muted-foreground">
        <div className="flex flex-col gap-2">
          <p className="bg-gradient-to-t from-muted-foreground via-foreground/80 to-foreground bg-clip-text text-lg text-transparent">
            Resource Not Found
          </p>
          <p className="text-sm">
            The resource that you are looking for was not found, either it is in
            development or does not exists.
          </p>
        </div>

        <div className="text-sm">
          <p>Try:</p>
          <ul className="list-disc pl-7">
            <li>reoloading page</li>
            <li>going back to home page</li>
            <li>
              <a
                href="tel:03042585040"
                className="underline underline-offset-4"
              >
                calling shayan for help (if needed)
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-2 flex w-full flex-wrap justify-between gap-2">
          <Button asChild size="sm" variant="outline">
            <a href="tel:03042585040">Call Shayan</a>
          </Button>

          <Button asChild size="sm">
            <Link href="/">Go to Home Page</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
