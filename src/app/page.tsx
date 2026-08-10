import { Loader2Icon } from "lucide-react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const HeroSection = dynamic(() => import("~/components/sections/hero"));
const AboutSection = dynamic(() => import("~/components/sections/about"));
const SkillsSection = dynamic(() => import("~/components/sections/skills"));
const ProjectsSection = dynamic(() => import("~/components/sections/projects"));
const ContactSection = dynamic(() => import("~/components/sections/contact"));

export default function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  return (
    <main>
      <HeroSection />
      
      <AboutSection />
      
      <SkillsSection />

      <Suspense
        fallback={
          <div className="grid place-items-center px-5 py-20">
            <Loader2Icon className="size-10 animate-spin" />
          </div>
        }
      >
        <ProjectsSection heading="h2" searchParams={searchParams} />
      </Suspense>

      <ContactSection />
    </main>
  );
}
