import { DiMongodb, DiMysql } from "react-icons/di";
import {
  RiBootstrapFill,
  RiCss3Fill,
  RiHtml5Fill,
  RiJavascriptFill,
  RiNextjsFill,
  RiNodejsFill,
  RiPhpFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { FlowbiteLogo } from "~/components/logos/flowbite";
import { T3Logo } from "~/components/logos/t3";
import { TrpcLogo } from "~/components/logos/trpc";
import { TursoLogo } from "~/components/logos/turso";

export default function SkillsSection() {
  const skills = [
    {
      title: "HTML",
      description:
        "Establish a compelling digital presence with hand-crafted HTML. I design SEO-optimized, accessible web structures that form the rock-solid foundation for engaging, conversion-focused experiences.",
      icon: <RiHtml5Fill className="size-6 group-hover/box:text-[#DD4B25]" />,
    },

    {
      title: "CSS",
      description:
        "Transform your visual storytelling with innovative CSS design. I create pixel-perfect, responsive layouts that captivate audiences and deliver a seamless experience across all devices.",
      icon: <RiCss3Fill className="size-6 group-hover/box:text-[#254BDF]" />,
    },

    {
      title: "JavaScript",
      description:
        "Empower your web applications with dynamic JavaScript solutions. I develop interactive features and data-driven functionalities that elevate user engagement and drive business success.",
      icon: (
        <RiJavascriptFill className="size-6 group-hover/box:text-[#F1D43B]" />
      ),
    },

    {
      title: "Bootstrap",
      description:
        "Speed up development with Bootstrap's proven mobile-first framework. I deliver clean, responsive designs that enhance user satisfaction while streamlining your project timelines.",
      icon: (
        <RiBootstrapFill className="size-6 group-hover/box:text-[#6A07F3]" />
      ),
    },

    {
      title: "Tailwind",
      description:
        "Redefine your interface with Tailwind CSS. I craft modern, efficient, and fully customizable designs that perfectly balance aesthetics with functionality to captivate users.",
      icon: (
        <RiTailwindCssFill className="size-6 group-hover/box:text-[#38BDF8]" />
      ),
    },

    {
      title: "Flowbite",
      description:
        "Transform your UI with Flowbite's ready-to-use Tailwind components. I leverage this toolkit to rapidly prototype and deliver user-centric, market-ready applications.",
      icon: <FlowbiteLogo className="h-6 w-6 group-hover/box:text-[#0786FB]" />,
    },

    {
      title: "MySQL",
      description:
        "Drive your data strategy with robust MySQL implementations. I design scalable, secure databases that enhance performance and empower data-driven business growth.",
      icon: <DiMysql className="size-6 group-hover/box:text-[#007598]" />,
    },

    {
      title: "MongoDB",
      description:
        "Unlock agile data management with MongoDB. I build flexible, high-performance databases that ensure real-time insights and effortless scalability to meet evolving business needs.",
      icon: <DiMongodb className="size-6 group-hover/box:text-[#21D072]" />,
    },

    {
      title: "Turso",
      description:
        "Revolutionize your data layer with Turso's edge database technology. I implement Turso to deliver offline-ready, lightning-fast performance that meets today's demanding market standards.",
      icon: (
        <TursoLogo className="size-6 dark:group-hover/box:text-[#4FF8D2]" />
      ),
    },

    {
      title: "PHP",
      description:
        "Elevate your server-side performance with powerful PHP solutions. I build secure, scalable backend architectures that drive reliability and adapt to evolving market demands.",
      icon: <RiPhpFill className="size-6 group-hover/box:text-[#4F5B93]" />,
    },

    {
      title: "Nodejs with Express",
      description:
        "Accelerate your backend development with Node.js and Express. I create real-time, efficient server architectures that boost performance and propel your business forward.",
      icon: <RiNodejsFill className="size-6 group-hover/box:text-[#54A245]" />,
    },

    {
      title: "React",
      description:
        "Transform your digital interactions with cutting-edge React development. I craft modular, high-performance interfaces that deliver engaging user experiences and a competitive edge.",
      icon: <RiReactjsFill className="size-6 group-hover/box:text-[#087EA4]" />,
    },

    {
      title: "Next.js",
      description:
        "Power your web applications with Next.js innovation. I harness server-side rendering and dynamic capabilities to deliver ultra-fast, SEO-friendly applications that captivate audiences and drive results.",
      icon: (
        <RiNextjsFill className="size-6 group-hover/box:text-black dark:group-hover/box:text-[#ffffff]" />
      ),
    },

    {
      title: "TRPC",
      description:
        "Enhance your full-stack development with TRPC's type-safe API integration. I streamline secure, scalable communication between your front and back ends to build modern, seamless applications.",
      icon: <TrpcLogo className="size-6 group-hover/box:text-[#398CCB]" />,
    },

    {
      title: "T3 stack",
      description:
        "Set a new standard with the T3 stack—a powerful fusion of TypeScript, Next.js, and TRPC. I build seamless, scalable full-stack applications that drive innovation and deliver measurable business impact.",
      icon: (
        <T3Logo className="size-6 group-hover/box:text-black dark:group-hover/box:text-[#E2E8F0]" />
      ),
    },
  ];

  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-between py-10 pb-0"
    >
      <h2 className="z-10 w-full bg-gradient-to-t from-muted-foreground via-foreground/70 to-foreground bg-clip-text text-center text-3xl text-transparent md:text-4xl lg:text-5xl">
        My Skills
      </h2>

      <div className="border-b-2 border-dotted px-2 pt-10">
        <div className="z-10 mx-auto grid grid-cols-1 justify-around md:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ title, description, icon }, index) => (
            <div key={index} className="size-full flex-shrink-0">
              <div className="absolute inset-x-0 w-full border-b-2 border-dotted" />
              <div className="absolute inset-5 bottom-0 top-0 h-full border-x-2 border-dotted" />

              <div className="group/box relative z-10 flex flex-col overflow-hidden bg-transparent py-10">
                <div className="relative z-10 mb-4 px-10 text-muted-foreground">
                  {icon}
                </div>
                <h3 className="z-10 mb-2 w-max bg-gradient-to-t from-muted-foreground via-foreground/70 to-foreground bg-clip-text px-10 text-lg font-bold text-transparent">
                  <span className="inline-block transition duration-150">
                    {title}
                  </span>
                </h3>
                <p className="relative z-10 px-10 text-sm text-muted-foreground">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
