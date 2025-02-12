import HeroSection from "~/components/sections/hero";
import ProjectsSection from "~/components/sections/projects";
import SkillsSection from "~/components/sections/skills";
import { HydrateClient } from "~/trpc/server";

export default function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  return (
    <HydrateClient>
      <main className="border-x">
        <HeroSection />

        <SkillsSection />

        <ProjectsSection searchParams={searchParams} />
      </main>
    </HydrateClient>
  );
}
