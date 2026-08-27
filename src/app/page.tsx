import { Capabilities } from "@/components/portfolio/capabilities";
import { Hero } from "@/components/portfolio/hero";
import { SelectedWork } from "@/components/portfolio/selected-work";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Capabilities />
      <SelectedWork />
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="bg-foreground text-background rounded-[2rem] px-6 py-10 md:px-10 md:py-14">
          <p className="text-background/60 text-xs font-extrabold tracking-[0.2em] uppercase">
            Next step
          </p>
          <div className="mt-4 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
              Have a product idea, a tricky interface, or a codebase that needs direction?
            </h2>
            <a
              href="tel:03042585040"
              className="bg-background text-foreground hover:bg-surface-strong inline-flex w-fit items-center rounded-full px-5 py-3 text-sm font-extrabold transition"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
