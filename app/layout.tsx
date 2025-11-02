import type { Metadata } from "next";
import { Inter, Poppins } from 'next/font/google'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Prathin Sajith Portfolio",
  description: "Welcome to Prathin Sajith's personal portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-[--background] text-[--foreground] min-h-screen flex flex-col`}
      >
        <NextThemesProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange
        >
          <Header />
            <main className="flex-1">{children}</main>
          <Footer />
        </NextThemesProvider>
      </body>
    </html>
  );
}
