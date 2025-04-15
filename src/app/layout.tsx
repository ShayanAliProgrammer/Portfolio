import "~/styles/globals.css";

import { type Metadata } from "next";
import { Nunito } from "next/font/google";
import { cookies } from "next/headers";
import NextTopLoader from "nextjs-toploader";

import Footer from "~/components/footer";
import Header from "~/components/header";
import { TRPCReactProvider } from "~/trpc/react";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  preload: true,
  weight: ['600', '700','800','900']
});  

export const metadata: Metadata = {
  title: "Shayan Ali Jalbani",
  description: "Hi, I am a full stack developer from Pakistan. If you have any project in mind, than let's connect together to bring your idea in life.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const theme = (await cookies()).get("theme")?.value ?? "system";

  return (
    <html
      lang="en"
      className={`${nunito.className} ${theme} antialiased relative`}
      >
      <body>
      <div className="texture" />

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
