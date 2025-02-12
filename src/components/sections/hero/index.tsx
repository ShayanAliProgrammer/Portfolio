import { Button } from "~/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-between"
    >
      <div className="z-10 w-full border-y-2 border-dotted px-5 md:px-10 lg:px-20">
        <h1 className="border-x-2 border-dotted bg-gradient-to-t from-muted-foreground via-foreground/70 to-foreground bg-clip-text px-1 py-5 text-center text-4xl text-transparent md:text-5xl lg:text-6xl">
          Welcome to the new Era of Web Development
        </h1>
      </div>

      <div className="z-10 w-full border-b-2 border-dotted px-5 md:px-10 lg:px-20">
        <div className="border-x-2 border-dotted px-1 py-8 text-center text-base lg:text-lg">
          <p className="mx-auto block max-w-3xl px-2 leading-relaxed text-muted-foreground md:leading-loose">
            Hello, I'm a seasoned full-stack web developer specializing in{" "}
            <span className="text-foreground">T3 stack</span> and{" "}
            <span className="text-foreground">Next.js</span>, delivering robust,{" "}
            <span className="text-foreground">SEO-optimized</span> web
            solutions. If you're seeking a{" "}
            <span className="text-foreground">high-performance</span>,{" "}
            <span className="text-foreground">cost-efficient</span> website
            developed to enhance your online presence, let's connect today to{" "}
            <a href="tel:03042585040" className="text-foreground">
              discuss your project requirements
            </a>
            .
          </p>
        </div>
      </div>

      <div className="z-10 w-full border-b-2 border-dotted px-5 md:px-10 lg:px-20">
        <div className="border-x-2 border-dotted px-1 text-center text-base lg:text-lg">
          <div className="mx-auto flex w-max items-center justify-center gap-5 border-x-0 border-dotted px-5 py-10 md:border-x-2 md:px-20 lg:px-24">
            <Button size="lg">Go to Resume</Button>

            <Button variant="secondary" size="lg">
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
