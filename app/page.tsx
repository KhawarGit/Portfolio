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

export default function HomePage() {
  return (
    <main className="relative z-10 min-h-screen">
      <Navbar />
      {/* Hero */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}