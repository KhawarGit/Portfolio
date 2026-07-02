// import { Code2, Cpu, Rocket, Sparkles } from "lucide-react";

// export default function About() {
//   const highlights = [
//     {
//       icon: <Code2 size={20} />,
//       title: "Clean Code",
//       desc: "I focus on writing scalable, maintainable, and readable code.",
//     },
//     {
//       icon: <Rocket size={20} />,
//       title: "Performance First",
//       desc: "Optimized web apps with fast load times and smooth UX.",
//     },
//     {
//       icon: <Cpu size={20} />,
//       title: "Full Stack Dev",
//       desc: "Frontend + backend + APIs + deployment workflows.",
//     },
//     {
//       icon: <Sparkles size={20} />,
//       title: "Modern UI",
//       desc: "Beautiful interfaces using Tailwind and modern design systems.",
//     },
//   ];

//   return (
//     <section id="about" className="section-padding">
//       <div className="container-width">
        
//         {/* Header */}
//         <div className="mb-12 text-center">
//           <h2 className="text-3xl font-bold md:text-4xl">
//             About <span className="text-gradient">Me</span>
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
//             I’m a passionate Full Stack Developer who enjoys building scalable
//             systems, automation tools, and modern web applications with great UX.
//           </p>
//         </div>

//         {/* Content Grid */}
//         <div className="grid gap-10 lg:grid-cols-2">
          
//           {/* Left Text */}
//           <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
//             <p>
//               I specialize in building modern web applications using Next.js,
//               React, TypeScript, and Node.js. My focus is on creating systems
//               that are not only functional but also optimized and scalable.
//             </p>

//             <p>
//               Over time, I’ve worked on automation tools, backend systems,
//               dashboards, and full-stack applications that solve real-world
//               problems efficiently.
//             </p>

//             <p>
//               I enjoy learning new technologies and continuously improving my
//               development workflow with better architecture and tools.
//             </p>
//           </div>

//           {/* Right Cards */}
//           <div className="grid gap-4 sm:grid-cols-2">
//             {highlights.map((item) => (
//               <div
//                 key={item.title}
//                 className="rounded-2xl border border-neutral-200 bg-white p-5 transition hover:-translate-y-1 dark:border-neutral-800 dark:bg-neutral-900"
//               >
//                 <div className="mb-3 flex items-center gap-2 text-black dark:text-white">
//                   {item.icon}
//                   <h3 className="font-semibold">{item.title}</h3>
//                 </div>

//                 <p className="text-sm text-neutral-600 dark:text-neutral-400">
//                   {item.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";
// import ProfileCard from "@/components/ui/ProfileCard";
// import { Code2, Cpu, Rocket, Sparkles } from "lucide-react";

// export default function About() {
//   const highlights = [
//     {
//       icon: <Code2 size={20} />,
//       title: "Clean Code",
//       desc: "I focus on writing scalable, maintainable, and readable code.",
//     },
//     {
//       icon: <Rocket size={20} />,
//       title: "Performance First",
//       desc: "Optimized web apps with fast load times and smooth UX.",
//     },
//     {
//       icon: <Cpu size={20} />,
//       title: "Full Stack Dev",
//       desc: "Frontend + backend + APIs + deployment workflows.",
//     },
//     {
//       icon: <Sparkles size={20} />,
//       title: "Modern UI",
//       desc: "Beautiful interfaces using Tailwind and modern design systems.",
//     },
//   ];

//   return (
//     <section id="about" className="section-padding">
//       <div className="container-width">

//         {/* Header */}
//         <div className="mb-12 text-center">
//           <h2 className="text-3xl font-bold md:text-4xl">
//             About <span className="text-gradient">Me</span>
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
//             I’m a passionate Full Stack Developer who enjoys building scalable
//             systems, automation tools, and modern web applications with great UX.
//           </p>
//         </div>

//         {/* MAIN GRID */}

// <div className="flex items-center justify-center max-w-5xl mx-auto gap-10">

//   {/* LEFT → PROFILE IMAGE */}
//   <div className="flex-1 flex justify-center lg:justify-end">
//     <ProfileCard
//       name="Khawar Khan"
//       title="Full Stack Developer"
//       handle="khawarkhan"
//       status="Available for work"
//       avatarUrl="/images/profile.jpeg"
//       miniAvatarUrl="/images/profile.jpeg"
//       contactText="Hire Me"
//       showUserInfo={true}
//       enableTilt={true}
//       enableMobileTilt={false}
//       behindGlowColor="rgba(99, 102, 241, 0.6)"
//       innerGradient="linear-gradient(145deg,#0f172a 0%,#1e293b 100%)"
//       onContactClick={() => {
//         window.location.href = "#contact";
//       }}
//     />
//   </div>

//   {/* RIGHT → TEXT */}
//   <div className="flex-1 space-y-6">

//     <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
//       <p>
//         I specialize in building modern web applications using Next.js,
//         React, TypeScript, and Node.js.
//       </p>

//       <p>
//         I’ve worked on automation tools, backend systems, dashboards,
//         and scalable full-stack apps.
//       </p>

//       <p>
//         I enjoy learning new technologies and improving architecture.
//       </p>
//     </div>

//     {/* Highlights */}
//     <div className="grid gap-4 sm:grid-cols-2">
//       {highlights.map((item) => (
//         <div
//           key={item.title}
//           className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900"
//         >
//           <div className="mb-3 flex items-center gap-2">
//             {item.icon}
//             <h3 className="font-semibold">{item.title}</h3>
//           </div>
//           <p className="text-sm text-neutral-600 dark:text-neutral-400">
//             {item.desc}
//           </p>
//         </div>
//       ))}
//     </div>

//   </div>
// </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import ProfileCard from "@/components/ui/ProfileCard";
// import { Code2, Cpu, Rocket, Sparkles } from "lucide-react";

// export default function About() {
//   const highlights = [
//     {
//       icon: <Code2 size={20} />,
//       title: "Clean Code",
//       desc: "I focus on writing scalable, maintainable, and readable code.",
//     },
//     {
//       icon: <Rocket size={20} />,
//       title: "Performance First",
//       desc: "Optimized web apps with fast load times and smooth UX.",
//     },
//     {
//       icon: <Cpu size={20} />,
//       title: "Full Stack Dev",
//       desc: "Frontend + backend + APIs + deployment workflows.",
//     },
//     {
//       icon: <Sparkles size={20} />,
//       title: "Modern UI",
//       desc: "Beautiful interfaces using Tailwind and modern design systems.",
//     },
//   ];

//   return (
//     <section id="about" className="section-padding">
//       <div className="container-width">

//         {/* Header */}
//         <div className="mb-12 text-center">
//           <h2 className="text-3xl font-bold md:text-4xl">
//             About <span className="text-gradient">Me</span>
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
//             I’m a passionate Full Stack Developer who enjoys building scalable
//             systems, automation tools, and modern web applications with great UX.
//           </p>
//         </div>

//         {/* MAIN GRID */}
//         <div className="relative grid gap-6 lg:gap-12 lg:grid-cols-2 items-center max-w-5xl mx-auto">

//           {/* optional center divider (desktop only) */}
//           {/* <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-white/5" /> */}

//           {/* LEFT → PROFILE IMAGE */}
//           <div className="flex justify-center lg:justify-end lg:-translate-x-4">
//             <ProfileCard
//               name="Khawar Khan"
//               title="Software Engineer"
//               handle="KhawarKhan"
//               status="Available for work"
//               avatarUrl="/images/profile.jpeg"
//               miniAvatarUrl="/images/Mini-avatar.jpeg"
//               contactText="Hire Me"
//               showUserInfo={true}
//               enableTilt={true}
//               enableMobileTilt={false}
//               behindGlowColor="rgba(99, 102, 241, 0.6)"
//               innerGradient="linear-gradient(145deg,#0f172a 0%,#1e293b 100%)"
//               onContactClick={() => {
//                 window.location.href = "#contact";
//               }}
//             />
//           </div>

//           {/* RIGHT → TEXT */}
//           <div className="space-y-6 lg:-ml-6">

//             <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
//               <p>
//                 I specialize in building modern web applications using Next.js,
//                 React, TypeScript, and Node.js.
//               </p>

//               <p>
//                 I’ve worked on automation tools, backend systems, dashboards,
//                 and scalable full-stack apps.
//               </p>

//               <p>
//                 I enjoy learning new technologies and improving architecture.
//               </p>
//             </div>

//             {/* Highlights */}
//             <div className="grid gap-4 sm:grid-cols-2">
//               {highlights.map((item) => (
//                 <div
//                   key={item.title}
//                   className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900"
//                 >
//                   <div className="mb-3 flex items-center gap-2">
//                     {item.icon}
//                     <h3 className="font-semibold">{item.title}</h3>
//                   </div>
//                   <p className="text-sm text-neutral-600 dark:text-neutral-400">
//                     {item.desc}
//                   </p>
//                 </div>
//               ))}
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





"use client";

import React from "react";
import ProfileCard from "@/components/ui/ProfileCard";
import { Code2, Cpu, Rocket, Sparkles, FolderGit2, Calendar, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const highlights = [
    {
      icon: <Code2 size={18} className="text-violet-500" />,
      title: "Clean Code",
      desc: "I focus on writing scalable, maintainable, and readable code.",
    },
    {
      icon: <Rocket size={18} className="text-cyan-500" />,
      title: "Performance First",
      desc: "Optimized web apps with fast load times and smooth UX.",
    },
    {
      icon: <Cpu size={18} className="text-blue-500" />,
      title: "Full Stack Dev",
      desc: "Frontend + backend + APIs + deployment workflows.",
    },
    {
      icon: <Sparkles size={18} className="text-amber-500" />,
      title: "Modern UI",
      desc: "Beautiful interfaces using Tailwind and modern design systems.",
    },
  ];

  const quickStats = [
    { label: "Years Experience", value: "3+", icon: <Calendar size={14} /> },
    { label: "Projects Completed", value: "24+", icon: <FolderGit2 size={14} /> },
    { label: "Happy Clients", value: "100%", icon: <Award size={14} /> },
  ];

  const coreSkills = ["Next.js", "React", "TypeScript", "Node.js", "TailwindCSS", "PostgreSQL", "Docker", "Python"];

  // Framer Motion Animation Settings
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { type: "spring", stiffness: 100, damping: 15, opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="section-padding py-28 bg-neutral-50/30 dark:bg-neutral-950/10 overflow-hidden relative">
      {/* PREMIUM BACKGROUND AMBIENT GRADIENT ORBS */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-gradient-to-tr from-violet-500/5 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/5 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="container-width px-4 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800 text-neutral-500 mb-4">
            ✨ Introducing Myself
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-500 dark:text-neutral-400 text-base md:text-lg leading-relaxed">
            I’m a passionate Full Stack Developer who enjoys building scalable
            systems, automation tools, and modern web applications with great UX.
          </p>
        </div>

        {/* MAIN GRID INTERSECTION */}
        <div className="relative grid gap-12 lg:gap-16 lg:grid-cols-12 items-start max-w-6xl mx-auto">
          
          {/* LEFT CONTAINER → PERSISTENT DECOUPLED FLOATING PROFILE */}
          <div className="lg:col-span-5 flex flex-col items-center gap-6 sticky top-28">
            <motion.div
              animate={{
                y: [0, -8, 0, 8, 0],
                rotateZ: [0, 0.3, 0, -0.3, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full flex justify-center"
            >
              <ProfileCard
                name="Khawar Khan"
                title="Software Engineer"
                handle="KhawarKhan"
                status="Available for work"
                avatarUrl="/images/profile.jpeg"
                miniAvatarUrl="/images/Mini-avatar.jpeg"
                contactText="Hire Me"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                behindGlowColor="rgba(124, 58, 237, 0.45)"
                innerGradient="linear-gradient(145deg, #0a0a0a 0%, #171717 100%)"
                onContactClick={() => {
                  window.location.href = "#contact";
                }}
              />
            </motion.div>

            {/* QUICK STATS CHIPS */}
            <div className="w-full max-w-[340px] grid grid-cols-3 gap-2 mt-2">
              {quickStats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center p-3 rounded-2xl border border-neutral-200/60 dark:border-neutral-800/60 bg-white/60 dark:bg-neutral-900/40 backdrop-blur-md shadow-sm">
                  <div className="text-neutral-400 dark:text-neutral-500 mb-1">{stat.icon}</div>
                  <span className="text-base font-bold text-neutral-800 dark:text-neutral-100 tracking-tight">{stat.value}</span>
                  <span className="text-[10px] text-neutral-400 text-center font-medium leading-tight mt-0.5">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTAINER → COMPREHENSIVE NARRATIVE & GRID ELEMENTS */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* INTRO BIO COPY */}
            <div className="space-y-4 text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
              <p>
                I specialize in crafting high-end, responsive web architectures using <span className="font-semibold text-neutral-900 dark:text-white">Next.js, React, TypeScript</span>, and <span className="font-semibold text-neutral-900 dark:text-white">Node.js</span>. I bridge the gap between creative visual designs and structured engineering principles.
              </p>
              <p>
                Throughout my journey, I’ve architected secure automation workflows, real-time analytics panels, robust API networks, and heavy-duty database environments tailored to solve critical computational challenges.
              </p>
              <p>
                Continuous deployment architectures, modern code patterns, and sub-millisecond core performances are the pillars I focus on to optimize production ecosystems daily.
              </p>
            </div>



            {/* HIGH-END METICULOUS HIGHLIGHT CARDS GRID */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {highlights.map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative rounded-2xl border border-neutral-200/80 bg-white p-5 dark:border-neutral-800/80 dark:bg-neutral-900/60 shadow-sm transition-colors duration-300 hover:bg-neutral-50 dark:hover:bg-neutral-900/90 before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-br before:from-violet-500/10 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:pointer-events-none"
                >
                  <div className="mb-2.5 flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800/60 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-neutral-800 dark:text-neutral-100 tracking-tight">{item.title}</h3>
                  </div>
                  <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 leading-normal">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* HORIZONTAL RULE */}
            <div className="border-t border-neutral-200/60 dark:border-neutral-800/60 pt-6" />

            {/* TECH STACK BADGES WRAPPER */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                Core Stack Arsenal
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {coreSkills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 border border-neutral-200/40 dark:border-neutral-800/50 hover:border-neutral-300 dark:hover:border-neutral-700 transition duration-200 font-medium cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}