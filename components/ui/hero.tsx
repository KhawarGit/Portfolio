

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import ParticleBackground from "@/components/ui/ParticlesBackground";
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

  // Darker stops for light mode (contrast against a white page) with the
  // brighter, more vivid stops kept for dark mode via `dark:` overrides.
  const gradients = [
    "from-blue-600 via-cyan-600 to-violet-600 dark:from-blue-500 dark:via-cyan-400 dark:to-violet-500",
    "from-violet-600 via-blue-600 to-cyan-700 dark:from-violet-500 dark:via-blue-400 dark:to-cyan-500",
    "from-cyan-700 via-blue-600 to-violet-600 dark:from-cyan-400 dark:via-blue-500 dark:to-violet-500",
    "from-violet-600 via-cyan-700 to-blue-600 dark:from-violet-400 dark:via-cyan-400 dark:to-blue-500",
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

  <section className="relative flex min-h-[100svh] flex-col overflow-hidden lg:h-screen lg:max-h-screen">
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
    {/* <ParticlesBackground /> */}
    {/* Particle Background */}
<div className="absolute inset-0 z-[5]">
  {/* Particle Background */}
  {/* Particle Background */}
  <ParticleBackground

    variant="cube"
    colorScheme="blue"
    count={100}
    speed={4}
    connectRadius={97}
    interactive
    backgroundColor="#050a14"
  />
</div>

    {/* Gradient blobs */}
    <div className="absolute left-10 top-24 z-[2] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
    <div className="absolute right-10 bottom-20 z-[2] h-80 w-80 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />

    {/* CONTENT */}
    {/* pointer-events-none here + auto on the columns below: this flex-1
        wrapper spans the full section height to vertically center the
        grid, so its "empty" margin above/below the actual columns would
        otherwise sit on top of (and block hover on) the logo loop/scroll
        indicator layered underneath at the bottom of the hero. */}
    <div className="pointer-events-none relative z-10 container-width flex flex-1 items-center py-20 pt-28 lg:min-h-0 lg:py-6 lg:pt-24 lg:pb-28">
      <div className="pointer-events-none grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-16">

        {/* LEFT */}
        <div className="pointer-events-auto order-2 text-center lg:order-1 lg:text-left">

          <div className="mb-4 inline-flex rounded-full border border-neutral-300 bg-white/50 px-4 py-2 text-sm backdrop-blur dark:border-neutral-700 dark:bg-neutral-900/50 lg:mb-4">
            🚀 Open to exciting opportunities
          </div>

          <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
            Hi, I'm
            <span className="text-gradient"> Khawar Khan</span>
          </h1>



          <div className="mt-4 flex items-center justify-center lg:mt-4 lg:justify-start">
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

          <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-400 lg:mt-4 lg:text-lg lg:leading-8">
            I build scalable web applications, automation tools, and modern
            digital experiences using React, Next.js, TypeScript, Node.js,
            Python, and cloud technologies.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3 lg:mt-6 lg:justify-start">
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

          <div className="mt-6 flex flex-wrap justify-center gap-4 lg:mt-8 lg:justify-start">
<Link
  href="#projects"
  className="
    group
    relative
    inline-flex
    overflow-hidden
    rounded-xl
    p-[1px]

bg-[conic-gradient(from_180deg_at_50%_50%,#3B82F6,#8B5CF6,#06B6D4,#3B82F6)]

    bg-[length:300%_300%]
    animate-[gradientMove_5s_linear_infinite]

    transition-all
    duration-300

    hover:scale-105
    hover:-translate-y-1
    hover:[transform:perspective(700px)_rotateX(8deg)_rotateY(-8deg)]
    hover:shadow-[0_0_20px_rgba(59,130,246,.35),0_0_45px_rgba(139,92,246,.25)]
  "
>
  {/* Shine Sweep */}
  <span
    className="
      absolute
      inset-0
      -translate-x-full
      skew-x-12
      bg-gradient-to-r
      from-transparent
      via-white/30
      to-transparent
      transition-transform
      duration-700
      group-hover:translate-x-[180%]
    "
  />

  {/* Inner */}
  <span
    className="
      relative
      flex
      items-center
      gap-2
      rounded-[11px]
      bg-[#050a14]/95
      backdrop-blur-xl
      px-6
      py-3
      text-white
      transition-colors
      duration-300
      group-hover:bg-[#0b1325]
    "
  >
    View Projects

    <ArrowRight
      size={18}
      className="
        transition-all
        duration-300
        group-hover:translate-x-2
        group-hover:scale-125
      "
    />
  </span>
</Link>

<Link
  href="/resume.pdf"
  target="_blank"
  className="
    group
    relative
    inline-flex
    items-center
    gap-2
    overflow-hidden
    rounded-xl
    border
    border-violet-500/40
    bg-background/70
    px-6
    py-3
    font-medium
    backdrop-blur-md
    transition-all
    duration-300
    hover:-translate-y-1
    hover:scale-105
    hover:border-violet-400
    hover:shadow-[0_0_25px_rgba(139,92,246,0.45)]
    hover:[transform:perspective(700px)_rotateX(8deg)_rotateY(-8deg)]
  "
>
  {/* Animated Gradient Border */}
  <span
    className="
      absolute
      inset-0
      -z-10
      rounded-xl
      bg-[linear-gradient(120deg,#3b82f6,#8b5cf6,#06b6d4,#3b82f6)]
      bg-[length:250%_250%]
      opacity-0
      blur-md
      transition-opacity
      duration-500
      group-hover:opacity-100
      animate-[gradient_5s_linear_infinite]
    "
  />

  {/* Shine */}
  <span
    className="
      absolute
      inset-0
      -translate-x-full
      bg-gradient-to-r
      from-transparent
      via-white/20
      to-transparent
      group-hover:translate-x-full
      transition-transform
      duration-700
    "
  />

  <Download
    size={18}
    className="
      transition-all
      duration-300
      group-hover:-translate-y-1
      group-hover:scale-125
      group-hover:rotate-12
    "
  />

  Resume
</Link>

<Link
  href="#contact"
  className="
    group
    relative
    inline-flex
    items-center
    gap-2
    overflow-hidden
    rounded-xl
    border
    border-cyan-500/40
    bg-background/70
    px-6
    py-3
    font-medium
    backdrop-blur-md
    transition-all
    duration-300
    hover:-translate-y-1
    hover:scale-105
    hover:border-cyan-400
    hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]
    hover:[transform:perspective(700px)_rotateX(8deg)_rotateY(-8deg)]
  "
>
  {/* Animated Gradient Border */}
  <span
    className="
      absolute
      inset-0
      -z-10
      rounded-xl
      bg-[linear-gradient(120deg,#06b6d4,#3b82f6,#8b5cf6,#06b6d4)]
      bg-[length:250%_250%]
      opacity-0
      blur-md
      transition-opacity
      duration-500
      group-hover:opacity-100
      animate-[gradient_5s_linear_infinite]
    "
  />

  {/* Shine */}
  <span
    className="
      absolute
      inset-0
      -translate-x-full
      bg-gradient-to-r
      from-transparent
      via-white/20
      to-transparent
      group-hover:translate-x-full
      transition-transform
      duration-700
    "
  />

  <Mail
    size={18}
    className="
      transition-all
      duration-300
      group-hover:translate-y-[-2px]
      group-hover:scale-125
      group-hover:rotate-6
    "
  />

  Contact
</Link>
          </div>

<div className="mt-6 flex flex-wrap justify-center gap-5 lg:mt-8 lg:justify-start">

  <Link
    href="https://github.com/KhawarGit"
    target="_blank"
    className="group relative"
  >
    <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-60" />

    <div className="
      relative
      flex h-14 w-14 items-center justify-center
      rounded-2xl
      border border-white/10
      bg-white/5
      backdrop-blur-xl
      transition-all duration-500
      group-hover:-translate-y-2
      group-hover:rotate-6
      group-hover:border-cyan-400/60
      group-hover:shadow-[0_0_30px_rgba(34,211,238,.35)]
    ">
      <FaGithub className="text-2xl transition-all duration-500 group-hover:scale-125 group-hover:text-cyan-400" />
    </div>
  </Link>

  <Link
    href="https://www.linkedin.com/in/khawar-khan/"
    target="_blank"
    className="group relative"
  >
    <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-60" />

    <div className="
      relative
      flex h-14 w-14 items-center justify-center
      rounded-2xl
      border border-white/10
      bg-white/5
      backdrop-blur-xl
      transition-all duration-500
      group-hover:-translate-y-2
      group-hover:-rotate-6
      group-hover:border-blue-400/60
      group-hover:shadow-[0_0_30px_rgba(59,130,246,.35)]
    ">
      <FaLinkedin className="text-2xl transition-all duration-500 group-hover:scale-125 group-hover:text-blue-400" />
    </div>
  </Link>

  <Link
    href="mailto:khawarkhanibnmuhammadasghar@gmail.com"
    className="group relative"
  >
    <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-400 to-cyan-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-60" />

    <div className="
      relative
      flex h-14 w-14 items-center justify-center
      rounded-2xl
      border border-white/10
      bg-white/5
      backdrop-blur-xl
      transition-all duration-500
      group-hover:-translate-y-2
      group-hover:border-violet-400/60
      group-hover:shadow-[0_0_30px_rgba(139,92,246,.35)]
    ">
      <Mail
        size={24}
        className="transition-all duration-500 group-hover:scale-125 group-hover:text-violet-400"
      />
    </div>
  </Link>

  <Link
    href="https://leetcode.com/"
    target="_blank"
    className="group relative"
  >
    <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-60" />

    <div className="
      relative
      flex h-14 w-14 items-center justify-center
      rounded-2xl
      border border-white/10
      bg-white/5
      backdrop-blur-xl
      transition-all duration-500
      group-hover:-translate-y-2
      group-hover:rotate-6
      group-hover:border-indigo-400/60
      group-hover:shadow-[0_0_30px_rgba(99,102,241,.35)]
    ">
      <SiLeetcode className="text-2xl transition-all duration-500 group-hover:scale-125 group-hover:text-indigo-400" />
    </div>
  </Link>

</div>
        </div>
        

        {/* RIGHT */}
        <div className="pointer-events-auto order-1 flex justify-center lg:order-2">
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

    {/* Scroll down indicator */}
    <div className="pointer-events-none absolute inset-x-0 bottom-24 z-[8] hidden justify-center sm:flex lg:bottom-20">
      <Link
        href="#about"
        aria-label="Scroll down for more information"
        className="group pointer-events-auto flex flex-col items-center gap-2 text-neutral-500 transition-colors hover:text-blue-500 dark:text-neutral-400 dark:hover:text-cyan-400"
      >
        <span className="text-xs font-medium uppercase tracking-widest">
          Scroll Down
        </span>
        <span className="flex h-9 w-6 items-start justify-center rounded-full border border-neutral-400/60 p-1.5 transition-colors group-hover:border-blue-400 dark:border-neutral-600/60">
          <span className="h-2 w-1 animate-bounce rounded-full bg-current" />
        </span>
      </Link>
    </div>

    {/* Logo Loop Bottom */}
<div className="absolute bottom-0 left-0 right-0 z-[8] pb-8">
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
