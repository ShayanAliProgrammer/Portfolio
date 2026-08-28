import { cookies } from "next/headers";

import { ReferencePortfolio } from "@/components/portfolio/reference-portfolio";
import { faqSchema } from "@/components/portfolio/faq";
import { siteConfig } from "@/data/site";
import { THEME_COOKIE, normalizeTheme } from "@/lib/theme";

export default async function HomePage() {
  const theme = normalizeTheme((await cookies()).get(THEME_COOKIE)?.value);
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: siteConfig.name,
        jobTitle: "Full-stack developer",
        url: siteConfig.url,
        image: `${siteConfig.url}/brand/shayan-pencil-art.webp`,
        sameAs: [siteConfig.social.github],
        knowsAbout: [
          "React",
          "Next.js",
          "TypeScript",
          "PHP",
          "Web performance",
          "Accessibility",
        ],
      },
      {
        "@type": "WebSite",
        name: `${siteConfig.name} portfolio`,
        url: siteConfig.url,
        description: siteConfig.description,
      },
      { "@type": "FAQPage", mainEntity: faqSchema },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <ReferencePortfolio initialTheme={theme} />
    </>
  );
}
