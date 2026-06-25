import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "@/components/ui/navbar";
import Hero from "@/components/ui/hero";
import About from "@/components/ui/about";
import Skills from "@/components/ui/skills";
import Projects from "@/components/ui/projects";
import Experience from "@/components/ui/experience";
import Contact from "@/components/ui/contact";
import Footer from "@/components/ui/footer";
import Certifications from "@/components/ui/certifications";
// import SectionWrapper from "@/components/ui/section-wrapper";
import ShapeGrid from "@/components/ui/shape-gird";

export default function HomePage() {
  return (
    <main className="relative z-10 min-h-screen">
      <Navbar />
      {/* Hero */}
      <Hero />
      {/* <SectionWrapper> */}
        <div className="relative">
    <div className="absolute inset-0">
      <ShapeGrid
        speed={0}
        shape="hexagon"
        direction="diagonal"
        squareSize={50}
        borderColor="rgba(99,102,241,0.15)"
        hoverFillColor="rgba(99,102,241,0.25)"
        hoverTrailAmount={5}
      />
    </div>

    <div className="relative z-10">
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
    </div>
  </div>
      <Footer />
    </main>
  );
}