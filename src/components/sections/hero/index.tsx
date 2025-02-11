import { Button } from "~/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="flex flex-col items-center justify-between">
      <div className="w-full px-5 md:px-10 lg:px-20">
        <div className="border-x-2 border-dotted px-1 py-6 text-center text-4xl md:text-5xl lg:text-6xl" />
      </div>

      <div className="w-full border-y-2 border-dotted px-5 md:px-10 lg:px-20">
        <h1 className="border-x-2 border-dotted bg-gradient-to-t from-muted-foreground via-foreground/70 to-foreground bg-clip-text px-1 py-5 text-center text-4xl text-transparent md:text-5xl lg:text-6xl">
          Welcome to the new Era of Web Development
        </h1>
      </div>

      <div className="w-full border-b-2 border-dotted px-5 md:px-10 lg:px-20">
        <div className="border-x-2 border-dotted px-1 py-8 text-center text-base lg:text-lg">
          <p className="mx-auto block max-w-3xl text-foreground/60">
            I’m Shayan Ali, a dedicated full-stack developer leveraging the T3
            stack and Next.js to deliver robust, SEO-friendly web solutions. My
            expertise includes HTML, CSS, JavaScript, React, Node.js, Express,
            and reliable databases like MongoDB, MySQL, SQlite, and{" "}
            <a
              href="https://turso.tech/"
              target="_blank"
              className="underline underline-offset-4"
            >
              Turso
            </a>
            .
          </p>
        </div>
      </div>

      <div className="w-full border-b-2 border-dotted px-5 md:px-10 lg:px-20">
        <div className="border-x-2 border-dotted px-1 text-center text-base lg:text-lg">
          <div className="mx-auto flex w-max items-center justify-center gap-5 border-x-0 border-dotted px-5 py-10 md:border-x-2 md:px-20 lg:px-24">
            <Button variant="outline" size="lg">
              View Projects
            </Button>

            <Button size="lg">Go to Resume</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
