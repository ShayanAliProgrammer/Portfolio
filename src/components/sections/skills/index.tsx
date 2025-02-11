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
        "Transform your UI with Flowbite’s ready-to-use Tailwind components. I leverage this toolkit to rapidly prototype and deliver user-centric, market-ready applications.",
      icon: (
        <svg
          className="h-6 w-6 dark:group-hover/box:text-[#0786FB]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M15.907 11.998L10.332 9.23a.9.9 0 01-.16-.037l-.018-.007v6.554c0 .017.008.034.01.051l2.388-2.974 3.355-.82z" />
          <path d="M11.463 4.054l5.579 3.323A4.02 4.02 0 0118.525 9c.332.668.47 1.414.398 2.155a3.07 3.07 0 01-.745 1.65 3.108 3.108 0 01-1.55.951c-.022.007-.045.005-.07.01-.062.03-.126.057-.191.08l-2.72.667-1.992 2.48c-.18.227-.41.409-.67.534.047.034.085.077.137.107a2.05 2.05 0 001.995.035c.592-.33 2.15-1.201 4.636-2.892l.28-.19c1.328-.895 3.616-2.442 3.967-4.215a9.94 9.94 0 00-1.713-4.154 10.027 10.027 0 00-3.375-2.989 10.107 10.107 0 00-8.802-.418c1.162.287 2.287.704 3.354 1.243z" />
          <path d="M5.382 17.082v-6.457a3.7 3.7 0 01.45-1.761 3.733 3.733 0 011.238-1.34 3.915 3.915 0 013.433-.245c.176.03.347.084.508.161l5.753 2.856c.082.05.161.105.236.165a2.128 2.128 0 00-.953-1.455l-5.51-3.284c-1.74-.857-3.906-1.523-5.244-1.097a9.96 9.96 0 00-2.5 3.496 9.895 9.895 0 00.283 8.368 9.973 9.973 0 002.73 3.322 17.161 17.161 0 01-.424-2.729z" />
          <path d="M19.102 16.163l-.272.183c-2.557 1.74-4.169 2.64-4.698 2.935a4.083 4.083 0 01-2 .53 3.946 3.946 0 01-1.983-.535 3.788 3.788 0 01-1.36-1.361 3.752 3.752 0 01-.51-1.85 1.812 1.812 0 01-.043-.26V9.143c0-.024.009-.046.01-.07-.056.02-.11.043-.162.07a1.796 1.796 0 00-.787 1.516v6.377a10.67 10.67 0 001.113 4.27 10.11 10.11 0 008.505-.53 10.022 10.022 0 003.282-2.858 9.936 9.936 0 001.75-3.97 19.615 19.615 0 01-2.845 2.216z" />
        </svg>
      ),
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
        "Revolutionize your data layer with Turso's edge database technology. I implement Turso to deliver offline-ready, lightning-fast performance that meets today’s demanding market standards.",
      icon: (
        <svg
          className="size-6 dark:group-hover/box:text-[#4FF8D2]"
          viewBox="0 0 201 170"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M200.035 48.61C195.365 20.67 170.875 0 170.875 0v30.78l-14.54 3.75-9.11-10.97-4.81 9.46c-9.92-2.7-23.58-4.44-42.37-4.44s-32.45 1.75-42.37 4.44l-4.81-9.46-9.11 10.97-14.54-3.75V0S4.725 20.67.055 48.61l32.14 11.12c1.05 19.43 9.79 71.88 12.29 76.64 2.66 5.07 16.78 19.56 27.83 25.13 0 0 4-4.23 6.44-7.96 3.1 3.65 19.11 16.45 21.3 16.45 2.19 0 18.2-12.79 21.3-16.45 2.44 3.73 6.44 7.96 6.44 7.96 11.05-5.57 25.17-20.06 27.83-25.13 2.5-4.76 11.24-57.21 12.29-76.64l32.14-11.12h-.02zm-46.19 44.74l-21.75 1.94 1.91 26.67s-13.23 10.95-33.96 10.95-33.96-10.95-33.96-10.95l1.91-26.67-21.75-1.94-3.72-30.04 36.05 12.48-2.8 37.39c6.7 1.7 13.75 3.39 24.28 3.39 10.53 0 17.57-1.69 24.27-3.39l-2.8-37.39 36.05-12.48-3.72 30.04h-.01z"
            fill="currentColor"
          />
        </svg>
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
        "Enhance your full-stack development with TRPC’s type-safe API integration. I streamline secure, scalable communication between your front and back ends to build modern, seamless applications.",
      icon: (
        <svg
          className="size-6 group-hover/box:text-[#398CCB]"
          width="512"
          height="512"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="512" height="512" rx="150" fill="currentColor" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M255.446 75L326.523 116.008V138.556L412.554 188.238V273.224L435.631 286.546V368.608L364.6 409.615L333.065 391.378L256.392 435.646L180.178 391.634L149.085 409.615L78.0538 368.538V286.546L100.231 273.743V188.238L184.415 139.638L184.462 139.636V116.008L255.446 75ZM326.523 159.879V198.023L255.492 239.031L184.462 198.023V160.936L184.415 160.938L118.692 198.9V263.084L149.085 245.538L220.115 286.546V368.538L198.626 380.965L256.392 414.323L314.618 380.712L293.569 368.538V286.546L364.6 245.538L394.092 262.565V198.9L326.523 159.879ZM312.031 357.969V307.915L355.369 332.931V382.985L312.031 357.969ZM417.169 307.846L373.831 332.862V382.985L417.169 357.9V307.846ZM96.5154 357.9V307.846L139.854 332.862V382.915L96.5154 357.9ZM201.654 307.846L158.315 332.862V382.915L201.654 357.9V307.846ZM321.262 291.923L364.6 266.908L407.938 291.923L364.6 316.962L321.262 291.923ZM149.085 266.838L105.746 291.923L149.085 316.892L192.423 291.923L149.085 266.838ZM202.923 187.362V137.308L246.215 162.346V212.377L202.923 187.362ZM308.015 137.308L264.723 162.346V212.354L308.015 187.362V137.308ZM212.154 121.338L255.446 96.3231L298.785 121.338L255.446 146.354L212.154 121.338Z"
            fill="white"
          />
        </svg>
      ),
    },

    {
      title: "T3 stack",
      description:
        "Set a new standard with the T3 stack—a powerful fusion of TypeScript, Next.js, and TRPC. I build seamless, scalable full-stack applications that drive innovation and deliver measurable business impact.",
      icon: (
        <svg
          width={258}
          height={199}
          viewBox="0 0 258 199"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-6 group-hover/box:text-black dark:group-hover/box:text-[#E2E8F0]"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M165.735 25.07L188.947.972H0.466V25.07h165.269z"
            fill="currentColor"
          />
          <path
            d="M163.981 96.324l90.041-92.64-32.816-.001-75.589 77.078 18.364 15.563zM233.658 131.418c0 23.657-19.178 42.836-42.835 42.836-19.108 0-35.31-12.516-40.823-29.815l-3.375-10.591-19.296 19.295 1.763 4.193c10.123 24.085 33.942 41.018 61.731 41.018 36.968 0 66.936-29.968 66.936-66.936 0-24.481-13.36-45.678-32.803-57.328l-4.561-2.732-17.668 17.895 8.061 4.255c13.615 7.188 22.87 21.473 22.87 37.91z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M88.263 192.669V45.646H64.165v147.023h24.097z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-between py-10"
    >
      <h2 className="bg-gradient-to-t from-muted-foreground via-foreground/70 to-foreground bg-clip-text text-center text-3xl text-transparent md:text-4xl lg:text-5xl">
        My Skills
      </h2>

      <div className="px-2 pt-10">
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 overflow-hidden rounded-xl border md:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ title, description, icon }, index) => (
            <div
              className="group/box relative flex flex-col py-10 hover:bg-card hover:text-card-foreground"
              key={index}
            >
              <div className="relative z-10 mb-4 px-10 text-muted-foreground">
                {icon}
              </div>

              <h3 className="z-10 mb-2 w-max bg-gradient-to-t from-muted-foreground via-foreground/70 to-foreground bg-clip-text px-10 text-lg font-bold text-transparent">
                <span className="inline-block transition duration-200">
                  {title}
                </span>
              </h3>
              <p className="relative z-10 px-10 text-sm text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
