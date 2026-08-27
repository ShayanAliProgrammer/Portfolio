export const siteConfig = {
  name: "Shayan Ali Jalbani",
  shortName: "Shayan Ali",
  title: "Full-stack developer building fast, conversion-focused web apps",
  description:
    "Shayan Ali is a full-stack developer who builds reliable, SEO-friendly web products with Next.js, TypeScript, and modern backend systems.",
  url: "https://shayanali.vercel.app",
  location: "Pakistan",
  phone: "03042585040",
  email: "",
  social: {
    github: "https://github.com/ShayanAliProgrammer",
    medium: "https://medium.com/@coding-master-shayan",
    threads: "https://www.threads.com/@shayanalideveloper?hl=en",
    bluesky: "https://bsky.app/profile/codingmastershayan.bsky.social",
  },
} as const;

export const navigation = [
  { label: "Home", href: "/#home", external: false },
  { label: "Capabilities", href: "/#capabilities", external: false },
  { label: "Selected work", href: "/#work", external: false },
  { label: "Writing", href: siteConfig.social.medium, external: true },
] as const;
