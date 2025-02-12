import "~/styles/globals.css";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { cookies } from "next/headers";
import NextTopLoader from "nextjs-toploader";

import Footer from "~/components/footer";
import Header from "~/components/header";
import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const theme = (await cookies()).get("theme")?.value ?? "system";

  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${theme}`}
    >
      <body>
        <TRPCReactProvider>
          <NextTopLoader color="hsl(var(--primary))" showSpinner={false} />

          <Header />

          {children}

          <Footer />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
