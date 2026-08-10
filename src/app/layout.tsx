import "~/styles/globals.css";

import { type Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import NextTopLoader from "nextjs-toploader";

import { ThemeProvider } from "~/providers/theme-provider";
import { TRPCReactProvider } from "~/trpc/react";
import Header from "~/components/header";
import Footer from "~/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  preload: true,
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Shayan Ali Jalbani | Full Stack Developer & T3 Stack Specialist",
  description: 
    "Professional full-stack developer specializing in Next.js, T3 Stack, and modern web technologies. Building scalable, SEO-optimized web applications with exceptional user experiences.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "Shayan Ali Jalbani | Full Stack Developer",
    description: 
      "Building modern web applications with Next.js, TypeScript, and the T3 Stack",
    url: "https://shayanali.dev",
    siteName: "Shayan Ali Jalbani Portfolio",
    images: [
      {
        url: "/shayan-4k-2.jpeg",
        width: 1200,
        height: 630,
        alt: "Shayan Ali Jalbani - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shayan Ali Jalbani | Full Stack Developer",
    description: 
      "Building modern web applications with Next.js, TypeScript, and the T3 Stack",
    images: ["/shayan-4k-2.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const theme = (await cookies()).get("theme")?.value ?? "system";

  return (
    <html
      lang="en"
      className={`${inter.className} ${theme} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme={theme}
          enableSystem
          disableTransitionOnChange
        >
          <TRPCReactProvider>
            <NextTopLoader color="hsl(var(--primary))" showSpinner={false} />
            
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
