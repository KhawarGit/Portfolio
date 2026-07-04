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


// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { ExternalLink } from "lucide-react";
// import { FaGithub } from "react-icons/fa";
// import HoverCard from "@/components/ui/hover-card";

// export default function Projects() {
//   const projects = [
//     {
//       title: "Portfolio Website",
//       description:
//         "A modern portfolio built with Next.js, Tailwind CSS, Framer Motion and TypeScript.",
//       tech: ["Next.js", "Tailwind", "TypeScript"],
//       github: "https://github.com/your-username/portfolio",
//       live: "https://your-portfolio.com",
//       image: "/images/projects/portfolio.png",
//     },
//     {
//       title: "Automation Tool",
//       description:
//         "Backend automation system for repetitive workflows and engineering processes.",
//       tech: ["Node.js", "Express", "MongoDB"],
//       github: "https://github.com/your-username/automation",
//       live: "#",
//       image: "/images/projects/automation.png",
//     },
//     {
//       title: "E-commerce Platform",
//       description:
//         "Full-stack ecommerce platform with authentication and Stripe payments.",
//       tech: ["Next.js", "PostgreSQL", "Stripe"],
//       github: "https://github.com/your-username/ecommerce",
//       live: "#",
//       image: "/images/projects/ecommerce.png",
//     },
//   ];

//   return (
//     <section id="projects" className="section-padding">
//       <div className="container-width">
//         <div className="mb-14 text-center">
//           <h2 className="text-4xl font-bold">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-neutral-500">
//             A collection of projects demonstrating full-stack development,
//             automation and UI engineering.
//           </p>
//         </div>

//         <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start">
//           {projects.map((project) => (
//             <HoverCard key={project.title}>
//               <motion.div
//                 whileHover={{ y: -8 }}
//                 transition={{
//                   type: "spring",
//                   stiffness: 250,
//                   damping: 20,
//                 }}
//                 className="
//                   group
//                   overflow-hidden
//                   rounded-3xl
//                   border
//                   border-white/10
//                   bg-white/5
//                   backdrop-blur-xl
//                   transition-all
//                   duration-500
//                 "
//               >
//                 {/* IMAGE */}
//                 <div className="relative h-56 overflow-hidden">
//                   <motion.div
//                     whileHover={{
//                       scale: 1.06,
//                     }}
//                     transition={{
//                       duration: 0.5,
//                     }}
//                     className="h-full w-full"
//                   >
//                     <Image
//                       src={project.image}
//                       alt={project.title}
//                       fill
//                       className="object-cover"
//                     />
//                   </motion.div>

//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
//                 </div>

//                 {/* CONTENT */}
//                 <div className="space-y-5 p-6">
//                   <div>
//                     <h3 className="text-xl font-semibold transition group-hover:text-cyan-400">
//                       {project.title}
//                     </h3>

//                     <p className="mt-3 text-sm leading-6 text-neutral-400">
//                       {project.description}
//                     </p>
//                   </div>

//                   {/* TECH STACK */}
//                   <div className="flex flex-wrap gap-2">
//                     {project.tech.map((tech) => (
//                       <span
//                         key={tech}
//                         className="
//                           rounded-full
//                           border
//                           border-white/10
//                           bg-white/5
//                           px-3
//                           py-1
//                           text-xs
//                           text-neutral-300
//                         "
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>

//                   {/* BUTTONS */}
//                   <div className="flex gap-3 pt-2">
//                     <Link
//                       href={project.live}
//                       target="_blank"
//                       className="
//                         flex-1
//                         rounded-full
//                         border
//                         border-cyan-500/30
//                         bg-cyan-500/10
//                         px-4
//                         py-2.5
//                         text-sm
//                         font-medium
//                         text-cyan-300
//                         transition
//                         hover:bg-cyan-500/20
//                       "
//                     >
//                       <span className="flex items-center justify-center gap-2">
//                         Live
//                         <ExternalLink size={16} />
//                       </span>
//                     </Link>

//                     <Link
//                       href={project.github}
//                       target="_blank"
//                       className="
//                         flex-1
//                         rounded-full
//                         border
//                         border-white/10
//                         bg-white/5
//                         px-4
//                         py-2.5
//                         text-sm
//                         font-medium
//                         text-neutral-200
//                         transition
//                         hover:bg-white/10
//                       "
//                     >
//                       <span className="flex items-center justify-center gap-2">
//                         <FaGithub size={16} />
//                         GitHub
//                       </span>
//                     </Link>
//                   </div>
//                 </div>

//                 {/* Glow */}
//                 <div
//                   className="
//                     pointer-events-none
//                     absolute
//                     inset-0
//                     opacity-0
//                     transition-opacity
//                     duration-500
//                     group-hover:opacity-100
//                     bg-gradient-to-br
//                     from-cyan-500/5
//                     via-violet-500/5
//                     to-blue-500/5
//                   "
//                 />
//               </motion.div>
//             </HoverCard>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }






// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { ExternalLink, Lock, Check } from "lucide-react";
// import { FaGithub } from "react-icons/fa";
// import HoverCard from "@/components/ui/hover-card";

// export default function Projects() {
//   const projects = [
//     {
//       title: "Portfolio Website",
//       description:
//         "A modern portfolio built with Next.js, Tailwind CSS, Framer Motion and TypeScript.",
//       tech: ["Next.js", "Tailwind", "TypeScript"],
//       highlights: ["Framer Motion", "Responsive Design", "SEO Optimized"],
//       github: "https://github.com/your-username/portfolio",
//       live: "https://your-portfolio.com",
//       image: "/images/projects/portfolio.png",
//       status: "Live", // Live, Open Source, Prototype, Private
//     },
//     {
//       title: "Automation Tool",
//       description:
//         "Backend automation system for repetitive workflows and engineering processes.",
//       tech: ["Node.js", "Express", "MongoDB"],
//       highlights: ["CRON Jobs", "REST APIs", "Error Logging"],
//       github: "https://github.com/your-username/automation",
//       live: null,
//       image: "/images/projects/automation.png",
//       status: "Open Source",
//     },
//     {
//       title: "E-commerce Platform",
//       description:
//         "Full-stack ecommerce platform with authentication and Stripe payments.",
//       tech: ["Next.js", "PostgreSQL", "Stripe"],
//       highlights: ["Authentication", "Payments", "Database Optimization"],
//       github: "https://github.com/your-username/ecommerce",
//       live: null,
//       image: "/images/projects/ecommerce.png",
//       status: "Private",
//     },
//   ];

//   // Group projects as suggested in Option 2
//   const productionProjects = projects.filter(p => p.status === "Live" || p.status === "Private");
//   const openSourceProjects = projects.filter(p => p.status === "Open Source" || p.status === "Prototype");

//   return (
//     <section id="projects" className="section-padding overflow-visible py-24">
//       <div className="container-width px-4">
//         {/* HEADER */}
//         <div className="mb-16 text-center">
//           <h2 className="text-4xl font-bold">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-neutral-500 dark:text-neutral-400">
//             A collection of projects demonstrating full-stack development,
//             automation and UI engineering.
//           </p>
//         </div>

//         {/* GROUP 1: PRODUCTION PROJECTS */}
//         {productionProjects.length > 0 && (
//           <div className="mb-20">
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Production Projects
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start overflow-visible">
//               {productionProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </div>
//           </div>
//         )}

//         {/* GROUP 2: OPEN SOURCE & EXPERIMENTS */}
//         {openSourceProjects.length > 0 && (
//           <div>
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Open Source & Experiments
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start overflow-visible">
//               {openSourceProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// /* ================= PROJECT CARD COMPONENT ================= */
// function ProjectCard({ project }: { project: any }) {
//   // Helper to safely render status badges
//   const renderStatusBadge = (status: string) => {
//     switch (status) {
//       case "Live":
//         return (
//           <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 dark:bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
//             <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
//             Live
//           </span>
//         );
//       case "Open Source":
//         return (
//           <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 dark:bg-blue-500/10 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:text-blue-400 border border-blue-500/20">
//             <span className="text-[10px] font-bold">&lt;&gt;</span>
//             Open Source
//           </span>
//         );
//       case "Prototype":
//         return (
//           <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 dark:bg-amber-500/10 px-2.5 py-1 text-xs font-semibold text-amber-700 dark:text-amber-400 border border-amber-500/20">
//             Prototype
//           </span>
//         );
//       case "Private":
//         return (
//           <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 px-2.5 py-1 text-xs font-semibold text-neutral-600 dark:text-neutral-400 border border-neutral-300 dark:border-neutral-700">
//             <Lock size={10} />
//             Private
//           </span>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <HoverCard>
//       <motion.div
//         whileHover={{ y: -10 }}
//         transition={{
//           type: "spring",
//           stiffness: 250,
//           damping: 20,
//         }}
//         className="group relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/95 shadow-lg shadow-neutral-200/60 dark:shadow-black/30 transition-all duration-500 p-6 flex flex-col justify-between min-h-[520px]"
//       >
//         <div>
//           {/* IMAGE & BADGE CONTAINER */}
//           <div className="relative h-48 overflow-hidden rounded-2xl mb-5 border border-neutral-100 dark:border-neutral-800">
//             <motion.div
//               whileHover={{ scale: 1.06 }}
//               transition={{ duration: 0.5 }}
//               className="h-full w-full"
//             >
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 fill
//                 className="object-cover"
//               />
//             </motion.div>
//             <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            
//             {/* Dynamic Badge Positioned Over Image */}
//             <div className="absolute top-3 right-3 z-10">
//               {renderStatusBadge(project.status)}
//             </div>
//           </div>

//           {/* TITLE & DESCRIPTION */}
//           <div>
//             <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white transition group-hover:text-violet-500">
//               {project.title}
//             </h3>

//             <p className="mt-3 text-[14px] leading-6 text-neutral-600 dark:text-neutral-400 line-clamp-3">
//               {project.description}
//             </p>
//           </div>

//           <div className="my-4 border-t border-neutral-200 dark:border-neutral-800" />

//           {/* HIGHLIGHTS ROW (CLIENT DRIVEN FEATURES) */}
//           {project.highlights && (
//             <div className="mb-4">
//               <ul className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs font-medium text-neutral-700 dark:text-neutral-300">
//                 {project.highlights.map((highlight: string) => (
//                   <li key={highlight} className="flex items-center gap-1.5">
//                     <Check size={12} className="text-emerald-500 shrink-0" />
//                     <span className="truncate">{highlight}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* FRAMEWORKS / TECH STACK */}
//           <div className="flex flex-wrap gap-1.5 mb-6">
//             {project.tech.map((tech: string) => (
//               <span
//                 key={tech}
//                 className="rounded-md bg-neutral-100 dark:bg-neutral-800/60 px-2.5 py-0.5 text-[11px] font-medium text-neutral-600 dark:text-neutral-400 border border-neutral-200/40 dark:border-neutral-700/30"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* BUTTON FOOTER */}
//         <div>
//           <div className="mb-4 border-t border-neutral-200 dark:border-neutral-800" />
//           <div className="flex gap-3">
//             {/* LEFT SIDE ACTION: LIVE / SOURCE CODE / PRIVATE CASE STUDY */}
//             {project.live ? (
//               <Link
//                 href={project.live}
//                 target="_blank"
//                 className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-50 dark:bg-violet-500/10 px-4 py-2.5 text-xs font-semibold text-violet-700 dark:text-violet-300 transition hover:bg-violet-100 dark:hover:bg-violet-500/20"
//               >
//                 Open Project →
//               </Link>
//             ) : project.status === "Private" ? (
//               <div className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-4 py-2.5 text-xs font-semibold text-neutral-400 dark:text-neutral-500 cursor-not-allowed">
//                 Read Case Study →
//               </div>
//             ) : (
//               project.github && (
//                 <Link
//                   href={project.github}
//                   target="_blank"
//                   className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-4 py-2.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 transition hover:bg-neutral-100 dark:hover:bg-neutral-800"
//                 >
//                   View Source →
//                 </Link>
//               )
//             )}

//             {/* SECONDARY LINK FOR GITHUB (ONLY SHOW IF LIVE PROJECT HAS SEPARATE GITHUB AS WELL) */}
//             {project.live && project.github && (
//               <Link
//                 href={project.github}
//                 target="_blank"
//                 className="inline-flex items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-2.5 text-neutral-600 dark:text-neutral-400 transition hover:bg-neutral-100 dark:hover:bg-neutral-800"
//                 title="View GitHub"
//               >
//                 <FaGithub size={16} />
//               </Link>
//             )}
//           </div>
//         </div>

//         {/* Ambient Hover Glow */}
//         <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/5 via-violet-500/5 to-blue-500/5" />
//       </motion.div>
//     </HoverCard>
//   );
// }








// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Lock } from "lucide-react";
// import { FaGithub } from "react-icons/fa";
// import HoverCard from "@/components/ui/hover-card";

// export default function Projects() {
//   const projects = [
//     {
//       title: "Portfolio Website",
//       description:
//         "A modern portfolio built with Next.js, Tailwind CSS, Framer Motion and TypeScript.",
//       tech: ["Next.js", "Tailwind", "TypeScript"],
//       highlights: ["Framer Motion", "Responsive Design", "SEO Optimized"],
//       github: "https://github.com/your-username/portfolio",
//       live: "https://your-portfolio.com",
//       image: "/images/projects/portfolio.png",
//       status: "Live",
//       year: "2026",
//     },
//     {
//       title: "Automation Tool",
//       description:
//         "Backend automation system for repetitive workflows and engineering processes.",
//       tech: ["Node.js", "Express", "MongoDB"],
//       highlights: ["CRON Jobs", "REST APIs", "Error Logging"],
//       github: "https://github.com/your-username/automation",
//       live: null,
//       image: "/images/projects/automation.png",
//       status: "Open Source",
//       year: "2025",
//     },
//     {
//       title: "E-commerce Platform",
//       description:
//         "Full-stack ecommerce platform with authentication and Stripe payments.",
//       tech: ["Next.js", "PostgreSQL", "Stripe"],
//       highlights: ["Authentication", "Payments", "Database Optimization"],
//       github: "https://github.com/your-username/ecommerce",
//       live: null,
//       image: "/images/projects/ecommerce.png",
//       status: "Private",
//       year: "2025",
//     },
//   ];

//   const productionProjects = projects.filter(p => p.status === "Live" || p.status === "Private");
//   const openSourceProjects = projects.filter(p => p.status === "Open Source" || p.status === "Prototype");

//   return (
//     <section id="projects" className="section-padding overflow-x-hidden py-24">
//       <div className="container-width px-4">
//         {/* HEADER */}
//         <div className="mb-16 text-center">
//           <h2 className="text-4xl font-bold">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-neutral-500 dark:text-neutral-400">
//             A collection of projects demonstrating full-stack development,
//             automation and UI engineering.
//           </p>
//         </div>

//         {/* GROUP 1: PRODUCTION PROJECTS */}
//         {productionProjects.length > 0 && (
//           <div className="mb-20">
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Production Projects
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start">
//               {productionProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </div>
//           </div>
//         )}

//         {/* GROUP 2: OPEN SOURCE & EXPERIMENTS */}
//         {openSourceProjects.length > 0 && (
//           <div>
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Open Source & Experiments
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start">
//               {openSourceProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// /* ================= PROJECT CARD COMPONENT ================= */
// function ProjectCard({ project }: { project: any }) {
//   const renderStatusBadge = (status: string) => {
//     switch (status) {
//       case "Live":
//         return (
//           <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
//             <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
//             Production
//           </span>
//         );
//       case "Open Source":
//         return (
//           <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400">
//             Open Source
//           </span>
//         );
//       case "Prototype":
//         return (
//           <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400">
//             Prototype
//           </span>
//         );
//       case "Private":
//         return (
//           <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 dark:text-neutral-400">
//             <Lock size={12} />
//             Private
//           </span>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <HoverCard>
//       <motion.div
//         whileHover={{ 
//           y: -6, 
//           rotateX: 1,
//           scale: 1.015,
//           boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)"
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 200,
//           damping: 22,
//         }}
//         className="group relative rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/95 shadow-sm dark:shadow-black/20 hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-500 p-7 flex flex-col justify-between h-full will-change-transform"
//       >
//         <div>
//           {/* IMAGE WORKSPACE */}
//           <div className="relative h-48 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 mb-6">
//             <div className="h-full w-full overflow-hidden">
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 fill
//                 className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//               />
//             </div>
//             <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
//           </div>

//           {/* META & TITLES */}
//           <div className="space-y-2">
//             <div>
//               {renderStatusBadge(project.status)}
//             </div>
            
//             <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white transition group-hover:text-violet-500">
//               {project.title}
//             </h3>

//             <p className="text-[14px] leading-6 text-neutral-600 dark:text-neutral-400 line-clamp-3 pt-1">
//               {project.description}
//             </p>
//           </div>

//           {/* HIGHLIGHT PILLS */}
//           {project.highlights && (
//             <div className="mt-6">
//               <div className="flex flex-wrap gap-1.5">
//                 {project.highlights.map((highlight: string) => (
//                   <span 
//                     key={highlight} 
//                     className="rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 text-[11px] font-medium tracking-tight"
//                   >
//                     {highlight}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* MONOCHROME TECH STACK */}
//           <div className="flex flex-wrap gap-1.5 mt-4 mb-8">
//             {project.tech.map((tech: string) => (
//               <span
//                 key={tech}
//                 className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-0.5 text-[11px] font-medium text-neutral-600 dark:text-neutral-400"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* METADATA & BUTTON FOOTER */}
//         <div className="mt-auto">
//           {/* Subtle Metadata Row */}
//           <div className="flex justify-between items-center text-[11px] font-medium text-neutral-400 dark:text-neutral-500 mb-4 px-1">
//             <span>{project.year}</span>
//             <span>{project.tech.length} Technologies</span>
//           </div>

//           <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/60 flex gap-3">
//             {project.live ? (
//               <Link
//                 href={project.live}
//                 target="_blank"
//                 className="flex-1 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-95"
//               >
//                 Open Project →
//               </Link>
//             ) : project.status === "Private" ? (
//               <div className="flex-1 inline-flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 px-4 py-2.5 text-xs font-semibold text-neutral-400 dark:text-neutral-500 cursor-not-allowed">
//                 Read Case Study →
//               </div>
//             ) : (
//               project.github && (
//                 <Link
//                   href={project.github}
//                   target="_blank"
//                   className="flex-1 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-95"
//                 >
//                   View Source →
//                 </Link>
//               )
//             )}

//             {project.live && project.github && (
//               <Link
//                 href={project.github}
//                 target="_blank"
//                 className="inline-flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 p-2.5 text-neutral-600 dark:text-neutral-400 transition hover:bg-neutral-200 dark:hover:bg-neutral-700"
//                 title="View GitHub"
//               >
//                 <FaGithub size={16} />
//               </Link>
//             )}
//           </div>
//         </div>

//         {/* Ambient Hover Glow */}
//         <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/5 via-violet-500/5 to-blue-500/5" />
//       </motion.div>
//     </HoverCard>
//   );
// }






// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { FaGithub } from "react-icons/fa";
// import HoverCard from "@/components/ui/hover-card";

// export default function Projects() {
//   const projects = [
//     {
//       title: "Portfolio Website",
//       description:
//         "A modern portfolio built with Next.js, Tailwind CSS, Framer Motion and TypeScript.",
//       tech: ["Next.js", "Tailwind", "TypeScript"],
//       highlights: ["Framer Motion", "Responsive Design", "SEO Optimized"],
//       github: "https://github.com/your-username/portfolio",
//       live: "https://your-portfolio.com",
//       // If it's a blog case study, you can point to your local route instead
//       slug: "/blog/portfolio-website", 
//       image: "/images/projects/portfolio.png",
//       status: "Live",
//       year: "2026",
//     },
//     {
//       title: "Automation Tool",
//       description:
//         "Backend automation system for repetitive workflows and engineering processes.",
//       tech: ["Node.js", "Express", "MongoDB"],
//       highlights: ["CRON Jobs", "REST APIs", "Error Logging"],
//       github: "https://github.com/your-username/automation",
//       live: null,
//       slug: "https://github.com/your-username/automation#readme", // Directly to deep-dive README
//       image: "/images/projects/automation.png",
//       status: "Open Source",
//       year: "2025",
//     },
//     {
//       title: "E-commerce Platform",
//       description:
//         "Full-stack ecommerce platform with authentication and Stripe payments.",
//       tech: ["Next.js", "PostgreSQL", "Stripe"],
//       highlights: ["Authentication", "Payments", "Database Optimization"],
//       github: null, // Hidden or private repository
//       live: null,
//       slug: "/blog/ecommerce-platform-case-study", // Clean local blog page link
//       image: "/images/projects/ecommerce.png",
//       status: "Private",
//       year: "2025",
//     },
//   ];

//   const productionProjects = projects.filter(p => p.status === "Live" || p.status === "Private");
//   const openSourceProjects = projects.filter(p => p.status === "Open Source" || p.status === "Prototype");

//   return (
//     <section id="projects" className="section-padding overflow-x-hidden py-24">
//       <div className="container-width px-4">
//         {/* HEADER */}
//         <div className="mb-16 text-center">
//           <h2 className="text-4xl font-bold">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-neutral-500 dark:text-neutral-400">
//             A collection of projects demonstrating full-stack development,
//             automation and UI engineering.
//           </p>
//         </div>

//         {/* GROUP 1: PRODUCTION PROJECTS */}
//         {productionProjects.length > 0 && (
//           <div className="mb-20">
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Production Projects
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start">
//               {productionProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </div>
//           </div>
//         )}

//         {/* GROUP 2: OPEN SOURCE & EXPERIMENTS */}
//         {openSourceProjects.length > 0 && (
//           <div>
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Open Source & Experiments
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start">
//               {openSourceProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// /* ================= PROJECT CARD COMPONENT ================= */
// function ProjectCard({ project }: { project: any }) {
//   const renderStatusBadge = (status: string) => {
//     switch (status) {
//       case "Live":
//         return (
//           <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
//             <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
//             Production
//           </span>
//         );
//       case "Open Source":
//         return (
//           <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400">
//             Open Source
//           </span>
//         );
//       case "Prototype":
//         return (
//           <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400">
//             Prototype
//           </span>
//         );
//       case "Private":
//         return (
//           <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-600 dark:text-purple-400">
//             Enterprise
//           </span>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <HoverCard>
//       <motion.div
//         whileHover={{ 
//           y: -6, 
//           rotateX: 1,
//           scale: 1.015,
//           boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)"
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 200,
//           damping: 22,
//         }}
//         className="group relative rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/95 shadow-sm dark:shadow-black/20 hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-500 p-7 flex flex-col justify-between h-full will-change-transform"
//       >
//         <div>
//           {/* IMAGE WORKSPACE */}
//           <div className="relative h-48 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 mb-6">
//             <div className="h-full w-full overflow-hidden">
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 fill
//                 className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//               />
//             </div>
//             <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
//           </div>

//           {/* META & TITLES */}
//           <div className="space-y-2">
//             <div>
//               {renderStatusBadge(project.status)}
//             </div>
            
//             <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white transition group-hover:text-violet-500">
//               {project.title}
//             </h3>

//             <p className="text-[14px] leading-6 text-neutral-600 dark:text-neutral-400 line-clamp-3 pt-1">
//               {project.description}
//             </p>
//           </div>

//           {/* HIGHLIGHT PILLS */}
//           {project.highlights && (
//             <div className="mt-6">
//               <div className="flex flex-wrap gap-1.5">
//                 {project.highlights.map((highlight: string) => (
//                   <span 
//                     key={highlight} 
//                     className="rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 text-[11px] font-medium tracking-tight"
//                   >
//                     {highlight}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* MONOCHROME TECH STACK */}
//           <div className="flex flex-wrap gap-1.5 mt-4 mb-8">
//             {project.tech.map((tech: string) => (
//               <span
//                 key={tech}
//                 className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-0.5 text-[11px] font-medium text-neutral-600 dark:text-neutral-400"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* METADATA & BUTTON FOOTER */}
//         <div className="mt-auto">
//           {/* Subtle Metadata Row */}
//           <div className="flex justify-between items-center text-[11px] font-medium text-neutral-400 dark:text-neutral-500 mb-4 px-1">
//             <span>{project.year}</span>
//             <span>{project.tech.length} Technologies</span>
//           </div>

//           <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/60 flex gap-3">
//             {/* DYNAMIC ACTION LINK BASED ON AVAILABILITY */}
//             {project.live ? (
//               <Link
//                 href={project.live}
//                 target="_blank"
//                 className="flex-1 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-95"
//               >
//                 Open Project →
//               </Link>
//             ) : project.status === "Private" ? (
//               <Link
//                 href={project.slug || "#"}
//                 className="flex-1 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-95"
//               >
//                 Read Case Study →
//               </Link>
//             ) : (
//               project.slug && (
//                 <Link
//                   href={project.slug}
//                   target={project.slug.startsWith("http") ? "_blank" : "_self"}
//                   className="flex-1 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-95"
//                 >
//                   View Source →
//                 </Link>
//               )
//             )}

//             {/* SEPARATE GITHUB SECONDARY ACTION BUTTON IF REPO EXISTS */}
//             {project.github && (
//               <Link
//                 href={project.github}
//                 target="_blank"
//                 className="inline-flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 p-2.5 text-neutral-600 dark:text-neutral-400 transition hover:bg-neutral-200 dark:hover:bg-neutral-700"
//                 title="View GitHub"
//               >
//                 <FaGithub size={16} />
//               </Link>
//             )}
//           </div>
//         </div>

//         {/* Ambient Hover Glow */}
//         <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/5 via-violet-500/5 to-blue-500/5" />
//       </motion.div>
//     </HoverCard>
//   );
// }





// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Lock } from "lucide-react";
// import { FaGithub } from "react-icons/fa";
// import HoverCard from "@/components/ui/hover-card";

// export default function Projects() {
//   const projects = [
//     {
//       title: "Portfolio Website",
//       description:
//         "A modern portfolio built with Next.js, Tailwind CSS, Framer Motion and TypeScript.",
//       tech: ["Next.js", "Tailwind", "TypeScript"],
//       highlights: ["Framer Motion", "Responsive Design", "SEO Optimized"],
//       github: "https://github.com/your-username/portfolio",
//       live: "https://your-portfolio.com",
//       slug: "/blog/portfolio-website", 
//       image: "/images/projects/portfolio.png",
//       status: "Live",
//       year: "2026",
//     },
//     {
//       title: "PCB Simulation & Test Automation Suite",
//       description:
//         "Engineered an enterprise-grade automation platform for Advantest to optimize hardware verification workflows and reduce repetitive manual hardware checks.",
//       tech: ["Python", "TCL", "PostgreSQL", "Docker"],
//       highlights: ["Hardware Automation", "Workflow Optimization", "Custom Analytics"],
//       github: null, // Hidden completely because it's corporate proprietary 
//       live: null,
//       slug: "/blog/advantest-automation-case-study", // Your deep dive blog path
//       image: "/images/projects/advantest-automation.png", 
//       status: "Private",
//       year: "2025",
//     },
//     {
//       title: "E-commerce Platform",
//       description:
//         "Full-stack ecommerce platform with authentication and Stripe payments.",
//       tech: ["Next.js", "PostgreSQL", "Stripe"],
//       highlights: ["Authentication", "Payments", "Database Optimization"],
//       github: null,
//       live: null,
//       slug: "/blog/ecommerce-platform-case-study",
//       image: "/images/projects/ecommerce.png",
//       status: "Private",
//       year: "2025",
//     },
//     {
//       title: "Automation Tool",
//       description:
//         "Backend automation system for repetitive workflows and engineering processes.",
//       tech: ["Node.js", "Express", "MongoDB"],
//       highlights: ["CRON Jobs", "REST APIs", "Error Logging"],
//       github: "https://github.com/your-username/automation",
//       live: null,
//       slug: "https://github.com/your-username/automation#readme",
//       image: "/images/projects/automation.png",
//       status: "Open Source",
//       year: "2025",
//     },
//   ];

//   const productionProjects = projects.filter(p => p.status === "Live" || p.status === "Private");
//   const openSourceProjects = projects.filter(p => p.status === "Open Source" || p.status === "Prototype");

//   return (
//     <section id="projects" className="section-padding overflow-x-hidden py-24">
//       <div className="container-width px-4">
//         {/* HEADER */}
//         <div className="mb-16 text-center">
//           <h2 className="text-4xl font-bold">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-neutral-500 dark:text-neutral-400">
//             A collection of projects demonstrating full-stack development,
//             automation and UI engineering.
//           </p>
//         </div>

//         {/* GROUP 1: PRODUCTION PROJECTS (This will now house your Advantest work flawlessly) */}
//         {productionProjects.length > 0 && (
//           <div className="mb-20">
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Production Projects
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start">
//               {productionProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </div>
//           </div>
//         )}

//         {/* GROUP 2: OPEN SOURCE & EXPERIMENTS */}
//         {openSourceProjects.length > 0 && (
//           <div>
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Open Source & Experiments
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start">
//               {openSourceProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// /* ================= PROJECT CARD COMPONENT ================= */
// function ProjectCard({ project }: { project: any }) {
//   const renderStatusBadge = (status: string) => {
//     switch (status) {
//       case "Live":
//         return (
//           <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
//             <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
//             Production
//           </span>
//         );
//       case "Open Source":
//         return (
//           <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400">
//             Open Source
//           </span>
//         );
//       case "Prototype":
//         return (
//           <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400">
//             Prototype
//           </span>
//         );
//       case "Private":
//         return (
//           <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-600 dark:text-purple-400">
//             Enterprise
//           </span>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <HoverCard>
//       <motion.div
//         whileHover={{ 
//           y: -6, 
//           rotateX: 1,
//           scale: 1.015,
//           boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)"
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 200,
//           damping: 22,
//         }}
//         className="group relative rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/95 shadow-sm dark:shadow-black/20 hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-500 p-7 flex flex-col justify-between h-full will-change-transform"
//       >
//         <div>
//           {/* IMAGE WORKSPACE */}
//           <div className="relative h-48 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 mb-6">
//             <div className="h-full w-full overflow-hidden">
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 fill
//                 className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//               />
//             </div>
//             <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
//           </div>

//           {/* META & TITLES */}
//           <div className="space-y-2">
//             <div>
//               {renderStatusBadge(project.status)}
//             </div>
            
//             <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white transition group-hover:text-violet-500">
//               {project.title}
//             </h3>

//             <p className="text-[14px] leading-6 text-neutral-600 dark:text-neutral-400 line-clamp-3 pt-1">
//               {project.description}
//             </p>
//           </div>

//           {/* HIGHLIGHT PILLS */}
//           {project.highlights && (
//             <div className="mt-6">
//               <div className="flex flex-wrap gap-1.5">
//                 {project.highlights.map((highlight: string) => (
//                   <span 
//                     key={highlight} 
//                     className="rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 text-[11px] font-medium tracking-tight"
//                   >
//                     {highlight}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* MONOCHROME TECH STACK */}
//           <div className="flex flex-wrap gap-1.5 mt-4 mb-8">
//             {project.tech.map((tech: string) => (
//               <span
//                 key={tech}
//                 className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-0.5 text-[11px] font-medium text-neutral-600 dark:text-neutral-400"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* METADATA & BUTTON FOOTER */}
//         <div className="mt-auto">
//           {/* Subtle Metadata Row */}
//           <div className="flex justify-between items-center text-[11px] font-medium text-neutral-400 dark:text-neutral-500 mb-4 px-1">
//             <span>{project.year}</span>
//             <span>{project.tech.length} Technologies</span>
//           </div>

//           <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/60 flex gap-3">
//             {project.live ? (
//               <Link
//                 href={project.live}
//                 target="_blank"
//                 className="flex-1 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-95"
//               >
//                 Open Project →
//               </Link>
//             ) : project.status === "Private" ? (
//               <Link
//                 href={project.slug || "#"}
//                 className="flex-1 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-95"
//               >
//                 Read Case Study →
//               </Link>
//             ) : (
//               project.slug && (
//                 <Link
//                   href={project.slug}
//                   target={project.slug.startsWith("http") ? "_blank" : "_self"}
//                   className="flex-1 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-95"
//                 >
//                   View Source →
//                 </Link>
//               )
//             )}

//             {project.github && (
//               <Link
//                 href={project.github}
//                 target="_blank"
//                 className="inline-flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 p-2.5 text-neutral-600 dark:text-neutral-400 transition hover:bg-neutral-200 dark:hover:bg-neutral-700"
//                 title="View GitHub"
//               >
//                 <FaGithub size={16} />
//               </Link>
//             )}
//           </div>
//         </div>

//         {/* Ambient Hover Glow */}
//         <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/5 via-violet-500/5 to-blue-500/5" />
//       </motion.div>
//     </HoverCard>
//   );
// }




// "use client";

// import React, { useState, useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import { FaGithub } from "react-icons/fa";
// import HoverCard from "@/components/ui/hover-card";

// export default function Projects() {
//   const projects = [
//     {
//       title: "Portfolio Website",
//       description:
//         "A modern portfolio built with Next.js, Tailwind CSS, Framer Motion and TypeScript.",
//       tech: ["Next.js", "Tailwind", "TypeScript"],
//       highlights: ["Framer Motion", "Responsive Design", "SEO Optimized"],
//       github: "https://github.com/your-username/portfolio",
//       live: "https://your-portfolio.com",
//       slug: "/blog/portfolio-website", 
//       image: "/images/projects/portfolio.png",
//       status: "Live",
//       year: "2026",
//       metrics: ["99.9% Uptime", "100 LightHouse", "SEO Optimized"],
//     },
//     {
//       title: "PCB Simulation & Test Automation Suite",
//       description:
//         "Engineered an enterprise-grade automation platform for Advantest to optimize hardware verification workflows and reduce repetitive manual hardware checks.",
//       tech: ["Python", "TCL", "PostgreSQL", "Docker"],
//       highlights: ["Hardware Automation", "Workflow Optimization", "Custom Analytics"],
//       github: null, 
//       live: null,
//       slug: "/blog/advantest-automation-case-study", 
//       image: "/images/projects/advantest-automation.png", 
//       status: "Private",
//       year: "2025",
//       metrics: ["-72% Test Duration", "50+ Workflows", "MNC Deployment"],
//     },
//     {
//       title: "E-commerce Platform",
//       description:
//         "Full-stack ecommerce platform with authentication and Stripe payments.",
//       tech: ["Next.js", "PostgreSQL", "Stripe"],
//       highlights: ["Authentication", "Payments", "Database Optimization"],
//       github: null,
//       live: null,
//       slug: "/blog/ecommerce-platform-case-study",
//       image: "/images/projects/ecommerce.png",
//       status: "Private",
//       year: "2025",
//       metrics: ["500+ Req / Min", "Stripe Live", "Multi-tenant"],
//     },
//     {
//       title: "Automation Tool",
//       description:
//         "Backend automation system for repetitive workflows and engineering processes.",
//       tech: ["Node.js", "Express", "MongoDB"],
//       highlights: ["CRON Jobs", "REST APIs", "Error Logging"],
//       github: "https://github.com/your-username/automation",
//       live: null,
//       slug: "https://github.com/your-username/automation#readme",
//       image: "/images/projects/automation.png",
//       status: "Open Source",
//       year: "2025",
//       metrics: ["12k Active Users", "100% Free Core", "MIT Licensed"],
//     },
//   ];

//   const productionProjects = projects.filter(p => p.status === "Live" || p.status === "Private");
//   const openSourceProjects = projects.filter(p => p.status === "Open Source" || p.status === "Prototype");

//   return (
//     <section id="projects" className="section-padding overflow-x-hidden py-24 bg-neutral-50/50 dark:bg-neutral-950/20">
//       <div className="container-width px-4">
//         {/* HEADER */}
//         <div className="mb-16 text-center">
//           <h2 className="text-4xl font-bold tracking-tight">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-neutral-500 dark:text-neutral-400">
//             A collection of projects demonstrating full-stack development,
//             automation and UI engineering.
//           </p>
//         </div>

//         {/* GROUP 1: PRODUCTION PROJECTS */}
//         {productionProjects.length > 0 && (
//           <div className="mb-20">
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Production Projects
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start">
//               {productionProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </div>
//           </div>
//         )}

//         {/* GROUP 2: OPEN SOURCE & EXPERIMENTS */}
//         {openSourceProjects.length > 0 && (
//           <div>
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Open Source & Experiments
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start">
//               {openSourceProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// /* ================= PROJECT CARD COMPONENT ================= */
// function ProjectCard({ project }: { project: any }) {
//   const cardRef = useRef<HTMLDivElement>(null);
  
//   // Spotlight Trackers
//   const [mouseX, setMouseX] = useState(0);
//   const [mouseY, setMouseY] = useState(0);

//   // 3D Tilt Values
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [3, -3]), { stiffness: 220, damping: 18 });
//   const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), { stiffness: 220, damping: 18 });

//   function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
//     if (!cardRef.current) return;
//     const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    
//     // Set Spotlight Positions
//     setMouseX(event.clientX - left);
//     setMouseY(event.clientY - top);

//     // Set Tilt Angles
//     x.set((event.clientX - left) / width - 0.5);
//     y.set((event.clientY - top) / height - 0.5);
//   }

//   function handleMouseLeave() {
//     x.set(0);
//     y.set(0);
//   }

//   const renderStatusBadge = (status: string) => {
//     switch (status) {
//       case "Live":
//         return (
//           <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
//             🟢 Production
//           </span>
//         );
//       case "Open Source":
//         return (
//           <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 px-2.5 py-0.5 rounded-full">
//             &lt;&gt; Open Source
//           </span>
//         );
//       case "Prototype":
//         return (
//           <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 px-2.5 py-0.5 rounded-full">
//             🧪 Prototype
//           </span>
//         );
//       case "Private":
//         return (
//           <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10 px-2.5 py-0.5 rounded-full">
//             🔒 Enterprise
//           </span>
//         );
//       default:
//         return null;
//     }
//   };

//   // Stagger Framer Configs
//   const listContainerVariants = {
//     hover: { transition: { staggerChildren: 0.04 } }
//   };

//   const chipVariants = {
//     initial: { y: 0 },
//     hover: { y: -3, transition: { type: "spring", stiffness: 300, damping: 12 } }
//   } as const;

//   return (
//     <HoverCard>
//       <motion.div
//         ref={cardRef}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         whileHover="hover"
//         style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
//         className="group relative rounded-3xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/90 shadow-sm dark:shadow-black/20 hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-500 p-7 flex flex-col justify-between h-full will-change-transform before:absolute before:inset-0 before:rounded-3xl before:p-[1px] before:bg-gradient-to-r before:from-cyan-500/20 before:via-violet-500/20 before:to-blue-500/20 before:opacity-0 group-hover:before:opacity-100 before:pointer-events-none"
//       >
//         {/* MOVING SPOTLIGHT RECTANGLE */}
//         <div 
//           className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
//           style={{
//             background: `radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(124, 58, 237, 0.06), transparent 80%)`
//           }}
//         />

//         <div>
//           {/* IMAGE CONTAINER WITH ADDED DROP DEPTH */}
//           <div className="relative h-48 overflow-hidden rounded-2xl border border-neutral-200/70 dark:border-neutral-800 shadow-sm mb-6 bg-neutral-100 dark:bg-neutral-950 ring-1 ring-black/5 dark:ring-white/5">
//             <div className="h-full w-full overflow-hidden">
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 fill
//                 className="object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-1"
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//               />
//             </div>
//             <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
//           </div>

//           {/* CLAMPED HEADER SUB-DATA */}
//           <div className="space-y-2.5">
//             <div className="flex items-center justify-between">
//               {renderStatusBadge(project.status)}
//               <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 bg-neutral-100 dark:bg-neutral-800/60 px-2.5 py-0.5 rounded-full">{project.year}</span>
//             </div>
            
//             <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white transition duration-300 group-hover:text-violet-500 group-hover:translate-x-0.5">
//               {project.title}
//             </h3>

//             <p className="text-[14px] leading-6 text-neutral-600 dark:text-neutral-400 line-clamp-3 pt-0.5">
//               {project.description}
//             </p>
//           </div>

//           {/* DYNAMIC CASE METRICS SLOTS */}
//           {project.metrics && (
//             <div className="mt-5 grid grid-cols-3 gap-2 bg-neutral-50 dark:bg-neutral-950/40 p-2.5 rounded-xl border border-neutral-100 dark:border-neutral-800/40">
//               {project.metrics.map((metric: string, idx: number) => (
//                 <div key={idx} className="text-center">
//                   <div className="text-[11px] font-bold text-neutral-700 dark:text-neutral-300 truncate tracking-tight">{metric.split(' ')[0]}</div>
//                   <div className="text-[9px] font-medium text-neutral-400 dark:text-neutral-500 mt-0.5 truncate">{metric.split(' ').slice(1).join(' ') || 'Value'}</div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* SECTION DIVIDER */}
//           <div className="my-5 border-t border-neutral-100 dark:border-neutral-800/40" />

//           {/* STAGGERED MONOCHROME TECH STACK CHIPS */}
//           <motion.div 
//             variants={listContainerVariants}
//             className="flex flex-wrap gap-1.5 mb-8"
//           >
//             {project.tech.map((tech: string) => (
//               <motion.span
//                 key={tech}
//                 variants={chipVariants}
//                 className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-0.5 text-[11px] font-medium text-neutral-600 dark:text-neutral-300 border border-neutral-200/20 dark:border-neutral-700/30"
//               >
//                 {tech}
//               </motion.span>
//             ))}
//           </motion.div>
//         </div>

//         {/* METADATA & ARROW ACTION FOOTER */}
//         <div className="mt-auto">
//           <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/60 flex gap-3">
//             {project.live ? (
//               <Link
//                 href={project.live}
//                 target="_blank"
//                 className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-95 group/btn"
//               >
//                 Open Project 
//                 <span className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5">↗</span>
//               </Link>
//             ) : project.status === "Private" ? (
//               <Link
//                 href={project.slug || "#"}
//                 className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-95 group/btn"
//               >
//                 Read Case Study 
//                 <span className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5">↗</span>
//               </Link>
//             ) : (
//               project.slug && (
//                 <Link
//                   href={project.slug}
//                   target={project.slug.startsWith("http") ? "_blank" : "_self"}
//                   className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-95 group/btn"
//                 >
//                   View Source 
//                   <span className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5">↗</span>
//                 </Link>
//               )
//             )}

//             {project.github && (
//               <Link
//                 href={project.github}
//                 target="_blank"
//                 className="inline-flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 p-2.5 text-neutral-600 dark:text-neutral-400 transition hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200/40 dark:border-neutral-700/50"
//                 title="View GitHub"
//               >
//                 <FaGithub size={16} />
//               </Link>
//             )}
//           </div>
//         </div>

//         {/* HIGHER INTENSITY RADIAL GLOW UNDERLAYER */}
//         <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-blue-500/10 z-0" />
//       </motion.div>
//     </HoverCard>
//   );
// }





// "use client";

// import React, { useState, useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import { FaGithub } from "react-icons/fa";
// import HoverCard from "@/components/ui/hover-card";

// export default function Projects() {
//   const projects = [
//     {
//       title: "Portfolio Website",
//       description:
//         "A modern portfolio built with Next.js, Tailwind CSS, Framer Motion and TypeScript.",
//       tech: ["Next.js", "Tailwind", "TypeScript"],
//       highlights: ["Framer Motion", "Responsive Design", "SEO Optimized"],
//       github: "https://github.com/your-username/portfolio",
//       live: "https://your-portfolio.com",
//       slug: "/blog/portfolio-website", 
//       image: "/images/projects/portfolio.png",
//       status: "Live",
//       year: "2026",
//       metrics: ["99.9% Uptime", "100 LightHouse", "SEO Optimized"],
//     },
//     {
//       title: "PCB Simulation & Test Automation Suite",
//       description:
//         "Engineered an enterprise-grade automation platform for Advantest to optimize hardware verification workflows and reduce repetitive manual hardware checks.",
//       tech: ["Python", "TCL", "PostgreSQL", "Docker"],
//       highlights: ["Hardware Automation", "Workflow Optimization", "Custom Analytics"],
//       github: null, 
//       live: null,
//       slug: "/blog/advantest-automation-case-study", 
//       image: "/images/projects/advantest-automation.png", 
//       status: "Private",
//       year: "2025",
//       metrics: ["-72% Test Duration", "50+ Workflows", "MNC Deployment"],
//     },
//     {
//       title: "E-commerce Platform",
//       description:
//         "Full-stack ecommerce platform with authentication and Stripe payments.",
//       tech: ["Next.js", "PostgreSQL", "Stripe"],
//       highlights: ["Authentication", "Payments", "Database Optimization"],
//       github: null,
//       live: null,
//       slug: "/blog/ecommerce-platform-case-study",
//       image: "/images/projects/ecommerce.png",
//       status: "Private",
//       year: "2025",
//     },
//     {
//       title: "Automation Tool",
//       description:
//         "Backend automation system for repetitive workflows and engineering processes.",
//       tech: ["Node.js", "Express", "MongoDB"],
//       highlights: ["CRON Jobs", "REST APIs", "Error Logging"],
//       github: "https://github.com/your-username/automation",
//       live: null,
//       slug: "https://github.com/your-username/automation#readme",
//       image: "/images/projects/automation.png",
//       status: "Open Source",
//       year: "2025",
//       metrics: ["12k Active Users", "100% Free Core", "MIT Licensed"],
//     },
//   ];

//   const productionProjects = projects.filter(p => p.status === "Live" || p.status === "Private");
//   const openSourceProjects = projects.filter(p => p.status === "Open Source" || p.status === "Prototype");

//   return (
//     <section id="projects" className="section-padding py-24 bg-neutral-50/50 dark:bg-neutral-950/20 overflow-x-clip">
//       <div className="container-width px-4">
//         {/* HEADER */}
//         <div className="mb-16 text-center">
//           <h2 className="text-4xl font-bold tracking-tight">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-neutral-500 dark:text-neutral-400">
//             A collection of projects demonstrating full-stack development,
//             automation and UI engineering.
//           </p>
//         </div>

//         {/* GROUP 1: PRODUCTION PROJECTS */}
//         {productionProjects.length > 0 && (
//           <div className="mb-20">
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Production Projects
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start">
//               {productionProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </div>
//           </div>
//         )}

//         {/* GROUP 2: OPEN SOURCE & EXPERIMENTS */}
//         {openSourceProjects.length > 0 && (
//           <div>
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Open Source & Experiments
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start">
//               {openSourceProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// /* ================= PROJECT CARD COMPONENT ================= */
// function ProjectCard({ project }: { project: any }) {
//   const cardRef = useRef<HTMLDivElement>(null);
  
//   // Spotlight Trackers
//   const [mouseX, setMouseX] = useState(0);
//   const [mouseY, setMouseY] = useState(0);

//   // 3D Tilt Values
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [3, -3]), { stiffness: 220, damping: 18 });
//   const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), { stiffness: 220, damping: 18 });

//   function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
//     if (!cardRef.current) return;
//     const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    
//     // Set Spotlight Positions
//     setMouseX(event.clientX - left);
//     setMouseY(event.clientY - top);

//     // Set Tilt Angles
//     x.set((event.clientX - left) / width - 0.5);
//     y.set((event.clientY - top) / height - 0.5);
//   }

//   function handleMouseLeave() {
//     x.set(0);
//     y.set(0);
//   }

//   const renderStatusBadge = (status: string) => {
//     switch (status) {
//       case "Live":
//         return (
//           <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
//             🟢 Production
//           </span>
//         );
//       case "Open Source":
//         return (
//           <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 px-2.5 py-0.5 rounded-full">
//             &lt;&gt; Open Source
//           </span>
//         );
//       case "Prototype":
//         return (
//           <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 px-2.5 py-0.5 rounded-full">
//             🧪 Prototype
//           </span>
//         );
//       case "Private":
//         return (
//           <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10 px-2.5 py-0.5 rounded-full">
//             🔒 Enterprise
//           </span>
//         );
//       default:
//         return null;
//     }
//   };

//   // Stagger Framer Configs
//   const listContainerVariants = {
//     hover: { transition: { staggerChildren: 0.04 } }
//   };

//   const chipVariants = {
//     initial: { y: 0 },
//     hover: { y: -3, transition: { type: "spring", stiffness: 300, damping: 12 } }
//   } as const;

//   return (
//     <HoverCard>
//       <motion.div
//         ref={cardRef}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         whileHover="hover"
//         style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
//         className="group relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/90 shadow-sm dark:shadow-black/20 hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-500 p-7 flex flex-col justify-start will-change-transform before:absolute before:inset-0 before:rounded-3xl before:p-[1px] before:bg-gradient-to-r before:from-cyan-500/20 before:via-violet-500/20 before:to-blue-500/20 before:opacity-0 group-hover:before:opacity-100 before:pointer-events-none"
//       >
//         {/* MOVING SPOTLIGHT RECTANGLE */}
//         <div 
//           className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
//           style={{
//             background: `radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(124, 58, 237, 0.06), transparent 80%)`
//           }}
//         />

//         <div>
//           {/* IMAGE CONTAINER WITH ADDED DROP DEPTH */}
//           <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-neutral-200/70 dark:border-neutral-800 shadow-sm mb-6 bg-neutral-100 dark:bg-neutral-950 ring-1 ring-black/5 dark:ring-white/5">
//             <div className="h-full w-full overflow-hidden">
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 fill
//                 className="object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-1"
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//               />
//             </div>
//             <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
//           </div>

//           {/* CLAMPED HEADER SUB-DATA */}
//           <div className="space-y-2.5">
//             <div className="flex items-center justify-start">
//               {renderStatusBadge(project.status)}
//               <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 bg-neutral-100 dark:bg-neutral-800/60 px-2.5 py-0.5 rounded-full">{project.year}</span>
//             </div>
            
//             <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white transition duration-300 group-hover:text-violet-500 group-hover:translate-x-0.5">
//               {project.title}
//             </h3>

//             <p className="text-[14px] leading-6 text-neutral-600 dark:text-neutral-400 line-clamp-2 pt-0.5">
//               {project.description}
//             </p>
//           </div>

//           {/* COMPACT INLINE HIGHLIGHT CHIPS */}
//           {project.highlights && project.highlights.length > 0 && (
//             <div className="mt-4 flex flex-wrap gap-1.5">
//               {project.highlights.slice(0, 3).map((h: string) => (
//                 <span
//                   key={h}
//                   className="text-[10px] px-2 py-0.5 rounded-full bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-300 border border-violet-200/30 dark:bg-violet-500/20"
//                 >
//                   {h}
//                 </span>
//               ))}
//             </div>
//           )}

//           {/* DYNAMIC CASE METRICS SLOTS */}
//           {project.metrics && (
//             <div className="mt-5 grid grid-cols-3 gap-2 bg-neutral-50 dark:bg-neutral-950/40 p-2.5 rounded-xl border border-neutral-100 dark:border-neutral-800/40">
//               {project.metrics.map((metric: string, idx: number) => (
//                 <div key={idx} className="text-center">
//                   <div className="text-[11px] font-bold text-neutral-700 dark:text-neutral-300 truncate tracking-tight">{metric.split(' ')[0]}</div>
//                   <div className="text-[9px] font-medium text-neutral-400 dark:text-neutral-500 mt-0.5 truncate">{metric.split(' ').slice(1).join(' ') || 'Value'}</div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* SECTION DIVIDER */}
//           <div className="my-5 border-t border-neutral-100 dark:border-neutral-800/40" />

//           {/* STAGGERED MONOCHROME TECH STACK CHIPS */}
//           <motion.div 
//             variants={listContainerVariants}
//             className="flex flex-wrap gap-1.5 mb-8"
//           >
//             {project.tech.map((tech: string) => (
//               <motion.span
//                 key={tech}
//                 variants={chipVariants}
//                 className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-0.5 text-[11px] font-medium text-neutral-600 dark:text-neutral-300 border border-neutral-200/20 dark:border-neutral-700/30"
//               >
//                 {tech}
//               </motion.span>
//             ))}
//           </motion.div>
//         </div>

//         {/* METADATA & ARROW ACTION FOOTER */}
//         <div className="mt-auto">
//           <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/60 flex gap-3">
//             {project.live ? (
//               <Link
//                 href={project.live}
//                 target="_blank"
//                 className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-95 group/btn"
//               >
//                 Open Project 
//                 <span className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5">↗</span>
//               </Link>
//             ) : project.status === "Private" ? (
//               <Link
//                 href={project.slug || "#"}
//                 className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-95 group/btn"
//               >
//                 Read Case Study 
//                 <span className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5">↗</span>
//               </Link>
//             ) : (
//               project.slug && (
//                 <Link
//                   href={project.slug}
//                   target={project.slug.startsWith("http") ? "_blank" : "_self"}
//                   className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-95 group/btn"
//                 >
//                   View Source 
//                   <span className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5">↗</span>
//                 </Link>
//               )
//             )}

//             {project.github && (
//               <Link
//                 href={project.github}
//                 target="_blank"
//                 className="inline-flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 p-2.5 text-neutral-600 dark:text-neutral-400 transition hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200/40 dark:border-neutral-700/50"
//                 title="View GitHub"
//               >
//                 <FaGithub size={16} />
//               </Link>
//             )}
//           </div>
//         </div>

//         {/* HIGHER INTENSITY RADIAL GLOW UNDERLAYER */}
//         <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-blue-500/10 z-0" />
//       </motion.div>
//     </HoverCard>
//   );
// }






// "use client";

// import React, { useState, useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import { FaGithub } from "react-icons/fa";
// import HoverCard from "@/components/ui/hover-card";
// import ProjectScene from "@/components/ui/project-scene";

// export default function Projects() {
//   const projects = [
//     {
//       title: "Portfolio Website",
//       description:
//         "A modern portfolio built with Next.js, Tailwind CSS, Framer Motion and TypeScript.",
//       scene: "car",
//       tech: ["Next.js", "Tailwind", "TypeScript"],
//       highlights: ["Framer Motion", "Responsive Design", "SEO Optimized"],
//       github: "https://github.com/your-username/portfolio",
//       live: "https://your-portfolio.com",
//       slug: "/blog/portfolio-website", 
//       image: "/images/projects/portfolio.png",
//       status: "Live",
//       year: "2026",
//       metrics: ["99.9% Uptime", "100 LightHouse", "SEO Optimized"],
//     },
//     {
//       title: "PCB Simulation & Test Automation Suite",
//       description:
//         "Engineered an enterprise-grade automation platform for Advantest to optimize hardware verification workflows and reduce repetitive manual hardware checks.",
//       scene: "chip",
//       tech: ["Python", "TCL", "PostgreSQL", "Docker"],
//       highlights: ["Hardware Automation", "Workflow Optimization", "Custom Analytics"],
//       github: null, 
//       live: null,
//       slug: "/blog/advantest-automation-case-study", 
//       image: "/images/projects/advantest-automation.png", 
//       status: "Private",
//       year: "2025",
//       metrics: ["-72% Test Duration", "50+ Workflows", "MNC Deployment"],
//     },
//     {
//       title: "E-commerce Platform",
//       description:
//         "Full-stack ecommerce platform with authentication and Stripe payments.",
//       scene: "server",
//       tech: ["Next.js", "PostgreSQL", "Stripe"],
//       highlights: ["Authentication", "Payments", "Database Optimization"],
//       github: null,
//       live: null,
//       slug: "/blog/ecommerce-platform-case-study",
//       image: "/images/projects/ecommerce.png",
//       status: "Private",
//       year: "2025",
//     },
//     {
//       title: "Automation Tool",
//       description:
//         "Backend automation system for repetitive workflows and engineering processes.",
//       scene: "robot",
//       tech: ["Node.js", "Express", "MongoDB"],
//       highlights: ["CRON Jobs", "REST APIs", "Error Logging"],
//       github: "https://github.com/your-username/automation",
//       live: null,
//       slug: "https://github.com/your-username/automation#readme",
//       image: "/images/projects/automation.png",
//       status: "Open Source",
//       year: "2025",
//       metrics: ["12k Active Users", "100% Free Core", "MIT Licensed"],
//     },
//   ];

//   const productionProjects = projects.filter(p => p.status === "Live" || p.status === "Private");
//   const openSourceProjects = projects.filter(p => p.status === "Open Source" || p.status === "Prototype");

//   return (
//     <section id="projects" className="section-padding py-24 bg-neutral-50/50 dark:bg-neutral-950/20 overflow-x-clip">
//       <div className="container-width px-4">
//         {/* HEADER */}
//         <div className="mb-16 text-center">
//           <h2 className="text-4xl font-bold tracking-tight">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-neutral-500 dark:text-neutral-400">
//             A collection of projects demonstrating full-stack development,
//             automation and UI engineering.
//           </p>
//         </div>

//         {/* GROUP 1: PRODUCTION PROJECTS */}
//         {productionProjects.length > 0 && (
//           <div className="mb-20">
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Production Projects
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start">
//               {productionProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </div>
//           </div>
//         )}

//         {/* GROUP 2: OPEN SOURCE & EXPERIMENTS */}
//         {openSourceProjects.length > 0 && (
//           <div>
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Open Source & Experiments
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start">
//               {openSourceProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// /* ================= PROJECT CARD COMPONENT ================= */
// function ProjectCard({ project }: { project: any }) {
//   const cardRef = useRef<HTMLDivElement>(null);
  
//   // Spotlight Trackers
//   const [mouseX, setMouseX] = useState(0);
//   const [mouseY, setMouseY] = useState(0);

//   // 3D Tilt Values
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   // Upgraded physical spring properties for more dramatic and fluid responses
//   const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
//     stiffness: 180,
//     damping: 20,
//   });

//   const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), {
//     stiffness: 180,
//     damping: 20,
//   });

//   function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
//     if (!cardRef.current) return;
//     const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    
//     // Set Spotlight Positions
//     setMouseX(event.clientX - left);
//     setMouseY(event.clientY - top);

//     // Set Tilt Angles
//     x.set((event.clientX - left) / width - 0.5);
//     y.set((event.clientY - top) / height - 0.5);
//   }

//   function handleMouseLeave() {
//     x.set(0);
//     y.set(0);
//   }

//   const renderStatusBadge = (status: string) => {
//     switch (status) {
//       case "Live":
//         return (
//           <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
//             🟢 Production
//           </span>
//         );
//       case "Open Source":
//         return (
//           <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 px-2.5 py-0.5 rounded-full">
//             &lt;&gt; Open Source
//           </span>
//         );
//       case "Prototype":
//         return (
//           <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 px-2.5 py-0.5 rounded-full">
//             🧪 Prototype
//           </span>
//         );
//       case "Private":
//         return (
//           <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10 px-2.5 py-0.5 rounded-full">
//             🔒 Enterprise
//           </span>
//         );
//       default:
//         return null;
//     }
//   };

//   // Stagger Framer Configs
//   const listContainerVariants = {
//     hover: { transition: { staggerChildren: 0.04 } }
//   };

//   const chipVariants = {
//     initial: { y: 0 },
//     hover: { y: -3, transition: { type: "spring", stiffness: 300, damping: 12 } }
//   } as const;

//   return (
//     <HoverCard>
//       <motion.div
//         ref={cardRef}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         whileHover="hover"
//         style={{
//           rotateX,
//           rotateY,
//           transformStyle: "preserve-3d",
//           transformPerspective: 1200,
//         }}
//         className="group relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/90 shadow-sm dark:shadow-black/20 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-500 p-6 flex flex-col gap-4 h-full will-change-transform before:absolute before:inset-0 before:rounded-3xl before:p-[1px] before:bg-gradient-to-r before:from-cyan-500/20 before:via-violet-500/20 before:to-blue-500/20 before:opacity-0 group-hover:before:opacity-100 before:pointer-events-none"
//       >
//         {/* FLOATING HIGHLIGHT MOTION BLUR */}
//         <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
//           <div className="absolute -top-10 left-1/2 w-32 h-32 bg-violet-400/10 blur-3xl rounded-full animate-pulse" />
//         </div>

//         {/* MOVING SPOTLIGHT RECTANGLE */}
//         <div 
//           className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
//           style={{
//             background: `radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(124, 58, 237, 0.06), transparent 80%)`
//           }}
//         />

//         <div>
//           {/* IMAGE CONTAINER WITH UPGRADED INTERACTION CURVES */}
//           <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-neutral-200/70 dark:border-neutral-800 shadow-sm bg-neutral-100 dark:bg-neutral-950 ring-1 ring-black/5 dark:ring-white/5">
//             <div className="h-full w-full overflow-hidden">
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 fill
//                 className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] group-hover:-translate-y-2"
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//               />
//             </div>
//             <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
//           </div>
//         </div>

//         {/* PREMIUM LAYER SEPARATION WRAPPER */}
//         <div className="relative z-10">
//           {/* CLAMPED HEADER SUB-DATA */}
//           <div className="space-y-2.5">
//             <div className="flex items-center justify-start gap-2">
//               {renderStatusBadge(project.status)}
//               <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 bg-neutral-100 dark:bg-neutral-800/60 px-2.5 py-0.5 rounded-full">{project.year}</span>
//             </div>
            
//             <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white transition duration-300 group-hover:text-violet-500 group-hover:translate-x-0.5">
//               {project.title}
//             </h3>

//             <p className="text-[14px] leading-6 text-neutral-600 dark:text-neutral-400 line-clamp-2 pt-0.5">
//               {project.description}
//             </p>
//           </div>

//           {/* COMPACT INLINE HIGHLIGHT CHIPS */}
//           {project.highlights && project.highlights.length > 0 && (
//             <div className="mt-4 flex flex-wrap gap-1.5">
//               {project.highlights.slice(0, 3).map((h: string) => (
//                 <span
//                   key={h}
//                   className="text-[10px] px-2 py-0.5 rounded-full bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-300 border border-violet-200/30 dark:border-violet-500/20"
//                 >
//                   {h}
//                 </span>
//               ))}
//             </div>
//           )}

//           {/* DYNAMIC CASE METRICS SLOTS */}
//           {project.metrics && (
//             <div className="mt-5 grid grid-cols-3 gap-2 bg-neutral-50 dark:bg-neutral-950/40 p-2.5 rounded-xl border border-neutral-100 dark:border-neutral-800/40">
//               {project.metrics.map((metric: string, idx: number) => (
//                 <div key={idx} className="text-center">
//                   <div className="text-[11px] font-bold text-neutral-700 dark:text-neutral-300 truncate tracking-tight">{metric.split(' ')[0]}</div>
//                   <div className="text-[9px] font-medium text-neutral-400 dark:text-neutral-500 mt-0.5 truncate">{metric.split(' ').slice(1).join(' ') || 'Value'}</div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* SECTION DIVIDER */}
//           <div className="my-5 border-t border-neutral-100 dark:border-neutral-800/40" />

//           {/* STAGGERED MONOCHROME TECH STACK CHIPS */}
//           <motion.div 
//             variants={listContainerVariants}
//             className="flex flex-wrap gap-1.5"
//           >
//             {project.tech.map((tech: string) => (
//               <motion.span
//                 key={tech}
//                 variants={chipVariants}
//                 className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-0.5 text-[11px] font-medium text-neutral-600 dark:text-neutral-300 border border-neutral-200/20 dark:border-neutral-700/30"
//               >
//                 {tech}
//               </motion.span>
//             ))}
//           </motion.div>
//         </div>

//         {/* METADATA & ARROW ACTION FOOTER */}
//         <div className="mt-auto">
//           <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/60 flex gap-3">
//             {project.live ? (
//               <Link
//                 href={project.live}
//                 target="_blank"
//                 className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-95 group/btn"
//               >
//                 Open Project 
//                 <span className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5">↗</span>
//               </Link>
//             ) : project.status === "Private" ? (
//               <Link
//                 href={project.slug || "#"}
//                 className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-95 group/btn"
//               >
//                 Read Case Study 
//                 <span className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5">↗</span>
//               </Link>
//             ) : (
//               project.slug && (
//                 <Link
//                   href={project.slug}
//                   target={project.slug.startsWith("http") ? "_blank" : "_self"}
//                   className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-95 group/btn"
//                 >
//                   View Source 
//                   <span className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5">↗</span>
//                 </Link>
//               )
//             )}

//             {project.github && (
//               <Link
//                 href={project.github}
//                 target="_blank"
//                 className="inline-flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 p-2.5 text-neutral-600 dark:text-neutral-400 transition hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200/40 dark:border-neutral-700/50"
//                 title="View GitHub"
//               >
//                 <FaGithub size={16} />
//               </Link>
//             )}
//           </div>
//         </div>

//         {/* HIGHER INTENSITY RADIAL GLOW UNDERLAYER */}
//         <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-blue-500/10 z-0" />
//       </motion.div>
//     </HoverCard>
//   );
// }







// "use client";

// import React, { useState, useRef, useMemo } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import { FaGithub } from "react-icons/fa";
// import HoverCard from "@/components/ui/hover-card";
// import ProjectScene from "@/components/ui/project-scene";

// export default function Projects() {
//   const projects = [
//     {
//       title: "Portfolio Website",
//       description:
//         "A modern portfolio built with Next.js, Tailwind CSS, Framer Motion and TypeScript.",
//       scene: "car",
//       tech: ["Next.js", "Tailwind", "TypeScript"],
//       highlights: ["Framer Motion", "Responsive Design", "SEO Optimized"],
//       github: "https://github.com/your-username/portfolio",
//       live: "https://your-portfolio.com",
//       slug: "/blog/portfolio-website", 
//       image: "/images/projects/portfolio.png",
//       status: "Live",
//       year: "2026",
//       metrics: ["99.9% Uptime", "100 LightHouse", "SEO Optimized"],
//     },
//     {
//       title: "PCB Simulation & Test Automation Suite",
//       description:
//         "Engineered an enterprise-grade automation platform for Advantest to optimize hardware verification workflows and reduce repetitive manual hardware checks.",
//       scene: "chip",
//       tech: ["Python", "TCL", "PostgreSQL", "Docker"],
//       highlights: ["Hardware Automation", "Workflow Optimization", "Custom Analytics"],
//       github: null, 
//       live: null,
//       slug: "/blog/advantest-automation-case-study", 
//       image: "/images/projects/advantest-automation.png", 
//       status: "Private",
//       year: "2025",
//       metrics: ["-72% Test Duration", "50+ Workflows", "MNC Deployment"],
//     },
//     {
//       title: "E-commerce Platform",
//       description:
//         "Full-stack ecommerce platform with authentication and Stripe payments.",
//       scene: "server",
//       tech: ["Next.js", "PostgreSQL", "Stripe"],
//       highlights: ["Authentication", "Payments", "Database Optimization"],
//       github: null,
//       live: null,
//       slug: "/blog/ecommerce-platform-case-study",
//       image: "/images/projects/ecommerce.png",
//       status: "Private",
//       year: "2025",
//     },
//     {
//       title: "Automation Tool",
//       description:
//         "Backend automation system for repetitive workflows and engineering processes.",
//       scene: "robot",
//       tech: ["Node.js", "Express", "MongoDB"],
//       highlights: ["CRON Jobs", "REST APIs", "Error Logging"],
//       github: "https://github.com/your-username/automation",
//       live: null,
//       slug: "https://github.com/your-username/automation#readme",
//       image: "/images/projects/automation.png",
//       status: "Open Source",
//       year: "2025",
//       metrics: ["12k Active Users", "100% Free Core", "MIT Licensed"],
//     },
//   ];

//   const productionProjects = projects.filter(p => p.status === "Live" || p.status === "Private");
//   const openSourceProjects = projects.filter(p => p.status === "Open Source" || p.status === "Prototype");

//   // Stagger container setup for whole initial sections
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//       },
//     },
//   };

//   return (
//     <section id="projects" className="section-padding py-24 bg-neutral-50/50 dark:bg-neutral-950/20 overflow-x-clip relative">
//       {/* PREMIUM BACKGROUND AMBIENT ORBS */}
//       <div className="absolute top-1/4 left-10 w-96 h-96 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px] pointer-events-none animate-[pulse_12s_ease-in-out_infinite]" />
//       <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none animate-[pulse_16s_ease-in-out_infinite]" />

//       <div className="container-width px-4 relative z-10">
//         {/* HEADER */}
//         <div className="mb-16 text-center">
//           <h2 className="text-4xl font-bold tracking-tight">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-neutral-500 dark:text-neutral-400">
//             A collection of projects demonstrating full-stack development,
//             automation and UI engineering.
//           </p>
//         </div>

//         {/* GROUP 1: PRODUCTION PROJECTS */}
//         {productionProjects.length > 0 && (
//           <div className="mb-20">
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Production Projects
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <motion.div 
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, margin: "-100px" }}
//               className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start"
//             >
//               {productionProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </motion.div>
//           </div>
//         )}

//         {/* GROUP 2: OPEN SOURCE & EXPERIMENTS */}
//         {openSourceProjects.length > 0 && (
//           <div>
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Open Source & Experiments
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <motion.div 
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, margin: "-100px" }}
//               className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start"
//             >
//               {openSourceProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </motion.div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// /* ================= PROJECT CARD COMPONENT ================= */
// /* ================= PROJECT CARD COMPONENT ================= */
// function ProjectCard({ project }: { project: any }) {
//   const cardRef = useRef<HTMLDivElement>(null);
  
//   // Spotlight Trackers
//   const [mouseX, setMouseX] = useState(0);
//   const [mouseY, setMouseY] = useState(0);

//   // 3D Tilt Values
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   // Upgraded physical spring properties for more dramatic and fluid responses
//   const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
//     stiffness: 180,
//     damping: 20,
//   });

//   const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), {
//     stiffness: 180,
//     damping: 20,
//   });

//   // Unique configuration for Organic Floating state per component mount
//   // ADDED 'as const' to fix the Easing string type assignment error
//   const floating = useMemo(
//     () => ({
//       x: [-3, 2, -2, 3, -3],
//       y: [-5, 4, -2, 5, -5],
//       rotate: [-0.5, 0.4, -0.3, 0.5, -0.5],
//       boxShadow: [
//         "0 10px 20px rgba(0,0,0,.04)",
//         "0 15px 30px rgba(0,0,0,.06)",
//         "0 10px 20px rgba(0,0,0,.04)",
//       ],
//       transition: {
//         duration: 6 + Math.random() * 3,
//         repeat: Infinity,
//         repeatType: "mirror" as const,
//         ease: "easeInOut" as const,
//         delay: Math.random() * 2,
//       },
//     }),
//     []
//   );

//   // Section entry variants to stagger nicely on initial view
//   const cardEntryVariants = {
//     hidden: { opacity: 0, y: 30 },
//     show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } }
//   };

//   // COMBINED hover state management to prevent duplicate attributes
//   const cardHoverVariants = {
//     hover: {
//       y: -12,
//       scale: 1.02,
//       boxShadow: "0 25px 45px rgba(139,92,246,.16)",
//       transition: { type: "spring" as const, stiffness: 200, damping: 18, staggerChildren: 0.04 }
//     }
//   };

//   function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
//     if (!cardRef.current) return;
//     const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    
//     // Set Spotlight Positions
//     setMouseX(event.clientX - left);
//     setMouseY(event.clientY - top);

//     // Set Tilt Angles
//     x.set((event.clientX - left) / width - 0.5);
//     y.set((event.clientY - top) / height - 0.5);
//   }

//   function handleMouseLeave() {
//     x.set(0);
//     y.set(0);
//   }

//   const renderStatusBadge = (status: string) => {
//     switch (status) {
//       case "Live":
//         return (
//           <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
//             🟢 Production
//           </span>
//         );
//       case "Open Source":
//         return (
//           <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 px-2.5 py-0.5 rounded-full">
//             &lt;&gt; Open Source
//           </span>
//         );
//       case "Prototype":
//         return (
//           <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 px-2.5 py-0.5 rounded-full">
//             🧪 Prototype
//           </span>
//         );
//       case "Private":
//         return (
//           <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10 px-2.5 py-0.5 rounded-full">
//             🔒 Enterprise
//           </span>
//         );
//       default:
//         return null;
//     }
//   };

//   const chipVariants = {
//     initial: { y: 0 },
//     hover: { y: -3, transition: { type: "spring", stiffness: 300, damping: 12 } }
//   } as const;

//   return (
//     <HoverCard>
//       <motion.div
//         ref={cardRef}
//         variants={{ ...cardEntryVariants, ...cardHoverVariants }}
//         animate={floating}
//         whileHover="hover"
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         style={{
//           rotateX,
//           rotateY,
//           transformStyle: "preserve-3d",
//           transformPerspective: 1200,
//         }}
//         className="group relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/90 shadow-sm dark:shadow-black/20 transition-all duration-500 p-6 flex flex-col gap-4 h-full will-change-transform before:absolute before:inset-0 before:rounded-3xl before:p-[1px] before:bg-gradient-to-r before:from-cyan-500/20 before:via-violet-500/20 before:to-blue-500/20 before:opacity-0 group-hover:before:opacity-100 before:pointer-events-none"
//       >
//         {/* PREMIUM SLOW PULSING GLOW */}
//         <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
//           <div className="absolute -top-10 left-1/2 w-32 h-32 bg-violet-400/10 blur-3xl rounded-full animate-[pulse_4s_ease-in-out_infinite]" />
//         </div>

//         {/* MOVING SPOTLIGHT RECTANGLE */}
//         <div 
//           className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
//           style={{
//             background: `radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(124, 58, 237, 0.06), transparent 80%)`
//           }}
//         />

//         <div>
//           {/* IMAGE CONTAINER */}
//           <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-neutral-200/70 dark:border-neutral-800 shadow-sm bg-neutral-100 dark:bg-neutral-950 ring-1 ring-black/5 dark:ring-white/5">
//             <div className="h-full w-full overflow-hidden">
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 fill
//                 className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] group-hover:-translate-y-2"
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//               />
//             </div>
//             <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
//           </div>
//         </div>

//         {/* PREMIUM LAYER SEPARATION WRAPPER */}
//         <div className="relative z-10">
//           <div className="space-y-2.5">
//             <div className="flex items-center justify-start gap-2">
//               {renderStatusBadge(project.status)}
//               <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 bg-neutral-100 dark:bg-neutral-800/60 px-2.5 py-0.5 rounded-full">{project.year}</span>
//             </div>
            
//             <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white transition duration-300 group-hover:text-violet-500 group-hover:translate-x-0.5">
//               {project.title}
//             </h3>

//             <p className="text-[14px] leading-6 text-neutral-600 dark:text-neutral-400 line-clamp-2 pt-0.5">
//               {project.description}
//             </p>
//           </div>

//           {/* CHIPS */}
//           {project.highlights && project.highlights.length > 0 && (
//             <div className="mt-4 flex flex-wrap gap-1.5">
//               {project.highlights.slice(0, 3).map((h: string) => (
//                 <span
//                   key={h}
//                   className="text-[10px] px-2 py-0.5 rounded-full bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-300 border border-violet-200/30 dark:border-violet-500/20"
//                 >
//                   {h}
//                 </span>
//               ))}
//             </div>
//           )}

//           {/* METRICS */}
//           {project.metrics && (
//             <div className="mt-5 grid grid-cols-3 gap-2 bg-neutral-50 dark:bg-neutral-950/40 p-2.5 rounded-xl border border-neutral-100 dark:border-neutral-800/40">
//               {project.metrics.map((metric: string, idx: number) => (
//                 <div key={idx} className="text-center">
//                   <div className="text-[11px] font-bold text-neutral-700 dark:text-neutral-300 truncate tracking-tight">{metric.split(' ')[0]}</div>
//                   <div className="text-[9px] font-medium text-neutral-400 dark:text-neutral-500 mt-0.5 truncate">{metric.split(' ').slice(1).join(' ') || 'Value'}</div>
//                 </div>
//               ))}
//             </div>
//           )}

//           <div className="my-5 border-t border-neutral-100 dark:border-neutral-800/40" />

//           {/* STAGGERED TECH STACK */}
//           <motion.div className="flex flex-wrap gap-1.5">
//             {project.tech.map((tech: string) => (
//               <motion.span
//                 key={tech}
//                 variants={chipVariants}
//                 className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-0.5 text-[11px] font-medium text-neutral-600 dark:text-neutral-300 border border-neutral-200/20 dark:border-neutral-700/30"
//               >
//                 {tech}
//               </motion.span>
//             ))}
//           </motion.div>
//         </div>

//         {/* FOOTER */}
//         <div className="mt-auto">
//           <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/60 flex gap-3">
//             {project.live ? (
//               <Link
//                 href={project.live}
//                 target="_blank"
//                 className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-95 group/btn"
//               >
//                 Open Project 
//                 <span className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5">↗</span>
//               </Link>
//             ) : project.status === "Private" ? (
//               <Link
//                 href={project.slug || "#"}
//                 className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-95 group/btn"
//               >
//                 Read Case Study 
//                 <span className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5">↗</span>
//               </Link>
//             ) : (
//               project.slug && (
//                 <Link
//                   href={project.slug}
//                   target={project.slug.startsWith("http") ? "_blank" : "_self"}
//                   className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-95 group/btn"
//                 >
//                   View Source 
//                   <span className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5">↗</span>
//                 </Link>
//               )
//             )}

//             {project.github && (
//               <Link
//                 href={project.github}
//                 target="_blank"
//                 className="inline-flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 p-2.5 text-neutral-600 dark:text-neutral-400 transition hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200/40 dark:border-neutral-700/50"
//                 title="View GitHub"
//               >
//                 <FaGithub size={16} />
//               </Link>
//             )}
//           </div>
//         </div>

//         <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-blue-500/10 z-0" />
//       </motion.div>
//     </HoverCard>
//   );
// }







// "use client";

// import React, { useState, useRef, useMemo } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import { FaGithub } from "react-icons/fa";
// import HoverCard from "@/components/ui/hover-card";
// import ProjectScene from "@/components/ui/project-scene";

// export default function Projects() {
//   const projects = [
//     {
//       title: "Portfolio Website",
//       description:
//         "A modern portfolio built with Next.js, Tailwind CSS, Framer Motion and TypeScript.",
//       scene: "car",
//       tech: ["Next.js", "Tailwind", "TypeScript"],
//       highlights: ["Framer Motion", "Responsive Design", "SEO Optimized"],
//       github: "https://github.com/your-username/portfolio",
//       live: "https://your-portfolio.com",
//       slug: "/blog/portfolio-website", 
//       image: "/images/projects/portfolio.png",
//       status: "Live",
//       year: "2026",
//       metrics: ["99.9% Uptime", "100 LightHouse", "SEO Optimized"],
//     },
//     {
//       title: "PCB Simulation & Test Automation Suite",
//       description:
//         "Engineered an enterprise-grade automation platform for Advantest to optimize hardware verification workflows and reduce repetitive manual hardware checks.",
//       scene: "chip",
//       tech: ["Python", "TCL", "PostgreSQL", "Docker"],
//       highlights: ["Hardware Automation", "Workflow Optimization", "Custom Analytics"],
//       github: null, 
//       live: null,
//       slug: "/blog/advantest-automation-case-study", 
//       image: "/images/projects/advantest-automation.png", 
//       status: "Private",
//       year: "2025",
//       metrics: ["-72% Test Duration", "50+ Workflows", "MNC Deployment"],
//     },
//     {
//       title: "E-commerce Platform",
//       description:
//         "Full-stack ecommerce platform with authentication and Stripe payments.",
//       scene: "server",
//       tech: ["Next.js", "PostgreSQL", "Stripe"],
//       highlights: ["Authentication", "Payments", "Database Optimization"],
//       github: null,
//       live: null,
//       slug: "/blog/ecommerce-platform-case-study",
//       image: "/images/projects/ecommerce.png",
//       status: "Private",
//       year: "2025",
//     },
//     {
//       title: "Automation Tool",
//       description:
//         "Backend automation system for repetitive workflows and engineering processes.",
//       scene: "robot",
//       tech: ["Node.js", "Express", "MongoDB"],
//       highlights: ["CRON Jobs", "REST APIs", "Error Logging"],
//       github: "https://github.com/your-username/automation",
//       live: null,
//       slug: "https://github.com/your-username/automation#readme",
//       image: "/images/projects/automation.png",
//       status: "Open Source",
//       year: "2025",
//       metrics: ["12k Active Users", "100% Free Core", "MIT Licensed"],
//     },
//   ];

//   const productionProjects = projects.filter(p => p.status === "Live" || p.status === "Private");
//   const openSourceProjects = projects.filter(p => p.status === "Open Source" || p.status === "Prototype");

//   // Stagger container setup for whole initial sections
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//       },
//     },
//   };

//   return (
//     <section id="projects" className="section-padding py-24 bg-neutral-50/50 dark:bg-neutral-950/20 overflow-x-clip relative">
//       {/* PREMIUM BACKGROUND AMBIENT ORBS */}
//       <div className="absolute top-1/4 left-10 w-96 h-96 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px] pointer-events-none animate-[pulse_12s_ease-in-out_infinite]" />
//       <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none animate-[pulse_16s_ease-in-out_infinite]" />

//       <div className="container-width px-4 relative z-10">
//         {/* HEADER */}
//         <div className="mb-16 text-center">
//           <h2 className="text-4xl font-bold tracking-tight">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-neutral-500 dark:text-neutral-400">
//             A collection of projects demonstrating full-stack development,
//             automation and UI engineering.
//           </p>
//         </div>

//         {/* GROUP 1: PRODUCTION PROJECTS */}
//         {productionProjects.length > 0 && (
//           <div className="mb-20">
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Production Projects
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <motion.div 
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, margin: "-100px" }}
//               className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start"
//             >
//               {productionProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </motion.div>
//           </div>
//         )}

//         {/* GROUP 2: OPEN SOURCE & EXPERIMENTS */}
//         {openSourceProjects.length > 0 && (
//           <div>
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Open Source & Experiments
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <motion.div 
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, margin: "-100px" }}
//               className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start"
//             >
//               {openSourceProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </motion.div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// /* ================= PROJECT CARD COMPONENT ================= */
// function ProjectCard({ project }: { project: any }) {
//   const cardRef = useRef<HTMLDivElement>(null);
  
//   // Spotlight Trackers
//   const [mouseX, setMouseX] = useState(0);
//   const [mouseY, setMouseY] = useState(0);

//   // 3D Tilt Values
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   // Smooth, high-fidelity 3D physics settings
//   const rotateX = useSpring(
//     useTransform(y, [-0.5, 0.5], [8, -8]),
//     {
//       stiffness: 120,
//       damping: 18,
//       mass: 0.8,
//     }
//   );

//   const rotateY = useSpring(
//     useTransform(x, [-0.5, 0.5], [-10, 10]),
//     {
//       stiffness: 120,
//       damping: 18,
//       mass: 0.8,
//     }
//   );

//   // Independent floating setup configuration
//   const floatConfig = useMemo(() => {
//     const amplitude = 6 + Math.random() * 5;
//     const duration = 9 + Math.random() * 3;

//     return {
//       amplitude,
//       duration,
//       delay: Math.random() * 2,
//     };
//   }, []);

//   // Section entry variants to stagger nicely on initial view
//   const cardEntryVariants = {
//     hidden: { opacity: 0, y: 30 },
//     show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } }
//   };

//   // Upgraded custom hover layout variants (Removed animated box-shadow)
//   const cardHoverVariants = {
//     hover: {
//       y: -10,
//       scale: 1.025,
//       transition: {
//         type: "spring" as const,
//         stiffness: 260,
//         damping: 20,
//         staggerChildren: 0.04,
//       },
//     },
//   };

//   function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
//     if (!cardRef.current) return;
//     const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    
//     // Set Spotlight Positions
//     setMouseX(event.clientX - left);
//     setMouseY(event.clientY - top);

//     // Set Tilt Angles
//     x.set((event.clientX - left) / width - 0.5);
//     y.set((event.clientY - top) / height - 0.5);
//   }

//   function handleMouseLeave() {
//     x.set(0);
//     y.set(0);
//   }

//   const renderStatusBadge = (status: string) => {
//     switch (status) {
//       case "Live":
//         return (
//           <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
//             🟢 Production
//           </span>
//         );
//       case "Open Source":
//         return (
//           <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 px-2.5 py-0.5 rounded-full">
//             &lt;&gt; Open Source
//           </span>
//         );
//       case "Prototype":
//         return (
//           <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 px-2.5 py-0.5 rounded-full">
//             🧪 Prototype
//           </span>
//         );
//       case "Private":
//         return (
//           <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10 px-2.5 py-0.5 rounded-full">
//             🔒 Enterprise
//           </span>
//         );
//       default:
//         return null;
//     }
//   };

//   const chipVariants = {
//     initial: { y: 0 },
//     hover: { y: -3, transition: { type: "spring", stiffness: 300, damping: 12 } }
//   } as const;

//   return (
//     <HoverCard>
//       {/* LAYER 1: OUTSIDE INDEPENDENT FLOATING CONTAINER */}
//       <motion.div
//         animate={{
//           y: [0, -floatConfig.amplitude, 0, floatConfig.amplitude, 0],
//           rotateZ: [0, 0.4, 0, -0.4, 0],
//           scale: [1, 1.008, 1, 0.996, 1],
//         }}
//         transition={{
//           duration: floatConfig.duration,
//           repeat: Infinity,
//           ease: "linear",
//           delay: floatConfig.delay,
//         }}
//       >
//         {/* LAYER 2: INTERIOR RESPONSIVE 3D TILT & GESTURE LAYER */}
//         <motion.div
//           ref={cardRef}
//           variants={{ ...cardEntryVariants, ...cardHoverVariants }}
//           whileHover="hover"
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//           style={{
//             rotateX,
//             rotateY,
//             transformStyle: "preserve-3d",
//             transformPerspective: 1800,
//           }}
//           className="group relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/90 shadow-sm hover:shadow-2xl dark:shadow-black/20 transition-all duration-500 p-6 flex flex-col gap-4 h-full will-change-transform before:absolute before:inset-0 before:rounded-3xl before:p-[1px] before:bg-gradient-to-r before:from-cyan-500/20 before:via-violet-500/20 before:to-blue-500/20 before:opacity-0 group-hover:before:opacity-100 before:pointer-events-none"
//         >
//           {/* PREMIUM SLOW PULSING GLOW */}
//           <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
//             <div className="absolute -top-10 left-1/2 w-32 h-32 bg-violet-400/10 blur-3xl rounded-full animate-[pulse_4s_ease-in-out_infinite]" />
//           </div>

//           {/* MOVING SPOTLIGHT RECTANGLE */}
//           <div 
//             className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
//             style={{
//               background: `radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(124, 58, 237, 0.06), transparent 80%)`
//             }}
//           />

//           <div>
//             {/* IMAGE CONTAINER */}
//             <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-neutral-200/70 dark:border-neutral-800 shadow-sm bg-neutral-100 dark:bg-neutral-950 ring-1 ring-black/5 dark:ring-white/5">
//               <div className="h-full w-full overflow-hidden">
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   fill
//                   className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] group-hover:-translate-y-2"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                 />
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
//             </div>
//           </div>

//           {/* PREMIUM LAYER SEPARATION WRAPPER */}
//           <div className="relative z-10">
//             <div className="space-y-2.5">
//               <div className="flex items-center justify-start gap-2">
//                 {renderStatusBadge(project.status)}
//                 <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 bg-neutral-100 dark:bg-neutral-800/60 px-2.5 py-0.5 rounded-full">{project.year}</span>
//               </div>
              
//               <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white transition duration-300 group-hover:text-violet-500 group-hover:translate-x-0.5">
//                 {project.title}
//               </h3>

//               <p className="text-[14px] leading-6 text-neutral-600 dark:text-neutral-400 line-clamp-2 pt-0.5">
//                 {project.description}
//               </p>
//             </div>

//             {/* CHIPS */}
//             {project.highlights && project.highlights.length > 0 && (
//               <div className="mt-4 flex flex-wrap gap-1.5">
//                 {project.highlights.slice(0, 3).map((h: string) => (
//                   <span
//                     key={h}
//                     className="text-[10px] px-2 py-0.5 rounded-full bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-300 border border-violet-200/30 dark:border-violet-500/20"
//                   >
//                     {h}
//                   </span>
//                 ))}
//               </div>
//             )}

//             {/* METRICS */}
//             {project.metrics && (
//               <div className="mt-5 grid grid-cols-3 gap-2 bg-neutral-50 dark:bg-neutral-950/40 p-2.5 rounded-xl border border-neutral-100 dark:border-neutral-800/40">
//                 {project.metrics.map((metric: string, idx: number) => (
//                   <div key={idx} className="text-center">
//                     <div className="text-[11px] font-bold text-neutral-700 dark:text-neutral-300 truncate tracking-tight">{metric.split(' ')[0]}</div>
//                     <div className="text-[9px] font-medium text-neutral-400 dark:text-neutral-500 mt-0.5 truncate">{metric.split(' ').slice(1).join(' ') || 'Value'}</div>
//                   </div>
//                 ))}
//               </div>
//             )}

//             <div className="my-5 border-t border-neutral-100 dark:border-neutral-800/40" />

//             {/* STAGGERED TECH STACK */}
//             <motion.div className="flex flex-wrap gap-1.5">
//               {project.tech.map((tech: string) => (
//                 <motion.span
//                   key={tech}
//                   variants={chipVariants}
//                   className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-0.5 text-[11px] font-medium text-neutral-600 dark:text-neutral-300 border border-neutral-200/20 dark:border-neutral-700/30"
//                 >
//                   {tech}
//                 </motion.span>
//               ))}
//             </motion.div>
//           </div>

//           {/* FOOTER */}
//           <div className="mt-auto">
//             <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/60 flex gap-3">
//               {project.live ? (
//                 <Link
//                   href={project.live}
//                   target="_blank"
//                   className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-95 group/btn"
//                 >
//                   Open Project 
//                   <span className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5">↗</span>
//                 </Link>
//               ) : project.status === "Private" ? (
//                 <Link
//                   href={project.slug || "#"}
//                   className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-95 group/btn"
//                 >
//                   Read Case Study 
//                   <span className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5">↗</span>
//                 </Link>
//               ) : (
//                 project.slug && (
//                   <Link
//                     href={project.slug}
//                     target={project.slug.startsWith("http") ? "_blank" : "_self"}
//                     className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-95 group/btn"
//                   >
//                     View Source 
//                     <span className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5">↗</span>
//                   </Link>
//                 )
//               )}

//               {project.github && (
//                 <Link
//                   href={project.github}
//                   target="_blank"
//                   className="inline-flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 p-2.5 text-neutral-600 dark:text-neutral-400 transition hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200/40 dark:border-neutral-700/50"
//                   title="View GitHub"
//                 >
//                   <FaGithub size={16} />
//                 </Link>
//               )}
//             </div>
//           </div>

//           <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-blue-500/10 z-0" />
//         </motion.div>
//       </motion.div>
//     </HoverCard>
//   );
// }







// "use client";

// import React, { useState, useRef, useMemo } from "react";
// import Link from "next/link";
// import Image from "next/image";
// // import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import { FaGithub } from "react-icons/fa";
// import { FiExternalLink, FiFileText } from "react-icons/fi";
// import HoverCard from "@/components/ui/hover-card";
// import ProjectScene from "@/components/ui/project-scene";

// export default function Projects() {
//   const projects = [
//     {
//       title: "Portfolio Website",
//       description:
//         "A modern portfolio built with Next.js, Tailwind CSS, Framer Motion and TypeScript.",
//       scene: "car",
//       tech: ["Next.js", "Tailwind", "TypeScript"],
//       highlights: ["Framer Motion", "Responsive Design", "SEO Optimized"],
//       github: "https://github.com/your-username/portfolio",
//       live: "https://your-portfolio.com",
//       slug: "/blog/portfolio-website", 
//       image: "/images/projects/portfolio.png",
//       status: "Live",
//       year: "2026",
//       metrics: ["React", "Next.js", "TypeScript"],
//     },
//     {
//       title: "PCB Simulation & Test Automation Suite",
//       description:
//         "Engineered an enterprise-grade automation platform for Advantest to optimize hardware verification workflows and reduce repetitive manual hardware checks.",
//       scene: "chip",
//       tech: ["Python", "TCL", "PostgreSQL", "Docker"],
//       highlights: ["Hardware Automation", "Workflow Optimization", "Custom Analytics"],
//       github: null, 
//       live: null,
//       slug: "/blog/advantest-automation-case-study", 
//       image: "/images/projects/advantest-automation.png", 
//       status: "Private",
//       year: "2025",
//       metrics: ["50+ Workflows", "72% Faster", "Enterprise"],
//     },
//     {
//       title: "E-commerce Platform",
//       description:
//         "Full-stack ecommerce platform with authentication and Stripe payments.",
//       scene: "server",
//       tech: ["Next.js", "PostgreSQL", "Stripe"],
//       highlights: ["Authentication", "Payments", "Database Optimization"],
//       github: null,
//       live: null,
//       slug: "/blog/ecommerce-platform-case-study",
//       image: "/images/projects/ecommerce.png",
//       status: "Private",
//       year: "2025",
//       metrics: ["12 Modules", "5 APIs", "OAuth2"],
//     },
//     {
//       title: "Automation Tool",
//       description:
//         "Backend automation system for repetitive workflows and engineering processes.",
//       scene: "robot",
//       tech: ["Node.js", "Express", "MongoDB"],
//       highlights: ["CRON Jobs", "REST APIs", "Error Logging"],
//       github: "https://github.com/your-username/automation",
//       live: null,
//       slug: "https://github.com/your-username/automation#readme",
//       image: "/images/projects/automation.png",
//       status: "Open Source",
//       year: "2025",
//       metrics: ["12k Stars", "MIT License", "Open Source"],
//     },
//   ];

//   const productionProjects = projects.filter(p => p.status === "Live" || p.status === "Private");
//   const openSourceProjects = projects.filter(p => p.status === "Open Source" || p.status === "Prototype");

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//       },
//     },
//   };

//   return (
//     <section id="projects" className="section-padding py-24 bg-neutral-50/50 dark:bg-neutral-950/20 overflow-x-clip relative">
//       {/* PREMIUM BACKGROUND AMBIENT ORBS */}
//       <div className="absolute top-1/4 left-10 w-96 h-96 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px] pointer-events-none animate-[pulse_12s_ease-in-out_infinite]" />
//       <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none animate-[pulse_16s_ease-in-out_infinite]" />

//       <div className="container-width px-4 relative z-10">
//         {/* HEADER */}
//         <div className="mb-16 text-center">
//           <h2 className="text-4xl font-bold tracking-tight">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-neutral-500 dark:text-neutral-400">
//             A collection of projects demonstrating full-stack development,
//             automation and UI engineering.
//           </p>
//         </div>

//         {/* GROUP 1: PRODUCTION PROJECTS */}
//         {productionProjects.length > 0 && (
//           <div className="mb-20">
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Production Projects
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <motion.div 
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, margin: "-100px" }}
//               className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start"
//             >
//               {productionProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </motion.div>
//           </div>
//         )}

//         {/* GROUP 2: OPEN SOURCE & EXPERIMENTS */}
//         {openSourceProjects.length > 0 && (
//           <div>
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Open Source & Experiments
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <motion.div 
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, margin: "-100px" }}
//               className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start"
//             >
//               {openSourceProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </motion.div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// /* ================= BROWSER MOCKUP COMPONENT ================= */
// interface BrowserMockupProps {
//   image: string;
//   alt: string;
//   status: string;
//   liveUrl: string | null;
//   title: string;
// }

// /* ================= BROWSER MOCKUP COMPONENT ================= */
// function BrowserMockup({ image, title, status }: { image: string; title: string; status: string }) {
//   return (
//     <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900 shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
//       {/* Browser Bar */}
//       <div className="flex items-center h-7 px-3 bg-neutral-100/10 border-b border-white/5 gap-1.5">
//         <div className="flex gap-1">
//           <div className="w-2 h-2 rounded-full bg-red-500/50" />
//           <div className="w-2 h-2 rounded-full bg-amber-500/50" />
//           <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
//         </div>
//         <div className="ml-4 h-4 flex-1 rounded bg-white/5 text-[10px] flex items-center px-2 text-neutral-400 font-mono">
//           {status === "Private" ? "🔒 internal.secure" : "🌐 app.demo"}
//         </div>
//       </div>
      
//       {/* Content */}
//       <div className="relative h-[calc(100%-28px)] w-full">
//         <Image
//           src={image}
//           alt={title}
//           fill
//           className="object-cover transition-transform duration-700 group-hover:scale-105"
//         />
//         {/* Glassmorphism Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
//       </div>
//     </div>
//   );
// }

// /* ================= PROJECT CARD COMPONENT ================= */
// function ProjectCard({ project }: { project: any }) {
//   return (
//     <motion.div 
//       className="group relative flex flex-col h-full rounded-2xl bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-4 hover:border-violet-500/50 transition-colors"
//       whileHover={{ y: -5 }}
//     >
//       {/* Browser Mockup Area */}
//       <BrowserMockup image={project.image} title={project.title} status={project.status} />

//       {/* Content Area */}
//       <div className="mt-5 flex flex-col flex-1">
//         <div className="flex items-center justify-between mb-3">
//           <h3 className="font-bold text-lg">{project.title}</h3>
//           <span className="text-[10px] uppercase tracking-wider font-bold text-violet-500 bg-violet-500/10 px-2 py-0.5 rounded">
//             {project.year}
//           </span>
//         </div>
        
//         <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4 line-clamp-2">
//           {project.description}
//         </p>

//         {/* Tech Stack Chips */}
//         <div className="flex flex-wrap gap-1.5 mb-4">
//           {project.tech.map((t: string) => (
//             <span key={t} className="text-[10px] font-medium text-neutral-600 dark:text-neutral-400 px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800">
//               {t}
//             </span>
//           ))}
//         </div>

//         {/* Action Bar */}
//         <div className="mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-800 flex gap-2">
//           {project.live ? (
//             <Link href={project.live} className="flex-1 flex items-center justify-center gap-2 text-xs font-semibold py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg transition hover:opacity-80">
//               Live Preview <FiExternalLink size={12} />
//             </Link>
//           ) : (
//             <Link href={project.slug} className="flex-1 flex items-center justify-center gap-2 text-xs font-semibold py-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg transition hover:bg-neutral-200 dark:hover:bg-neutral-700">
//               Case Study <FiFileText size={12} />
//             </Link>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   );
// }





// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { FaGithub } from "react-icons/fa";
// import { FiExternalLink, FiFileText } from "react-icons/fi";

// // Utility helper for class merging to keep styling implementation clean
// const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(" ");

// interface Project {
//   title: string;
//   description: string;
//   scene: string;
//   tech: string[];
//   highlights: string[];
//   github: string | null;
//   live: string | null;
//   slug: string;
//   image: string;
//   status: string;
//   year: string;
//   metrics: string[];
// }

// export default function Projects() {
//   const projects: Project[] = [
//     {
//       title: "Portfolio Website",
//       description:
//         "A modern portfolio built with Next.js, Tailwind CSS, Framer Motion and TypeScript.",
//       scene: "car",
//       tech: ["Next.js", "Tailwind", "TypeScript"],
//       highlights: ["Framer Motion", "Responsive Design", "SEO Optimized"],
//       github: "https://github.com/your-username/portfolio",
//       live: "https://your-portfolio.com",
//       slug: "/blog/portfolio-website",
//       image: "/images/projects/portfolio.png",
//       status: "Live",
//       year: "2026",
//       metrics: ["React", "Next.js", "TypeScript"],
//     },
//     {
//       title: "PCB Simulation & Test Automation Suite",
//       description:
//         "Engineered an enterprise-grade automation platform for Advantest to optimize hardware verification workflows and reduce repetitive manual hardware checks.",
//       scene: "chip",
//       tech: ["Python", "TCL", "PostgreSQL", "Docker"],
//       highlights: ["Hardware Automation", "Workflow Optimization", "Custom Analytics"],
//       github: null,
//       live: null,
//       slug: "/blog/advantest-automation-case-study",
//       image: "/images/projects/advantest-automation.png",
//       status: "Private",
//       year: "2025",
//       metrics: ["50+ Workflows", "72% Faster", "Enterprise"],
//     },
//     {
//       title: "E-commerce Platform",
//       description:
//         "Full-stack ecommerce platform with authentication and Stripe payments.",
//       scene: "server",
//       tech: ["Next.js", "PostgreSQL", "Stripe"],
//       highlights: ["Authentication", "Payments", "Database Optimization"],
//       github: null,
//       live: null,
//       slug: "/blog/ecommerce-platform-case-study",
//       image: "/images/projects/ecommerce.png",
//       status: "Private",
//       year: "2025",
//       metrics: ["12 Modules", "5 APIs", "OAuth2"],
//     },
//     {
//       title: "Automation Tool",
//       description:
//         "Backend automation system for repetitive workflows and engineering processes.",
//       scene: "robot",
//       tech: ["Node.js", "Express", "MongoDB"],
//       highlights: ["CRON Jobs", "REST APIs", "Error Logging"],
//       github: "https://github.com/your-username/automation",
//       live: null,
//       slug: "https://github.com/your-username/automation#readme",
//       image: "/images/projects/automation.png",
//       status: "Open Source",
//       year: "2025",
//       metrics: ["12k Stars", "MIT License", "Open Source"],
//     },
//   ];

//   const productionProjects = projects.filter(p => p.status === "Live" || p.status === "Private");
//   const openSourceProjects = projects.filter(p => p.status === "Open Source" || p.status === "Prototype");

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//       },
//     },
//   };

//   return (
//     <section id="projects" className="section-padding py-24 bg-neutral-50/50 dark:bg-neutral-950/20 overflow-x-clip relative">
//       {/* PREMIUM BACKGROUND AMBIENT ORBS */}
//       <div className="absolute top-1/4 left-10 w-96 h-96 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px] pointer-events-none animate-[pulse_12s_ease-in-out_infinite]" />
//       <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none animate-[pulse_16s_ease-in-out_infinite]" />

//       <div className="container-width px-4 relative z-10">
//         {/* HEADER */}
//         <div className="mb-16 text-center">
//           <h2 className="text-4xl font-bold tracking-tight">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-neutral-500 dark:text-neutral-400">
//             A collection of projects demonstrating full-stack development,
//             automation and UI engineering.
//           </p>
//         </div>

//         {/* GROUP 1: PRODUCTION PROJECTS */}
//         {productionProjects.length > 0 && (
//           <div className="mb-20">
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Production Projects
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <motion.div 
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, margin: "-100px" }}
//               className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start"
//             >
//               {productionProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </motion.div>
//           </div>
//         )}

//         {/* GROUP 2: OPEN SOURCE & EXPERIMENTS */}
//         {openSourceProjects.length > 0 && (
//           <div>
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Open Source & Experiments
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <motion.div 
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, margin: "-100px" }}
//               className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start"
//             >
//               {openSourceProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </motion.div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// /* ================= BROWSER MOCKUP COMPONENT ================= */
// interface BrowserMockupProps {
//   image: string;
//   title: string;
//   status: string;
//   tech: string[];
//   live: string | null;
//   slug: string;
// }

// function BrowserMockup({ image, title, status, tech, live, slug }: BrowserMockupProps) {
//   return (
//     <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900 shadow-2xl transition-all duration-500">
      
//       {/* 2. Project status badge over screenshot */}
//       <div className="absolute top-3 left-3 z-20">
//         <span
//           className={cn(
//             "rounded-full px-2 py-1 text-[10px] font-semibold backdrop-blur-md",
//             status === "Live"
//               ? "bg-emerald-500/20 text-emerald-400 dark:text-emerald-300 border border-emerald-500/30"
//               : status === "Private"
//               ? "bg-amber-500/20 text-amber-400 dark:text-amber-300 border border-amber-500/30"
//               : "bg-violet-500/20 text-violet-400 dark:text-violet-300 border border-violet-500/30"
//           )}
//         >
//           {status}
//         </span>
//       </div>

//       {/* 9. Upgraded Presentation Card Browser Bar */}
//       <div className="flex items-center h-8 px-3 bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 gap-1.5 z-20 relative">
//         <div className="flex gap-1">
//           <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
//           <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
//           <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
//         </div>
//         {/* 1. Clean title-based window layout instead of fake domain string */}
//         <div className="ml-4 h-4 flex-1 rounded-md bg-neutral-200/50 dark:bg-white/5 flex items-center px-3 text-[10px] text-neutral-500 dark:text-neutral-400 font-medium truncate">
//           {title}
//         </div>
//       </div>
      
//       {/* Frame Content Window Area */}
//       <div className="relative h-[calc(100%-32px)] w-full bg-neutral-50 dark:bg-neutral-950">
//         <Image
//           src={image}
//           alt={title}
//           fill
//           className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//           sizes="(max-width: 768px) 100vw, 33vw"
//         />

//         {/* 5. Dynamic Hover Gradient Interaction Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//         {/* 3. Floating Technology Chips on Screenshot Area */}
//         <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 z-20">
//           {tech.slice(0, 3).map((t) => (
//             <span
//               key={t}
//               className="rounded-full bg-black/60 dark:bg-black/50 backdrop-blur-md px-2 py-0.5 text-[10px] text-white border border-white/10 font-medium"
//             >
//               {t}
//             </span>
//           ))}
//         </div>

//         {/* 6. Centered Premium Hover Action Overlay Buttons */}
//         <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center gap-2.5 z-30">
//           {live ? (
//             <Link 
//               href={live} 
//               target="_blank"
//               className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-neutral-900 shadow-sm hover:bg-neutral-100 transition"
//             >
//               View Live <FiExternalLink size={12} />
//             </Link>
//           ) : (
//             <Link 
//               href={slug} 
//               className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-neutral-900 shadow-sm hover:bg-neutral-100 transition"
//             >
//               Case Study <FiFileText size={12} />
//             </Link>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ================= PROJECT CARD COMPONENT ================= */
// function ProjectCard({ project }: { project: Project }) {
//   return (
//     <div className="relative group">
//       {/* 10. Soft Atmospheric Behind-The-Card Ambient Glow */}
//       <div className="absolute -inset-2 bg-gradient-to-r from-violet-500/15 to-cyan-500/15 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl pointer-events-none" />

//       {/* 4. Balanced 3D-Tilt & Translate Hover Base Wrapper */}
//       <motion.div 
//         className="relative flex flex-col h-full rounded-2xl bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 p-4 hover:border-violet-500/30 transition-colors duration-500"
//         style={{ transformStyle: "preserve-3d" }}
//         whileHover={{
//           y: -8,
//           rotateX: 4,
//           rotateY: -4,
//           transition: { duration: 0.3, ease: "easeOut" }
//         }}
//       >
//         {/* Showcase Mockup Frame Area */}
//         <BrowserMockup 
//           image={project.image} 
//           title={project.title} 
//           status={project.status} 
//           tech={project.tech}
//           live={project.live}
//           slug={project.slug}
//         />

//         {/* Typography & Core Details Block */}
//         <div className="mt-5 flex flex-col flex-1">
//           <div className="flex items-center justify-between mb-2">
//             <h3 className="font-bold text-lg text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:text-violet-500 transition-colors duration-300">
//               {project.title}
//             </h3>
//             <span className="text-[11px] font-semibold text-neutral-400 dark:text-neutral-500">
//               {project.year}
//             </span>
//           </div>
          
//           <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-5 line-clamp-2 leading-relaxed">
//             {project.description}
//           </p>

//           {/* 8. Impact & Metrics Grid Section */}
//           <div className="grid grid-cols-3 gap-2 mb-5">
//             {project.metrics.map((metric) => (
//               <div
//                 key={metric}
//                 className="rounded-lg bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200/20 dark:border-neutral-700/20 p-2 text-center text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 truncate"
//               >
//                 {metric}
//               </div>
//             ))}
//           </div>

//           {/* 12. Context-Aware Primary Footer with Repository Surfacing */}
//           <div className="mt-auto flex gap-2 pt-4 border-t border-neutral-100 dark:border-neutral-800/60">
//             {project.github && (
//               <Link
//                 href={project.github}
//                 target="_blank"
//                 className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition shadow-sm"
//                 title="View Source Repository"
//               >
//                 <FaGithub size={16} />
//               </Link>
//             )}

//             {project.live ? (
//               <Link
//                 href={project.live}
//                 target="_blank"
//                 className="flex-1 inline-flex items-center justify-center rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-semibold h-9 shadow-sm hover:opacity-90 transition"
//               >
//                 Live Preview
//               </Link>
//             ) : (
//               <Link
//                 href={project.slug}
//                 className="flex-1 inline-flex items-center justify-center rounded-lg bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 text-xs font-semibold h-9 border border-neutral-200/40 dark:border-neutral-700/40 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
//               >
//                 Case Study
//               </Link>
//             )}
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }





// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { FaGithub } from "react-icons/fa";
// import { FiExternalLink, FiFileText } from "react-icons/fi";

// const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(" ");

// interface Project {
//   title: string;
//   role: string; // Added role badge capability (Refinement 10)
//   description: string;
//   scene: string;
//   tech: string[];
//   highlights: string[];
//   github: string | null;
//   live: string | null;
//   slug: string;
//   image: string;
//   status: string;
//   year: string;
//   impactMetrics: string[]; // Separated metrics semantically from tech stacks (Refinement 4)
// }

// export default function Projects() {
//   const projects: Project[] = [
//     {
//       title: "Portfolio Website",
//       role: "Frontend / Creative Dev",
//       description:
//         "A modern portfolio built with Next.js, Tailwind CSS, Framer Motion and TypeScript.",
//       scene: "car",
//       tech: ["Next.js", "Tailwind", "TypeScript"],
//       highlights: ["Framer Motion", "Responsive Design", "SEO Optimized"],
//       github: "https://github.com/your-username/portfolio",
//       live: "https://your-portfolio.com",
//       slug: "/blog/portfolio-website",
//       image: "/images/projects/portfolio.png",
//       status: "Live",
//       year: "2026",
//       impactMetrics: ["99 Lighthouse", "Vercel Edge", "SEO Opt."],
//     },
//     {
//       title: "PCB Simulation Suite",
//       role: "Automation / Backend",
//       description:
//         "Engineered an enterprise-grade automation platform for Advantest to optimize hardware verification workflows and reduce repetitive manual hardware checks.",
//       scene: "chip",
//       tech: ["Python", "TCL", "PostgreSQL", "Docker"],
//       highlights: ["Hardware Automation", "Workflow Optimization", "Custom Analytics"],
//       github: null,
//       live: null,
//       slug: "/blog/advantest-automation-case-study",
//       image: "/images/projects/advantest-automation.png",
//       status: "Private",
//       year: "2025",
//       impactMetrics: ["50+ Workflows", "72% Faster", "Enterprise"],
//     },
//     {
//       title: "E-commerce Platform",
//       role: "Full Stack Engineer",
//       description:
//         "Full-stack ecommerce platform with authentication and Stripe payments.",
//       scene: "server",
//       tech: ["Next.js", "PostgreSQL", "Stripe"],
//       highlights: ["Authentication", "Payments", "Database Optimization"],
//       github: null,
//       live: null,
//       slug: "/blog/ecommerce-platform-case-study",
//       image: "/images/projects/ecommerce.png",
//       status: "Private",
//       year: "2025",
//       impactMetrics: ["12 Modules", "5 APIs", "OAuth2"],
//     },
//     {
//       title: "Automation Tool",
//       role: "Open Source / Tooling",
//       description:
//         "Backend automation system for repetitive workflows and engineering processes.",
//       scene: "robot",
//       tech: ["Node.js", "Express", "MongoDB"],
//       highlights: ["CRON Jobs", "REST APIs", "Error Logging"],
//       github: "https://github.com/your-username/automation",
//       live: null,
//       slug: "https://github.com/your-username/automation#readme",
//       image: "/images/projects/automation.png",
//       status: "Open Source",
//       year: "2025",
//       impactMetrics: ["12k Stars", "MIT License", "OS Community"],
//     },
//   ];

//   const productionProjects = projects.filter(p => p.status === "Live" || p.status === "Private");
//   const openSourceProjects = projects.filter(p => p.status === "Open Source" || p.status === "Prototype");

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//       },
//     },
//   };

//   return (
//     <section id="projects" className="section-padding py-24 bg-neutral-50/50 dark:bg-neutral-950/20 overflow-x-clip relative">
//       <div className="absolute top-1/4 left-10 w-96 h-96 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px] pointer-events-none animate-[pulse_12s_ease-in-out_infinite]" />
//       <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none animate-[pulse_16s_ease-in-out_infinite]" />

//       <div className="container-width px-4 relative z-10">
//         <div className="mb-16 text-center">
//           <h2 className="text-4xl font-bold tracking-tight">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-neutral-500 dark:text-neutral-400">
//             A collection of projects demonstrating full-stack development,
//             automation and UI engineering.
//           </p>
//         </div>

//         {productionProjects.length > 0 && (
//           <div className="mb-20">
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Production Projects
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <motion.div 
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, margin: "-100px" }}
//               className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start"
//             >
//               {productionProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </motion.div>
//           </div>
//         )}

//         {openSourceProjects.length > 0 && (
//           <div>
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Open Source & Experiments
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <motion.div 
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, margin: "-100px" }}
//               className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start"
//             >
//               {openSourceProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </motion.div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// /* ================= BROWSER MOCKUP COMPONENT ================= */
// interface BrowserMockupProps {
//   image: string;
//   title: string;
//   status: string;
//   tech: string[];
//   live: string | null;
//   slug: string;
// }

// function BrowserMockup({ image, title, status, tech, live, slug }: BrowserMockupProps) {
//   return (
//     /* Refinement 1: Added 'group' class to wrapper container to fix broken group-hover states */
//     <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900 shadow-2xl transition-all duration-500">
      
//       {/* Project status badge over screenshot */}
//       <div className="absolute top-3 left-3 z-20">
//         <span
//           className={cn(
//             "rounded-full px-2 py-1 text-[10px] font-semibold backdrop-blur-md",
//             status === "Live"
//               ? "bg-emerald-500/20 text-emerald-400 dark:text-emerald-300 border border-emerald-500/30"
//               : status === "Private"
//               ? "bg-amber-500/20 text-amber-400 dark:text-amber-300 border border-amber-500/30"
//               : "bg-violet-500/20 text-violet-400 dark:text-violet-300 border border-violet-500/30"
//           )}
//         >
//           {status}
//         </span>
//       </div>

//       {/* Refinement 7: Upgraded with subtle gradient context background + backdrop blur for Apple-level sheen */}
//       <div className="flex items-center h-8 px-3 bg-neutral-100/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 gap-1.5 z-20 relative">
//         <div className="flex gap-1">
//           <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
//           <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
//           <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
//         </div>
//         <div className="ml-4 h-4 flex-1 rounded-md bg-neutral-200/40 dark:bg-white/5 flex items-center px-3 text-[10px] text-neutral-500 dark:text-neutral-400 font-medium truncate">
//           {title}
//         </div>
//       </div>
      
//       {/* Frame Content Window Area */}
//       <div className="relative h-[calc(100%-32px)] w-full bg-neutral-50 dark:bg-neutral-950">
//         {/* Refinement 3: Streamlined Next.js Image component optimization parameters */}
//         <Image
//           src={image}
//           alt={`Screenshot mockup of ${title}`}
//           fill
//           priority={false}
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//         />

//         {/* Dynamic Hover Gradient Interaction Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//         {/* Floating Technology Chips on Screenshot Area */}
//         <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 z-20">
//           {tech.slice(0, 3).map((t) => (
//             <span
//               key={t}
//               className="rounded-full bg-black/60 dark:bg-black/50 backdrop-blur-md px-2 py-0.5 text-[10px] text-white border border-white/10 font-medium"
//             >
//               {t}
//             </span>
//           ))}
//         </div>

//         {/* Refinement 6: Made responsive overlay fully visible on touch devices (md:opacity-0) so interaction loops don't break */}
//         <div className="absolute inset-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 bg-black/40 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center gap-2.5 z-30">
//           {live ? (
//             <Link 
//               href={live} 
//               target="_blank"
//               aria-label={`View live dashboard deployment for ${title}`} // Refinement 5: A11y
//               className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-neutral-900 shadow-sm hover:bg-neutral-100 transition"
//             >
//               View Live <FiExternalLink size={12} />
//             </Link>
//           ) : (
//             <Link 
//               href={slug} 
//               aria-label={`Read case study writeup for ${title}`} // Refinement 5: A11y
//               className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-neutral-900 shadow-sm hover:bg-neutral-100 transition"
//             >
//               Explore Case Study <FiFileText size={12} /> {/* Refinement 9 */}
//             </Link>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ================= PROJECT CARD COMPONENT ================= */
// function ProjectCard({ project }: { project: Project }) {
//   return (
//     <div className="relative group">
//       {/* Soft Atmospheric Behind-The-Card Ambient Glow */}
//       <div className="absolute -inset-2 bg-gradient-to-r from-violet-500/15 to-cyan-500/15 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl pointer-events-none" />

//       {/* Refinement 2: Fixed 3D hardware-acceleration conflict by passing consistent baseline perspective setups */}
//       <motion.div 
//         className="relative flex flex-col h-full rounded-2xl bg-white dark:bg-neutral-900/40 p-4 border border-neutral-200 dark:border-neutral-800 hover:border-violet-500/30 transition-colors duration-500"
//         style={{ transformStyle: "preserve-3d", perspective: 1000 }}
//         whileHover={{
//           y: -8,
//           rotateX: 4,
//           rotateY: -4,
//           transition: { duration: 0.3, ease: "easeOut" }
//         }}
//       >
//         {/* Refinement 8: Injected beautiful pseudo-element border layer for micro-gradient accent styling */}
//         <div className="absolute inset-0 rounded-2xl border border-transparent bg-clip-padding before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-r before:from-violet-500/10 before:to-cyan-500/10 before:-z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//         {/* Showcase Mockup Frame Area */}
//         <BrowserMockup 
//           image={project.image} 
//           title={project.title} 
//           status={project.status} 
//           tech={project.tech}
//           live={project.live}
//           slug={project.slug}
//         />

//         {/* Typography & Core Details Block */}
//         <div className="mt-5 flex flex-col flex-1">
//           {/* Refinement 10: Introduced engineering role categorization badge overhead */}
//           <div className="flex items-center justify-between mb-1.5">
//             <span className="text-[10px] uppercase tracking-wider font-bold text-violet-600 dark:text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-md">
//               {project.role}
//             </span>
//             <span className="text-[11px] font-semibold text-neutral-400 dark:text-neutral-500">
//               {project.year}
//             </span>
//           </div>

//           <div className="flex items-center justify-between mb-2">
//             <h3 className="font-bold text-lg text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:text-violet-500 transition-colors duration-300">
//               {project.title}
//             </h3>
//           </div>
          
//           <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-5 line-clamp-2 leading-relaxed">
//             {project.description}
//           </p>

//           {/* Refinement 4: Clean split separating core operational metrics grids away from structural tech modules */}
//           <div className="grid grid-cols-3 gap-2 mb-5">
//             {project.impactMetrics.map((metric) => (
//               <div
//                 key={metric}
//                 className="rounded-lg bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200/20 dark:border-neutral-700/20 p-2 text-center text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 truncate"
//               >
//                 {metric}
//               </div>
//             ))}
//           </div>

//           {/* Context-Aware Primary Footer with Repository Surfacing */}
//           <div className="mt-auto flex gap-2 pt-4 border-t border-neutral-100 dark:border-neutral-800/60">
//             {project.github && (
//               <Link
//                 href={project.github}
//                 target="_blank"
//                 className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition shadow-sm"
//                 title="View Source Repository"
//                 aria-label={`View GitHub repository for ${project.title}`} // Refinement 5: A11y
//               >
//                 <FaGithub size={16} />
//               </Link>
//             )}

//             {project.live ? (
//               <Link
//                 href={project.live}
//                 target="_blank"
//                 aria-label={`Launch production deployment for ${project.title}`} // Refinement 5: A11y
//                 className="flex-1 inline-flex items-center justify-center rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-semibold h-9 shadow-sm hover:opacity-90 transition"
//               >
//                 Live Preview
//               </Link>
//             ) : (
//               <Link
//                 href={project.slug}
//                 aria-label={`Explore interactive case study document for ${project.title}`} // Refinement 5: A11y
//                 className="flex-1 inline-flex items-center justify-center rounded-lg bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 text-xs font-semibold h-9 border border-neutral-200/40 dark:border-neutral-700/40 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
//               >
//                 Explore Case Study {/* Refinement 9 */}
//               </Link>
//             )}
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }





// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { FaGithub } from "react-icons/fa";
// import { FiExternalLink, FiFileText } from "react-icons/fi";

// const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(" ");

// interface Project {
//   title: string;
//   role: string; // Added role badge capability (Refinement 10)
//   description: string;
//   scene: string;
//   tech: string[];
//   highlights: string[];
//   github: string | null;
//   live: string | null;
//   slug: string;
//   image: string;
//   status: string;
//   year: string;
//   impactMetrics: string[]; // Separated metrics semantically from tech stacks (Refinement 4)
// }

// export default function Projects() {
//   const projects: Project[] = [
//     {
//       title: "Portfolio Website",
//       role: "Frontend / Creative Dev",
//       description:
//         "A modern portfolio built with Next.js, Tailwind CSS, Framer Motion and TypeScript.",
//       scene: "car",
//       tech: ["Next.js", "Tailwind", "TypeScript"],
//       highlights: ["Framer Motion", "Responsive Design", "SEO Optimized"],
//       github: "https://github.com/your-username/portfolio",
//       live: "https://your-portfolio.com",
//       slug: "/blog/portfolio-website",
//       image: "/images/projects/portfolio.png",
//       status: "Live",
//       year: "2026",
//       impactMetrics: ["99 Lighthouse", "Vercel Edge", "SEO Opt."],
//     },
//     {
//       title: "PCB Simulation Suite",
//       role: "Automation / Backend",
//       description:
//         "Engineered an enterprise-grade automation platform for Advantest to optimize hardware verification workflows and reduce repetitive manual hardware checks.",
//       scene: "chip",
//       tech: ["Python", "TCL", "PostgreSQL", "Docker"],
//       highlights: ["Hardware Automation", "Workflow Optimization", "Custom Analytics"],
//       github: null,
//       live: null,
//       slug: "/blog/advantest-automation-case-study",
//       image: "/images/projects/advantest-automation.png",
//       status: "Private",
//       year: "2025",
//       impactMetrics: ["50+ Workflows", "72% Faster", "Enterprise"],
//     },
//     {
//       title: "E-commerce Platform",
//       role: "Full Stack Engineer",
//       description:
//         "Full-stack ecommerce platform with authentication and Stripe payments.",
//       scene: "server",
//       tech: ["Next.js", "PostgreSQL", "Stripe"],
//       highlights: ["Authentication", "Payments", "Database Optimization"],
//       github: null,
//       live: null,
//       slug: "/blog/ecommerce-platform-case-study",
//       image: "/images/projects/ecommerce.png",
//       status: "Private",
//       year: "2025",
//       impactMetrics: ["12 Modules", "5 APIs", "OAuth2"],
//     },
//     {
//       title: "Automation Tool",
//       role: "Open Source / Tooling",
//       description:
//         "Backend automation system for repetitive workflows and engineering processes.",
//       scene: "robot",
//       tech: ["Node.js", "Express", "MongoDB"],
//       highlights: ["CRON Jobs", "REST APIs", "Error Logging"],
//       github: "https://github.com/your-username/automation",
//       live: null,
//       slug: "https://github.com/your-username/automation#readme",
//       image: "/images/projects/automation.png",
//       status: "Open Source",
//       year: "2025",
//       impactMetrics: ["12k Stars", "MIT License", "OS Community"],
//     },
//   ];

//   const productionProjects = projects.filter(p => p.status === "Live" || p.status === "Private");
//   const openSourceProjects = projects.filter(p => p.status === "Open Source" || p.status === "Prototype");

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//       },
//     },
//   };

//   return (
//     <section id="projects" className="section-padding py-24 bg-neutral-50/50 dark:bg-neutral-950/20 overflow-x-clip relative">
//       <div className="absolute top-1/4 left-10 w-96 h-96 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px] pointer-events-none animate-[pulse_12s_ease-in-out_infinite]" />
//       <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none animate-[pulse_16s_ease-in-out_infinite]" />

//       <div className="container-width px-4 relative z-10">
//         <div className="mb-16 text-center">
//           <h2 className="text-4xl font-bold tracking-tight">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-neutral-500 dark:text-neutral-400">
//             A collection of projects demonstrating full-stack development,
//             automation and UI engineering.
//           </p>
//         </div>

//         {productionProjects.length > 0 && (
//           <div className="mb-20">
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Production Projects
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <motion.div 
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, margin: "-100px" }}
//               className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start"
//             >
//               {productionProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </motion.div>
//           </div>
//         )}

//         {openSourceProjects.length > 0 && (
//           <div>
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Open Source & Experiments
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <motion.div 
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, margin: "-100px" }}
//               className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start"
//             >
//               {openSourceProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </motion.div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// /* ================= BROWSER MOCKUP COMPONENT ================= */
// interface BrowserMockupProps {
//   image: string;
//   title: string;
//   status: string;
//   tech: string[];
//   live: string | null;
//   slug: string;
// }

// function BrowserMockup({ image, title, status, tech, live, slug }: BrowserMockupProps) {
//   return (
//     /* Refinement 1: Added 'group' class to wrapper container to fix broken group-hover states */
//     <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900 shadow-2xl transition-all duration-500">
      
//       {/* Project status badge over screenshot */}
//       <div className="absolute top-3 left-3 z-20">
//         <span
//           className={cn(
//             "rounded-full px-2 py-1 text-[10px] font-semibold backdrop-blur-md",
//             status === "Live"
//               ? "bg-emerald-500/20 text-emerald-400 dark:text-emerald-300 border border-emerald-500/30"
//               : status === "Private"
//               ? "bg-amber-500/20 text-amber-400 dark:text-amber-300 border border-amber-500/30"
//               : "bg-violet-500/20 text-violet-400 dark:text-violet-300 border border-violet-500/30"
//           )}
//         >
//           {status}
//         </span>
//       </div>

//       {/* Refinement 7: Upgraded with subtle gradient context background + backdrop blur for Apple-level sheen */}
//       <div className="flex items-center h-8 px-3 bg-neutral-100/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 gap-1.5 z-20 relative">
//         <div className="flex gap-1">
//           <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
//           <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
//           <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
//         </div>
//         <div className="ml-4 h-4 flex-1 rounded-md bg-neutral-200/40 dark:bg-white/5 flex items-center px-3 text-[10px] text-neutral-500 dark:text-neutral-400 font-medium truncate">
//           {title}
//         </div>
//       </div>
      
//       {/* Frame Content Window Area */}
//       <div className="relative h-[calc(100%-32px)] w-full bg-neutral-50 dark:bg-neutral-950">
//         {/* Refinement 3: Streamlined Next.js Image component optimization parameters */}
//         <Image
//           src={image}
//           alt={`Screenshot mockup of ${title}`}
//           fill
//           priority={false}
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//         />

//         {/* Dynamic Hover Gradient Interaction Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//         {/* Floating Technology Chips on Screenshot Area */}
//         <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 z-20">
//           {tech.slice(0, 3).map((t) => (
//             <span
//               key={t}
//               className="rounded-full bg-black/60 dark:bg-black/50 backdrop-blur-md px-2 py-0.5 text-[10px] text-white border border-white/10 font-medium"
//             >
//               {t}
//             </span>
//           ))}
//         </div>

//         {/* Refinement 6: Made responsive overlay fully visible on touch devices (md:opacity-0) so interaction loops don't break */}
//         <div className="absolute inset-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 bg-black/40 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center gap-2.5 z-30">
//           {live ? (
//             <Link 
//               href={live} 
//               target="_blank"
//               aria-label={`View live dashboard deployment for ${title}`} // Refinement 5: A11y
//               className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-neutral-900 shadow-sm hover:bg-neutral-100 transition"
//             >
//               View Live <FiExternalLink size={12} />
//             </Link>
//           ) : (
//             <Link 
//               href={slug} 
//               aria-label={`Read case study writeup for ${title}`} // Refinement 5: A11y
//               className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-neutral-900 shadow-sm hover:bg-neutral-100 transition"
//             >
//               Explore Case Study <FiFileText size={12} /> {/* Refinement 9 */}
//             </Link>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ================= PROJECT CARD COMPONENT ================= */
// function ProjectCard({ project }: { project: Project }) {
//   return (
//     <div className="relative group">
//       {/* Soft Atmospheric Behind-The-Card Ambient Glow */}
//       <div className="absolute -inset-2 bg-gradient-to-r from-violet-500/15 to-cyan-500/15 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl pointer-events-none" />

//       {/* Refinement 2: Fixed 3D hardware-acceleration conflict by passing consistent baseline perspective setups */}
//       <motion.div 
//         className="relative flex flex-col h-full rounded-2xl bg-white dark:bg-neutral-900/40 p-4 border border-neutral-200 dark:border-neutral-800 hover:border-violet-500/30 transition-colors duration-500"
//         style={{ transformStyle: "preserve-3d", perspective: 1000 }}
//         whileHover={{
//           y: -8,
//           rotateX: 4,
//           rotateY: -4,
//           transition: { duration: 0.3, ease: "easeOut" }
//         }}
//       >
//         {/* Refinement 8: Injected beautiful pseudo-element border layer for micro-gradient accent styling */}
//         <div className="absolute inset-0 rounded-2xl border border-transparent bg-clip-padding before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-r before:from-violet-500/10 before:to-cyan-500/10 before:-z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//         {/* Showcase Mockup Frame Area */}
//         <BrowserMockup 
//           image={project.image} 
//           title={project.title} 
//           status={project.status} 
//           tech={project.tech}
//           live={project.live}
//           slug={project.slug}
//         />

//         {/* Typography & Core Details Block */}
//         <div className="mt-5 flex flex-col flex-1">
//           {/* Refinement 10: Introduced engineering role categorization badge overhead */}
//           <div className="flex items-center justify-between mb-1.5">
//             <span className="text-[10px] uppercase tracking-wider font-bold text-violet-600 dark:text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-md">
//               {project.role}
//             </span>
//             <span className="text-[11px] font-semibold text-neutral-400 dark:text-neutral-500">
//               {project.year}
//             </span>
//           </div>

//           <div className="flex items-center justify-between mb-2">
//             <h3 className="font-bold text-lg text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:text-violet-500 transition-colors duration-300">
//               {project.title}
//             </h3>
//           </div>
          
//           <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-5 line-clamp-2 leading-relaxed">
//             {project.description}
//           </p>

//           {/* Refinement 4: Clean split separating core operational metrics grids away from structural tech modules */}
//           <div className="grid grid-cols-3 gap-2 mb-5">
//             {project.impactMetrics.map((metric) => (
//               <div
//                 key={metric}
//                 className="rounded-lg bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200/20 dark:border-neutral-700/20 p-2 text-center text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 truncate"
//               >
//                 {metric}
//               </div>
//             ))}
//           </div>

//           {/* Context-Aware Primary Footer with Repository Surfacing */}
//           <div className="mt-auto flex gap-2 pt-4 border-t border-neutral-100 dark:border-neutral-800/60">
//             {project.github && (
//               <Link
//                 href={project.github}
//                 target="_blank"
//                 className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition shadow-sm"
//                 title="View Source Repository"
//                 aria-label={`View GitHub repository for ${project.title}`} // Refinement 5: A11y
//               >
//                 <FaGithub size={16} />
//               </Link>
//             )}

//             {project.live ? (
//               <Link
//                 href={project.live}
//                 target="_blank"
//                 aria-label={`Launch production deployment for ${project.title}`} // Refinement 5: A11y
//                 className="flex-1 inline-flex items-center justify-center rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-semibold h-9 shadow-sm hover:opacity-90 transition"
//               >
//                 Live Preview
//               </Link>
//             ) : (
//               <Link
//                 href={project.slug}
//                 aria-label={`Explore interactive case study document for ${project.title}`} // Refinement 5: A11y
//                 className="flex-1 inline-flex items-center justify-center rounded-lg bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 text-xs font-semibold h-9 border border-neutral-200/40 dark:border-neutral-700/40 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
//               >
//                 Explore Case Study {/* Refinement 9 */}
//               </Link>
//             )}
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }





// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { FaGithub } from "react-icons/fa";
// import { FiExternalLink, FiFileText, FiCode } from "react-icons/fi";

// const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(" ");

// // Refinement 1: Structured visibility type safety
// export type ProjectVisibility = "live" | "private" | "open-source" | "personal";

// interface Project {
//   title: string;
//   role: string;
//   description: string;
//   scene: string;
//   tech: string[];
//   highlights: string[];
//   github: string | null;
//   live: string | null;
//   slug: string;
//   image: string;
//   status: ProjectVisibility; // Enforced strict visibility variant types
//   year: string;
//   impactMetrics: string[];
//   isEnterprise?: boolean; // Refinement 8: Future scalability flag
// }

// export default function Projects() {
//   // Refinement 2 & 3: Included mock data for clean local/personal configurations alongside standard architectures
//   const projects: Project[] = [
//     {
//       title: "Portfolio Website",
//       role: "Frontend / Creative Dev",
//       description:
//         "A modern portfolio built with Next.js, Tailwind CSS, Framer Motion and TypeScript.",
//       scene: "car",
//       tech: ["Next.js", "Tailwind", "TypeScript"],
//       highlights: ["Framer Motion", "Responsive Design", "SEO Optimized"],
//       github: "https://github.com/your-username/portfolio",
//       live: "https://your-portfolio.com",
//       slug: "/blog/portfolio-website",
//       image: "/images/projects/portfolio.png",
//       status: "live",
//       year: "2026",
//       impactMetrics: ["99 Lighthouse", "Vercel Edge", "SEO Opt."],
//     },
//     {
//       title: "PCB Simulation Suite",
//       role: "Automation / Backend",
//       description:
//         "Engineered an enterprise-grade automation platform for Advantest to optimize hardware verification workflows.",
//       scene: "chip",
//       tech: ["Python", "TCL", "PostgreSQL", "Docker"],
//       highlights: ["Hardware Automation", "Workflow Optimization", "Custom Analytics"],
//       github: null,
//       live: null,
//       slug: "/blog/advantest-automation-case-study",
//       image: "/images/projects/advantest-automation.png",
//       status: "private",
//       year: "2025",
//       impactMetrics: ["50+ Workflows", "72% Faster", "Enterprise"],
//       isEnterprise: true,
//     },
//     {
//       title: "Automation Tool",
//       role: "Open Source / Tooling",
//       description:
//         "Backend automation system for repetitive workflows and engineering processes.",
//       scene: "robot",
//       tech: ["Node.js", "Express", "MongoDB"],
//       highlights: ["CRON Jobs", "REST APIs", "Error Logging"],
//       github: "https://github.com/your-username/automation",
//       live: null,
//       slug: "https://github.com/your-username/automation#readme",
//       image: "/images/projects/automation.png",
//       status: "open-source",
//       year: "2025",
//       impactMetrics: ["12k Stars", "MIT License", "OS Community"],
//     },
//     {
//       title: "CLI Task Manager",
//       role: "Personal Tooling / DX",
//       description: "An intuitive, blazing-fast command line environment tool for tracking micro-tasks offline locally.",
//       scene: "terminal",
//       tech: ["Node.js", "Inquirer"],
//       highlights: ["CLI UX", "Productivity", "JSON Storage"],
//       github: "https://github.com/your-username/cli-task-manager",
//       live: null,
//       slug: "/blog/cli-task-manager",
//       image: "/images/projects/cli.png",
//       status: "personal",
//       year: "2025",
//       impactMetrics: ["Fast CLI", "Offline", "Personal Tool"],
//     }
//   ];

//   const productionProjects = projects.filter(p => p.status === "live" || p.status === "private");
//   const openSourceProjects = projects.filter(p => p.status === "open-source" || p.status === "personal");

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//       },
//     },
//   };

//   return (
//     <section id="projects" className="section-padding py-24 bg-neutral-50/50 dark:bg-neutral-950/20 overflow-x-clip relative">
//       <div className="absolute top-1/4 left-10 w-96 h-96 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px] pointer-events-none animate-[pulse_12s_ease-in-out_infinite]" />
//       <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none animate-[pulse_16s_ease-in-out_infinite]" />

//       <div className="container-width px-4 relative z-10">
//         <div className="mb-16 text-center">
//           <h2 className="text-4xl font-bold tracking-tight">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-neutral-500 dark:text-neutral-400">
//             A collection of projects demonstrating full-stack development,
//             automation and UI engineering.
//           </p>
//         </div>

//         {productionProjects.length > 0 && (
//           <div className="mb-20">
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Production & Commercial Releases
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <motion.div 
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, margin: "-100px" }}
//               className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start"
//             >
//               {productionProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </motion.div>
//           </div>
//         )}

//         {openSourceProjects.length > 0 && (
//           <div>
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Open Source & Engineering Tooling
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <motion.div 
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, margin: "-100px" }}
//               className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start"
//             >
//               {openSourceProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </motion.div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// /* ================= BROWSER MOCKUP COMPONENT ================= */
// interface BrowserMockupProps {
//   image: string;
//   title: string;
//   status: ProjectVisibility;
//   tech: string[];
//   live: string | null;
//   slug: string;
//   github: string | null;
// }

// // Refinement 4: Centralized lookup object for cleanly styled variants mapping
// const statusStyles: Record<ProjectVisibility, { style: string; label: string }> = {
//   live: { style: "bg-emerald-500/20 text-emerald-400 dark:text-emerald-300 border-emerald-500/30", label: "Live" },
//   private: { style: "bg-amber-500/20 text-amber-400 dark:text-amber-300 border-amber-500/30", label: "Private" },
//   "open-source": { style: "bg-violet-500/20 text-violet-400 dark:text-violet-300 border-violet-500/30", label: "Open Source" },
//   personal: { style: "bg-blue-500/20 text-blue-400 dark:text-blue-300 border-blue-500/30", label: "Personal" },
// };

// function BrowserMockup({ image, title, status, tech, live, slug, github }: BrowserMockupProps) {
//   const currentBadge = statusStyles[status];

//   return (
//     <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900 shadow-2xl transition-all duration-500">
      
//       {/* Project status badge over screenshot */}
//       <div className="absolute top-3 left-3 z-20">
//         <span className={cn("rounded-full px-2 py-1 text-[10px] font-semibold backdrop-blur-md border", currentBadge.style)}>
//           {currentBadge.label}
//         </span>
//       </div>

//       <div className="flex items-center h-8 px-3 bg-neutral-100/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 gap-1.5 z-20 relative">
//         <div className="flex gap-1">
//           <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
//           <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
//           <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
//         </div>
//         <div className="ml-4 h-4 flex-1 rounded-md bg-neutral-200/40 dark:bg-white/5 flex items-center px-3 text-[10px] text-neutral-500 dark:text-neutral-400 font-medium truncate">
//           {title}
//         </div>
//       </div>
      
//       <div className="relative h-[calc(100%-32px)] w-full bg-neutral-50 dark:bg-neutral-950">
//         <Image
//           src={image}
//           alt={`Screenshot mockup of ${title}`}
//           fill
//           priority={false}
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//         />

//         <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//         <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 z-20">
//           {tech.slice(0, 3).map((t) => (
//             <span
//               key={t}
//               className="rounded-full bg-black/60 dark:bg-black/50 backdrop-blur-md px-2 py-0.5 text-[10px] text-white border border-white/10 font-medium"
//             >
//               {t}
//             </span>
//           ))}
//         </div>

//         {/* Refinement 5 & 6: Reconstructed semantic routing structure for CTA target logic overlays */}
//         <div className="absolute inset-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 bg-black/40 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center gap-2.5 z-30">
//           {status === "live" && live && (
//             <Link 
//               href={live} 
//               target="_blank"
//               aria-label={`View live deployment for ${title}`}
//               className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-neutral-900 shadow-sm hover:bg-neutral-100 transition"
//             >
//               View Live <FiExternalLink size={12} />
//             </Link>
//           )}

//           {(status === "personal" || status === "open-source") && github && (
//             <Link 
//               href={github} 
//               target="_blank"
//               aria-label={`Inspect source repository code for ${title}`}
//               className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-neutral-900 shadow-sm hover:bg-neutral-100 transition"
//             >
//               Code Architecture <FiCode size={12} />
//             </Link>
//           )}

//           {status !== "live" && (
//             <Link 
//               href={slug} 
//               aria-label={`Read context case details for ${title}`}
//               className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-900 text-white border border-neutral-700/50 px-3 py-1.5 text-xs font-semibold shadow-sm hover:bg-neutral-800 transition"
//             >
//               {status === "personal" ? "View Project Details" : "Explore Case Study"}
//             </Link>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ================= PROJECT CARD COMPONENT ================= */
// function ProjectCard({ project }: { project: Project }) {
//   return (
//     <div className="relative group">
//       <div className="absolute -inset-2 bg-gradient-to-r from-violet-500/15 to-cyan-500/15 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl pointer-events-none" />

//       <motion.div 
//         className="relative flex flex-col h-full rounded-2xl bg-white dark:bg-neutral-900/40 p-4 border border-neutral-200 dark:border-neutral-800 hover:border-violet-500/30 transition-colors duration-500"
//         style={{ transformStyle: "preserve-3d", perspective: 1000 }}
//         whileHover={{
//           y: -8,
//           rotateX: 4,
//           rotateY: -4,
//           transition: { duration: 0.3, ease: "easeOut" }
//         }}
//       >
//         <div className="absolute inset-0 rounded-2xl border border-transparent bg-clip-padding before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-r before:from-violet-500/10 before:to-cyan-500/10 before:-z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//         <BrowserMockup 
//           image={project.image} 
//           title={project.title} 
//           status={project.status} 
//           tech={project.tech}
//           live={project.live}
//           slug={project.slug}
//           github={project.github}
//         />

//         <div className="mt-5 flex flex-col flex-1">
//           <div className="flex items-center justify-between mb-1.5">
//             {/* Refinement 7: Explicit visual tag differences matching custom states */}
//             <span className={cn(
//               "text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md",
//               project.status === "personal" 
//                 ? "text-blue-600 dark:text-blue-400 bg-blue-500/10" 
//                 : "text-violet-600 dark:text-violet-400 bg-violet-500/10"
//             )}>
//               {project.role}
//             </span>
//             <span className="text-[11px] font-semibold text-neutral-400 dark:text-neutral-500">
//               {project.year}
//             </span>
//           </div>

//           <div className="flex items-center justify-between mb-2">
//             <h3 className="font-bold text-lg text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:text-violet-500 transition-colors duration-300">
//               {project.title}
//             </h3>
//           </div>
          
//           <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-5 line-clamp-2 leading-relaxed">
//             {project.description}
//           </p>

//           <div className="grid grid-cols-3 gap-2 mb-5">
//             {project.impactMetrics.map((metric) => (
//               <div
//                 key={metric}
//                 className="rounded-lg bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200/20 dark:border-neutral-700/20 p-2 text-center text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 truncate"
//               >
//                 {metric}
//               </div>
//             ))}
//           </div>

//           {/* Refinement 5 & 6: Realigned primary footer action bar context mappings */}
//           <div className="mt-auto flex gap-2 pt-4 border-t border-neutral-100 dark:border-neutral-800/60">
//             {project.github && (
//               <Link
//                 href={project.github}
//                 target="_blank"
//                 className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition shadow-sm"
//                 title="View Source Repository"
//                 aria-label={`View GitHub repository for ${project.title}`}
//               >
//                 <FaGithub size={16} />
//               </Link>
//             )}

//             {project.status === "live" && project.live ? (
//               <Link
//                 href={project.live}
//                 target="_blank"
//                 aria-label={`Launch production deployment for ${project.title}`}
//                 className="flex-1 inline-flex items-center justify-center rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-semibold h-9 shadow-sm hover:opacity-90 transition"
//               >
//                 Live Preview
//               </Link>
//             ) : (
//               <Link
//                 href={project.slug}
//                 aria-label={`Explore information for ${project.title}`}
//                 className="flex-1 inline-flex items-center justify-center rounded-lg bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 text-xs font-semibold h-9 border border-neutral-200/40 dark:border-neutral-700/40 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
//               >
//                 {project.status === "personal" ? "View Project Details" : "Explore Case Study"}
//               </Link>
//             )}
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }




// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { FaGithub } from "react-icons/fa";
// import { FiExternalLink, FiFileText, FiCode } from "react-icons/fi";

// const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(" ");

// // Refinement 5: Convert to enum-like object for strict status string safety
// export const ProjectStatus = {
//   LIVE: "live",
//   PRIVATE: "private",
//   OPEN_SOURCE: "open-source",
//   PERSONAL: "personal",
// } as const;

// export type ProjectVisibility = typeof ProjectStatus[keyof typeof ProjectStatus];

// interface Project {
//   title: string;
//   role: string;
//   description: string;
//   scene: string;
//   tech: string[];
//   highlights: string[];
//   github: string | null;
//   live: string | null;
//   slug: string;
//   image: string;
//   status: ProjectVisibility;
//   year: string;
//   impactMetrics: string[];
//   isEnterprise?: boolean;
// }

// // Refinement 4 & 6: Centralized lookups for status badges, role markers, and unified CTA logic
// const statusConfig: Record<ProjectVisibility, { style: string; badgeStyle: string; label: string }> = {
//   [ProjectStatus.LIVE]: { 
//     style: "bg-emerald-500/20 text-emerald-400 dark:text-emerald-300 border-emerald-500/30", 
//     badgeStyle: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10",
//     label: "Live" 
//   },
//   [ProjectStatus.PRIVATE]: { 
//     style: "bg-amber-500/20 text-amber-400 dark:text-amber-300 border-amber-500/30", 
//     badgeStyle: "text-amber-600 dark:text-amber-400 bg-amber-500/10",
//     label: "Private" 
//   },
//   [ProjectStatus.OPEN_SOURCE]: { 
//     style: "bg-violet-500/20 text-violet-400 dark:text-violet-300 border-violet-500/30", 
//     badgeStyle: "text-violet-600 dark:text-violet-400 bg-violet-500/10",
//     label: "Open Source" 
//   },
//   [ProjectStatus.PERSONAL]: { 
//     style: "bg-blue-500/20 text-blue-400 dark:text-blue-300 border-blue-500/30", 
//     badgeStyle: "text-blue-600 dark:text-blue-400 bg-blue-500/10",
//     label: "Personal" 
//   },
// };

// function getPrimaryAction(project: Project) {
//   switch (project.status) {
//     case ProjectStatus.LIVE:
//       return { label: "Live Preview", href: project.live ?? "#", icon: FiExternalLink, isExternal: true };
//     case ProjectStatus.OPEN_SOURCE:
//       return { label: "View Code", href: project.github ?? "#", icon: FiCode, isExternal: true };
//     case ProjectStatus.PERSONAL:
//       return { label: "View Project", href: project.github ?? project.slug, icon: FiCode, isExternal: !!project.github };
//     case ProjectStatus.PRIVATE:
//       return { label: "Explore Case Study", href: project.slug, icon: FiFileText, isExternal: false };
//     default:
//       return { label: "View Details", href: project.slug, icon: FiFileText, isExternal: false };
//   }
// }

// export default function Projects() {
//   const projects: Project[] = [
//     {
//       title: "Portfolio Website",
//       role: "Frontend / Creative Dev",
//       description: "A modern portfolio built with Next.js, Tailwind CSS, Framer Motion and TypeScript.",
//       scene: "car",
//       tech: ["Next.js", "Tailwind", "TypeScript"],
//       highlights: ["Framer Motion", "Responsive Design", "SEO Optimized"],
//       github: "https://github.com/your-username/portfolio",
//       live: "https://your-portfolio.com",
//       slug: "/blog/portfolio-website",
//       image: "/images/projects/portfolio.png",
//       status: ProjectStatus.LIVE,
//       year: "2026",
//       impactMetrics: ["99 Lighthouse", "Vercel Edge", "SEO Opt."],
//     },
//     {
//       title: "PCB Simulation Suite",
//       role: "Automation / Backend",
//       description: "Engineered an enterprise-grade automation platform for Advantest to optimize hardware verification workflows.",
//       scene: "chip",
//       tech: ["Python", "TCL", "PostgreSQL", "Docker"],
//       highlights: ["Hardware Automation", "Workflow Optimization", "Custom Analytics"],
//       github: null,
//       live: null,
//       slug: "/blog/advantest-automation-case-study",
//       image: "/images/projects/advantest-automation.png",
//       status: ProjectStatus.PRIVATE,
//       year: "2025",
//       impactMetrics: ["50+ Workflows", "72% Faster", "Enterprise"],
//       isEnterprise: true,
//     },
//     {
//       title: "Automation Tool",
//       role: "Open Source / Tooling",
//       description: "Backend automation system for repetitive workflows and engineering processes.",
//       scene: "robot",
//       tech: ["Node.js", "Express", "MongoDB"],
//       highlights: ["CRON Jobs", "REST APIs", "Error Logging"],
//       github: "https://github.com/your-username/automation",
//       live: null,
//       slug: "https://github.com/your-username/automation#readme",
//       image: "/images/projects/automation.png",
//       status: ProjectStatus.OPEN_SOURCE,
//       year: "2025",
//       impactMetrics: ["12k Stars", "MIT License", "OS Community"],
//     },
//     {
//       title: "CLI Task Manager",
//       role: "Personal Tooling / DX",
//       description: "An intuitive, blazing-fast command line environment tool for tracking micro-tasks offline locally.",
//       scene: "terminal",
//       tech: ["Node.js", "Inquirer"],
//       highlights: ["CLI UX", "Productivity", "JSON Storage"],
//       github: "https://github.com/your-username/cli-task-manager",
//       live: null,
//       slug: "/blog/cli-task-manager",
//       image: "/images/projects/cli.png",
//       status: ProjectStatus.PERSONAL,
//       year: "2025",
//       impactMetrics: ["Fast CLI", "Offline", "Personal Tool"],
//     }
//   ];

//   const productionProjects = projects.filter(p => p.status === ProjectStatus.LIVE || p.status === ProjectStatus.PRIVATE);
//   const openSourceProjects = projects.filter(p => p.status === ProjectStatus.OPEN_SOURCE || p.status === ProjectStatus.PERSONAL);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15 },
//     },
//   };

//   return (
//     <section id="projects" className="section-padding py-24 bg-neutral-50/50 dark:bg-neutral-950/20 overflow-x-clip relative">
//       <div className="absolute top-1/4 left-10 w-96 h-96 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px] pointer-events-none animate-[pulse_12s_ease-in-out_infinite]" />
//       <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none animate-[pulse_16s_ease-in-out_infinite]" />

//       <div className="container-width px-4 relative z-10">
//         <div className="mb-16 text-center">
//           <h2 className="text-4xl font-bold tracking-tight">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-neutral-500 dark:text-neutral-400">
//             A collection of projects demonstrating full-stack development, automation and UI engineering.
//           </p>
//         </div>

//         {productionProjects.length > 0 && (
//           <div className="mb-20">
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Production & Commercial Releases
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <motion.div 
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, margin: "-100px" }}
//               className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start"
//             >
//               {productionProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </motion.div>
//           </div>
//         )}

//         {openSourceProjects.length > 0 && (
//           <div>
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Open Source & Engineering Tooling
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <motion.div 
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, margin: "-100px" }}
//               className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start"
//             >
//               {openSourceProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </motion.div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// /* ================= BROWSER MOCKUP COMPONENT ================= */
// interface BrowserMockupProps {
//   project: Project;
// }

// function BrowserMockup({ project }: BrowserMockupProps) {
//   const { title, image, status, tech } = project;
//   const config = statusConfig[status];
//   const primaryAction = getPrimaryAction(project);
//   const Icon = primaryAction.icon;

//   return (
//     <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900 shadow-2xl transition-all duration-500">
      
//       {/* Project status badge over screenshot */}
//       <div className="absolute top-3 left-3 z-20">
//         <span className={cn("rounded-full px-2 py-1 text-[10px] font-semibold backdrop-blur-md border", config.style)}>
//           {config.label}
//         </span>
//       </div>

//       <div className="flex items-center h-8 px-3 bg-neutral-100/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 gap-1.5 z-20 relative">
//         <div className="flex gap-1">
//           <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
//           <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
//           <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
//         </div>
//         <div className="ml-4 h-4 flex-1 rounded-md bg-neutral-200/40 dark:bg-white/5 flex items-center px-3 text-[10px] text-neutral-500 dark:text-neutral-400 font-medium truncate">
//           {title}
//         </div>
//       </div>
      
//       <div className="relative h-[calc(100%-32px)] w-full bg-neutral-50 dark:bg-neutral-950">
//         <Image
//           src={image}
//           alt={`Screenshot mockup of ${title}`}
//           fill
//           priority={false}
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//         />

//         <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//         <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 z-20">
//           {tech.slice(0, 3).map((t) => (
//             <span
//               key={t}
//               className="rounded-full bg-black/60 dark:bg-black/50 backdrop-blur-md px-2 py-0.5 text-[10px] text-white border border-white/10 font-medium"
//             >
//               {t}
//             </span>
//           ))}
//         </div>

//         {/* Unified Overlay CTA Logic using the Primary Action Resolver */}
//         <div className="absolute inset-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 bg-black/40 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center gap-2.5 z-30">
//           <Link 
//             href={primaryAction.href} 
//             target={primaryAction.isExternal ? "_blank" : undefined}
//             aria-label={`${primaryAction.label} for ${title}`}
//             className="inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-xs font-semibold text-neutral-900 shadow-sm hover:bg-neutral-100 transition"
//           >
//             {primaryAction.label} <Icon size={12} />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ================= PROJECT CARD COMPONENT ================= */
// function ProjectCard({ project }: { project: Project }) {
//   const primaryAction = getPrimaryAction(project);
//   const config = statusConfig[project.status];

//   return (
//     <div className="relative group">
//       <div className="absolute -inset-2 bg-gradient-to-r from-violet-500/15 to-cyan-500/15 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl pointer-events-none" />

//       <motion.div 
//         className="relative flex flex-col h-full rounded-2xl bg-white dark:bg-neutral-900/40 p-4 border border-neutral-200 dark:border-neutral-800 hover:border-violet-500/30 transition-colors duration-500"
//         style={{ transformStyle: "preserve-3d", perspective: 1000 }}
//         whileHover={{
//           y: -8,
//           rotateX: 4,
//           rotateY: -4,
//           transition: { duration: 0.3, ease: "easeOut" }
//         }}
//       >
//         <div className="absolute inset-0 rounded-2xl border border-transparent bg-clip-padding before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-r before:from-violet-500/10 before:to-cyan-500/10 before:-z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//         <BrowserMockup project={project} />

//         <div className="mt-5 flex flex-col flex-1">
//           <div className="flex items-center justify-between mb-1.5">
//             <span className={cn("text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md", config.badgeStyle)}>
//               {project.role}
//             </span>
//             <span className="text-[11px] font-semibold text-neutral-400 dark:text-neutral-500">
//               {project.year}
//             </span>
//           </div>

//           <div className="flex items-center justify-between mb-2">
//             <h3 className="font-bold text-lg text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:text-violet-500 transition-colors duration-300">
//               {project.title}
//             </h3>
//           </div>
          
//           <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-5 line-clamp-2 leading-relaxed">
//             {project.description}
//           </p>

//           <div className="grid grid-cols-3 gap-2 mb-5">
//             {project.impactMetrics.map((metric) => (
//               <div
//                 key={metric}
//                 className="rounded-lg bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200/20 dark:border-neutral-700/20 p-2 text-center text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 truncate"
//               >
//                 {metric}
//               </div>
//             ))}
//           </div>

//           {/* Unified Primary Footer Action Bar Mappings */}
//           <div className="mt-auto flex gap-2 pt-4 border-t border-neutral-100 dark:border-neutral-800/60">
//             {project.github && (
//               <Link
//                 href={project.github}
//                 target="_blank"
//                 className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition shadow-sm"
//                 title="View Source Repository"
//                 aria-label={`View GitHub repository for ${project.title}`}
//               >
//                 <FaGithub size={16} />
//               </Link>
//             )}

//             <Link
//               href={primaryAction.href}
//               target={primaryAction.isExternal ? "_blank" : undefined}
//               aria-label={`${primaryAction.label} for ${project.title}`}
//               className={cn(
//                 "flex-1 inline-flex items-center justify-center rounded-lg text-xs font-semibold h-9 border transition shadow-sm",
//                 project.status === ProjectStatus.LIVE
//                   ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 border-transparent"
//                   : "bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 border-neutral-200/40 dark:border-neutral-700/40 hover:bg-neutral-200 dark:hover:bg-neutral-700"
//               )}
//             >
//               {primaryAction.label}
//             </Link>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }





// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { FaGithub } from "react-icons/fa";
// import { FiExternalLink, FiFileText, FiCode } from "react-icons/fi";

// const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(" ");

// // Refinement 5: Convert to enum-like object for strict status string safety
// export const ProjectStatus = {
//   LIVE: "live",
//   PRIVATE: "private",
//   OPEN_SOURCE: "open-source",
//   PERSONAL: "personal",
// } as const;

// export type ProjectVisibility = typeof ProjectStatus[keyof typeof ProjectStatus];

// interface Project {
//   title: string;
//   role: string;
//   description: string;
//   scene: string;
//   tech: string[];
//   highlights: string[];
//   github: string | null;
//   live: string | null;
//   slug: string;
//   image: string;
//   status: ProjectVisibility;
//   year: string;
//   impactMetrics: string[];
//   isEnterprise?: boolean;
// }

// // Refinement 4 & 6: Centralized lookups for status badges, role markers, and unified CTA logic
// const statusConfig: Record<ProjectVisibility, { style: string; badgeStyle: string; label: string }> = {
//   [ProjectStatus.LIVE]: { 
//     style: "bg-emerald-500/20 text-emerald-400 dark:text-emerald-300 border-emerald-500/30", 
//     badgeStyle: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10",
//     label: "Live" 
//   },
//   [ProjectStatus.PRIVATE]: { 
//     style: "bg-amber-500/20 text-amber-400 dark:text-amber-300 border-amber-500/30", 
//     badgeStyle: "text-amber-600 dark:text-amber-400 bg-amber-500/10",
//     label: "Private" 
//   },
//   [ProjectStatus.OPEN_SOURCE]: { 
//     style: "bg-violet-500/20 text-violet-400 dark:text-violet-300 border-violet-500/30", 
//     badgeStyle: "text-violet-600 dark:text-violet-400 bg-violet-500/10",
//     label: "Open Source" 
//   },
//   [ProjectStatus.PERSONAL]: { 
//     style: "bg-blue-500/20 text-blue-400 dark:text-blue-300 border-blue-500/30", 
//     badgeStyle: "text-blue-600 dark:text-blue-400 bg-blue-500/10",
//     label: "Personal" 
//   },
// };

// function getPrimaryAction(project: Project) {
//   switch (project.status) {
//     case ProjectStatus.LIVE:
//       return { label: "Live Preview", href: project.live ?? "#", icon: FiExternalLink, isExternal: true };
//     case ProjectStatus.OPEN_SOURCE:
//       return { label: "View Code", href: project.github ?? "#", icon: FiCode, isExternal: true };
//     case ProjectStatus.PERSONAL:
//       return { label: "View Project", href: project.github ?? project.slug, icon: FiCode, isExternal: !!project.github };
//     case ProjectStatus.PRIVATE:
//       return { label: "Explore Case Study", href: project.slug, icon: FiFileText, isExternal: false };
//     default:
//       return { label: "View Details", href: project.slug, icon: FiFileText, isExternal: false };
//   }
// }

// export default function Projects() {
//   const projects: Project[] = [
//     {
//       title: "Portfolio Website",
//       role: "Frontend / Creative Dev",
//       description: "A modern portfolio built with Next.js, Tailwind CSS, Framer Motion and TypeScript.",
//       scene: "car",
//       tech: ["Next.js", "Tailwind", "TypeScript"],
//       highlights: ["Framer Motion", "Responsive Design", "SEO Optimized"],
//       github: "https://github.com/your-username/portfolio",
//       live: "https://your-portfolio.com",
//       slug: "/blog/portfolio-website",
//       image: "/images/projects/portfolio.png",
//       status: ProjectStatus.LIVE,
//       year: "2026",
//       impactMetrics: ["99 Lighthouse", "Vercel Edge", "SEO Opt."],
//     },
//     {
//       title: "PCB Simulation Suite",
//       role: "Automation / Backend",
//       description: "Engineered an enterprise-grade automation platform for Advantest to optimize hardware verification workflows.",
//       scene: "chip",
//       tech: ["Python", "TCL", "PostgreSQL", "Docker"],
//       highlights: ["Hardware Automation", "Workflow Optimization", "Custom Analytics"],
//       github: null,
//       live: null,
//       slug: "/blog/advantest-automation-case-study",
//       image: "/images/projects/advantest-automation.png",
//       status: ProjectStatus.PRIVATE,
//       year: "2025",
//       impactMetrics: ["50+ Workflows", "72% Faster", "Enterprise"],
//       isEnterprise: true,
//     },
//     {
//       title: "Automation Tool",
//       role: "Open Source / Tooling",
//       description: "Backend automation system for repetitive workflows and engineering processes.",
//       scene: "robot",
//       tech: ["Node.js", "Express", "MongoDB"],
//       highlights: ["CRON Jobs", "REST APIs", "Error Logging"],
//       github: "https://github.com/your-username/automation",
//       live: null,
//       slug: "https://github.com/your-username/automation#readme",
//       image: "/images/projects/automation.png",
//       status: ProjectStatus.OPEN_SOURCE,
//       year: "2025",
//       impactMetrics: ["12k Stars", "MIT License", "OS Community"],
//     },
//     {
//       title: "CLI Task Manager",
//       role: "Personal Tooling / DX",
//       description: "An intuitive, blazing-fast command line environment tool for tracking micro-tasks offline locally.",
//       scene: "terminal",
//       tech: ["Node.js", "Inquirer"],
//       highlights: ["CLI UX", "Productivity", "JSON Storage"],
//       github: "https://github.com/your-username/cli-task-manager",
//       live: null,
//       slug: "/blog/cli-task-manager",
//       image: "/images/projects/cli.png",
//       status: ProjectStatus.PERSONAL,
//       year: "2025",
//       impactMetrics: ["Fast CLI", "Offline", "Personal Tool"],
//     }
//   ];

//   const productionProjects = projects.filter(p => p.status === ProjectStatus.LIVE || p.status === ProjectStatus.PRIVATE);
//   const openSourceProjects = projects.filter(p => p.status === ProjectStatus.OPEN_SOURCE || p.status === ProjectStatus.PERSONAL);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15 },
//     },
//   };

//   return (
//     <section id="projects" className="section-padding py-24 bg-neutral-50/50 dark:bg-neutral-950/20 overflow-x-clip relative">
//       <div className="absolute top-1/4 left-10 w-96 h-96 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px] pointer-events-none animate-[pulse_12s_ease-in-out_infinite]" />
//       <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none animate-[pulse_16s_ease-in-out_infinite]" />

//       <div className="container-width px-4 relative z-10">
//         <div className="mb-16 text-center">
//           <h2 className="text-4xl font-bold tracking-tight">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-neutral-500 dark:text-neutral-400">
//             A collection of projects demonstrating full-stack development, automation and UI engineering.
//           </p>
//         </div>

//         {productionProjects.length > 0 && (
//           <div className="mb-20">
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Production & Commercial Releases
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <motion.div 
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, margin: "-100px" }}
//               className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start"
//             >
//               {productionProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </motion.div>
//           </div>
//         )}

//         {openSourceProjects.length > 0 && (
//           <div>
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Open Source & Engineering Tooling
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <motion.div 
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, margin: "-100px" }}
//               className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start"
//             >
//               {openSourceProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </motion.div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// /* ================= BROWSER MOCKUP COMPONENT ================= */
// interface BrowserMockupProps {
//   project: Project;
// }

// function BrowserMockup({ project }: BrowserMockupProps) {
//   const { title, image, status, tech } = project;
//   const config = statusConfig[status];
//   const primaryAction = getPrimaryAction(project);
//   const Icon = primaryAction.icon;

//   return (
//     <motion.div 
//       whileHover={{ scale: 1.02 }}
//       className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900 shadow-2xl transition-all duration-500"
//     >
      
//       {/* Project status badge over screenshot */}
//       <div className="absolute top-3 left-3 z-20">
//         <span className={cn("rounded-full px-2 py-1 text-[10px] font-semibold backdrop-blur-md border", config.style)}>
//           {config.label}
//         </span>
//       </div>

//       <div className="flex items-center h-8 px-3 bg-neutral-100/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 gap-1.5 z-20 relative">
//         <div className="flex gap-1">
//           <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
//           <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
//           <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
//         </div>
//         <div className="ml-4 h-4 flex-1 rounded-md bg-neutral-200/40 dark:bg-white/5 flex items-center px-3 text-[10px] text-neutral-500 dark:text-neutral-400 font-medium truncate">
//           {title}
//         </div>
//       </div>
      
//       <div className="relative h-[calc(100%-32px)] w-full bg-neutral-50 dark:bg-neutral-950">
//         <Image
//           src={image}
//           alt={`Screenshot mockup of ${title}`}
//           fill
//           priority={false}
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//         />

//         <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//         <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 z-20">
//           {tech.slice(0, 3).map((t) => (
//             <span
//               key={t}
//               className="rounded-full bg-black/60 dark:bg-black/50 backdrop-blur-md px-2 py-0.5 text-[10px] text-white border border-white/10 font-medium"
//             >
//               {t}
//             </span>
//           ))}
//         </div>

//         {/* Unified Overlay CTA Logic using the Primary Action Resolver */}
//         <div className="absolute inset-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 bg-black/40 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center gap-2.5 z-30">
//           <Link 
//             href={primaryAction.href} 
//             target={primaryAction.isExternal ? "_blank" : undefined}
//             aria-label={`${primaryAction.label} for ${title}`}
//             className="inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-xs font-semibold text-neutral-900 shadow-sm hover:bg-neutral-100 transition"
//           >
//             {primaryAction.label} <Icon size={12} />
//           </Link>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// /* ================= PROJECT CARD COMPONENT ================= */
// function ProjectCard({ project }: { project: Project }) {
//   const primaryAction = getPrimaryAction(project);
//   const config = statusConfig[project.status];

//   const cardVariants = {
//     hidden: {
//       opacity: 0,
//       y: 30,
//       scale: 0.96,
//     },
//     show: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         ease: [0.22, 1, 0.36, 1],
//       },
//     },
//   } as const;

//   return (
//     <div className="relative group">
//       <motion.div 
//         className="absolute -inset-2 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl pointer-events-none"
//         animate={{
//           opacity: [0.2, 0.4, 0.2],
//           scale: [1, 1.02, 1],
//         }}
//         transition={{
//           duration: 5,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       <motion.div 
//         variants={cardVariants}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.15 }}
//         className="relative flex flex-col h-full rounded-2xl bg-white dark:bg-neutral-900/40 p-4 border border-neutral-200 dark:border-neutral-800 hover:border-violet-500/30 transition-colors duration-500"
//         style={{ transformStyle: "preserve-3d", perspective: 1000 }}
//         animate={{
//           y: [0, -2, 0],
//         }}
//         transition={{
//           duration: 6,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         whileHover={{
//           y: -6,
//           rotateX: 3,
//           rotateY: -3,
//           transition: { duration: 0.3, ease: "easeOut" }
//         }}
//       >
//         <div className="absolute inset-0 rounded-2xl border border-transparent bg-clip-padding before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-r before:from-violet-500/10 before:to-cyan-500/10 before:-z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//         <BrowserMockup project={project} />

//         <div className="mt-5 flex flex-col flex-1">
//           <div className="flex items-center justify-between mb-1.5">
//             <span className={cn("text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md", config.badgeStyle)}>
//               {project.role}
//             </span>
//             <span className="text-[11px] font-semibold text-neutral-400 dark:text-neutral-500">
//               {project.year}
//             </span>
//           </div>

//           <div className="flex items-center justify-between mb-2">
//             <h3 className="font-bold text-lg text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:text-violet-500 transition-colors duration-300">
//               {project.title}
//             </h3>
//           </div>
          
//           <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-5 line-clamp-2 leading-relaxed">
//             {project.description}
//           </p>

//           <div className="grid grid-cols-3 gap-2 mb-5">
//             {project.impactMetrics.map((metric) => (
//               <div
//                 key={metric}
//                 className="rounded-lg bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200/20 dark:border-neutral-700/20 p-2 text-center text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 truncate"
//               >
//                 {metric}
//               </div>
//             ))}
//           </div>

//           {/* Unified Primary Footer Action Bar Mappings */}
//           <div className="mt-auto flex gap-2 pt-4 border-t border-neutral-100 dark:border-neutral-800/60">
//             {project.github && (
//               <Link
//                 href={project.github}
//                 target="_blank"
//                 className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition shadow-sm"
//                 title="View Source Repository"
//                 aria-label={`View GitHub repository for ${project.title}`}
//               >
//                 <FaGithub size={16} />
//               </Link>
//             )}

//             <Link
//               href={primaryAction.href}
//               target={primaryAction.isExternal ? "_blank" : undefined}
//               aria-label={`${primaryAction.label} for ${project.title}`}
//               className={cn(
//                 "flex-1 inline-flex items-center justify-center rounded-lg text-xs font-semibold h-9 border transition shadow-sm",
//                 project.status === ProjectStatus.LIVE
//                   ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 border-transparent"
//                   : "bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 border-neutral-200/40 dark:border-neutral-700/40 hover:bg-neutral-200 dark:hover:bg-neutral-700"
//               )}
//             >
//               {primaryAction.label}
//             </Link>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }






// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { FaGithub } from "react-icons/fa";
// import { FiExternalLink, FiFileText, FiCode } from "react-icons/fi";

// const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(" ");

// // Refinement 5: Convert to enum-like object for strict status string safety
// export const ProjectStatus = {
//   LIVE: "live",
//   PRIVATE: "private",
//   OPEN_SOURCE: "open-source",
//   PERSONAL: "personal",
// } as const;

// export type ProjectVisibility = typeof ProjectStatus[keyof typeof ProjectStatus];

// interface Project {
//   title: string;
//   role: string;
//   description: string;
//   scene: string;
//   tech: string[];
//   highlights: string[];
//   github: string | null;
//   live: string | null;
//   slug: string;
//   image: string;
//   status: ProjectVisibility;
//   year: string;
//   impactMetrics: string[];
//   isEnterprise?: boolean;
// }

// // Refinement 4 & 6: Centralized lookups for status badges, role markers, and unified CTA logic
// const statusConfig: Record<ProjectVisibility, { style: string; badgeStyle: string; label: string }> = {
//   [ProjectStatus.LIVE]: { 
//     style: "bg-emerald-500/20 text-emerald-400 dark:text-emerald-300 border-emerald-500/30", 
//     badgeStyle: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10",
//     label: "Live" 
//   },
//   [ProjectStatus.PRIVATE]: { 
//     style: "bg-amber-500/20 text-amber-400 dark:text-amber-300 border-amber-500/30", 
//     badgeStyle: "text-amber-600 dark:text-amber-400 bg-amber-500/10",
//     label: "Private" 
//   },
//   [ProjectStatus.OPEN_SOURCE]: { 
//     style: "bg-violet-500/20 text-violet-400 dark:text-violet-300 border-violet-500/30", 
//     badgeStyle: "text-violet-600 dark:text-violet-400 bg-violet-500/10",
//     label: "Open Source" 
//   },
//   [ProjectStatus.PERSONAL]: { 
//     style: "bg-blue-500/20 text-blue-400 dark:text-blue-300 border-blue-500/30", 
//     badgeStyle: "text-blue-600 dark:text-blue-400 bg-blue-500/10",
//     label: "Personal" 
//   },
// };

// function getPrimaryAction(project: Project) {
//   switch (project.status) {
//     case ProjectStatus.LIVE:
//       return { label: "Live Preview", href: project.live ?? "#", icon: FiExternalLink, isExternal: true };
//     case ProjectStatus.OPEN_SOURCE:
//       return { label: "View Code", href: project.github ?? "#", icon: FiCode, isExternal: true };
//     case ProjectStatus.PERSONAL:
//       return { label: "View Project", href: project.github ?? project.slug, icon: FiCode, isExternal: !!project.github };
//     case ProjectStatus.PRIVATE:
//       return { label: "Explore Case Study", href: project.slug, icon: FiFileText, isExternal: false };
//     default:
//       return { label: "View Details", href: project.slug, icon: FiFileText, isExternal: false };
//   }
// }

// export default function Projects() {
//   const projects: Project[] = [
//     {
//       title: "Portfolio Website",
//       role: "Frontend / Creative Dev",
//       description: "A modern portfolio built with Next.js, Tailwind CSS, Framer Motion and TypeScript.",
//       scene: "car",
//       tech: ["Next.js", "Tailwind", "TypeScript"],
//       highlights: ["Framer Motion", "Responsive Design", "SEO Optimized"],
//       github: "https://github.com/your-username/portfolio",
//       live: "https://your-portfolio.com",
//       slug: "/blog/portfolio-website",
//       image: "/images/projects/portfolio.png",
//       status: ProjectStatus.LIVE,
//       year: "2026",
//       impactMetrics: ["99 Lighthouse", "Vercel Edge", "SEO Opt."],
//     },
//     {
//       title: "PCB Simulation Suite",
//       role: "Automation / Backend",
//       description: "Engineered an enterprise-grade automation platform for Advantest to optimize hardware verification workflows.",
//       scene: "chip",
//       tech: ["Python", "TCL", "PostgreSQL", "Docker"],
//       highlights: ["Hardware Automation", "Workflow Optimization", "Custom Analytics"],
//       github: null,
//       live: null,
//       slug: "/blog/advantest-automation-case-study",
//       image: "/images/projects/advantest-automation.png",
//       status: ProjectStatus.PRIVATE,
//       year: "2025",
//       impactMetrics: ["50+ Workflows", "72% Faster", "Enterprise"],
//       isEnterprise: true,
//     },
//     {
//       title: "Automation Tool",
//       role: "Open Source / Tooling",
//       description: "Backend automation system for repetitive workflows and engineering processes.",
//       scene: "robot",
//       tech: ["Node.js", "Express", "MongoDB"],
//       highlights: ["CRON Jobs", "REST APIs", "Error Logging"],
//       github: "https://github.com/your-username/automation",
//       live: null,
//       slug: "https://github.com/your-username/automation#readme",
//       image: "/images/projects/automation.png",
//       status: ProjectStatus.OPEN_SOURCE,
//       year: "2025",
//       impactMetrics: ["12k Stars", "MIT License", "OS Community"],
//     },
//     {
//       title: "CLI Task Manager",
//       role: "Personal Tooling / DX",
//       description: "An intuitive, blazing-fast command line environment tool for tracking micro-tasks offline locally.",
//       scene: "terminal",
//       tech: ["Node.js", "Inquirer"],
//       highlights: ["CLI UX", "Productivity", "JSON Storage"],
//       github: "https://github.com/your-username/cli-task-manager",
//       live: null,
//       slug: "/blog/cli-task-manager",
//       image: "/images/projects/cli.png",
//       status: ProjectStatus.PERSONAL,
//       year: "2025",
//       impactMetrics: ["Fast CLI", "Offline", "Personal Tool"],
//     }
//   ];

//   const productionProjects = projects.filter(p => p.status === ProjectStatus.LIVE || p.status === ProjectStatus.PRIVATE);
//   const openSourceProjects = projects.filter(p => p.status === ProjectStatus.OPEN_SOURCE || p.status === ProjectStatus.PERSONAL);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15 },
//     },
//   };

//   return (
//     <section id="projects" className="section-padding py-24 bg-neutral-50/50 dark:bg-neutral-950/20 overflow-x-clip relative">
//       <div className="absolute top-1/4 left-10 w-96 h-96 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px] pointer-events-none animate-[pulse_12s_ease-in-out_infinite]" />
//       <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none animate-[pulse_16s_ease-in-out_infinite]" />

//       <div className="container-width px-4 relative z-10">
//         <div className="mb-16 text-center">
//           <h2 className="text-4xl font-bold tracking-tight">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-neutral-500 dark:text-neutral-400">
//             A collection of projects demonstrating full-stack development, automation and UI engineering.
//           </p>
//         </div>

//         {productionProjects.length > 0 && (
//           <div className="mb-20">
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Production & Commercial Releases
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <motion.div 
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, margin: "-100px" }}
//               className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start"
//             >
//               {productionProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </motion.div>
//           </div>
//         )}

//         {openSourceProjects.length > 0 && (
//           <div>
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Open Source & Engineering Tooling
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <motion.div 
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, margin: "-100px" }}
//               className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start"
//             >
//               {openSourceProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </motion.div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// /* ================= BROWSER MOCKUP COMPONENT ================= */
// interface BrowserMockupProps {
//   project: Project;
// }

// function BrowserMockup({ project }: BrowserMockupProps) {
//   const { title, image, status, tech } = project;
//   const config = statusConfig[status];
//   const primaryAction = getPrimaryAction(project);
//   const Icon = primaryAction.icon;

//   return (
//     <motion.div 
//       whileHover={{ scale: 1.02 }}
//       className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900 shadow-2xl transition-all duration-500"
//     >
      
//       {/* Project status badge over screenshot */}
//       <div className="absolute top-3 left-3 z-20">
//         <span className={cn("rounded-full px-2 py-1 text-[10px] font-semibold backdrop-blur-md border", config.style)}>
//           {config.label}
//         </span>
//       </div>

//       <div className="flex items-center h-8 px-3 bg-neutral-100/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 gap-1.5 z-20 relative">
//         <div className="flex gap-1">
//           <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
//           <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
//           <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
//         </div>
//         <div className="ml-4 h-4 flex-1 rounded-md bg-neutral-200/40 dark:bg-white/5 flex items-center px-3 text-[10px] text-neutral-500 dark:text-neutral-400 font-medium truncate">
//           {title}
//         </div>
//       </div>
      
//       <div className="relative h-[calc(100%-32px)] w-full bg-neutral-50 dark:bg-neutral-950">
//         <Image
//           src={image}
//           alt={`Screenshot mockup of ${title}`}
//           fill
//           priority={false}
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//         />

//         <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//         <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 z-20">
//           {tech.slice(0, 3).map((t) => (
//             <span
//               key={t}
//               className="rounded-full bg-black/60 dark:bg-black/50 backdrop-blur-md px-2 py-0.5 text-[10px] text-white border border-white/10 font-medium"
//             >
//               {t}
//             </span>
//           ))}
//         </div>

//         {/* Unified Overlay CTA Logic using the Primary Action Resolver */}
//         <div className="absolute inset-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 bg-black/40 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center gap-2.5 z-30">
//           <Link 
//             href={primaryAction.href} 
//             target={primaryAction.isExternal ? "_blank" : undefined}
//             aria-label={`${primaryAction.label} for ${title}`}
//             className="inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-xs font-semibold text-neutral-900 shadow-sm hover:bg-neutral-100 transition"
//           >
//             {primaryAction.label} <Icon size={12} />
//           </Link>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// /* ================= PROJECT CARD COMPONENT ================= */
// /* ================= PROJECT CARD COMPONENT ================= */
// function ProjectCard({ project }: { project: Project }) {
//   const primaryAction = getPrimaryAction(project);
//   const config = statusConfig[project.status];

//   const cardVariants = {
//     hidden: {
//       opacity: 0,
//       y: 40,
//       scale: 0.96,
//       filter: "blur(6px)",
//     },
//     show: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       filter: "blur(0px)",
//       transition: {
//         duration: 0.7,
//         ease: [0.22, 1, 0.36, 1],
//       },
//     },
//   } as const;

//   return (
//     <div className="relative group">
//       <motion.div 
//         className="absolute -inset-2 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl pointer-events-none"
//         animate={{
//           opacity: [0.2, 0.4, 0.2],
//           scale: [1, 1.02, 1],
//         }}
//         transition={{
//           duration: 5,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       <motion.div 
//         variants={cardVariants}
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{
//           opacity: 1,
//           y: 0,
//           scale: 1,
//         }}
//         viewport={{ once: true, amount: 0.25 }}
//         className="relative flex flex-col h-full rounded-2xl bg-white dark:bg-neutral-900/40 p-4 border border-neutral-200 dark:border-neutral-800 hover:border-violet-500/30 transition-all duration-500"
//         style={{ transformStyle: "preserve-3d", perspective: 1000 }}
        
//         // SMOOTHER IDLE MOVEMENT ENGINE
//         animate={{
//           y: [0, -4, 0],
//         }}
//         transition={{
//           duration: 7, // Slowed down for pure elegance
//           repeat: Infinity,
//           ease: "easeInOut", // Natural acceleration/deceleration curves
//         }}
        
//         whileHover={{
//           y: -10,
//           rotateX: 6,
//           rotateY: -6,
//           scale: 1.02,
//           zIndex: 10,
//           transition: { duration: 0.25, ease: "easeOut" }, // Snap to intent smoothly
//         }}
//       >
//         <div className="absolute inset-0 rounded-2xl border border-transparent bg-clip-padding before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-r before:from-violet-500/10 before:to-cyan-500/10 before:-z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//         <BrowserMockup project={project} />

//         <div className="mt-5 flex flex-col flex-1">
//           <div className="flex items-center justify-between mb-1.5">
//             <span className={cn("text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md", config.badgeStyle)}>
//               {project.role}
//             </span>
//             <span className="text-[11px] font-semibold text-neutral-400 dark:text-neutral-500">
//               {project.year}
//             </span>
//           </div>

//           <div className="flex items-center justify-between mb-2">
//             <h3 className="font-bold text-lg text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:text-violet-500 transition-colors duration-300">
//               {project.title}
//             </h3>
//           </div>
          
//           <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-5 line-clamp-2 leading-relaxed">
//             {project.description}
//           </p>

//           <div className="grid grid-cols-3 gap-2 mb-5">
//             {project.impactMetrics.map((metric) => (
//               <div
//                 key={metric}
//                 className="rounded-lg bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200/20 dark:border-neutral-700/20 p-2 text-center text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 truncate"
//               >
//                 {metric}
//               </div>
//             ))}
//           </div>

//           {/* Unified Primary Footer Action Bar Mappings */}
//           <div className="mt-auto flex gap-2 pt-4 border-t border-neutral-100 dark:border-neutral-800/60">
//             {project.github && (
//               <Link
//                 href={project.github}
//                 target="_blank"
//                 className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition shadow-sm"
//                 title="View Source Repository"
//                 aria-label={`View GitHub repository for ${project.title}`}
//               >
//                 <FaGithub size={16} />
//               </Link>
//             )}

//             <Link
//               href={primaryAction.href}
//               target={primaryAction.isExternal ? "_blank" : undefined}
//               aria-label={`${primaryAction.label} for ${project.title}`}
//               className={cn(
//                 "flex-1 inline-flex items-center justify-center rounded-lg text-xs font-semibold h-9 border transition shadow-sm",
//                 project.status === ProjectStatus.LIVE
//                   ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 border-transparent"
//                   : "bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 border-neutral-200/40 dark:border-neutral-700/40 hover:bg-neutral-200 dark:hover:bg-neutral-700"
//               )}
//             >
//               {primaryAction.label}
//             </Link>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }





// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { FaGithub } from "react-icons/fa";
// import { FiExternalLink, FiFileText, FiCode } from "react-icons/fi";

// const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(" ");

// // Refinement 5: Convert to enum-like object for strict status string safety
// export const ProjectStatus = {
//   LIVE: "live",
//   PRIVATE: "private",
//   OPEN_SOURCE: "open-source",
//   PERSONAL: "personal",
// } as const;

// export type ProjectVisibility = typeof ProjectStatus[keyof typeof ProjectStatus];

// interface Project {
//   title: string;
//   role: string;
//   description: string;
//   scene: string;
//   tech: string[];
//   highlights: string[];
//   github: string | null;
//   live: string | null;
//   slug: string;
//   image: string;
//   status: ProjectVisibility;
//   year: string;
//   impactMetrics: string[];
//   isEnterprise?: boolean;
// }

// // Refinement 4 & 6: Centralized lookups for status badges, role markers, and unified CTA logic
// const statusConfig: Record<ProjectVisibility, { style: string; badgeStyle: string; label: string }> = {
//   [ProjectStatus.LIVE]: { 
//     style: "bg-emerald-500/20 text-emerald-400 dark:text-emerald-300 border-emerald-500/30", 
//     badgeStyle: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10",
//     label: "Live" 
//   },
//   [ProjectStatus.PRIVATE]: { 
//     style: "bg-amber-500/20 text-amber-400 dark:text-amber-300 border-amber-500/30", 
//     badgeStyle: "text-amber-600 dark:text-amber-400 bg-amber-500/10",
//     label: "Private" 
//   },
//   [ProjectStatus.OPEN_SOURCE]: { 
//     style: "bg-violet-500/20 text-violet-400 dark:text-violet-300 border-violet-500/30", 
//     badgeStyle: "text-violet-600 dark:text-violet-400 bg-violet-500/10",
//     label: "Open Source" 
//   },
//   [ProjectStatus.PERSONAL]: { 
//     style: "bg-blue-500/20 text-blue-400 dark:text-blue-300 border-blue-500/30", 
//     badgeStyle: "text-blue-600 dark:text-blue-400 bg-blue-500/10",
//     label: "Personal" 
//   },
// };

// function getPrimaryAction(project: Project) {
//   switch (project.status) {
//     case ProjectStatus.LIVE:
//       return { label: "Live Preview", href: project.live ?? "#", icon: FiExternalLink, isExternal: true };
//     case ProjectStatus.OPEN_SOURCE:
//       return { label: "View Code", href: project.github ?? "#", icon: FiCode, isExternal: true };
//     case ProjectStatus.PERSONAL:
//       return { label: "View Project", href: project.github ?? project.slug, icon: FiCode, isExternal: !!project.github };
//     case ProjectStatus.PRIVATE:
//       return { label: "Explore Case Study", href: project.slug, icon: FiFileText, isExternal: false };
//     default:
//       return { label: "View Details", href: project.slug, icon: FiFileText, isExternal: false };
//   }
// }

// export default function Projects() {
//   const projects: Project[] = [
//     {
//       title: "Portfolio Website",
//       role: "Frontend / Creative Dev",
//       description: "A modern portfolio built with Next.js, Tailwind CSS, Framer Motion and TypeScript.",
//       scene: "car",
//       tech: ["Next.js", "Tailwind", "TypeScript"],
//       highlights: ["Framer Motion", "Responsive Design", "SEO Optimized"],
//       github: "https://github.com/your-username/portfolio",
//       live: "https://your-portfolio.com",
//       slug: "/blog/portfolio-website",
//       image: "/images/projects/portfolio.png",
//       status: ProjectStatus.LIVE,
//       year: "2026",
//       impactMetrics: ["99 Lighthouse", "Vercel Edge", "SEO Opt."],
//     },
//     {
//       title: "PCB Simulation Suite",
//       role: "Automation / Backend",
//       description: "Engineered an enterprise-grade automation platform for Advantest to optimize hardware verification workflows.",
//       scene: "chip",
//       tech: ["Python", "TCL", "PostgreSQL", "Docker"],
//       highlights: ["Hardware Automation", "Workflow Optimization", "Custom Analytics"],
//       github: null,
//       live: null,
//       slug: "/blog/advantest-automation-case-study",
//       image: "/images/projects/advantest-automation.png",
//       status: ProjectStatus.PRIVATE,
//       year: "2025",
//       impactMetrics: ["50+ Workflows", "72% Faster", "Enterprise"],
//       isEnterprise: true,
//     },
//     {
//       title: "Automation Tool",
//       role: "Open Source / Tooling",
//       description: "Backend automation system for repetitive workflows and engineering processes.",
//       scene: "robot",
//       tech: ["Node.js", "Express", "MongoDB"],
//       highlights: ["CRON Jobs", "REST APIs", "Error Logging"],
//       github: "https://github.com/your-username/automation",
//       live: null,
//       slug: "https://github.com/your-username/automation#readme",
//       image: "/images/projects/automation.png",
//       status: ProjectStatus.OPEN_SOURCE,
//       year: "2025",
//       impactMetrics: ["12k Stars", "MIT License", "OS Community"],
//     },
//     {
//       title: "CLI Task Manager",
//       role: "Personal Tooling / DX",
//       description: "An intuitive, blazing-fast command line environment tool for tracking micro-tasks offline locally.",
//       scene: "terminal",
//       tech: ["Node.js", "Inquirer"],
//       highlights: ["CLI UX", "Productivity", "JSON Storage"],
//       github: "https://github.com/your-username/cli-task-manager",
//       live: null,
//       slug: "/blog/cli-task-manager",
//       image: "/images/projects/cli.png",
//       status: ProjectStatus.PERSONAL,
//       year: "2025",
//       impactMetrics: ["Fast CLI", "Offline", "Personal Tool"],
//     }
//   ];

//   const productionProjects = projects.filter(p => p.status === ProjectStatus.LIVE || p.status === ProjectStatus.PRIVATE);
//   const openSourceProjects = projects.filter(p => p.status === ProjectStatus.OPEN_SOURCE || p.status === ProjectStatus.PERSONAL);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15 },
//     },
//   };

//   return (
//     <section id="projects" className="section-padding py-24 bg-neutral-50/50 dark:bg-neutral-950/20 overflow-x-clip relative">
//       <div className="absolute top-1/4 left-10 w-96 h-96 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px] pointer-events-none animate-[pulse_12s_ease-in-out_infinite]" />
//       <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none animate-[pulse_16s_ease-in-out_infinite]" />

//       <div className="container-width px-4 relative z-10">
//         <div className="mb-16 text-center">
//           <h2 className="text-4xl font-bold tracking-tight">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-neutral-500 dark:text-neutral-400">
//             A collection of projects demonstrating full-stack development, automation and UI engineering.
//           </p>
//         </div>

//         {productionProjects.length > 0 && (
//           <div className="mb-20">
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Production & Commercial Releases
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <motion.div 
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.2 }}
//               className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start"
//             >
//               {productionProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </motion.div>
//           </div>
//         )}

//         {openSourceProjects.length > 0 && (
//           <div>
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Open Source & Engineering Tooling
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <motion.div 
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.2 }}
//               className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start"
//             >
//               {openSourceProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </motion.div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// /* ================= BROWSER MOCKUP COMPONENT ================= */
// interface BrowserMockupProps {
//   project: Project;
// }

// function BrowserMockup({ project }: BrowserMockupProps) {
//   const { title, image, status, tech } = project;
//   const config = statusConfig[status];
//   const primaryAction = getPrimaryAction(project);
//   const Icon = primaryAction.icon;

//   return (
//     <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900 shadow-2xl transition-all duration-500">
      
//       {/* Project status badge over screenshot */}
//       <div className="absolute top-3 left-3 z-20">
//         <span className={cn("rounded-full px-2 py-1 text-[10px] font-semibold backdrop-blur-md border", config.style)}>
//           {config.label}
//         </span>
//       </div>

//       <div className="flex items-center h-8 px-3 bg-neutral-100/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 gap-1.5 z-20 relative">
//         <div className="flex gap-1">
//           <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
//           <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
//           <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
//         </div>
//         <div className="ml-4 h-4 flex-1 rounded-md bg-neutral-200/40 dark:bg-white/5 flex items-center px-3 text-[10px] text-neutral-500 dark:text-neutral-400 font-medium truncate">
//           {title}
//         </div>
//       </div>
      
//       <div className="relative h-[calc(100%-32px)] w-full bg-neutral-50 dark:bg-neutral-950">
//         <Image
//           src={image}
//           alt={`Screenshot mockup of ${title}`}
//           fill
//           priority={false}
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//         />

//         <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//         <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 z-20">
//           {tech.slice(0, 3).map((t) => (
//             <span
//               key={t}
//               className="rounded-full bg-black/60 dark:bg-black/50 backdrop-blur-md px-2 py-0.5 text-[10px] text-white border border-white/10 font-medium"
//             >
//               {t}
//             </span>
//           ))}
//         </div>

//         {/* Unified Overlay CTA Logic using the Primary Action Resolver */}
//         <div className="absolute inset-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 bg-black/40 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center gap-2.5 z-30">
//           <Link 
//             href={primaryAction.href} 
//             target={primaryAction.isExternal ? "_blank" : undefined}
//             aria-label={`${primaryAction.label} for ${title}`}
//             className="inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-xs font-semibold text-neutral-900 shadow-sm hover:bg-neutral-100 transition"
//           >
//             {primaryAction.label} <Icon size={12} />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ================= PROJECT CARD COMPONENT ================= */
// function ProjectCard({ project }: { project: Project }) {
//   const primaryAction = getPrimaryAction(project);
//   const config = statusConfig[project.status];

//   const cardVariants = {
//     hidden: {
//       opacity: 0,
//       y: 28,
//       scale: 0.97,
//     },
//     show: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.65,
//         ease: [0.16, 1, 0.3, 1],
//       },
//     },
//   } as const;

//   return (
//     <div className="relative group">
//       {/* Premium Focus Glow Follow (Magnetic Layer) */}
//       <motion.div
//         className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 rounded-2xl z-0 transition-opacity duration-300"
//         animate={{
//           background: [
//             "radial-gradient(300px circle at 0% 0%, rgba(139,92,246,0.12), transparent)",
//             "radial-gradient(300px circle at 100% 100%, rgba(34,211,238,0.12), transparent)",
//             "radial-gradient(300px circle at 50% 50%, rgba(139,92,246,0.12), transparent)",
//           ],
//         }}
//         transition={{
//           duration: 6,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       />

//       <motion.div 
//         variants={cardVariants}
//         viewport={{ once: true, amount: 0.2 }}
//         className="relative flex flex-col h-full rounded-2xl bg-white dark:bg-neutral-900/40 p-4 border border-neutral-200 dark:border-neutral-800 hover:border-violet-500/30 transition-all duration-500 z-10"
//         style={{ transformStyle: "preserve-3d", perspective: 1000 }}
//         whileHover={{
//           y: -8,
//           scale: 1.02,
//           rotateX: 3,
//           rotateY: -3,
//           transition: { duration: 0.25, ease: "easeOut" },
//         }}
//       >
//         <div className="absolute inset-0 rounded-2xl border border-transparent bg-clip-padding before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-r before:from-violet-500/10 before:to-cyan-500/10 before:-z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//         <BrowserMockup project={project} />

//         <div className="mt-5 flex flex-col flex-1">
//           <div className="flex items-center justify-between mb-1.5">
//             <span className={cn("text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md", config.badgeStyle)}>
//               {project.role}
//             </span>
//             <span className="text-[11px] font-semibold text-neutral-400 dark:text-neutral-500">
//               {project.year}
//             </span>
//           </div>

//           <div className="flex items-center justify-between mb-2">
//             <h3 className="font-bold text-lg text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:text-violet-500 transition-colors duration-300">
//               {project.title}
//             </h3>
//           </div>
          
//           <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-5 line-clamp-2 leading-relaxed">
//             {project.description}
//           </p>

//           <div className="grid grid-cols-3 gap-2 mb-5">
//             {project.impactMetrics.map((metric) => (
//               <div
//                 key={metric}
//                 className="rounded-lg bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200/20 dark:border-neutral-700/20 p-2 text-center text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 truncate"
//               >
//                 {metric}
//               </div>
//             ))}
//           </div>

//           {/* Unified Primary Footer Action Bar Mappings */}
//           <div className="mt-auto flex gap-2 pt-4 border-t border-neutral-100 dark:border-neutral-800/60">
//             {project.github && (
//               <Link
//                 href={project.github}
//                 target="_blank"
//                 className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition shadow-sm"
//                 title="View Source Repository"
//                 aria-label={`View GitHub repository for ${project.title}`}
//               >
//                 <FaGithub size={16} />
//               </Link>
//             )}

//             <Link
//               href={primaryAction.href}
//               target={primaryAction.isExternal ? "_blank" : undefined}
//               aria-label={`${primaryAction.label} for ${project.title}`}
//               className={cn(
//                 "flex-1 inline-flex items-center justify-center rounded-lg text-xs font-semibold h-9 border transition shadow-sm",
//                 project.status === ProjectStatus.LIVE
//                   ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 border-transparent"
//                   : "bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 border-neutral-200/40 dark:border-neutral-700/40 hover:bg-neutral-200 dark:hover:bg-neutral-700"
//               )}
//             >
//               {primaryAction.label}
//             </Link>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }



// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion, useMotionValue, useSpring } from "framer-motion";
// import { FaGithub } from "react-icons/fa";
// import { FiExternalLink, FiFileText, FiCode } from "react-icons/fi";

// const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(" ");

// export const ProjectStatus = {
//   LIVE: "live",
//   PRIVATE: "private",
//   OPEN_SOURCE: "open-source",
//   PERSONAL: "personal",
// } as const;

// export type ProjectVisibility = typeof ProjectStatus[keyof typeof ProjectStatus];

// interface Project {
//   title: string;
//   role: string;
//   description: string;
//   scene: string;
//   tech: string[];
//   highlights: string[];
//   github: string | null;
//   live: string | null;
//   slug: string;
//   image: string;
//   status: ProjectVisibility;
//   year: string;
//   impactMetrics: string[];
//   isEnterprise?: boolean;
// }

// const statusConfig: Record<ProjectVisibility, { style: string; badgeStyle: string; label: string }> = {
//   [ProjectStatus.LIVE]: { 
//     style: "bg-emerald-500/20 text-emerald-400 dark:text-emerald-300 border-emerald-500/30", 
//     badgeStyle: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10",
//     label: "Live" 
//   },
//   [ProjectStatus.PRIVATE]: { 
//     style: "bg-amber-500/20 text-amber-400 dark:text-amber-300 border-amber-500/30", 
//     badgeStyle: "text-amber-600 dark:text-amber-400 bg-amber-500/10",
//     label: "Private" 
//   },
//   [ProjectStatus.OPEN_SOURCE]: { 
//     style: "bg-violet-500/20 text-violet-400 dark:text-violet-300 border-violet-500/30", 
//     badgeStyle: "text-violet-600 dark:text-violet-400 bg-violet-500/10",
//     label: "Open Source" 
//   },
//   [ProjectStatus.PERSONAL]: { 
//     style: "bg-blue-500/20 text-blue-400 dark:text-blue-300 border-blue-500/30", 
//     badgeStyle: "text-blue-600 dark:text-blue-400 bg-blue-500/10",
//     label: "Personal" 
//   },
// };

// function getPrimaryAction(project: Project) {
//   switch (project.status) {
//     case ProjectStatus.LIVE:
//       return { label: "Live Preview", href: project.live ?? "#", icon: FiExternalLink, isExternal: true };
//     case ProjectStatus.OPEN_SOURCE:
//       return { label: "View Code", href: project.github ?? "#", icon: FiCode, isExternal: true };
//     case ProjectStatus.PERSONAL:
//       return { label: "View Project", href: project.github ?? project.slug, icon: FiCode, isExternal: !!project.github };
//     case ProjectStatus.PRIVATE:
//       return { label: "Explore Case Study", href: project.slug, icon: FiFileText, isExternal: false };
//     default:
//       return { label: "View Details", href: project.slug, icon: FiFileText, isExternal: false };
//   }
// }

// export default function Projects() {
//   const projects: Project[] = [
//     {
//       title: "Portfolio Website",
//       role: "Frontend / Creative Dev",
//       description: "A modern portfolio built with Next.js, Tailwind CSS, Framer Motion and TypeScript.",
//       scene: "car",
//       tech: ["Next.js", "Tailwind", "TypeScript"],
//       highlights: ["Framer Motion", "Responsive Design", "SEO Optimized"],
//       github: "https://github.com/your-username/portfolio",
//       live: "https://your-portfolio.com",
//       slug: "/blog/portfolio-website",
//       image: "/images/projects/portfolio.png",
//       status: ProjectStatus.LIVE,
//       year: "2026",
//       impactMetrics: ["99 Lighthouse", "Vercel Edge", "SEO Opt."],
//     },
//     {
//       title: "PCB Simulation Suite",
//       role: "Automation / Backend",
//       description: "Engineered an enterprise-grade automation platform for Advantest to optimize hardware verification workflows.",
//       scene: "chip",
//       tech: ["Python", "TCL", "PostgreSQL", "Docker"],
//       highlights: ["Hardware Automation", "Workflow Optimization", "Custom Analytics"],
//       github: null,
//       live: null,
//       slug: "/blog/advantest-automation-case-study",
//       image: "/images/projects/advantest-automation.png",
//       status: ProjectStatus.PRIVATE,
//       year: "2025",
//       impactMetrics: ["50+ Workflows", "72% Faster", "Enterprise"],
//       isEnterprise: true,
//     },
//     {
//       title: "Automation Tool",
//       role: "Open Source / Tooling",
//       description: "Backend automation system for repetitive workflows and engineering processes.",
//       scene: "robot",
//       tech: ["Node.js", "Express", "MongoDB"],
//       highlights: ["CRON Jobs", "REST APIs", "Error Logging"],
//       github: "https://github.com/your-username/automation",
//       live: null,
//       slug: "https://github.com/your-username/automation#readme",
//       image: "/images/projects/automation.png",
//       status: ProjectStatus.OPEN_SOURCE,
//       year: "2025",
//       impactMetrics: ["12k Stars", "MIT License", "OS Community"],
//     },
//     {
//       title: "CLI Task Manager",
//       role: "Personal Tooling / DX",
//       description: "An intuitive, blazing-fast command line environment tool for tracking micro-tasks offline locally.",
//       scene: "terminal",
//       tech: ["Node.js", "Inquirer"],
//       highlights: ["CLI UX", "Productivity", "JSON Storage"],
//       github: "https://github.com/your-username/cli-task-manager",
//       live: null,
//       slug: "/blog/cli-task-manager",
//       image: "/images/projects/cli.png",
//       status: ProjectStatus.PERSONAL,
//       year: "2025",
//       impactMetrics: ["Fast CLI", "Offline", "Personal Tool"],
//     }
//   ];

//   const productionProjects = projects.filter(p => p.status === ProjectStatus.LIVE || p.status === ProjectStatus.PRIVATE);
//   const openSourceProjects = projects.filter(p => p.status === ProjectStatus.OPEN_SOURCE || p.status === ProjectStatus.PERSONAL);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.12 },
//     },
//   };

//   return (
//     <section id="projects" className="section-padding py-24 bg-neutral-50/50 dark:bg-neutral-950/20 overflow-x-clip relative">
//       <div className="absolute top-1/4 left-10 w-96 h-96 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px] pointer-events-none animate-[pulse_12s_ease-in-out_infinite]" />
//       <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none animate-[pulse_16s_ease-in-out_infinite]" />

//       <div className="container-width px-4 relative z-10">
//         <div className="mb-16 text-center">
//           <h2 className="text-4xl font-bold tracking-tight">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-neutral-500 dark:text-neutral-400">
//             A collection of projects demonstrating full-stack development, automation and UI engineering.
//           </p>
//         </div>

//         {productionProjects.length > 0 && (
//           <div className="mb-20">
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Production & Commercial Releases
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <motion.div 
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.2 }}
//               className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start"
//             >
//               {productionProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </motion.div>
//           </div>
//         )}

//         {openSourceProjects.length > 0 && (
//           <div>
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Open Source & Engineering Tooling
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <motion.div 
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.2 }}
//               className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start"
//             >
//               {openSourceProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </motion.div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// /* ================= BROWSER MOCKUP COMPONENT ================= */
// interface BrowserMockupProps {
//   project: Project;
// }

// function BrowserMockup({ project }: BrowserMockupProps) {
//   const { title, image, status, tech } = project;
//   const config = statusConfig[status];
//   const primaryAction = getPrimaryAction(project);
//   const Icon = primaryAction.icon;

//   return (
//     <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900 shadow-2xl transition-all duration-500">
//       <div className="absolute top-3 left-3 z-20">
//         <span className={cn("rounded-full px-2 py-1 text-[10px] font-semibold backdrop-blur-md border", config.style)}>
//           {config.label}
//         </span>
//       </div>

//       <div className="flex items-center h-8 px-3 bg-neutral-100/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 gap-1.5 z-20 relative">
//         <div className="flex gap-1">
//           <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
//           <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
//           <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
//         </div>
//         <div className="ml-4 h-4 flex-1 rounded-md bg-neutral-200/40 dark:bg-white/5 flex items-center px-3 text-[10px] text-neutral-500 dark:text-neutral-400 font-medium truncate">
//           {title}
//         </div>
//       </div>
      
//       <div className="relative h-[calc(100%-32px)] w-full bg-neutral-50 dark:bg-neutral-950">
//         <Image
//           src={image}
//           alt={`Screenshot mockup of ${title}`}
//           fill
//           priority={false}
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//         />

//         <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//         <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 z-20">
//           {tech.slice(0, 3).map((t) => (
//             <span
//               key={t}
//               className="rounded-full bg-black/60 dark:bg-black/50 backdrop-blur-md px-2 py-0.5 text-[10px] text-white border border-white/10 font-medium"
//             >
//               {t}
//             </span>
//           ))}
//         </div>

//         <div className="absolute inset-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 bg-black/40 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center gap-2.5 z-30">
//           <Link 
//             href={primaryAction.href} 
//             target={primaryAction.isExternal ? "_blank" : undefined}
//             aria-label={`${primaryAction.label} for ${title}`}
//             className="inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-xs font-semibold text-neutral-900 shadow-sm hover:bg-neutral-100 transition"
//           >
//             {primaryAction.label} <Icon size={12} />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ================= PROJECT CARD COMPONENT ================= */
// function ProjectCard({ project }: { project: Project }) {
//   const primaryAction = getPrimaryAction(project);
//   const config = statusConfig[project.status];

//   // Continuous micro-tracking using performance-optimized MotionValues and Springs
//   const rotateXVal = useMotionValue(0);
//   const rotateYVal = useMotionValue(0);

//   const springConfig = { stiffness: 150, damping: 22, mass: 0.8 };
//   const rotateX = useSpring(rotateXVal, springConfig);
//   const rotateY = useSpring(rotateYVal, springConfig);

//   function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
//     const rect = e.currentTarget.getBoundingClientRect();
//     // Center normalized values from -0.5 to 0.5
//     const x = (e.clientX - rect.left) / rect.width - 0.5;
//     const y = (e.clientY - rect.top) / rect.height - 0.5;

//     // Map coordinates to maximum rotation tilt limit (6 degrees max)
//     rotateXVal.set(y * -6); 
//     rotateYVal.set(x * 6);
//   }

//   function handleMouseLeave() {
//     // Snap cleanly back to origin surface flat position
//     rotateXVal.set(0);
//     rotateYVal.set(0);
//   }

//   const cardVariants = {
//     hidden: {
//       opacity: 0,
//       y: 24,
//       scale: 0.98,
//     },
//     show: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         ease: [0.25, 1, 0.35, 1],
//       },
//     },
//   } as const;

//   return (
//     <div className="relative group">
//       {/* Dynamic Hover-Only Ambient Depth Layer (Zero runtime loops) */}
//       <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 blur-xl pointer-events-none" />

//       <motion.div 
//         variants={cardVariants}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         className="relative flex flex-col h-full rounded-2xl bg-white dark:bg-neutral-900/40 p-4 border border-neutral-200 dark:border-neutral-800 hover:border-violet-500/30 transition-all duration-500 z-10 select-none"
//         style={{ 
//           transformStyle: "preserve-3d", 
//           perspective: 1000,
//           rotateX,
//           rotateY
//         }}
//         whileHover={{
//           y: -6,
//           scale: 1.015,
//           transition: { duration: 0.2, ease: "easeOut" },
//         }}
//       >
//         <div className="absolute inset-0 rounded-2xl border border-transparent bg-clip-padding before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-r before:from-violet-500/10 before:to-cyan-500/10 before:-z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//         <BrowserMockup project={project} />

//         <div className="mt-5 flex flex-col flex-1" style={{ transform: "translateZ(20px)" }}>
//           <div className="flex items-center justify-between mb-1.5">
//             <span className={cn("text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md", config.badgeStyle)}>
//               {project.role}
//             </span>
//             <span className="text-[11px] font-semibold text-neutral-400 dark:text-neutral-500">
//               {project.year}
//             </span>
//           </div>

//           <div className="flex items-center justify-between mb-2">
//             <h3 className="font-bold text-lg text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:text-violet-500 transition-colors duration-300">
//               {project.title}
//             </h3>
//           </div>
          
//           <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-5 line-clamp-2 leading-relaxed">
//             {project.description}
//           </p>

//           <div className="grid grid-cols-3 gap-2 mb-5">
//             {project.impactMetrics.map((metric) => (
//               <div
//                 key={metric}
//                 className="rounded-lg bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200/20 dark:border-neutral-700/20 p-2 text-center text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 truncate"
//               >
//                 {metric}
//               </div>
//             ))}
//           </div>

//           <div className="mt-auto flex gap-2 pt-4 border-t border-neutral-100 dark:border-neutral-800/60">
//             {project.github && (
//               <Link
//                 href={project.github}
//                 target="_blank"
//                 className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition shadow-sm"
//                 title="View Source Repository"
//                 aria-label={`View GitHub repository for ${project.title}`}
//               >
//                 <FaGithub size={16} />
//               </Link>
//             )}

//             <Link
//               href={primaryAction.href}
//               target={primaryAction.isExternal ? "_blank" : undefined}
//               aria-label={`${primaryAction.label} for ${project.title}`}
//               className={cn(
//                 "flex-1 inline-flex items-center justify-center rounded-lg text-xs font-semibold h-9 border transition shadow-sm",
//                 project.status === ProjectStatus.LIVE
//                   ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 border-transparent"
//                   : "bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 border-neutral-200/40 dark:border-neutral-700/40 hover:bg-neutral-200 dark:hover:bg-neutral-700"
//               )}
//             >
//               {primaryAction.label}
//             </Link>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }




// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { FaGithub } from "react-icons/fa";
// import { FiExternalLink, FiFileText, FiCode } from "react-icons/fi";

// const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(" ");

// export const ProjectStatus = {
//   LIVE: "live",
//   PRIVATE: "private",
//   OPEN_SOURCE: "open-source",
//   PERSONAL: "personal",
// } as const;

// export type ProjectVisibility = typeof ProjectStatus[keyof typeof ProjectStatus];

// interface Project {
//   title: string;
//   role: string;
//   description: string;
//   scene: string;
//   tech: string[];
//   highlights: string[];
//   github: string | null;
//   live: string | null;
//   slug: string;
//   image: string;
//   status: ProjectVisibility;
//   year: string;
//   impactMetrics: string[];
//   isEnterprise?: boolean;
// }

// const statusConfig: Record<ProjectVisibility, { style: string; badgeStyle: string; label: string }> = {
//   [ProjectStatus.LIVE]: { 
//     style: "bg-emerald-500/20 text-emerald-400 dark:text-emerald-300 border-emerald-500/30", 
//     badgeStyle: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10",
//     label: "Live" 
//   },
//   [ProjectStatus.PRIVATE]: { 
//     style: "bg-amber-500/20 text-amber-400 dark:text-amber-300 border-amber-500/30", 
//     badgeStyle: "text-amber-600 dark:text-amber-400 bg-amber-500/10",
//     label: "Private" 
//   },
//   [ProjectStatus.OPEN_SOURCE]: { 
//     style: "bg-violet-500/20 text-violet-400 dark:text-violet-300 border-violet-500/30", 
//     badgeStyle: "text-violet-600 dark:text-violet-400 bg-violet-500/10",
//     label: "Open Source" 
//   },
//   [ProjectStatus.PERSONAL]: { 
//     style: "bg-blue-500/20 text-blue-400 dark:text-blue-300 border-blue-500/30", 
//     badgeStyle: "text-blue-600 dark:text-blue-400 bg-blue-500/10",
//     label: "Personal" 
//   },
// };

// function getPrimaryAction(project: Project) {
//   switch (project.status) {
//     case ProjectStatus.LIVE:
//       return { label: "Live Preview", href: project.live ?? "#", icon: FiExternalLink, isExternal: true };
//     case ProjectStatus.OPEN_SOURCE:
//       return { label: "View Code", href: project.github ?? "#", icon: FiCode, isExternal: true };
//     case ProjectStatus.PERSONAL:
//       return { label: "View Project", href: project.github ?? project.slug, icon: FiCode, isExternal: !!project.github };
//     case ProjectStatus.PRIVATE:
//       return { label: "Explore Case Study", href: project.slug, icon: FiFileText, isExternal: false };
//     default:
//       return { label: "View Details", href: project.slug, icon: FiFileText, isExternal: false };
//   }
// }

// export default function Projects() {
//   const projects: Project[] = [
//     {
//       title: "Portfolio Website",
//       role: "Frontend / Creative Dev",
//       description: "A modern portfolio built with Next.js, Tailwind CSS, Framer Motion and TypeScript.",
//       scene: "car",
//       tech: ["Next.js", "Tailwind", "TypeScript"],
//       highlights: ["Framer Motion", "Responsive Design", "SEO Optimized"],
//       github: "https://github.com/your-username/portfolio",
//       live: "https://your-portfolio.com",
//       slug: "/blog/portfolio-website",
//       image: "/images/projects/portfolio.png",
//       status: ProjectStatus.LIVE,
//       year: "2026",
//       impactMetrics: ["99 Lighthouse", "Vercel Edge", "SEO Opt."],
//     },
//     {
//       title: "PCB Simulation Suite",
//       role: "Automation / Backend",
//       description: "Engineered an enterprise-grade automation platform for Advantest to optimize hardware verification workflows.",
//       scene: "chip",
//       tech: ["Python", "TCL", "PostgreSQL", "Docker"],
//       highlights: ["Hardware Automation", "Workflow Optimization", "Custom Analytics"],
//       github: null,
//       live: null,
//       slug: "/blog/advantest-automation-case-study",
//       image: "/images/projects/advantest-automation.png",
//       status: ProjectStatus.PRIVATE,
//       year: "2025",
//       impactMetrics: ["50+ Workflows", "72% Faster", "Enterprise"],
//       isEnterprise: true,
//     },
//     {
//       title: "Automation Tool",
//       role: "Open Source / Tooling",
//       description: "Backend automation system for repetitive workflows and engineering processes.",
//       scene: "robot",
//       tech: ["Node.js", "Express", "MongoDB"],
//       highlights: ["CRON Jobs", "REST APIs", "Error Logging"],
//       github: "https://github.com/your-username/automation",
//       live: null,
//       slug: "https://github.com/your-username/automation#readme",
//       image: "/images/projects/automation.png",
//       status: ProjectStatus.OPEN_SOURCE,
//       year: "2025",
//       impactMetrics: ["12k Stars", "MIT License", "OS Community"],
//     },
//     {
//       title: "CLI Task Manager",
//       role: "Personal Tooling / DX",
//       description: "An intuitive, blazing-fast command line environment tool for tracking micro-tasks offline locally.",
//       scene: "terminal",
//       tech: ["Node.js", "Inquirer"],
//       highlights: ["CLI UX", "Productivity", "JSON Storage"],
//       github: "https://github.com/your-username/cli-task-manager",
//       live: null,
//       slug: "/blog/cli-task-manager",
//       image: "/images/projects/cli.png",
//       status: ProjectStatus.PERSONAL,
//       year: "2025",
//       impactMetrics: ["Fast CLI", "Offline", "Personal Tool"],
//     }
//   ];

//   const productionProjects = projects.filter(p => p.status === ProjectStatus.LIVE || p.status === ProjectStatus.PRIVATE);
//   const openSourceProjects = projects.filter(p => p.status === ProjectStatus.OPEN_SOURCE || p.status === ProjectStatus.PERSONAL);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.12 },
//     },
//   };

//   return (
//     <section id="projects" className="section-padding py-24 bg-neutral-50/50 dark:bg-neutral-950/20 overflow-x-clip relative">
//       <div className="absolute top-1/4 left-10 w-96 h-96 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px] pointer-events-none animate-[pulse_12s_ease-in-out_infinite]" />
//       <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none animate-[pulse_16s_ease-in-out_infinite]" />

//       <div className="container-width px-4 relative z-10">
//         <div className="mb-16 text-center">
//           <h2 className="text-4xl font-bold tracking-tight">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-neutral-500 dark:text-neutral-400">
//             A collection of projects demonstrating full-stack development, automation and UI engineering.
//           </p>
//         </div>

//         {productionProjects.length > 0 && (
//           <div className="mb-20">
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Production & Commercial Releases
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <motion.div 
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.2 }}
//               className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start"
//             >
//               {productionProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </motion.div>
//           </div>
//         )}

//         {openSourceProjects.length > 0 && (
//           <div>
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Open Source & Engineering Tooling
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <motion.div 
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.2 }}
//               className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start"
//             >
//               {openSourceProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </motion.div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// /* ================= BROWSER MOCKUP COMPONENT ================= */
// interface BrowserMockupProps {
//   project: Project;
// }

// function BrowserMockup({ project }: BrowserMockupProps) {
//   const { title, image, status, tech } = project;
//   const config = statusConfig[status];
//   const primaryAction = getPrimaryAction(project);
//   const Icon = primaryAction.icon;

//   return (
//     <div className="group/browser relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900 shadow-xl transition-all duration-500">
//       <div className="absolute top-3 left-3 z-20">
//         <span className={cn("rounded-full px-2 py-1 text-[10px] font-semibold backdrop-blur-md border", config.style)}>
//           {config.label}
//         </span>
//       </div>

//       <div className="flex items-center h-8 px-3 bg-neutral-100/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 gap-1.5 z-20 relative">
//         <div className="flex gap-1">
//           <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
//           <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
//           <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
//         </div>
//         <div className="ml-4 h-4 flex-1 rounded-md bg-neutral-200/40 dark:bg-white/5 flex items-center px-3 text-[10px] text-neutral-500 dark:text-neutral-400 font-medium truncate">
//           {title}
//         </div>
//       </div>
      
//       <div className="relative h-[calc(100%-32px)] w-full bg-neutral-50 dark:bg-neutral-950">
//         <Image
//           src={image}
//           alt={`Screenshot mockup of ${title}`}
//           fill
//           priority={false}
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           className="object-cover transition-transform duration-700 ease-out group-hover/browser:scale-105"
//         />

//         <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover/browser:opacity-100 transition-opacity duration-500" />

//         <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 z-20">
//           {tech.slice(0, 3).map((t) => (
//             <span
//               key={t}
//               className="rounded-full bg-black/60 dark:bg-black/50 backdrop-blur-md px-2 py-0.5 text-[10px] text-white border border-white/10 font-medium"
//             >
//               {t}
//             </span>
//           ))}
//         </div>

//         <div className="absolute inset-0 opacity-100 md:opacity-0 md:group-hover/browser:opacity-100 transition-all duration-300 bg-black/40 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center gap-2.5 z-30">
//           <Link 
//             href={primaryAction.href} 
//             target={primaryAction.isExternal ? "_blank" : undefined}
//             aria-label={`${primaryAction.label} for ${title}`}
//             className="inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-xs font-semibold text-neutral-900 shadow-sm hover:bg-neutral-100 transition"
//           >
//             {primaryAction.label} <Icon size={12} />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ================= PROJECT CARD COMPONENT ================= */
// function ProjectCard({ project }: { project: Project }) {
//   const primaryAction = getPrimaryAction(project);
//   const config = statusConfig[project.status];

//   // Dynamic but non-distorting tracking position state
//   const [pos, setPos] = useState({ x: 0, y: 0 });

//   function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setPos({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top,
//     });
//   }

//   const cardVariants = {
//     hidden: {
//       opacity: 0,
//       y: 24,
//       scale: 0.98,
//     },
//     show: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         ease: [0.25, 1, 0.35, 1],
//       },
//     },
//   } as const;

//   return (
//     <div className="relative group" onMouseMove={handleMouseMove}>
//       {/* Soft tracking illumination follow layer (No structural layout deformation) */}
//       <div
//         className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 rounded-2xl z-0"
//         style={{
//           background: `radial-gradient(300px circle at ${pos.x}px ${pos.y}px, rgba(139,92,246,0.12), transparent 60%)`,
//         }}
//       />

//       <motion.div 
//         variants={cardVariants}
//         className="relative flex flex-col h-full rounded-2xl bg-white dark:bg-neutral-900/40 p-4 border border-neutral-200 dark:border-neutral-800 group-hover:border-violet-500/20 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition-all duration-300 z-10"
//         whileHover={{
//           y: -8,
//           transition: { duration: 0.2, ease: "easeOut" },
//         }}
//       >
//         <BrowserMockup project={project} />

//         <div className="mt-5 flex flex-col flex-1">
//           <div className="flex items-center justify-between mb-1.5">
//             <span className={cn("text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md", config.badgeStyle)}>
//               {project.role}
//             </span>
//             <span className="text-[11px] font-semibold text-neutral-400 dark:text-neutral-500">
//               {project.year}
//             </span>
//           </div>

//           <div className="flex items-center justify-between mb-2">
//             <h3 className="font-bold text-lg text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:text-violet-500 transition-colors duration-300">
//               {project.title}
//             </h3>
//           </div>
          
//           <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-5 line-clamp-2 leading-relaxed">
//             {project.description}
//           </p>

//           <div className="grid grid-cols-3 gap-2 mb-5">
//             {project.impactMetrics.map((metric) => (
//               <div
//                 key={metric}
//                 className="rounded-lg bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200/20 dark:border-neutral-700/20 p-2 text-center text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 truncate"
//               >
//                 {metric}
//               </div>
//             ))}
//           </div>

//           <div className="mt-auto flex gap-2 pt-4 border-t border-neutral-100 dark:border-neutral-800/60">
//             {project.github && (
//               <Link
//                 href={project.github}
//                 target="_blank"
//                 className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition shadow-sm"
//                 title="View Source Repository"
//                 aria-label={`View GitHub repository for ${project.title}`}
//               >
//                 <FaGithub size={16} />
//               </Link>
//             )}

//             <Link
//               href={primaryAction.href}
//               target={primaryAction.isExternal ? "_blank" : undefined}
//               aria-label={`${primaryAction.label} for ${project.title}`}
//               className={cn(
//                 "flex-1 inline-flex items-center justify-center rounded-lg text-xs font-semibold h-9 border transition shadow-sm",
//                 project.status === ProjectStatus.LIVE
//                   ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 border-transparent"
//                   : "bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 border-neutral-200/40 dark:border-neutral-700/40 hover:bg-neutral-200 dark:hover:bg-neutral-700"
//               )}
//             >
//               {primaryAction.label}
//             </Link>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }




// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { FaGithub } from "react-icons/fa";
// import { FiExternalLink, FiFileText, FiCode } from "react-icons/fi";

// const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(" ");

// export const ProjectStatus = {
//   LIVE: "live",
//   PRIVATE: "private",
//   OPEN_SOURCE: "open-source",
//   PERSONAL: "personal",
// } as const;

// export type ProjectVisibility = typeof ProjectStatus[keyof typeof ProjectStatus];

// interface Project {
//   title: string;
//   role: string;
//   description: string;
//   scene: string;
//   tech: string[];
//   highlights: string[];
//   github: string | null;
//   live: string | null;
//   slug: string;
//   image: string;
//   status: ProjectVisibility;
//   year: string;
//   impactMetrics: string[];
//   isEnterprise?: boolean;
// }

// const statusConfig: Record<ProjectVisibility, { style: string; badgeStyle: string; label: string }> = {
//   [ProjectStatus.LIVE]: { 
//     style: "bg-emerald-500/20 text-emerald-400 dark:text-emerald-300 border-emerald-500/30", 
//     badgeStyle: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10",
//     label: "Live" 
//   },
//   [ProjectStatus.PRIVATE]: { 
//     style: "bg-amber-500/20 text-amber-400 dark:text-amber-300 border-amber-500/30", 
//     badgeStyle: "text-amber-600 dark:text-amber-400 bg-amber-500/10",
//     label: "Private" 
//   },
//   [ProjectStatus.OPEN_SOURCE]: { 
//     style: "bg-violet-500/20 text-violet-400 dark:text-violet-300 border-violet-500/30", 
//     badgeStyle: "text-violet-600 dark:text-violet-400 bg-violet-500/10",
//     label: "Open Source" 
//   },
//   [ProjectStatus.PERSONAL]: { 
//     style: "bg-blue-500/20 text-blue-400 dark:text-blue-300 border-blue-500/30", 
//     badgeStyle: "text-blue-600 dark:text-blue-400 bg-blue-500/10",
//     label: "Personal" 
//   },
// };

// function getPrimaryAction(project: Project) {
//   switch (project.status) {
//     case ProjectStatus.LIVE:
//       return { label: "Live Preview", href: project.live ?? "#", icon: FiExternalLink, isExternal: true };
//     case ProjectStatus.OPEN_SOURCE:
//       return { label: "View Code", href: project.github ?? "#", icon: FiCode, isExternal: true };
//     case ProjectStatus.PERSONAL:
//       return { label: "View Project", href: project.github ?? project.slug, icon: FiCode, isExternal: !!project.github };
//     case ProjectStatus.PRIVATE:
//       return { label: "Explore Case Study", href: project.slug, icon: FiFileText, isExternal: false };
//     default:
//       return { label: "View Details", href: project.slug, icon: FiFileText, isExternal: false };
//   }
// }

// export default function Projects() {
//   const projects: Project[] = [
//     {
//       title: "Portfolio Website",
//       role: "Frontend / Creative Dev",
//       description: "A modern portfolio built with Next.js, Tailwind CSS, Framer Motion and TypeScript.",
//       scene: "car",
//       tech: ["Next.js", "Tailwind", "TypeScript"],
//       highlights: ["Framer Motion", "Responsive Design", "SEO Optimized"],
//       github: "https://github.com/your-username/portfolio",
//       live: "https://your-portfolio.com",
//       slug: "/blog/portfolio-website",
//       image: "/images/projects/portfolio.png",
//       status: ProjectStatus.LIVE,
//       year: "2026",
//       impactMetrics: ["99 Lighthouse", "Vercel Edge", "SEO Opt."],
//     },
//     {
//       title: "PCB Simulation Suite",
//       role: "Automation / Backend",
//       description: "Engineered an enterprise-grade automation platform for Advantest to optimize hardware verification workflows.",
//       scene: "chip",
//       tech: ["Python", "TCL", "PostgreSQL", "Docker"],
//       highlights: ["Hardware Automation", "Workflow Optimization", "Custom Analytics"],
//       github: null,
//       live: null,
//       slug: "/blog/advantest-automation-case-study",
//       image: "/images/projects/advantest-automation.png",
//       status: ProjectStatus.PRIVATE,
//       year: "2025",
//       impactMetrics: ["50+ Workflows", "72% Faster", "Enterprise"],
//       isEnterprise: true,
//     },
//     {
//       title: "Automation Tool",
//       role: "Open Source / Tooling",
//       description: "Backend automation system for repetitive workflows and engineering processes.",
//       scene: "robot",
//       tech: ["Node.js", "Express", "MongoDB"],
//       highlights: ["CRON Jobs", "REST APIs", "Error Logging"],
//       github: "https://github.com/your-username/automation",
//       live: null,
//       slug: "https://github.com/your-username/automation#readme",
//       image: "/images/projects/automation.png",
//       status: ProjectStatus.OPEN_SOURCE,
//       year: "2025",
//       impactMetrics: ["12k Stars", "MIT License", "OS Community"],
//     },
//     {
//       title: "CLI Task Manager",
//       role: "Personal Tooling / DX",
//       description: "An intuitive, blazing-fast command line environment tool for tracking micro-tasks offline locally.",
//       scene: "terminal",
//       tech: ["Node.js", "Inquirer"],
//       highlights: ["CLI UX", "Productivity", "JSON Storage"],
//       github: "https://github.com/your-username/cli-task-manager",
//       live: null,
//       slug: "/blog/cli-task-manager",
//       image: "/images/projects/cli.png",
//       status: ProjectStatus.PERSONAL,
//       year: "2025",
//       impactMetrics: ["Fast CLI", "Offline", "Personal Tool"],
//     }
//   ];

//   const productionProjects = projects.filter(p => p.status === ProjectStatus.LIVE || p.status === ProjectStatus.PRIVATE);
//   const openSourceProjects = projects.filter(p => p.status === ProjectStatus.OPEN_SOURCE || p.status === ProjectStatus.PERSONAL);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.12 },
//     },
//   };

//   return (
//     <section id="projects" className="section-padding py-24 bg-neutral-50/50 dark:bg-neutral-950/20 overflow-x-clip relative">
//       <div className="absolute top-1/4 left-10 w-96 h-96 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px] pointer-events-none animate-[pulse_12s_ease-in-out_infinite]" />
//       <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none animate-[pulse_16s_ease-in-out_infinite]" />

//       <div className="container-width px-4 relative z-10">
//         <div className="mb-16 text-center">
//           <h2 className="text-4xl font-bold tracking-tight">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-neutral-500 dark:text-neutral-400">
//             A collection of projects demonstrating full-stack development, automation and UI engineering.
//           </p>
//         </div>

//         {productionProjects.length > 0 && (
//           <div className="mb-20">
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Production & Commercial Releases
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <motion.div 
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.2 }}
//               className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start"
//             >
//               {productionProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </motion.div>
//           </div>
//         )}

//         {openSourceProjects.length > 0 && (
//           <div>
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Open Source & Engineering Tooling
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <motion.div 
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.2 }}
//               className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start"
//             >
//               {openSourceProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </motion.div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// /* ================= BROWSER MOCKUP COMPONENT ================= */
// interface BrowserMockupProps {
//   project: Project;
// }

// function BrowserMockup({ project }: BrowserMockupProps) {
//   const { title, image, status, tech } = project;
//   const config = statusConfig[status];
//   const primaryAction = getPrimaryAction(project);
//   const Icon = primaryAction.icon;

//   return (
//     <div className="group/browser relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900 shadow-xl transition-all duration-500">
//       <div className="absolute top-3 left-3 z-20">
//         <span className={cn("rounded-full px-2 py-1 text-[10px] font-semibold backdrop-blur-md border", config.style)}>
//           {config.label}
//         </span>
//       </div>

//       <div className="flex items-center h-8 px-3 bg-neutral-100/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 gap-1.5 z-20 relative">
//         {/* Upgrade 1: Dynamic "Traffic Lights" Hover State */}
//         <div className="flex gap-1 group-hover/browser:scale-105 transition-transform duration-300">
//           <div className="w-2 h-2 rounded-full bg-red-400/40 group-hover/browser:bg-red-400 transition-colors duration-300 animate-pulse" />
//           <div className="w-2 h-2 rounded-full bg-yellow-400/40 group-hover/browser:bg-yellow-400 transition-colors duration-300 animate-pulse delay-150" />
//           <div className="w-2 h-2 rounded-full bg-green-400/40 group-hover/browser:bg-green-400 transition-colors duration-300 animate-pulse delay-300" />
//         </div>
//         <div className="ml-4 h-4 flex-1 rounded-md bg-neutral-200/40 dark:bg-white/5 flex items-center px-3 text-[10px] text-neutral-500 dark:text-neutral-400 font-medium truncate">
//           {title}
//         </div>
//       </div>
      
//       <div className="relative h-[calc(100%-32px)] w-full bg-neutral-50 dark:bg-neutral-950">
//         {/* Upgrade 4: Added float lift along with scaling zoom */}
//         <Image
//           src={image}
//           alt={`Screenshot mockup of ${title}`}
//           fill
//           priority={false}
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           className="object-cover transition-transform duration-700 ease-out group-hover/browser:scale-105 group-hover/browser:translate-y-[-4px]"
//         />

//         <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover/browser:opacity-100 transition-opacity duration-500" />

//         <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 z-20">
//           {tech.slice(0, 3).map((t) => (
//             <span
//               key={t}
//               className="rounded-full bg-black/60 dark:bg-black/50 backdrop-blur-md px-2 py-0.5 text-[10px] text-white border border-white/10 font-medium"
//             >
//               {t}
//             </span>
//           ))}
//         </div>

//         <div className="absolute inset-0 opacity-100 md:opacity-0 md:group-hover/browser:opacity-100 transition-all duration-300 bg-black/40 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center gap-2.5 z-30">
//           <Link 
//             href={primaryAction.href} 
//             target={primaryAction.isExternal ? "_blank" : undefined}
//             aria-label={`${primaryAction.label} for ${title}`}
//             className="inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-xs font-semibold text-neutral-900 shadow-sm hover:bg-neutral-100 transition"
//           >
//             {primaryAction.label} <Icon size={12} />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ================= PROJECT CARD COMPONENT ================= */
// function ProjectCard({ project }: { project: Project }) {
//   const primaryAction = getPrimaryAction(project);
//   const config = statusConfig[project.status];

//   const [pos, setPos] = useState({ x: 0, y: 0 });

//   function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setPos({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top,
//     });
//   }

//   const cardVariants = {
//     hidden: {
//       opacity: 0,
//       y: 24,
//       scale: 0.98,
//     },
//     show: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         ease: [0.25, 1, 0.35, 1],
//       },
//     },
//   } as const;

//   return (
//     <div className="relative group perspective-1000" onMouseMove={handleMouseMove}>
//       {/* Soft tracking illumination follow layer */}
//       <div
//         className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 rounded-2xl z-0"
//         style={{
//           background: `radial-gradient(300px circle at ${pos.x}px ${pos.y}px, rgba(139,92,246,0.12), transparent 60%)`,
//         }}
//       />

//       {/* Upgrade 2: Upgraded motion parameters to include 3D space tilting, scaling, and lifting */}
//       <motion.div 
//         variants={cardVariants}
//         className="relative flex flex-col h-full rounded-2xl bg-white dark:bg-neutral-900/40 p-4 border border-neutral-200 dark:border-neutral-800 group-hover:border-violet-500/20 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition-all duration-300 z-10 overflow-hidden"
//         whileHover={{
//           y: -10,
//           scale: 1.02,
//           rotateX: 2,
//           rotateY: -2,
//           transition: { duration: 0.25, ease: "easeOut" },
//         }}
//       >
//         {/* Upgrade 3: Energy Gradient Drift layer inside the root card wrapper */}
//         <motion.div
//           className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none z-0"
//           animate={{
//             background: [
//               "radial-gradient(400px circle at 0% 0%, rgba(139,92,246,0.10), transparent 60%)",
//               "radial-gradient(400px circle at 100% 100%, rgba(34,211,238,0.10), transparent 60%)",
//               "radial-gradient(400px circle at 50% 50%, rgba(139,92,246,0.10), transparent 60%)",
//             ],
//           }}
//           transition={{
//             duration: 6,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />

//         {/* Relative layout boundaries to ensure overlay glows drift beneath text layers */}
//         <div className="relative z-10 flex flex-col h-full">
//           <BrowserMockup project={project} />

//           <div className="mt-5 flex flex-col flex-1">
//             <div className="flex items-center justify-between mb-1.5">
//               <span className={cn("text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md", config.badgeStyle)}>
//                 {project.role}
//               </span>
//               <span className="text-[11px] font-semibold text-neutral-400 dark:text-neutral-500">
//                 {project.year}
//               </span>
//             </div>

//             <div className="flex items-center justify-between mb-2">
//               <h3 className="font-bold text-lg text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:text-violet-500 transition-colors duration-300">
//                 {project.title}
//               </h3>
//             </div>
            
//             <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-5 line-clamp-2 leading-relaxed">
//               {project.description}
//             </p>

//             <div className="grid grid-cols-3 gap-2 mb-5">
//               {project.impactMetrics.map((metric) => (
//                 <div
//                   key={metric}
//                   className="rounded-lg bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200/20 dark:border-neutral-700/20 p-2 text-center text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 truncate"
//                 >
//                   {metric}
//                 </div>
//               ))}
//             </div>

//             <div className="mt-auto flex gap-2 pt-4 border-t border-neutral-100 dark:border-neutral-800/60">
//               {project.github && (
//                 <Link
//                   href={project.github}
//                   target="_blank"
//                   className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition shadow-sm"
//                   title="View Source Repository"
//                   aria-label={`View GitHub repository for ${project.title}`}
//                 >
//                   <FaGithub size={16} />
//                 </Link>
//               )}

//               <Link
//                 href={primaryAction.href}
//                 target={primaryAction.isExternal ? "_blank" : undefined}
//                 aria-label={`${primaryAction.label} for ${project.title}`}
//                 className={cn(
//                   "flex-1 inline-flex items-center justify-center rounded-lg text-xs font-semibold h-9 border transition shadow-sm",
//                   project.status === ProjectStatus.LIVE
//                     ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 border-transparent"
//                     : "bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 border-neutral-200/40 dark:border-neutral-700/40 hover:bg-neutral-200 dark:hover:bg-neutral-700"
//                 )}
//               >
//                 {primaryAction.label}
//               </Link>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }






// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { FaGithub } from "react-icons/fa";
// import { FiExternalLink, FiFileText, FiCode } from "react-icons/fi";

// const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(" ");

// export const ProjectStatus = {
//   LIVE: "live",
//   PRIVATE: "private",
//   OPEN_SOURCE: "open-source",
//   PERSONAL: "personal",
// } as const;

// export type ProjectVisibility = typeof ProjectStatus[keyof typeof ProjectStatus];

// interface Project {
//   title: string;
//   role: string;
//   description: string;
//   scene: string;
//   tech: string[];
//   highlights: string[];
//   github: string | null;
//   live: string | null;
//   slug: string;
//   image: string;
//   status: ProjectVisibility;
//   year: string;
//   impactMetrics: string[];
//   isEnterprise?: boolean;
// }

// const statusConfig: Record<ProjectVisibility, { style: string; badgeStyle: string; label: string }> = {
//   [ProjectStatus.LIVE]: { 
//     style: "bg-emerald-500/20 text-emerald-400 dark:text-emerald-300 border-emerald-500/30", 
//     badgeStyle: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10",
//     label: "Live" 
//   },
//   [ProjectStatus.PRIVATE]: { 
//     style: "bg-amber-500/20 text-amber-400 dark:text-amber-300 border-amber-500/30", 
//     badgeStyle: "text-amber-600 dark:text-amber-400 bg-amber-500/10",
//     label: "Private" 
//   },
//   [ProjectStatus.OPEN_SOURCE]: { 
//     style: "bg-violet-500/20 text-violet-400 dark:text-violet-300 border-violet-500/30", 
//     badgeStyle: "text-violet-600 dark:text-violet-400 bg-violet-500/10",
//     label: "Open Source" 
//   },
//   [ProjectStatus.PERSONAL]: { 
//     style: "bg-blue-500/20 text-blue-400 dark:text-blue-300 border-blue-500/30", 
//     badgeStyle: "text-blue-600 dark:text-blue-400 bg-blue-500/10",
//     label: "Personal" 
//   },
// };

// function getPrimaryAction(project: Project) {
//   switch (project.status) {
//     case ProjectStatus.LIVE:
//       return { label: "Live Preview", href: project.live ?? "#", icon: FiExternalLink, isExternal: true };
//     case ProjectStatus.OPEN_SOURCE:
//       return { label: "View Code", href: project.github ?? "#", icon: FiCode, isExternal: true };
//     case ProjectStatus.PERSONAL:
//       return { label: "View Project", href: project.github ?? project.slug, icon: FiCode, isExternal: !!project.github };
//     case ProjectStatus.PRIVATE:
//       return { label: "Explore Case Study", href: project.slug, icon: FiFileText, isExternal: false };
//     default:
//       return { label: "View Details", href: project.slug, icon: FiFileText, isExternal: false };
//   }
// }

// export default function Projects() {
//   const projects: Project[] = [
//     {
//       title: "Portfolio Website",
//       role: "Frontend / Creative Dev",
//       description: "A modern portfolio built with Next.js, Tailwind CSS, Framer Motion and TypeScript.",
//       scene: "car",
//       tech: ["Next.js", "Tailwind", "TypeScript"],
//       highlights: ["Framer Motion", "Responsive Design", "SEO Optimized"],
//       github: "https://github.com/your-username/portfolio",
//       live: "https://your-portfolio.com",
//       slug: "/blog/portfolio-website",
//       image: "/images/projects/portfolio.png",
//       status: ProjectStatus.LIVE,
//       year: "2026",
//       impactMetrics: ["99 Lighthouse", "Vercel Edge", "SEO Opt."],
//     },
//     {
//       title: "PCB Simulation Suite",
//       role: "Automation / Backend",
//       description: "Engineered an enterprise-grade automation platform for Advantest to optimize hardware verification workflows.",
//       scene: "chip",
//       tech: ["Python", "TCL", "PostgreSQL", "Docker"],
//       highlights: ["Hardware Automation", "Workflow Optimization", "Custom Analytics"],
//       github: null,
//       live: null,
//       slug: "/blog/advantest-automation-case-study",
//       image: "/images/projects/advantest-automation.png",
//       status: ProjectStatus.PRIVATE,
//       year: "2025",
//       impactMetrics: ["50+ Workflows", "72% Faster", "Enterprise"],
//       isEnterprise: true,
//     },
//     {
//       title: "Automation Tool",
//       role: "Open Source / Tooling",
//       description: "Backend automation system for repetitive workflows and engineering processes.",
//       scene: "robot",
//       tech: ["Node.js", "Express", "MongoDB"],
//       highlights: ["CRON Jobs", "REST APIs", "Error Logging"],
//       github: "https://github.com/your-username/automation",
//       live: null,
//       slug: "https://github.com/your-username/automation#readme",
//       image: "/images/projects/automation.png",
//       status: ProjectStatus.OPEN_SOURCE,
//       year: "2025",
//       impactMetrics: ["12k Stars", "MIT License", "OS Community"],
//     },
//     {
//       title: "CLI Task Manager",
//       role: "Personal Tooling / DX",
//       description: "An intuitive, blazing-fast command line environment tool for tracking micro-tasks offline locally.",
//       scene: "terminal",
//       tech: ["Node.js", "Inquirer"],
//       highlights: ["CLI UX", "Productivity", "JSON Storage"],
//       github: "https://github.com/your-username/cli-task-manager",
//       live: null,
//       slug: "/blog/cli-task-manager",
//       image: "/images/projects/cli.png",
//       status: ProjectStatus.PERSONAL,
//       year: "2025",
//       impactMetrics: ["Fast CLI", "Offline", "Personal Tool"],
//     }
//   ];

//   const productionProjects = projects.filter(p => p.status === ProjectStatus.LIVE || p.status === ProjectStatus.PRIVATE);
//   const openSourceProjects = projects.filter(p => p.status === ProjectStatus.OPEN_SOURCE || p.status === ProjectStatus.PERSONAL);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.12 },
//     },
//   };

//   return (
//     <section id="projects" className="section-padding py-24 bg-neutral-50/50 dark:bg-neutral-950/20 overflow-x-clip relative">
//       <div className="absolute top-1/4 left-10 w-96 h-96 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px] pointer-events-none animate-[pulse_12s_ease-in-out_infinite]" />
//       <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none animate-[pulse_16s_ease-in-out_infinite]" />

//       <div className="container-width px-4 relative z-10">
//         <div className="mb-16 text-center">
//           <h2 className="text-4xl font-bold tracking-tight">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-neutral-500 dark:text-neutral-400">
//             A collection of projects demonstrating full-stack development, automation and UI engineering.
//           </p>
//         </div>

//         {productionProjects.length > 0 && (
//           <div className="mb-20">
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Production & Commercial Releases
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <motion.div 
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.2 }}
//               className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start"
//             >
//               {productionProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </motion.div>
//           </div>
//         )}

//         {openSourceProjects.length > 0 && (
//           <div>
//             <div className="flex items-center gap-4 mb-8">
//               <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
//                 Open Source & Engineering Tooling
//               </h3>
//               <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
//             </div>
//             <motion.div 
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.2 }}
//               className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start"
//             >
//               {openSourceProjects.map((project) => (
//                 <ProjectCard key={project.title} project={project} />
//               ))}
//             </motion.div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// /* ================= BROWSER MOCKUP COMPONENT ================= */
// interface BrowserMockupProps {
//   project: Project;
// }

// function BrowserMockup({ project }: BrowserMockupProps) {
//   const { title, image, status, tech } = project;
//   const config = statusConfig[status];
//   const primaryAction = getPrimaryAction(project);
//   const Icon = primaryAction.icon;

//   return (
//     <div className="group/browser relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900 shadow-xl transition-all duration-500">
//       {/* Fixed styling alignment layer below chrome border */}
//       <div className="absolute top-[34px] left-3 z-20">
//         <span className={cn("rounded-full px-2 py-1 text-[10px] font-semibold backdrop-blur-md border", config.style)}>
//           {config.label}
//         </span>
//       </div>

//       <div className="flex items-center h-8 px-3 bg-neutral-100/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 gap-1.5 z-20 relative">
//         {/* Upgrade 1: Dynamic "Traffic Lights" Hover State */}
//         <div className="flex gap-1 group-hover/browser:scale-105 transition-transform duration-300">
//           <div className="w-2 h-2 rounded-full bg-red-400/40 group-hover/browser:bg-red-400 transition-colors duration-300 animate-pulse" />
//           <div className="w-2 h-2 rounded-full bg-yellow-400/40 group-hover/browser:bg-yellow-400 transition-colors duration-300 animate-pulse delay-150" />
//           <div className="w-2 h-2 rounded-full bg-green-400/40 group-hover/browser:bg-green-400 transition-colors duration-300 animate-pulse delay-300" />
//         </div>
//         <div className="ml-4 h-4 flex-1 rounded-md bg-neutral-200/40 dark:bg-white/5 flex items-center px-3 text-[10px] text-neutral-500 dark:text-neutral-400 font-medium truncate">
//           {title}
//         </div>
//       </div>
      
//       <div className="relative h-[calc(100%-32px)] w-full bg-neutral-50 dark:bg-neutral-950">
//         {/* Upgrade 4: Added float lift along with scaling zoom */}
//         <Image
//           src={image}
//           alt={`Screenshot mockup of ${title}`}
//           fill
//           priority={false}
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           className="object-cover transition-transform duration-700 ease-out group-hover/browser:scale-105 group-hover/browser:translate-y-[-4px]"
//         />

//         <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover/browser:opacity-100 transition-opacity duration-500" />

//         <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 z-20">
//           {tech.slice(0, 3).map((t) => (
//             <span
//               key={t}
//               className="rounded-full bg-black/60 dark:bg-black/50 backdrop-blur-md px-2 py-0.5 text-[10px] text-white border border-white/10 font-medium"
//             >
//               {t}
//             </span>
//           ))}
//         </div>

//         <div className="absolute inset-0 opacity-100 md:opacity-0 md:group-hover/browser:opacity-100 transition-all duration-300 bg-black/40 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center gap-2.5 z-30">
//           <Link 
//             href={primaryAction.href} 
//             target={primaryAction.isExternal ? "_blank" : undefined}
//             aria-label={`${primaryAction.label} for ${title}`}
//             className="inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-xs font-semibold text-neutral-900 shadow-sm hover:bg-neutral-100 transition"
//           >
//             {primaryAction.label} <Icon size={12} />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ================= PROJECT CARD COMPONENT ================= */
// function ProjectCard({ project }: { project: Project }) {
//   const primaryAction = getPrimaryAction(project);
//   const config = statusConfig[project.status];

//   const [pos, setPos] = useState({ x: 0, y: 0 });

//   function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setPos({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top,
//     });
//   }

//   const cardVariants = {
//     hidden: {
//       opacity: 0,
//       y: 24,
//       scale: 0.98,
//     },
//     show: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         ease: [0.25, 1, 0.35, 1],
//       },
//     },
//   } as const;

//   return (
//     <div className="relative group perspective-1000" onMouseMove={handleMouseMove}>
//       {/* Soft tracking illumination follow layer */}
//       <div
//         className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 rounded-2xl z-0"
//         style={{
//           background: `radial-gradient(300px circle at ${pos.x}px ${pos.y}px, rgba(139,92,246,0.12), transparent 60%)`,
//         }}
//       />

//       {/* Upgrade 2: Upgraded motion parameters to include 3D space tilting, scaling, and lifting */}
//       <motion.div 
//         variants={cardVariants}
//         className="relative flex flex-col h-full rounded-2xl bg-white dark:bg-neutral-900/40 p-4 border border-neutral-200 dark:border-neutral-800 group-hover:border-violet-500/20 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition-all duration-300 z-10 overflow-hidden"
//         whileHover={{
//           y: -10,
//           scale: 1.02,
//           rotateX: 2,
//           rotateY: -2,
//           transition: { duration: 0.25, ease: "easeOut" },
//         }}
//       >
//         {/* Upgrade 3: Energy Gradient Drift layer inside the root card wrapper */}
//         <motion.div
//           className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none z-0"
//           animate={{
//             background: [
//               "radial-gradient(400px circle at 0% 0%, rgba(139,92,246,0.10), transparent 60%)",
//               "radial-gradient(400px circle at 100% 100%, rgba(34,211,238,0.10), transparent 60%)",
//               "radial-gradient(400px circle at 50% 50%, rgba(139,92,246,0.10), transparent 60%)",
//             ],
//           }}
//           transition={{
//             duration: 6,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />

//         {/* Relative layout boundaries to ensure overlay glows drift beneath text layers */}
//         <div className="relative z-10 flex flex-col h-full">
//           <BrowserMockup project={project} />

//           <div className="mt-5 flex flex-col flex-1">
//             <div className="flex items-center justify-between mb-1.5">
//               <span className={cn("text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md", config.badgeStyle)}>
//                 {project.role}
//               </span>
//               <span className="text-[11px] font-semibold text-neutral-400 dark:text-neutral-500">
//                 {project.year}
//               </span>
//             </div>

//             <div className="flex items-center justify-between mb-2">
//               <h3 className="font-bold text-lg text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:text-violet-500 transition-colors duration-300">
//                 {project.title}
//               </h3>
//             </div>
            
//             <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-5 line-clamp-2 leading-relaxed">
//               {project.description}
//             </p>

//             <div className="grid grid-cols-3 gap-2 mb-5">
//               {project.impactMetrics.map((metric) => (
//                 <div
//                   key={metric}
//                   className="rounded-lg bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200/20 dark:border-neutral-700/20 p-2 text-center text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 truncate"
//                 >
//                   {metric}
//                 </div>
//               ))}
//             </div>

//             <div className="mt-auto flex gap-2 pt-4 border-t border-neutral-100 dark:border-neutral-800/60">
//               {project.github && (
//                 <Link
//                   href={project.github}
//                   target="_blank"
//                   className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition shadow-sm"
//                   title="View Source Repository"
//                   aria-label={`View GitHub repository for ${project.title}`}
//                 >
//                   <FaGithub size={16} />
//                 </Link>
//               )}

//               <Link
//                 href={primaryAction.href}
//                 target={primaryAction.isExternal ? "_blank" : undefined}
//                 aria-label={`${primaryAction.label} for ${project.title}`}
//                 className={cn(
//                   "flex-1 inline-flex items-center justify-center rounded-lg text-xs font-semibold h-9 border transition shadow-sm",
//                   project.status === ProjectStatus.LIVE
//                     ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 border-transparent"
//                     : "bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 border-neutral-200/40 dark:border-neutral-700/40 hover:bg-neutral-200 dark:hover:bg-neutral-700"
//                 )}
//               >
//                 {primaryAction.label}
//               </Link>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }





"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiFileText, FiCode } from "react-icons/fi";

const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(" ");

export const ProjectStatus = {
  LIVE: "live",
  PRIVATE: "private",
  OPEN_SOURCE: "open-source",
  PERSONAL: "personal",
} as const;

export type ProjectVisibility = typeof ProjectStatus[keyof typeof ProjectStatus];

interface Project {
  title: string;
  role: string;
  description: string;
  scene: string;
  tech: string[];
  highlights: string[];
  github: string | null;
  live: string | null;
  slug: string;
  image: string;
  status: ProjectVisibility;
  year: string;
  impactMetrics: string[];
  isEnterprise?: boolean;
}

const statusConfig: Record<ProjectVisibility, { style: string; badgeStyle: string; label: string }> = {
  [ProjectStatus.LIVE]: { 
    style: "bg-emerald-500/20 text-emerald-400 dark:text-emerald-300 border-emerald-500/30", 
    badgeStyle: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10",
    label: "Live" 
  },
  [ProjectStatus.PRIVATE]: { 
    style: "bg-amber-500/20 text-amber-400 dark:text-amber-300 border-amber-500/30", 
    badgeStyle: "text-amber-600 dark:text-amber-400 bg-amber-500/10",
    label: "Private" 
  },
  [ProjectStatus.OPEN_SOURCE]: { 
    style: "bg-violet-500/20 text-violet-400 dark:text-violet-300 border-violet-500/30", 
    badgeStyle: "text-violet-600 dark:text-violet-400 bg-violet-500/10",
    label: "Open Source" 
  },
  [ProjectStatus.PERSONAL]: { 
    style: "bg-blue-500/20 text-blue-400 dark:text-blue-300 border-blue-500/30", 
    badgeStyle: "text-blue-600 dark:text-blue-400 bg-blue-500/10",
    label: "Personal" 
  },
};

function getPrimaryAction(project: Project) {
  switch (project.status) {
    case ProjectStatus.LIVE:
      return { label: "Live Preview", href: project.live ?? "#", icon: FiExternalLink, isExternal: true };
    case ProjectStatus.OPEN_SOURCE:
      return { label: "View Code", href: project.github ?? "#", icon: FiCode, isExternal: true };
    case ProjectStatus.PERSONAL:
      return { label: "View Project", href: project.github ?? project.slug, icon: FiCode, isExternal: !!project.github };
    case ProjectStatus.PRIVATE:
      return { label: "Explore Case Study", href: project.slug, icon: FiFileText, isExternal: false };
    default:
      return { label: "View Details", href: project.slug, icon: FiFileText, isExternal: false };
  }
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Portfolio Website",
      role: "Frontend / Creative Dev",
      description: "A modern portfolio built with Next.js, Tailwind CSS, Framer Motion and TypeScript.",
      scene: "car",
      tech: ["Next.js", "Tailwind", "TypeScript"],
      highlights: ["Framer Motion", "Responsive Design", "SEO Optimized"],
      github: "https://github.com/your-username/portfolio",
      live: "https://your-portfolio.com",
      slug: "/blog/portfolio-website",
      image: "/images/projects/portfolio.png",
      status: ProjectStatus.LIVE,
      year: "2026",
      impactMetrics: ["99 Lighthouse", "Vercel Edge", "SEO Opt."],
    },
    {
      title: "PCB Simulation Suite",
      role: "Automation / Backend",
      description: "Engineered an enterprise-grade automation platform for Advantest to optimize hardware verification workflows.",
      scene: "chip",
      tech: ["Python", "TCL", "PostgreSQL", "Docker"],
      highlights: ["Hardware Automation", "Workflow Optimization", "Custom Analytics"],
      github: null,
      live: null,
      slug: "/blog/advantest-automation-case-study",
      image: "/images/projects/advantest-automation.png",
      status: ProjectStatus.PRIVATE,
      year: "2025",
      impactMetrics: ["50+ Workflows", "72% Faster", "Enterprise"],
      isEnterprise: true,
    },
    {
      title: "Automation Tool",
      role: "Open Source / Tooling",
      description: "Backend automation system for repetitive workflows and engineering processes.",
      scene: "robot",
      tech: ["Node.js", "Express", "MongoDB"],
      highlights: ["CRON Jobs", "REST APIs", "Error Logging"],
      github: "https://github.com/your-username/automation",
      live: null,
      slug: "https://github.com/your-username/automation#readme",
      image: "/images/projects/automation.png",
      status: ProjectStatus.OPEN_SOURCE,
      year: "2025",
      impactMetrics: ["12k Stars", "MIT License", "OS Community"],
    },
    {
      title: "CLI Task Manager",
      role: "Personal Tooling / DX",
      description: "An intuitive, blazing-fast command line environment tool for tracking micro-tasks offline locally.",
      scene: "terminal",
      tech: ["Node.js", "Inquirer"],
      highlights: ["CLI UX", "Productivity", "JSON Storage"],
      github: "https://github.com/your-username/cli-task-manager",
      live: null,
      slug: "/blog/cli-task-manager",
      image: "/images/projects/cli.png",
      status: ProjectStatus.PERSONAL,
      year: "2025",
      impactMetrics: ["Fast CLI", "Offline", "Personal Tool"],
    }
  ];

  const productionProjects = projects.filter(p => p.status === ProjectStatus.LIVE || p.status === ProjectStatus.PRIVATE);
  const openSourceProjects = projects.filter(p => p.status === ProjectStatus.OPEN_SOURCE || p.status === ProjectStatus.PERSONAL);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  return (
    <section id="projects" className="section-padding py-24 bg-neutral-50/50 dark:bg-neutral-950/20 overflow-x-clip relative">
      {/* Dynamic injection for the ambient float baseline keyframes */}
      <style jsx global>{`
        @keyframes ambientFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .animate-ambient-float {
          animation: ambientFloat 5s ease-in-out infinite;
        }
      `}</style>

      <div className="absolute top-1/4 left-10 w-96 h-96 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px] pointer-events-none animate-[pulse_12s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none animate-[pulse_16s_ease-in-out_infinite]" />

      <div className="container-width px-4 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-500 dark:text-neutral-400">
            A collection of projects demonstrating full-stack development, automation and UI engineering.
          </p>
        </div>

        {productionProjects.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
                Production & Commercial Releases
              </h3>
              <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
            </div>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start"
            >
              {productionProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </motion.div>
          </div>
        )}

        {openSourceProjects.length > 0 && (
          <div>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
                Open Source & Engineering Tooling
              </h3>
              <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
            </div>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start"
            >
              {openSourceProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ================= BROWSER MOCKUP COMPONENT ================= */
interface BrowserMockupProps {
  project: Project;
}

function BrowserMockup({ project }: BrowserMockupProps) {
  const { title, image, status, tech } = project;
  const config = statusConfig[status];
  const primaryAction = getPrimaryAction(project);
  const Icon = primaryAction.icon;

  return (
    <div className="group/browser relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900 shadow-xl transition-all duration-500">
      <div className="absolute top-[34px] left-3 z-20">
        <span className={cn("rounded-full px-2 py-1 text-[10px] font-semibold backdrop-blur-md border", config.style)}>
          {config.label}
        </span>
      </div>

      <div className="flex items-center h-8 px-3 bg-neutral-100/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 gap-1.5 z-20 relative">
        <div className="flex gap-1 group-hover/browser:scale-105 transition-transform duration-300">
          <div className="w-2 h-2 rounded-full bg-red-400/40 group-hover/browser:bg-red-400 transition-colors duration-300 animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-yellow-400/40 group-hover/browser:bg-yellow-400 transition-colors duration-300 animate-pulse delay-150" />
          <div className="w-2 h-2 rounded-full bg-green-400/40 group-hover/browser:bg-green-400 transition-colors duration-300 animate-pulse delay-300" />
        </div>
        <div className="ml-4 h-4 flex-1 rounded-md bg-neutral-200/40 dark:bg-white/5 flex items-center px-3 text-[10px] text-neutral-500 dark:text-neutral-400 font-medium truncate">
          {title}
        </div>
      </div>
      
      <div className="relative h-[calc(100%-32px)] w-full bg-neutral-50 dark:bg-neutral-950">
        <Image
          src={image}
          alt={`Screenshot mockup of ${title}`}
          fill
          priority={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover/browser:scale-105 group-hover/browser:translate-y-[-4px]"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover/browser:opacity-100 transition-opacity duration-500" />

        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 z-20">
          {tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-full bg-black/60 dark:bg-black/50 backdrop-blur-md px-2 py-0.5 text-[10px] text-white border border-white/10 font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="absolute inset-0 opacity-100 md:opacity-0 md:group-hover/browser:opacity-100 transition-all duration-300 bg-black/40 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center gap-2.5 z-30">
          <Link 
            href={primaryAction.href} 
            target={primaryAction.isExternal ? "_blank" : undefined}
            aria-label={`${primaryAction.label} for ${title}`}
            className="inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-xs font-semibold text-neutral-900 shadow-sm hover:bg-neutral-100 transition"
          >
            {primaryAction.label} <Icon size={12} />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ================= PROJECT CARD COMPONENT ================= */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const primaryAction = getPrimaryAction(project);
  const config = statusConfig[project.status];

  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 24,
      scale: 0.98,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 1, 0.35, 1],
      },
    },
  } as const;

  return (
    // The wrapper carries the ambient floating configuration, staggered by card index
    <div 
      className="relative group perspective-1000 animate-ambient-float hover:[animation-play-state:paused]" 
      onMouseMove={handleMouseMove}
      style={{ animationDelay: `${index * 0.4}s` }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 rounded-2xl z-0"
        style={{
          background: `radial-gradient(300px circle at ${pos.x}px ${pos.y}px, rgba(139,92,246,0.12), transparent 60%)`,
        }}
      />

      <motion.div 
        variants={cardVariants}
        className="relative flex flex-col h-full rounded-2xl bg-white dark:bg-neutral-900/40 p-4 border border-neutral-200 dark:border-neutral-800 group-hover:border-violet-500/30 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition-all duration-300 z-10 overflow-hidden"
        whileHover={{
          y: -10,
          scale: 1.02,
          rotateX: 2,
          rotateY: -2,
          transition: { duration: 0.25, ease: "easeOut" },
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none z-0"
          animate={{
            background: [
              "radial-gradient(400px circle at 0% 0%, rgba(139,92,246,0.10), transparent 60%)",
              "radial-gradient(400px circle at 100% 100%, rgba(34,211,238,0.10), transparent 60%)",
              "radial-gradient(400px circle at 50% 50%, rgba(139,92,246,0.10), transparent 60%)",
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="relative z-10 flex flex-col h-full">
          <BrowserMockup project={project} />

          <div className="mt-5 flex flex-col flex-1">
            <div className="flex items-center justify-between mb-1.5">
              <span className={cn("text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md", config.badgeStyle)}>
                {project.role}
              </span>
              <span className="text-[11px] font-semibold text-neutral-400 dark:text-neutral-500">
                {project.year}
              </span>
            </div>

            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-lg text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:text-violet-500 transition-colors duration-300">
                {project.title}
              </h3>
            </div>
            
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-5 line-clamp-2 leading-relaxed">
              {project.description}
            </p>

            <div className="grid grid-cols-3 gap-2 mb-5">
              {project.impactMetrics.map((metric) => (
                <div
                  key={metric}
                  className="rounded-lg bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200/20 dark:border-neutral-700/20 p-2 text-center text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 truncate"
                >
                  {metric}
                </div>
              ))}
            </div>

            <div className="mt-auto flex gap-2 pt-4 border-t border-neutral-100 dark:border-neutral-800/60">
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="group/github flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:text-violet-500 dark:hover:text-violet-400 hover:border-violet-500/50 dark:hover:border-violet-400/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all duration-300 bg-transparent shadow-sm"
                  title="View Source Repository"
                  aria-label={`View GitHub repository for ${project.title}`}
                >
                  <FaGithub size={16} className="transition-transform duration-300 group-hover/github:scale-110" />
                </Link>
              )}

              <Link
                href={primaryAction.href}
                target={primaryAction.isExternal ? "_blank" : undefined}
                aria-label={`${primaryAction.label} for ${project.title}`}
                className={cn(
                  "flex-1 inline-flex items-center justify-center rounded-lg text-xs font-semibold h-9 border transition shadow-sm",
                  project.status === ProjectStatus.LIVE
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 border-transparent"
                    : "bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 border-neutral-200/40 dark:border-neutral-700/40 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                )}
              >
                {primaryAction.label}
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}