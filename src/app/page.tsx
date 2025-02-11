import HeroSection from "~/components/sections/hero";
import SkillsSection from "~/components/sections/skills";
import { HydrateClient } from "~/trpc/server";

export default function Home() {
  return (
    <HydrateClient>
      <main>
        <HeroSection />

        <SkillsSection />
      </main>
    </HydrateClient>
  );
}
