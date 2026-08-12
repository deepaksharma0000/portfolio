import type { Metadata } from "next";
import { Figtree, JetBrains_Mono, Syne } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { siteConfig } from "@/data/site";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const description =
  "Deepak Sharma is a Full-Stack Developer building scalable web applications, APIs, realtime systems, and production digital products across FinTech, SaaS, and commerce.";

export const metadata: Metadata = {
  metadataBase: new URL("https://deepaksharma.dev"),
  title: {
    default: "Deepak Sharma | Full-Stack Developer",
    template: "%s | Deepak Sharma",
  },
  description,
  keywords: [
    "Deepak Sharma",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "FinTech",
    "SaaS",
    "React Native",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://deepaksharma.dev",
    title: "Deepak Sharma | Full-Stack Developer",
    description,
    siteName: "Deepak Sharma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Sharma | Full-Stack Developer",
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${syne.variable} ${figtree.variable} ${jetbrains.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
