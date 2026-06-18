import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MouseGlow from "@/components/ui/mouse-glow";
// import AuroraBackground from "@/components/ui/aurora-background";
import { ThemeProviderWrapper } from "@/components/ui/theme-provider";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "KHAWAR KHAN | Full Stack Developer | Automation Engineer | Application Developer | Software Engineer",
    template: "%s | KHAWAR KHAN",
  },
  description:
    "Modern portfolio showcasing projects, skills, experience, and open-source contributions.",
  keywords: [
    "Portfolio",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "MERN",
    "Software Engineer",
  ],
  authors: [
    {
      name: "KHAWAR KHAN",
    },
  ],
  creator: "KHAWAR KHAN",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "KHAWAR KHAN | Portfolio | Full Stack Developer | Automation Engineer | Application Developer | Software Engineer",
    description:
      "Explore my projects, skills, experience, and technical journey.",
    type: "website",
    locale: "en_US",
    siteName: "KHAWAR KHAN Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "KHAWAR KHAN | Portfolio",
    description:
      "Explore my projects, skills, experience, and technical journey.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProviderWrapper> 
          <MouseGlow />
          {/* <AuroraBackground /> */}
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}