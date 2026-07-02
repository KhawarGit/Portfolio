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







"use client";

import React, { useState, useRef, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import HoverCard from "@/components/ui/hover-card";
import ProjectScene from "@/components/ui/project-scene";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio built with Next.js, Tailwind CSS, Framer Motion and TypeScript.",
      scene: "car",
      tech: ["Next.js", "Tailwind", "TypeScript"],
      highlights: ["Framer Motion", "Responsive Design", "SEO Optimized"],
      github: "https://github.com/your-username/portfolio",
      live: "https://your-portfolio.com",
      slug: "/blog/portfolio-website", 
      image: "/images/projects/portfolio.png",
      status: "Live",
      year: "2026",
      metrics: ["99.9% Uptime", "100 LightHouse", "SEO Optimized"],
    },
    {
      title: "PCB Simulation & Test Automation Suite",
      description:
        "Engineered an enterprise-grade automation platform for Advantest to optimize hardware verification workflows and reduce repetitive manual hardware checks.",
      scene: "chip",
      tech: ["Python", "TCL", "PostgreSQL", "Docker"],
      highlights: ["Hardware Automation", "Workflow Optimization", "Custom Analytics"],
      github: null, 
      live: null,
      slug: "/blog/advantest-automation-case-study", 
      image: "/images/projects/advantest-automation.png", 
      status: "Private",
      year: "2025",
      metrics: ["-72% Test Duration", "50+ Workflows", "MNC Deployment"],
    },
    {
      title: "E-commerce Platform",
      description:
        "Full-stack ecommerce platform with authentication and Stripe payments.",
      scene: "server",
      tech: ["Next.js", "PostgreSQL", "Stripe"],
      highlights: ["Authentication", "Payments", "Database Optimization"],
      github: null,
      live: null,
      slug: "/blog/ecommerce-platform-case-study",
      image: "/images/projects/ecommerce.png",
      status: "Private",
      year: "2025",
    },
    {
      title: "Automation Tool",
      description:
        "Backend automation system for repetitive workflows and engineering processes.",
      scene: "robot",
      tech: ["Node.js", "Express", "MongoDB"],
      highlights: ["CRON Jobs", "REST APIs", "Error Logging"],
      github: "https://github.com/your-username/automation",
      live: null,
      slug: "https://github.com/your-username/automation#readme",
      image: "/images/projects/automation.png",
      status: "Open Source",
      year: "2025",
      metrics: ["12k Active Users", "100% Free Core", "MIT Licensed"],
    },
  ];

  const productionProjects = projects.filter(p => p.status === "Live" || p.status === "Private");
  const openSourceProjects = projects.filter(p => p.status === "Open Source" || p.status === "Prototype");

  // Stagger container setup for whole initial sections
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section id="projects" className="section-padding py-24 bg-neutral-50/50 dark:bg-neutral-950/20 overflow-x-clip relative">
      {/* PREMIUM BACKGROUND AMBIENT ORBS */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px] pointer-events-none animate-[pulse_12s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none animate-[pulse_16s_ease-in-out_infinite]" />

      <div className="container-width px-4 relative z-10">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-500 dark:text-neutral-400">
            A collection of projects demonstrating full-stack development,
            automation and UI engineering.
          </p>
        </div>

        {/* GROUP 1: PRODUCTION PROJECTS */}
        {productionProjects.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
                Production Projects
              </h3>
              <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
            </div>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start"
            >
              {productionProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </motion.div>
          </div>
        )}

        {/* GROUP 2: OPEN SOURCE & EXPERIMENTS */}
        {openSourceProjects.length > 0 && (
          <div>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
                Open Source & Experiments
              </h3>
              <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
            </div>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-start"
            >
              {openSourceProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ================= PROJECT CARD COMPONENT ================= */
function ProjectCard({ project }: { project: any }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Spotlight Trackers
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  // 3D Tilt Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth, high-fidelity 3D physics settings
  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], [8, -8]),
    {
      stiffness: 120,
      damping: 18,
      mass: 0.8,
    }
  );

  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], [-10, 10]),
    {
      stiffness: 120,
      damping: 18,
      mass: 0.8,
    }
  );

  // Independent floating setup configuration
  const floatConfig = useMemo(() => {
    const amplitude = 6 + Math.random() * 5;
    const duration = 9 + Math.random() * 3;

    return {
      amplitude,
      duration,
      delay: Math.random() * 2,
    };
  }, []);

  // Section entry variants to stagger nicely on initial view
  const cardEntryVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } }
  };

  // Upgraded custom hover layout variants (Removed animated box-shadow)
  const cardHoverVariants = {
    hover: {
      y: -10,
      scale: 1.025,
      transition: {
        type: "spring" as const,
        stiffness: 260,
        damping: 20,
        staggerChildren: 0.04,
      },
    },
  };

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    
    // Set Spotlight Positions
    setMouseX(event.clientX - left);
    setMouseY(event.clientY - top);

    // Set Tilt Angles
    x.set((event.clientX - left) / width - 0.5);
    y.set((event.clientY - top) / height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const renderStatusBadge = (status: string) => {
    switch (status) {
      case "Live":
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
            🟢 Production
          </span>
        );
      case "Open Source":
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 px-2.5 py-0.5 rounded-full">
            &lt;&gt; Open Source
          </span>
        );
      case "Prototype":
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 px-2.5 py-0.5 rounded-full">
            🧪 Prototype
          </span>
        );
      case "Private":
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10 px-2.5 py-0.5 rounded-full">
            🔒 Enterprise
          </span>
        );
      default:
        return null;
    }
  };

  const chipVariants = {
    initial: { y: 0 },
    hover: { y: -3, transition: { type: "spring", stiffness: 300, damping: 12 } }
  } as const;

  return (
    <HoverCard>
      {/* LAYER 1: OUTSIDE INDEPENDENT FLOATING CONTAINER */}
      <motion.div
        animate={{
          y: [0, -floatConfig.amplitude, 0, floatConfig.amplitude, 0],
          rotateZ: [0, 0.4, 0, -0.4, 0],
          scale: [1, 1.008, 1, 0.996, 1],
        }}
        transition={{
          duration: floatConfig.duration,
          repeat: Infinity,
          ease: "linear",
          delay: floatConfig.delay,
        }}
      >
        {/* LAYER 2: INTERIOR RESPONSIVE 3D TILT & GESTURE LAYER */}
        <motion.div
          ref={cardRef}
          variants={{ ...cardEntryVariants, ...cardHoverVariants }}
          whileHover="hover"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            transformPerspective: 1800,
          }}
          className="group relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/90 shadow-sm hover:shadow-2xl dark:shadow-black/20 transition-all duration-500 p-6 flex flex-col gap-4 h-full will-change-transform before:absolute before:inset-0 before:rounded-3xl before:p-[1px] before:bg-gradient-to-r before:from-cyan-500/20 before:via-violet-500/20 before:to-blue-500/20 before:opacity-0 group-hover:before:opacity-100 before:pointer-events-none"
        >
          {/* PREMIUM SLOW PULSING GLOW */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
            <div className="absolute -top-10 left-1/2 w-32 h-32 bg-violet-400/10 blur-3xl rounded-full animate-[pulse_4s_ease-in-out_infinite]" />
          </div>

          {/* MOVING SPOTLIGHT RECTANGLE */}
          <div 
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            style={{
              background: `radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(124, 58, 237, 0.06), transparent 80%)`
            }}
          />

          <div>
            {/* IMAGE CONTAINER */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-neutral-200/70 dark:border-neutral-800 shadow-sm bg-neutral-100 dark:bg-neutral-950 ring-1 ring-black/5 dark:ring-white/5">
              <div className="h-full w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] group-hover:-translate-y-2"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* PREMIUM LAYER SEPARATION WRAPPER */}
          <div className="relative z-10">
            <div className="space-y-2.5">
              <div className="flex items-center justify-start gap-2">
                {renderStatusBadge(project.status)}
                <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 bg-neutral-100 dark:bg-neutral-800/60 px-2.5 py-0.5 rounded-full">{project.year}</span>
              </div>
              
              <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white transition duration-300 group-hover:text-violet-500 group-hover:translate-x-0.5">
                {project.title}
              </h3>

              <p className="text-[14px] leading-6 text-neutral-600 dark:text-neutral-400 line-clamp-2 pt-0.5">
                {project.description}
              </p>
            </div>

            {/* CHIPS */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.highlights.slice(0, 3).map((h: string) => (
                  <span
                    key={h}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-300 border border-violet-200/30 dark:border-violet-500/20"
                  >
                    {h}
                  </span>
                ))}
              </div>
            )}

            {/* METRICS */}
            {project.metrics && (
              <div className="mt-5 grid grid-cols-3 gap-2 bg-neutral-50 dark:bg-neutral-950/40 p-2.5 rounded-xl border border-neutral-100 dark:border-neutral-800/40">
                {project.metrics.map((metric: string, idx: number) => (
                  <div key={idx} className="text-center">
                    <div className="text-[11px] font-bold text-neutral-700 dark:text-neutral-300 truncate tracking-tight">{metric.split(' ')[0]}</div>
                    <div className="text-[9px] font-medium text-neutral-400 dark:text-neutral-500 mt-0.5 truncate">{metric.split(' ').slice(1).join(' ') || 'Value'}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="my-5 border-t border-neutral-100 dark:border-neutral-800/40" />

            {/* STAGGERED TECH STACK */}
            <motion.div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech: string) => (
                <motion.span
                  key={tech}
                  variants={chipVariants}
                  className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-0.5 text-[11px] font-medium text-neutral-600 dark:text-neutral-300 border border-neutral-200/20 dark:border-neutral-700/30"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* FOOTER */}
          <div className="mt-auto">
            <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/60 flex gap-3">
              {project.live ? (
                <Link
                  href={project.live}
                  target="_blank"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-95 group/btn"
                >
                  Open Project 
                  <span className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5">↗</span>
                </Link>
              ) : project.status === "Private" ? (
                <Link
                  href={project.slug || "#"}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-95 group/btn"
                >
                  Read Case Study 
                  <span className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5">↗</span>
                </Link>
              ) : (
                project.slug && (
                  <Link
                    href={project.slug}
                    target={project.slug.startsWith("http") ? "_blank" : "_self"}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-95 group/btn"
                  >
                    View Source 
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5">↗</span>
                  </Link>
                )
              )}

              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 p-2.5 text-neutral-600 dark:text-neutral-400 transition hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200/40 dark:border-neutral-700/50"
                  title="View GitHub"
                >
                  <FaGithub size={16} />
                </Link>
              )}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-blue-500/10 z-0" />
        </motion.div>
      </motion.div>
    </HoverCard>
  );
}