import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "realtime-counter-app",
    name: "Real-time Counter App",
    eyebrow: "Real-time web application",
    description:
      "A production-ready counter experience built around real-time updates and a focused, low-friction interface.",
    outcome:
      "Demonstrates event-driven UI thinking, backend integration, and a clear product surface.",
    role: "Full-stack development",
    stack: ["PHP", "Real-time updates", "Responsive UI"],
    language: "PHP",
    githubUrl: "https://github.com/ShayanAliProgrammer/realtime-counter-app",
    featured: true,
  },
  {
    slug: "endurance-tec",
    name: "Endurance TEC",
    eyebrow: "Responsive web experience",
    description:
      "A responsive web project focused on clear information architecture, accessible content, and a dependable front-end foundation.",
    outcome:
      "Shows the ability to turn a visual direction into a structured, responsive browser experience.",
    role: "Front-end development",
    stack: ["HTML", "CSS", "Responsive design"],
    language: "HTML",
    githubUrl: "https://github.com/ShayanAliProgrammer/endurance-tec",
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
