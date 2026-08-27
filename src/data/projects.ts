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
    challenge:
      "Make a small real-time interaction feel dependable and easy to understand instead of exposing the complexity of live updates.",
    approach:
      "Focused the experience on a clear counter surface, responsive feedback, and a backend-aware implementation that keeps the user action obvious.",
    deliverables: [
      "Real-time interaction surface",
      "Backend integration",
      "Responsive interface",
    ],
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
    challenge:
      "Turn a visual direction into a responsive browser experience without losing structure, clarity, or accessibility across screen sizes.",
    approach:
      "Built the interface around semantic content hierarchy, fluid layout decisions, and a dependable front-end foundation that keeps the page easy to navigate.",
    deliverables: [
      "Responsive page system",
      "Semantic content structure",
      "Accessible front-end foundation",
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
