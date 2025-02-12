import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-between"
    >
      <div className="z-10 w-full border-b px-5 md:px-10 lg:px-20">
        <h1 className="border-x bg-gradient-to-t from-muted-foreground via-foreground/80 to-foreground bg-clip-text px-1 py-5 text-center text-5xl text-transparent md:text-6xl lg:text-7xl">
          Welcome to the new Era of Web Development
        </h1>
      </div>

      <div className="z-10 w-full border-b px-5 md:px-10 lg:px-20">
        <div className="border-x px-1 py-8 text-center text-lg lg:text-xl">
          <p className="mx-auto block max-w-4xl px-2 leading-relaxed text-muted-foreground md:leading-loose">
            Hello, I'm a seasoned full-stack web developer specializing in{" "}
            <span className="text-foreground">T3 stack</span> and{" "}
            <span className="text-foreground">Next.js</span>, delivering robust,{" "}
            <span className="text-foreground">SEO-optimized</span> web
            solutions. If you're seeking a{" "}
            <span className="text-foreground">high-performance</span>,{" "}
            <span className="text-foreground">cost-efficient</span> website
            developed to enhance your online presence, let's connect today to{" "}
            <a
              href="tel:03042585040"
              className="text-foreground underline underline-offset-8"
            >
              discuss your project requirements
            </a>
            .
          </p>
        </div>
      </div>

      <div className="z-10 w-full border-b px-5 md:px-10 lg:px-20">
        <div className="mx-auto flex w-full items-center justify-center gap-5 border-x px-5 py-10 md:px-20 lg:px-24">
          <Button size="lg" asChild>
            <Link href="tel:03042585040">Hire Shayan Ali</Link>
          </Button>

          <Button variant="secondary" size="lg">
            View Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
