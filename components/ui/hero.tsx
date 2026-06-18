// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight, Download, Mail } from "lucide-react";

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 -z-10 grid-background" />

//       <div className="absolute left-1/2 top-20 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />

//       <div className="container-width section-padding flex min-h-screen flex-col items-center justify-center pt-24 text-center">
//         {/* Profile Image */}
//         <div className="mb-8">
//           <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-neutral-300 shadow-xl dark:border-neutral-700">
//             <Image
//               src="/images/profile.jpeg"
//               alt="Khawar Khan"
//               fill
//               priority
//               className="object-cover"
//             />
//           </div>
//         </div>

//         {/* Badge */}
//         <span className="mb-6 rounded-full border border-neutral-300 px-4 py-1 text-sm backdrop-blur-sm dark:border-neutral-700">
//           👋 Welcome to my portfolio
//         </span>

//         {/* Heading */}
//         <h1 className="max-w-5xl text-5xl font-extrabold tracking-tight md:text-7xl">
//           Hi, I'm{" "}
//           <span className="text-gradient">
//             Khawar Khan
//           </span>
//         </h1>

//         {/* Description */}
//         <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600 dark:text-neutral-400 md:text-xl">
//           Software Engineer specializing in modern web development,
//           automation, and scalable applications with React, Next.js,
//           TypeScript, Node.js, and cloud-native technologies.
//         </p>

//         {/* CTA Buttons */}
//         <div className="mt-10 flex flex-wrap justify-center gap-4">
//           <Link
//             href="#projects"
//             className="inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3 font-medium text-white transition-all hover:scale-105 dark:bg-white dark:text-black"
//           >
//             View Projects
//             <ArrowRight size={18} />
//           </Link>

//           <Link
//             href="/resume.pdf"
//             target="_blank"
//             className="inline-flex items-center gap-2 rounded-xl border px-6 py-3 font-medium transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900"
//           >
//             <Download size={18} />
//             Resume
//           </Link>

//           <Link
//             href="#contact"
//             className="inline-flex items-center gap-2 rounded-xl border px-6 py-3 font-medium transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900"
//           >
//             <Mail size={18} />
//             Contact Me
//           </Link>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="mt-16 animate-bounce text-sm text-neutral-500">
//           ↓ Scroll to explore
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import Image from "next/image";
// import Link from "next/link";

// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { SiLeetcode } from "react-icons/si";

// import { ArrowRight, Download, Mail } from "lucide-react";

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 -z-10 grid-background" />

//       {/* Gradient Blobs */}
//       <div className="absolute left-10 top-24 -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
//       <div className="absolute right-10 bottom-20 -z-10 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

//       {/* <div className="container-width flex min-h-screen items-center py-20">
//         <div className="grid w-full items-center gap-16 lg:grid-cols-2"> */}
//         <div className="container-width flex min-h-screen items-start py-24">
//             <div className="grid w-full items-center gap-16 lg:grid-cols-2">
//           {/* Left Side */}
//           <div className="order-2 text-center lg:order-1 lg:text-left">
            
//             {/* Badge */}
//             <div className="mb-6 inline-flex rounded-full border border-neutral-300 bg-white/50 px-4 py-2 text-sm backdrop-blur dark:border-neutral-700 dark:bg-neutral-900/50">
//               🚀 Open to exciting opportunities
//             </div>

//             {/* Name */}
//             <h1 className="text-5xl font-black leading-tight md:text-6xl lg:text-7xl">
//               Hi, I'm <span className="text-gradient">Khawar Khan</span>
//             </h1>

//             {/* Role */}
//             <p className="mt-6 text-xl font-medium text-neutral-700 dark:text-neutral-300">
//               Full Stack Developer • Automation Engineer • Problem Solver
//             </p>

//             {/* Description */}
//             <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-400">
//               I build scalable web applications, automation tools, and modern
//               digital experiences using React, Next.js, TypeScript, Node.js,
//               Python, and cloud technologies.
//             </p>

//             {/* Tech Stack */}
//             <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
//               {["Next.js", "React", "TypeScript", "Node.js", "Python", "Docker"].map(
//                 (tech) => (
//                   <span
//                     key={tech}
//                     className="rounded-full border border-neutral-300 px-4 py-2 text-sm dark:border-neutral-700"
//                   >
//                     {tech}
//                   </span>
//                 )
//               )}
//             </div>

//             {/* Buttons */}
//             <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
//               <Link
//                 href="#projects"
//                 className="inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3 font-medium text-white transition hover:scale-105 dark:bg-white dark:text-black"
//               >
//                 View Projects
//                 <ArrowRight size={18} />
//               </Link>

//               <Link
//                 href="/resume.pdf"
//                 target="_blank"
//                 className="inline-flex items-center gap-2 rounded-xl border px-6 py-3 font-medium transition hover:bg-neutral-100 dark:hover:bg-neutral-900"
//               >
//                 <Download size={18} />
//                 Resume
//               </Link>

//               <Link
//                 href="#contact"
//                 className="inline-flex items-center gap-2 rounded-xl border px-6 py-3 font-medium transition hover:bg-neutral-100 dark:hover:bg-neutral-900"
//               >
//                 <Mail size={18} />
//                 Contact
//               </Link>
//             </div>

//             {/* Social Links */}
//             <div className="mt-8 flex flex-wrap justify-center gap-5 lg:justify-start text-2xl">

//               <Link
//                 href="https://github.com/KhawarGit"
//                 target="_blank"
//                 className="hover:scale-110 transition"
//               >
//                 <FaGithub />
//               </Link>

//               <Link
//                 href="https://www.linkedin.com/in/khawar-khan/"
//                 target="_blank"
//                 className="hover:scale-110 transition"
//               >
//                 <FaLinkedin />
//               </Link>

//               <Link
//                 href="mailto:khawarkhanibnmuhammadasghar@gmail.com"
//                 className="hover:scale-110 transition"
//               >
//                 <Mail size={22} />
//               </Link>

//               <Link
//                 href="https://leetcode.com/"
//                 target="_blank"
//                 className="hover:scale-110 transition"
//               >
//                 <SiLeetcode />
//               </Link>

//             </div>
//           </div>

//           {/* Right Side */}
//           <div className="order-1 flex justify-center lg:order-2">
//             <div className="relative">
//               <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-cyan-500/20 blur-3xl" />

//               <div className="relative rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-500 p-1 shadow-2xl">
//                 <div className="relative h-72 w-72 overflow-hidden rounded-full bg-white md:h-80 md:w-80 dark:bg-neutral-900">
//                   <Image
//                     src="/images/profile.jpeg"
//                     alt="Khawar Khan"
//                     fill
//                     priority
//                     className="object-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { SiLeetcode } from "react-icons/si";

// import { ArrowRight, Download, Mail } from "lucide-react";

// export default function Hero() {
//   const roles = [
//     "Software Engineer",
//     "Web Developer",
//     "Automation Engineer",
//     "Full Stack Developer",
//   ];

//   const [roleIndex, setRoleIndex] = useState(0);
//   const [displayText, setDisplayText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const currentRole = roles[roleIndex];

//     const timer = setTimeout(
//       () => {
//         if (!isDeleting) {
//           const nextText = currentRole.slice(0, displayText.length + 1);
//           setDisplayText(nextText);

//           if (nextText === currentRole) {
//             setTimeout(() => setIsDeleting(true), 1500);
//           }
//         } else {
//           const nextText = currentRole.slice(0, displayText.length - 1);
//           setDisplayText(nextText);

//           if (nextText === "") {
//             setIsDeleting(false);
//             setRoleIndex((prev) => (prev + 1) % roles.length);
//           }
//         }
//       },
//       isDeleting ? 45 : 90
//     );

//     return () => clearTimeout(timer);
//   }, [displayText, isDeleting, roleIndex]);

//   return (
//     <section className="relative overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 -z-10 grid-background" />

//       {/* Gradient Blobs */}
//       <div className="absolute left-10 top-24 -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
//       <div className="absolute right-10 bottom-20 -z-10 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

//       <div className="container-width flex min-h-screen items-start py-24">
//         <div className="grid w-full items-center gap-16 lg:grid-cols-2">
//           {/* Left Side */}
//           <div className="order-2 text-center lg:order-1 lg:text-left">
//             {/* Badge */}
//             <div className="mb-6 inline-flex rounded-full border border-neutral-300 bg-white/50 px-4 py-2 text-sm backdrop-blur dark:border-neutral-700 dark:bg-neutral-900/50">
//               🚀 Open to exciting opportunities
//             </div>

//             {/* Name */}
//             <h1 className="text-5xl font-black leading-tight md:text-6xl lg:text-7xl">
//               Hi, I'm <span className="text-gradient">Khawar Khan</span>
//             </h1>

//             {/* Animated Role */}
//             <div className="mt-6 flex items-center justify-center lg:justify-start">
//               <span className="min-h-[32px] text-xl font-semibold text-neutral-700 dark:text-neutral-300">
//                 {displayText}
//               </span>

//               <span className="ml-1 h-7 w-[3px] animate-pulse rounded-full bg-gradient-to-b from-blue-500 via-violet-500 to-cyan-500" />
//             </div>

//             {/* Description */}
//             <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-400">
//               I build scalable web applications, automation tools, and modern
//               digital experiences using React, Next.js, TypeScript, Node.js,
//               Python, and cloud technologies.
//             </p>

//             {/* Tech Stack */}
//             <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
//               {[
//                 "Next.js",
//                 "React",
//                 "TypeScript",
//                 "Node.js",
//                 "Python",
//                 "Docker",
//               ].map((tech) => (
//                 <span
//                   key={tech}
//                   className="rounded-full border border-neutral-300 px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>

//             {/* Buttons */}
//             <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
//               <Link
//                 href="#projects"
//                 className="inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg dark:bg-white dark:text-black"
//               >
//                 View Projects
//                 <ArrowRight size={18} />
//               </Link>

//               <Link
//                 href="/resume.pdf"
//                 target="_blank"
//                 className="inline-flex items-center gap-2 rounded-xl border px-6 py-3 font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-100 dark:hover:bg-neutral-900"
//               >
//                 <Download size={18} />
//                 Resume
//               </Link>

//               <Link
//                 href="#contact"
//                 className="inline-flex items-center gap-2 rounded-xl border px-6 py-3 font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-100 dark:hover:bg-neutral-900"
//               >
//                 <Mail size={18} />
//                 Contact
//               </Link>
//             </div>

//             {/* Social Links */}
//             <div className="mt-8 flex flex-wrap justify-center gap-5 text-2xl lg:justify-start">
//               <Link
//                 href="https://github.com/KhawarGit"
//                 target="_blank"
//                 className="transition-all duration-300 hover:-translate-y-1 hover:scale-110"
//               >
//                 <FaGithub />
//               </Link>

//               <Link
//                 href="https://www.linkedin.com/in/khawar-khan/"
//                 target="_blank"
//                 className="transition-all duration-300 hover:-translate-y-1 hover:scale-110"
//               >
//                 <FaLinkedin />
//               </Link>

//               <Link
//                 href="mailto:khawarkhanibnmuhammadasghar@gmail.com"
//                 className="transition-all duration-300 hover:-translate-y-1 hover:scale-110"
//               >
//                 <Mail size={22} />
//               </Link>

//               <Link
//                 href="https://leetcode.com/"
//                 target="_blank"
//                 className="transition-all duration-300 hover:-translate-y-1 hover:scale-110"
//               >
//                 <SiLeetcode />
//               </Link>
//             </div>
//           </div>

//           {/* Right Side */}
//           <div className="order-1 flex justify-center lg:order-2">
//             <div className="relative">
//               <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-cyan-500/20 blur-3xl" />

//               <div className="relative rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-500 p-1 shadow-2xl transition-transform duration-500 hover:scale-105">
//                 <div className="relative h-72 w-72 overflow-hidden rounded-full bg-white md:h-80 md:w-80 dark:bg-neutral-900">
//                   <Image
//                     src="/images/profile.jpeg"
//                     alt="Khawar Khan"
//                     fill
//                     priority
//                     className="object-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import { ArrowRight, Download, Mail } from "lucide-react";

export default function Hero() {
  const roles = [
    "Software Engineer",
    "Web Developer",
    "Automation Engineer",
    "Full Stack Developer",
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
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 grid-background" />

      {/* Gradient Blobs */}
      <div className="absolute left-10 top-24 -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute right-10 bottom-20 -z-10 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="container-width flex min-h-screen items-start py-24">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          
          {/* LEFT */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            
            {/* Badge */}
            <div className="mb-6 inline-flex rounded-full border border-neutral-300 bg-white/50 px-4 py-2 text-sm backdrop-blur dark:border-neutral-700 dark:bg-neutral-900/50">
              🚀 Open to exciting opportunities
            </div>

            {/* Name */}
            <h1 className="text-5xl font-black leading-tight md:text-6xl lg:text-7xl">
              Hi, I'm <span className="text-gradient">Khawar Khan</span>
            </h1>

            {/* Animated Role (IMPROVED) */}
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

              {/* Cursor */}
              <span className="ml-2 h-6 w-[3px] animate-pulse rounded-full bg-gradient-to-b from-blue-500 via-violet-500 to-cyan-500" />
            </div>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-400">
              I build scalable web applications, automation tools, and modern
              digital experiences using React, Next.js, TypeScript, Node.js,
              Python, and cloud technologies.
            </p>

            {/* Tech Stack */}
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

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg dark:bg-white dark:text-black"
              >
                View Projects
                <ArrowRight size={18} />
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

            {/* Social Links */}
            <div className="mt-8 flex flex-wrap justify-center gap-5 text-2xl lg:justify-start">
              <Link href="https://github.com/KhawarGit" target="_blank"
                className="transition hover:-translate-y-1 hover:scale-110">
                <FaGithub />
              </Link>

              <Link href="https://www.linkedin.com/in/khawar-khan/" target="_blank"
                className="transition hover:-translate-y-1 hover:scale-110">
                <FaLinkedin />
              </Link>

              <Link href="mailto:khawarkhanibnmuhammadasghar@gmail.com"
                className="transition hover:-translate-y-1 hover:scale-110">
                <Mail size={22} />
              </Link>

              <Link href="https://leetcode.com/" target="_blank"
                className="transition hover:-translate-y-1 hover:scale-110">
                <SiLeetcode />
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-cyan-500/20 blur-3xl" />

              <div className="relative rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-500 p-1 shadow-2xl transition-transform duration-500 hover:scale-105">
                <div className="relative h-72 w-72 overflow-hidden rounded-full bg-white md:h-80 md:w-80 dark:bg-neutral-900">
                  <Image
                    src="/images/profile.jpeg"
                    alt="Khawar Khan"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}