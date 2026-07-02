// import {
//   SiNextdotjs,
//   SiReact,
//   SiTypescript,
//   SiNodedotjs,
//   SiMongodb,
//   SiPostgresql,
//   SiDocker,
//   SiTailwindcss,
//   SiGit,
// } from "react-icons/si";

// export default function Skills() {
//   const skills = [
//     { name: "Next.js", icon: <SiNextdotjs /> },
//     { name: "React", icon: <SiReact /> },
//     { name: "TypeScript", icon: <SiTypescript /> },
//     { name: "Node.js", icon: <SiNodedotjs /> },
//     { name: "MongoDB", icon: <SiMongodb /> },
//     { name: "PostgreSQL", icon: <SiPostgresql /> },
//     { name: "Docker", icon: <SiDocker /> },
//     { name: "Tailwind CSS", icon: <SiTailwindcss /> },
//     { name: "Git", icon: <SiGit /> },
//   ];

//   return (
//     <section id="skills" className="section-padding">
//       <div className="container-width">

//         {/* Header */}
//         <div className="mb-12 text-center">
//           <h2 className="text-3xl font-bold md:text-4xl">
//             My <span className="text-gradient">Skills</span>
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
//             Technologies I work with to build scalable, fast, and modern applications.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
//           {skills.map((skill) => (
//             <div
//               key={skill.name}
//               className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-neutral-200 bg-white p-6 text-center transition hover:-translate-y-1 hover:border-black dark:border-neutral-800 dark:bg-neutral-900"
//             >
//               <div className="text-3xl text-neutral-700 transition group-hover:scale-110 dark:text-neutral-300">
//                 {skill.icon}
//               </div>

//               <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
//                 {skill.name}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import React, { useState, useRef } from "react";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import {
//   SiNextdotjs,
//   SiReact,
//   SiTypescript,
//   SiNodedotjs,
//   SiMongodb,
//   SiPostgresql,
//   SiDocker,
//   SiTailwindcss,
//   SiGit,
//   SiExpress,
//   SiNestjs,
//   SiPrisma,
//   SiRedis,
//   SiMysql,
//   SiLinux,
//   SiCloudflare,
//   SiVercel,
// } from "react-icons/si";



// // 1. Updated Maintainable Data Structure
// const skillGroups = [
//   {
//     title: "Frontend",
//     color: "from-cyan-500 to-blue-500",
//     glowColor: "rgba(6, 182, 212, 0.15)",
//     skills: [
//       { name: "React", icon: SiReact, level: 95 },
//       { name: "Next.js", icon: SiNextdotjs, level: 95 },
//       { name: "TypeScript", icon: SiTypescript, level: 90 },
//       { name: "Tailwind CSS", icon: SiTailwindcss, level: 95 },
//     ],
//   },
//   {
//     title: "Backend",
//     color: "from-emerald-500 to-teal-500",
//     glowColor: "rgba(16, 185, 129, 0.15)",
//     skills: [
//       { name: "Node.js", icon: SiNodedotjs, level: 88 },
//       { name: "Express", icon: SiExpress, level: 90 },
//       { name: "NestJS", icon: SiNestjs, level: 80 },
//       { name: "Prisma", icon: SiPrisma, level: 85 },
//     ],
//   },
//   {
//     title: "Database",
//     color: "from-purple-500 to-indigo-500",
//     glowColor: "rgba(139, 92, 246, 0.15)",
//     skills: [
//       { name: "PostgreSQL", icon: SiPostgresql, level: 85 },
//       { name: "MongoDB", icon: SiMongodb, level: 90 },
//       { name: "Redis", icon: SiRedis, level: 75 },
//       { name: "MySQL", icon: SiMysql, level: 80 },
//     ],
//   },
//   {
//     title: "Tools & DevOps",
//     color: "from-amber-500 to-orange-500",
//     glowColor: "rgba(245, 158, 11, 0.15)",
//     skills: [
//       { name: "Docker", icon: SiDocker, level: 82 },
//       { name: "Git", icon: SiGit, level: 92 },
//       { name: "Linux", icon: SiLinux, level: 78 },
//       { name: "AWS", icon: SiCloudflare, level: 75 },
//       { name: "Vercel", icon: SiVercel, level: 95 },
//     ],
//   },
// ];

// const counters = [
//   { value: "27+", label: "Technologies" },
//   { value: "5+", label: "Categories" },
//   { value: "3+", label: "Years Experience" },
// ];

// export default function Skills() {
//   return (
//     <section id="skills" className="section-padding relative overflow-hidden">
//       {/* Premium Background Effects */}
//       <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_70%)]" />
//         <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full" />
//         <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full" />
//       </div>

//       <div className="container-width relative z-10">
        
//         {/* Header Section */}
//         <div className="mb-16 text-center">
//           <motion.h2 
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl font-bold md:text-5xl tracking-tight"
//           >
//             Skills & <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Technologies</span>
//           </motion.h2>

//           <motion.p 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             className="mx-auto mt-4 max-w-2xl text-neutral-400 font-medium"
//           >
//             "Technologies I use every day"
//           </motion.p>
//         </div>

//         {/* Tech Counters Block */}
//         <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto mb-16 text-center">
//           {counters.map((counter, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1, duration: 0.5 }}
//               className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10"
//             >
//               <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//                 {counter.value}
//               </div>
//               <div className="text-xs sm:text-sm text-neutral-400 mt-1">{counter.label}</div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Dynamic Skill Group Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {skillGroups.map((group, groupIndex) => (
//             <GroupCard key={group.title} group={group} index={groupIndex} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ==========================================
//    Interactive Group Card (With Magnetic Hover)
//    ========================================== */
// function GroupCard({ group, index }: { group: typeof skillGroups[0]; index: number }) {
//   const cardRef = useRef<HTMLDivElement>(null);
  
//   // Custom Magnetic State Hooks using MotionValues
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const springConfig = { damping: 25, stiffness: 250 };
//   const moveX = useSpring(x, springConfig);
//   const moveY = useSpring(y, springConfig);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     const width = rect.width;
//     const height = rect.height;
    
//     // Calculate distance from card center to mouse pointer
//     const mouseX = e.clientX - rect.left - width / 2;
//     const mouseY = e.clientY - rect.top - height / 2;

//     // Constrain magnetic range (Max 12 pixels displacement)
//     x.set(mouseX * 0.05);
//     y.set(mouseY * 0.05);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   return (
//     <motion.div
//       ref={cardRef}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       style={{ x: moveX, y: moveY }}
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: index * 0.1, duration: 0.6 }}
//       animate={{ y: [0, -4, 0] }}
//       className="group relative rounded-3xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:border-white/20"
//     >
//       {/* Aurora Outer Glow Border Layer */}
//       <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
//         style={{ backgroundColor: group.glowColor }}
//       />
//       <div className={`absolute -inset-px rounded-3xl bg-gradient-to-r ${group.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} 
//         style={{ maskImage: 'linear-gradient(white, white) exclude, linear-gradient(white, white)' }}
//       />

//       <h3 className="text-xl font-bold tracking-wide mb-6 pb-2 border-b border-white/10 text-neutral-100">
//         {group.title}
//       </h3>

//       {/* Group Content Pill List */}
//       <div className="space-y-4">
//         {group.skills.map((skill, skillIndex) => {
//           const Icon = skill.icon;
//           return (
//             <div key={skill.name} className="relative group/pill">
//               <div className="flex items-center justify-between mb-1.5 px-1">
//                 <div className="flex items-center gap-2.5">
//                   <div className="text-xl text-neutral-400 group-hover/pill:text-white transition-colors duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] group-hover/pill:drop-shadow-[0_0_12px_rgba(59,130,246,0.5)] group-hover/pill:rotate-6 transition-transform">
//                     <Icon />
//                   </div>
//                   <span className="text-sm font-medium text-neutral-300 group-hover/pill:text-white transition-colors">
//                     {skill.name}
//                   </span>
//                 </div>
                
//                 {/* Advanced Multi-state Skill Label / Tooltip Counterpart */}
//                 <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-white/5 text-neutral-400 group-hover/pill:text-white group-hover/pill:bg-white/10 transition-all">
//                   {skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Intermediate" : "Learning"} ({skill.level}%)
//                 </span>
//               </div>

//               {/* Advanced Animated Skill Level Slider */}
//               <div className="w-full h-1.5 bg-neutral-900 rounded-full overflow-hidden border border-white/5">
//                 <motion.div
//                   initial={{ width: 0 }}
//                   whileInView={{ width: `${skill.level}%` }}
//                   viewport={{ once: true }}
//                   transition={{ delay: (index * 0.1) + (skillIndex * 0.08), duration: 1.2, ease: "easeOut" }}
//                   className={`h-full rounded-full bg-gradient-to-r ${group.color}`}
//                 />
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </motion.div>
//   );
// }



// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
// import {
//   SiNextdotjs,
//   SiReact,
//   SiTypescript,
//   SiNodedotjs,
//   SiMongodb,
//   SiPostgresql,
//   SiDocker,
//   SiTailwindcss,
//   SiGit,
//   SiExpress,
//   SiNestjs,
//   SiPrisma,
//   SiRedis,
//   SiMysql,
//   SiLinux,
//   SiCloudflare,
//   SiVercel,
//   SiFramer,
//   SiGraphql
// } from "react-icons/si";

// // 1. Fully Enriched Relational System Schema
// const skillGroups = [
//   {
//     title: "Frontend",
//     color: "from-cyan-500 to-blue-500",
//     glowColor: "rgba(6, 182, 212, 0.2)",
//     accentText: "text-cyan-400",
//     skills: [
//       { name: "React", icon: SiReact, role: "Core Engine", duration: "2021 — Present", projects: 14, connections: ["Next.js", "TypeScript", "Framer Motion"] },
//       { name: "Next.js", icon: SiNextdotjs, role: "SSR Architecture", duration: "2022 — Present", projects: 11, connections: ["React", "TypeScript", "Vercel"] },
//       { name: "TypeScript", icon: SiTypescript, role: "Type Safety", duration: "2021 — Present", projects: 19, connections: ["React", "Next.js", "Prisma"] },
//       { name: "Tailwind CSS", icon: SiTailwindcss, role: "Fluid Styling", duration: "2021 — Present", projects: 22, connections: ["React", "Next.js"] },
//       { name: "Framer Motion", icon: SiFramer, role: "Premium Physics", duration: "2023 — Present", projects: 6, connections: ["React"] },
//     ],
//   },
//   {
//     title: "Backend",
//     color: "from-emerald-500 to-teal-500",
//     glowColor: "rgba(16, 185, 129, 0.2)",
//     accentText: "text-emerald-400",
//     skills: [
//       { name: "Node.js", icon: SiNodedotjs, role: "Runtime Core", duration: "2022 — Present", projects: 12, connections: ["Express", "Prisma", "PostgreSQL"] },
//       { name: "Express", icon: SiExpress, role: "REST Pipelines", duration: "2022 — Present", projects: 9, connections: ["Node.js", "MongoDB"] },
//       { name: "NestJS", icon: SiNestjs, role: "Enterprise Arch", duration: "2024 — Present", projects: 3, connections: ["Node.js", "TypeScript"] },
//       { name: "Prisma", icon: SiPrisma, role: "ORM layer", duration: "2023 — Present", projects: 8, connections: ["Node.js", "PostgreSQL", "TypeScript"] },
//     ],
//   },
//   {
//     title: "Database",
//     color: "from-violet-500 to-indigo-500",
//     glowColor: "rgba(139, 92, 246, 0.2)",
//     accentText: "text-violet-400",
//     skills: [
//       { name: "PostgreSQL", icon: SiPostgresql, role: "Relational Hub", duration: "2022 — Present", projects: 10, connections: ["Prisma", "Node.js"] },
//       { name: "MongoDB", icon: SiMongodb, level: 90, role: "Document Store", duration: "2021 — Present", projects: 13, connections: ["Express", "Node.js"] },
//       { name: "Redis", icon: SiRedis, role: "Cache Proxy", duration: "2023 — Present", projects: 4, connections: ["Node.js"] },
//       { name: "MySQL", icon: SiMysql, role: "Legacy Queries", duration: "2021 — 2023", projects: 5, connections: ["Node.js"] },
//     ],
//   },
//   {
//     title: "DevOps & Cloud",
//     color: "from-amber-500 to-orange-500",
//     glowColor: "rgba(245, 158, 11, 0.2)",
//     accentText: "text-amber-400",
//     skills: [
//       { name: "Docker", icon: SiDocker, role: "Containerization", duration: "2023 — Present", projects: 7, connections: ["Linux", "AWS"] },
//       { name: "Git", icon: SiGit, role: "VCS Standard", duration: "2020 — Present", projects: 40, connections: ["Vercel"] },
//       { name: "Linux", icon: SiLinux, role: "Kernel Operations", duration: "2022 — Present", projects: 15, connections: ["Docker"] },
//       { name: "AWS", icon: SiCloudflare, role: "Infrastructure", duration: "2023 — Present", projects: 4, connections: ["Docker"] },
//       { name: "Vercel", icon: SiVercel, role: "Edge Delivery", duration: "2022 — Present", projects: 18, connections: ["Next.js", "Git"] },
//     ],
//   },
// ];

// const counters = [
//   { value: "25+", subText: "TECHNOLOGIES", desc: "Production Ready" },
//   { value: "40+", subText: "PROJECTS", desc: "Deployed End-to-End" },
//   { value: "15+", subText: "APIS INTEGRATED", desc: "Restful & GraphQL" },
//   { value: "8", subText: "CERTIFICATIONS", desc: "Industry Verified" },
// ];

// const projectsData = [
//   { name: "Enterprise AI Dashboard", stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"] },
//   { name: "Real-time Collaborative Canvas", stack: ["React", "Node.js", "Express", "Redis", "Framer Motion"] },
//   { name: "Distributed Microservices Engine", stack: ["Node.js", "NestJS", "TypeScript", "Docker", "Linux", "AWS"] },
//   { name: "Decentralized E-Commerce Engine", stack: ["Next.js", "Tailwind CSS", "MongoDB", "Vercel", "Git"] },
// ];

// export default function Skills() {
//   const [hoveredNode, setHoveredNode] = useState<string | null>(null);
//   const [activePill, setActivePill] = useState<string | null>(null);
//   const containerRef = useRef<HTMLDivElement>(null);

//   // Global mouse spotlight values
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const handleGlobalMouseMove = (e: React.MouseEvent) => {
//     if (!containerRef.current) return;
//     const { left, top } = containerRef.current.getBoundingClientRect();
//     mouseX.set(e.clientX - left);
//     mouseY.set(e.clientY - top);
//   };

//   const currentHoveredOrActive = hoveredNode || activePill;

//   return (
//     <section 
//       id="skills" 
//       ref={containerRef}
//       onMouseMove={handleGlobalMouseMove}
//       className="section-padding relative overflow-hidden"
//     >
//       {/* 1. Global Apple/Stripe-Style Ambient Background Canvas Layers */}
//       <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
//         {/* Mouse Tracking Spotlight */}
//         <motion.div 
//           className="absolute w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[140px] mix-blend-screen"
//           style={{
//             x: useSpring(useTransform(mouseX, (x) => x - 300), { damping: 40, stiffness: 120 }),
//             y: useSpring(useTransform(mouseY, (y) => y - 300), { damping: 40, stiffness: 120 }),
//           }}
//         />
//         {/* Geometric Tech Grids & Ambient Gas Fogs */}
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] opacity-60" />
//         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[160px] rotate-12 rounded-full" />
//         <div className="absolute bottom-[-5%] right-[-5%] w-[45%] h-[50%] bg-cyan-900/10 blur-[180px] rounded-full" />
//         <div className="absolute inset-0 bg-neutral-950/20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
//       </div>

//       <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
//         {/* Header Block */}
//         <div className="mb-20 text-center">
//           <motion.h2 
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-extrabold tracking-tight font-sans"
//           >
//             System <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-indigo-500 bg-clip-text text-transparent">Architecture</span>
//           </motion.h2>
//           <motion.p 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="mx-auto mt-4 max-w-xl text-neutral-400 font-mono text-sm tracking-wide uppercase"
//           >
//             "Building modern, scalable software with performance and user experience."
//           </motion.p>
//         </div>

//         {/* 2. Command Center Stats Matrix */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
//           {counters.map((counter, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.05, duration: 0.5 }}
//               className="relative overflow-hidden p-6 rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800/80 backdrop-blur-md group"
//             >
//               <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-700/50 to-transparent" />
//               <div className="text-3xl md:text-4xl font-black font-mono bg-gradient-to-br from-white to-neutral-500 bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-105">
//                 {counter.value}
//               </div>
//               <div className="text-xs font-bold tracking-widest text-neutral-400 mt-2 border-t border-neutral-900 pt-2 font-mono">
//                 {counter.subText}
//               </div>
//               <div className="text-[11px] text-neutral-500 mt-0.5">{counter.desc}</div>
//             </motion.div>
//           ))}
//         </div>

//         {/* 3. CENTERPIECE Hero Component: D3 Interactive Constellation Galaxy */}
//         <div className="w-full mb-24">
//           <div className="text-center mb-6">
//             <span className="text-[10px] tracking-[0.3em] uppercase px-3 py-1 bg-white/5 border border-white/10 rounded-full font-mono text-neutral-400 animate-pulse">
//               Interactive Topology Module
//             </span>
//           </div>
//           <InteractiveGalaxy 
//             hoveredNode={hoveredNode} 
//             setHoveredNode={setHoveredNode} 
//             activePill={activePill}
//           />
//         </div>

//         {/* 4. Bento Layout Configuration with Deep Micro-Metadata */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start mb-24">
//           {skillGroups.map((group, idx) => {
//             // Distribute bento proportions via asymmetrical heights across columns
//             const colSpan = idx === 0 || idx === 3 ? "md:col-span-7" : "md:col-span-5";
//             return (
//               <BentoCard 
//                 key={group.title} 
//                 group={group} 
//                 colSpan={colSpan} 
//                 idx={idx}
//                 activePill={activePill}
//                 setActivePill={setActivePill}
//                 currentHoveredOrActive={currentHoveredOrActive}
//               />
//             );
//           })}
//         </div>

//         {/* 5. Cross-Linked Unified Project Ecosystem Wrapper */}
//         <div className="border-t border-neutral-900 pt-16">
//           <div className="mb-8">
//             <h3 className="text-2xl font-bold font-mono tracking-tight">Ecosystem Cross-References</h3>
//             <p className="text-xs text-neutral-500 font-mono mt-1">Hovering projects illuminates dependent technologies across layers</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {projectsData.map((project, pIdx) => {
//               // Determine if this project uses the currently hovered/selected skill node
//               const isHighlighted = currentHoveredOrActive && project.stack.includes(currentHoveredOrActive);
//               const isDimmed = currentHoveredOrActive && !project.stack.includes(currentHoveredOrActive);

//               return (
//                 <motion.div
//                   key={project.name}
//                   onMouseEnter={() => currentHoveredOrActive ? null : setHoveredNode(project.stack[0])}
//                   onMouseLeave={() => currentHoveredOrActive ? null : setHoveredNode(null)}
//                   className={`p-5 rounded-2xl border bg-neutral-900/40 backdrop-blur-sm transition-all duration-300 ${
//                     isHighlighted 
//                       ? "border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.1)] bg-neutral-900" 
//                       : isDimmed 
//                         ? "border-neutral-900/40 opacity-40" 
//                         : "border-neutral-800/60"
//                   }`}
//                 >
//                   <div className="flex justify-between items-start gap-4">
//                     <h4 className={`text-base font-bold transition-colors ${isHighlighted ? "text-cyan-400" : "text-white"}`}>
//                       {project.name}
//                     </h4>
//                     <span className="font-mono text-[9px] uppercase px-2 py-0.5 rounded bg-neutral-800 text-neutral-400">
//                       Production Stack
//                     </span>
//                   </div>
//                   <div className="flex flex-wrap gap-1.5 mt-4">
//                     {project.stack.map((tech) => {
//                       const matchNode = tech === currentHoveredOrActive;
//                       return (
//                         <span 
//                           key={tech} 
//                           className={`text-[10px] font-mono px-2 py-0.5 rounded transition-all ${
//                             matchNode 
//                               ? "bg-cyan-500 text-black font-extrabold shadow-md" 
//                               : "bg-neutral-900 text-neutral-400 border border-neutral-800"
//                           }`}
//                         >
//                           {tech}
//                         </span>
//                       );
//                     })}
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

// /* ==========================================================================
//    COMPONENT: InteractiveGalaxy (SVG Floating Force Network Topology)
//    ========================================================================== */
// function InteractiveGalaxy({ 
//   hoveredNode, 
//   setHoveredNode,
//   activePill 
// }: { 
//   hoveredNode: string | null; 
//   setHoveredNode: (val: string | null) => void;
//   activePill: string | null;
// }) {
//   const nodeRef = useRef<HTMLDivElement>(null);
//   const [coords, setCoords] = useState({ x: 0, y: 0 });

//   // Node position architecture mapping coordinates across the cluster map
//   const nodes = [
//     { id: "YOU", label: "YOU", x: 350, y: 200, size: 28, isCore: true, rel: [] },
//     { id: "React", label: "React", x: 350, y: 90, size: 20, isCore: false, rel: ["YOU", "Next.js", "TypeScript", "Framer Motion"] },
//     { id: "Next.js", label: "Next.js", x: 230, y: 110, size: 18, isCore: false, rel: ["React", "TypeScript", "Vercel"] },
//     { id: "TypeScript", label: "TypeScript", x: 470, y: 110, size: 18, isCore: false, rel: ["React", "Next.js", "Prisma"] },
//     { id: "Tailwind CSS", label: "Tailwind CSS", x: 210, y: 50, size: 15, isCore: false, rel: ["React", "Next.js"] },
//     { id: "Framer Motion", label: "Framer Motion", x: 490, y: 50, size: 15, isCore: false, rel: ["React"] },
//     { id: "Node.js", label: "Node.js", x: 230, y: 280, size: 19, isCore: false, rel: ["YOU", "Express", "Prisma", "PostgreSQL"] },
//     { id: "Express", label: "Express", x: 120, y: 260, size: 15, isCore: false, rel: ["Node.js", "MongoDB"] },
//     { id: "NestJS", label: "NestJS", x: 130, y: 340, size: 15, isCore: false, rel: ["Node.js", "TypeScript"] },
//     { id: "Prisma", label: "Prisma", x: 350, y: 320, size: 16, isCore: false, rel: ["Node.js", "PostgreSQL", "TypeScript"] },
//     { id: "PostgreSQL", label: "PostgreSQL", x: 470, y: 280, size: 18, isCore: false, rel: ["YOU", "Prisma", "Node.js"] },
//     { id: "MongoDB", label: "MongoDB", x: 580, y: 240, size: 16, isCore: false, rel: ["Express", "Node.js"] },
//     { id: "Redis", label: "Redis", x: 570, y: 340, size: 14, isCore: false, rel: ["Node.js"] },
//     { id: "Docker", label: "Docker", x: 350, y: 400, size: 17, isCore: false, rel: ["YOU", "Linux", "AWS"] },
//     { id: "Git", label: "Git", x: 240, y: 380, size: 15, isCore: false, rel: ["Vercel"] },
//     { id: "Linux", label: "Linux", x: 460, y: 380, size: 15, isCore: false, rel: ["Docker"] },
//     { id: "AWS", label: "AWS", x: 540, y: 410, size: 15, isCore: false, rel: ["Docker"] },
//     { id: "Vercel", label: "Vercel", x: 160, y: 190, size: 15, isCore: false, rel: ["Next.js", "Git"] },
//   ];

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!nodeRef.current) return;
//     const { left, top, width, height } = nodeRef.current.getBoundingClientRect();
//     const cx = left + width / 2;
//     const cy = top + height / 2;
//     setCoords({ x: (e.clientX - cx) * 0.04, y: (e.clientY - cy) * 0.04 });
//   };

//   const currentSelection = activePill || hoveredNode;
//   const activeNodeObject = nodes.find(n => n.id === currentSelection);

//   return (
//     <div 
//       ref={nodeRef}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={() => setCoords({ x: 0, y: 0 })}
//       className="w-full relative h-[460px] bg-neutral-900/20 rounded-3xl border border-neutral-950 overflow-hidden backdrop-blur-xl"
//     >
//       {/* Topology Context Tooltip Overlay Module */}
//       <AnimatePresence>
//         {currentSelection && activeNodeObject && !activeNodeObject.isCore && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95, y: 10 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.95, y: 10 }}
//             className="absolute top-6 left-6 z-20 w-64 p-4 rounded-xl bg-neutral-950/90 border border-neutral-800/80 backdrop-blur-md shadow-2xl font-mono"
//           >
//             <div className="flex items-center gap-2 mb-2">
//               <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
//               <div className="text-sm font-bold text-white">{activeNodeObject.id}</div>
//             </div>
//             <div className="space-y-1 text-[11px] text-neutral-400 border-t border-neutral-900 pt-2">
//               <div><span className="text-neutral-600">Context:</span> Core Production Stack</div>
//               <div><span className="text-neutral-600">Projects Managed:</span> {skillGroups.flatMap(g => g.skills).find(s => s.name === activeNodeObject.id)?.projects || 4}+</div>
//               <div><span className="text-neutral-600">Active Node Span:</span> Continuous Lifecycle</div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* SVG Network Render Node Engine */}
//       <motion.div 
//         className="w-full h-full absolute inset-0 flex items-center justify-center"
//         animate={{ x: coords.x, y: coords.y }}
//         transition={{ type: "spring", damping: 30, stiffness: 100 }}
//       >
//         <svg viewBox="0 0 700 440" className="w-full h-full max-w-[700px] select-none overflow-visible">
//           <defs>
//             <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
//               <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.25" />
//               <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
//             </radialGradient>
//           </defs>

//           {/* Render Connection Vectors / Pipes */}
//           {nodes.map((node) => 
//             node.rel.map((targetId) => {
//               const target = nodes.find((n) => n.id === targetId);
//               if (!target) return null;
              
//               const isLinkHighlighted = currentSelection === node.id || currentSelection === targetId;
//               const linkColor = isLinkHighlighted ? "#22d3ee" : "#333333";
//               const strokeWidth = isLinkHighlighted ? 1.5 : 0.75;
//               const opacity = currentSelection ? (isLinkHighlighted ? 0.8 : 0.15) : 0.4;

//               return (
//                 <line
//                   key={`${node.id}-${targetId}`}
//                   x1={node.x}
//                   y1={node.y}
//                   x2={target.x}
//                   y2={target.y}
//                   stroke={linkColor}
//                   strokeWidth={strokeWidth}
//                   strokeOpacity={opacity}
//                   strokeDasharray={isLinkHighlighted ? "4,4" : undefined}
//                   className="transition-all duration-300"
//                 />
//               );
//             })
//           )}

//           {/* Render Cluster Vertices Grid Handles */}
//           {nodes.map((node) => {
//             const isNodeMatch = currentSelection === node.id;
//             const isRelated = activeNodeObject?.rel.includes(node.id) || activeNodeObject?.id === node.id;
//             const opacityValue = currentSelection ? (isNodeMatch || isRelated ? 1 : 0.25) : 0.85;

//             return (
//               <motion.g
//                 key={node.id}
//                 className="cursor-pointer"
//                 onMouseEnter={() => setHoveredNode(node.id)}
//                 onMouseLeave={() => setHoveredNode(null)}
//                 animate={{ opacity: opacityValue, y: [0, node.isCore ? 0 : Math.sin(node.x) * 4, 0] }}
//                 transition={{ repeat: Infinity, duration: 4 + (node.x % 3), ease: "easeInOut" }}
//               >
//                 {node.isCore && (
//                   <circle cx={node.x} cy={node.y} r={node.size * 2} fill="url(#coreGlow)" />
//                 )}
//                 <circle
//                   cx={node.x}
//                   cy={node.y}
//                   r={node.size}
//                   fill={node.isCore ? "#111" : isNodeMatch ? "#22d3ee" : "#171717"}
//                   stroke={node.isCore ? "#22d3ee" : isNodeMatch ? "#fff" : "#262626"}
//                   strokeWidth={isNodeMatch || node.isCore ? 2 : 1}
//                   className="transition-colors duration-300"
//                 />
//                 <text
//                   x={node.x}
//                   y={node.y + 4}
//                   textAnchor="middle"
//                   fill={isNodeMatch ? "#000" : node.isCore ? "#22d3ee" : "#a3a3a3"}
//                   fontSize={node.isCore ? "11px" : "9px"}
//                   fontWeight={node.isCore || isNodeMatch ? "bold" : "normal"}
//                   className="font-mono pointer-events-none select-none transition-colors duration-300"
//                 >
//                   {node.label}
//                 </text>
//               </motion.g>
//             );
//           })}
//         </svg>
//       </motion.div>
//     </div>
//   );
// }

// /* ==========================================================================
//    COMPONENT: BentoCard (Asymmetric Expandable Spotlight Block)
//    ========================================================================== */
// function BentoCard({ 
//   group, 
//   colSpan, 
//   idx, 
//   activePill, 
//   setActivePill,
//   currentHoveredOrActive
// }: { 
//   group: typeof skillGroups[0]; 
//   colSpan: string; 
//   idx: number;
//   activePill: string | null;
//   setActivePill: (val: string | null) => void;
//   currentHoveredOrActive: string | null;
// }) {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const cardRef = useRef<HTMLDivElement>(null);
//   const spotX = useMotionValue(0);
//   const spotY = useMotionValue(0);

//   const handleSpotlight = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     spotX.set(e.clientX - rect.left);
//     spotY.set(e.clientY - rect.top);
//   };

//   const initialSkillsCount = 3;
//   const renderedSkills = isExpanded ? group.skills : group.skills.slice(0, initialSkillsCount);

//   return (
//     <motion.div
//       ref={cardRef}
//       onMouseMove={handleSpotlight}
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: idx * 0.08, duration: 0.6 }}
//       className={`${colSpan} relative rounded-3xl p-6 bg-neutral-900/30 backdrop-blur-md border border-neutral-800/80 group overflow-hidden transition-all duration-300 hover:border-neutral-700`}
//     >
//       {/* Micro Interactive Particles / Noise / Follow Spotlight Layer */}
//       <motion.div 
//         className="absolute w-48 h-48 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-3xl mix-blend-color-dodge -z-10"
//         style={{
//           left: useTransform(spotX, (x) => x - 96),
//           top: useTransform(spotY, (y) => y - 96),
//           background: `radial-gradient(circle, ${group.glowColor.replace('0.2', '0.4')} 0%, transparent 70%)`
//         }}
//       />
//       <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMSIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4=')] bg-repeat" />

//       <div className="flex justify-between items-center mb-6">
//         <h3 className="text-lg font-bold tracking-tight font-mono text-neutral-200">
//           {group.title}
//         </h3>
//         {group.skills.length > initialSkillsCount && (
//           <button 
//             onClick={() => setIsExpanded(!isExpanded)}
//             className="text-[10px] font-mono tracking-widest text-neutral-400 hover:text-white uppercase px-2 py-1 rounded bg-neutral-900/80 border border-neutral-800 transition-colors"
//           >
//             {isExpanded ? "Collapse ↗" : `View All (+${group.skills.length - initialSkillsCount}) ↘`}
//           </button>
//         )}
//       </div>

//       {/* Structured Minimal Stack List */}
//       <div className="space-y-3 relative z-10">
//         <AnimatePresence initial={false}>
//           {renderedSkills.map((skill, sIdx) => {
//             const Icon = skill.icon;
//             const isSelected = activePill === skill.name;
//             const isContextMatched = currentHoveredOrActive === skill.name;

//             return (
//               <motion.div
//                 key={skill.name}
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 exit={{ opacity: 0, height: 0 }}
//                 transition={{ duration: 0.25, delay: sIdx * 0.02 }}
//                 onClick={() => setActivePill(isSelected ? null : skill.name)}
//                 className={`w-full text-left p-3 rounded-xl border cursor-pointer transition-all duration-300 relative overflow-hidden flex flex-col ${
//                   isContextMatched
//                     ? `bg-neutral-900/90 border-neutral-600 shadow-md translate-x-1` 
//                     : "bg-neutral-950/40 border-neutral-900 hover:bg-neutral-900/50 hover:border-neutral-800"
//                 }`}
//               >
//                 {/* Accent Top Lip Highlight for Activated Items */}
//                 {isContextMatched && (
//                   <div className={`absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r ${group.color}`} />
//                 )}

//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <div className={`text-lg transition-transform duration-500 ${isContextMatched ? `rotate-12 ${group.accentText} scale-110` : "text-neutral-500"}`}>
//                       <Icon />
//                     </div>
//                     <span className={`text-xs font-mono font-medium transition-colors ${isContextMatched ? "text-white font-bold" : "text-neutral-300"}`}>
//                       {skill.name}
//                     </span>
//                   </div>
//                   <div className="text-[10px] font-mono text-neutral-500 tracking-wider">
//                     {skill.role}
//                   </div>
//                 </div>

//                 {/* Micro Metadata Tray: Rendered only on Hover Contexts or Selection Match */}
//                 {isContextMatched && (
//                   <motion.div 
//                     initial={{ opacity: 0, y: 4 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="mt-3 pt-2 border-t border-neutral-900 grid grid-cols-2 gap-2 text-[10px] font-mono text-neutral-400"
//                   >
//                     <div><span className="text-neutral-600">Timeline:</span> {skill.duration}</div>
//                     <div className="text-right"><span className="text-neutral-600">Integrations:</span> {skill.projects} Apps</div>
//                   </motion.div>
//                 )}
//               </motion.div>
//             );
//           })}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// }






// "use client";

// import React, { useState, useRef } from "react";
// import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
// import {
//   SiNextdotjs,
//   SiReact,
//   SiTypescript,
//   SiNodedotjs,
//   SiMongodb,
//   SiPostgresql,
//   SiDocker,
//   SiTailwindcss,
//   SiGit,
//   SiExpress,
//   SiNestjs,
//   SiPrisma,
//   SiRedis,
//   SiMysql,
//   SiLinux,
//   SiCloudflare,
//   SiVercel,
//   SiFramer
// } from "react-icons/si";

// // 1. Fully Enriched Relational System Schema
// const skillGroups = [
//   {
//     title: "Frontend Engineering",
//     color: "from-cyan-500 to-blue-500",
//     glowColor: "rgba(6, 182, 212, 0.15)",
//     accentText: "text-cyan-500 dark:text-cyan-400",
//     skills: [
//       { name: "React", icon: SiReact, role: "Core Engine", duration: "2021 — Present", projects: 14, connections: ["Next.js", "TypeScript", "Framer Motion"] },
//       { name: "Next.js", icon: SiNextdotjs, role: "SSR Architecture", duration: "2022 — Present", projects: 11, connections: ["React", "TypeScript", "Vercel"] },
//       { name: "TypeScript", icon: SiTypescript, role: "Type Safety", duration: "2021 — Present", projects: 19, connections: ["React", "Next.js", "Prisma"] },
//       { name: "Tailwind CSS", icon: SiTailwindcss, role: "Fluid Styling", duration: "2021 — Present", projects: 22, connections: ["React", "Next.js"] },
//       { name: "Framer Motion", icon: SiFramer, role: "Premium Physics", duration: "2023 — Present", projects: 6, connections: ["React"] },
//     ],
//   },
//   {
//     title: "Backend Services",
//     color: "from-emerald-500 to-teal-500",
//     glowColor: "rgba(16, 185, 129, 0.15)",
//     accentText: "text-emerald-500 dark:text-emerald-400",
//     skills: [
//       { name: "Node.js", icon: SiNodedotjs, role: "Runtime Core", duration: "2022 — Present", projects: 12, connections: ["Express", "Prisma", "PostgreSQL"] },
//       { name: "Express", icon: SiExpress, role: "REST Pipelines", duration: "2022 — Present", projects: 9, connections: ["Node.js", "MongoDB"] },
//       { name: "NestJS", icon: SiNestjs, role: "Enterprise Arch", duration: "2024 — Present", projects: 3, connections: ["Node.js", "TypeScript"] },
//       { name: "Prisma", icon: SiPrisma, role: "ORM Layer", duration: "2023 — Present", projects: 8, connections: ["Node.js", "PostgreSQL", "TypeScript"] },
//     ],
//   },
//   {
//     title: "Database Systems",
//     color: "from-violet-500 to-indigo-500",
//     glowColor: "rgba(139, 92, 246, 0.15)",
//     accentText: "text-violet-500 dark:text-violet-400",
//     skills: [
//       { name: "PostgreSQL", icon: SiPostgresql, role: "Relational Hub", duration: "2022 — Present", projects: 10, connections: ["Prisma", "Node.js"] },
//       { name: "MongoDB", icon: SiMongodb, role: "Document Store", duration: "2021 — Present", projects: 13, connections: ["Express", "Node.js"] },
//       { name: "Redis", icon: SiRedis, role: "Cache Proxy", duration: "2023 — Present", projects: 4, connections: ["Node.js"] },
//       { name: "MySQL", icon: SiMysql, role: "Legacy Queries", duration: "2021 — 2023", projects: 5, connections: ["Node.js"] },
//     ],
//   },
//   {
//     title: "DevOps & Infrastructure",
//     color: "from-amber-500 to-orange-500",
//     glowColor: "rgba(245, 158, 11, 0.15)",
//     accentText: "text-amber-500 dark:text-amber-400",
//     skills: [
//       { name: "Docker", icon: SiDocker, role: "Containerization", duration: "2023 — Present", projects: 7, connections: ["Linux", "AWS"] },
//       { name: "Git", icon: SiGit, role: "VCS Standard", duration: "2020 — Present", projects: 40, connections: ["Vercel"] },
//       { name: "Linux", icon: SiLinux, role: "Kernel Operations", duration: "2022 — Present", projects: 15, connections: ["Docker"] },
//       { name: "AWS", icon: SiCloudflare, role: "Infrastructure", duration: "2023 — Present", projects: 4, connections: ["Docker"] },
//       { name: "Vercel", icon: SiVercel, role: "Edge Delivery", duration: "2022 — Present", projects: 18, connections: ["Next.js", "Git"] },
//     ],
//   },
// ];

// const counters = [
//   { value: "25+", subText: "TECHNOLOGIES", desc: "Production Ready" },
//   { value: "40+", subText: "PROJECTS", desc: "Deployed End-to-End" },
//   { value: "15+", subText: "APIS INTEGRATED", desc: "RESTful & GraphQL" },
//   { value: "8", subText: "CERTIFICATIONS", desc: "Industry Verified" },
// ];

// const projectsData = [
//   { name: "Enterprise AI Dashboard", stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"] },
//   { name: "Real-time Collaborative Canvas", stack: ["React", "Node.js", "Express", "Redis", "Framer Motion"] },
//   { name: "Distributed Microservices Engine", stack: ["Node.js", "NestJS", "TypeScript", "Docker", "Linux", "AWS"] },
//   { name: "Decentralized E-Commerce Engine", stack: ["Next.js", "Tailwind CSS", "MongoDB", "Vercel", "Git"] },
// ];

// export default function Skills() {
//   const [hoveredNode, setHoveredNode] = useState<string | null>(null);
//   const [activePill, setActivePill] = useState<string | null>(null);
//   const containerRef = useRef<HTMLDivElement>(null);

//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const handleGlobalMouseMove = (e: React.MouseEvent) => {
//     if (!containerRef.current) return;
//     const { left, top } = containerRef.current.getBoundingClientRect();
//     mouseX.set(e.clientX - left);
//     mouseY.set(e.clientY - top);
//   };

//   const currentHoveredOrActive = hoveredNode || activePill;

//   return (
//     <section 
//       id="skills" 
//       ref={containerRef}
//       onMouseMove={handleGlobalMouseMove}
//       className="section-padding relative overflow-hidden"
//     >
//       {/* Background Interactive Spotlight Effects (Unified with Design System) */}
//       <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40 dark:opacity-100">
//         <motion.div 
//           className="absolute w-[600px] h-[600px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-[120px]"
//           style={{
//             x: useSpring(useTransform(mouseX, (x) => x - 300), { damping: 50, stiffness: 150 }),
//             y: useSpring(useTransform(mouseY, (y) => y - 300), { damping: 50, stiffness: 150 }),
//           }}
//         />
//       </div>

//       <div className="container-width relative z-10">
        
//         {/* Header (Matching layout style exactly) */}
//         <div className="mb-12 text-center">
//           <h2 className="text-3xl font-bold md:text-4xl">
//             System <span className="text-gradient">Architecture</span>
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
//             Building modern, scalable software ecosystems with structural integrity, premium performance, and optimal design patterns.
//           </p>
//         </div>

//         {/* Command Center Stats Matrix */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
//           {counters.map((counter, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.05, duration: 0.5 }}
//               className="relative overflow-hidden p-5 rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900/50 backdrop-blur-sm group"
//             >
//               <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white transition-transform duration-300 group-hover:scale-[1.02]">
//                 {counter.value}
//               </div>
//               <div className="text-[11px] font-bold tracking-widest text-neutral-400 dark:text-neutral-500 mt-2 border-t border-neutral-100 dark:border-neutral-800 pt-2 font-mono">
//                 {counter.subText}
//               </div>
//               <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">{counter.desc}</div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Interactive Topology Graph Section */}
//         <div className="w-full mb-16">
//           <div className="text-center mb-4">
//             <span className="text-[10px] tracking-[0.25em] uppercase px-3 py-1 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full font-mono text-neutral-500 dark:text-neutral-400">
//               Interactive Topology Module
//             </span>
//           </div>
//           <InteractiveGalaxy 
//             hoveredNode={hoveredNode} 
//             setHoveredNode={setHoveredNode} 
//             activePill={activePill}
//           />
//         </div>

//         {/* Asymmetrical Bento Layout Section */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start mb-16">
//           {skillGroups.map((group, idx) => {
//             const colSpan = idx === 0 || idx === 3 ? "md:col-span-7" : "md:col-span-5";
//             return (
//               <BentoCard 
//                 key={group.title} 
//                 group={group} 
//                 colSpan={colSpan} 
//                 idx={idx}
//                 activePill={activePill}
//                 setActivePill={setActivePill}
//                 currentHoveredOrActive={currentHoveredOrActive}
//               />
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }

// /* ==========================================================================
//    COMPONENT: InteractiveGalaxy (SVG Floating Force Network Topology)
//    ========================================================================== */
// function InteractiveGalaxy({ 
//   hoveredNode, 
//   setHoveredNode,
//   activePill 
// }: { 
//   hoveredNode: string | null; 
//   setHoveredNode: (val: string | null) => void;
//   activePill: string | null;
// }) {
//   const nodeRef = useRef<HTMLDivElement>(null);
//   const [coords, setCoords] = useState({ x: 0, y: 0 });

//   const nodes = [
//     { id: "YOU", label: "ENGINEER", x: 350, y: 200, size: 26, isCore: true, rel: [] },
//     { id: "React", label: "React", x: 350, y: 90, size: 20, isCore: false, rel: ["YOU", "Next.js", "TypeScript", "Framer Motion"] },
//     { id: "Next.js", label: "Next.js", x: 230, y: 110, size: 18, isCore: false, rel: ["React", "TypeScript", "Vercel"] },
//     { id: "TypeScript", label: "TypeScript", x: 470, y: 110, size: 18, isCore: false, rel: ["React", "Next.js", "Prisma"] },
//     { id: "Tailwind CSS", label: "Tailwind CSS", x: 210, y: 50, size: 15, isCore: false, rel: ["React", "Next.js"] },
//     { id: "Framer Motion", label: "Framer Motion", x: 490, y: 50, size: 15, isCore: false, rel: ["React"] },
//     { id: "Node.js", label: "Node.js", x: 230, y: 280, size: 19, isCore: false, rel: ["YOU", "Express", "Prisma", "PostgreSQL"] },
//     { id: "Express", label: "Express", x: 120, y: 260, size: 15, isCore: false, rel: ["Node.js", "MongoDB"] },
//     { id: "NestJS", label: "NestJS", x: 130, y: 340, size: 15, isCore: false, rel: ["Node.js", "TypeScript"] },
//     { id: "Prisma", label: "Prisma", x: 350, y: 320, size: 16, isCore: false, rel: ["Node.js", "PostgreSQL", "TypeScript"] },
//     { id: "PostgreSQL", label: "PostgreSQL", x: 470, y: 280, size: 18, isCore: false, rel: ["YOU", "Prisma", "Node.js"] },
//     { id: "MongoDB", label: "MongoDB", x: 580, y: 240, size: 16, isCore: false, rel: ["Express", "Node.js"] },
//     { id: "Redis", label: "Redis", x: 570, y: 340, size: 14, isCore: false, rel: ["Node.js"] },
//     { id: "Docker", label: "Docker", x: 350, y: 400, size: 17, isCore: false, rel: ["YOU", "Linux", "AWS"] },
//     { id: "Git", label: "Git", x: 240, y: 380, size: 15, isCore: false, rel: ["Vercel"] },
//     { id: "Linux", label: "Linux", x: 460, y: 380, size: 15, isCore: false, rel: ["Docker"] },
//     { id: "AWS", label: "AWS", x: 540, y: 410, size: 15, isCore: false, rel: ["Docker"] },
//     { id: "Vercel", label: "Vercel", x: 160, y: 190, size: 15, isCore: false, rel: ["Next.js", "Git"] },
//   ];

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!nodeRef.current) return;
//     const { left, top, width, height } = nodeRef.current.getBoundingClientRect();
//     const cx = left + width / 2;
//     const cy = top + height / 2;
//     setCoords({ x: (e.clientX - cx) * 0.03, y: (e.clientY - cy) * 0.03 });
//   };

//   const currentSelection = activePill || hoveredNode;
//   const activeNodeObject = nodes.find(n => n.id === currentSelection);

//   return (
//     <div 
//       ref={nodeRef}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={() => setCoords({ x: 0, y: 0 })}
//       className="w-full relative h-[460px] bg-neutral-50/50 dark:bg-neutral-900/20 rounded-3xl border border-neutral-200 dark:border-neutral-800/60 overflow-hidden backdrop-blur-xl flex items-center justify-center"
//     >
//       {/* Topology Tooltip Metadata overlay */}
//       <AnimatePresence>
//         {currentSelection && activeNodeObject && !activeNodeObject.isCore && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.97, y: 8 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.97, y: 8 }}
//             className="absolute top-5 left-5 z-20 w-60 p-4 rounded-xl bg-white/95 dark:bg-neutral-950/90 border border-neutral-200 dark:border-neutral-800 shadow-xl font-mono backdrop-blur-sm"
//           >
//             <div className="flex items-center gap-2 mb-2">
//               <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
//               <div className="text-xs font-bold text-neutral-900 dark:text-white uppercase">{activeNodeObject.id}</div>
//             </div>
//             <div className="space-y-1 text-[10px] text-neutral-500 dark:text-neutral-400 border-t border-neutral-100 dark:border-neutral-900 pt-2">
//               <div><span className="text-neutral-400 dark:text-neutral-600">Runtime Context:</span> Production Ready</div>
//               <div><span className="text-neutral-400 dark:text-neutral-600">Active Node Span:</span> Multi-Project Stack</div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <motion.div 
//         className="w-full h-full absolute inset-0 flex items-center justify-center p-4"
//         animate={{ x: coords.x, y: coords.y }}
//         transition={{ type: "spring", damping: 35, stiffness: 120 }}
//       >
//         <svg viewBox="0 0 700 440" className="w-full h-full max-w-[700px] select-none overflow-visible">
//           <defs>
//             <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
//               <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
//               <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
//             </radialGradient>
//           </defs>

//           {/* Render Connection Connectors */}
//           {nodes.map((node) => 
//             node.rel.map((targetId) => {
//               const target = nodes.find((n) => n.id === targetId);
//               if (!target) return null;
              
//               const isLinkHighlighted = currentSelection === node.id || currentSelection === targetId;
//               const linkColor = isLinkHighlighted ? "#6366f1" : "currentColor";
//               const strokeWidth = isLinkHighlighted ? 1.5 : 0.8;
//               const opacity = currentSelection ? (isLinkHighlighted ? 0.8 : 0.08) : 0.25;

//               return (
//                 <line
//                   key={`${node.id}-${targetId}`}
//                   x1={node.x}
//                   y1={node.y}
//                   x2={target.x}
//                   y2={target.y}
//                   stroke={linkColor}
//                   strokeWidth={strokeWidth}
//                   strokeOpacity={opacity}
//                   strokeDasharray={isLinkHighlighted ? "4,4" : undefined}
//                   className="text-neutral-300 dark:text-neutral-800 transition-all duration-300"
//                 />
//               );
//             })
//           )}

//           {/* Render Cluster Vertices Handles */}
//           {nodes.map((node) => {
//             const isNodeMatch = currentSelection === node.id;
//             const isRelated = activeNodeObject?.rel.includes(node.id) || activeNodeObject?.id === node.id;
//             const opacityValue = currentSelection ? (isNodeMatch || isRelated ? 1 : 0.2) : 0.9;

//             return (
//               <motion.g
//                 key={node.id}
//                 className="cursor-pointer"
//                 onMouseEnter={() => setHoveredNode(node.id)}
//                 onMouseLeave={() => setHoveredNode(null)}
//                 animate={{ opacity: opacityValue, y: [0, node.isCore ? 0 : Math.sin(node.x) * 3, 0] }}
//                 transition={{ repeat: Infinity, duration: 5 + (node.x % 3), ease: "easeInOut" }}
//               >
//                 {node.isCore && (
//                   <circle cx={node.x} cy={node.y} r={node.size * 2} fill="url(#coreGlow)" />
//                 )}
//                 <circle
//                   cx={node.x}
//                   cy={node.y}
//                   r={node.size}
//                   className={`transition-colors duration-300 fill-white dark:fill-neutral-900 stroke-neutral-200 dark:stroke-neutral-800 ${
//                     isNodeMatch ? "stroke-indigo-500 dark:stroke-indigo-400 fill-indigo-50/20 dark:fill-indigo-950/20" : ""
//                   }`}
//                   strokeWidth={isNodeMatch || node.isCore ? 2 : 1}
//                 />
//                 <text
//                   x={node.x}
//                   y={node.y + 3}
//                   textAnchor="middle"
//                   className={`font-mono pointer-events-none select-none text-[9px] transition-colors duration-300 fill-neutral-600 dark:fill-neutral-400 ${
//                     isNodeMatch ? "fill-indigo-600 dark:fill-indigo-400 font-bold" : ""
//                   } ${node.isCore ? "font-bold text-[10px] tracking-wide fill-neutral-900 dark:fill-white" : ""}`}
//                 >
//                   {node.label}
//                 </text>
//               </motion.g>
//             );
//           })}
//         </svg>
//       </motion.div>
//     </div>
//   );
// }

// /* ==========================================================================
//    COMPONENT: BentoCard (Asymmetric Expandable Spotlight Block)
//    ========================================================================== */
// function BentoCard({ 
//   group, 
//   colSpan, 
//   idx, 
//   activePill, 
//   setActivePill,
//   currentHoveredOrActive
// }: { 
//   group: typeof skillGroups[0]; 
//   colSpan: string; 
//   idx: number;
//   activePill: string | null;
//   setActivePill: (val: string | null) => void;
//   currentHoveredOrActive: string | null;
// }) {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const cardRef = useRef<HTMLDivElement>(null);
//   const spotX = useMotionValue(0);
//   const spotY = useMotionValue(0);

//   const handleSpotlight = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     spotX.set(e.clientX - rect.left);
//     spotY.set(e.clientY - rect.top);
//   };

//   const initialSkillsCount = 3;
//   const renderedSkills = isExpanded ? group.skills : group.skills.slice(0, initialSkillsCount);

//   return (
//     <motion.div
//       ref={cardRef}
//       onMouseMove={handleSpotlight}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: idx * 0.05, duration: 0.5 }}
//       className={`${colSpan} relative rounded-2xl p-5 bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800/80 group overflow-hidden transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700/80`}
//     >
//       {/* Structural Subtle Radial Follow Flare */}
//       <motion.div 
//         className="absolute w-44 h-44 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl mix-blend-normal dark:mix-blend-color-dodge -z-10"
//         style={{
//           left: useTransform(spotX, (x) => x - 88),
//           top: useTransform(spotY, (y) => y - 88),
//           background: `radial-gradient(circle, ${group.glowColor} 0%, transparent 75%)`
//         }}
//       />

//       <div className="flex justify-between items-center mb-5">
//         <h3 className="text-sm font-bold tracking-tight text-neutral-800 dark:text-neutral-200 uppercase font-mono">
//           {group.title}
//         </h3>
//         {group.skills.length > initialSkillsCount && (
//           <button 
//             onClick={() => setIsExpanded(!isExpanded)}
//             className="text-[9px] font-mono tracking-wider text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white uppercase px-2 py-0.5 rounded bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 transition-colors"
//           >
//             {isExpanded ? "Collapse" : `View All (+${group.skills.length - initialSkillsCount})`}
//           </button>
//         )}
//       </div>

//       {/* Structured Modern Stack List Grid */}
//       <div className="space-y-2.5 relative z-10">
//         <AnimatePresence initial={false}>
//           {renderedSkills.map((skill, sIdx) => {
//             const Icon = skill.icon;
//             const isSelected = activePill === skill.name;
//             const isContextMatched = currentHoveredOrActive === skill.name;

//             return (
//               <motion.div
//                 key={skill.name}
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 exit={{ opacity: 0, height: 0 }}
//                 transition={{ duration: 0.2, delay: sIdx * 0.01 }}
//                 onClick={() => setActivePill(isSelected ? null : skill.name)}
//                 className={`w-full text-left p-3 rounded-xl border cursor-pointer transition-all duration-300 relative overflow-hidden flex flex-col ${
//                   isContextMatched
//                     ? `bg-neutral-50/80 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-600 shadow-sm translate-x-0.5` 
//                     : "bg-neutral-50/30 dark:bg-neutral-950/30 border-neutral-100 dark:border-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 hover:border-neutral-200 dark:hover:border-neutral-800"
//                 }`}
//               >
//                 {/* Visual Top Edge Accent Highlight for Activated States */}
//                 {isContextMatched && (
//                   <div className={`absolute top-0 left-0 h-[1.5px] w-full bg-gradient-to-r ${group.color}`} />
//                 )}

//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <div className={`text-base transition-transform duration-300 ${isContextMatched ? `scale-110 ${group.accentText}` : "text-neutral-400 dark:text-neutral-500"}`}>
//                       <Icon />
//                     </div>
//                     <span className={`text-xs font-medium transition-colors ${isContextMatched ? "text-neutral-900 dark:text-white font-semibold" : "text-neutral-700 dark:text-neutral-300"}`}>
//                       {skill.name}
//                     </span>
//                   </div>
//                   <div className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 tracking-wide">
//                     {skill.role}
//                   </div>
//                 </div>

//                 {/* Inline Expansion Data Drawer Layer */}
//                 {isContextMatched && (
//                   <motion.div 
//                     initial={{ opacity: 0, y: 3 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="mt-2.5 pt-2 border-t border-neutral-200/60 dark:border-neutral-800 grid grid-cols-2 gap-2 text-[10px] font-mono text-neutral-500 dark:text-neutral-400"
//                   >
//                     <div><span className="text-neutral-400 dark:text-neutral-600">Timeline:</span> {skill.duration}</div>
//                     <div className="text-right"><span className="text-neutral-400 dark:text-neutral-600">Production Integrations:</span> {skill.projects} Apps</div>
//                   </motion.div>
//                 )}
//               </motion.div>
//             );
//           })}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// }





// "use client";

// import React, { useState, useRef } from "react";
// import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
// import {
//   SiNextdotjs,
//   SiReact,
//   SiTypescript,
//   SiNodedotjs,
//   SiMongodb,
//   SiPostgresql,
//   SiDocker,
//   SiTailwindcss,
//   SiGit,
//   SiExpress,
//   SiNestjs,
//   SiPrisma,
//   SiRedis,
//   SiMysql,
//   SiLinux,
//   SiCloudflare,
//   SiVercel,
//   SiFramer
// } from "react-icons/si";

// // 1. Fully Enriched Relational System Schema
// const skillGroups = [
//   {
//     title: "Frontend Engineering",
//     color: "from-cyan-500 to-blue-500",
//     glowColor: "rgba(6, 182, 212, 0.15)",
//     accentText: "text-cyan-500 dark:text-cyan-400",
//     skills: [
//       { name: "React", icon: SiReact, role: "Core Engine", duration: "2021 — Present", projects: 14, connections: ["Next.js", "TypeScript", "Framer Motion"] },
//       { name: "Next.js", icon: SiNextdotjs, role: "SSR Architecture", duration: "2022 — Present", projects: 11, connections: ["React", "TypeScript", "Vercel"] },
//       { name: "TypeScript", icon: SiTypescript, role: "Type Safety", duration: "2021 — Present", projects: 19, connections: ["React", "Next.js", "Prisma"] },
//       { name: "Tailwind CSS", icon: SiTailwindcss, role: "Fluid Styling", duration: "2021 — Present", projects: 22, connections: ["React", "Next.js"] },
//       { name: "Framer Motion", icon: SiFramer, role: "Premium Physics", duration: "2023 — Present", projects: 6, connections: ["React"] },
//     ],
//   },
//   {
//     title: "Backend Services",
//     color: "from-emerald-500 to-teal-500",
//     glowColor: "rgba(16, 185, 129, 0.15)",
//     accentText: "text-emerald-500 dark:text-emerald-400",
//     skills: [
//       { name: "Node.js", icon: SiNodedotjs, role: "Runtime Core", duration: "2022 — Present", projects: 12, connections: ["Express", "Prisma", "PostgreSQL"] },
//       { name: "Express", icon: SiExpress, role: "REST Pipelines", duration: "2022 — Present", projects: 9, connections: ["Node.js", "MongoDB"] },
//       { name: "NestJS", icon: SiNestjs, role: "Enterprise Arch", duration: "2024 — Present", projects: 3, connections: ["Node.js", "TypeScript"] },
//       { name: "Prisma", icon: SiPrisma, role: "ORM Layer", duration: "2023 — Present", projects: 8, connections: ["Node.js", "PostgreSQL", "TypeScript"] },
//     ],
//   },
//   {
//     title: "Database Systems",
//     color: "from-violet-500 to-indigo-500",
//     glowColor: "rgba(139, 92, 246, 0.15)",
//     accentText: "text-violet-500 dark:text-violet-400",
//     skills: [
//       { name: "PostgreSQL", icon: SiPostgresql, role: "Relational Hub", duration: "2022 — Present", projects: 10, connections: ["Prisma", "Node.js"] },
//       { name: "MongoDB", icon: SiMongodb, role: "Document Store", duration: "2021 — Present", projects: 13, connections: ["Express", "Node.js"] },
//       { name: "Redis", icon: SiRedis, role: "Cache Proxy", duration: "2023 — Present", projects: 4, connections: ["Node.js"] },
//       { name: "MySQL", icon: SiMysql, role: "Legacy Queries", duration: "2021 — 2023", projects: 5, connections: ["Node.js"] },
//     ],
//   },
//   {
//     title: "DevOps & Infrastructure",
//     color: "from-amber-500 to-orange-500",
//     glowColor: "rgba(245, 158, 11, 0.15)",
//     accentText: "text-amber-500 dark:text-amber-400",
//     skills: [
//       { name: "Docker", icon: SiDocker, role: "Containerization", duration: "2023 — Present", projects: 7, connections: ["Linux", "AWS"] },
//       { name: "Git", icon: SiGit, role: "VCS Standard", duration: "2020 — Present", projects: 40, connections: ["Vercel"] },
//       { name: "Linux", icon: SiLinux, role: "Kernel Operations", duration: "2022 — Present", projects: 15, connections: ["Docker"] },
//       { name: "AWS", icon: SiCloudflare, role: "Infrastructure", duration: "2023 — Present", projects: 4, connections: ["Docker"] },
//       { name: "Vercel", icon: SiVercel, role: "Edge Delivery", duration: "2022 — Present", projects: 18, connections: ["Next.js", "Git"] },
//     ],
//   },
// ];

// const counters = [
//   { value: "25+", subText: "TECHNOLOGIES", desc: "Production Ready" },
//   { value: "40+", subText: "PROJECTS", desc: "Deployed End-to-End" },
//   { value: "15+", subText: "APIS INTEGRATED", desc: "RESTful & GraphQL" },
//   { value: "8", subText: "CERTIFICATIONS", desc: "Industry Verified" },
// ];

// const projectsData = [
//   { name: "Enterprise AI Dashboard", stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"] },
//   { name: "Real-time Collaborative Canvas", stack: ["React", "Node.js", "Express", "Redis", "Framer Motion"] },
//   { name: "Distributed Microservices Engine", stack: ["Node.js", "NestJS", "TypeScript", "Docker", "Linux", "AWS"] },
//   { name: "Decentralized E-Commerce Engine", stack: ["Next.js", "Tailwind CSS", "MongoDB", "Vercel", "Git"] },
// ];

// export default function Skills() {
//   const [hoveredNode, setHoveredNode] = useState<string | null>(null);
//   const [activePill, setActivePill] = useState<string | null>(null);
//   const containerRef = useRef<HTMLDivElement>(null);

//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const handleGlobalMouseMove = (e: React.MouseEvent) => {
//     if (!containerRef.current) return;
//     const { left, top } = containerRef.current.getBoundingClientRect();
//     mouseX.set(e.clientX - left);
//     mouseY.set(e.clientY - top);
//   };

//   const currentHoveredOrActive = hoveredNode || activePill;

//   return (
//     <section 
//       id="skills" 
//       ref={containerRef}
//       onMouseMove={handleGlobalMouseMove}
//       className="section-padding relative overflow-hidden"
//     >
//       {/* Background Interactive Spotlight Effects (Unified with Design System) */}
//       <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40 dark:opacity-100">
//         <motion.div 
//           className="absolute w-[600px] h-[600px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-[120px]"
//           style={{
//             x: useSpring(useTransform(mouseX, (x) => x - 300), { damping: 50, stiffness: 150 }),
//             y: useSpring(useTransform(mouseY, (y) => y - 300), { damping: 50, stiffness: 150 }),
//           }}
//         />
//       </div>

//       <div className="container-width relative z-10">
        
//         {/* Header (Matching layout style exactly) */}
//         <div className="mb-12 text-center">
//           <h2 className="text-3xl font-bold md:text-4xl">
//             System <span className="text-gradient">Architecture</span>
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
//             Building modern, scalable software ecosystems with structural integrity, premium performance, and optimal design patterns.
//           </p>
          
//           {/* Added Button to Skill Tree Page */}
//           <div className="mt-6">
//             <motion.a
//               href="/skill-tree"
//               whileHover={{ scale: 1.03, y: -1 }}
//               whileTap={{ scale: 0.98 }}
//               className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-xs font-mono font-bold tracking-wider text-neutral-800 dark:text-neutral-200 shadow-sm transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700 uppercase"
//             >
//               <span>Explore Interactive Skill Tree</span>
//               <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
//               </svg>
//             </motion.a>
//           </div>
//         </div>

//         {/* Command Center Stats Matrix */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
//           {counters.map((counter, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.05, duration: 0.5 }}
//               className="relative overflow-hidden p-5 rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900/50 backdrop-blur-sm group"
//             >
//               <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white transition-transform duration-300 group-hover:scale-[1.02]">
//                 {counter.value}
//               </div>
//               <div className="text-[11px] font-bold tracking-widest text-neutral-400 dark:text-neutral-500 mt-2 border-t border-neutral-100 dark:border-neutral-800 pt-2 font-mono">
//                 {counter.subText}
//               </div>
//               <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">{counter.desc}</div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Interactive Topology Graph Section */}
//         <div className="w-full mb-16">
//           <div className="text-center mb-4">
//             <span className="text-[10px] tracking-[0.25em] uppercase px-3 py-1 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full font-mono text-neutral-500 dark:text-neutral-400">
//               Interactive Topology Module
//             </span>
//           </div>
//           <InteractiveGalaxy 
//             hoveredNode={hoveredNode} 
//             setHoveredNode={setHoveredNode} 
//             activePill={activePill}
//           />
//         </div>

//         {/* Asymmetrical Bento Layout Section */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start mb-16">
//           {skillGroups.map((group, idx) => {
//             const colSpan = idx === 0 || idx === 3 ? "md:col-span-7" : "md:col-span-5";
//             return (
//               <BentoCard 
//                 key={group.title} 
//                 group={group} 
//                 colSpan={colSpan} 
//                 idx={idx}
//                 activePill={activePill}
//                 setActivePill={setActivePill}
//                 currentHoveredOrActive={currentHoveredOrActive}
//               />
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }

// /* ==========================================================================
//    COMPONENT: InteractiveGalaxy (SVG Floating Force Network Topology)
//    ========================================================================== */
// function InteractiveGalaxy({ 
//   hoveredNode, 
//   setHoveredNode,
//   activePill 
// }: { 
//   hoveredNode: string | null; 
//   setHoveredNode: (val: string | null) => void;
//   activePill: string | null;
// }) {
//   const nodeRef = useRef<HTMLDivElement>(null);
//   const [coords, setCoords] = useState({ x: 0, y: 0 });

//   const nodes = [
//     { id: "YOU", label: "ENGINEER", x: 350, y: 200, size: 26, isCore: true, rel: [] },
//     { id: "React", label: "React", x: 350, y: 90, size: 20, isCore: false, rel: ["YOU", "Next.js", "TypeScript", "Framer Motion"] },
//     { id: "Next.js", label: "Next.js", x: 230, y: 110, size: 18, isCore: false, rel: ["React", "TypeScript", "Vercel"] },
//     { id: "TypeScript", label: "TypeScript", x: 470, y: 110, size: 18, isCore: false, rel: ["React", "Next.js", "Prisma"] },
//     { id: "Tailwind CSS", label: "Tailwind CSS", x: 210, y: 50, size: 15, isCore: false, rel: ["React", "Next.js"] },
//     { id: "Framer Motion", label: "Framer Motion", x: 490, y: 50, size: 15, isCore: false, rel: ["React"] },
//     { id: "Node.js", label: "Node.js", x: 230, y: 280, size: 19, isCore: false, rel: ["YOU", "Express", "Prisma", "PostgreSQL"] },
//     { id: "Express", label: "Express", x: 120, y: 260, size: 15, isCore: false, rel: ["Node.js", "MongoDB"] },
//     { id: "NestJS", label: "NestJS", x: 130, y: 340, size: 15, isCore: false, rel: ["Node.js", "TypeScript"] },
//     { id: "Prisma", label: "Prisma", x: 350, y: 320, size: 16, isCore: false, rel: ["Node.js", "PostgreSQL", "TypeScript"] },
//     { id: "PostgreSQL", label: "PostgreSQL", x: 470, y: 280, size: 18, isCore: false, rel: ["YOU", "Prisma", "Node.js"] },
//     { id: "MongoDB", label: "MongoDB", x: 580, y: 240, size: 16, isCore: false, rel: ["Express", "Node.js"] },
//     { id: "Redis", label: "Redis", x: 570, y: 340, size: 14, isCore: false, rel: ["Node.js"] },
//     { id: "Docker", label: "Docker", x: 350, y: 400, size: 17, isCore: false, rel: ["YOU", "Linux", "AWS"] },
//     { id: "Git", label: "Git", x: 240, y: 380, size: 15, isCore: false, rel: ["Vercel"] },
//     { id: "Linux", label: "Linux", x: 460, y: 380, size: 15, isCore: false, rel: ["Docker"] },
//     { id: "AWS", label: "AWS", x: 540, y: 410, size: 15, isCore: false, rel: ["Docker"] },
//     { id: "Vercel", label: "Vercel", x: 160, y: 190, size: 15, isCore: false, rel: ["Next.js", "Git"] },
//   ];

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!nodeRef.current) return;
//     const { left, top, width, height } = nodeRef.current.getBoundingClientRect();
//     const cx = left + width / 2;
//     const cy = top + height / 2;
//     setCoords({ x: (e.clientX - cx) * 0.03, y: (e.clientY - cy) * 0.03 });
//   };

//   const currentSelection = activePill || hoveredNode;
//   const activeNodeObject = nodes.find(n => n.id === currentSelection);

//   return (
//     <div 
//       ref={nodeRef}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={() => setCoords({ x: 0, y: 0 })}
//       className="w-full relative h-[460px] bg-neutral-50/50 dark:bg-neutral-900/20 rounded-3xl border border-neutral-200 dark:border-neutral-800/60 overflow-hidden backdrop-blur-xl flex items-center justify-center"
//     >
//       {/* Topology Tooltip Metadata overlay */}
//       <AnimatePresence>
//         {currentSelection && activeNodeObject && !activeNodeObject.isCore && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.97, y: 8 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.97, y: 8 }}
//             className="absolute top-5 left-5 z-20 w-60 p-4 rounded-xl bg-white/95 dark:bg-neutral-950/90 border border-neutral-200 dark:border-neutral-800 shadow-xl font-mono backdrop-blur-sm"
//           >
//             <div className="flex items-center gap-2 mb-2">
//               <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
//               <div className="text-xs font-bold text-neutral-900 dark:text-white uppercase">{activeNodeObject.id}</div>
//             </div>
//             <div className="space-y-1 text-[10px] text-neutral-500 dark:text-neutral-400 border-t border-neutral-100 dark:border-neutral-900 pt-2">
//               <div><span className="text-neutral-400 dark:text-neutral-600">Runtime Context:</span> Production Ready</div>
//               <div><span className="text-neutral-400 dark:text-neutral-600">Active Node Span:</span> Multi-Project Stack</div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <motion.div 
//         className="w-full h-full absolute inset-0 flex items-center justify-center p-4"
//         animate={{ x: coords.x, y: coords.y }}
//         transition={{ type: "spring", damping: 35, stiffness: 120 }}
//       >
//         <svg viewBox="0 0 700 440" className="w-full h-full max-w-[700px] select-none overflow-visible">
//           <defs>
//             <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
//               <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
//               <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
//             </radialGradient>
//           </defs>

//           {/* Render Connection Connectors */}
//           {nodes.map((node) => 
//             node.rel.map((targetId) => {
//               const target = nodes.find((n) => n.id === targetId);
//               if (!target) return null;
              
//               const isLinkHighlighted = currentSelection === node.id || currentSelection === targetId;
//               const linkColor = isLinkHighlighted ? "#6366f1" : "currentColor";
//               const strokeWidth = isLinkHighlighted ? 1.5 : 0.8;
//               const opacity = currentSelection ? (isLinkHighlighted ? 0.8 : 0.08) : 0.25;

//               return (
//                 <line
//                   key={`${node.id}-${targetId}`}
//                   x1={node.x}
//                   y1={node.y}
//                   x2={target.x}
//                   y2={target.y}
//                   stroke={linkColor}
//                   strokeWidth={strokeWidth}
//                   strokeOpacity={opacity}
//                   strokeDasharray={isLinkHighlighted ? "4,4" : undefined}
//                   className="text-neutral-300 dark:text-neutral-800 transition-all duration-300"
//                 />
//               );
//             })
//           )}

//           {/* Render Cluster Vertices Handles */}
//           {nodes.map((node) => {
//             const isNodeMatch = currentSelection === node.id;
//             const isRelated = activeNodeObject?.rel.includes(node.id) || activeNodeObject?.id === node.id;
//             const opacityValue = currentSelection ? (isNodeMatch || isRelated ? 1 : 0.2) : 0.9;

//             return (
//               <motion.g
//                 key={node.id}
//                 className="cursor-pointer"
//                 onMouseEnter={() => setHoveredNode(node.id)}
//                 onMouseLeave={() => setHoveredNode(null)}
//                 animate={{ opacity: opacityValue, y: [0, node.isCore ? 0 : Math.sin(node.x) * 3, 0] }}
//                 transition={{ repeat: Infinity, duration: 5 + (node.x % 3), ease: "easeInOut" }}
//               >
//                 {node.isCore && (
//                   <circle cx={node.x} cy={node.y} r={node.size * 2} fill="url(#coreGlow)" />
//                 )}
//                 <circle
//                   cx={node.x}
//                   cy={node.y}
//                   r={node.size}
//                   className={`transition-colors duration-300 fill-white dark:fill-neutral-900 stroke-neutral-200 dark:stroke-neutral-800 ${
//                     isNodeMatch ? "stroke-indigo-500 dark:stroke-indigo-400 fill-indigo-50/20 dark:fill-indigo-950/20" : ""
//                   }`}
//                   strokeWidth={isNodeMatch || node.isCore ? 2 : 1}
//                 />
//                 <text
//                   x={node.x}
//                   y={node.y + 3}
//                   textAnchor="middle"
//                   className={`font-mono pointer-events-none select-none text-[9px] transition-colors duration-300 fill-neutral-600 dark:fill-neutral-400 ${
//                     isNodeMatch ? "fill-indigo-600 dark:fill-indigo-400 font-bold" : ""
//                   } ${node.isCore ? "font-bold text-[10px] tracking-wide fill-neutral-900 dark:fill-white" : ""}`}
//                 >
//                   {node.label}
//                 </text>
//               </motion.g>
//             );
//           })}
//         </svg>
//       </motion.div>
//     </div>
//   );
// }

// /* ==========================================================================
//    COMPONENT: BentoCard (Asymmetric Expandable Spotlight Block)
//    ========================================================================== */
// function BentoCard({ 
//   group, 
//   colSpan, 
//   idx, 
//   activePill, 
//   setActivePill,
//   currentHoveredOrActive
// }: { 
//   group: typeof skillGroups[0]; 
//   colSpan: string; 
//   idx: number;
//   activePill: string | null;
//   setActivePill: (val: string | null) => void;
//   currentHoveredOrActive: string | null;
// }) {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const cardRef = useRef<HTMLDivElement>(null);
//   const spotX = useMotionValue(0);
//   const spotY = useMotionValue(0);

//   const handleSpotlight = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     spotX.set(e.clientX - rect.left);
//     spotY.set(e.clientY - rect.top);
//   };

//   const initialSkillsCount = 3;
//   const renderedSkills = isExpanded ? group.skills : group.skills.slice(0, initialSkillsCount);

//   return (
//     <motion.div
//       ref={cardRef}
//       onMouseMove={handleSpotlight}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: idx * 0.05, duration: 0.5 }}
//       className={`${colSpan} relative rounded-2xl p-5 bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800/80 group overflow-hidden transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700/80`}
//     >
//       {/* Structural Subtle Radial Follow Flare */}
//       <motion.div 
//         className="absolute w-44 h-44 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl mix-blend-normal dark:mix-blend-color-dodge -z-10"
//         style={{
//           left: useTransform(spotX, (x) => x - 88),
//           top: useTransform(spotY, (y) => y - 88),
//           background: `radial-gradient(circle, ${group.glowColor} 0%, transparent 75%)`
//         }}
//       />

//       <div className="flex justify-between items-center mb-5">
//         <h3 className="text-sm font-bold tracking-tight text-neutral-800 dark:text-neutral-200 uppercase font-mono">
//           {group.title}
//         </h3>
//         {group.skills.length > initialSkillsCount && (
//           <button 
//             onClick={() => setIsExpanded(!isExpanded)}
//             className="text-[9px] font-mono tracking-wider text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white uppercase px-2 py-0.5 rounded bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 transition-colors"
//           >
//             {isExpanded ? "Collapse" : `View All (+${group.skills.length - initialSkillsCount})`}
//           </button>
//         )}
//       </div>

//       {/* Structured Modern Stack List Grid */}
//       <div className="space-y-2.5 relative z-10">
//         <AnimatePresence initial={false}>
//           {renderedSkills.map((skill, sIdx) => {
//             const Icon = skill.icon;
//             const isSelected = activePill === skill.name;
//             const isContextMatched = currentHoveredOrActive === skill.name;

//             return (
//               <motion.div
//                 key={skill.name}
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 exit={{ opacity: 0, height: 0 }}
//                 transition={{ duration: 0.2, delay: sIdx * 0.01 }}
//                 onClick={() => setActivePill(isSelected ? null : skill.name)}
//                 className={`w-full text-left p-3 rounded-xl border cursor-pointer transition-all duration-300 relative overflow-hidden flex flex-col ${
//                   isContextMatched
//                     ? `bg-neutral-50/80 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-600 shadow-sm translate-x-0.5` 
//                     : "bg-neutral-50/30 dark:bg-neutral-950/30 border-neutral-100 dark:border-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 hover:border-neutral-200 dark:hover:border-neutral-800"
//                 }`}
//               >
//                 {/* Visual Top Edge Accent Highlight for Activated States */}
//                 {isContextMatched && (
//                   <div className={`absolute top-0 left-0 h-[1.5px] w-full bg-gradient-to-r ${group.color}`} />
//                 )}

//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <div className={`text-base transition-transform duration-300 ${isContextMatched ? `scale-110 ${group.accentText}` : "text-neutral-400 dark:text-neutral-500"}`}>
//                       <Icon />
//                     </div>
//                     <span className={`text-xs font-medium transition-colors ${isContextMatched ? "text-neutral-900 dark:text-white font-semibold" : "text-neutral-700 dark:text-neutral-300"}`}>
//                       {skill.name}
//                     </span>
//                   </div>
//                   <div className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 tracking-wide">
//                     {skill.role}
//                   </div>
//                 </div>

//                 {/* Inline Expansion Data Drawer Layer */}
//                 {isContextMatched && (
//                   <motion.div 
//                     initial={{ opacity: 0, y: 3 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="mt-2.5 pt-2 border-t border-neutral-200/60 dark:border-neutral-800 grid grid-cols-2 gap-2 text-[10px] font-mono text-neutral-500 dark:text-neutral-400"
//                   >
//                     <div><span className="text-neutral-400 dark:text-neutral-600">Timeline:</span> {skill.duration}</div>
//                     <div className="text-right"><span className="text-neutral-400 dark:text-neutral-600">Production Integrations:</span> {skill.projects} Apps</div>
//                   </motion.div>
//                 )}
//               </motion.div>
//             );
//           })}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// }








// "use client";

// import React, { useState, useRef } from "react";
// import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
// import {
//   SiNextdotjs,
//   SiReact,
//   SiTypescript,
//   SiNodedotjs,
//   SiMongodb,
//   SiPostgresql,
//   SiDocker,
//   SiTailwindcss,
//   SiGit,
//   SiExpress,
//   SiNestjs,
//   SiPrisma,
//   SiRedis,
//   SiMysql,
//   SiLinux,
//   SiCloudflare,
//   SiVercel,
//   SiFramer
// } from "react-icons/si";

// // 1. Relational System Schema
// const skillGroups = [
//   {
//     title: "Frontend Engineering",
//     color: "from-cyan-500 to-blue-500",
//     glowColor: "rgba(6, 182, 212, 0.15)",
//     accentText: "text-cyan-500 dark:text-cyan-400",
//     borderActive: "border-cyan-500/50 dark:border-cyan-400/40",
//     bgActive: "bg-cyan-50/5 dark:bg-cyan-950/5",
//     skills: [
//       { name: "React", icon: SiReact, role: "Core Engine", duration: "2021 — Present", projects: 14, connections: ["Next.js", "TypeScript", "Framer Motion"] },
//       { name: "Next.js", icon: SiNextdotjs, role: "SSR Architecture", duration: "2022 — Present", projects: 11, connections: ["React", "TypeScript", "Vercel"] },
//       { name: "TypeScript", icon: SiTypescript, role: "Type Safety", duration: "2021 — Present", projects: 19, connections: ["React", "Next.js", "Prisma"] },
//       { name: "Tailwind CSS", icon: SiTailwindcss, role: "Fluid Styling", duration: "2021 — Present", projects: 22, connections: ["React", "Next.js"] },
//       { name: "Framer Motion", icon: SiFramer, role: "Premium Physics", duration: "2023 — Present", projects: 6, connections: ["React"] },
//     ],
//   },
//   {
//     title: "Backend Services",
//     color: "from-emerald-500 to-teal-500",
//     glowColor: "rgba(16, 185, 129, 0.15)",
//     accentText: "text-emerald-500 dark:text-emerald-400",
//     borderActive: "border-emerald-500/50 dark:border-emerald-400/40",
//     bgActive: "bg-emerald-50/5 dark:bg-emerald-950/5",
//     skills: [
//       { name: "Node.js", icon: SiNodedotjs, role: "Runtime Core", duration: "2022 — Present", projects: 12, connections: ["Express", "Prisma", "PostgreSQL"] },
//       { name: "Express", icon: SiExpress, role: "REST Pipelines", duration: "2022 — Present", projects: 9, connections: ["Node.js", "MongoDB"] },
//       { name: "NestJS", icon: SiNestjs, role: "Enterprise Arch", duration: "2024 — Present", projects: 3, connections: ["Node.js", "TypeScript"] },
//       { name: "Prisma", icon: SiPrisma, role: "ORM Layer", duration: "2023 — Present", projects: 8, connections: ["Node.js", "PostgreSQL", "TypeScript"] },
//     ],
//   },
//   {
//     title: "Database Systems",
//     color: "from-violet-500 to-indigo-500",
//     glowColor: "rgba(139, 92, 246, 0.15)",
//     accentText: "text-violet-500 dark:text-violet-400",
//     borderActive: "border-violet-500/50 dark:border-violet-400/40",
//     bgActive: "bg-violet-50/5 dark:bg-violet-950/5",
//     skills: [
//       { name: "PostgreSQL", icon: SiPostgresql, role: "Relational Hub", duration: "2022 — Present", projects: 10, connections: ["Prisma", "Node.js"] },
//       { name: "MongoDB", icon: SiMongodb, role: "Document Store", duration: "2021 — Present", projects: 13, connections: ["Express", "Node.js"] },
//       { name: "Redis", icon: SiRedis, role: "Cache Proxy", duration: "2023 — Present", projects: 4, connections: ["Node.js"] },
//       { name: "MySQL", icon: SiMysql, role: "Legacy Queries", duration: "2021 — 2023", projects: 5, connections: ["Node.js"] },
//     ],
//   },
//   {
//     title: "DevOps & Infrastructure",
//     color: "from-amber-500 to-orange-500",
//     glowColor: "rgba(245, 158, 11, 0.15)",
//     accentText: "text-amber-500 dark:text-amber-400",
//     borderActive: "border-amber-500/50 dark:border-amber-400/40",
//     bgActive: "bg-amber-50/5 dark:bg-amber-950/5",
//     skills: [
//       { name: "Docker", icon: SiDocker, role: "Containerization", duration: "2023 — Present", projects: 7, connections: ["Linux", "AWS"] },
//       { name: "Git", icon: SiGit, role: "VCS Standard", duration: "2020 — Present", projects: 40, connections: ["Vercel"] },
//       { name: "Linux", icon: SiLinux, role: "Kernel Operations", duration: "2022 — Present", projects: 15, connections: ["Docker"] },
//       { name: "AWS", icon: SiCloudflare, role: "Infrastructure", duration: "2023 — Present", projects: 4, connections: ["Docker"] },
//       { name: "Vercel", icon: SiVercel, role: "Edge Delivery", duration: "2022 — Present", projects: 18, connections: ["Next.js", "Git"] },
//     ],
//   },
// ];

// const allSkillsFlat = skillGroups.flatMap(g => g.skills);

// const counters = [
//   { value: "25+", subText: "TECHNOLOGIES", desc: "Production Ready" },
//   { value: "40+", subText: "PROJECTS", desc: "Deployed End-to-End" },
//   { value: "15+", subText: "APIS INTEGRATED", desc: "RESTful & GraphQL" },
//   { value: "8", subText: "CERTIFICATIONS", desc: "Industry Verified" },
// ];

// export default function Skills() {
//   const [hoveredNode, setHoveredNode] = useState<string | null>(null);
//   const [activePill, setActivePill] = useState<string | null>("React");
//   const containerRef = useRef<HTMLDivElement>(null);

//   const currentSelection = hoveredNode || activePill;
//   const currentSkillData = allSkillsFlat.find(s => s.name === currentSelection);

//   return (
//     <section 
//       id="skills" 
//       ref={containerRef}
//       className="section-padding relative bg-neutral-50/30 dark:bg-neutral-950/10"
//     >
//       <div className="container-width relative z-10">
        
//         {/* Header Block */}
//         <div className="mb-12 text-center">
//           <h2 className="text-3xl font-bold md:text-4xl">
//             System <span className="text-gradient">Architecture</span>
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
//             Building modern, scalable software ecosystems with structural integrity, premium performance, and optimal design patterns.
//           </p>
          
//           <div className="mt-6">
//             <motion.a
//               href="/skill-tree"
//               whileHover={{ scale: 1.03, y: -1 }}
//               whileTap={{ scale: 0.98 }}
//               className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-xs font-mono font-bold tracking-wider text-neutral-800 dark:text-neutral-200 shadow-sm transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700 uppercase"
//             >
//               <span>Explore Interactive Skill Tree</span>
//               <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
//               </svg>
//             </motion.a>
//           </div>
//         </div>

//         {/* Command Center Stats Matrix */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
//           {counters.map((counter, i) => (
//             <div
//               key={i}
//               className="relative overflow-hidden p-5 rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900/50 backdrop-blur-sm isolate group"
//             >
//               <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white transition-transform duration-300 group-hover:scale-[1.02]">
//                 {counter.value}
//               </div>
//               <div className="text-[11px] font-bold tracking-widest text-neutral-400 dark:text-neutral-500 mt-2 border-t border-neutral-100 dark:border-neutral-800 pt-2 font-mono">
//                 {counter.subText}
//               </div>
//               <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">{counter.desc}</div>
//             </div>
//           ))}
//         </div>

//         {/* Sticky Technology Bar (Apple/Linear Style Filter Chips) */}
//         <div className="sticky top-24 z-40 mb-12">
//           <div className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl p-3 shadow-md flex items-center justify-between gap-4 overflow-x-auto overflow-y-hidden no-scrollbar">
//             <div className="flex flex-wrap md:flex-nowrap items-center gap-1.5 w-full">
//               {allSkillsFlat.map((skill) => {
//                 const isActive = activePill === skill.name;
//                 return (
//                   <button
//                     key={skill.name}
//                     onClick={() => setActivePill(isActive ? null : skill.name)}
//                     className={`px-3 py-1.5 text-xs font-mono rounded-xl border transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
//                       isActive
//                         ? "bg-neutral-900 border-neutral-900 text-white dark:bg-white dark:border-white dark:text-neutral-900 shadow-sm font-semibold"
//                         : "bg-transparent border-transparent text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800/60"
//                     }`}
//                   >
//                     <skill.icon className="w-3.5 h-3.5" />
//                     <span>{skill.name}</span>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* Interactive Topology Graph Section */}
//         <div className="w-full mb-12">
//           <div className="text-center mb-4">
//             <span className="text-[10px] tracking-[0.25em] uppercase px-3 py-1 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full font-mono text-neutral-500 dark:text-neutral-400">
//               Interactive Topology Module
//             </span>
//           </div>
//           <InteractiveGalaxy 
//             hoveredNode={hoveredNode} 
//             setHoveredNode={setHoveredNode} 
//             activePill={activePill}
//           />
//         </div>

//         {/* Asymmetrical Bento Layout Section & Sticky Meta Info */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
//           {/* Main Informational Cards Block (8 Columns Grid) */}
//           <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-6">
//             {skillGroups.map((group, idx) => {
//               // Structured asymmetric grid pattern layout
//               const colSpan = idx === 0 || idx === 3 ? "md:col-span-7" : "md:col-span-5";
//               return (
//                 <BentoCard 
//                   key={group.title} 
//                   group={group} 
//                   colSpan={colSpan} 
//                   idx={idx}
//                   activePill={activePill}
//                   setActivePill={setActivePill}
//                   currentSelection={currentSelection}
//                 />
//               );
//             })}
//           </div>

//           {/* Premium Floating Context Panel (4 Columns Sticky Panel) */}
//           <div className="lg:col-span-4 sticky top-[170px] z-20">
//             <AnimatePresence mode="wait">
//               {currentSkillData ? (
//                 <motion.div
//                   key={currentSkillData.name}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.2 }}
//                   className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-md relative overflow-hidden isolate"
//                 >
//                   <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-4">
//                     <div className="flex items-center gap-3">
//                       <div className="text-2xl text-neutral-800 dark:text-neutral-100">
//                         <currentSkillData.icon />
//                       </div>
//                       <div>
//                         <h4 className="text-sm font-bold text-neutral-900 dark:text-white font-mono uppercase tracking-tight">
//                           {currentSkillData.name}
//                         </h4>
//                         <p className="text-[11px] text-neutral-400 dark:text-neutral-500 font-mono">
//                           {currentSkillData.role}
//                         </p>
//                       </div>
//                     </div>
//                     <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
//                   </div>

//                   <div className="space-y-4 font-mono text-xs">
//                     <div>
//                       <span className="text-neutral-400 dark:text-neutral-500 text-[10px] block uppercase tracking-wider mb-1">Production Experience</span>
//                       <p className="font-semibold text-neutral-800 dark:text-neutral-200">● {currentSkillData.projects} Live Production Apps</p>
//                     </div>
//                     <div>
//                       <span className="text-neutral-400 dark:text-neutral-500 text-[10px] block uppercase tracking-wider mb-1">Timeline Core</span>
//                       <p className="font-semibold text-neutral-800 dark:text-neutral-200">● Since {currentSkillData.duration.split("—")[0].trim()}</p>
//                     </div>
//                     <div>
//                       <span className="text-neutral-400 dark:text-neutral-500 text-[10px] block uppercase tracking-wider mb-1">Connected Stacks</span>
//                       <div className="flex flex-wrap gap-1.5 mt-1.5">
//                         {currentSkillData.connections.map((conn) => (
//                           <span 
//                             key={conn}
//                             className="text-[10px] bg-neutral-50 dark:bg-neutral-950 px-2 py-0.5 rounded-md border border-neutral-200/60 dark:border-neutral-800/80 text-neutral-600 dark:text-neutral-400"
//                           >
//                             {conn}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ) : (
//                 <div className="rounded-2xl border border-dashed border-neutral-200 dark:border-neutral-800 p-6 text-center font-mono text-xs text-neutral-400 dark:text-neutral-500">
//                   Select a specific node or pill to reveal full context architecture pipeline.
//                 </div>
//               )}
//             </AnimatePresence>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

// /* ==========================================================================
//    COMPONENT: InteractiveGalaxy (SVG Floating Force Network Topology)
//    ========================================================================== */
// function InteractiveGalaxy({ 
//   hoveredNode, 
//   setHoveredNode,
//   activePill 
// }: { 
//   hoveredNode: string | null; 
//   setHoveredNode: (val: string | null) => void;
//   activePill: string | null;
// }) {
//   const nodeRef = useRef<HTMLDivElement>(null);
//   const [coords, setCoords] = useState({ x: 0, y: 0 });

//   const nodes = [
//     { id: "YOU", label: "ENGINEER", x: 350, y: 200, size: 26, isCore: true, rel: [] },
//     { id: "React", label: "React", x: 350, y: 90, size: 20, isCore: false, rel: ["YOU", "Next.js", "TypeScript", "Framer Motion"] },
//     { id: "Next.js", label: "Next.js", x: 230, y: 110, size: 18, isCore: false, rel: ["React", "TypeScript", "Vercel"] },
//     { id: "TypeScript", label: "TypeScript", x: 470, y: 110, size: 18, isCore: false, rel: ["React", "Next.js", "Prisma"] },
//     { id: "Tailwind CSS", label: "Tailwind CSS", x: 210, y: 50, size: 15, isCore: false, rel: ["React", "Next.js"] },
//     { id: "Framer Motion", label: "Framer Motion", x: 490, y: 50, size: 15, isCore: false, rel: ["React"] },
//     { id: "Node.js", label: "Node.js", x: 230, y: 280, size: 19, isCore: false, rel: ["YOU", "Express", "Prisma", "PostgreSQL"] },
//     { id: "Express", label: "Express", x: 120, y: 260, size: 15, isCore: false, rel: ["Node.js", "MongoDB"] },
//     { id: "NestJS", label: "NestJS", x: 130, y: 340, size: 15, isCore: false, rel: ["Node.js", "TypeScript"] },
//     { id: "Prisma", label: "Prisma", x: 350, y: 320, size: 16, isCore: false, rel: ["Node.js", "PostgreSQL", "TypeScript"] },
//     { id: "PostgreSQL", label: "PostgreSQL", x: 470, y: 280, size: 18, isCore: false, rel: ["YOU", "Prisma", "Node.js"] },
//     { id: "MongoDB", label: "MongoDB", x: 580, y: 240, size: 16, isCore: false, rel: ["Express", "Node.js"] },
//     { id: "Redis", label: "Redis", x: 570, y: 340, size: 14, isCore: false, rel: ["Node.js"] },
//     { id: "Docker", label: "Docker", x: 350, y: 400, size: 17, isCore: false, rel: ["YOU", "Linux", "AWS"] },
//     { id: "Git", label: "Git", x: 240, y: 380, size: 15, isCore: false, rel: ["Vercel"] },
//     { id: "Linux", label: "Linux", x: 460, y: 380, size: 15, isCore: false, rel: ["Docker"] },
//     { id: "AWS", label: "AWS", x: 540, y: 410, size: 15, isCore: false, rel: ["Docker"] },
//     { id: "Vercel", label: "Vercel", x: 160, y: 190, size: 15, isCore: false, rel: ["Next.js", "Git"] },
//   ];

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!nodeRef.current) return;
//     const { left, top, width, height } = nodeRef.current.getBoundingClientRect();
//     const cx = left + width / 2;
//     const cy = top + height / 2;
//     setCoords({ x: (e.clientX - cx) * 0.03, y: (e.clientY - cy) * 0.03 });
//   };

//   const currentSelection = activePill || hoveredNode;
//   const activeNodeObject = nodes.find(n => n.id === currentSelection);

//   return (
//     <div 
//       ref={nodeRef}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={() => setCoords({ x: 0, y: 0 })}
//       className="w-full relative h-[460px] rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm overflow-hidden relative isolate flex items-center justify-center"
//     >
//       <motion.div 
//         className="w-full h-full absolute inset-0 flex items-center justify-center p-4 z-10"
//         animate={{ x: coords.x, y: coords.y }}
//         transition={{ type: "spring", damping: 35, stiffness: 120 }}
//       >
//         <svg viewBox="0 0 700 440" className="w-full h-full max-w-[700px] select-none overflow-visible">
//           <defs>
//             <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
//               <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
//               <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
//             </radialGradient>
//           </defs>

//           {/* Connectors Linkage */}
//           {nodes.map((node) => 
//             node.rel.map((targetId) => {
//               const target = nodes.find((n) => n.id === targetId);
//               if (!target) return null;
              
//               const isLinkHighlighted = currentSelection === node.id || currentSelection === targetId;
//               const linkColor = isLinkHighlighted ? "#6366f1" : "currentColor";
//               const strokeWidth = isLinkHighlighted ? 1.5 : 0.8;
//               const opacity = currentSelection ? (isLinkHighlighted ? 0.8 : 0.08) : 0.25;

//               return (
//                 <line
//                   key={`${node.id}-${targetId}`}
//                   x1={node.x}
//                   y1={node.y}
//                   x2={target.x}
//                   y2={target.y}
//                   stroke={linkColor}
//                   strokeWidth={strokeWidth}
//                   strokeOpacity={opacity}
//                   strokeDasharray={isLinkHighlighted ? "4,4" : undefined}
//                   className="text-neutral-300 dark:text-neutral-800 transition-all duration-300"
//                 />
//               );
//             })
//           )}

//           {/* Structural Vertices Node Blocks */}
//           {nodes.map((node) => {
//             const isNodeMatch = currentSelection === node.id;
//             const isRelated = activeNodeObject?.rel.includes(node.id) || activeNodeObject?.id === node.id;
//             const opacityValue = currentSelection ? (isNodeMatch || isRelated ? 1 : 0.2) : 0.9;

//             return (
//               <motion.g
//                 key={node.id}
//                 className="cursor-pointer"
//                 onMouseEnter={() => setHoveredNode(node.id)}
//                 onMouseLeave={() => setHoveredNode(null)}
//                 animate={{ opacity: opacityValue, y: [0, node.isCore ? 0 : Math.sin(node.x) * 3, 0] }}
//                 transition={{ repeat: Infinity, duration: 5 + (node.x % 3), ease: "easeInOut" }}
//               >
//                 {node.isCore && (
//                   <circle cx={node.x} cy={node.y} r={node.size * 2} fill="url(#coreGlow)" />
//                 )}
//                 <circle
//                   cx={node.x}
//                   cy={node.y}
//                   r={node.size}
//                   className={`transition-colors duration-300 fill-white dark:fill-neutral-900 stroke-neutral-200 dark:stroke-neutral-800 ${
//                     isNodeMatch ? "stroke-indigo-500 dark:stroke-indigo-400 fill-indigo-50/20 dark:fill-indigo-950/20" : ""
//                   }`}
//                   strokeWidth={isNodeMatch || node.isCore ? 2 : 1}
//                 />
//                 <text
//                   x={node.x}
//                   y={node.y + 3}
//                   textAnchor="middle"
//                   className={`font-mono pointer-events-none select-none text-[9px] transition-colors duration-300 fill-neutral-600 dark:fill-neutral-400 ${
//                     isNodeMatch ? "fill-indigo-600 dark:fill-indigo-400 font-bold" : ""
//                   } ${node.isCore ? "font-bold text-[10px] tracking-wide fill-neutral-900 dark:fill-white" : ""}`}
//                 >
//                   {node.label}
//                 </text>
//               </motion.g>
//             );
//           })}
//         </svg>
//       </motion.div>
//     </div>
//   );
// }

// /* ==========================================================================
//    COMPONENT: BentoCard (Asymmetric Modular Spotlight Block)
//    ========================================================================== */
// function BentoCard({ 
//   group, 
//   colSpan, 
//   idx, 
//   activePill, 
//   setActivePill,
//   currentSelection
// }: { 
//   group: typeof skillGroups[0]; 
//   colSpan: string; 
//   idx: number;
//   activePill: string | null;
//   setActivePill: (val: string | null) => void;
//   currentSelection: string | null;
// }) {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const spotX = useMotionValue(0);
//   const spotY = useMotionValue(0);

//   const handleSpotlight = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     spotX.set(e.clientX - rect.left);
//     spotY.set(e.clientY - rect.top);
//   };

//   return (
//     <div
//       ref={cardRef}
//       onMouseMove={handleSpotlight}
//       className={`${colSpan} relative rounded-2xl p-5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 group overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-indigo-400/50 dark:hover:border-indigo-500/30 hover:-translate-y-1 isolate`}
//     >
//       {/* Absolute Dynamic Interactive Spotlight Layer */}
//       <motion.div 
//         className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl z-0"
//         style={{
//           left: useTransform(spotX, (x) => x - 88),
//           top: useTransform(spotY, (y) => y - 88),
//           background: `radial-gradient(circle, ${group.glowColor} 0%, transparent 75%)`,
//           width: "176px",
//           height: "176px"
//         }}
//       />

//       {/* Content Layer (Forced above stack context) */}
//       <div className="relative z-10">
//         <div className="flex justify-between items-center mb-5">
//           <h3 className="text-sm font-bold tracking-tight text-neutral-800 dark:text-neutral-200 uppercase font-mono">
//             {group.title}
//           </h3>
//         </div>

//         {/* Dynamic Skill Stack List Grid */}
//         <div className="space-y-2.5">
//           {group.skills.map((skill) => {
//             const isSelected = activePill === skill.name;
//             const isContextMatched = currentSelection === skill.name;

//             return (
//               <div
//                 key={skill.name}
//                 onClick={() => setActivePill(isSelected ? null : skill.name)}
//                 className={`w-full text-left p-3.5 rounded-xl border cursor-pointer transition-all duration-300 relative overflow-hidden flex flex-col ${
//                   isContextMatched
//                     ? `${group.bgActive} ${group.borderActive} border-l-2 shadow-sm` 
//                     : "bg-neutral-50/40 dark:bg-neutral-950/20 border-neutral-100 dark:border-neutral-900/60 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 hover:border-neutral-200 dark:hover:border-neutral-800"
//                 }`}
//               >
//                 {/* Visual Accent State Left Border Integration */}
//                 {isContextMatched && (
//                   <div className={`absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b ${group.color}`} />
//                 )}

//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <div className={`text-base transition-transform duration-300 ${isContextMatched ? `scale-110 ${group.accentText}` : "text-neutral-400 dark:text-neutral-500"}`}>
//                       <skill.icon />
//                     </div>
//                     <span className={`text-xs font-medium transition-colors ${isContextMatched ? "text-neutral-900 dark:text-white font-semibold" : "text-neutral-700 dark:text-neutral-300"}`}>
//                       {skill.name}
//                     </span>
//                   </div>
//                   <div className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 tracking-wide">
//                     {skill.role}
//                   </div>
//                 </div>

//                 {/* Scannable Metric Layout Drawer Block */}
//                 {isContextMatched && (
//                   <motion.div 
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     className="mt-3 pt-2.5 border-t border-neutral-200/60 dark:border-neutral-800/80 grid grid-cols-2 gap-2 text-[10px] font-mono text-neutral-500 dark:text-neutral-400"
//                   >
//                     <div><span className="text-neutral-400 dark:text-neutral-600">● Timeline:</span> {skill.duration}</div>
//                     <div className="text-right"><span className="text-neutral-400 dark:text-neutral-600">● Integrations:</span> {skill.projects} Apps</div>
//                   </motion.div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }






// "use client";

// import React, { useState, useRef } from "react";
// import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
// import {
//   SiNextdotjs,
//   SiReact,
//   SiTypescript,
//   SiNodedotjs,
//   SiMongodb,
//   SiPostgresql,
//   SiDocker,
//   SiTailwindcss,
//   SiGit,
//   SiExpress,
//   SiNestjs,
//   SiPrisma,
//   SiRedis,
//   SiMysql,
//   SiLinux,
//   SiCloudflare,
//   SiVercel,
//   SiFramer
// } from "react-icons/si";

// // 1. Relational System Schema
// const skillGroups = [
//   {
//     title: "Frontend Engineering",
//     color: "from-cyan-500 to-blue-500",
//     glowColor: "rgba(6, 182, 212, 0.15)",
//     accentText: "text-cyan-500 dark:text-cyan-400",
//     borderActive: "border-cyan-500/50 dark:border-cyan-400/40",
//     bgActive: "bg-cyan-50/5 dark:bg-cyan-950/5",
//     skills: [
//       { name: "React", icon: SiReact, role: "Core Engine", duration: "2021 — Present", projects: 14, connections: ["Next.js", "TypeScript", "Framer Motion"] },
//       { name: "Next.js", icon: SiNextdotjs, role: "SSR Architecture", duration: "2022 — Present", projects: 11, connections: ["React", "TypeScript", "Vercel"] },
//       { name: "TypeScript", icon: SiTypescript, role: "Type Safety", duration: "2021 — Present", projects: 19, connections: ["React", "Next.js", "Prisma"] },
//       { name: "Tailwind CSS", icon: SiTailwindcss, role: "Fluid Styling", duration: "2021 — Present", projects: 22, connections: ["React", "Next.js"] },
//       { name: "Framer Motion", icon: SiFramer, role: "Premium Physics", duration: "2023 — Present", projects: 6, connections: ["React"] },
//     ],
//   },
//   {
//     title: "Backend Services",
//     color: "from-emerald-500 to-teal-500",
//     glowColor: "rgba(16, 185, 129, 0.15)",
//     accentText: "text-emerald-500 dark:text-emerald-400",
//     borderActive: "border-emerald-500/50 dark:border-emerald-400/40",
//     bgActive: "bg-emerald-50/5 dark:bg-emerald-950/5",
//     skills: [
//       { name: "Node.js", icon: SiNodedotjs, role: "Runtime Core", duration: "2022 — Present", projects: 12, connections: ["Express", "Prisma", "PostgreSQL"] },
//       { name: "Express", icon: SiExpress, role: "REST Pipelines", duration: "2022 — Present", projects: 9, connections: ["Node.js", "MongoDB"] },
//       { name: "NestJS", icon: SiNestjs, role: "Enterprise Arch", duration: "2024 — Present", projects: 3, connections: ["Node.js", "TypeScript"] },
//       { name: "Prisma", icon: SiPrisma, role: "ORM Layer", duration: "2023 — Present", projects: 8, connections: ["Node.js", "PostgreSQL", "TypeScript"] },
//     ],
//   },
//   {
//     title: "Database Systems",
//     color: "from-violet-500 to-indigo-500",
//     glowColor: "rgba(139, 92, 246, 0.15)",
//     accentText: "text-violet-500 dark:text-violet-400",
//     borderActive: "border-violet-500/50 dark:border-violet-400/40",
//     bgActive: "bg-violet-50/5 dark:bg-violet-950/5",
//     skills: [
//       { name: "PostgreSQL", icon: SiPostgresql, role: "Relational Hub", duration: "2022 — Present", projects: 10, connections: ["Prisma", "Node.js"] },
//       { name: "MongoDB", icon: SiMongodb, role: "Document Store", duration: "2021 — Present", projects: 13, connections: ["Express", "Node.js"] },
//       { name: "Redis", icon: SiRedis, role: "Cache Proxy", duration: "2023 — Present", projects: 4, connections: ["Node.js"] },
//       { name: "MySQL", icon: SiMysql, role: "Legacy Queries", duration: "2021 — 2023", projects: 5, connections: ["Node.js"] },
//     ],
//   },
//   {
//     title: "DevOps & Infrastructure",
//     color: "from-amber-500 to-orange-500",
//     glowColor: "rgba(245, 158, 11, 0.15)",
//     accentText: "text-amber-500 dark:text-amber-400",
//     borderActive: "border-amber-500/50 dark:border-amber-400/40",
//     bgActive: "bg-amber-50/5 dark:bg-amber-950/5",
//     skills: [
//       { name: "Docker", icon: SiDocker, role: "Containerization", duration: "2023 — Present", projects: 7, connections: ["Linux", "AWS"] },
//       { name: "Git", icon: SiGit, role: "VCS Standard", duration: "2020 — Present", projects: 40, connections: ["Vercel"] },
//       { name: "Linux", icon: SiLinux, role: "Kernel Operations", duration: "2022 — Present", projects: 15, connections: ["Docker"] },
//       { name: "AWS", icon: SiCloudflare, role: "Infrastructure", duration: "2023 — Present", projects: 4, connections: ["Docker"] },
//       { name: "Vercel", icon: SiVercel, role: "Edge Delivery", duration: "2022 — Present", projects: 18, connections: ["Next.js", "Git"] },
//     ],
//   },
// ];

// const allSkillsFlat = skillGroups.flatMap(g => g.skills);

// const counters = [
//   { value: "25+", subText: "TECHNOLOGIES", desc: "Production Ready" },
//   { value: "40+", subText: "PROJECTS", desc: "Deployed End-to-End" },
//   { value: "15+", subText: "APIS INTEGRATED", desc: "RESTful & GraphQL" },
//   { value: "8", subText: "CERTIFICATIONS", desc: "Industry Verified" },
// ];

// export default function Skills() {
//   const [hoveredNode, setHoveredNode] = useState<string | null>(null);
//   const [activePill, setActivePill] = useState<string | null>("React");
//   const [activeMapNode, setActiveMapNode] = useState<string | null>(null);
//   const containerRef = useRef<HTMLDivElement>(null);

//   const currentSelection = hoveredNode || activeMapNode || activePill;
//   const currentSkillData = allSkillsFlat.find(s => s.name === currentSelection);

//   return (
//     <section 
//       id="skills" 
//       ref={containerRef}
//       className="section-padding relative bg-neutral-50/30 dark:bg-neutral-950/10"
//     >
//       {/* Absolute boundary anchor: Appears strictly within the bounds of #skills layout */}
//       <div className="absolute bottom-6 right-6 z-50 pointer-events-none">
//         <motion.a
//           href="/skill-tree"
//           whileHover={{ scale: 1.03, y: -1 }}
//           whileTap={{ scale: 0.98 }}
//           className="pointer-events-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-xs font-mono font-bold tracking-wider text-neutral-800 dark:text-neutral-200 shadow-xl transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700 uppercase"
//         >
//           <span>Explore Interactive Skill Tree</span>
//           <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
//           </svg>
//         </motion.a>
//       </div>

//       <div className="container-width relative z-10">
        
//         {/* Header Block */}
//         <div className="mb-12 text-center">
//           <h2 className="text-3xl font-bold md:text-4xl">
//             System <span className="text-gradient">Architecture</span>
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
//             Building modern, scalable software ecosystems with structural integrity, premium performance, and optimal design patterns.
//           </p>
//         </div>

//         {/* Command Center Stats Matrix */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
//           {counters.map((counter, i) => (
//             <div
//               key={i}
//               className="relative overflow-hidden p-5 rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900/50 backdrop-blur-sm isolate group"
//             >
//               <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white transition-transform duration-300 group-hover:scale-[1.02]">
//                 {counter.value}
//               </div>
//               <div className="text-[11px] font-bold tracking-widest text-neutral-400 dark:text-neutral-500 mt-2 border-t border-neutral-100 dark:border-neutral-800 pt-2 font-mono">
//                 {counter.subText}
//               </div>
//               <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">{counter.desc}</div>
//             </div>
//           ))}
//         </div>

//         {/* Sticky Technology Bar */}
//         <div className="sticky top-24 z-40 mb-12">
//           <div className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl p-3 shadow-md flex items-center justify-between gap-4 overflow-x-auto overflow-y-hidden no-scrollbar">
//             <div className="flex flex-wrap md:flex-nowrap items-center gap-1.5 w-full">
//               {allSkillsFlat.map((skill) => {
//                 const isActive = activePill === skill.name && !activeMapNode;
//                 return (
//                   <button
//                     key={skill.name}
//                     onClick={() => {
//                       setActivePill(activePill === skill.name ? null : skill.name);
//                       setActiveMapNode(null);
//                     }}
//                     className={`px-3 py-1.5 text-xs font-mono rounded-xl border transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
//                       isActive
//                         ? "bg-neutral-900 border-neutral-900 text-white dark:bg-white dark:border-white dark:text-neutral-900 shadow-sm font-semibold"
//                         : "bg-transparent border-transparent text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800/60"
//                     }`}
//                   >
//                     <skill.icon className="w-3.5 h-3.5" />
//                     <span>{skill.name}</span>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* Interactive Topology Graph Section */}
//         <div className="w-full mb-12">
//           <div className="text-center mb-4">
//             <span className="text-[10px] tracking-[0.25em] uppercase px-3 py-1 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full font-mono text-neutral-500 dark:text-neutral-400">
//               Interactive Topology Module
//             </span>
//           </div>
//           <InteractiveGalaxy 
//             hoveredNode={hoveredNode} 
//             setHoveredNode={setHoveredNode} 
//             activeMapNode={activeMapNode}
//             setActiveMapNode={setActiveMapNode}
//             currentSelection={currentSelection}
//           />
//         </div>

//         {/* Asymmetrical Bento Layout Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
//           {/* Main Informational Cards Block */}
//           <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-6">
//             {skillGroups.map((group, idx) => {
//               const colSpan = idx === 0 || idx === 3 ? "md:col-span-7" : "md:col-span-5";
//               return (
//                 <BentoCard 
//                   key={group.title} 
//                   group={group} 
//                   colSpan={colSpan} 
//                   idx={idx}
//                   activePill={activePill}
//                   setActivePill={(val) => {
//                     setActivePill(val);
//                     setActiveMapNode(null);
//                   }}
//                   currentSelection={currentSelection}
//                 />
//               );
//             })}
//           </div>

//           {/* Premium Floating Context Panel */}
//           <div className="lg:col-span-4 sticky top-[170px] z-20">
//             <AnimatePresence mode="wait">
//               {currentSkillData ? (
//                 <motion.div
//                   key={currentSkillData.name}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.2 }}
//                   className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-md relative overflow-hidden isolate"
//                 >
//                   <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-4">
//                     <div className="flex items-center gap-3">
//                       <div className="text-2xl text-neutral-800 dark:text-neutral-100">
//                         <currentSkillData.icon />
//                       </div>
//                       <div>
//                         <h4 className="text-sm font-bold text-neutral-900 dark:text-white font-mono uppercase tracking-tight">
//                           {currentSkillData.name}
//                         </h4>
//                         <p className="text-[11px] text-neutral-400 dark:text-neutral-500 font-mono">
//                           {currentSkillData.role}
//                         </p>
//                       </div>
//                     </div>
//                     <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
//                   </div>

//                   <div className="space-y-4 font-mono text-xs">
//                     <div>
//                       <span className="text-neutral-400 dark:text-neutral-500 text-[10px] block uppercase tracking-wider mb-1">Production Experience</span>
//                       <p className="font-semibold text-neutral-800 dark:text-neutral-200">● {currentSkillData.projects} Live Production Apps</p>
//                     </div>
//                     <div>
//                       <span className="text-neutral-400 dark:text-neutral-500 text-[10px] block uppercase tracking-wider mb-1">Timeline Core</span>
//                       <p className="font-semibold text-neutral-800 dark:text-neutral-200">● Since {currentSkillData.duration.split("—")[0].trim()}</p>
//                     </div>
//                     <div>
//                       <span className="text-neutral-400 dark:text-neutral-500 text-[10px] block uppercase tracking-wider mb-1">Connected Stacks</span>
//                       <div className="flex flex-wrap gap-1.5 mt-1.5">
//                         {currentSkillData.connections.map((conn) => (
//                           <span 
//                             key={conn}
//                             className="text-[10px] bg-neutral-50 dark:bg-neutral-950 px-2 py-0.5 rounded-md border border-neutral-200/60 dark:border-neutral-800/80 text-neutral-600 dark:text-neutral-400"
//                           >
//                             {conn}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ) : (
//                 <div className="rounded-2xl border border-dashed border-neutral-200 dark:border-neutral-800 p-6 text-center font-mono text-xs text-neutral-400 dark:text-neutral-400">
//                   Select a specific node or pill to reveal full context architecture pipeline.
//                 </div>
//               )}
//             </AnimatePresence>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

// /* ==========================================================================
//    COMPONENT: InteractiveGalaxy
//    ========================================================================== */
// function InteractiveGalaxy({ 
//   hoveredNode, 
//   setHoveredNode,
//   activeMapNode,
//   setActiveMapNode,
//   currentSelection
// }: { 
//   hoveredNode: string | null; 
//   setHoveredNode: (val: string | null) => void;
//   activeMapNode: string | null;
//   setActiveMapNode: (val: string | null) => void;
//   currentSelection: string | null;
// }) {
//   const nodeRef = useRef<HTMLDivElement>(null);
//   const [coords, setCoords] = useState({ x: 0, y: 0 });

//   const nodes = [
//     { id: "YOU", label: "ENGINEER", x: 350, y: 200, size: 26, isCore: true, rel: [] },
//     { id: "React", label: "React", x: 350, y: 90, size: 20, isCore: false, rel: ["YOU", "Next.js", "TypeScript", "Framer Motion"] },
//     { id: "Next.js", label: "Next.js", x: 230, y: 110, size: 18, isCore: false, rel: ["React", "TypeScript", "Vercel"] },
//     { id: "TypeScript", label: "TypeScript", x: 470, y: 110, size: 18, isCore: false, rel: ["React", "Next.js", "Prisma"] },
//     { id: "Tailwind CSS", label: "Tailwind CSS", x: 210, y: 50, size: 15, isCore: false, rel: ["React", "Next.js"] },
//     { id: "Framer Motion", label: "Framer Motion", x: 490, y: 50, size: 15, isCore: false, rel: ["React"] },
//     { id: "Node.js", label: "Node.js", x: 230, y: 280, size: 19, isCore: false, rel: ["YOU", "Express", "Prisma", "PostgreSQL"] },
//     { id: "Express", label: "Express", x: 120, y: 260, size: 15, isCore: false, rel: ["Node.js", "MongoDB"] },
//     { id: "NestJS", label: "NestJS", x: 130, y: 340, size: 15, isCore: false, rel: ["Node.js", "TypeScript"] },
//     { id: "Prisma", label: "Prisma", x: 350, y: 320, size: 16, isCore: false, rel: ["Node.js", "PostgreSQL", "TypeScript"] },
//     { id: "PostgreSQL", label: "PostgreSQL", x: 470, y: 280, size: 18, isCore: false, rel: ["YOU", "Prisma", "Node.js"] },
//     { id: "MongoDB", label: "MongoDB", x: 580, y: 240, size: 16, isCore: false, rel: ["Express", "Node.js"] },
//     { id: "Redis", label: "Redis", x: 570, y: 340, size: 14, isCore: false, rel: ["Node.js"] },
//     { id: "Docker", label: "Docker", x: 350, y: 400, size: 17, isCore: false, rel: ["YOU", "Linux", "AWS"] },
//     { id: "Git", label: "Git", x: 240, y: 380, size: 15, isCore: false, rel: ["Vercel"] },
//     { id: "Linux", label: "Linux", x: 460, y: 380, size: 15, isCore: false, rel: ["Docker"] },
//     { id: "AWS", label: "AWS", x: 540, y: 410, size: 15, isCore: false, rel: ["Docker"] },
//     { id: "Vercel", label: "Vercel", x: 160, y: 190, size: 15, isCore: false, rel: ["Next.js", "Git"] },
//   ];

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!nodeRef.current) return;
//     const { left, top, width, height } = nodeRef.current.getBoundingClientRect();
//     const cx = left + width / 2;
//     const cy = top + height / 2;
//     setCoords({ x: (e.clientX - cx) * 0.03, y: (e.clientY - cy) * 0.03 });
//   };

//   const activeNodeObject = nodes.find(n => n.id === currentSelection);

//   return (
//     <div 
//       ref={nodeRef}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={() => setCoords({ x: 0, y: 0 })}
//       className="w-full relative h-[460px] rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm overflow-hidden flex items-center justify-center"
//     >
//       <motion.div 
//         className="w-full h-full absolute inset-0 flex items-center justify-center p-4 z-10"
//         animate={{ x: coords.x, y: coords.y }}
//         transition={{ type: "spring", damping: 35, stiffness: 120 }}
//       >
//         <svg viewBox="0 0 700 440" className="w-full h-full max-w-[700px] select-none overflow-visible">
//           <defs>
//             <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
//               <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
//               <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
//             </radialGradient>
//           </defs>

//           {nodes.map((node) => 
//             node.rel.map((targetId) => {
//               const target = nodes.find((n) => n.id === targetId);
//               if (!target) return null;
              
//               const isCoreInteraction = currentSelection === "YOU";
//               const isLinkHighlighted = !isCoreInteraction && (currentSelection === node.id || currentSelection === targetId);
//               const linkColor = isLinkHighlighted ? "#6366f1" : "currentColor";
//               const strokeWidth = isLinkHighlighted ? 1.5 : 0.8;
//               const opacity = currentSelection && !isCoreInteraction ? (isLinkHighlighted ? 0.8 : 0.08) : 0.25;

//               return (
//                 <line
//                   key={`${node.id}-${targetId}`}
//                   x1={node.x}
//                   y1={node.y}
//                   x2={target.x}
//                   y2={target.y}
//                   stroke={linkColor}
//                   strokeWidth={strokeWidth}
//                   strokeOpacity={opacity}
//                   strokeDasharray={isLinkHighlighted ? "4,4" : undefined}
//                   className="text-neutral-300 dark:text-neutral-800 transition-all duration-300"
//                 />
//               );
//             })
//           )}

//           {nodes.map((node) => {
//             const isNodeMatch = currentSelection === node.id;
//             const isRelated = activeNodeObject?.rel.includes(node.id) || activeNodeObject?.id === node.id;
            
//             const isCoreActive = currentSelection === "YOU";
//             const opacityValue = currentSelection && !isCoreActive 
//               ? (isNodeMatch || isRelated || node.isCore ? 1 : 0.2) 
//               : 0.9;

//             return (
//               <motion.g
//                 key={node.id}
//                 className="cursor-pointer"
//                 onMouseEnter={() => {
//                   if (!node.isCore) setHoveredNode(node.id);
//                 }}
//                 onMouseLeave={() => setHoveredNode(null)}
//                 onClick={() => {
//                   if (node.isCore) return;
//                   setActiveMapNode(activeMapNode === node.id ? null : node.id);
//                 }}
//                 animate={{ opacity: opacityValue, y: [0, node.isCore ? 0 : Math.sin(node.x) * 3, 0] }}
//                 transition={{ repeat: Infinity, duration: 5 + (node.x % 3), ease: "easeInOut" }}
//               >
//                 {node.isCore && (
//                   <circle cx={node.x} cy={node.y} r={node.size * 2} fill="url(#coreGlow)" />
//                 )}
//                 <circle
//                   cx={node.x}
//                   cy={node.y}
//                   r={node.size}
//                   className={`transition-colors duration-300 fill-white dark:fill-neutral-900 stroke-neutral-200 dark:stroke-neutral-800 ${
//                     isNodeMatch && !node.isCore ? "stroke-indigo-500 dark:stroke-indigo-400 fill-indigo-50/20 dark:fill-indigo-950/20" : ""
//                   }`}
//                   strokeWidth={isNodeMatch || node.isCore ? 2 : 1}
//                 />
//                 <text
//                   x={node.x}
//                   y={node.y + 3}
//                   textAnchor="middle"
//                   className={`font-mono pointer-events-none select-none text-[9px] transition-colors duration-300 fill-neutral-600 dark:fill-neutral-400 ${
//                     isNodeMatch && !node.isCore ? "fill-indigo-600 dark:fill-indigo-400 font-bold" : ""
//                   } ${node.isCore ? "font-bold text-[10px] tracking-wide fill-neutral-900 dark:fill-white" : ""}`}
//                 >
//                   {node.label}
//                 </text>
//               </motion.g>
//             );
//           })}
//         </svg>
//       </motion.div>
//     </div>
//   );
// }

// /* ==========================================================================
//    COMPONENT: BentoCard
//    ========================================================================== */
// function BentoCard({ 
//   group, 
//   colSpan, 
//   idx, 
//   activePill, 
//   setActivePill,
//   currentSelection
// }: { 
//   group: typeof skillGroups[0]; 
//   colSpan: string; 
//   idx: number;
//   activePill: string | null;
//   setActivePill: (val: string | null) => void;
//   currentSelection: string | null;
// }) {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const spotX = useMotionValue(0);
//   const spotY = useMotionValue(0);

//   const handleSpotlight = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     spotX.set(e.clientX - rect.left);
//     spotY.set(e.clientY - rect.top);
//   };

//   return (
//     <div
//       ref={cardRef}
//       onMouseMove={handleSpotlight}
//       className={`${colSpan} relative rounded-2xl p-5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 group overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-indigo-400/50 dark:hover:border-indigo-500/30 hover:-translate-y-1 isolate`}
//     >
//       <motion.div 
//         className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl z-0"
//         style={{
//           left: useTransform(spotX, (x) => x - 88),
//           top: useTransform(spotY, (y) => y - 88),
//           background: `radial-gradient(circle, ${group.glowColor} 0%, transparent 75%)`,
//           width: "176px",
//           height: "176px"
//         }}
//       />

//       <div className="relative z-10">
//         <div className="flex justify-between items-center mb-5">
//           <h3 className="text-sm font-bold tracking-tight text-neutral-800 dark:text-neutral-200 uppercase font-mono">
//             {group.title}
//           </h3>
//         </div>

//         <div className="space-y-2.5">
//           {group.skills.map((skill) => {
//             const isSelected = activePill === skill.name;
//             const isContextMatched = currentSelection === skill.name;

//             return (
//               <div
//                 key={skill.name}
//                 onClick={() => setActivePill(isSelected ? null : skill.name)}
//                 className={`w-full text-left p-3.5 rounded-xl border cursor-pointer transition-all duration-300 relative overflow-hidden flex flex-col ${
//                   isContextMatched
//                     ? `${group.bgActive} ${group.borderActive} border-l-2 shadow-sm` 
//                     : "bg-neutral-50/40 dark:bg-neutral-950/20 border-neutral-100 dark:border-neutral-900/60 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 hover:border-neutral-200 dark:hover:border-neutral-800"
//                 }`}
//               >
//                 {isContextMatched && (
//                   <div className={`absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b ${group.color}`} />
//                 )}

//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <div className={`text-base transition-transform duration-300 ${isContextMatched ? `scale-110 ${group.accentText}` : "text-neutral-400 dark:text-neutral-500"}`}>
//                       <skill.icon />
//                     </div>
//                     <span className={`text-xs font-medium transition-colors ${isContextMatched ? "text-neutral-900 dark:text-white font-semibold" : "text-neutral-700 dark:text-neutral-300"}`}>
//                       {skill.name}
//                     </span>
//                   </div>
//                   <div className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 tracking-wide">
//                     {skill.role}
//                   </div>
//                 </div>

//                 {isContextMatched && (
//                   <motion.div 
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     className="mt-3 pt-2.5 border-t border-neutral-200/60 dark:border-neutral-800/80 grid grid-cols-2 gap-2 text-[10px] font-mono text-neutral-500 dark:text-neutral-400"
//                   >
//                     <div><span className="text-neutral-400 dark:text-neutral-600">● Timeline:</span> {skill.duration}</div>
//                     <div className="text-right"><span className="text-neutral-400 dark:text-neutral-600">● Integrations:</span> {skill.projects} Apps</div>
//                   </motion.div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }





// "use client";

// import { useState, useMemo } from "react";
// import { 
//   Search, 
//   Layers, 
//   Terminal, 
//   Database, 
//   Cpu, 
//   Cloud, 
//   Wrench, 
//   CreditCard, 
//   Share2,
//   ChevronDown,
//   ChevronUp,
//   SlidersHorizontal,
//   CheckCircle2
// } from "lucide-react";

// // Types
// interface Skill {
//   name: string;
//   evidence?: string[];
// }

// interface SkillCategory {
//   id: string;
//   title: string;
//   icon: React.ReactNode;
//   skills: Skill[];
// }

// export default function Skills() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [activeTab, setActiveTab] = useState("all");
//   const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

//   // 1. Primary Hero Stack
//   const primaryStack = [
//     "PHP", "Laravel", "React", "Next.js", "Node.js", 
//     "TypeScript", "Docker", "AWS", "n8n", "OpenAI"
//   ];

//   // 2. Structured Skill Data with Evidence Metadata
//   const categories: SkillCategory[] = [
//     {
//       id: "frontend",
//       title: "Frontend",
//       icon: <Layers size={18} className="text-blue-500" />,
//       skills: [
//         { name: "React", evidence: ["5+ Years", "SaaS Dashboards", "Hooks/Context"] },
//         { name: "Next.js", evidence: ["SSR/SSG", "App Router Optimization", "Vercel"] },
//         { name: "Vue", evidence: ["Options/Composition API", "SPAs"] },
//         { name: "Nuxt", evidence: ["Server-side Vue apps"] },
//         { name: "Tailwind", evidence: ["Design Systems", "Custom Utility Configs"] },
//         { name: "Alpine", evidence: ["Lightweight interactions", "Livewire pairing"] },
//         { name: "Inertia", evidence: ["Monolith UI bridging", "Laravel Integration"] },
//       ],
//     },
//     {
//       id: "backend",
//       title: "Backend",
//       icon: <Terminal size={18} className="text-emerald-500" />,
//       skills: [
//         { name: "PHP", evidence: ["8+ Years", "OOP", "Custom Packages"] },
//         { name: "Laravel", evidence: ["18+ Projects", "SaaS Architecture", "Ecosystem Expert"] },
//         { name: "Lumen", evidence: ["Microservices", "High-performance APIs"] },
//         { name: "Node.js", evidence: ["Async Event Loop", "Express", "NestJS"] },
//         { name: "Express", evidence: ["RESTful API Endpoints", "Middleware"] },
//         { name: "Nest", evidence: ["TypeScript Native Backend", "Modular Architecture"] },
//         { name: "GraphQL", evidence: ["Queries/Mutations", "Apollo Server"] },
//         { name: "REST APIs", evidence: ["Strict Standards", " OpenAPI / Swagger Specs"] },
//         { name: "JWT", evidence: ["Stateless Auth", "Secure Storage Flows"] },
//       ],
//     },
//     {
//       id: "database",
//       title: "Databases",
//       icon: <Database size={18} className="text-purple-500" />,
//       skills: [
//         { name: "MySQL", evidence: ["Query Optimization", "Indexing Profiles"] },
//         { name: "PostgreSQL", evidence: ["Complex Joins", "JSONB data fields"] },
//         { name: "MongoDB", evidence: ["NoSQL Schemas", "Aggregation Pipelines"] },
//         { name: "Redis", evidence: ["Caching layers", "Rate limiting", "Queue Brokers"] },
//         { name: "Firebase", evidence: ["Real-time Syncing", "Firestore Rules"] },
//       ],
//     },
//     {
//       id: "automation",
//       title: "Automation & AI",
//       icon: <Cpu size={18} className="text-amber-500" />,
//       skills: [
//         { name: "n8n", evidence: ["Complex visual workflows", "Custom Node hooks"] },
//         { name: "OpenAI", evidence: ["Agentic Frameworks", "Prompt Engineering"] },
//         { name: "Claude", evidence: ["Anthropic API Integration", "MCP Clients"] },
//         { name: "MCP", evidence: ["Model Context Protocol tool design"] },
//         { name: "Webhooks", evidence: ["Asynchronous Events", "Signature Verification"] },
//         { name: "Queues", evidence: ["Job distribution", "Delayed Processing"] },
//         { name: "Cron", evidence: ["Scheduled system tasks", "Heartbeat checks"] },
//         { name: "Playwright", evidence: ["Headless Scraping", "E2E testing workflows"] },
//       ],
//     },
//     {
//       id: "devops",
//       title: "Cloud & DevOps",
//       icon: <Cloud size={18} className="text-sky-500" />,
//       skills: [
//         { name: "Docker", evidence: ["Multi-stage builds", "Compose environments"] },
//         { name: "AWS", evidence: ["EC2", "S3", "RDS", "ECS containers"] },
//         { name: "DigitalOcean", evidence: ["Droplets", "App Platform deployments"] },
//         { name: "GitHub Actions", evidence: ["Custom CI/CD linting/testing pipelines"] },
//         { name: "Nginx", evidence: ["Reverse Proxies", "SSL Offloading", "Server blocks"] },
//         { name: "Linux", evidence: ["Bash Shell scripting", "Server Hardening"] },
//         { name: "CI/CD", evidence: ["Automated production delivery zero-downtime"] },
//         { name: "Vercel", evidence: ["Edge function tuning", "Next.js environments"] },
//       ],
//     },
//     {
//       id: "payments",
//       title: "Payments",
//       icon: <CreditCard size={18} className="text-rose-500" />,
//       skills: [
//         { name: "Stripe", evidence: ["SaaS Subscriptions", "Webhooks handling"] },
//         { name: "PayPal", evidence: ["B2C SDK checkouts", "Payout structures"] },
//         { name: "Lemon Squeezy", evidence: ["Merchant of Record taxing", "License keys"] },
//       ],
//     },
//     {
//       id: "integrations",
//       title: "Integrations",
//       icon: <Share2 size={18} className="text-indigo-500" />,
//       skills: [
//         { name: "HubSpot", evidence: ["CRM Sync rules", "Contact ingestion APIs"] },
//         { name: "Twilio", evidence: ["SMS fallback", "2FA authentication systems"] },
//         { name: "Pusher", evidence: ["Real-time web socket broadcasting"] },
//         { name: "Google APIs", evidence: ["OAuth2 flow", "Calendar & Drive access"] },
//       ],
//     },
//     {
//       id: "tools",
//       title: "Developer Tools",
//       icon: <Wrench size={18} className="text-neutral-500" />,
//       skills: [
//         { name: "Git", evidence: ["Trunk development", "Interactive Rebasing"] },
//         { name: "Postman", evidence: ["Automated testing collections", "Mock servers"] },
//         { name: "Composer", evidence: ["PHP dependency rules", "Autoload setups"] },
//         { name: "npm / Bun", evidence: ["Package version lock files", "Fast script runners"] },
//       ],
//     },
//   ];

//   // Filtering Logic based on Tabs + Search input
//   const filteredCategories = useMemo(() => {
//     return categories
//       .map((cat) => {
//         // Filter by Tab
//         if (activeTab !== "all" && cat.id !== activeTab) {
//           return null;
//         }

//         // Filter by Search text
//         const matchingSkills = cat.skills.filter((skill) =>
//           skill.name.toLowerCase().includes(searchQuery.toLowerCase())
//         );

//         if (searchQuery && matchingSkills.length === 0) {
//           return null;
//         }

//         return {
//           ...cat,
//           skills: searchQuery ? matchingSkills : cat.skills,
//         };
//       })
//       .filter(Boolean) as SkillCategory[];
//   }, [activeTab, searchQuery]);

//   const toggleCategory = (id: string) => {
//     setExpandedCategories((prev) => ({ ...prev, [id]: !prev[id] }));
//   };

//   return (
//     <section id="skills" className="section-padding border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/20">
//       <div className="container-width">
        
//         {/* Header */}
//         <div className="mb-12 text-center">
//           <h2 className="text-3xl font-bold md:text-4xl">
//             Skills & <span className="text-gradient">Ecosystem</span>
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
//             A granular overview of my technical stack, tools, and operational workflows structured around engineering evidence.
//           </p>
//         </div>

//         {/* SECTION 1: PRIMARY HERO STACK */}
//         <div className="mb-14 max-w-5xl mx-auto">
//           <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4 text-center md:text-left">
//             Primary Stack (Core Focus)
//           </h3>
//           <div className="flex flex-wrap justify-center md:justify-start gap-3">
//             {primaryStack.map((tech) => (
//               <div
//                 key={tech}
//                 className="px-5 py-3 rounded-xl font-medium text-sm border border-indigo-200/60 dark:border-indigo-500/20 bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 shadow-sm shadow-indigo-100/50 dark:shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-indigo-400 dark:hover:border-indigo-400 cursor-default group"
//               >
//                 <span className="inline-block transition-transform duration-300 group-hover:rotate-[4deg]">{tech}</span>
//                 <span className="absolute -top-1 -right-1 flex h-2 w-2">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
//                   <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CONTROL PANEL: SEARCH + TABS */}
//         <div className="max-w-5xl mx-auto mb-8 space-y-4">
//           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
//             {/* Search Input */}
//             <div className="relative flex-1 max-w-md">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
//               <input
//                 type="text"
//                 placeholder="Search tools, platforms, frameworks..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-colors"
//               />
//             </div>

//             {/* Filter Actions Indicator */}
//             <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
//               <SlidersHorizontal size={14} />
//               <span>Filtering {filteredCategories.reduce((acc, c) => acc + c.skills.length, 0)} total nodes</span>
//             </div>
//           </div>

//           {/* Tab Pill Filters (Desktop Scrollable / Mobile Wrap) */}
//           <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none mask-image">
//             <button
//               onClick={() => setActiveTab("all")}
//               className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
//                 activeTab === "all"
//                   ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
//                   : "bg-white border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800"
//               }`}
//             >
//               All Engine Elements
//             </button>
//             {categories.map((cat) => (
//               <button
//                 key={cat.id}
//                 onClick={() => setActiveTab(cat.id)}
//                 className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
//                   activeTab === cat.id
//                     ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
//                     : "bg-white border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800"
//                 }`}
//               >
//                 {cat.icon}
//                 {cat.title}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* SECTION 2 & 6: CATEGORIZED CARDS WITH PROGRESSIVE DISCLOSURE */}
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
//           {filteredCategories.map((cat) => {
//             const isExpanded = expandedCategories[cat.id] || searchQuery.length > 0;
//             const visibleSkills = isExpanded ? cat.skills : cat.skills.slice(0, 4);
//             const hasMore = cat.skills.length > 4;

//             return (
//               <div
//                 key={cat.id}
//                 className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900/60 transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-sm"
//               >
//                 <div>
//                   {/* Card Category Header */}
//                   <div className="mb-4 flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800/60 pb-3">
//                     <div className="flex items-center gap-2">
//                       {cat.icon}
//                       <h4 className="font-semibold text-sm tracking-wide text-neutral-800 dark:text-neutral-200">{cat.title}</h4>
//                     </div>
//                     <span className="text-[10px] px-2 py-0.5 rounded-full font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-500">
//                       {cat.skills.length} nodes
//                     </span>
//                   </div>

//                   {/* Micro Chips Inside Card */}
//                   <div className="space-y-2">
//                     {visibleSkills.map((skill) => (
//                       <div
//                         key={skill.name}
//                         className="group/chip relative flex flex-col p-2 rounded-xl bg-neutral-50 dark:bg-neutral-900/80 border border-neutral-100 dark:border-neutral-800/40 hover:bg-white dark:hover:bg-neutral-800 hover:border-indigo-500/30 dark:hover:border-indigo-400/20 transition-all duration-200"
//                       >
//                         <div className="flex items-center justify-between">
//                           <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300 group-hover/chip:text-indigo-500 dark:group-hover/chip:text-indigo-400 transition-colors">
//                             {skill.name}
//                           </span>
//                         </div>
                        
//                         {/* SECTION 7 & 11: Real Engineering Evidence Layer (Disclosed dynamically on hover/focus) */}
//                         {skill.evidence && (
//                           <div className="mt-1.5 hidden group-hover/chip:flex flex-wrap gap-1 items-center transition-all animate-fadeIn">
//                             {skill.evidence.map((point, idx) => (
//                               <span 
//                                 key={idx} 
//                                 className="inline-flex items-center text-[10px] px-1.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400/90 font-sans tracking-tight"
//                               >
//                                 <CheckCircle2 size={8} className="mr-1 text-indigo-400" />
//                                 {point}
//                               </span>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Progressive Disclosure Action Link */}
//                 {hasMore && !searchQuery && (
//                   <button
//                     onClick={() => toggleCategory(cat.id)}
//                     className="mt-4 pt-2 border-t border-dashed border-neutral-100 dark:border-neutral-800/80 w-full flex items-center justify-center gap-1 text-xs font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
//                   >
//                     {isExpanded ? (
//                       <>
//                         Show Less <ChevronUp size={14} />
//                       </>
//                     ) : (
//                       <>
//                         +{cat.skills.length - 4} More Tools <ChevronDown size={14} />
//                       </>
//                     )}
//                   </button>
//                 )}
//               </div>
//             );
//           })}
//         </div>

//         {/* Empty States Filter Handling */}
//         {filteredCategories.length === 0 && (
//           <div className="text-center py-12 max-w-md mx-auto border border-dashed border-neutral-200 dark:border-neutral-800 rounded-2xl">
//             <p className="text-sm text-neutral-500 dark:text-neutral-400">
//               No development systems mapped to "{searchQuery}" matching that filter scope.
//             </p>
//           </div>
//         )}

//       </div>
//     </section>
//   );
// }






// "use client";

// import { useState, useMemo } from "react";
// import { 
//   Search, 
//   Layers, 
//   Terminal, 
//   Database, 
//   Cpu, 
//   Cloud, 
//   Wrench, 
//   CreditCard, 
//   Share2,
//   ChevronDown,
//   ChevronUp,
//   SlidersHorizontal,
//   CheckCircle2,
//   Star,
//   X,
//   Briefcase,
//   GitMerge
// } from "lucide-react";

// // Types
// interface Skill {
//   name: string;
//   evidence?: string[];
//   isTop?: boolean;
//   years?: string;
//   productionApps?: number;
// }

// interface SkillCategory {
//   id: string;
//   title: string;
//   icon: React.ReactNode;
//   skills: Skill[];
// }

// interface Project {
//   name: string;
//   description: string;
//   tech: string[];
// }

// export default function Skills() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [activeTab, setActiveTab] = useState("all");
//   const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
//   const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
//   const [highlightedTech, setHighlightedTech] = useState<string | null>(null);

//   // 12. Minimal Hero Row Data
//   const minimalStats = [
//     { value: "65+", label: "Technologies" },
//     { value: "40+", label: "Production Projects" },
//     { value: "8+", label: "Years Experience" },
//     { value: "20+", label: "Integrations Built" }
//   ];

//   // 1. Primary Hero Stack (Cleaned up layout wrapper and removed moving ping)
//   const primaryStack = [
//     "PHP", "Laravel", "React", "Next.js", "Node.js", 
//     "TypeScript", "Docker", "AWS", "n8n", "OpenAI"
//   ];

//   // 8. Technology Ecosystem Data Stream
//   const ecosystemFlow = [
//     { name: "React", label: "Frontend UI" },
//     { name: "Next.js", label: "SSR Framework" },
//     { name: "Laravel API", label: "Backend Core" },
//     { name: "Redis", label: "Caching / Queues" },
//     { name: "PostgreSQL", label: "Primary Database" },
//     { name: "Docker", label: "Containerization" },
//     { name: "AWS", label: "Infrastructure" },
//     { name: "Production", label: "Live Gateway", isEndpoint: true }
//   ];

//   // 9. Interactive Projects Cross-Reference Data
//   const projects: Project[] = [
//     {
//       name: "CRM Dashboard",
//       description: "Enterprise-tier real-time lead management platform with pipeline visualization.",
//       tech: ["Laravel", "Redis", "Docker", "Stripe", "AWS", "React"]
//     },
//     {
//       name: "SaaS Analytics Engine",
//       description: "High-throughput telemetry ingestion backend mapping user behavioral tracking.",
//       tech: ["Next.js", "Node.js", "TypeScript", "Redis", "PostgreSQL", "Docker", "AWS"]
//     },
//     {
//       name: "AI-Powered Workflow Automated Agent",
//       description: "Autonomous self-healing context pipeline routing multi-model parsing requests.",
//       tech: ["n8n", "OpenAI", "Claude", "MCP", "Webhooks", "Node.js"]
//     },
//     {
//       name: "B2B Marketplace Platform",
//       description: "Multi-tenant merchant grid with localized cross-border payout pipelines.",
//       tech: ["PHP", "Laravel", "Vue", "Inertia", "MySQL", "Stripe", "PayPal"]
//     }
//   ];

//   // 2 & 4 & 7. Reordered Categories with Visual Hierarchy Focus flags (isTop)
//   const categories: SkillCategory[] = [
//     {
//       id: "frontend",
//       title: "Frontend",
//       icon: <Layers size={18} className="text-blue-500" />,
//       skills: [
//         { name: "React", evidence: ["5+ Years", "SaaS Dashboards", "Hooks/Context"], isTop: true, years: "5+ Years", productionApps: 12 },
//         { name: "Next.js", evidence: ["SSR/SSG", "App Router Optimization", "Vercel"], isTop: true, years: "3+ Years", productionApps: 8 },
//         { name: "Tailwind", evidence: ["Design Systems", "Custom Utility Configs"], isTop: true, years: "4+ Years", productionApps: 20 },
//         { name: "Vue", evidence: ["Options/Composition API", "SPAs"], years: "2 Years", productionApps: 4 },
//         { name: "Nuxt", evidence: ["Server-side Vue apps"], years: "1 Year", productionApps: 2 },
//         { name: "Alpine", evidence: ["Lightweight interactions", "Livewire pairing"], years: "3 Years", productionApps: 6 },
//         { name: "Inertia", evidence: ["Monolith UI bridging", "Laravel Integration"], years: "3 Years", productionApps: 5 },
//       ],
//     },
//     {
//       id: "backend",
//       title: "Backend",
//       icon: <Terminal size={18} className="text-emerald-500" />,
//       skills: [
//         { name: "Laravel", evidence: ["18+ Projects", "SaaS Architecture", "Ecosystem Expert"], isTop: true, years: "6+ Years", productionApps: 18 },
//         { name: "PHP", evidence: ["8+ Years", "OOP", "Custom Packages"], isTop: true, years: "8+ Years", productionApps: 25 },
//         { name: "Node.js", evidence: ["Async Event Loop", "Express", "NestJS"], isTop: true, years: "4+ Years", productionApps: 9 },
//         { name: "Lumen", evidence: ["Microservices", "High-performance APIs"], years: "2 Years", productionApps: 3 },
//         { name: "Express", evidence: ["RESTful API Endpoints", "Middleware"], years: "4 Years", productionApps: 7 },
//         { name: "Nest", evidence: ["TypeScript Native Backend", "Modular Architecture"], years: "2 Years", productionApps: 2 },
//         { name: "GraphQL", evidence: ["Queries/Mutations", "Apollo Server"], years: "2 Years", productionApps: 3 },
//         { name: "REST APIs", evidence: ["Strict Standards", " OpenAPI / Swagger Specs"], years: "7 Years", productionApps: 22 },
//         { name: "JWT", evidence: ["Stateless Auth", "Secure Storage Flows"], years: "5 Years", productionApps: 15 },
//       ],
//     },
//     {
//       id: "database",
//       title: "Databases",
//       icon: <Database size={18} className="text-purple-500" />,
//       skills: [
//         { name: "MySQL", evidence: ["Query Optimization", "Indexing Profiles"], isTop: true, years: "7 Years", productionApps: 20 },
//         { name: "PostgreSQL", evidence: ["Complex Joins", "JSONB data fields"], isTop: true, years: "4 Years", productionApps: 11 },
//         { name: "Redis", evidence: ["Caching layers", "Rate limiting", "Queue Brokers"], isTop: true, years: "4 Years", productionApps: 14 },
//         { name: "MongoDB", evidence: ["NoSQL Schemas", "Aggregation Pipelines"], years: "3 Years", productionApps: 5 },
//         { name: "Firebase", evidence: ["Real-time Syncing", "Firestore Rules"], years: "2 Years", productionApps: 4 },
//       ],
//     },
//     {
//       id: "devops",
//       title: "Cloud & DevOps",
//       icon: <Cloud size={18} className="text-sky-500" />,
//       skills: [
//         { name: "Docker", evidence: ["Multi-stage builds", "Compose environments"], isTop: true, years: "4 Years", productionApps: 16 },
//         { name: "AWS", evidence: ["EC2", "S3", "RDS", "ECS containers"], isTop: true, years: "4 Years", productionApps: 10 },
//         { name: "CI/CD", evidence: ["Automated production delivery zero-downtime"], isTop: true, years: "5 Years", productionApps: 18 },
//         { name: "DigitalOcean", evidence: ["Droplets", "App Platform deployments"], years: "4 Years", productionApps: 12 },
//         { name: "GitHub Actions", evidence: ["Custom CI/CD linting/testing pipelines"], years: "3 Years", productionApps: 14 },
//         { name: "Nginx", evidence: ["Reverse Proxies", "SSL Offloading", "Server blocks"], years: "5 Years", productionApps: 15 },
//         { name: "Linux", evidence: ["Bash Shell scripting", "Server Hardening"], years: "6 Years", productionApps: 18 },
//         { name: "Vercel", evidence: ["Edge function tuning", "Next.js environments"], years: "3 Years", productionApps: 8 },
//       ],
//     },
//     {
//       id: "automation",
//       title: "Automation & AI",
//       icon: <Cpu size={18} className="text-amber-500" />,
//       skills: [
//         { name: "n8n", evidence: ["Complex visual workflows", "Custom Node hooks"], isTop: true, years: "2 Years", productionApps: 7 },
//         { name: "OpenAI", evidence: ["Agentic Frameworks", "Prompt Engineering"], isTop: true, years: "2 Years", productionApps: 6 },
//         { name: "Claude", evidence: ["Anthropic API Integration", "MCP Clients"], years: "1 Year", productionApps: 4 },
//         { name: "MCP", evidence: ["Model Context Protocol tool design"], years: "1 Year", productionApps: 2 },
//         { name: "Webhooks", evidence: ["Asynchronous Events", "Signature Verification"], years: "5 Years", productionApps: 15 },
//         { name: "Queues", evidence: ["Job distribution", "Delayed Processing"], years: "5 Years", productionApps: 12 },
//         { name: "Cron", evidence: ["Scheduled system tasks", "Heartbeat checks"], years: "6 Years", productionApps: 20 },
//         { name: "Playwright", evidence: ["Headless Scraping", "E2E testing workflows"], years: "2 Years", productionApps: 3 },
//       ],
//     },
//     {
//       id: "integrations",
//       title: "Integrations",
//       icon: <Share2 size={18} className="text-indigo-500" />,
//       skills: [
//         { name: "HubSpot", evidence: ["CRM Sync rules", "Contact ingestion APIs"], years: "2 Years", productionApps: 3 },
//         { name: "Twilio", evidence: ["SMS fallback", "2FA authentication systems"], years: "4 Years", productionApps: 8 },
//         { name: "Pusher", evidence: ["Real-time web socket broadcasting"], years: "3 Years", productionApps: 9 },
//         { name: "Google APIs", evidence: ["OAuth2 flow", "Calendar & Drive access"], years: "5 Years", productionApps: 11 },
//       ],
//     },
//     {
//       id: "payments",
//       title: "Payments",
//       icon: <CreditCard size={18} className="text-rose-500" />,
//       skills: [
//         { name: "Stripe", evidence: ["SaaS Subscriptions", "Webhooks handling"], isTop: true, years: "4 Years", productionApps: 14 },
//         { name: "PayPal", evidence: ["B2C SDK checkouts", "Payout structures"], years: "3 Years", productionApps: 5 },
//         { name: "Lemon Squeezy", evidence: ["Merchant of Record taxing", "License keys"], years: "2 Years", productionApps: 4 },
//       ],
//     },
//     {
//       id: "tools",
//       title: "Developer Tools",
//       icon: <Wrench size={18} className="text-neutral-500" />,
//       skills: [
//         { name: "Git", evidence: ["Trunk development", "Interactive Rebasing"], years: "6 Years", productionApps: 30 },
//         { name: "Postman", evidence: ["Automated testing collections", "Mock servers"], years: "4 Years", productionApps: 20 },
//         { name: "Composer", evidence: ["PHP dependency rules", "Autoload setups"], years: "6 Years", productionApps: 22 },
//         { name: "npm / Bun", evidence: ["Package version lock files", "Fast script runners"], years: "5 Years", productionApps: 25 },
//       ],
//     },
//   ];

//   // Filtering Logic based on Tabs + Search input
//   const filteredCategories = useMemo(() => {
//     return categories
//       .map((cat) => {
//         if (activeTab !== "all" && cat.id !== activeTab) {
//           return null;
//         }

//         const matchingSkills = cat.skills.filter((skill) =>
//           skill.name.toLowerCase().includes(searchQuery.toLowerCase())
//         );

//         if (searchQuery && matchingSkills.length === 0) {
//           return null;
//         }

//         return {
//           ...cat,
//           skills: searchQuery ? matchingSkills : cat.skills,
//         };
//       })
//       .filter(Boolean) as SkillCategory[];
//   }, [activeTab, searchQuery]);

//   const toggleCategory = (id: string) => {
//     setExpandedCategories((prev) => ({ ...prev, [id]: !prev[id] }));
//   };

//   // Helper handling cross-linking triggers from Drawer actions safely
//   const handleTechHighlight = (techName: string) => {
//     setHighlightedTech(techName);
//     const element = document.getElementById("projects-crossgrid");
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section id="skills" className="relative section-padding border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/20">
//       <div className="container-width px-4 mx-auto">
        
//         {/* Header */}
//         <div className="mb-12 text-center">
//           <h2 className="text-3xl font-bold md:text-4xl tracking-tight">
//             Skills & <span className="text-indigo-600 dark:text-indigo-400">Ecosystem</span>
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400 text-sm md:text-base">
//             A granular overview of my technical stack, architectural flows, and operational workflows structured around engineering evidence.
//           </p>
//         </div>

//         {/* 12. MINIMAL HERO ROW STATS */}
//         <div className="max-w-4xl mx-auto mb-14 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
//           {minimalStats.map((stat, i) => (
//             <div key={i} className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800/80 shadow-sm">
//               <div className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">{stat.value}</div>
//               <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mt-1">{stat.label}</div>
//             </div>
//           ))}
//         </div>

//         {/* 1. PRIMARY HERO STACK (Problem A/B Fixed, Removed Moving Ping Indicator) */}
//         <div className="mb-16 max-w-5xl mx-auto">
//           <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4 text-center md:text-left">
//             Primary Stack (Core Focus)
//           </h3>
//           <div className="flex flex-wrap justify-center md:justify-start gap-2.5">
//             {primaryStack.map((tech) => (
//               <div
//                 key={tech}
//                 onClick={() => {
//                   const matched = categories.flatMap(c => c.skills).find(s => s.name.toLowerCase() === tech.toLowerCase());
//                   if (matched) setSelectedSkill(matched);
//                 }}
//                 className="relative overflow-hidden px-5 py-3 rounded-xl font-medium text-sm border border-indigo-200/60 dark:border-indigo-500/20 bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-300 hover:shadow-indigo-100 dark:hover:shadow-none cursor-pointer group"
//               >
//                 <span className="inline-block transition-transform duration-300 group-hover:rotate-[2deg]">{tech}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* 8. NEW: TECHNOLOGY ECOSYSTEM ARCHITECTURE FLOW MAP */}
//         <div className="mb-16 max-w-5xl mx-auto p-6 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 shadow-sm">
//           <div className="mb-6">
//             <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
//               <GitMerge size={16} className="text-indigo-500" /> Technology Ecosystem Architecture Blueprint
//             </h3>
//             <p className="text-xs text-neutral-500 mt-1">
//               Demonstrating full system orchestration pipelines from user interface down to bare production environments.
//             </p>
//           </div>
//           <div className="flex flex-wrap items-center justify-center lg:justify-between gap-y-6 gap-x-4 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950/40 border border-neutral-100 dark:border-neutral-900/60">
//             {ecosystemFlow.map((node, index) => (
//               <div key={index} className="flex items-center gap-3 group">
//                 <div className={`px-4 py-2.5 rounded-xl border text-center transition-all ${
//                   node.isEndpoint 
//                   ? "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 font-semibold"
//                   : "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-indigo-500/40"
//                 }`}>
//                   <div className="text-xs font-bold font-mono tracking-tight">{node.name}</div>
//                   <div className="text-[10px] text-neutral-400 dark:text-neutral-500 mt-0.5 whitespace-nowrap">{node.label}</div>
//                 </div>
//                 {index < ecosystemFlow.length - 1 && (
//                   <span className="hidden sm:inline text-neutral-300 dark:text-neutral-700 font-light group-hover:text-indigo-400 transition-colors">➔</span>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* 3. CONTROL PANEL: REMAPPED SEARCH + TAB FILTERS HIERARCHY */}
//         <div className="max-w-5xl mx-auto mb-8 space-y-5">
//           {/* A. Search Input First */}
//           <div className="relative max-w-md">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
//             <input
//               type="text"
//               placeholder="Search tools, platforms, frameworks..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-colors"
//             />
//           </div>

//           {/* B. Tabs Row Second (Problem B Flex Wrap Fixed, Problem C Mask-Image Removed) */}
//           <div className="flex flex-wrap gap-2">
//             <button
//               onClick={() => setActiveTab("all")}
//               className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
//                 activeTab === "all"
//                   ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
//                   : "bg-white border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800"
//               }`}
//             >
//               All Engine Elements
//             </button>
//             {categories.map((cat) => (
//               <button
//                 key={cat.id}
//                 onClick={() => setActiveTab(cat.id)}
//                 className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
//                   activeTab === cat.id
//                     ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
//                     : "bg-white border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800"
//                 }`}
//               >
//                 {cat.icon}
//                 {cat.title}
//               </button>
//             ))}
//           </div>

//           {/* C. Count Results Placed Last */}
//           <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 pt-1">
//             <SlidersHorizontal size={14} />
//             <span>Filtering {filteredCategories.reduce((acc, c) => acc + c.skills.length, 0)} Total Technologies</span>
//           </div>
//         </div>

//         {/* 11. GRID RESPONSIEVNESS: Updated to grid-cols-1 md:grid-cols-2 xl:grid-cols-3 */}
//         <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-5xl mx-auto">
//           {filteredCategories.map((cat) => {
//             const isExpanded = expandedCategories[cat.id] || searchQuery.length > 0;
//             const visibleSkills = isExpanded ? cat.skills : cat.skills.slice(0, 4);
//             const hasMore = cat.skills.length > 4;

//             return (
//               <div
//                 key={cat.id}
//                 className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900/60 transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-sm"
//               >
//                 <div>
//                   {/* 6. Card Category Header (Updated text wording to Technologies) */}
//                   <div className="mb-4 flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800/60 pb-3">
//                     <div className="flex items-center gap-2">
//                       {cat.icon}
//                       <h4 className="font-semibold text-sm tracking-wide text-neutral-800 dark:text-neutral-200">{cat.title}</h4>
//                     </div>
//                     <span className="text-[10px] px-2.5 py-0.5 rounded-full font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
//                       {cat.skills.length} Technologies
//                     </span>
//                   </div>

//                   {/* Micro Chips Inside Card */}
//                   <div className="space-y-2">
//                     {visibleSkills.map((skill) => (
//                       <div
//                         key={skill.name}
//                         onClick={() => setSelectedSkill(skill)}
//                         className={`group/chip relative flex flex-col p-2 rounded-xl border transition-all duration-200 cursor-pointer ${
//                           skill.isTop 
//                           ? "bg-indigo-50/30 dark:bg-indigo-950/10 border-indigo-100 dark:border-indigo-900/40 hover:border-indigo-500/50" 
//                           : "bg-neutral-50 dark:bg-neutral-900/80 border-neutral-100 dark:border-neutral-800/40 hover:bg-white dark:hover:bg-neutral-800 hover:border-indigo-500/30"
//                         }`}
//                       >
//                         <div className="flex items-center justify-between">
//                           <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300 group-hover/chip:text-indigo-600 dark:group-hover/chip:text-indigo-400 transition-colors flex items-center gap-1.5">
//                             {/* 4. Category Star Highlight Integration */}
//                             {skill.isTop && <Star size={12} className="fill-amber-400 text-amber-400 shrink-0" />}
//                             {skill.name}
//                           </span>
//                         </div>
                        
//                         {/* 5. Dynamic Hover Evidence Implementation */}
//                         {skill.evidence && (
//                           <div className="mt-1.5 hidden group-hover/chip:flex flex-wrap gap-1 items-center transition-all">
//                             {skill.evidence.map((point, idx) => (
//                               <span 
//                                 key={idx} 
//                                 className="inline-flex items-center text-[10px] px-1.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-sans tracking-tight"
//                               >
//                                 <CheckCircle2 size={8} className="mr-1 text-indigo-400 dark:text-indigo-500" />
//                                 {point}
//                               </span>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Progressive Disclosure Action Link */}
//                 {hasMore && !searchQuery && (
//                   <button
//                     onClick={() => toggleCategory(cat.id)}
//                     className="mt-4 pt-2 border-t border-dashed border-neutral-100 dark:border-neutral-800/80 w-full flex items-center justify-center gap-1 text-xs font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
//                   >
//                     {isExpanded ? (
//                       <>Show Less <ChevronUp size={14} /></>
//                     ) : (
//                       <>+{cat.skills.length - 4} More Tools <ChevronDown size={14} /></>
//                     )}
//                   </button>
//                 )}
//               </div>
//             );
//           })}
//         </div>

//         {/* Empty States Filter Handling */}
//         {filteredCategories.length === 0 && (
//           <div className="text-center py-12 max-w-md mx-auto border border-dashed border-neutral-200 dark:border-neutral-800 rounded-2xl">
//             <p className="text-sm text-neutral-500 dark:text-neutral-400">
//               No development systems mapped to "{searchQuery}" matching that filter scope.
//             </p>
//           </div>
//         )}

//         {/* 9. NEW: INTERACTIVE PROJECTS CROSS-HIGHLIGHTING INTERACTION SECTION */}
//         <div id="projects-crossgrid" className="mt-20 max-w-5xl mx-auto pt-12 border-t border-neutral-200 dark:border-neutral-800">
//           <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//             <div>
//               <h3 className="text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-2">
//                 <Briefcase size={18} className="text-indigo-500" /> Production Ecosystem Cross-Reference
//               </h3>
//               <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
//                 Select a technology or click a chip anywhere to highlight related real-world architecture deliverables.
//               </p>
//             </div>
//             {highlightedTech && (
//               <button 
//                 onClick={() => setHighlightedTech(null)}
//                 className="self-start text-xs bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900 text-indigo-600 dark:text-indigo-400 px-2.5 py-1 rounded-lg flex items-center gap-1 hover:bg-indigo-100 transition-colors"
//               >
//                 Clear Filter: <strong className="font-semibold">{highlightedTech}</strong> <X size={12} />
//               </button>
//             )}
//           </div>

//           <div className="grid gap-4 sm:grid-cols-2">
//             {projects.map((project) => {
//               const isTargeted = highlightedTech ? project.tech.includes(highlightedTech) : false;
//               const hasActiveSelection = highlightedTech !== null;

//               return (
//                 <div 
//                   key={project.name} 
//                   className={`p-5 rounded-2xl border transition-all duration-300 ${
//                     isTargeted 
//                       ? "bg-indigo-50/40 dark:bg-indigo-950/20 border-indigo-500 ring-2 ring-indigo-500/20 shadow-md transform -translate-y-0.5" 
//                       : hasActiveSelection
//                         ? "bg-white dark:bg-neutral-900 opacity-40 border-neutral-100 dark:border-neutral-800/60"
//                         : "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700"
//                   }`}
//                 >
//                   <h4 className="font-bold text-sm text-neutral-800 dark:text-neutral-200">{project.name}</h4>
//                   <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 line-clamp-2 leading-relaxed">{project.description}</p>
                  
//                   <div className="flex flex-wrap gap-1.5 mt-4">
//                     {project.tech.map((t) => (
//                       <button
//                         key={t}
//                         onClick={() => setHighlightedTech(t === highlightedTech ? null : t)}
//                         className={`text-[10px] font-mono px-2 py-0.5 rounded transition-all ${
//                           t === highlightedTech
//                             ? "bg-indigo-600 text-white"
//                             : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-500"
//                         }`}
//                       >
//                         {t}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//       </div>

//       {/* 10. NEW: SLIDE-OUT INTERACTION EXPERIENTIAL DRAWER */}
//       {selectedSkill && (
//         <div className="fixed inset-0 z-50 flex justify-end bg-neutral-900/40 backdrop-blur-sm animate-fadeIn">
//           {/* Backdrop Click Dismiss */}
//           <div className="absolute inset-0" onClick={() => setSelectedSkill(null)} />
          
//           <div className="relative w-full max-w-md h-full bg-white dark:bg-neutral-950 border-l border-neutral-200 dark:border-neutral-800 p-6 shadow-2xl flex flex-col justify-between transform transition-transform animate-slideIn">
//             <div>
//               <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-6">
//                 <div className="flex items-center gap-2">
//                   <Star size={16} className="text-indigo-500 fill-indigo-500" />
//                   <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-sans">{selectedSkill.name} Insights</h3>
//                 </div>
//                 <button 
//                   onClick={() => setSelectedSkill(null)}
//                   className="p-1 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-400 hover:text-neutral-600 transition-colors"
//                 >
//                   <X size={18} />
//                 </button>
//               </div>

//               {/* Data Rows */}
//               <div className="space-y-6">
//                 <div>
//                   <h4 className="text-xs uppercase font-semibold text-neutral-400 tracking-wider">Engineering Competency</h4>
//                   <div className="grid grid-cols-2 gap-3 mt-2">
//                     <div className="bg-neutral-50 dark:bg-neutral-900/50 p-3 rounded-xl border border-neutral-100 dark:border-neutral-800/40">
//                       <div className="text-[10px] text-neutral-400">Experience</div>
//                       <div className="text-sm font-bold text-neutral-800 dark:text-neutral-200 mt-0.5">{selectedSkill.years || "Multi-Year Integration"}</div>
//                     </div>
//                     <div className="bg-neutral-50 dark:bg-neutral-900/50 p-3 rounded-xl border border-neutral-100 dark:border-neutral-800/40">
//                       <div className="text-[10px] text-neutral-400">Production Deployments</div>
//                       <div className="text-sm font-bold text-neutral-800 dark:text-neutral-200 mt-0.5">{selectedSkill.productionApps || "Verified Stack Component"} Applications</div>
//                     </div>
//                   </div>
//                 </div>

//                 {selectedSkill.evidence && (
//                   <div>
//                     <h4 className="text-xs uppercase font-semibold text-neutral-400 tracking-wider mb-2">Technical Proof Points</h4>
//                     <div className="space-y-2">
//                       {selectedSkill.evidence.map((point, index) => (
//                         <div key={index} className="flex items-start gap-2.5 p-2.5 rounded-xl border border-neutral-100 dark:border-neutral-800/40 bg-neutral-50/50 dark:bg-neutral-900/20 text-xs text-neutral-700 dark:text-neutral-300">
//                           <CheckCircle2 size={14} className="text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
//                           <span>{point}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Bottom Interactive Cross-Highlight Trigger Action Hook */}
//             <div className="border-t border-neutral-100 dark:border-neutral-800 pt-4">
//               <button
//                 onClick={() => {
//                   handleTechHighlight(selectedSkill.name);
//                   setSelectedSkill(null);
//                 }}
//                 className="w-full py-2.5 px-4 rounded-xl text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs shadow-sm transition-colors flex items-center justify-center gap-2"
//               >
//                 <Briefcase size={14} /> Highlight Projects Using {selectedSkill.name}
//               </button>
//             </div>

//           </div>
//         </div>
//       )}

//     </section>
//   );
// }





// "use client";

// import { useState, useMemo } from "react";
// import { 
//   Search, 
//   Layers, 
//   Terminal, 
//   Database, 
//   Cpu, 
//   Cloud, 
//   Wrench, 
//   CreditCard, 
//   Share2,
//   ChevronDown,
//   ChevronUp,
//   SlidersHorizontal,
//   CheckCircle2,
//   Star,
//   X,
//   Briefcase,
//   GitMerge,
//   ArrowRight,
//   ArrowDown
// } from "lucide-react";

// // Types
// interface Skill {
//   name: string;
//   evidence?: string[];
//   isTop?: boolean;
//   years?: string;
//   productionApps?: number;
// }

// interface SkillCategory {
//   id: string;
//   title: string;
//   icon: React.ReactNode;
//   skills: Skill[];
// }

// interface Project {
//   name: string;
//   description: string;
//   tech: string[];
// }

// interface EcosystemFlow {
//   id: string;
//   label: string;
//   nodes: { name: string; label: string; isEndpoint?: boolean }[];
// }

// export default function Skills() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [activeTab, setActiveTab] = useState("all");
//   const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
//   const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
//   const [highlightedTech, setHighlightedTech] = useState<string | null>(null);
  
//   // Dynamic Architecture blueprint flow state selection Tracker
//   const [selectedFlowId, setSelectedFlowId] = useState("enterprise");

//   // 12. Minimal Hero Row Data
//   const minimalStats = [
//     { value: "65+", label: "Technologies" },
//     { value: "40+", label: "Production Projects" },
//     { value: "8+", label: "Years Experience" },
//     { value: "20+", label: "Integrations Built" }
//   ];

//   // 1. Primary Hero Stack
//   const primaryStack = [
//     "PHP", "Laravel", "React", "Next.js", "Node.js", 
//     "TypeScript", "Docker", "AWS", "n8n", "OpenAI"
//   ];

//   // 8. Multiple Architecture Ecosystem Options Blueprint Stream
//   const ecosystemOptions: EcosystemFlow[] = [
//     {
//       id: "enterprise",
//       label: "Enterprise Web Core",
//       nodes: [
//         { name: "React", label: "Frontend UI" },
//         { name: "Next.js", label: "SSR Framework" },
//         { name: "Laravel API", label: "Backend Core" },
//         { name: "Redis", label: "Caching Layer" },
//         { name: "PostgreSQL", label: "DB Database" },
//         { name: "Docker", label: "Containerization" },
//         { name: "AWS", label: "Infrastructure" },
//         { name: "Production", label: "Live System", isEndpoint: true }
//       ]
//     },
//     {
//       id: "mern",
//       label: "MERN SaaS Engine",
//       nodes: [
//         { name: "React", label: "Client Layer" },
//         { name: "Express", label: "REST Engine" },
//         { name: "Node.js", label: "Runtime Env" },
//         { name: "JWT Auth", label: "Stateless Sec" },
//         { name: "MongoDB", label: "Document Store" },
//         { name: "Vercel", label: "Edge Host" },
//         { name: "Production", label: "Zero-Downtime", isEndpoint: true }
//       ]
//     },
//     {
//       id: "mobile",
//       label: "Cross-Platform Mobile App",
//       nodes: [
//         { name: "React Native / Flutter", label: "Native Shell UI" },
//         { name: "TypeScript / Dart", label: "App Core Logic" },
//         { name: "GraphQL", label: "Data Gateway" },
//         { name: "NestJS", label: "Scale Backend" },
//         { name: "Redis", label: "Live Broker" },
//         { name: "Firebase", label: "Cloud Sync" },
//         { name: "App Stores", label: "Google / Apple Live", isEndpoint: true }
//       ]
//     },
//     {
//       id: "ai-automation",
//       label: "AI Orchestration Workflow",
//       nodes: [
//         { name: "n8n UI", label: "Visual Pipeline" },
//         { name: "Webhooks", label: "Event Ingestion" },
//         { name: "Claude / OpenAI", label: "Agent LLM Core" },
//         { name: "MCP Protocol", label: "Tool Execution" },
//         { name: "Queues / Cron", label: "Job Orchestrator" },
//         { name: "Production", label: "Autonomous Agent", isEndpoint: true }
//       ]
//     }
//   ];

//   // Active Blueprint context selector computed reference
//   const activeFlow = useMemo(() => {
//     return ecosystemOptions.find(f => f.id === selectedFlowId) || ecosystemOptions[0];
//   }, [selectedFlowId]);

//   // 9. Interactive Projects Data
//   const projects: Project[] = [
//     {
//       name: "CRM Dashboard",
//       description: "Enterprise-tier real-time lead management platform with pipeline visualization.",
//       tech: ["Laravel", "Redis", "Docker", "Stripe", "AWS", "React"]
//     },
//     {
//       name: "SaaS Analytics Engine",
//       description: "High-throughput telemetry ingestion backend mapping user behavioral tracking.",
//       tech: ["Next.js", "Node.js", "TypeScript", "Redis", "PostgreSQL", "Docker", "AWS", "Express", "MongoDB", "Vercel"]
//     },
//     {
//       name: "AI-Powered Workflow Automated Agent",
//       description: "Autonomous self-healing context pipeline routing multi-model parsing requests.",
//       tech: ["n8n", "OpenAI", "Claude", "MCP", "Webhooks", "Node.js", "Queues", "Cron"]
//     },
//     {
//       name: "B2B Marketplace Platform",
//       description: "Multi-tenant merchant grid with localized cross-border payout pipelines.",
//       tech: ["PHP", "Laravel", "Vue", "Inertia", "MySQL", "Stripe", "PayPal"]
//     }
//   ];

//   // 2 & 4 & 7. Categories
//   const categories: SkillCategory[] = [
//     {
//       id: "frontend",
//       title: "Frontend",
//       icon: <Layers size={18} className="text-blue-500" />,
//       skills: [
//         { name: "React", evidence: ["5+ Years", "SaaS Dashboards", "Hooks/Context"], isTop: true, years: "5+ Years", productionApps: 12 },
//         { name: "Next.js", evidence: ["SSR/SSG", "App Router Optimization", "Vercel"], isTop: true, years: "3+ Years", productionApps: 8 },
//         { name: "Tailwind", evidence: ["Design Systems", "Custom Utility Configs"], isTop: true, years: "4+ Years", productionApps: 20 },
//         { name: "Vue", evidence: ["Options/Composition API", "SPAs"], years: "2 Years", productionApps: 4 },
//         { name: "Nuxt", evidence: ["Server-side Vue apps"], years: "1 Year", productionApps: 2 },
//         { name: "Alpine", evidence: ["Lightweight interactions", "Livewire pairing"], years: "3 Years", productionApps: 6 },
//         { name: "Inertia", evidence: ["Monolith UI bridging", "Laravel Integration"], years: "3 Years", productionApps: 5 },
//       ],
//     },
//     {
//       id: "backend",
//       title: "Backend",
//       icon: <Terminal size={18} className="text-emerald-500" />,
//       skills: [
//         { name: "Laravel", evidence: ["18+ Projects", "SaaS Architecture", "Ecosystem Expert"], isTop: true, years: "6+ Years", productionApps: 18 },
//         { name: "PHP", evidence: ["8+ Years", "OOP", "Custom Packages"], isTop: true, years: "8+ Years", productionApps: 25 },
//         { name: "Node.js", evidence: ["Async Event Loop", "Express", "NestJS"], isTop: true, years: "4+ Years", productionApps: 9 },
//         { name: "Lumen", evidence: ["Microservices", "High-performance APIs"], years: "2 Years", productionApps: 3 },
//         { name: "Express", evidence: ["RESTful API Endpoints", "Middleware"], years: "4 Years", productionApps: 7 },
//         { name: "Nest", evidence: ["TypeScript Native Backend", "Modular Architecture"], years: "2 Years", productionApps: 2 },
//         { name: "GraphQL", evidence: ["Queries/Mutations", "Apollo Server"], years: "2 Years", productionApps: 3 },
//         { name: "REST APIs", evidence: ["Strict Standards", " OpenAPI / Swagger Specs"], years: "7 Years", productionApps: 22 },
//         { name: "JWT", evidence: ["Stateless Auth", "Secure Storage Flows"], years: "5 Years", productionApps: 15 },
//       ],
//     },
//     {
//       id: "database",
//       title: "Databases",
//       icon: <Database size={18} className="text-purple-500" />,
//       skills: [
//         { name: "MySQL", evidence: ["Query Optimization", "Indexing Profiles"], isTop: true, years: "7 Years", productionApps: 20 },
//         { name: "PostgreSQL", evidence: ["Complex Joins", "JSONB data fields"], isTop: true, years: "4 Years", productionApps: 11 },
//         { name: "Redis", evidence: ["Caching layers", "Rate limiting", "Queue Brokers"], isTop: true, years: "4 Years", productionApps: 14 },
//         { name: "MongoDB", evidence: ["NoSQL Schemas", "Aggregation Pipelines"], years: "3 Years", productionApps: 5 },
//         { name: "Firebase", evidence: ["Real-time Syncing", "Firestore Rules"], years: "2 Years", productionApps: 4 },
//       ],
//     },
//     {
//       id: "devops",
//       title: "Cloud & DevOps",
//       icon: <Cloud size={18} className="text-sky-500" />,
//       skills: [
//         { name: "Docker", evidence: ["Multi-stage builds", "Compose environments"], isTop: true, years: "4 Years", productionApps: 16 },
//         { name: "AWS", evidence: ["EC2", "S3", "RDS", "ECS containers"], isTop: true, years: "4 Years", productionApps: 10 },
//         { name: "CI/CD", evidence: ["Automated production delivery zero-downtime"], isTop: true, years: "5 Years", productionApps: 18 },
//         { name: "DigitalOcean", evidence: ["Droplets", "App Platform deployments"], years: "4 Years", productionApps: 12 },
//         { name: "GitHub Actions", evidence: ["Custom CI/CD linting/testing pipelines"], years: "3 Years", productionApps: 14 },
//         { name: "Nginx", evidence: ["Reverse Proxies", "SSL Offloading", "Server blocks"], years: "5 Years", productionApps: 15 },
//         { name: "Linux", evidence: ["Bash Shell scripting", "Server Hardening"], years: "6 Years", productionApps: 18 },
//         { name: "Vercel", evidence: ["Edge function tuning", "Next.js environments"], years: "3 Years", productionApps: 8 },
//       ],
//     },
//     {
//       id: "automation",
//       title: "Automation & AI",
//       icon: <Cpu size={18} className="text-amber-500" />,
//       skills: [
//         { name: "n8n", evidence: ["Complex visual workflows", "Custom Node hooks"], isTop: true, years: "2 Years", productionApps: 7 },
//         { name: "OpenAI", evidence: ["Agentic Frameworks", "Prompt Engineering"], isTop: true, years: "2 Years", productionApps: 6 },
//         { name: "Claude", evidence: ["Anthropic API Integration", "MCP Clients"], years: "1 Year", productionApps: 4 },
//         { name: "MCP", evidence: ["Model Context Protocol tool design"], years: "1 Year", productionApps: 2 },
//         { name: "Webhooks", evidence: ["Asynchronous Events", "Signature Verification"], years: "5 Years", productionApps: 15 },
//         { name: "Queues", evidence: ["Job distribution", "Delayed Processing"], years: "5 Years", productionApps: 12 },
//         { name: "Cron", evidence: ["Scheduled system tasks", "Heartbeat checks"], years: "6 Years", productionApps: 20 },
//         { name: "Playwright", evidence: ["Headless Scraping", "E2E testing workflows"], years: "2 Years", productionApps: 3 },
//       ],
//     },
//     {
//       id: "integrations",
//       title: "Integrations",
//       icon: <Share2 size={18} className="text-indigo-500" />,
//       skills: [
//         { name: "HubSpot", evidence: ["CRM Sync rules", "Contact ingestion APIs"], years: "2 Years", productionApps: 3 },
//         { name: "Twilio", evidence: ["SMS fallback", "2FA authentication systems"], years: "4 Years", productionApps: 8 },
//         { name: "Pusher", evidence: ["Real-time web socket broadcasting"], years: "3 Years", productionApps: 9 },
//         { name: "Google APIs", evidence: ["OAuth2 flow", "Calendar & Drive access"], years: "5 Years", productionApps: 11 },
//       ],
//     },
//     {
//       id: "payments",
//       title: "Payments",
//       icon: <CreditCard size={18} className="text-rose-500" />,
//       skills: [
//         { name: "Stripe", evidence: ["SaaS Subscriptions", "Webhooks handling"], isTop: true, years: "4 Years", productionApps: 14 },
//         { name: "PayPal", evidence: ["B2C SDK checkouts", "Payout structures"], years: "3 Years", productionApps: 5 },
//         { name: "Lemon Squeezy", evidence: ["Merchant of Record taxing", "License keys"], years: "2 Years", productionApps: 4 },
//       ],
//     },
//     {
//       id: "tools",
//       title: "Developer Tools",
//       icon: <Wrench size={18} className="text-neutral-500" />,
//       skills: [
//         { name: "Git", evidence: ["Trunk development", "Interactive Rebasing"], years: "6 Years", productionApps: 30 },
//         { name: "Postman", evidence: ["Automated testing collections", "Mock servers"], years: "4 Years", productionApps: 20 },
//         { name: "Composer", evidence: ["PHP dependency rules", "Autoload setups"], years: "6 Years", productionApps: 22 },
//         { name: "npm / Bun", evidence: ["Package version lock files", "Fast script runners"], years: "5 Years", productionApps: 25 },
//       ],
//     },
//   ];

//   const filteredCategories = useMemo(() => {
//     return categories
//       .map((cat) => {
//         if (activeTab !== "all" && cat.id !== activeTab) return null;
//         const matchingSkills = cat.skills.filter((skill) =>
//           skill.name.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//         if (searchQuery && matchingSkills.length === 0) return null;
//         return { ...cat, skills: searchQuery ? matchingSkills : cat.skills };
//       })
//       .filter(Boolean) as SkillCategory[];
//   }, [activeTab, searchQuery]);

//   const toggleCategory = (id: string) => {
//     setExpandedCategories((prev) => ({ ...prev, [id]: !prev[id] }));
//   };

//   const handleTechHighlight = (techName: string) => {
//     setHighlightedTech(techName);
//     const element = document.getElementById("projects-crossgrid");
//     if (element) element.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section id="skills" className="relative section-padding border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/20">
//       <div className="container-width px-4 mx-auto">
        
//         {/* Header */}
//         <div className="mb-12 text-center">
//           <h2 className="text-3xl font-bold md:text-4xl tracking-tight">
//             Skills & <span className="text-indigo-600 dark:text-indigo-400">Ecosystem</span>
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400 text-sm md:text-base">
//             A granular overview of my technical stack, architectural flows, and operational workflows structured around engineering evidence.
//           </p>
//         </div>

//         {/* 12. Minimal Hero Row Stats */}
//         <div className="max-w-4xl mx-auto mb-14 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
//           {minimalStats.map((stat, i) => (
//             <div key={i} className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800/80 shadow-sm">
//               <div className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">{stat.value}</div>
//               <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mt-1">{stat.label}</div>
//             </div>
//           ))}
//         </div>

//         {/* 1. Primary Hero Stack */}
//         <div className="mb-16 max-w-5xl mx-auto">
//           <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4 text-center md:text-left">
//             Primary Stack (Core Focus)
//           </h3>
//           <div className="flex flex-wrap justify-center md:justify-start gap-2.5">
//             {primaryStack.map((tech) => (
//               <div
//                 key={tech}
//                 onClick={() => {
//                   const matched = categories.flatMap(c => c.skills).find(s => s.name.toLowerCase() === tech.toLowerCase());
//                   if (matched) setSelectedSkill(matched);
//                 }}
//                 className="relative overflow-hidden px-5 py-3 rounded-xl font-medium text-sm border border-indigo-200/60 dark:border-indigo-500/20 bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-300 hover:shadow-indigo-100 dark:hover:shadow-none cursor-pointer group"
//               >
//                 <span className="inline-block transition-transform duration-300 group-hover:rotate-[2deg]">{tech}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* 8. UPGRADED: MULTI-OPTION RESPONSIVE TECHNOLOGY ECOSYSTEM FLOW */}
//         <div className="mb-16 max-w-5xl mx-auto p-6 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 shadow-sm">
//           <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//             <div>
//               <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
//                 <GitMerge size={16} className="text-indigo-500" /> Technology Ecosystem Blueprints
//               </h3>
//               <p className="text-xs text-neutral-500 mt-1">
//                 Select an architecture to view production system orchestration pipelines.
//               </p>
//             </div>
            
//             {/* Control Toggle for Architecture Pipelines */}
//             <div className="flex flex-wrap gap-1.5 p-1 bg-neutral-100 dark:bg-neutral-950 rounded-xl border border-neutral-200/40 dark:border-neutral-800/40 self-start">
//               {ecosystemOptions.map((opt) => (
//                 <button
//                   key={opt.id}
//                   onClick={() => setSelectedFlowId(opt.id)}
//                   className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
//                     selectedFlowId === opt.id
//                       ? "bg-white dark:bg-neutral-800 text-indigo-600 dark:text-indigo-400 shadow-xs border border-neutral-200/50 dark:border-neutral-700/50"
//                       : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
//                   }`}
//                 >
//                   {opt.label}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Dynamic Responsive Connector Nodes Blueprint Frame */}
//           <div className="flex flex-col md:flex-row flex-wrap items-center justify-center lg:justify-between gap-y-3 gap-x-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950/40 border border-neutral-100 dark:border-neutral-900/60 transition-all">
//             {activeFlow.nodes.map((node, index) => (
//               <div key={index} className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto text-center md:text-left">
                
//                 {/* Node Box card unit layout wrapper */}
//                 <div className={`px-4 py-2.5 rounded-xl border transition-all w-48 md:w-auto min-w-[130px] mx-auto md:mx-0 ${
//                   node.isEndpoint 
//                   ? "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 font-semibold"
//                   : "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-indigo-500/40"
//                 }`}>
//                   <div className="text-xs font-bold font-mono tracking-tight">{node.name}</div>
//                   <div className="text-[10px] text-neutral-400 dark:text-neutral-500 mt-0.5 whitespace-nowrap">{node.label}</div>
//                 </div>

//                 {/* Intelligent Dynamic Directional Arrows Connector (Flips right to down elegantly) */}
//                 {index < activeFlow.nodes.length - 1 && (
//                   <div className="text-neutral-300 dark:text-neutral-700 py-0.5 md:py-0">
//                     <span className="hidden md:inline"><ArrowRight size={14} className="text-neutral-300 dark:text-neutral-700" /></span>
//                     <span className="inline md:hidden"><ArrowDown size={14} className="text-neutral-300 dark:text-neutral-700" /></span>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* 3. Control Panel (Remapped Search + Tab Filters) */}
//         <div className="max-w-5xl mx-auto mb-8 space-y-5">
//           <div className="relative max-w-md">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
//             <input
//               type="text"
//               placeholder="Search tools, platforms, frameworks..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-colors"
//             />
//           </div>

//           <div className="flex flex-wrap gap-2">
//             <button
//               onClick={() => setActiveTab("all")}
//               className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
//                 activeTab === "all"
//                   ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
//                   : "bg-white border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800"
//               }`}
//             >
//               All Engine Elements
//             </button>
//             {categories.map((cat) => (
//               <button
//                 key={cat.id}
//                 onClick={() => setActiveTab(cat.id)}
//                 className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
//                   activeTab === cat.id
//                     ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
//                     : "bg-white border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800"
//               }`}
//               >
//                 {cat.icon}
//                 {cat.title}
//               </button>
//             ))}
//           </div>

//           <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 pt-1">
//             <SlidersHorizontal size={14} />
//             <span>Filtering {filteredCategories.reduce((acc, c) => acc + c.skills.length, 0)} Total Technologies</span>
//           </div>
//         </div>

//         {/* 11. Responsive Grid Configuration Grid Map */}
//         <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-5xl mx-auto">
//           {filteredCategories.map((cat) => {
//             const isExpanded = expandedCategories[cat.id] || searchQuery.length > 0;
//             const visibleSkills = isExpanded ? cat.skills : cat.skills.slice(0, 4);
//             const hasMore = cat.skills.length > 4;

//             return (
//               <div
//                 key={cat.id}
//                 className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900/60 transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-sm"
//               >
//                 <div>
//                   <div className="mb-4 flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800/60 pb-3">
//                     <div className="flex items-center gap-2">
//                       {cat.icon}
//                       <h4 className="font-semibold text-sm tracking-wide text-neutral-800 dark:text-neutral-200">{cat.title}</h4>
//                     </div>
//                     <span className="text-[10px] px-2.5 py-0.5 rounded-full font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
//                       {cat.skills.length} Technologies
//                     </span>
//                   </div>

//                   {/* Micro Chips Inside Card */}
//                   <div className="space-y-2">
//                     {visibleSkills.map((skill) => (
//                       <div
//                         key={skill.name}
//                         onClick={() => setSelectedSkill(skill)}
//                         className={`group/chip relative flex flex-col p-2 rounded-xl border transition-all duration-200 cursor-pointer ${
//                           skill.isTop 
//                           ? "bg-indigo-50/30 dark:bg-indigo-950/10 border-indigo-100 dark:border-indigo-900/40 hover:border-indigo-500/50" 
//                           : "bg-neutral-50 dark:bg-neutral-900/80 border-neutral-100 dark:border-neutral-800/40 hover:bg-white dark:hover:bg-neutral-800 hover:border-indigo-500/30"
//                         }`}
//                       >
//                         <div className="flex items-center justify-between">
//                           <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300 group-hover/chip:text-indigo-600 dark:group-hover/chip:text-indigo-400 transition-colors flex items-center gap-1.5">
//                             {skill.isTop && <Star size={12} className="fill-amber-400 text-amber-400 shrink-0" />}
//                             {skill.name}
//                           </span>
//                         </div>
                        
//                         {/* 5. Dynamic Hover Evidence Implementation */}
//                         {skill.evidence && (
//                           <div className="mt-1.5 hidden group-hover/chip:flex flex-wrap gap-1 items-center transition-all">
//                             {skill.evidence.map((point, idx) => (
//                               <span 
//                                 key={idx} 
//                                 className="inline-flex items-center text-[10px] px-1.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-sans tracking-tight"
//                               >
//                                 <CheckCircle2 size={8} className="mr-1 text-indigo-400 dark:text-indigo-500" />
//                                 {point}
//                               </span>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Progressive Disclosure Action Link */}
//                 {hasMore && !searchQuery && (
//                   <button
//                     onClick={() => toggleCategory(cat.id)}
//                     className="mt-4 pt-2 border-t border-dashed border-neutral-100 dark:border-neutral-800/80 w-full flex items-center justify-center gap-1 text-xs font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
//                   >
//                     {isExpanded ? (
//                       <>Show Less <ChevronUp size={14} /></>
//                     ) : (
//                       <>+{cat.skills.length - 4} More Tools <ChevronDown size={14} /></>
//                     )}
//                   </button>
//                 )}
//               </div>
//             );
//           })}
//         </div>

//         {/* Empty States Filter Handling */}
//         {filteredCategories.length === 0 && (
//           <div className="text-center py-12 max-w-md mx-auto border border-dashed border-neutral-200 dark:border-neutral-800 rounded-2xl">
//             <p className="text-sm text-neutral-500 dark:text-neutral-400">
//               No development systems mapped to "{searchQuery}" matching that filter scope.
//             </p>
//           </div>
//         )}

//         {/* 9. Interactive Projects Cross-Reference Section */}
//         <div id="projects-crossgrid" className="mt-20 max-w-5xl mx-auto pt-12 border-t border-neutral-200 dark:border-neutral-800">
//           <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//             <div>
//               <h3 className="text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-2">
//                 <Briefcase size={18} className="text-indigo-500" /> Production Ecosystem Cross-Reference
//               </h3>
//               <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
//                 Select a technology or click a chip anywhere to highlight related real-world architecture deliverables.
//               </p>
//             </div>
//             {highlightedTech && (
//               <button 
//                 onClick={() => setHighlightedTech(null)}
//                 className="self-start text-xs bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900 text-indigo-600 dark:text-indigo-400 px-2.5 py-1 rounded-lg flex items-center gap-1 hover:bg-indigo-100 transition-colors"
//               >
//                 Clear Filter: <strong className="font-semibold">{highlightedTech}</strong> <X size={12} />
//               </button>
//             )}
//           </div>

//           <div className="grid gap-4 sm:grid-cols-2">
//             {projects.map((project) => {
//               const isTargeted = highlightedTech ? project.tech.includes(highlightedTech) : false;
//               const hasActiveSelection = highlightedTech !== null;

//               return (
//                 <div 
//                   key={project.name} 
//                   className={`p-5 rounded-2xl border transition-all duration-300 ${
//                     isTargeted 
//                       ? "bg-indigo-50/40 dark:bg-indigo-950/20 border-indigo-500 ring-2 ring-indigo-500/20 shadow-md transform -translate-y-0.5" 
//                       : hasActiveSelection
//                         ? "bg-white dark:bg-neutral-900 opacity-40 border-neutral-100 dark:border-neutral-800/60"
//                         : "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700"
//                   }`}
//                 >
//                   <h4 className="font-bold text-sm text-neutral-800 dark:text-neutral-200">{project.name}</h4>
//                   <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 line-clamp-2 leading-relaxed">{project.description}</p>
                  
//                   <div className="flex flex-wrap gap-1.5 mt-4">
//                     {project.tech.map((t) => (
//                       <button
//                         key={t}
//                         onClick={() => setHighlightedTech(t === highlightedTech ? null : t)}
//                         className={`text-[10px] font-mono px-2 py-0.5 rounded transition-all ${
//                           t === highlightedTech
//                             ? "bg-indigo-600 text-white"
//                             : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-500"
//                         }`}
//                       >
//                         {t}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//       </div>

//       {/* 10. Drawer Interaction Component Panel */}
//       {selectedSkill && (
//         <div className="fixed inset-0 z-50 flex justify-end bg-neutral-900/40 backdrop-blur-sm animate-fadeIn">
//           <div className="absolute inset-0" onClick={() => setSelectedSkill(null)} />
//           <div className="relative w-full max-w-md h-full bg-white dark:bg-neutral-950 border-l border-neutral-200 dark:border-neutral-800 p-6 shadow-2xl flex flex-col justify-between transform transition-transform animate-slideIn">
//             <div>
//               <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-6">
//                 <div className="flex items-center gap-2">
//                   <Star size={16} className="text-indigo-500 fill-indigo-500" />
//                   <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-sans">{selectedSkill.name} Insights</h3>
//                 </div>
//                 <button 
//                   onClick={() => setSelectedSkill(null)}
//                   className="p-1 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-400 hover:text-neutral-600 transition-colors"
//                 >
//                   <X size={18} />
//                 </button>
//               </div>

//               <div className="space-y-6">
//                 <div>
//                   <h4 className="text-xs uppercase font-semibold text-neutral-400 tracking-wider">Engineering Competency</h4>
//                   <div className="grid grid-cols-2 gap-3 mt-2">
//                     <div className="bg-neutral-50 dark:bg-neutral-900/50 p-3 rounded-xl border border-neutral-100 dark:border-neutral-800/40">
//                       <div className="text-[10px] text-neutral-400">Experience</div>
//                       <div className="text-sm font-bold text-neutral-800 dark:text-neutral-200 mt-0.5">{selectedSkill.years || "Multi-Year Integration"}</div>
//                     </div>
//                     <div className="bg-neutral-50 dark:bg-neutral-900/50 p-3 rounded-xl border border-neutral-100 dark:border-neutral-800/40">
//                       <div className="text-[10px] text-neutral-400">Production Deployments</div>
//                       <div className="text-sm font-bold text-neutral-800 dark:text-neutral-200 mt-0.5">{selectedSkill.productionApps || "Verified Component"} Applications</div>
//                     </div>
//                   </div>
//                 </div>

//                 {selectedSkill.evidence && (
//                   <div>
//                     <h4 className="text-xs uppercase font-semibold text-neutral-400 tracking-wider mb-2">Technical Proof Points</h4>
//                     <div className="space-y-2">
//                       {selectedSkill.evidence.map((point, index) => (
//                         <div key={index} className="flex items-start gap-2.5 p-2.5 rounded-xl border border-neutral-100 dark:border-neutral-800/40 bg-neutral-50/50 dark:bg-neutral-900/20 text-xs text-neutral-700 dark:text-neutral-300">
//                           <CheckCircle2 size={14} className="text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
//                           <span>{point}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>

//             <div className="border-t border-neutral-100 dark:border-neutral-800 pt-4">
//               <button
//                 onClick={() => {
//                   handleTechHighlight(selectedSkill.name);
//                   setSelectedSkill(null);
//                 }}
//                 className="w-full py-2.5 px-4 rounded-xl text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs shadow-sm transition-colors flex items-center justify-center gap-2"
//               >
//                 <Briefcase size={14} /> Highlight Projects Using {selectedSkill.name}
//               </button>
//             </div>

//           </div>
//         </div>
//       )}

//     </section>
//   );
// }







// "use client";

// import { useState, useMemo } from "react";
// import { 
//   Search, 
//   Layers, 
//   Terminal, 
//   Database, 
//   Cpu, 
//   Cloud, 
//   Wrench, 
//   CreditCard, 
//   Share2,
//   ChevronDown,
//   ChevronUp,
//   SlidersHorizontal,
//   CheckCircle2,
//   Star,
//   X,
//   Briefcase,
//   GitMerge,
//   ArrowRight,
//   ArrowDown,
//   RefreshCw
// } from "lucide-react";

// // Types
// interface Skill {
//   name: string;
//   evidence?: string[];
//   isTop?: boolean;
//   years?: string;
//   productionApps?: number;
// }

// interface SkillCategory {
//   id: string;
//   title: string;
//   icon: React.ReactNode;
//   skills: Skill[];
// }

// interface Project {
//   name: string;
//   description: string;
//   tech: string[];
// }

// interface EcosystemFlow {
//   id: string;
//   label: string;
//   nodes: { 
//     name: string; 
//     label: string; 
//     isEndpoint?: boolean; 
//     parallelWithNext?: boolean; // Controls parallel processing branches
//     isParallelRoot?: boolean;
//   }[];
// }

// export default function Skills() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [activeTab, setActiveTab] = useState("all");
//   const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
//   const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
//   const [highlightedTech, setHighlightedTech] = useState<string | null>(null);
//   const [selectedFlowId, setSelectedFlowId] = useState("enterprise");

//   const minimalStats = [
//     { value: "65+", label: "Technologies" },
//     { value: "40+", label: "Production Projects" },
//     { value: "8+", label: "Years Experience" },
//     { value: "20+", label: "Integrations Built" }
//   ];

//   const primaryStack = [
//     "PHP", "Laravel", "React", "Next.js", "Node.js", 
//     "TypeScript", "Docker", "AWS", "n8n", "OpenAI"
//   ];

//   // Technical Ecosystem Options including the parallel Next.js Fullstack Engine
//   const ecosystemOptions: EcosystemFlow[] = [
//     {
//       id: "enterprise",
//       label: "Enterprise Web Core",
//       nodes: [
//         { name: "React", label: "Frontend UI" },
//         { name: "Next.js", label: "SSR Framework" },
//         { name: "Laravel API", label: "Backend Core" },
//         { name: "Redis", label: "Caching Layer" },
//         { name: "PostgreSQL", label: "DB Database" },
//         { name: "Docker", label: "Containerization" },
//         { name: "AWS", label: "Infrastructure" },
//         { name: "Production", label: "Live System", isEndpoint: true }
//       ]
//     },
//     {
//       id: "nextjs-fullstack",
//       label: "Next.js Architecture (Parallel Edge)",
//       nodes: [
//         { name: "Next.js App Router", label: "Unified Client/Server Core", isParallelRoot: true },
//         { name: "Parallel Track A: React Server Components", label: "Streaming UI Layouts", parallelWithNext: true },
//         { name: "Parallel Track B: Vercel Edge Middleware", label: "Geolocation & Auth Guard", parallelWithNext: true },
//         { name: "PostgreSQL via Prisma", label: "Connection Pooling Pool", isParallelRoot: true },
//         { name: "Global CDN Edge", label: "Hydrated Live Render", isEndpoint: true }
//       ]
//     },
//     {
//       id: "mern",
//       label: "MERN SaaS Engine",
//       nodes: [
//         { name: "React", label: "Client Layer" },
//         { name: "Express", label: "REST Engine" },
//         { name: "Node.js", label: "Runtime Env" },
//         { name: "JWT Auth", label: "Stateless Sec" },
//         { name: "MongoDB", label: "Document Store" },
//         { name: "Vercel", label: "Edge Host" },
//         { name: "Production", label: "Zero-Downtime", isEndpoint: true }
//       ]
//     },
//     {
//       id: "mobile",
//       label: "Cross-Platform Mobile App",
//       nodes: [
//         { name: "React Native / Flutter", label: "Native Shell UI" },
//         { name: "TypeScript / Dart", label: "App Core Logic" },
//         { name: "GraphQL", label: "Data Gateway" },
//         { name: "NestJS", label: "Scale Backend" },
//         { name: "Redis", label: "Live Broker" },
//         { name: "Firebase", label: "Cloud Sync" },
//         { name: "App Stores", label: "Google / Apple Live", isEndpoint: true }
//       ]
//     },
//     {
//       id: "ai-automation",
//       label: "AI Orchestration Workflow",
//       nodes: [
//         { name: "n8n UI", label: "Visual Pipeline" },
//         { name: "Webhooks", label: "Event Ingestion" },
//         { name: "Claude / OpenAI", label: "Agent LLM Core" },
//         { name: "MCP Protocol", label: "Tool Execution" },
//         { name: "Queues / Cron", label: "Job Orchestrator" },
//         { name: "Production", label: "Autonomous Agent", isEndpoint: true }
//       ]
//     }
//   ];

//   const activeFlow = useMemo(() => {
//     return ecosystemOptions.find(f => f.id === selectedFlowId) || ecosystemOptions[0];
//   }, [selectedFlowId]);

//   const projects: Project[] = [
//     {
//       name: "CRM Dashboard",
//       description: "Enterprise-tier real-time lead management platform with pipeline visualization.",
//       tech: ["Laravel", "Redis", "Docker", "Stripe", "AWS", "React"]
//     },
//     {
//       name: "SaaS Analytics Engine",
//       description: "High-throughput telemetry ingestion backend mapping user behavioral tracking.",
//       tech: ["Next.js", "Node.js", "TypeScript", "Redis", "PostgreSQL", "Docker", "AWS", "Express", "MongoDB", "Vercel"]
//     },
//     {
//       name: "AI-Powered Workflow Automated Agent",
//       description: "Autonomous self-healing context pipeline routing multi-model parsing requests.",
//       tech: ["n8n", "OpenAI", "Claude", "MCP", "Webhooks", "Node.js", "Queues", "Cron"]
//     },
//     {
//       name: "B2B Marketplace Platform",
//       description: "Multi-tenant merchant grid with localized cross-border payout pipelines.",
//       tech: ["PHP", "Laravel", "Vue", "Inertia", "MySQL", "Stripe", "PayPal"]
//     }
//   ];

//   const categories: SkillCategory[] = [
//     {
//       id: "frontend",
//       title: "Frontend",
//       icon: <Layers size={18} className="text-blue-500" />,
//       skills: [
//         { name: "React", evidence: ["5+ Years", "SaaS Dashboards", "Hooks/Context"], isTop: true, years: "5+ Years", productionApps: 12 },
//         { name: "Next.js", evidence: ["SSR/SSG", "App Router Optimization", "Vercel"], isTop: true, years: "3+ Years", productionApps: 8 },
//         { name: "Tailwind", evidence: ["Design Systems", "Custom Utility Configs"], isTop: true, years: "4+ Years", productionApps: 20 },
//         { name: "Vue", evidence: ["Options/Composition API", "SPAs"], years: "2 Years", productionApps: 4 },
//         { name: "Nuxt", evidence: ["Server-side Vue apps"], years: "1 Year", productionApps: 2 },
//         { name: "Alpine", evidence: ["Lightweight interactions", "Livewire pairing"], years: "3 Years", productionApps: 6 },
//         { name: "Inertia", evidence: ["Monolith UI bridging", "Laravel Integration"], years: "3 Years", productionApps: 5 },
//       ],
//     },
//     {
//       id: "backend",
//       title: "Backend",
//       icon: <Terminal size={18} className="text-emerald-500" />,
//       skills: [
//         { name: "Laravel", evidence: ["18+ Projects", "SaaS Architecture", "Ecosystem Expert"], isTop: true, years: "6+ Years", productionApps: 18 },
//         { name: "PHP", evidence: ["8+ Years", "OOP", "Custom Packages"], isTop: true, years: "8+ Years", productionApps: 25 },
//         { name: "Node.js", evidence: ["Async Event Loop", "Express", "NestJS"], isTop: true, years: "4+ Years", productionApps: 9 },
//         { name: "Lumen", evidence: ["Microservices", "High-performance APIs"], years: "2 Years", productionApps: 3 },
//         { name: "Express", evidence: ["RESTful API Endpoints", "Middleware"], years: "4 Years", productionApps: 7 },
//         { name: "Nest", evidence: ["TypeScript Native Backend", "Modular Architecture"], years: "2 Years", productionApps: 2 },
//         { name: "GraphQL", evidence: ["Queries/Mutations", "Apollo Server"], years: "2 Years", productionApps: 3 },
//         { name: "REST APIs", evidence: ["Strict Standards", " OpenAPI / Swagger Specs"], years: "7 Years", productionApps: 22 },
//         { name: "JWT", evidence: ["Stateless Auth", "Secure Storage Flows"], years: "5 Years", productionApps: 15 },
//       ],
//     },
//     {
//       id: "database",
//       title: "Databases",
//       icon: <Database size={18} className="text-purple-500" />,
//       skills: [
//         { name: "MySQL", evidence: ["Query Optimization", "Indexing Profiles"], isTop: true, years: "7 Years", productionApps: 20 },
//         { name: "PostgreSQL", evidence: ["Complex Joins", "JSONB data fields"], isTop: true, years: "4 Years", productionApps: 11 },
//         { name: "Redis", evidence: ["Caching layers", "Rate limiting", "Queue Brokers"], isTop: true, years: "4 Years", productionApps: 14 },
//         { name: "MongoDB", evidence: ["NoSQL Schemas", "Aggregation Pipelines"], years: "3 Years", productionApps: 5 },
//         { name: "Firebase", evidence: ["Real-time Syncing", "Firestore Rules"], years: "2 Years", productionApps: 4 },
//       ],
//     },
//     {
//       id: "devops",
//       title: "Cloud & DevOps",
//       icon: <Cloud size={18} className="text-sky-500" />,
//       skills: [
//         { name: "Docker", evidence: ["Multi-stage builds", "Compose environments"], isTop: true, years: "4 Years", productionApps: 16 },
//         { name: "AWS", evidence: ["EC2", "S3", "RDS", "ECS containers"], isTop: true, years: "4 Years", productionApps: 10 },
//         { name: "CI/CD", evidence: ["Automated production delivery zero-downtime"], isTop: true, years: "5 Years", productionApps: 18 },
//         { name: "DigitalOcean", evidence: ["Droplets", "App Platform deployments"], years: "4 Years", productionApps: 12 },
//         { name: "GitHub Actions", evidence: ["Custom CI/CD linting/testing pipelines"], years: "3 Years", productionApps: 14 },
//         { name: "Nginx", evidence: ["Reverse Proxies", "SSL Offloading", "Server blocks"], years: "5 Years", productionApps: 15 },
//         { name: "Linux", evidence: ["Bash Shell scripting", "Server Hardening"], years: "6 Years", productionApps: 18 },
//         { name: "Vercel", evidence: ["Edge function tuning", "Next.js environments"], years: "3 Years", productionApps: 8 },
//       ],
//     },
//     {
//       id: "automation",
//       title: "Automation & AI",
//       icon: <Cpu size={18} className="text-amber-500" />,
//       skills: [
//         { name: "n8n", evidence: ["Complex visual workflows", "Custom Node hooks"], isTop: true, years: "2 Years", productionApps: 7 },
//         { name: "OpenAI", evidence: ["Agentic Frameworks", "Prompt Engineering"], isTop: true, years: "2 Years", productionApps: 6 },
//         { name: "Claude", evidence: ["Anthropic API Integration", "MCP Clients"], years: "1 Year", productionApps: 4 },
//         { name: "MCP", evidence: ["Model Context Protocol tool design"], years: "1 Year", productionApps: 2 },
//         { name: "Webhooks", evidence: ["Asynchronous Events", "Signature Verification"], years: "5 Years", productionApps: 15 },
//         { name: "Queues", evidence: ["Job distribution", "Delayed Processing"], years: "5 Years", productionApps: 12 },
//         { name: "Cron", evidence: ["Scheduled system tasks", "Heartbeat checks"], years: "6 Years", productionApps: 20 },
//         { name: "Playwright", evidence: ["Headless Scraping", "E2E testing workflows"], years: "2 Years", productionApps: 3 },
//       ],
//     },
//     {
//       id: "integrations",
//       title: "Integrations",
//       icon: <Share2 size={18} className="text-indigo-500" />,
//       skills: [
//         { name: "HubSpot", evidence: ["CRM Sync rules", "Contact ingestion APIs"], years: "2 Years", productionApps: 3 },
//         { name: "Twilio", evidence: ["SMS fallback", "2FA authentication systems"], years: "4 Years", productionApps: 8 },
//         { name: "Pusher", evidence: ["Real-time web socket broadcasting"], years: "3 Years", productionApps: 9 },
//         { name: "Google APIs", evidence: ["OAuth2 flow", "Calendar & Drive access"], years: "5 Years", productionApps: 11 },
//       ],
//     },
//     {
//       id: "payments",
//       title: "Payments",
//       icon: <CreditCard size={18} className="text-rose-500" />,
//       skills: [
//         { name: "Stripe", evidence: ["SaaS Subscriptions", "Webhooks handling"], isTop: true, years: "4 Years", productionApps: 14 },
//         { name: "PayPal", evidence: ["B2C SDK checkouts", "Payout structures"], years: "3 Years", productionApps: 5 },
//         { name: "Lemon Squeezy", evidence: ["Merchant of Record taxing", "License keys"], years: "2 Years", productionApps: 4 },
//       ],
//     },
//     {
//       id: "tools",
//       title: "Developer Tools",
//       icon: <Wrench size={18} className="text-neutral-500" />,
//       skills: [
//         { name: "Git", evidence: ["Trunk development", "Interactive Rebasing"], years: "6 Years", productionApps: 30 },
//         { name: "Postman", evidence: ["Automated testing collections", "Mock servers"], years: "4 Years", productionApps: 20 },
//         { name: "Composer", evidence: ["PHP dependency rules", "Autoload setups"], years: "6 Years", productionApps: 22 },
//         { name: "npm / Bun", evidence: ["Package version lock files", "Fast script runners"], years: "5 Years", productionApps: 25 },
//       ],
//     },
//   ];

//   const filteredCategories = useMemo(() => {
//     return categories
//       .map((cat) => {
//         if (activeTab !== "all" && cat.id !== activeTab) return null;
//         const matchingSkills = cat.skills.filter((skill) =>
//           skill.name.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//         if (searchQuery && matchingSkills.length === 0) return null;
//         return { ...cat, skills: searchQuery ? matchingSkills : cat.skills };
//       })
//       .filter(Boolean) as SkillCategory[];
//   }, [activeTab, searchQuery]);

//   const toggleCategory = (id: string) => {
//     setExpandedCategories((prev) => ({ ...prev, [id]: !prev[id] }));
//   };

//   const handleTechHighlight = (techName: string) => {
//     setHighlightedTech(techName);
//     const element = document.getElementById("projects-crossgrid");
//     if (element) element.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section id="skills" className="relative section-padding border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/20">
//       <div className="container-width px-4 mx-auto">
        
//         {/* Header */}
//         <div className="mb-12 text-center">
//           <h2 className="text-3xl font-bold md:text-4xl tracking-tight">
//             Skills & <span className="text-indigo-600 dark:text-indigo-400">Ecosystem</span>
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400 text-sm md:text-base">
//             A granular overview of my technical stack, architectural flows, and operational workflows structured around engineering evidence.
//           </p>
//         </div>

//         {/* Minimal Hero Row Stats */}
//         <div className="max-w-4xl mx-auto mb-14 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
//           {minimalStats.map((stat, i) => (
//             <div key={i} className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800/80 shadow-sm">
//               <div className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">{stat.value}</div>
//               <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mt-1">{stat.label}</div>
//             </div>
//           ))}
//         </div>

//         {/* Primary Hero Stack */}
//         <div className="mb-16 max-w-5xl mx-auto">
//           <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4 text-center md:text-left">
//             Primary Stack (Core Focus)
//           </h3>
//           <div className="flex flex-wrap justify-center md:justify-start gap-2.5">
//             {primaryStack.map((tech) => (
//               <div
//                 key={tech}
//                 onClick={() => {
//                   const matched = categories.flatMap(c => c.skills).find(s => s.name.toLowerCase() === tech.toLowerCase());
//                   if (matched) setSelectedSkill(matched);
//                 }}
//                 className="relative overflow-hidden px-5 py-3 rounded-xl font-medium text-sm border border-indigo-200/60 dark:border-indigo-500/20 bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-300 hover:shadow-indigo-100 dark:hover:shadow-none cursor-pointer group"
//               >
//                 <span className="inline-block transition-transform duration-300 group-hover:rotate-[2deg]">{tech}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RE-ENGINEERED: RESPONSIVE ECOSYSTEM GRAPH WITH NEXT.JS PARALLEL PIPELINES */}
//         <div className="mb-16 max-w-5xl mx-auto p-6 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 shadow-sm">
//           <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//             <div>
//               <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
//                 <GitMerge size={16} className="text-indigo-500" /> Technology Ecosystem Blueprints
//               </h3>
//               <p className="text-xs text-neutral-500 mt-1">
//                 Select an architecture to view system execution pipelines and concurrent processes.
//               </p>
//             </div>
            
//             <div className="flex flex-wrap gap-1.5 p-1 bg-neutral-100 dark:bg-neutral-950 rounded-xl border border-neutral-200/40 dark:border-neutral-800/40 self-start">
//               {ecosystemOptions.map((opt) => (
//                 <button
//                   key={opt.id}
//                   onClick={() => setSelectedFlowId(opt.id)}
//                   className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap flex items-center gap-1 ${
//                     selectedFlowId === opt.id
//                       ? "bg-white dark:bg-neutral-800 text-indigo-600 dark:text-indigo-400 shadow-xs border border-neutral-200/50 dark:border-neutral-700/50"
//                       : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
//                   }`}
//                 >
//                   {opt.id === "nextjs-fullstack" && <RefreshCw size={11} className="text-indigo-500 animate-spin-slow" />}
//                   {opt.label}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Dynamic Connected Layout Grid */}
//           <div className="flex flex-col md:flex-row flex-wrap items-center justify-center lg:justify-between gap-y-4 gap-x-2 p-5 rounded-xl bg-neutral-50 dark:bg-neutral-950/40 border border-neutral-100 dark:border-neutral-900/60 transition-all">
            
//             {/* If checking the Next.js parallel workflow, bundle the two middle tracks together visually */}
//             {selectedFlowId === "nextjs-fullstack" ? (
//               <div className="flex flex-col md:flex-row items-center gap-3 w-full justify-between">
                
//                 {/* 1. Root Element */}
//                 <div className="px-4 py-2.5 rounded-xl border bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-center w-full md:w-auto">
//                   <div className="text-xs font-bold font-mono tracking-tight">{activeFlow.nodes[0].name}</div>
//                   <div className="text-[10px] text-neutral-400 mt-0.5">{activeFlow.nodes[0].label}</div>
//                 </div>

//                 <div className="text-neutral-300 dark:text-neutral-700"><ArrowRight className="hidden md:inline" size={14} /><ArrowDown className="md:hidden" size={14} /></div>

//                 {/* 2. Parallel Processing Bundle */}
//                 <div className="flex flex-col sm:flex-row gap-3 p-3 rounded-xl bg-indigo-50/40 dark:bg-indigo-950/10 border border-indigo-100 dark:border-indigo-900/30 relative w-full md:w-auto justify-center">
//                   <span className="absolute -top-2.5 left-4 px-1.5 py-0.5 bg-indigo-600 text-white rounded text-[8px] font-mono font-bold tracking-widest uppercase flex items-center gap-1 shadow-xs">
//                     <RefreshCw size={8} className="animate-spin" /> Parallel Tasks
//                   </span>
                  
//                   <div className="px-3 py-2 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-center min-w-[140px]">
//                     <div className="text-xs font-bold font-mono text-neutral-800 dark:text-neutral-200">{activeFlow.nodes[1].name}</div>
//                     <div className="text-[9px] text-neutral-400 mt-0.5">{activeFlow.nodes[1].label}</div>
//                   </div>
//                   <div className="px-3 py-2 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-center min-w-[140px]">
//                     <div className="text-xs font-bold font-mono text-neutral-800 dark:text-neutral-200">{activeFlow.nodes[2].name}</div>
//                     <div className="text-[9px] text-neutral-400 mt-0.5">{activeFlow.nodes[2].label}</div>
//                   </div>
//                 </div>

//                 <div className="text-neutral-300 dark:text-neutral-700"><ArrowRight className="hidden md:inline" size={14} /><ArrowDown className="md:hidden" size={14} /></div>

//                 {/* 3. Aggregating Database Node */}
//                 <div className="px-4 py-2.5 rounded-xl border bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-center w-full md:w-auto">
//                   <div className="text-xs font-bold font-mono tracking-tight">{activeFlow.nodes[3].name}</div>
//                   <div className="text-[10px] text-neutral-400 mt-0.5">{activeFlow.nodes[3].label}</div>
//                 </div>

//                 <div className="text-neutral-300 dark:text-neutral-700"><ArrowRight className="hidden md:inline" size={14} /><ArrowDown className="md:hidden" size={14} /></div>

//                 {/* 4. Live Endpoint */}
//                 <div className="px-4 py-2.5 rounded-xl border bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 font-semibold text-center w-full md:w-auto">
//                   <div className="text-xs font-bold font-mono tracking-tight">{activeFlow.nodes[4].name}</div>
//                   <div className="text-[10px] text-neutral-400 mt-0.5">{activeFlow.nodes[4].label}</div>
//                 </div>

//               </div>
//             ) : (
//               /* Standard Linear Flow Render Engine */
//               activeFlow.nodes.map((node, index) => (
//                 <div key={index} className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto text-center md:text-left">
//                   <div className={`px-4 py-2.5 rounded-xl border transition-all w-48 md:w-auto min-w-[130px] mx-auto md:mx-0 ${
//                     node.isEndpoint 
//                     ? "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 font-semibold"
//                     : "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-indigo-500/40"
//                   }`}>
//                     <div className="text-xs font-bold font-mono tracking-tight">{node.name}</div>
//                     <div className="text-[10px] text-neutral-400 dark:text-neutral-500 mt-0.5 whitespace-nowrap">{node.label}</div>
//                   </div>

//                   {index < activeFlow.nodes.length - 1 && (
//                     <div className="text-neutral-300 dark:text-neutral-700 py-0.5 md:py-0">
//                       <span className="hidden md:inline"><ArrowRight size={14} /></span>
//                       <span className="inline md:hidden"><ArrowDown size={14} /></span>
//                     </div>
//                   )}
//                 </div>
//               ))
//             )}
//           </div>
//         </div>

//         {/* Control Panel */}
//         <div className="max-w-5xl mx-auto mb-8 space-y-5">
//           <div className="relative max-w-md">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
//             <input
//               type="text"
//               placeholder="Search tools, platforms, frameworks..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-colors"
//             />
//           </div>

//           <div className="flex flex-wrap gap-2">
//             <button
//               onClick={() => setActiveTab("all")}
//               className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
//                 activeTab === "all"
//                   ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
//                   : "bg-white border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800"
//               }`}
//             >
//               All Engine Elements
//             </button>
//             {categories.map((cat) => (
//               <button
//                 key={cat.id}
//                 onClick={() => setActiveTab(cat.id)}
//                 className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
//                   activeTab === cat.id
//                     ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
//                     : "bg-white border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800"
//               }`}
//               >
//                 {cat.icon}
//                 {cat.title}
//               </button>
//             ))}
//           </div>

//           <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 pt-1">
//             <SlidersHorizontal size={14} />
//             <span>Filtering {filteredCategories.reduce((acc, c) => acc + c.skills.length, 0)} Total Technologies</span>
//           </div>
//         </div>

//         {/* HIGH-PERFORMANCE STATIC CHIPS CONTAINER WITH FLUID OVERLAY TRANSLATIONS */}
//         <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-5xl mx-auto">
//           {filteredCategories.map((cat) => {
//             const isExpanded = expandedCategories[cat.id] || searchQuery.length > 0;
//             const visibleSkills = isExpanded ? cat.skills : cat.skills.slice(0, 4);
//             const hasMore = cat.skills.length > 4;

//             return (
//               <div
//                 key={cat.id}
//                 className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900/60 transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-sm"
//               >
//                 <div>
//                   <div className="mb-4 flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800/60 pb-3">
//                     <div className="flex items-center gap-2">
//                       {cat.icon}
//                       <h4 className="font-semibold text-sm tracking-wide text-neutral-800 dark:text-neutral-200">{cat.title}</h4>
//                     </div>
//                     <span className="text-[10px] px-2.5 py-0.5 rounded-full font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
//                       {cat.skills.length} Technologies
//                     </span>
//                   </div>

//                   {/* Micro Chips Inside Card: Zero layout displacement strategy */}
//                   <div className="space-y-2">
//                     {visibleSkills.map((skill) => (
//                       <div
//                         key={skill.name}
//                         onClick={() => setSelectedSkill(skill)}
//                         className={`group/chip relative flex items-center justify-between h-9 px-3 rounded-xl border overflow-hidden cursor-pointer transition-all ${
//                           skill.isTop 
//                           ? "bg-indigo-50/30 dark:bg-indigo-950/10 border-indigo-100 dark:border-indigo-900/40" 
//                           : "bg-neutral-50 dark:bg-neutral-900/80 border-neutral-100 dark:border-neutral-800/40"
//                         }`}
//                       >
//                         {/* Static Core Row Content Layer */}
//                         <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300 group-hover/chip:text-indigo-600 dark:group-hover/chip:text-indigo-400 transition-colors flex items-center gap-1.5 z-10">
//                           {skill.isTop && <Star size={12} className="fill-amber-400 text-amber-400 shrink-0" />}
//                           {skill.name}
//                         </span>

//                         {/* HIGH-PERFORMANCE ABSOLUTE SLIDE OVERLAY (Eliminates the "stroke layout growth" issue) */}
//                         {skill.evidence && (
//                           <div className="absolute inset-0 bg-neutral-900 dark:bg-neutral-100 px-3 flex items-center gap-1 translate-y-full group-hover/chip:translate-y-0 transition-transform duration-200 ease-out z-20">
//                             {skill.evidence.slice(0, 2).map((point, idx) => (
//                               <span 
//                                 key={idx} 
//                                 className="inline-flex items-center text-[9px] font-medium px-1.5 py-0.5 rounded bg-neutral-800 dark:bg-neutral-200 text-neutral-200 dark:text-neutral-800 tracking-tight whitespace-nowrap"
//                               >
//                                 <CheckCircle2 size={8} className="mr-1 text-indigo-400" />
//                                 {point}
//                               </span>
//                             ))}
//                             <span className="text-[8px] font-bold text-neutral-400 dark:text-neutral-500 ml-auto font-mono">🔍 INFO</span>
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Progressive Disclosure Action Link */}
//                 {hasMore && !searchQuery && (
//                   <button
//                     onClick={() => toggleCategory(cat.id)}
//                     className="mt-4 pt-2 border-t border-dashed border-neutral-100 dark:border-neutral-800/80 w-full flex items-center justify-center gap-1 text-xs font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
//                   >
//                     {isExpanded ? (
//                       <>Show Less <ChevronUp size={14} /></>
//                     ) : (
//                       <>+{cat.skills.length - 4} More Tools <ChevronDown size={14} /></>
//                     )}
//                   </button>
//                 )}
//               </div>
//             );
//           })}
//         </div>

//         {/* Empty States Filter Handling */}
//         {filteredCategories.length === 0 && (
//           <div className="text-center py-12 max-w-md mx-auto border border-dashed border-neutral-200 dark:border-neutral-800 rounded-2xl">
//             <p className="text-sm text-neutral-500 dark:text-neutral-400">
//               No development systems mapped to "{searchQuery}" matching that filter scope.
//             </p>
//           </div>
//         )}

//         {/* Interactive Projects Cross-Reference Section */}
//         <div id="projects-crossgrid" className="mt-20 max-w-5xl mx-auto pt-12 border-t border-neutral-200 dark:border-neutral-800">
//           <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//             <div>
//               <h3 className="text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-2">
//                 <Briefcase size={18} className="text-indigo-500" /> Production Ecosystem Cross-Reference
//               </h3>
//               <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
//                 Select a technology or click a chip anywhere to highlight related real-world architecture deliverables.
//               </p>
//             </div>
//             {highlightedTech && (
//               <button 
//                 onClick={() => setHighlightedTech(null)}
//                 className="self-start text-xs bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900 text-indigo-600 dark:text-indigo-400 px-2.5 py-1 rounded-lg flex items-center gap-1 hover:bg-indigo-100 transition-colors"
//               >
//                 Clear Filter: <strong className="font-semibold">{highlightedTech}</strong> <X size={12} />
//               </button>
//             )}
//           </div>

//           <div className="grid gap-4 sm:grid-cols-2">
//             {projects.map((project) => {
//               const isTargeted = highlightedTech ? project.tech.includes(highlightedTech) : false;
//               const hasActiveSelection = highlightedTech !== null;

//               return (
//                 <div 
//                   key={project.name} 
//                   className={`p-5 rounded-2xl border transition-all duration-300 ${
//                     isTargeted 
//                       ? "bg-indigo-50/40 dark:bg-indigo-950/20 border-indigo-500 ring-2 ring-indigo-500/20 shadow-md transform -translate-y-0.5" 
//                       : hasActiveSelection
//                         ? "bg-white dark:bg-neutral-900 opacity-40 border-neutral-100 dark:border-neutral-800/60"
//                         : "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700"
//                   }`}
//                 >
//                   <h4 className="font-bold text-sm text-neutral-800 dark:text-neutral-200">{project.name}</h4>
//                   <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 line-clamp-2 leading-relaxed">{project.description}</p>
                  
//                   <div className="flex flex-wrap gap-1.5 mt-4">
//                     {project.tech.map((t) => (
//                       <button
//                         key={t}
//                         onClick={() => setHighlightedTech(t === highlightedTech ? null : t)}
//                         className={`text-[10px] font-mono px-2 py-0.5 rounded transition-all ${
//                           t === highlightedTech
//                             ? "bg-indigo-600 text-white"
//                             : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-500"
//                         }`}
//                       >
//                         {t}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//       </div>

//       {/* Slide-out Panel Component */}
//       {selectedSkill && (
//         <div className="fixed inset-0 z-50 flex justify-end bg-neutral-900/40 backdrop-blur-sm">
//           <div className="absolute inset-0" onClick={() => setSelectedSkill(null)} />
//           <div className="relative w-full max-w-md h-full bg-white dark:bg-neutral-950 border-l border-neutral-200 dark:border-neutral-800 p-6 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-out">
//             <div>
//               <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-6">
//                 <div className="flex items-center gap-2">
//                   <Star size={16} className="text-indigo-500 fill-indigo-500" />
//                   <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-sans">{selectedSkill.name} Insights</h3>
//                 </div>
//                 <button 
//                   onClick={() => setSelectedSkill(null)}
//                   className="p-1 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-400 hover:text-neutral-600 transition-colors"
//                 >
//                   <X size={18} />
//                 </button>
//               </div>

//               <div className="space-y-6">
//                 <div>
//                   <h4 className="text-xs uppercase font-semibold text-neutral-400 tracking-wider">Engineering Competency</h4>
//                   <div className="grid grid-cols-2 gap-3 mt-2">
//                     <div className="bg-neutral-50 dark:bg-neutral-900/50 p-3 rounded-xl border border-neutral-100 dark:border-neutral-800/40">
//                       <div className="text-[10px] text-neutral-400">Experience</div>
//                       <div className="text-sm font-bold text-neutral-800 dark:text-neutral-200 mt-0.5">{selectedSkill.years || "Multi-Year Integration"}</div>
//                     </div>
//                     <div className="bg-neutral-50 dark:bg-neutral-900/50 p-3 rounded-xl border border-neutral-100 dark:border-neutral-800/40">
//                       <div className="text-[10px] text-neutral-400">Production Deployments</div>
//                       <div className="text-sm font-bold text-neutral-800 dark:text-neutral-200 mt-0.5">{selectedSkill.productionApps || "Verified Component"} Applications</div>
//                     </div>
//                   </div>
//                 </div>

//                 {selectedSkill.evidence && (
//                   <div>
//                     <h4 className="text-xs uppercase font-semibold text-neutral-400 tracking-wider mb-2">Technical Proof Points</h4>
//                     <div className="space-y-2">
//                       {selectedSkill.evidence.map((point, index) => (
//                         <div key={index} className="flex items-start gap-2.5 p-2.5 rounded-xl border border-neutral-100 dark:border-neutral-800/40 bg-neutral-50/50 dark:bg-neutral-900/20 text-xs text-neutral-700 dark:text-neutral-300">
//                           <CheckCircle2 size={14} className="text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
//                           <span>{point}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>

//             <div className="border-t border-neutral-100 dark:border-neutral-800 pt-4">
//               <button
//                 onClick={() => {
//                   handleTechHighlight(selectedSkill.name);
//                   setSelectedSkill(null);
//                 }}
//                 className="w-full py-2.5 px-4 rounded-xl text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs shadow-sm transition-colors flex items-center justify-center gap-2"
//               >
//                 <Briefcase size={14} /> Highlight Projects Using {selectedSkill.name}
//               </button>
//             </div>

//           </div>
//         </div>
//       )}

//     </section>
//   );
// }





"use client";

import { useState, useMemo } from "react";
import { 
  Search, 
  Layers, 
  Terminal, 
  Database, 
  Cpu, 
  Cloud, 
  Wrench, 
  CreditCard, 
  Share2,
  ChevronDown,
  ChevronUp,
  SlidersHorizontal,
  CheckCircle2,
  Star,
  X,
  Briefcase,
  GitMerge,
  ArrowRight,
  ArrowDown,
  RefreshCw
} from "lucide-react";

// Types
interface Skill {
  name: string;
  evidence?: string[];
  isTop?: boolean;
  years?: string;
  productionApps?: number;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

interface Project {
  name: string;
  description: string;
  tech: string[];
}

interface EcosystemFlow {
  id: string;
  label: string;
  nodes: { 
    name: string; 
    label: string; 
    isEndpoint?: boolean; 
    parallelWithNext?: boolean;
    isParallelRoot?: boolean;
  }[];
}

export default function Skills() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Track multiple selected categories concurrently
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [highlightedTech, setHighlightedTech] = useState<string | null>(null);
  const [selectedFlowId, setSelectedFlowId] = useState("enterprise");

  const minimalStats = [
    { value: "65+", label: "Technologies" },
    { value: "40+", label: "Production Projects" },
    { value: "8+", label: "Years Experience" },
    { value: "20+", label: "Integrations Built" }
  ];

  const primaryStack = [
    "PHP", "Laravel", "React", "Next.js", "Node.js", 
    "TypeScript", "Docker", "AWS", "n8n", "OpenAI"
  ];

  const ecosystemOptions: EcosystemFlow[] = [
    {
      id: "enterprise",
      label: "Enterprise Web Core",
      nodes: [
        { name: "React", label: "Frontend UI" },
        { name: "Next.js", label: "SSR Framework" },
        { name: "Laravel API", label: "Backend Core" },
        { name: "Redis", label: "Caching Layer" },
        { name: "PostgreSQL", label: "DB Database" },
        { name: "Docker", label: "Containerization" },
        { name: "AWS", label: "Infrastructure" },
        { name: "Production", label: "Live System", isEndpoint: true }
      ]
    },
    {
      id: "nextjs-fullstack",
      label: "Next.js Architecture (Parallel Edge)",
      nodes: [
        { name: "Next.js App Router", label: "Unified Client/Server Core", isParallelRoot: true },
        { name: "Parallel Track A: React Server Components", label: "Streaming UI Layouts", parallelWithNext: true },
        { name: "Parallel Track B: Vercel Edge Middleware", label: "Geolocation & Auth Guard", parallelWithNext: true },
        { name: "PostgreSQL via Prisma", label: "Connection Pooling Pool", isParallelRoot: true },
        { name: "Global CDN Edge", label: "Hydrated Live Render", isEndpoint: true }
      ]
    },
    {
      id: "mern",
      label: "MERN SaaS Engine",
      nodes: [
        { name: "React", label: "Client Layer" },
        { name: "Express", label: "REST Engine" },
        { name: "Node.js", label: "Runtime Env" },
        { name: "JWT Auth", label: "Stateless Sec" },
        { name: "MongoDB", label: "Document Store" },
        { name: "Vercel", label: "Edge Host" },
        { name: "Production", label: "Zero-Downtime", isEndpoint: true }
      ]
    },
    {
      id: "mobile",
      label: "Cross-Platform Mobile App",
      nodes: [
        { name: "React Native / Flutter", label: "Native Shell UI" },
        { name: "TypeScript / Dart", label: "App Core Logic" },
        { name: "GraphQL", label: "Data Gateway" },
        { name: "NestJS", label: "Scale Backend" },
        { name: "Redis", label: "Live Broker" },
        { name: "Firebase", label: "Cloud Sync" },
        { name: "App Stores", label: "Google / Apple Live", isEndpoint: true }
      ]
    },
    {
      id: "ai-automation",
      label: "AI Orchestration Workflow",
      nodes: [
        { name: "n8n UI", label: "Visual Pipeline" },
        { name: "Webhooks", label: "Event Ingestion" },
        { name: "Claude / OpenAI", label: "Agent LLM Core" },
        { name: "MCP Protocol", label: "Tool Execution" },
        { name: "Queues / Cron", label: "Job Orchestrator" },
        { name: "Production", label: "Autonomous Agent", isEndpoint: true }
      ]
    }
  ];

  const activeFlow = useMemo(() => {
    return ecosystemOptions.find(f => f.id === selectedFlowId) || ecosystemOptions[0];
  }, [selectedFlowId]);

  const projects: Project[] = [
    {
      name: "CRM Dashboard",
      description: "Enterprise-tier real-time lead management platform with pipeline visualization.",
      tech: ["Laravel", "Redis", "Docker", "Stripe", "AWS", "React"]
    },
    {
      name: "SaaS Analytics Engine",
      description: "High-throughput telemetry ingestion backend mapping user behavioral tracking.",
      tech: ["Next.js", "Node.js", "TypeScript", "Redis", "PostgreSQL", "Docker", "AWS", "Express", "MongoDB", "Vercel"]
    },
    {
      name: "AI-Powered Workflow Automated Agent",
      description: "Autonomous self-healing context pipeline routing multi-model parsing requests.",
      tech: ["n8n", "OpenAI", "Claude", "MCP", "Webhooks", "Node.js", "Queues", "Cron"]
    },
    {
      name: "B2B Marketplace Platform",
      description: "Multi-tenant merchant grid with localized cross-border payout pipelines.",
      tech: ["PHP", "Laravel", "Vue", "Inertia", "MySQL", "Stripe", "PayPal"]
    }
  ];

  const categories: SkillCategory[] = [
    {
      id: "frontend",
      title: "Frontend",
      icon: <Layers size={18} className="text-blue-500" />,
      skills: [
        { name: "React", evidence: ["5+ Years", "SaaS Dashboards", "Hooks/Context"], isTop: true, years: "5+ Years", productionApps: 12 },
        { name: "Next.js", evidence: ["SSR/SSG", "App Router Optimization", "Vercel"], isTop: true, years: "3+ Years", productionApps: 8 },
        { name: "Tailwind", evidence: ["Design Systems", "Custom Utility Configs"], isTop: true, years: "4+ Years", productionApps: 20 },
        { name: "Vue", evidence: ["Options/Composition API", "SPAs"], years: "2 Years", productionApps: 4 },
        { name: "Nuxt", evidence: ["Server-side Vue apps"], years: "1 Year", productionApps: 2 },
        { name: "Alpine", evidence: ["Lightweight interactions", "Livewire pairing"], years: "3 Years", productionApps: 6 },
        { name: "Inertia", evidence: ["Monolith UI bridging", "Laravel Integration"], years: "3 Years", productionApps: 5 },
      ],
    },
    {
      id: "backend",
      title: "Backend",
      icon: <Terminal size={18} className="text-emerald-500" />,
      skills: [
        { name: "Laravel", evidence: ["18+ Projects", "SaaS Architecture", "Ecosystem Expert"], isTop: true, years: "6+ Years", productionApps: 18 },
        { name: "PHP", evidence: ["8+ Years", "OOP", "Custom Packages"], isTop: true, years: "8+ Years", productionApps: 25 },
        { name: "Node.js", evidence: ["Async Event Loop", "Express", "NestJS"], isTop: true, years: "4+ Years", productionApps: 9 },
        { name: "Lumen", evidence: ["Microservices", "High-performance APIs"], years: "2 Years", productionApps: 3 },
        { name: "Express", evidence: ["RESTful API Endpoints", "Middleware"], years: "4 Years", productionApps: 7 },
        { name: "Nest", evidence: ["TypeScript Native Backend", "Modular Architecture"], years: "2 Years", productionApps: 2 },
        { name: "GraphQL", evidence: ["Queries/Mutations", "Apollo Server"], years: "2 Years", productionApps: 3 },
        { name: "REST APIs", evidence: ["Strict Standards", " OpenAPI / Swagger Specs"], years: "7 Years", productionApps: 22 },
        { name: "JWT", evidence: ["Stateless Auth", "Secure Storage Flows"], years: "5 Years", productionApps: 15 },
      ],
    },
    {
      id: "database",
      title: "Databases",
      icon: <Database size={18} className="text-purple-500" />,
      skills: [
        { name: "MySQL", evidence: ["Query Optimization", "Indexing Profiles"], isTop: true, years: "7 Years", productionApps: 20 },
        { name: "PostgreSQL", evidence: ["Complex Joins", "JSONB data fields"], isTop: true, years: "4 Years", productionApps: 11 },
        { name: "Redis", evidence: ["Caching layers", "Rate limiting", "Queue Brokers"], isTop: true, years: "4 Years", productionApps: 14 },
        { name: "MongoDB", evidence: ["NoSQL Schemas", "Aggregation Pipelines"], years: "3 Years", productionApps: 5 },
        { name: "Firebase", evidence: ["Real-time Syncing", "Firestore Rules"], years: "2 Years", productionApps: 4 },
      ],
    },
    {
      id: "devops",
      title: "Cloud & DevOps",
      icon: <Cloud size={18} className="text-sky-500" />,
      skills: [
        { name: "Docker", evidence: ["Multi-stage builds", "Compose environments"], isTop: true, years: "4 Years", productionApps: 16 },
        { name: "AWS", evidence: ["EC2", "S3", "RDS", "ECS containers"], isTop: true, years: "4 Years", productionApps: 10 },
        { name: "CI/CD", evidence: ["Automated production delivery zero-downtime"], isTop: true, years: "5 Years", productionApps: 18 },
        { name: "DigitalOcean", evidence: ["Droplets", "App Platform deployments"], years: "4 Years", productionApps: 12 },
        { name: "GitHub Actions", evidence: ["Custom CI/CD linting/testing pipelines"], years: "3 Years", productionApps: 14 },
        { name: "Nginx", evidence: ["Reverse Proxies", "SSL Offloading", "Server blocks"], years: "5 Years", productionApps: 15 },
        { name: "Linux", evidence: ["Bash Shell scripting", "Server Hardening"], years: "6 Years", productionApps: 18 },
        { name: "Vercel", evidence: ["Edge function tuning", "Next.js environments"], years: "3 Years", productionApps: 8 },
      ],
    },
    {
      id: "automation",
      title: "Automation & AI",
      icon: <Cpu size={18} className="text-amber-500" />,
      skills: [
        { name: "n8n", evidence: ["Complex visual workflows", "Custom Node hooks"], isTop: true, years: "2 Years", productionApps: 7 },
        { name: "OpenAI", evidence: ["Agentic Frameworks", "Prompt Engineering"], isTop: true, years: "2 Years", productionApps: 6 },
        { name: "Claude", evidence: ["Anthropic API Integration", "MCP Clients"], years: "1 Year", productionApps: 4 },
        { name: "MCP", evidence: ["Model Context Protocol tool design"], years: "1 Year", productionApps: 2 },
        { name: "Webhooks", evidence: ["Asynchronous Events", "Signature Verification"], years: "5 Years", productionApps: 15 },
        { name: "Queues", evidence: ["Job distribution", "Delayed Processing"], years: "5 Years", productionApps: 12 },
        { name: "Cron", evidence: ["Scheduled system tasks", "Heartbeat checks"], years: "6 Years", productionApps: 20 },
        { name: "Playwright", evidence: ["Headless Scraping", "E2E testing workflows"], years: "2 Years", productionApps: 3 },
      ],
    },
    {
      id: "integrations",
      title: "Integrations",
      icon: <Share2 size={18} className="text-indigo-500" />,
      skills: [
        { name: "HubSpot", evidence: ["CRM Sync rules", "Contact ingestion APIs"], years: "2 Years", productionApps: 3 },
        { name: "Twilio", evidence: ["SMS fallback", "2FA authentication systems"], years: "4 Years", productionApps: 8 },
        { name: "Pusher", evidence: ["Real-time web socket broadcasting"], years: "3 Years", productionApps: 9 },
        { name: "Google APIs", evidence: ["OAuth2 flow", "Calendar & Drive access"], years: "5 Years", productionApps: 11 },
      ],
    },
    {
      id: "payments",
      title: "Payments",
      icon: <CreditCard size={18} className="text-rose-500" />,
      skills: [
        { name: "Stripe", evidence: ["SaaS Subscriptions", "Webhooks handling"], isTop: true, years: "4 Years", productionApps: 14 },
        { name: "PayPal", evidence: ["B2C SDK checkouts", "Payout structures"], years: "3 Years", productionApps: 5 },
        { name: "Lemon Squeezy", evidence: ["Merchant of Record taxing", "License keys"], years: "2 Years", productionApps: 4 },
      ],
    },
    {
      id: "tools",
      title: "Developer Tools",
      icon: <Wrench size={18} className="text-neutral-500" />,
      skills: [
        { name: "Git", evidence: ["Trunk development", "Interactive Rebasing"], years: "6 Years", productionApps: 30 },
        { name: "Postman", evidence: ["Automated testing collections", "Mock servers"], years: "4 Years", productionApps: 20 },
        { name: "Composer", evidence: ["PHP dependency rules", "Autoload setups"], years: "6 Years", productionApps: 22 },
        { name: "npm / Bun", evidence: ["Package version lock files", "Fast script runners"], years: "5 Years", productionApps: 25 },
      ],
    },
  ];

  // Intercept and map combined category logic
  const filteredCategories = useMemo(() => {
    return categories
      .map((cat) => {
        // Multi-select conditional switch
        if (selectedCategories.length > 0 && !selectedCategories.includes(cat.id)) return null;
        
        const matchingSkills = cat.skills.filter((skill) =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        if (searchQuery && matchingSkills.length === 0) return null;
        return { ...cat, skills: searchQuery ? matchingSkills : cat.skills };
      })
      .filter(Boolean) as SkillCategory[];
  }, [selectedCategories, searchQuery]);

  // Click Handler supporting additions, updates and removals
  const handleCategoryToggle = (id: string) => {
    setSelectedCategories((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleCategory = (id: string) => {
    setExpandedCategories((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleTechHighlight = (techName: string) => {
    setHighlightedTech(techName);
    const element = document.getElementById("projects-crossgrid");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="skills" className="relative section-padding border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/20">
      <div className="container-width px-4 mx-auto">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl tracking-tight">
            Skills & <span className="text-indigo-600 dark:text-indigo-400">Ecosystem</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400 text-sm md:text-base">
            A granular overview of my technical stack, architectural flows, and operational workflows structured around engineering evidence.
          </p>
        </div>

        {/* Minimal Hero Row Stats */}
        <div className="max-w-4xl mx-auto mb-14 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {minimalStats.map((stat, i) => (
            <div key={i} className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800/80 shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">{stat.value}</div>
              <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Primary Hero Focus Stack */}
        <div className="mb-16 max-w-5xl mx-auto">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4 text-center md:text-left">
            Primary Stack (Core Focus)
          </h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-2.5">
            {primaryStack.map((tech) => (
              <div
                key={tech}
                onClick={() => {
                  const matched = categories.flatMap(c => c.skills).find(s => s.name.toLowerCase() === tech.toLowerCase());
                  if (matched) setSelectedSkill(matched);
                }}
                className="relative overflow-hidden px-5 py-3 rounded-xl font-medium text-sm border border-indigo-200/60 dark:border-indigo-500/20 bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-300 hover:shadow-indigo-100 dark:hover:shadow-none cursor-pointer group"
              >
                <span className="inline-block transition-transform duration-300 group-hover:rotate-[2deg]">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ecosystem Blueprint Graph Container */}
        <div className="mb-16 max-w-5xl mx-auto p-6 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 shadow-sm">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
                <GitMerge size={16} className="text-indigo-500" /> Technology Ecosystem Blueprints
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                Select an architecture to view system execution pipelines and concurrent processes.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-1.5 p-1 bg-neutral-100 dark:bg-neutral-950 rounded-xl border border-neutral-200/40 dark:border-neutral-800/40 self-start">
              {ecosystemOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedFlowId(opt.id)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap flex items-center gap-1 ${
                    selectedFlowId === opt.id
                      ? "bg-white dark:bg-neutral-800 text-indigo-600 dark:text-indigo-400 shadow-xs border border-neutral-200/50 dark:border-neutral-700/50"
                      : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
                  }`}
                >
                  {opt.id === "nextjs-fullstack" && <RefreshCw size={11} className="text-indigo-500 animate-spin-slow" />}
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap items-center justify-center lg:justify-between gap-y-4 gap-x-2 p-5 rounded-xl bg-neutral-50 dark:bg-neutral-950/40 border border-neutral-100 dark:border-neutral-900/60 transition-all">
            {selectedFlowId === "nextjs-fullstack" ? (
              <div className="flex flex-col md:flex-row items-center gap-3 w-full justify-between">
                <div className="px-4 py-2.5 rounded-xl border bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-center w-full md:w-auto">
                  <div className="text-xs font-bold font-mono tracking-tight">{activeFlow.nodes[0].name}</div>
                  <div className="text-[10px] text-neutral-400 mt-0.5">{activeFlow.nodes[0].label}</div>
                </div>
                <div className="text-neutral-300 dark:text-neutral-700"><ArrowRight className="hidden md:inline" size={14} /><ArrowDown className="md:hidden" size={14} /></div>
                <div className="flex flex-col sm:flex-row gap-3 p-3 rounded-xl bg-indigo-50/40 dark:bg-indigo-950/10 border border-indigo-100 dark:border-indigo-900/30 relative w-full md:w-auto justify-center">
                  <span className="absolute -top-2.5 left-4 px-1.5 py-0.5 bg-indigo-600 text-white rounded text-[8px] font-mono font-bold tracking-widest uppercase flex items-center gap-1 shadow-xs">
                    <RefreshCw size={8} className="animate-spin" /> Parallel Tasks
                  </span>
                  <div className="px-3 py-2 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-center min-w-[140px]">
                    <div className="text-xs font-bold font-mono text-neutral-800 dark:text-neutral-200">{activeFlow.nodes[1].name}</div>
                    <div className="text-[9px] text-neutral-400 mt-0.5">{activeFlow.nodes[1].label}</div>
                  </div>
                  <div className="px-3 py-2 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-center min-w-[140px]">
                    <div className="text-xs font-bold font-mono text-neutral-800 dark:text-neutral-200">{activeFlow.nodes[2].name}</div>
                    <div className="text-[9px] text-neutral-400 mt-0.5">{activeFlow.nodes[2].label}</div>
                  </div>
                </div>
                <div className="text-neutral-300 dark:text-neutral-700"><ArrowRight className="hidden md:inline" size={14} /><ArrowDown className="md:hidden" size={14} /></div>
                <div className="px-4 py-2.5 rounded-xl border bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-center w-full md:w-auto">
                  <div className="text-xs font-bold font-mono tracking-tight">{activeFlow.nodes[3].name}</div>
                  <div className="text-[10px] text-neutral-400 mt-0.5">{activeFlow.nodes[3].label}</div>
                </div>
                <div className="text-neutral-300 dark:text-neutral-700"><ArrowRight className="hidden md:inline" size={14} /><ArrowDown className="md:hidden" size={14} /></div>
                <div className="px-4 py-2.5 rounded-xl border bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 font-semibold text-center w-full md:w-auto">
                  <div className="text-xs font-bold font-mono tracking-tight">{activeFlow.nodes[4].name}</div>
                  <div className="text-[10px] text-neutral-400 mt-0.5">{activeFlow.nodes[4].label}</div>
                </div>
              </div>
            ) : (
              activeFlow.nodes.map((node, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto text-center md:text-left">
                  <div className={`px-4 py-2.5 rounded-xl border transition-all w-48 md:w-auto min-w-[130px] mx-auto md:mx-0 ${
                    node.isEndpoint 
                    ? "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 font-semibold"
                    : "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-indigo-500/40"
                  }`}>
                    <div className="text-xs font-bold font-mono tracking-tight">{node.name}</div>
                    <div className="text-[10px] text-neutral-400 dark:text-neutral-500 mt-0.5 whitespace-nowrap">{node.label}</div>
                  </div>

                  {index < activeFlow.nodes.length - 1 && (
                    <div className="text-neutral-300 dark:text-neutral-700 py-0.5 md:py-0">
                      <span className="hidden md:inline"><ArrowRight size={14} /></span>
                      <span className="inline md:hidden"><ArrowDown size={14} /></span>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        {/* UPGRADED CONTROL PANEL: MULTI-SELECT VISUAL TAG FILTER BOARD */}
        <div className="max-w-5xl mx-auto mb-8 space-y-5">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
            <input
              type="text"
              placeholder="Search tools, platforms, frameworks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {/* Master Toggle Controller */}
            <button
              onClick={() => setSelectedCategories([])}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all transform active:scale-95 ${
                selectedCategories.length === 0
                  ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 shadow-sm"
                  : "bg-white border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800"
              }`}
            >
              All Engine Elements
            </button>
            
            {/* Iterative Categorical Filter Stream */}
            {categories.map((cat) => {
              const isSelected = selectedCategories.includes(cat.id);
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryToggle(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-2 transform active:scale-95 duration-200 ${
                    isSelected
                      ? "bg-indigo-600 border border-indigo-700 text-white shadow-sm pr-2"
                      : "bg-white border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:border-neutral-300"
                  }`}
                >
                  {!isSelected && cat.icon}
                  <span>{cat.title}</span>
                  {isSelected && (
                    <span className="p-0.5 rounded-full bg-indigo-500 hover:bg-indigo-700 text-white transition-colors duration-150">
                      <X size={10} className="stroke-[3]" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 pt-1">
            <SlidersHorizontal size={14} />
            <span>Filtering {filteredCategories.reduce((acc, c) => acc + c.skills.length, 0)} Total Technologies</span>
          </div>
        </div>

        {/* Static Content Display Layer with Hardware Accelerated Slide Overlays */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-5xl mx-auto">
          {filteredCategories.map((cat) => {
            const isExpanded = expandedCategories[cat.id] || searchQuery.length > 0;
            const visibleSkills = isExpanded ? cat.skills : cat.skills.slice(0, 4);
            const hasMore = cat.skills.length > 4;

            return (
              <div
                key={cat.id}
                className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900/60 transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-sm"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800/60 pb-3">
                    <div className="flex items-center gap-2">
                      {cat.icon}
                      <h4 className="font-semibold text-sm tracking-wide text-neutral-800 dark:text-neutral-200">{cat.title}</h4>
                    </div>
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                      {cat.skills.length} Technologies
                    </span>
                  </div>

                  <div className="space-y-2">
                    {visibleSkills.map((skill) => (
                      <div
                        key={skill.name}
                        onClick={() => setSelectedSkill(skill)}
                        className={`group/chip relative flex items-center justify-between h-9 px-3 rounded-xl border overflow-hidden cursor-pointer transition-all ${
                          skill.isTop 
                          ? "bg-indigo-50/30 dark:bg-indigo-950/10 border-indigo-100 dark:border-indigo-900/40" 
                          : "bg-neutral-50 dark:bg-neutral-900/80 border-neutral-100 dark:border-neutral-800/40"
                        }`}
                      >
                        <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300 group-hover/chip:text-indigo-600 dark:group-hover/chip:text-indigo-400 transition-colors flex items-center gap-1.5 z-10">
                          {skill.isTop && <Star size={12} className="fill-amber-400 text-amber-400 shrink-0" />}
                          {skill.name}
                        </span>

                        {skill.evidence && (
                          <div className="absolute inset-0 bg-neutral-900 dark:bg-neutral-100 px-3 flex items-center gap-1 translate-y-full group-hover/chip:translate-y-0 transition-transform duration-200 ease-out z-20">
                            {skill.evidence.slice(0, 2).map((point, idx) => (
                              <span 
                                key={idx} 
                                className="inline-flex items-center text-[9px] font-medium px-1.5 py-0.5 rounded bg-neutral-800 dark:bg-neutral-200 text-neutral-200 dark:text-neutral-800 tracking-tight whitespace-nowrap"
                              >
                                <CheckCircle2 size={8} className="mr-1 text-indigo-400" />
                                {point}
                              </span>
                            ))}
                            <span className="text-[8px] font-bold text-neutral-400 dark:text-neutral-500 ml-auto font-mono">🔍 INFO</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {hasMore && !searchQuery && (
                  <button
                    onClick={() => toggleCategory(cat.id)}
                    className="mt-4 pt-2 border-t border-dashed border-neutral-100 dark:border-neutral-800/80 w-full flex items-center justify-center gap-1 text-xs font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                  >
                    {isExpanded ? (
                      <>Show Less <ChevronUp size={14} /></>
                    ) : (
                      <>+{cat.skills.length - 4} More Tools <ChevronDown size={14} /></>
                    )}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 max-w-md mx-auto border border-dashed border-neutral-200 dark:border-neutral-800 rounded-2xl">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              No development systems mapped matching that filter scope.
            </p>
          </div>
        )}

        {/* Production Cross-Reference Deliverables */}
        <div id="projects-crossgrid" className="mt-20 max-w-5xl mx-auto pt-12 border-t border-neutral-200 dark:border-neutral-800">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                <Briefcase size={18} className="text-indigo-500" /> Production Ecosystem Cross-Reference
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                Select a technology or click a chip anywhere to highlight related real-world architecture deliverables.
              </p>
            </div>
            {highlightedTech && (
              <button 
                onClick={() => setHighlightedTech(null)}
                className="self-start text-xs bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900 text-indigo-600 dark:text-indigo-400 px-2.5 py-1 rounded-lg flex items-center gap-1 hover:bg-indigo-100 transition-colors"
              >
                Clear Filter: <strong className="font-semibold">{highlightedTech}</strong> <X size={12} />
              </button>
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project) => {
              const isTargeted = highlightedTech ? project.tech.includes(highlightedTech) : false;
              const hasActiveSelection = highlightedTech !== null;

              return (
                <div 
                  key={project.name} 
                  className={`p-5 rounded-2xl border transition-all duration-300 ${
                    isTargeted 
                      ? "bg-indigo-50/40 dark:bg-indigo-950/20 border-indigo-500 ring-2 ring-indigo-500/20 shadow-md transform -translate-y-0.5" 
                      : hasActiveSelection
                        ? "bg-white dark:bg-neutral-900 opacity-40 border-neutral-100 dark:border-neutral-800/60"
                        : "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700"
                  }`}
                >
                  <h4 className="font-bold text-sm text-neutral-800 dark:text-neutral-200">{project.name}</h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 line-clamp-2 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tech.map((t) => (
                      <button
                        key={t}
                        onClick={() => setHighlightedTech(t === highlightedTech ? null : t)}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded transition-all ${
                          t === highlightedTech
                            ? "bg-indigo-600 text-white"
                            : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-500"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Slide-out Insights Drawer */}
      {selectedSkill && (
        <div className="fixed inset-0 z-50 flex justify-end bg-neutral-900/40 backdrop-blur-sm">
          <div className="absolute inset-0" onClick={() => setSelectedSkill(null)} />
          <div className="relative w-full max-w-md h-full bg-white dark:bg-neutral-950 border-l border-neutral-200 dark:border-neutral-800 p-6 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-out">
            <div>
              <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Star size={16} className="text-indigo-500 fill-indigo-500" />
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-sans">{selectedSkill.name} Insights</h3>
                </div>
                <button 
                  onClick={() => setSelectedSkill(null)}
                  className="p-1 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-400 hover:text-neutral-600 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs uppercase font-semibold text-neutral-400 tracking-wider">Engineering Competency</h4>
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    <div className="bg-neutral-50 dark:bg-neutral-900/50 p-3 rounded-xl border border-neutral-100 dark:border-neutral-800/40">
                      <div className="text-[10px] text-neutral-400">Experience</div>
                      <div className="text-sm font-bold text-neutral-800 dark:text-neutral-200 mt-0.5">{selectedSkill.years || "Multi-Year Integration"}</div>
                    </div>
                    <div className="bg-neutral-50 dark:bg-neutral-900/50 p-3 rounded-xl border border-neutral-100 dark:border-neutral-800/40">
                      <div className="text-[10px] text-neutral-400">Production Deployments</div>
                      <div className="text-sm font-bold text-neutral-800 dark:text-neutral-200 mt-0.5">{selectedSkill.productionApps || "Verified Component"} Applications</div>
                    </div>
                  </div>
                </div>

                {selectedSkill.evidence && (
                  <div>
                    <h4 className="text-xs uppercase font-semibold text-neutral-400 tracking-wider mb-2">Technical Proof Points</h4>
                    <div className="space-y-2">
                      {selectedSkill.evidence.map((point, index) => (
                        <div key={index} className="flex items-start gap-2.5 p-2.5 rounded-xl border border-neutral-100 dark:border-neutral-800/40 bg-neutral-50/50 dark:bg-neutral-900/20 text-xs text-neutral-700 dark:text-neutral-300">
                          <CheckCircle2 size={14} className="text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="border-t border-neutral-100 dark:border-neutral-800 pt-4">
              <button
                onClick={() => {
                  handleTechHighlight(selectedSkill.name);
                  setSelectedSkill(null);
                }}
                className="w-full py-2.5 px-4 rounded-xl text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs shadow-sm transition-colors flex items-center justify-center gap-2"
              >
                <Briefcase size={14} /> Highlight Projects Using {selectedSkill.name}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}