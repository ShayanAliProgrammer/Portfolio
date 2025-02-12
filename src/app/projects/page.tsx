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
        <ProjectsSection heading="h1" searchParams={searchParams} />
      </main>
    </HydrateClient>
  );
}
