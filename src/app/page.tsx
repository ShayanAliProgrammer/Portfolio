import { Loader2Icon } from "lucide-react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const HeroSection = dynamic(() => import("~/components/sections/hero"));
const SkillsSection = dynamic(() => import("~/components/sections/skills"));
const ProjectsSection = dynamic(() => import("~/components/sections/projects"));

export default function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  return (
    <main className="border-x">
      <HeroSection />

      <SkillsSection />

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
  );
}
