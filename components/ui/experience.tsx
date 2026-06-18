// import { Briefcase, Calendar } from "lucide-react";

// export default function Experience() {
//   const experiences = [
//     {
//       role: "Software Engineer",
//       company: "Your Company / Freelance",
//       duration: "2024 - Present",
//       description:
//         "Working on full-stack web applications, automation tools, and scalable backend systems using Next.js, Node.js, and TypeScript.",
//       points: [
//         "Built scalable web applications with modern UI/UX",
//         "Improved performance and API efficiency",
//         "Developed internal automation tools",
//       ],
//     },
//     {
//       role: "Frontend Developer",
//       company: "Previous Company",
//       duration: "2023 - 2024",
//       description:
//         "Focused on frontend development, UI systems, and performance optimization.",
//       points: [
//         "Built reusable UI components",
//         "Improved page load performance",
//         "Worked with APIs and state management",
//       ],
//     },
//   ];

//   return (
//     <section id="experience" className="section-padding">
//       <div className="container-width">

//         {/* Header */}
//         <div className="mb-12 text-center">
//           <h2 className="text-3xl font-bold md:text-4xl">
//             Work <span className="text-gradient">Experience</span>
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
//             My professional journey building scalable applications and solving real-world problems.
//           </p>
//         </div>

//         {/* Timeline */}
//         <div className="relative border-l border-neutral-300 pl-6 dark:border-neutral-700">

//           {experiences.map((exp, index) => (
//             <div key={index} className="mb-10 ml-2">

//               {/* Dot */}
//               <div className="absolute -left-2 mt-2 h-4 w-4 rounded-full bg-black dark:bg-white" />

//               {/* Card */}
//               <div className="rounded-2xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 dark:border-neutral-800 dark:bg-neutral-900">

//                 {/* Role */}
//                 <h3 className="text-xl font-semibold">
//                   {exp.role}
//                 </h3>

//                 {/* Company + Duration */}
//                 <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">

//                   <span className="flex items-center gap-2">
//                     <Briefcase size={14} />
//                     {exp.company}
//                   </span>

//                   <span className="flex items-center gap-2">
//                     <Calendar size={14} />
//                     {exp.duration}
//                   </span>

//                 </div>

//                 {/* Description */}
//                 <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
//                   {exp.description}
//                 </p>

//                 {/* Bullet Points */}
//                 <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-600 dark:text-neutral-400">
//                   {exp.points.map((point, i) => (
//                     <li key={i}>{point}</li>
//                   ))}
//                 </ul>

//               </div>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }

// import Image from "next/image";
// import Link from "next/link";
// import { Briefcase, Calendar, } from "lucide-react";
// import { FaLinkedin } from "react-icons/fa";

// export default function Experience() {
//   const experiences = [
//     {
//       role: "Software Engineer",
//       company: "Your Company / Freelance",
//       duration: "2024 - Present",
//       linkedin: "https://linkedin.com",
//       logo: "/images/company1.png",
//       description:
//         "Working on full-stack web applications, automation tools, and scalable backend systems using Next.js, Node.js, and TypeScript.",
//       points: [
//         "Built scalable web applications with modern UI/UX",
//         "Improved API performance and system efficiency",
//         "Developed internal automation tools",
//       ],
//     },
//     {
//       role: "Frontend Developer",
//       company: "Previous Company",
//       duration: "2023 - 2024",
//       linkedin: "https://linkedin.com",
//       logo: "/images/company2.png",
//       description:
//         "Focused on frontend development, UI systems, and performance optimization.",
//       points: [
//         "Built reusable UI components",
//         "Improved page load performance",
//         "Worked with APIs and state management",
//       ],
//     },
//   ];

//   return (
//     <section id="experience" className="section-padding">
//       <div className="container-width">

//         {/* Header */}
//         <div className="mb-12 text-center">
//           <h2 className="text-3xl font-bold md:text-4xl">
//             Work <span className="text-gradient">Experience</span>
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
//             My professional journey building scalable applications and solving real-world problems.
//           </p>
//         </div>

//         {/* Timeline */}
//         {/* <div className="relative border-l border-neutral-300 pl-6 dark:border-neutral-700"> */}
//         <div className="relative">
          
//           {/* Center line */}
//           <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-neutral-300 dark:bg-neutral-700" />

//           {experiences.map((exp, index) => (
//             <div key={index} className="mb-10 ml-2 relative">

//               {/* Dot */}
//               {/* <div className="absolute -left-2 mt-2 h-4 w-4 rounded-full bg-black dark:bg-white" /> */}
//               <div className="absolute left-1/2 top-6 -translate-x-1/2">
//                 <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 shadow-md" />
//               </div>

//               {/* Card */}
//               <div className="rounded-2xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 dark:border-neutral-800 dark:bg-neutral-900">

//                 {/* Top Row */}
//                 <div className="flex items-start justify-between gap-4">

//                   {/* Left: Logo + Info */}
//                   <div className="flex items-center gap-4">

//                     {/* Company Logo */}
//                     <div className="relative h-12 w-12 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700">
//                       <Image
//                         src={exp.logo}
//                         alt={exp.company}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>

//                     {/* Role + Company */}
//                     <div>
//                       <h3 className="text-xl font-semibold">{exp.role}</h3>

//                       <p className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
//                         <Briefcase size={14} />
//                         {exp.company}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Right: Duration + LinkedIn */}
//                   <div className="flex flex-col items-end gap-2 text-sm text-neutral-500 dark:text-neutral-400">

//                     <span className="flex items-center gap-2">
//                       <Calendar size={14} />
//                       {exp.duration}
//                     </span>

//                     {exp.linkedin && (
//                       <Link
//                         href={exp.linkedin}
//                         target="_blank"
//                         className="flex items-center gap-1 hover:text-black dark:hover:text-white"
//                       >
//                         <FaLinkedin size={14} />
//                         LinkedIn
//                       </Link>
//                     )}

//                   </div>
//                 </div>

//                 {/* Description */}
//                 <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
//                   {exp.description}
//                 </p>

//                 {/* Bullet Points */}
//                 <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-600 dark:text-neutral-400">
//                   {exp.points.map((point, i) => (
//                     <li key={i}>{point}</li>
//                   ))}
//                 </ul>

//               </div>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { Briefcase, Calendar } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Your Company / Freelance",
      duration: "2024 - Present",
      linkedin: "https://linkedin.com",
      logo: "/images/company1.png",
      description:
        "Working on full-stack web applications, automation tools, and scalable backend systems using Next.js, Node.js, and TypeScript.",
      points: [
        "Built scalable web applications with modern UI/UX",
        "Improved API performance and system efficiency",
        "Developed internal automation tools",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Previous Company",
      duration: "2023 - 2024",
      linkedin: "https://linkedin.com",
      logo: "/images/company2.png",
      description:
        "Focused on frontend development, UI systems, and performance optimization.",
      points: [
        "Built reusable UI components",
        "Improved page load performance",
        "Worked with APIs and state management",
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-width">

        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Work <span className="text-gradient">Experience</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
            My professional journey building scalable applications and solving real-world problems.
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative">

          {/* CENTER LINE (animated fill effect) */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-neutral-200 dark:bg-neutral-800">
            <div className="h-full w-full bg-gradient-to-b from-blue-500 via-violet-500 to-cyan-500 opacity-30 animate-pulse" />
          </div>

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="relative mb-16 grid grid-cols-1 lg:grid-cols-2 items-center"
              >

                {/* DOT (attached to center line) */}
                <div className="absolute left-1/2 top-6 -translate-x-1/2 z-10">
                  <div className="relative">
                    <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 shadow-md" />
                    <div className="absolute inset-0 animate-ping rounded-full bg-blue-400/40" />
                  </div>
                </div>

                {/* LEFT SIDE */}
                {isLeft ? (
                  <div className="lg:pr-16">
                    <Card exp={exp} />
                  </div>
                ) : (
                  <div />
                )}

                {/* RIGHT SIDE */}
                {!isLeft ? (
                  <div className="lg:pl-16">
                    <Card exp={exp} />
                  </div>
                ) : (
                  <div />
                )}

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */
function Card({ exp }: any) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 dark:border-neutral-800 dark:bg-neutral-900">

      {/* Header */}
      <div className="flex items-start justify-between gap-4">

        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700">
            <Image src={exp.logo} alt={exp.company} fill className="object-cover" />
          </div>

          <div>
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="flex items-center gap-2 text-sm text-neutral-500">
              <Briefcase size={14} />
              {exp.company}
            </p>
          </div>
        </div>

        <div className="text-right text-sm text-neutral-500">
          <div className="flex items-center gap-2">
            <Calendar size={14} />
            {exp.duration}
          </div>

          <Link
            href={exp.linkedin}
            target="_blank"
            className="mt-1 flex items-center gap-1 hover:text-black dark:hover:text-white"
          >
            <FaLinkedin size={14} />
            LinkedIn
          </Link>
        </div>

      </div>

      {/* Description */}
      <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
        {exp.description}
      </p>

      {/* Points */}
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-600 dark:text-neutral-400">
        {exp.points.map((p: string, i: number) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

    </div>
  );
}