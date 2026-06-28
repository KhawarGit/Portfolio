// import Link from "next/link";
// import { ExternalLink } from "lucide-react";
// import { FaGithub } from "react-icons/fa";

// export default function Projects() {
//   const projects = [
//     {
//       title: "Portfolio Website",
//       description:
//         "A modern portfolio built with Next.js, Tailwind CSS, and animations.",
//       tech: ["Next.js", "Tailwind", "TypeScript"],
//       github: "https://github.com/your-username/portfolio",
//       live: "https://your-portfolio.com",
//     },
//     {
//       title: "Automation Tool",
//       description:
//         "A backend automation system for handling repetitive workflows efficiently.",
//       tech: ["Node.js", "Express", "MongoDB"],
//       github: "https://github.com/your-username/automation",
//       live: "#",
//     },
//     {
//       title: "E-commerce App",
//       description:
//         "Full-stack e-commerce platform with authentication and payment integration.",
//       tech: ["Next.js", "PostgreSQL", "Stripe"],
//       github: "https://github.com/your-username/ecommerce",
//       live: "#",
//     },
//   ];

//   return (
//     <section id="projects" className="section-padding">
//       <div className="container-width">

//         {/* Header */}
//         <div className="mb-12 text-center">
//           <h2 className="text-3xl font-bold md:text-4xl">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
//             A selection of projects showcasing my development skills and problem-solving ability.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {projects.map((project) => (
//             <div
//               key={project.title}
//               className="group rounded-2xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-2 dark:border-neutral-800 dark:bg-neutral-900"
//             >
//               {/* Title */}
//               <h3 className="text-xl font-semibold group-hover:text-black dark:group-hover:text-white">
//                 {project.title}
//               </h3>

//               {/* Description */}
//               <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
//                 {project.description}
//               </p>

//               {/* Tech Stack */}
//               <div className="mt-4 flex flex-wrap gap-2">
//                 {project.tech.map((t) => (
//                   <span
//                     key={t}
//                     className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600 dark:border-neutral-700 dark:text-neutral-300"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>

//               {/* Links */}
//               <div className="mt-6 flex items-center gap-4">
//                 <Link
//                   href={project.github}
//                   target="_blank"
//                   className="flex items-center gap-2 text-sm text-neutral-600 transition hover:text-black dark:text-neutral-400 dark:hover:text-white"
//                 >
//                   <FaGithub size={16} />
//                   Code
//                 </Link>

//                 <Link
//                   href={project.live}
//                   target="_blank"
//                   className="flex items-center gap-2 text-sm text-neutral-600 transition hover:text-black dark:text-neutral-400 dark:hover:text-white"
//                 >
//                   <ExternalLink size={16} />
//                   Live
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// import Link from "next/link";
// import Image from "next/image";
// import { ExternalLink } from "lucide-react";
// import { FaGithub } from "react-icons/fa";
// import HoverCard from "@/components/ui/hover-card";

// export default function Projects() {
//   const projects = [
//     {
//       title: "Portfolio Website",
//       description:
//         "A modern portfolio built with Next.js, Tailwind CSS, and animations.",
//       tech: ["Next.js", "Tailwind", "TypeScript"],
//       github: "https://github.com/your-username/portfolio",
//       live: "https://your-portfolio.com",
//       image: "/images/projects/portfolio.png",
//     },
//     {
//       title: "Automation Tool",
//       description:
//         "A backend automation system for handling repetitive workflows efficiently.",
//       tech: ["Node.js", "Express", "MongoDB"],
//       github: "https://github.com/your-username/automation",
//       live: "#",
//       image: "/images/projects/automation.png",
//     },
//     {
//       title: "E-commerce App",
//       description:
//         "Full-stack e-commerce platform with authentication and payment integration.",
//       tech: ["Next.js", "PostgreSQL", "Stripe"],
//       github: "https://github.com/your-username/ecommerce",
//       live: "#",
//       image: "/images/projects/ecommerce.png",
//     },
//   ];

//   return (
//     <section id="projects" className="section-padding">
//       <div className="container-width">

//         {/* Header */}
//         <div className="mb-12 text-center">
//           <h2 className="text-3xl font-bold md:text-4xl">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
//             A selection of projects showcasing my development skills and problem-solving ability.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {projects.map((project) => (
//             <div
//               key={project.title}
//               className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-2 dark:border-neutral-800 dark:bg-neutral-900"
//             >
              
//               {/* Image */}
//               <div className="relative h-48 w-full overflow-hidden">
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-110"
//                 />

//                 {/* soft overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
//               </div>

//               {/* Content */}
//               <div className="p-6">

//                 {/* Title */}
//                 <h3 className="text-xl font-semibold">
//                   {project.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
//                   {project.description}
//                 </p>

//                 {/* Tech */}
//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {project.tech.map((t) => (
//                     <span
//                       key={t}
//                       className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600 dark:border-neutral-700 dark:text-neutral-300"
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Links */}
//                 <div className="mt-6 flex items-center justify-between">
//                   <Link
//                     href={project.github}
//                     target="_blank"
//                     className="flex items-center gap-2 text-sm text-neutral-600 transition hover:text-black dark:text-neutral-400 dark:hover:text-white"
//                   >
//                     <FaGithub size={16} />
//                     Code
//                   </Link>

//                   <Link
//                     href={project.live}
//                     target="_blank"
//                     className="flex items-center gap-2 text-sm text-neutral-600 transition hover:text-black dark:text-neutral-400 dark:hover:text-white"
//                   >
//                     Live
//                     <ExternalLink size={16} />
//                   </Link>
//                 </div>

//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// import Link from "next/link";
// import Image from "next/image";
// import { ExternalLink } from "lucide-react";
// import { FaGithub } from "react-icons/fa";
// import HoverCard from "@/components/ui/hover-card";

// export default function Projects() {
//   const projects = [
//     {
//       title: "Portfolio Website",
//       description:
//         "A modern portfolio built with Next.js, Tailwind CSS, and animations.",
//       tech: ["Next.js", "Tailwind", "TypeScript"],
//       github: "https://github.com/your-username/portfolio",
//       live: "https://your-portfolio.com",
//       image: "/images/projects/portfolio.png",
//     },
//     {
//       title: "Automation Tool",
//       description:
//         "A backend automation system for handling repetitive workflows efficiently.",
//       tech: ["Node.js", "Express", "MongoDB"],
//       github: "https://github.com/your-username/automation",
//       live: "#",
//       image: "/images/projects/automation.png",
//     },
//     {
//       title: "E-commerce App",
//       description:
//         "Full-stack e-commerce platform with authentication and payment integration.",
//       tech: ["Next.js", "PostgreSQL", "Stripe"],
//       github: "https://github.com/your-username/ecommerce",
//       live: "#",
//       image: "/images/projects/ecommerce.png",
//     },
//   ];

//   return (
//     <section id="projects" className="section-padding">
//       <div className="container-width">

//         {/* Header */}
//         <div className="mb-12 text-center">
//           <h2 className="text-3xl font-bold md:text-4xl">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
//             A selection of projects showcasing my development skills and problem-solving ability.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

//           {projects.map((project) => (
//             <HoverCard key={project.title}>

//               <div className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">

//                 {/* Image */}
//                 <div className="relative h-48 w-full overflow-hidden">
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     fill
//                     className="object-cover transition-transform duration-500 group-hover:scale-110"
//                   />

//                   {/* overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">

//                   {/* Title */}
//                   <h3 className="text-xl font-semibold group-hover:text-blue-600 transition">
//                     {project.title}
//                   </h3>

//                   {/* Description */}
//                   <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
//                     {project.description}
//                   </p>

//                   {/* Tech */}
//                   <div className="mt-4 flex flex-wrap gap-2">
//                     {project.tech.map((t) => (
//                       <span
//                         key={t}
//                         className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600 dark:border-neutral-700 dark:text-neutral-300"
//                       >
//                         {t}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Links */}
//                   <div className="mt-6 flex items-center justify-between">
//                     <Link
//                       href={project.github}
//                       target="_blank"
//                       className="flex items-center gap-2 text-sm text-neutral-600 transition hover:text-black dark:text-neutral-400 dark:hover:text-white"
//                     >
//                       <FaGithub size={16} />
//                       Code
//                     </Link>

//                     <Link
//                       href={project.live}
//                       target="_blank"
//                       className="flex items-center gap-2 text-sm text-neutral-600 transition hover:text-black dark:text-neutral-400 dark:hover:text-white"
//                     >
//                       Live
//                       <ExternalLink size={16} />
//                     </Link>
//                   </div>

//                 </div>
//               </div>

//             </HoverCard>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import HoverCard from "@/components/ui/hover-card";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio built with Next.js, Tailwind CSS, Framer Motion and TypeScript.",
      tech: ["Next.js", "Tailwind", "TypeScript"],
      github: "https://github.com/your-username/portfolio",
      live: "https://your-portfolio.com",
      image: "/images/projects/portfolio.png",
    },
    {
      title: "Automation Tool",
      description:
        "Backend automation system for repetitive workflows and engineering processes.",
      tech: ["Node.js", "Express", "MongoDB"],
      github: "https://github.com/your-username/automation",
      live: "#",
      image: "/images/projects/automation.png",
    },
    {
      title: "E-commerce Platform",
      description:
        "Full-stack ecommerce platform with authentication and Stripe payments.",
      tech: ["Next.js", "PostgreSQL", "Stripe"],
      github: "https://github.com/your-username/ecommerce",
      live: "#",
      image: "/images/projects/ecommerce.png",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-width">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-neutral-500">
            A collection of projects demonstrating full-stack development,
            automation and UI engineering.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <HoverCard key={project.title}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 20,
                }}
                className="
                  group
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  transition-all
                  duration-500
                "
              >
                {/* IMAGE */}
                <div className="relative h-56 overflow-hidden">
                  <motion.div
                    whileHover={{
                      scale: 1.06,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="h-full w-full"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="space-y-5 p-6">
                  <div>
                    <h3 className="text-xl font-semibold transition group-hover:text-cyan-400">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-neutral-400">
                      {project.description}
                    </p>
                  </div>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="
                          rounded-full
                          border
                          border-white/10
                          bg-white/5
                          px-3
                          py-1
                          text-xs
                          text-neutral-300
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-3 pt-2">
                    <Link
                      href={project.live}
                      target="_blank"
                      className="
                        flex-1
                        rounded-full
                        border
                        border-cyan-500/30
                        bg-cyan-500/10
                        px-4
                        py-2.5
                        text-sm
                        font-medium
                        text-cyan-300
                        transition
                        hover:bg-cyan-500/20
                      "
                    >
                      <span className="flex items-center justify-center gap-2">
                        Live
                        <ExternalLink size={16} />
                      </span>
                    </Link>

                    <Link
                      href={project.github}
                      target="_blank"
                      className="
                        flex-1
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        px-4
                        py-2.5
                        text-sm
                        font-medium
                        text-neutral-200
                        transition
                        hover:bg-white/10
                      "
                    >
                      <span className="flex items-center justify-center gap-2">
                        <FaGithub size={16} />
                        GitHub
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                    bg-gradient-to-br
                    from-cyan-500/5
                    via-violet-500/5
                    to-blue-500/5
                  "
                />
              </motion.div>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
}