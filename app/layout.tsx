import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import MouseGlow from "@/components/ui/mouse-glow";
// import AuroraBackground from "@/components/ui/aurora-background";
// import CanvasCursor from "@/components/ui/CanvasCursor";
import SplashCursor from "@/components/ui/SplashCursor";

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
          {/* <CanvasCursor /> */}
          {/* <MouseGlow /> */}
          {/* <AuroraBackground /> */}
{/* <SplashCursor
  DENSITY_DISSIPATION={4}
  VELOCITY_DISSIPATION={2.8}
  PRESSURE={0.12}
  CURL={1.8}
  SPLAT_RADIUS={0.11}
  SPLAT_FORCE={2800}
  COLOR_UPDATE_SPEED={6}
  SHADING
  RAINBOW_MODE={false}
  COLOR="#7C3AED"
/> */}
{/* <SplashCursor
  DENSITY_DISSIPATION={4}
  VELOCITY_DISSIPATION={2.7}
  PRESSURE={0.11}
  CURL={1.5}
  SPLAT_RADIUS={0.10}
  SPLAT_FORCE={2600}
  COLOR_UPDATE_SPEED={5}
  SHADING
  RAINBOW_MODE={false}
  COLOR="#8B5CF6"
/> */}
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}