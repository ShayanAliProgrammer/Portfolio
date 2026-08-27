export const siteConfig = {
  name: "Shayan Ali Jalbani",
  shortName: "Shayan Ali",
  title: "Full-stack developer building fast, conversion-focused web apps",
  description:
    "Shayan Ali is a full-stack developer who builds reliable, SEO-friendly web products with Next.js, TypeScript, and modern backend systems.",
  url: "https://shayanali.vercel.app",
  location: "Pakistan",
  phone: "03042585040",
  social: {
    github: "https://github.com/ShayanAliProgrammer",
  },
} as const;

export const navigation = [
  { label: "Home", href: "/#home", external: false },
  { label: "About", href: "/#about", external: false },
  { label: "Selected work", href: "/#work", external: false },
  { label: "Contact", href: "/#contact", external: false },
] as const;
