import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { Toaster } from "@/components/ui/sonner";
import { MotionConfig, LazyMotion, domAnimation } from "framer-motion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-(--background) text-(--foreground) min-h-screen flex flex-col`}
      >
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          <MotionConfig reducedMotion="user">
            <LazyMotion features={domAnimation}>
              <Header />
              <ScrollToTop />
              <Toaster richColors position="top-right" />
              <main id="main-content" className="flex-1 outline-none">
                {children}
              </main>
              <Footer />
            </LazyMotion>
          </MotionConfig>
        </NextThemesProvider>
      </body>
    </html>
  );
}
