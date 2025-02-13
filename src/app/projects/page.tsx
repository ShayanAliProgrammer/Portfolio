import { Loader2Icon } from "lucide-react";
import { Suspense } from "react";
import ProjectsSection from "~/components/sections/projects";
import { HydrateClient } from "~/trpc/server";

export default function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  return (
    <HydrateClient>
      <main className="border-x">
        <Suspense
          fallback={
            <div className="py-20">
              <Loader2Icon className="size-10 animate-spin" />
            </div>
          }
        >
          <ProjectsSection heading="h1" searchParams={searchParams} />
        </Suspense>
      </main>
    </HydrateClient>
  );
}
