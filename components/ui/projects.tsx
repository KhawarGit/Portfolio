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


import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import HoverCard from "@/components/ui/hover-card";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio built with Next.js, Tailwind CSS, and animations.",
      tech: ["Next.js", "Tailwind", "TypeScript"],
      github: "https://github.com/your-username/portfolio",
      live: "https://your-portfolio.com",
      image: "/images/projects/portfolio.png",
    },
    {
      title: "Automation Tool",
      description:
        "A backend automation system for handling repetitive workflows efficiently.",
      tech: ["Node.js", "Express", "MongoDB"],
      github: "https://github.com/your-username/automation",
      live: "#",
      image: "/images/projects/automation.png",
    },
    {
      title: "E-commerce App",
      description:
        "Full-stack e-commerce platform with authentication and payment integration.",
      tech: ["Next.js", "PostgreSQL", "Stripe"],
      github: "https://github.com/your-username/ecommerce",
      live: "#",
      image: "/images/projects/ecommerce.png",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-width">

        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Featured <span className="text-gradient">Projects</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
            A selection of projects showcasing my development skills and problem-solving ability.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <HoverCard key={project.title}>

              <div className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">

                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">

                  {/* Title */}
                  <h3 className="text-xl font-semibold group-hover:text-blue-600 transition">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600 dark:border-neutral-700 dark:text-neutral-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-6 flex items-center justify-between">
                    <Link
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 text-sm text-neutral-600 transition hover:text-black dark:text-neutral-400 dark:hover:text-white"
                    >
                      <FaGithub size={16} />
                      Code
                    </Link>

                    <Link
                      href={project.live}
                      target="_blank"
                      className="flex items-center gap-2 text-sm text-neutral-600 transition hover:text-black dark:text-neutral-400 dark:hover:text-white"
                    >
                      Live
                      <ExternalLink size={16} />
                    </Link>
                  </div>

                </div>
              </div>

            </HoverCard>
          ))}

        </div>
      </div>
    </section>
  );
}