import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { constructMetadata, generatePersonJsonLd } from "@/lib/seo";
import { SmoothScrollProvider } from "@/components/providers";
import { Navbar, Footer, ScrollProgress, ScrollToTop } from "@/components/layout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = generatePersonJsonLd();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SmoothScrollProvider>
          <ScrollProgress />
          <Navbar />
          <div className="flex-1 flex flex-col">{children}</div>
          <Footer />
          <ScrollToTop />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
