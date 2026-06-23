

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import ParticleImage from "@/components/ui/particle-image";
import { ArrowRight, Download, Mail } from "lucide-react";
import LogoLoop from "@/components/ui/LogoLoop"


// import {
//   SiReact,
//   SiNextdotjs,
//   SiTypescript,
//   SiTailwindcss,
// } from "react-icons/si";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiDocker,
  SiGit,
  SiGithub,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPostman,
  SiPytorch,
  // SiPowerbi,
  SiPhp,
  SiOverleaf,
  SiHtml5,
  SiHackerrank,
  SiFigma,
  SiExpress,
  SiAxios,

} from "react-icons/si";

import { Database, Terminal } from "lucide-react";

export default function Hero() {
  const roles = [
    "Software Engineer",
    "Web Developer",
    "Automation Engineer",
    "Full Stack Developer",
  ];
  const logos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript" },
    { node: <SiTailwindcss />, title: "Tailwind CSS" },
    { node: <SiJavascript />, title: "JavaScript" },
      { node: <SiNodedotjs />, title: "Node.js" },
  { node: <SiPython />, title: "Python" },
  { node: <SiCplusplus />, title: "C++" },
  // Custom placeholders
  {
    node: (
      <span className="text-lg font-bold">
        Cadence SKILL
      </span>
    ),
    title: "Cadence SKILL",
  },
    {
    node: (
      <span className="text-lg font-bold">
        TCL
      </span>
    ),
    title: "TCL",
  },
    {
    node: (
      <span className="text-lg font-bold">
        Automation
      </span>
    ),
    title: "Automation",
  },
    // Extras
  { node: <SiDocker />, title: "Docker" },
  { node: <SiGit />, title: "Git" },
  { node: <SiGithub />, title: "GitHub" },
  { node: <SiMongodb />, title: "MongoDB (No SQL)" },
  { node: <SiPostgresql />, title: "PostgreSQL" },
    { node: <SiMysql />, title: "SQL" },
    { node: <SiPostman />, title: "Postman" },
      { node: <SiPhp />, title: "PHP" },
  { node: <SiHtml5 />, title: "HTML5" },
  { node: <SiExpress />, title: "Express.js" },
  { node: <SiAxios />, title: "Axios" },

  { node: <SiFigma />, title: "Figma" },
  { node: <SiOverleaf />, title: "Overleaf" },
  { node: <SiHackerrank />, title: "HackerRank" },
  ];

  const logos_in_bg = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript" },
    { node: <SiTailwindcss />, title: "Tailwind CSS" },
    { node: <SiJavascript />, title: "JavaScript" },
      { node: <SiNodedotjs />, title: "Node.js" },
  { node: <SiPython />, title: "Python" },
  { node: <SiCplusplus />, title: "C++" },
      // Extras
  { node: <SiDocker />, title: "Docker" },
  { node: <SiGit />, title: "Git" },
  { node: <SiGithub />, title: "GitHub" },
  { node: <SiMongodb />, title: "MongoDB (No SQL)" },
  { node: <SiPostgresql />, title: "PostgreSQL" },
    { node: <SiMysql />, title: "SQL" },
        { node: <SiPostman />, title: "Postman" },
          { node: <SiPhp />, title: "PHP" },
  { node: <SiHtml5 />, title: "HTML5" },
  { node: <SiExpress />, title: "Express.js" },
  { node: <SiAxios />, title: "Axios" },

  { node: <SiFigma />, title: "Figma" },
  { node: <SiOverleaf />, title: "Overleaf" },
  { node: <SiHackerrank />, title: "HackerRank" },
  ];

  const gradients = [
    "from-blue-500 via-cyan-400 to-violet-500",
    "from-violet-500 via-pink-400 to-blue-500",
    "from-emerald-400 via-cyan-500 to-blue-500",
    "from-orange-400 via-red-500 to-violet-500",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          const next = currentRole.slice(0, displayText.length + 1);
          setDisplayText(next);

          if (next === currentRole) {
            setTimeout(() => setIsDeleting(true), 1400);
          }
        } else {
          const next = currentRole.slice(0, displayText.length - 1);
          setDisplayText(next);

          if (next === "") {
            setIsDeleting(false);
            setRoleIndex((p) => (p + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);


return (
  
  <section className="relative min-h-screen overflow-hidden">
{/* Background Logo Layer */}
<div className="absolute inset-0 z-[1] overflow-hidden opacity-[0.06] pointer-events-none">
  <div className="absolute top-20 left-0 right-0">
    <LogoLoop
      logos={logos_in_bg}
      speed={25}
      direction="left"
      logoHeight={80}
      gap={150}
      ariaLabel="Background technologies"
    />
  </div>

  <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2">
    <LogoLoop
      logos={logos_in_bg}
      speed={20}
      direction="right"
      logoHeight={100}
      gap={180}
      ariaLabel="Background technologies"
    />
  </div>
</div>
    {/* tsParticles background */}
    {/* <ParticleImage /> */}

    {/* Grid overlay */}
    <div className="absolute inset-0 z-[1] grid-background pointer-events-none" />
    <ParticlesBackground />

    {/* Gradient blobs */}
    <div className="absolute left-10 top-24 z-[2] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
    <div className="absolute right-10 bottom-20 z-[2] h-80 w-80 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />

    {/* CONTENT */}
    <div className="relative z-10 container-width flex min-h-screen items-start py-24">
      <div className="grid w-full items-center gap-16 lg:grid-cols-2">

        {/* LEFT */}
        <div className="order-2 text-center lg:order-1 lg:text-left">

          <div className="mb-6 inline-flex rounded-full border border-neutral-300 bg-white/50 px-4 py-2 text-sm backdrop-blur dark:border-neutral-700 dark:bg-neutral-900/50">
            🚀 Open to exciting opportunities
          </div>

          <h1 className="text-5xl font-black leading-tight md:text-6xl lg:text-7xl">
            Hi, I'm 
            <span className="text-gradient"> Khawar Khan</span>
          </h1>

          

          <div className="mt-6 flex items-center justify-center lg:justify-start">
            <span
              key={roleIndex}
              className={`
                min-h-[34px]
                text-xl font-semibold
                bg-gradient-to-r ${gradients[roleIndex]}
                bg-clip-text text-transparent
                transition-all duration-500
                animate-fade-in
              `}
            >
              {displayText}
            </span>

            <span className="ml-2 h-6 w-[3px] animate-pulse rounded-full bg-gradient-to-b from-blue-500 via-violet-500 to-cyan-500" />
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-400">
            I build scalable web applications, automation tools, and modern
            digital experiences using React, Next.js, TypeScript, Node.js,
            Python, and cloud technologies.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            {["Next.js", "React", "TypeScript", "Node.js", "Python", "Docker"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-neutral-300 px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg dark:bg-white dark:text-black"
            >
              View Projects <ArrowRight size={18} />
            </Link>

            <Link
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl border px-6 py-3 font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-100 dark:hover:bg-neutral-900"
            >
              <Download size={18} />
              Resume
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border px-6 py-3 font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-100 dark:hover:bg-neutral-900"
            >
              <Mail size={18} />
              Contact
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-5 text-2xl lg:justify-start">
            <Link href="https://github.com/KhawarGit" target="_blank">
              <FaGithub />
            </Link>

            <Link href="https://www.linkedin.com/in/khawar-khan/" target="_blank">
              <FaLinkedin />
            </Link>

            <Link href="mailto:khawarkhanibnmuhammadasghar@gmail.com">
              <Mail size={22} />
            </Link>

            <Link href="https://leetcode.com/" target="_blank">
              <SiLeetcode />
            </Link>
          </div>
        </div>
        

        {/* RIGHT */}
        <div className="order-1 flex justify-center lg:order-2">
          <div
            className="
              relative
              transform-gpu
              [perspective:1200px]
              animate-[float_6s_ease-in-out_infinite]
            "
          >
            {/* Ambient glow */}
            <div className="absolute -inset-10 -z-30 rounded-full bg-gradient-to-r from-blue-500/15 via-violet-500/15 to-cyan-500/15 blur-3xl animate-pulse" />

            {/* Outer soft rotating ring */}
            <div className="absolute -inset-[3px] rounded-full bg-gradient-to-r from-white/20 via-white/5 to-white/20 dark:from-white/15 dark:via-white/5 dark:to-white/15 animate-[spin_30s_linear_infinite]" />

            {/* Main gradient ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/60 via-violet-500/60 to-cyan-500/60 animate-[spin_18s_linear_infinite]" />

            {/* Glow highlight */}
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,0.45),transparent)] opacity-40 blur-[2px] animate-[spin_8s_linear_infinite]" />

            {/* 3D animated profile bubble */}
            <div
              className="
                relative
                rounded-full
                p-[2px]
                backdrop-blur-sm
                transform-gpu
                animate-[heroBubble_7s_ease-in-out_infinite]
                will-change-transform
              "
            >
              <div className="relative h-72 w-72 overflow-hidden rounded-full border border-white/15 bg-white/[0.02] md:h-80 md:w-80 dark:border-white/10 dark:bg-black/[0.02]">
                {/* Glass reflection */}
                <div className="pointer-events-none absolute inset-0 z-10 rounded-full bg-gradient-to-br from-white/10 via-transparent to-transparent" />

                {/* Particle image */}
                <ParticleImage className="h-full w-full rounded-full opacity-95" />
              </div>
            </div>

            {/* Floating accent lights */}
            <div className="absolute -top-3 right-6 h-3 w-3 rounded-full bg-cyan-400/80 blur-[2px] animate-pulse" />
            <div className="absolute bottom-5 -left-3 h-2 w-2 rounded-full bg-violet-400/80 blur-[1px] animate-pulse" />
            <div className="absolute left-10 -top-2 h-2 w-2 rounded-full bg-blue-400/70 blur-[1px] animate-ping" />
          </div>
        </div>
        {/* RIGHT end */}
      </div>
    </div>
    {/* Logo Loop Bottom */}
<div className="absolute bottom-0 left-0 right-0 z-20 pb-8">
  <div className="mx-auto max-w-full">
    <LogoLoop
      logos={logos}
      speed={35}
      direction="left"
      logoHeight={33}
      gap={80}
      hoverSpeed={15}
      scaleOnHover
      fadeOut
      fadeOutColor="transparent"
      ariaLabel="Technologies"
    />
  </div>
</div>
  </section>
);
}

// right
