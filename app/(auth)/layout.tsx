import React from "react";

import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import { Inter } from "next/font/google";

// SEO : Search Engine Optimisation
//The goal of SEO is to create a strategy that will increase your rankings position in search engine results. The higher the ranking, the more organic traffic to your site, which ultimately leads to more business for you!

export const metadata = {
  title: "Threads",
  description: "A Next.js Meta Threads Application",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  //type of children
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
