export const siteConfig = {
  name: "Shayan Ali Jalbani",
  shortName: "Shayan Ali",
  title: "Full-stack developer who builds useful web products",
  description:
    "Shayan Ali is a full-stack developer in Pakistan who turns strong ideas into clear, reliable, and fast web products with Next.js, TypeScript, and modern backend systems.",
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
