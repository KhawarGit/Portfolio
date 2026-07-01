// "use client";

// import React, { useState, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   SiNextdotjs, SiReact, SiTypescript, SiNodedotjs, SiMongodb,
//   SiPostgresql, SiDocker, SiTailwindcss, SiGit, SiExpress,
//   SiNestjs, SiPrisma, SiRedis, SiMysql, SiLinux, SiCloudflare,
//   SiVercel, SiFramer
// } from "react-icons/si";

// // Strict Tree Hierarchy Data Structure
// // Strict Tree Hierarchy Data Structure with type-safe styling properties
// const treeData = {
//   categories: [
//     {
//       id: "frontend",
//       title: "Frontend Architecture",
//       color: "from-cyan-500 to-blue-500",
//       glow: "rgba(6, 182, 212, 0.2)",
//       accent: "text-cyan-500",
//       bgActive: "bg-cyan-50/5 dark:bg-cyan-950/5", // Added
//       tiers: [
//         { level: 1, name: "Fundamentals", skill: { id: "Tailwind CSS", name: "Tailwind CSS", icon: SiTailwindcss, role: "Fluid Styling", duration: "2021 — Present", projects: 22, desc: "Utility-first design system engine for rapid component building." } },
//         { level: 2, name: "Core Engine", skill: { id: "React", name: "React", icon: SiReact, role: "Core UI Runtime", duration: "2021 — Present", projects: 14, desc: "Component architecture blueprint with declarative state tracking.", unlocks: ["Next.js", "TypeScript", "Framer Motion"] } },
//         { level: 3, name: "Advanced Frameworks", skill: { id: "Next.js", name: "Next.js", icon: SiNextdotjs, role: "SSR Architecture", duration: "2022 — Present", projects: 11, desc: "Production grade Server-Side Rendering and static routing engine." } },
//         { level: 4, name: "Micro-Interactions", skill: { id: "Framer Motion", name: "Framer Motion", icon: SiFramer, role: "Premium Physics", duration: "2023 — Present", projects: 6, desc: "Fluid layout animations and orchestrations using spring mechanics." } },
//       ]
//     },
//     {
//       id: "backend",
//       title: "Backend Infrastructure",
//       color: "from-emerald-500 to-teal-500",
//       glow: "rgba(16, 185, 129, 0.2)",
//       accent: "text-emerald-500",
//       bgActive: "bg-emerald-50/5 dark:bg-emerald-950/5", // Added
//       tiers: [
//         { level: 1, name: "Fundamentals", skill: { id: "Express", name: "Express", icon: SiExpress, role: "REST Pipelines", duration: "2022 — Present", projects: 9, desc: "Minimalist server orchestration layer handling fundamental HTTP networking." } },
//         { level: 2, name: "Core Engine", skill: { id: "Node.js", name: "Node.js", icon: SiNodedotjs, role: "Runtime Core", duration: "2022 — Present", projects: 12, desc: "Event-driven, asynchronous asynchronous JavaScript execution hub.", unlocks: ["NestJS", "Prisma"] } },
//         { level: 3, name: "Type-Safe Layers", skill: { id: "TypeScript", name: "TypeScript", icon: SiTypescript, role: "Type Safety", duration: "2021 — Present", projects: 19, desc: "Strictly typed compilation superstructure integrating Frontend and Backend layers." } },
//         { level: 4, name: "Enterprise Architecture", skill: { id: "NestJS", name: "NestJS", icon: SiNestjs, role: "Enterprise Arch", duration: "2024 — Present", projects: 3, desc: "Strict, modular architecture for maintaining highly scalable servers." } },
//       ]
//     },
//     {
//       id: "database",
//       title: "Data Management",
//       color: "from-violet-500 to-indigo-500",
//       glow: "rgba(139, 92, 246, 0.2)",
//       accent: "text-violet-500",
//       bgActive: "bg-violet-50/5 dark:bg-violet-950/5", // Added
//       tiers: [
//         { level: 1, name: "Fundamentals", skill: { id: "MySQL", name: "MySQL", icon: SiMysql, role: "Legacy Queries", duration: "2021 — 2023", projects: 5, desc: "Relational schema blueprints and basic data normalizations." } },
//         { level: 2, name: "Core Engine", skill: { id: "PostgreSQL", name: "PostgreSQL", icon: SiPostgresql, role: "Relational Hub", duration: "2022 — Present", projects: 10, desc: "Primary transactional integrity and complex data model pooling." } },
//         { level: 3, name: "Data Mapping (ORM)", skill: { id: "Prisma", name: "Prisma", icon: SiPrisma, role: "ORM Layer", duration: "2023 — Present", projects: 8, desc: "Type-safe database mapping schema acting as a direct node broker." } },
//         { level: 4, name: "Caching & Document", skill: { id: "MongoDB", name: "MongoDB", icon: SiMongodb, role: "Document Store", duration: "2021 — Present", projects: 13, desc: "NoSQL document persistence layer alongside Redis caching implementations." } },
//       ]
//     },
//     {
//       id: "devops",
//       title: "DevOps & Deployment",
//       color: "from-amber-500 to-orange-500",
//       glow: "rgba(245, 158, 11, 0.2)",
//       accent: "text-amber-500",
//       bgActive: "bg-amber-50/5 dark:bg-amber-950/5", // Added
//       tiers: [
//         { level: 1, name: "Fundamentals", skill: { id: "Git", name: "Git", icon: SiGit, role: "VCS Standard", duration: "2020 — Present", projects: 40, desc: "Distributed atomic source branching architectures." } },
//         { level: 2, name: "Core Engine", skill: { id: "Docker", name: "Docker", icon: SiDocker, role: "Containerization", duration: "2023 — Present", projects: 7, desc: "Isolating execution runtimes inside reproducible sandboxed engines.", unlocks: ["AWS", "Vercel"] } },
//         { level: 3, name: "Infrastructure Systems", skill: { id: "Linux", name: "Linux", icon: SiLinux, role: "Kernel Operations", duration: "2022 — Present", projects: 15, desc: "POSIX shells management and virtualization kernel environments." } },
//         { level: 4, name: "Edge & Delivery", skill: { id: "Vercel", name: "Vercel", icon: SiVercel, role: "Edge Delivery", duration: "2022 — Present", projects: 18, desc: "Global CDN distribution networks hooked with Cloudflare proxy pipelines." } },
//       ]
//     }
//   ]
// };

// export default function SkillTreePage() {
//   const [selectedSkill, setSelectedSkill] = useState<any>(treeData.categories[0].tiers[1].skill);
//   // Track "unlocked" nodes for gamified interactivity
//   const [unlockedSkills, setUnlockedSkills] = useState<string[]>(["Tailwind CSS", "React", "Express", "Node.js", "Git"]);

//   const toggleUnlock = (id: string) => {
//     setUnlockedSkills(prev => 
//       prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
//     );
//   };

//   return (
//     <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans antialiased relative selection:bg-indigo-500/30 overflow-x-hidden">
      
//       {/* Return Button Anchor */}
//       <div className="absolute top-6 left-6 z-50">
//         <a 
//           href="#skills" 
//           className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 shadow-sm transition-all"
//         >
//           ← Return to Architecture View
//         </a>
//       </div>

//       <div className="max-w-[1500px] mx-auto px-4 pt-24 pb-16 grid grid-cols-1 xl:grid-cols-12 gap-8 items-start relative z-10">
        
//         {/* Left Side: Modular Skill Tree System */}
//         <div className="xl:col-span-8 bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800/80 rounded-3xl p-6 relative overflow-x-auto min-w-full backdrop-blur-sm shadow-sm">
          
//           {/* Header Block */}
//           <div className="mb-10 max-w-xl">
//             <span className="text-[10px] tracking-widest font-mono text-indigo-500 dark:text-indigo-400 font-bold uppercase block mb-1">
//               Interactive Blueprint
//             </span>
//             <h1 className="text-2xl font-bold tracking-tight">Tech Stack Progression Tree</h1>
//             <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono mt-1">
//               Click skill nodes to select and view metadata. Toggle node locks to map structural prerequisites.
//             </p>
//           </div>

//           {/* Tree Columns Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative min-w-[800px]">
//             {treeData.categories.map((cat) => (
//               <div key={cat.id} className="flex flex-col gap-8 relative z-10">
                
//                 {/* Branch Column Label Header */}
//                 <div className="pb-3 border-b border-neutral-100 dark:border-neutral-800">
//                   <h3 className="text-xs font-bold font-mono tracking-tight uppercase text-neutral-800 dark:text-neutral-300">
//                     {cat.title}
//                   </h3>
//                 </div>

//                 {/* Vertical Progression Tiers inside this Column */}
//                 <div className="flex flex-col gap-10 relative">
//                   {cat.tiers.map((tier) => {
//                     const skill = tier.skill;
//                     const isSelected = selectedSkill?.id === skill.id;
//                     const isUnlocked = unlockedSkills.includes(skill.id);

//                     return (
//                       <div key={skill.id} className="relative group">
                        
//                         {/* Connecting Line Placeholder behind nodes */}
//                         {tier.level < cat.tiers.length && (
//                           <div className={`absolute top-full left-1/2 -translate-x-1/2 h-10 w-[1px] ${isUnlocked ? 'bg-indigo-500/40 dark:bg-indigo-400/30' : 'bg-neutral-200 dark:bg-neutral-800'} z-0`} />
//                         )}

//                         {/* Interactive Node Wrapper */}
//                         <motion.div
//                           whileHover={{ y: -2 }}
//                           onClick={() => setSelectedSkill(skill)}
//                           className={`relative z-10 p-4 rounded-2xl border cursor-pointer transition-all duration-300 select-none ${
//                             isSelected
//                               ? `bg-gradient-to-b ${cat.bgActive || 'bg-white dark:bg-neutral-900'} border-indigo-500 dark:border-indigo-400 shadow-md ring-1 ring-indigo-500/20`
//                               : isUnlocked
//                               ? "bg-neutral-50/80 border-neutral-300 dark:bg-neutral-900/60 dark:border-neutral-700 text-neutral-900 dark:text-white shadow-sm"
//                               : "bg-neutral-100/40 border-neutral-200 dark:bg-neutral-950/20 dark:border-neutral-800/80 text-neutral-400 dark:text-neutral-600"
//                           }`}
//                         >
//                           <div className="flex items-center gap-3">
//                             {/* Icon Frame */}
//                             <div className={`p-2.5 rounded-xl border font-bold text-lg transition-all ${
//                               isUnlocked 
//                                 ? `${cat.accent} bg-white dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800` 
//                                 : 'bg-neutral-100 dark:bg-neutral-900 border-transparent'
//                             }`}>
//                               <skill.icon />
//                             </div>

//                             {/* Node Identity Meta */}
//                             <div className="flex-1 min-w-0">
//                               <div className="flex items-center justify-between gap-1">
//                                 <h4 className="text-xs font-bold truncate font-mono tracking-tight uppercase">
//                                   {skill.name}
//                                 </h4>
//                                 <button
//                                   onClick={(e) => {
//                                     e.stopPropagation();
//                                     toggleUnlock(skill.id);
//                                   }}
//                                   className={`text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded border transition-colors ${
//                                     isUnlocked 
//                                       ? 'text-emerald-600 border-emerald-500/20 bg-emerald-50/50 dark:text-emerald-400' 
//                                       : 'text-neutral-400 border-neutral-300 dark:border-neutral-700'
//                                   }`}
//                                 >
//                                   {isUnlocked ? "ACTIVE" : "LOCKED"}
//                                 </button>
//                               </div>
//                               <p className="text-[10px] text-neutral-400 dark:text-neutral-500 font-mono truncate mt-0.5">
//                                 {skill.role}
//                               </p>
//                             </div>
//                           </div>
//                         </motion.div>
//                       </div>
//                     );
//                   })}
//                 </div>

//               </div>
//             ))}
//           </div>

//         </div>

//         {/* Right Side: Skill Node Metadata Inspector Card */}
//         <div className="xl:col-span-4 lg:sticky lg:top-24 z-30">
//           <AnimatePresence mode="wait">
//             {selectedSkill ? (
//               <motion.div
//                 key={selectedSkill.id}
//                 initial={{ opacity: 0, x: 15 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -15 }}
//                 className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-3xl p-6 shadow-xl relative overflow-hidden"
//               >
//                 {/* Node Top Banner Identification */}
//                 <div className="flex items-center gap-4 border-b border-neutral-100 dark:border-neutral-800 pb-5 mb-5">
//                   <div className="text-3xl text-indigo-500 dark:text-indigo-400 p-3 bg-neutral-50 dark:bg-neutral-950 rounded-2xl border border-neutral-200/60 dark:border-neutral-800/80">
//                     <selectedSkill.icon />
//                   </div>
//                   <div>
//                     <span className="text-[9px] font-mono tracking-widest text-neutral-400 uppercase block">
//                       Node Spec Module
//                     </span>
//                     <h2 className="text-lg font-bold font-mono text-neutral-900 dark:text-white uppercase tracking-tight">
//                       {selectedSkill.name}
//                     </h2>
//                     <p className="text-xs text-indigo-500 dark:text-indigo-400 font-mono">
//                       {selectedSkill.role}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Narrative Description Segment */}
//                 <div className="mb-6">
//                   <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 block uppercase tracking-wider mb-1.5">
//                     Operational Protocol
//                   </span>
//                   <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed bg-neutral-50 dark:bg-neutral-950 p-3 rounded-xl border border-neutral-100 dark:border-neutral-800/60">
//                     {selectedSkill.desc}
//                   </p>
//                 </div>

//                 {/* Strict Analytics Specs Layout */}
//                 <div className="space-y-4 font-mono text-xs border-t border-neutral-100 dark:border-neutral-800 pt-5">
//                   <div className="flex justify-between items-center">
//                     <span className="text-neutral-400 dark:text-neutral-500 text-[10px] uppercase tracking-wider">Experience Lifecycle</span>
//                     <span className="font-semibold text-neutral-800 dark:text-neutral-200">{selectedSkill.duration}</span>
//                   </div>

//                   <div className="flex justify-between items-center">
//                     <span className="text-neutral-400 dark:text-neutral-500 text-[10px] uppercase tracking-wider">Production Integrations</span>
//                     <span className="font-semibold text-neutral-800 dark:text-neutral-200">● {selectedSkill.projects} Core Systems Deployed</span>
//                   </div>

//                   {/* Forward Mapping Node Pipeline dependencies */}
//                   {selectedSkill.unlocks && (
//                     <div className="pt-2">
//                       <span className="text-neutral-400 dark:text-neutral-500 text-[10px] block uppercase tracking-wider mb-2">
//                         Direct Downstream Links
//                       </span>
//                       <div className="flex flex-wrap gap-1.5">
//                         {selectedSkill.unlocks.map((unl: string) => (
//                           <span 
//                             key={unl}
//                             className="text-[10px] font-mono bg-indigo-50/50 dark:bg-indigo-950/20 px-2.5 py-1 rounded-lg border border-indigo-100 dark:border-indigo-900/50 text-indigo-600 dark:text-indigo-400 font-medium"
//                           >
//                             ✦ {unl}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>

//               </motion.div>
//             ) : (
//               <div className="border border-dashed border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 text-center font-mono text-xs text-neutral-400 dark:text-neutral-500">
//                 Awaiting node blueprint mapping stream. Click an infrastructure block to execute node inspect telemetry.
//               </div>
//             )}
//           </AnimatePresence>
//         </div>

//       </div>
//     </main>
//   );
// }






// "use client";

// import React, { useState, useMemo, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   SiNextdotjs, SiReact, SiTypescript, SiNodedotjs, SiMongodb,
//   SiPostgresql, SiDocker, SiTailwindcss, SiGit, SiExpress,
//   SiNestjs, SiPrisma, SiRedis, SiMysql, SiLinux, SiCloudflare,
//   SiVercel, SiFramer
// } from "react-icons/si";

// /* ==========================================================================
//    TYPE DEFINITIONS & DATA ARCHITECTURE
//    ========================================================================== */

// interface Project {
//   title: string;
//   url: string;
//   type: string;
//   metrics: string;
// }

// interface Skill {
//   id: string;
//   name: string;
//   icon: React.ComponentType<any>;
//   role: string;
//   recruiterRole: string; // Simplified for Recruiter View
//   duration: string;
//   yearAdded: number;
//   percentage: number;
//   status: "Production Ready" | "Advanced" | "Learning";
//   desc: string;
//   unlocks: string[]; // Downstream dependencies
//   related: string[];
//   evidence: string[];
//   gitHubStats: { repos: number; commits: number };
//   projects: Project[];
// }

// interface Category {
//   id: string;
//   title: string;
//   color: string;
//   glow: string;
//   accent: string;
//   bgActive: string;
//   skills: Skill[];
// }

// const treeData: { categories: Category[] } = {
//   categories: [
//     {
//       id: "frontend",
//       title: "Frontend Architecture",
//       color: "from-cyan-500 to-blue-500",
//       glow: "rgba(6, 182, 212, 0.2)",
//       accent: "text-cyan-500",
//       bgActive: "bg-cyan-50/5 dark:bg-cyan-950/5",
//       skills: [
//         {
//           id: "Tailwind CSS",
//           name: "Tailwind CSS",
//           icon: SiTailwindcss,
//           role: "Fluid Design Systems",
//           recruiterRole: "User Interface Design",
//           duration: "2021 — Present",
//           yearAdded: 2021,
//           percentage: 98,
//           status: "Production Ready",
//           desc: "Utility-first CSS engine optimized for rapid component construction and strict atomic design system tokens.",
//           unlocks: ["React"],
//           related: ["React", "Next.js", "Framer Motion"],
//           evidence: ["Engineered complete corporate UI kit", "99+ Lighthouse design scores across portfolios", "Fluid dynamic themes support implementation"],
//           gitHubStats: { repos: 22, commits: 840 },
//           projects: [
//             { title: "Portfolio Ecosystem", url: "#", type: "Personal", metrics: "Fluid themes & sub-pixel layouts" },
//             { title: "SaaS Analytics Dashboard", url: "#", type: "Commercial", metrics: "Strict responsive breakpoint matrix" }
//           ]
//         },
//         {
//           id: "React",
//           name: "React",
//           icon: SiReact,
//           role: "Core UI Engine",
//           recruiterRole: "Web Applications Core",
//           duration: "2021 — Present",
//           yearAdded: 2021,
//           percentage: 95,
//           status: "Production Ready",
//           desc: "Component architecture blueprint utilizing declarative state machines and optimal re-rendering cycles.",
//           unlocks: ["Next.js", "TypeScript", "Framer Motion"],
//           related: ["Next.js", "TypeScript", "Tailwind CSS"],
//           evidence: ["Custom hook architectures for global context optimization", "Virtual list rendering managing 10k+ dynamic DOM elements", "Concurrent rendering feature pipelines implementation"],
//           gitHubStats: { repos: 16, commits: 1450 },
//           projects: [
//             { title: "AI Prompt Engineering Studio", url: "#", type: "SaaS", metrics: "State machine handling 40+ dynamic prompts" },
//             { title: "LMS Interactive App", url: "#", type: "EdTech", metrics: "Realtime cross-component data feeds" }
//           ]
//         },
//         {
//           id: "Next.js",
//           name: "Next.js",
//           icon: SiNextdotjs,
//           role: "SSR Infrastructure",
//           recruiterRole: "Search Optimized Apps (SEO)",
//           duration: "2022 — Present",
//           yearAdded: 2022,
//           percentage: 92,
//           status: "Production Ready",
//           desc: "Production-grade frameworks managing Server-Side Rendering, Static Site Generation, and server actions routing structures.",
//           unlocks: ["Vercel"],
//           related: ["React", "TypeScript", "Vercel"],
//           evidence: ["Migrated legacy SPA to Next.js reducing FCP by 1.4s", "Implemented incremental static regeneration for 1000+ data nodes", "Configured edge middleware interceptors for geolocation configurations"],
//           gitHubStats: { repos: 12, commits: 910 },
//           projects: [
//             { title: "E-Commerce Hyper-Engine", url: "#", type: "SaaS", metrics: "0.2s FCP, 100% SEO scores" },
//             { title: "Enterprise Knowledge System", url: "#", type: "Commercial", metrics: "ISR pipeline revalidating sub-minute layers" }
//           ]
//         },
//         {
//           id: "Framer Motion",
//           name: "Framer Motion",
//           icon: SiFramer,
//           role: "Premium Physics Engines",
//           recruiterRole: "Interactive Animations",
//           duration: "2023 — Present",
//           yearAdded: 2023,
//           percentage: 85,
//           status: "Advanced",
//           desc: "Declarative animation engine utilizing spring physical rules and micro-interaction orchestration grids.",
//           unlocks: [],
//           related: ["React", "Tailwind CSS"],
//           evidence: ["Orchestrated multi-step layout transitions without DOM jank", "Built customized drag-and-drop node graph physics maps", "Implemented responsive gesture triggers and exit state handlers"],
//           gitHubStats: { repos: 5, commits: 210 },
//           projects: [
//             { title: "Interactive Topology Galaxy", url: "#", type: "Portfolio Module", metrics: "Spring-backed vector line renders" }
//           ]
//         }
//       ]
//     },
//     {
//       id: "backend",
//       title: "Backend Infrastructure",
//       color: "from-emerald-500 to-teal-500",
//       glow: "rgba(16, 185, 129, 0.2)",
//       accent: "text-emerald-500",
//       bgActive: "bg-emerald-50/5 dark:bg-emerald-950/5",
//       skills: [
//         {
//           id: "Express",
//           name: "Express",
//           icon: SiExpress,
//           role: "REST Route Organizers",
//           recruiterRole: "Server APIs and Data Route",
//           duration: "2022 — Present",
//           yearAdded: 2022,
//           percentage: 90,
//           status: "Production Ready",
//           desc: "Minimalist, high-throughput routing pipelines handling structural HTTP/HTTPS network handshakes.",
//           unlocks: ["Node.js"],
//           related: ["Node.js", "MongoDB"],
//           evidence: ["Designed multi-tier error intercepting server middleware structures", "Integrated rate-limiting proxies preventing scrapers and brute attacks", "Built standardized REST specs delivering robust JSON contracts"],
//           gitHubStats: { repos: 11, commits: 490 },
//           projects: [
//             { title: "Microservice Webhooks Aggregator", url: "#", type: "Internal Ops", metrics: "Processes 200 reqs/sec smoothly" }
//           ]
//         },
//         {
//           id: "Node.js",
//           name: "Node.js",
//           icon: SiNodedotjs,
//           role: "Runtime Kernel",
//           recruiterRole: "Backend Engineering",
//           duration: "2022 — Present",
//           yearAdded: 2022,
//           percentage: 91,
//           status: "Production Ready",
//           desc: "Event-driven, non-blocking asynchronous runtime environments handling heavy structural event loops.",
//           unlocks: ["NestJS", "TypeScript"],
//           related: ["Express", "TypeScript", "NestJS", "Prisma"],
//           evidence: ["Engineered process streams reading gigabyte logs safely", "Configured cluster module instances optimizing multi-core threads", "Reduced worker loop block risks via optimized promise chaining"],
//           gitHubStats: { repos: 14, commits: 1100 },
//           projects: [
//             { title: "Real-time Notification Node Hub", url: "#", type: "Utility Service", metrics: "Websocket clusters balancing 5k concurrent pipelines" }
//           ]
//         },
//         {
//           id: "TypeScript",
//           name: "TypeScript",
//           icon: SiTypescript,
//           role: "Strict Compilation",
//           recruiterRole: "Type-Safe Error Prevention",
//           duration: "2021 — Present",
//           yearAdded: 2021,
//           percentage: 94,
//           status: "Production Ready",
//           desc: "Static compilation superstructure linking backend schemas and frontend states natively.",
//           unlocks: ["NestJS"],
//           related: ["React", "Next.js", "Node.js", "Prisma"],
//           evidence: ["Developed end-to-end inferenced API definitions via Zod type maps", "Enforced zero 'any' fallback rules across enterprise monorepos", "Utilized sophisticated conditional mapped variants handling abstract patterns"],
//           gitHubStats: { repos: 24, commits: 1980 },
//           projects: [
//             { title: "Full-Stack B2B Portal", url: "#", type: "Enterprise", metrics: "Zero type-mismatch compilation drops" }
//           ]
//         },
//         {
//           id: "NestJS",
//           name: "NestJS",
//           icon: SiNestjs,
//           role: "Enterprise Architecture",
//           recruiterRole: "Scalable Enterprise Servers",
//           duration: "2024 — Present",
//           yearAdded: 2024,
//           percentage: 78,
//           status: "Advanced",
//           desc: "Strictly typed architectural structures using Dependency Injection patterns for building testable backends.",
//           unlocks: [],
//           related: ["Node.js", "TypeScript", "Prisma"],
//           evidence: ["Refactored abstract microservices using decoupled modules configurations", "Configured automated validation interceptors for input data parsing", "Wrote comprehensive unit mocks testing nested provider classes controllers"],
//           gitHubStats: { repos: 4, commits: 180 },
//           projects: [
//             { title: "FinTech Transaction Broker", url: "#", type: "Commercial", metrics: "Clean Domain-Driven design patterns" }
//           ]
//         }
//       ]
//     },
//     {
//       id: "database",
//       title: "Data Systems",
//       color: "from-violet-500 to-indigo-500",
//       glow: "rgba(139, 92, 246, 0.2)",
//       accent: "text-violet-500",
//       bgActive: "bg-violet-50/5 dark:bg-violet-950/5",
//       skills: [
//         {
//           id: "MySQL",
//           name: "MySQL",
//           icon: SiMysql,
//           role: "Relational Queries",
//           recruiterRole: "Standard Databases",
//           duration: "2021 — 2023",
//           yearAdded: 2021,
//           percentage: 80,
//           status: "Advanced",
//           desc: "Standard transactional schemas, relational foreign constraints management, and fundamental indexing normalization arrays.",
//           unlocks: ["PostgreSQL"],
//           related: ["Node.js", "PostgreSQL"],
//           evidence: ["Normalized unstructured tabular spreadsheets into clean 3NF database spaces", "Wrote complex join procedures syncing structural analytical readouts", "Configured custom connection pools balancing query drop spikes"],
//           gitHubStats: { repos: 6, commits: 150 },
//           projects: [
//             { title: "Legacy HR Administration Base", url: "#", type: "Internal Utility", metrics: "Acid compliant normalizations" }
//           ]
//         },
//         {
//           id: "PostgreSQL",
//           name: "PostgreSQL",
//           icon: SiPostgresql,
//           role: "Relational Hubs",
//           recruiterRole: "Secure Data Warehousing",
//           duration: "2022 — Present",
//           yearAdded: 2022,
//           percentage: 92,
//           status: "Production Ready",
//           desc: "Primary highly available database arrays, handling complex performance query isolation levels and indices profiling.",
//           unlocks: ["Prisma"],
//           related: ["Prisma", "Node.js", "Redis"],
//           evidence: ["Optimized slow inner joins reducing database query responses from 800ms down to 34ms", "Configured partial indices mapping highly accessed text row search vectors", "Maintained transaction triggers verifying safe rollbacks during write drops"],
//           gitHubStats: { repos: 11, commits: 420 },
//           projects: [
//             { title: "SaaS Multi-tenant Store", url: "#", type: "Commercial", metrics: "Row Level Security schema isolation" }
//           ]
//         },
//         {
//           id: "Prisma",
//           name: "Prisma",
//           icon: SiPrisma,
//           role: "Type-Safe ORM Layer",
//           recruiterRole: "Database Communications",
//           duration: "2023 — Present",
//           yearAdded: 2023,
//           percentage: 90,
//           status: "Production Ready",
//           desc: "Type-safe database abstraction mappings, executing migration pathways seamlessly without raw SQL leak vulnerabilities.",
//           unlocks: ["MongoDB"],
//           related: ["Node.js", "PostgreSQL", "TypeScript"],
//           evidence: ["Designed structural schema files containing strictly typed relational maps", "Handled batch query mutations securely eliminating cross injection vectors", "Managed seamless automated environment migrations across production instances"],
//           gitHubStats: { repos: 9, commits: 330 },
//           projects: [
//             { title: "SaaS Subscriptions Hub", url: "#", type: "Commercial", metrics: "Direct compile types sync" }
//           ]
//         },
//         {
//           id: "MongoDB",
//           name: "MongoDB",
//           icon: SiMongodb,
//           role: "Document Storage",
//           recruiterRole: "Flexible NoSQL Storage",
//           duration: "2021 — Present",
//           yearAdded: 2021,
//           percentage: 88,
//           status: "Production Ready",
//           desc: "NoSQL document storage clusters, maximizing dynamic variable object mapping schemas and aggregation setups.",
//           unlocks: [],
//           related: ["Express", "Node.js", "Redis"],
//           evidence: ["Architected compound pipeline aggregations handling data grouping layers", "Configured geographical queries tracing coordinate bounding spaces", "Optimized index parameters matching nested schema object search lookups"],
//           gitHubStats: { repos: 15, commits: 510 },
//           projects: [
//             { title: "Real-time Location Engine", url: "#", type: "Commercial", metrics: "Sub-second proximity updates" }
//           ]
//         }
//       ]
//     },
//     {
//       id: "devops",
//       title: "DevOps & Pipelines",
//       color: "from-amber-500 to-orange-500",
//       glow: "rgba(245, 158, 11, 0.2)",
//       accent: "text-amber-500",
//       bgActive: "bg-amber-50/5 dark:bg-amber-950/5",
//       skills: [
//         {
//           id: "Git",
//           name: "Git",
//           icon: SiGit,
//           role: "Atomic Versioning",
//           recruiterRole: "Source Control & Team Sync",
//           duration: "2020 — Present",
//           yearAdded: 2020,
//           percentage: 96,
//           status: "Production Ready",
//           desc: "Distributed source branches lifecycle strategies, handling strict rebase flow paths and security signing hooks.",
//           unlocks: ["Docker"],
//           related: ["Vercel", "Docker"],
//           evidence: ["Implemented customized linting and staging gates via Husky pre-commits", "Resolved highly critical branch conflicts across complex commercial forks", "Enforced signed commit pipelines tracking verifiable software supply trees"],
//           gitHubStats: { repos: 42, commits: 3400 },
//           projects: [
//             { title: "Open Source UI Primitives", url: "#", type: "OSS", metrics: "Over 40 structured commits tree branches" }
//           ]
//         },
//         {
//           id: "Docker",
//           name: "Docker",
//           icon: SiDocker,
//           role: "Container Runtimes",
//           recruiterRole: "Cloud Environment Packaging",
//           duration: "2023 — Present",
//           yearAdded: 2023,
//           percentage: 87,
//           status: "Production Ready",
//           desc: "Packaging multi-stage, reproducible micro-container images isolating runtime systems securely.",
//           unlocks: ["Linux"],
//           related: ["Linux", "Vercel"],
//           evidence: ["Reduced image footprint sizing allocations from 1.2GB down to 84MB via Alpine builds", "Composed layered networking parameters joining backend-database spaces", "Configured health check boundaries shielding systems from container lockup cascades"],
//           gitHubStats: { repos: 8, commits: 260 },
//           projects: [
//             { title: "Microservices Deployment Container Kit", url: "#", type: "DevOps Tooling", metrics: "Multi-stage cross compiled builds" }
//           ]
//         },
//         {
//           id: "Linux",
//           name: "Linux",
//           icon: SiLinux,
//           role: "POSIX Kernel Management",
//           recruiterRole: "Cloud Server System Control",
//           duration: "2022 — Present",
//           yearAdded: 2022,
//           percentage: 84,
//           status: "Advanced",
//           desc: "POSIX bash administration, configuring daemon systems, system access permissions, and cloud virtualized spaces.",
//           unlocks: ["Vercel"],
//           related: ["Docker"],
//           evidence: ["Wrote automation scripts scheduling safe encrypted cron backups", "Configured systemd services managing active platform recovery tasks", "Secured network boundaries utilizing strict SSH keys and firewall routing adjustments"],
//           gitHubStats: { repos: 16, commits: 390 },
//           projects: [
//             { title: "Self-hosted Server Rig Setup", url: "#", type: "Infrastructure", metrics: "99.9% host system uptime statistics" }
//           ]
//         },
//         {
//           id: "Vercel",
//           name: "Vercel",
//           icon: SiVercel,
//           role: "Edge Matrix Platforms",
//           recruiterRole: "Fast Website Delivery (Cloud)",
//           duration: "2022 — Present",
//           yearAdded: 2022,
//           percentage: 93,
//           status: "Production Ready",
//           desc: "Global CDN delivery deployments, managing smart edge analytics and zero-downtime serverless integrations.",
//           unlocks: [],
//           related: ["Next.js", "Git"],
//           evidence: ["Configured preview environment pipelines connected to active pull channels", "Optimized cache header controls reducing continuous server invocation costs", "Deployed serverless routing hooks executing sub-millisecond edge tasks"],
//           gitHubStats: { repos: 20, commits: 540 },
//           projects: [
//             { title: "Global Analytics Edge Dashboard", url: "#", type: "Commercial", metrics: "Distributed instant fallback endpoints" }
//           ]
//         }
//       ]
//     }
//   ]
// };

// const achievementBadges = [
//   { icon: "🏆", title: "Full Stack Master", desc: "Production capabilities across UI frameworks and data backends" },
//   { icon: "⚡", title: "Performance Tuning", desc: "Proven track record cutting database queries and interface render bottlenecks" },
//   { icon: "☁", title: "Cloud Automation", desc: "Automated container builds, version loops, and global server architectures ready" }
// ];

// const allSkillsFlat = treeData.categories.flatMap(c => c.skills);

// /* ==========================================================================
//    MAIN COMPONENT IMPLEMENTATION
//    ========================================================================== */
// export default function SkillTreePage() {
//   // Navigation / Filter States
//   const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>("all");
//   const [activeStatusFilter, setActiveStatusFilter] = useState<string>("all");
//   const [searchQuery, setSearchQuery] = useState<string>("");
//   const [currentYearTimeline, setCurrentYearTimeline] = useState<number>(2024);
  
//   // Custom View States
//   const [isRecruiterMode, setIsRecruiterMode] = useState<boolean>(false);
//   const [selectedSkillId, setSelectedSkillId] = useState<string>("React");
//   const [compareSkillId, setCompareSkillId] = useState<string | null>(null);
//   const [hoveredSkillId, setHoveredSkillId] = useState<string | null>(null);

//   // Core System Metrics
//   const totalSkillsCount = allSkillsFlat.length;
//   const masteredSkillsCount = allSkillsFlat.filter(s => s.percentage >= 90).length;

//   // Track user interactive clicks on this session to gamify
//   const [visitedNodes, setVisitedNodes] = useState<string[]>(["React"]);

//   const selectedSkill = useMemo(() => {
//     return allSkillsFlat.find(s => s.id === selectedSkillId) || allSkillsFlat[0];
//   }, [selectedSkillId]);

//   const compareSkill = useMemo(() => {
//     return compareSkillId ? allSkillsFlat.find(s => s.id === compareSkillId) : null;
//   }, [compareSkillId]);

//   // Compute Active Dependency Chain for Highlight
//   const activeDependencyChain = useMemo(() => {
//     if (!hoveredSkillId) return [];
//     const chain: string[] = [hoveredSkillId];
//     const triggerSkill = allSkillsFlat.find(s => s.id === hoveredSkillId);
//     if (triggerSkill && triggerSkill.unlocks) {
//       chain.push(...triggerSkill.unlocks);
//     }
//     // Find who unlocks this item
//     allSkillsFlat.forEach(s => {
//       if (s.unlocks.includes(hoveredSkillId)) {
//         chain.push(s.id);
//       }
//     });
//     return chain;
//   }, [hoveredSkillId]);

//   // Combined Search and Filter Processing Logic
//   const processedTreeData = useMemo(() => {
//     return treeData.categories.map(category => {
//       // Check if category passes main pillar filtering rules
//       if (activeCategoryFilter !== "all" && category.id !== activeCategoryFilter) {
//         return { ...category, skills: [] };
//       }

//       const filteredSkills = category.skills.filter(skill => {
//         // Status Matrix Filter
//         if (activeStatusFilter !== "all" && skill.status !== activeStatusFilter) return false;
        
//         // Timeline Slider Filter - Technology must exist by or before that year
//         if (skill.yearAdded > currentYearTimeline) return false;

//         // Search Query Check
//         if (searchQuery.trim() !== "") {
//           const query = searchQuery.toLowerCase();
//           const matchName = skill.name.toLowerCase().includes(query);
//           const matchRole = skill.role.toLowerCase().includes(query);
//           const matchDesc = skill.desc.toLowerCase().includes(query);
//           if (!matchName && !matchRole && !matchDesc) return false;
//         }

//         return true;
//       });

//       return { ...category, skills: filteredSkills };
//     });
//   }, [activeCategoryFilter, activeStatusFilter, searchQuery, currentYearTimeline]);

//   // Node Selection Handler tracking navigation telemetry
//   const handleSelectNode = (id: string) => {
//     setSelectedSkillId(id);
//     if (!visitedNodes.includes(id)) {
//       setVisitedNodes(prev => [...prev, id]);
//     }
//   };

//   /* ==========================================================================
//      EXPORT UTILITIES IMPLEMENTATION
//      ========================================================================== */
//   const handleCopyStack = () => {
//     const list = allSkillsFlat.map(s => `- ${s.name} (${s.status})`).join("\n");
//     navigator.clipboard.writeText(`### Production Tech Stack Bundle\n${list}`);
//     alert("Full Technology Infrastructure stack copied to clipboard!");
//   };

//   const handleDownloadPDFMock = () => {
//     alert("Generating verified structural stack layout document...\nDownload payload constructed successfully.");
//   };

//   return (
//     <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans antialiased relative selection:bg-indigo-500/30 overflow-x-hidden">
      
//       {/* BACKGROUND GRAPH LAYER MATRIX ECOSYSTEM */}
//       <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none z-0" />

//       {/* TOP FLOATING PERFORMANCE AND PROGRESSION BAR */}
//       <div className="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-950/70 backdrop-blur-xl px-6 py-3 shadow-sm flex flex-wrap items-center justify-between gap-4">
//         <div className="flex items-center gap-6">
//           <a href="#skills" className="text-xs font-mono text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors">
//             ← Return Home
//           </a>
//           <div className="h-4 w-[1px] bg-neutral-200 dark:bg-neutral-800" />
//           <div className="flex items-center gap-3 font-mono text-xs">
//             <span className="text-neutral-400">OVERALL PORTFOLIO EXPERTISE:</span>
//             <div className="w-32 bg-neutral-200 dark:bg-neutral-800 h-2 rounded-full overflow-hidden">
//               <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full w-[91%]" />
//             </div>
//             <span className="font-bold text-indigo-600 dark:text-indigo-400">91%</span>
//           </div>
//           <div className="hidden md:flex items-center gap-2 font-mono text-xs text-neutral-400">
//             <span>NODES EXPLORED:</span>
//             <span className="text-neutral-900 dark:text-white font-bold">{visitedNodes.length} / {totalSkillsCount}</span>
//           </div>
//         </div>

//         {/* CUSTOM CONTROLLER MODE MODE SWITCHER TOGGLE */}
//         <div className="flex items-center gap-2">
//           <span className="text-xs font-mono text-neutral-400 uppercase tracking-tight">Viewing Layout:</span>
//           <div className="bg-neutral-100 dark:bg-neutral-900 p-1 rounded-xl border border-neutral-200 dark:border-neutral-800 flex items-center">
//             <button
//               onClick={() => setIsRecruiterMode(false)}
//               className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${!isRecruiterMode ? "bg-white dark:bg-neutral-800 text-indigo-600 dark:text-indigo-400 font-bold shadow-sm" : "text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"}`}
//             >
//               Developer Space
//             </button>
//             <button
//               onClick={() => setIsRecruiterMode(true)}
//               className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${isRecruiterMode ? "bg-white dark:bg-neutral-800 text-indigo-600 dark:text-indigo-400 font-bold shadow-sm" : "text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"}`}
//             >
//               Recruiter Mode 👔
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-[1600px] mx-auto px-4 md:px-6 pt-10 pb-20 relative z-10 grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        
//         {/* LEFT COLUMN: INTERACTIVE FILTERS & TREE VIEW BLOCKS */}
//         <div className="xl:col-span-8 space-y-6">
          
//           {/* CONTROL MATRIX CONTROL PANEL (SEARCH, FILTERS, TIMELINE SLIDER) */}
//           <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 rounded-3xl space-y-4 shadow-sm">
//             <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
//               <div>
//                 <h1 className="text-xl font-extrabold tracking-tight font-mono uppercase text-neutral-900 dark:text-white">
//                   System Architecture Tree Blueprint
//                 </h1>
//                 <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
//                   Explore full ecosystem paths, timeline additions, verified repository metrics, and deployment code blueprints.
//                 </p>
//               </div>

//               {/* STACK EXTRACTION QUICK ACTION INTERFACES */}
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={handleCopyStack}
//                   className="px-3 py-1.5 rounded-xl border border-neutral-200 dark:border-neutral-800 text-xs font-mono hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
//                 >
//                   📁 Copy Stack
//                 </button>
//                 <button
//                   onClick={handleDownloadPDFMock}
//                   className="px-3 py-1.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-mono hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
//                 >
//                   ↓ Export Stack PDF
//                 </button>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
//               {/* Search input wire */}
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Filter by keyword (e.g. Server)..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl px-3 py-2 text-xs font-mono focus:outline-none focus:ring-1 focus:ring-indigo-500"
//                 />
//               </div>

//               {/* Category selector wire */}
//               <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
//                 {["all", "frontend", "backend", "database", "devops"].map((cat) => (
//                   <button
//                     key={cat}
//                     onClick={() => setActiveCategoryFilter(cat)}
//                     className={`px-2.5 py-1.5 rounded-lg border text-[10px] font-mono capitalize transition-all whitespace-nowrap ${activeCategoryFilter === cat ? "bg-indigo-500 border-indigo-500 text-white font-bold" : "bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:text-neutral-900"}`}
//                   >
//                     {cat === "all" ? "All Pillars" : cat}
//                   </button>
//                 ))}
//               </div>

//               {/* Status level mapping selector wire */}
//               <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
//                 {["all", "Production Ready", "Advanced", "Learning"].map((stat) => (
//                   <button
//                     key={stat}
//                     onClick={() => setActiveStatusFilter(stat)}
//                     className={`px-2.5 py-1.5 rounded-lg border text-[10px] font-mono transition-all whitespace-nowrap ${activeStatusFilter === stat ? "bg-indigo-500 border-indigo-500 text-white font-bold" : "bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:text-neutral-900"}`}
//                   >
//                     {stat === "all" ? "All Expertise" : stat}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* LIVE SYSTEM TIMELINE SLIDER STEP BAR */}
//             <div className="border-t border-neutral-100 dark:border-neutral-800 pt-4 flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono">
//               <div className="flex items-center gap-2 text-xs">
//                 <span className="text-neutral-400">TIMELINE LIFECYCLE HORIZON:</span>
//                 <span className="text-indigo-600 dark:text-indigo-400 font-bold px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
//                   {currentYearTimeline === 2024 ? "Full Stack Matrix (Present)" : `Up to ${currentYearTimeline}`}
//                 </span>
//               </div>
//               <div className="flex-1 max-w-md flex items-center gap-3">
//                 <span className="text-[10px] text-neutral-400">2020</span>
//                 <input
//                   type="range"
//                   min="2020"
//                   max="2024"
//                   step="1"
//                   value={currentYearTimeline}
//                   onChange={(e) => setCurrentYearTimeline(parseInt(e.target.value))}
//                   className="flex-1 accent-indigo-500 bg-neutral-200 dark:bg-neutral-800 h-1.5 rounded-lg appearance-none cursor-pointer"
//                 />
//                 <span className="text-[10px] text-neutral-400">2024</span>
//               </div>
//             </div>
//           </div>

//           {/* ACTIVE ACHIEVEMENT BADGES HOVER GRID BAR */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {achievementBadges.map((badge, bIdx) => (
//               <div key={bIdx} className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800/80 p-4 rounded-2xl flex items-start gap-3 group relative overflow-hidden transition-all duration-300 hover:shadow-md">
//                 <span className="text-2xl select-none">{badge.icon}</span>
//                 <div>
//                   <h4 className="text-xs font-bold font-mono text-neutral-800 dark:text-neutral-200 uppercase tracking-tight">{badge.title}</h4>
//                   <p className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-0.5 leading-snug">{badge.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* TREE COMPONENT HOUSING GRID BODY MAP */}
//           <div className="bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800/80 rounded-3xl p-6 relative overflow-x-auto shadow-sm">
            
//             {/* CENTRAL ANCHOR CONNECTOR LINE SYSTEM NODE HUB */}
//             <div className="text-center mb-8 relative">
//               <div className="inline-block px-4 py-2.5 rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-800 dark:from-white dark:to-neutral-100 text-white dark:text-neutral-900 font-mono font-bold text-xs uppercase tracking-widest relative z-10 shadow-md">
//                 ⚡ Core Full-Stack Router Engine
//               </div>
//               <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-neutral-200 dark:bg-neutral-800 -z-0" />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-w-[840px] relative">
//               {processedTreeData.map((category) => {
//                 if (category.skills.length === 0) return <div key={category.id} className="border border-dashed border-neutral-100 dark:border-neutral-900 rounded-2xl p-4 text-center text-xs font-mono text-neutral-400 opacity-40">Column Filtered</div>;
                
//                 return (
//                   <div key={category.id} className="flex flex-col gap-6 relative">
                    
//                     {/* Category Block Section Labels */}
//                     <div className="pb-2 border-b border-neutral-100 dark:border-neutral-800/60 flex items-center justify-between">
//                       <span className="text-[11px] font-bold font-mono tracking-tight uppercase text-neutral-800 dark:text-neutral-300">
//                         {category.title}
//                       </span>
//                       <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color}`} />
//                     </div>

//                     <div className="flex flex-col gap-5 relative">
//                       {category.skills.map((skill, sIdx) => {
//                         const isSelected = selectedSkillId === skill.id;
//                         const isComparing = compareSkillId === skill.id;
//                         const isInChain = activeDependencyChain.includes(skill.id);
                        
//                         // Setup level color mapping profiles
//                         const colorStatusMap = {
//                           "Production Ready": "bg-emerald-500",
//                           "Advanced": "bg-blue-500",
//                           "Learning": "bg-amber-500"
//                         };

//                         return (
//                           <div 
//                             key={skill.id} 
//                             className="relative"
//                             onMouseEnter={() => setHoveredSkillId(skill.id)}
//                             onMouseLeave={() => setHoveredSkillId(null)}
//                           >
                            
//                             {/* VERTICAL SYSTEM ANIMATED TRACK PATHWAYS LINES */}
//                             {sIdx < category.skills.length - 1 && (
//                               <div className={`absolute top-full left-7 w-[2px] h-6 z-0 transition-all duration-300 ${isInChain ? "bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]" : "bg-neutral-100 dark:bg-neutral-800"}`} />
//                             )}

//                             {/* STRUCTURAL VISUAL NODE CORE BLOCK FRAME */}
//                             <motion.div
//                               whileHover={{ y: -2 }}
//                               onClick={() => handleSelectNode(skill.id)}
//                               className={`p-3.5 rounded-2xl border cursor-pointer select-none relative z-10 transition-all duration-300 ${
//                                 isSelected 
//                                   ? `border-indigo-500 shadow-md ${category.bgActive} ring-1 ring-indigo-500/20` 
//                                   : isComparing
//                                   ? "border-purple-500 bg-purple-50/10 dark:bg-purple-950/10 shadow-sm"
//                                   : isInChain
//                                   ? "border-indigo-400 bg-neutral-50 dark:bg-neutral-900 shadow-[0_0_12px_rgba(99,102,241,0.15)]"
//                                   : "border-neutral-200 dark:border-neutral-800/80 bg-neutral-50/40 dark:bg-neutral-900/30 hover:border-neutral-300 dark:hover:border-neutral-700"
//                               }`}
//                             >
//                               <div className="flex items-center gap-3">
                                
//                                 {/* Status Glow Metric Frame Engine */}
//                                 <div className={`p-2 rounded-xl border relative transition-all duration-300 ${isSelected ? "bg-white dark:bg-neutral-950 text-indigo-500 border-neutral-200 dark:border-neutral-800 scale-110" : "bg-white dark:bg-neutral-900 border-transparent text-neutral-400"}`}>
//                                   <skill.icon className="w-4 h-4" />
//                                   <span className={`absolute -top-1 -right-1 w-2 h-2 rounded-full ${colorStatusMap[skill.status]}`} />
//                                 </div>

//                                 <div className="flex-1 min-w-0">
//                                   <div className="flex items-center justify-between gap-1">
//                                     <h4 className="text-xs font-bold font-mono truncate text-neutral-800 dark:text-neutral-200 uppercase tracking-tight">
//                                       {skill.name}
//                                     </h4>
//                                     <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 font-semibold">
//                                       {skill.percentage}%
//                                     </span>
//                                   </div>
//                                   <p className="text-[10px] text-neutral-400 dark:text-neutral-500 font-mono truncate mt-0.5">
//                                     {isRecruiterMode ? skill.recruiterRole : skill.role}
//                                   </p>
//                                 </div>

//                               </div>

//                               {/* DEEP METADATA PATH PREVIEW MINI CARD ACCORDION DISPLAY */}
//                               {isSelected && (
//                                 <div className="mt-3 pt-2.5 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-[9px] font-mono text-neutral-400">
//                                   <span>Added: {skill.yearAdded}</span>
//                                   <span className="px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400 rounded uppercase tracking-wider font-bold">ACTIVE CAPTURE</span>
//                                 </div>
//                               )}
//                             </motion.div>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* FUTURE TECHNOLOGY ORIENTED PIPELINE ROADMAP */}
//           <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 dark:from-neutral-900 dark:to-neutral-950 p-6 rounded-3xl text-white font-mono border border-neutral-800 shadow-xl">
//             <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-400 flex items-center gap-2">
//               <span>🚀 Operational R&D Pipeline Horizon</span>
//               <span className="text-[10px] bg-neutral-800 px-2 py-0.5 rounded text-neutral-400 font-normal normal-case">Continuous Growth Vector</span>
//             </h3>
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 text-xs">
//               <div className="p-3 bg-neutral-800/40 rounded-xl border border-neutral-700/50">
//                 <div className="text-[10px] text-neutral-400 font-bold uppercase">AI AGENTS WORKFLOWS</div>
//                 <div className="font-bold mt-1 text-neutral-200">LangChain & OpenAI</div>
//               </div>
//               <div className="p-3 bg-neutral-800/40 rounded-xl border border-neutral-700/50">
//                 <div className="text-[10px] text-neutral-400 font-bold uppercase">ORCHESTRATION</div>
//                 <div className="font-bold mt-1 text-neutral-200">Kubernetes Engines</div>
//               </div>
//               <div className="p-3 bg-neutral-800/40 rounded-xl border border-neutral-700/50">
//                 <div className="text-[10px] text-neutral-400 font-bold uppercase">CLOUD ENGINE RUNTIME</div>
//                 <div className="font-bold mt-1 text-neutral-200">Go Microservices</div>
//               </div>
//               <div className="p-3 bg-neutral-800/40 rounded-xl border border-neutral-700/50">
//                 <div className="text-[10px] text-neutral-400 font-bold uppercase">SYSTEM CONCURRENCY</div>
//                 <div className="font-bold mt-1 text-neutral-200">Rust Core Memory</div>
//               </div>
//             </div>
//           </div>

//         </div>

//         {/* RIGHT COLUMN: METADATA INSPECTOR MODULE / EXPERIENCE EVIDENCE HUB */}
//         <div className="xl:col-span-4 lg:sticky lg:top-20 z-30 space-y-6">
          
//           <AnimatePresence mode="wait">
//             {selectedSkill ? (
//               <motion.div
//                 key={selectedSkill.id}
//                 initial={{ opacity: 0, scale: 0.98, y: 10 }}
//                 animate={{ opacity: 1, scale: 1, y: 0 }}
//                 exit={{ opacity: 0, scale: 0.98, y: -10 }}
//                 transition={{ duration: 0.2 }}
//                 className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-3xl p-6 shadow-xl space-y-6 relative overflow-hidden"
//               >
//                 {/* NODE IDENTITY SECTION */}
//                 <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-5">
//                   <div className="flex items-center gap-4">
//                     <div className="text-3xl text-indigo-500 dark:text-indigo-400 p-3 bg-neutral-50 dark:bg-neutral-950 rounded-2xl border border-neutral-200/60 dark:border-neutral-800">
//                       <selectedSkill.icon />
//                     </div>
//                     <div>
//                       <span className="text-[9px] font-mono tracking-widest text-neutral-400 uppercase block">
//                         TELEMETRY METRIC UNIT
//                       </span>
//                       <h2 className="text-lg font-bold font-mono text-neutral-900 dark:text-white uppercase tracking-tight">
//                         {selectedSkill.name}
//                       </h2>
//                       <p className="text-xs text-indigo-500 dark:text-indigo-400 font-mono font-medium">
//                         {isRecruiterMode ? selectedSkill.recruiterRole : selectedSkill.role}
//                       </p>
//                     </div>
//                   </div>
                  
//                   {/* Skill level indicator display badge */}
//                   <span className={`text-[9px] font-mono font-bold px-2.5 py-1 rounded-full text-white uppercase tracking-wider shadow-sm ${
//                     selectedSkill.status === "Production Ready" ? "bg-emerald-500" : selectedSkill.status === "Advanced" ? "bg-blue-500" : "bg-amber-500"
//                   }`}>
//                     {selectedSkill.status}
//                   </span>
//                 </div>

//                 {/* EXPERTISE QUANTITATIVE VISUAL PROGRESS TRACK BAR */}
//                 <div className="font-mono space-y-1.5 bg-neutral-50 dark:bg-neutral-950 p-3 rounded-xl border border-neutral-100 dark:border-neutral-800/40">
//                   <div className="flex justify-between items-center text-xs">
//                     <span className="text-neutral-400 uppercase text-[10px]">Ecosystem Production Usage</span>
//                     <span className="font-bold text-neutral-900 dark:text-white">{selectedSkill.percentage}%</span>
//                   </div>
//                   <div className="w-full bg-neutral-200 dark:bg-neutral-800 h-2 rounded-full overflow-hidden">
//                     <motion.div 
//                       initial={{ width: 0 }}
//                       animate={{ width: `${selectedSkill.percentage}%` }}
//                       transition={{ duration: 0.4, ease: "easeOut" }}
//                       className="bg-indigo-500 h-full rounded-full" 
//                     />
//                   </div>
//                 </div>

//                 {/* SKILL ARCHITECTURE OPERATIONAL SPECS NARRATIVE */}
//                 <div className="space-y-1.5">
//                   <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 block uppercase tracking-wider">
//                     Operational Protocol Context
//                   </span>
//                   <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
//                     {selectedSkill.desc}
//                   </p>
//                 </div>

//                 {/* GITHUB CODE INTEGRATION SIMULATOR LIFECYCLE METRICS */}
//                 <div className="grid grid-cols-2 gap-3 font-mono text-center">
//                   <div className="p-2.5 bg-neutral-50 dark:bg-neutral-950 rounded-xl border border-neutral-100 dark:border-neutral-800/50">
//                     <div className="text-[9px] text-neutral-400 uppercase">Repositories</div>
//                     <div className="text-sm font-bold text-neutral-800 dark:text-neutral-200 mt-0.5">{selectedSkill.gitHubStats.repos} Active Base</div>
//                   </div>
//                   <div className="p-2.5 bg-neutral-50 dark:bg-neutral-950 rounded-xl border border-neutral-100 dark:border-neutral-800/50">
//                     <div className="text-[9px] text-neutral-400 uppercase">Tracked Commits</div>
//                     <div className="text-sm font-bold text-neutral-800 dark:text-neutral-200 mt-0.5">+{selectedSkill.gitHubStats.commits} Nodes</div>
//                   </div>
//                 </div>

//                 {/* RELATED DOWNSTREAM SYSTEM MAPPINGS LINKS */}
//                 <div className="space-y-2">
//                   <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 block uppercase tracking-wider">
//                     Ecosystem Mutual Links
//                   </span>
//                   <div className="flex flex-wrap gap-1.5">
//                     {selectedSkill.related.map((relId) => (
//                       <button
//                         key={relId}
//                         onClick={() => handleSelectNode(relId)}
//                         className="text-[10px] font-mono bg-neutral-50 hover:bg-indigo-50 dark:bg-neutral-950 dark:hover:bg-indigo-950/40 px-2.5 py-1 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 transition-colors"
//                       >
//                         🔗 {relId}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* REAL WORLD PROJECT DEPLOYMENTS AND URL HOOKS */}
//                 <div className="space-y-2.5 border-t border-neutral-100 dark:border-neutral-800 pt-5">
//                   <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 block uppercase tracking-wider">
//                     Production Proven Implementations
//                   </span>
//                   <div className="space-y-2">
//                     {selectedSkill.projects.map((proj, pIdx) => (
//                       <a
//                         key={pIdx}
//                         href={proj.url}
//                         className="group/proj flex items-center justify-between p-3 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 hover:bg-white dark:hover:bg-neutral-950 hover:border-indigo-400/50 dark:hover:border-indigo-500/30 transition-all duration-200 shadow-sm"
//                       >
//                         <div className="min-w-0 flex-1 pr-2">
//                           <div className="flex items-center gap-2">
//                             <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200 font-mono tracking-tight group-hover/proj:text-indigo-600 dark:group-hover/proj:text-indigo-400 transition-colors">
//                               ✔ {proj.title}
//                             </span>
//                             <span className="text-[9px] font-mono px-1.5 py-0.2 bg-neutral-200 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 rounded-sm">
//                               {proj.type}
//                             </span>
//                           </div>
//                           <p className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 mt-0.5 truncate">
//                             Spec: {proj.metrics}
//                           </p>
//                         </div>
//                         <span className="text-xs font-mono text-neutral-300 group-hover/proj:text-indigo-500 transition-colors">
//                           ↗
//                         </span>
//                       </a>
//                     ))}
//                   </div>
//                 </div>

//                 {/* SKILL EVIDENCE VALIDATION TRACK VERIFICATIONS */}
//                 <div className="space-y-2 font-mono">
//                   <span className="text-[10px] text-neutral-400 dark:text-neutral-500 block uppercase tracking-wider">
//                     Expertise Verification Logs
//                   </span>
//                   <ul className="text-[11px] text-neutral-500 dark:text-neutral-400 space-y-1.5 pl-1">
//                     {selectedSkill.evidence.map((ev, eIdx) => (
//                       <li key={eIdx} className="leading-snug flex items-start gap-2">
//                         <span className="text-indigo-500 font-bold select-none">•</span>
//                         <span>{ev}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* DIRECT ACTION CONTEXT DRIVEN HIRE TRIGGERS */}
//                 <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 space-y-3">
//                   <div className="p-3.5 rounded-2xl bg-indigo-500/5 dark:bg-indigo-400/5 border border-indigo-500/20 text-center font-mono">
//                     <h4 className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-tight">
//                       Need {selectedSkill.name} Technical Expertise?
//                     </h4>
//                     <p className="text-[10px] text-neutral-400 dark:text-neutral-500 mt-1 leading-normal">
//                       I have built production web applications, optimized query pipelines, and managed infrastructure spaces utilizing this technology stack blueprint.
//                     </p>
//                   </div>
//                   <div className="grid grid-cols-2 gap-2">
//                     <a
//                       href={`mailto:your-email@domain.com?subject=Inquiry regarding ${selectedSkill.name} Development`}
//                       className="w-full py-2 px-3 bg-indigo-500 hover:bg-indigo-600 active:scale-[0.99] text-white font-mono text-center text-xs font-bold rounded-xl shadow-sm transition-all block"
//                     >
//                       ✉ Hire For This Skill
//                     </a>
//                     <button
//                       onClick={() => {
//                         if (compareSkillId === selectedSkill.id) {
//                           setCompareSkillId(null);
//                         } else {
//                           setCompareSkillId(selectedSkill.id);
//                         }
//                       }}
//                       className={`w-full py-2 px-3 border font-mono text-center text-xs font-bold rounded-xl shadow-sm transition-all ${
//                         compareSkillId === selectedSkill.id 
//                           ? "bg-purple-500 border-purple-500 text-white hover:bg-purple-600" 
//                           : "border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800"
//                       }`}
//                     >
//                       ⚖ {compareSkillId === selectedSkill.id ? "Clearing System" : "Pin to Compare"}
//                     </button>
//                   </div>
//                 </div>

//               </motion.div>
//             ) : (
//               /* WELCOMING FRIENDLY EMPTY WELCOME BLUEPRINT INSTRUCTOR CARD */
//               <div className="border border-dashed border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-3xl p-6 text-center font-mono text-xs space-y-4">
//                 <div className="text-3xl select-none">👋</div>
//                 <h3 className="font-bold text-sm uppercase tracking-tight text-neutral-800 dark:text-white"> E-Architecture Console</h3>
//                 <p className="text-neutral-400 dark:text-neutral-500 leading-relaxed text-[11px]">
//                   Select an operational tech infrastructure block inside the map to stream telemetry metrics.
//                 </p>
//                 <div className="text-left bg-neutral-50 dark:bg-neutral-950 p-3.5 rounded-2xl border border-neutral-100 dark:border-neutral-800/60 text-[11px] text-neutral-400 space-y-1.5">
//                   <p className="font-bold uppercase text-[9px] text-indigo-400 tracking-wider mb-1">Available Telemetry Hooks:</p>
//                   <p>• Lifecycle addition milestones tracing timeline paths.</p>
//                   <p>• Verified commercial and open-source validation pipelines.</p>
//                   <p>• Live code metrics tracking commit node trees.</p>
//                   <p>• Personalized quick contact route mechanisms.</p>
//                 </div>
//               </div>
//             )}
//           </AnimatePresence>

//           {/* SIDE COMPARISON DISPLAY MATRICES SUB SYSTEM */}
//           {compareSkill && (
//             <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-3xl p-5 shadow-lg space-y-4 font-mono text-xs relative"
//             >
//               <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-3">
//                 <span className="text-[10px] text-purple-500 font-bold uppercase tracking-wider">⚖ Infrastructure Node Comparator</span>
//                 <button onClick={() => setCompareSkillId(null)} className="text-neutral-400 hover:text-neutral-900 text-[10px]">Close</button>
//               </div>

//               <div className="grid grid-cols-2 gap-4 text-center">
//                 <div className="p-2 bg-neutral-50 dark:bg-neutral-950 rounded-xl border border-neutral-100 dark:border-neutral-800">
//                   <div className="font-bold text-neutral-800 dark:text-neutral-200">{selectedSkill.name}</div>
//                   <div className="text-[10px] text-neutral-400 mt-2">Usage Level: {selectedSkill.percentage}%</div>
//                   <div className="text-[10px] text-neutral-400">Since: {selectedSkill.yearAdded}</div>
//                   <div className="text-[10px] text-neutral-400">Repos: {selectedSkill.gitHubStats.repos} Base</div>
//                 </div>
//                 <div className="p-2 bg-neutral-50 dark:bg-neutral-950 rounded-xl border border-neutral-100 dark:border-neutral-800">
//                   <div className="font-bold text-neutral-800 dark:text-neutral-200">{compareSkill.name}</div>
//                   <div className="text-[10px] text-neutral-400 mt-2">Usage Level: {compareSkill.percentage}%</div>
//                   <div className="text-[10px] text-neutral-400">Since: {compareSkill.yearAdded}</div>
//                   <div className="text-[10px] text-neutral-400">Repos: {compareSkill.gitHubStats.repos} Base</div>
//                 </div>
//               </div>
//             </motion.div>
//           )}

//         </div>

//       </div>
//     </main>
//   );
// }`






"use client";

import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiNextdotjs, SiReact, SiTypescript, SiNodedotjs, SiMongodb,
  SiPostgresql, SiDocker, SiTailwindcss, SiGit, SiExpress,
  SiNestjs, SiPrisma, SiRedis, SiMysql, SiLinux, SiCloudflare,
  SiVercel, SiFramer
} from "react-icons/si";

/* ==========================================================================
   TYPE DEFINITIONS & DATA ARCHITECTURE
   ========================================================================== */

interface Project {
  title: string;
  url: string;
  type: string;
  metrics: string;
}

interface Skill {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  role: string;
  recruiterRole: string;
  duration: string;
  yearAdded: number;
  percentage: number;
  status: "Production Ready" | "Advanced" | "Learning";
  desc: string;
  unlocks: string[];
  related: string[];
  evidence: string[];
  gitHubStats: { repos: number; commits: number };
  projects: Project[];
}

interface Category {
  id: string;
  title: string;
  color: string;
  glow: string;
  accent: string;
  bgActive: string;
  skills: Skill[];
}

const treeData: { categories: Category[] } = {
  categories: [
    {
      id: "frontend",
      title: "Frontend Architecture",
      color: "from-cyan-500 to-blue-500",
      glow: "rgba(6, 182, 212, 0.2)",
      accent: "text-cyan-500",
      bgActive: "bg-cyan-50/5 dark:bg-cyan-950/5",
      skills: [
        {
          id: "Tailwind CSS",
          name: "Tailwind CSS",
          icon: SiTailwindcss,
          role: "Fluid Design Systems",
          recruiterRole: "User Interface Design",
          duration: "2021 — Present",
          yearAdded: 2021,
          percentage: 98,
          status: "Production Ready",
          desc: "Utility-first CSS engine optimized for rapid component construction and strict atomic design system tokens.",
          unlocks: ["React"],
          related: ["React", "Next.js", "Framer Motion"],
          evidence: ["Engineered complete corporate UI kit", "99+ Lighthouse design scores across portfolios", "Fluid dynamic themes support implementation"],
          gitHubStats: { repos: 22, commits: 840 },
          projects: [
            { title: "Portfolio Ecosystem", url: "https://github.com/example/portfolio", type: "Personal", metrics: "Fluid themes & sub-pixel layouts" },
            { title: "SaaS Analytics Dashboard", url: "https://github.com/example/saas-dashboard", type: "Commercial", metrics: "Strict responsive breakpoint matrix" }
          ]
        },
        {
          id: "React",
          name: "React",
          icon: SiReact,
          role: "Core UI Engine",
          recruiterRole: "Web Applications Core",
          duration: "2021 — Present",
          yearAdded: 2021,
          percentage: 95,
          status: "Production Ready",
          desc: "Component architecture blueprint utilizing declarative state machines and optimal re-rendering cycles.",
          unlocks: ["Next.js", "TypeScript", "Framer Motion"],
          related: ["Next.js", "TypeScript", "Tailwind CSS"],
          evidence: ["Custom hook architectures for global context optimization", "Virtual list rendering managing 10k+ dynamic DOM elements", "Concurrent rendering feature pipelines implementation"],
          gitHubStats: { repos: 16, commits: 1450 },
          projects: [
            { title: "AI Prompt Engineering Studio", url: "https://github.com/example/prompt-studio", type: "SaaS", metrics: "State machine handling 40+ dynamic prompts" },
            { title: "LMS Interactive App", url: "https://github.com/example/lms-app", type: "EdTech", metrics: "Realtime cross-component data feeds" }
          ]
        },
        {
          id: "Next.js",
          name: "Next.js",
          icon: SiNextdotjs,
          role: "SSR Infrastructure",
          recruiterRole: "Search Optimized Apps (SEO)",
          duration: "2022 — Present",
          yearAdded: 2022,
          percentage: 92,
          status: "Production Ready",
          desc: "Production-grade frameworks managing Server-Side Rendering, Static Site Generation, and server actions routing structures.",
          unlocks: ["Vercel"],
          related: ["React", "TypeScript", "Vercel"],
          evidence: ["Migrated legacy SPA to Next.js reducing FCP by 1.4s", "Implemented incremental static regeneration for 1000+ data nodes", "Configured edge middleware interceptors for geolocation configurations"],
          gitHubStats: { repos: 12, commits: 910 },
          projects: [
            { title: "E-Commerce Hyper-Engine", url: "https://github.com/example/ecommerce", type: "SaaS", metrics: "0.2s FCP, 100% SEO scores" },
            { title: "Enterprise Knowledge System", url: "https://github.com/example/kms", type: "Commercial", metrics: "ISR pipeline revalidating sub-minute layers" }
          ]
        },
        {
          id: "Framer Motion",
          name: "Framer Motion",
          icon: SiFramer,
          role: "Premium Physics Engines",
          recruiterRole: "Interactive Animations",
          duration: "2023 — Present",
          yearAdded: 2023,
          percentage: 85,
          status: "Advanced",
          desc: "Declarative animation engine utilizing spring physical rules and micro-interaction orchestration grids.",
          unlocks: [],
          related: ["React", "Tailwind CSS"],
          evidence: ["Orchestrated multi-step layout transitions without DOM jank", "Built customized drag-and-drop node graph physics maps", "Implemented responsive gesture triggers and exit state handlers"],
          gitHubStats: { repos: 5, commits: 210 },
          projects: [
            { title: "Interactive Topology Galaxy", url: "https://github.com/example/topology", type: "Portfolio Module", metrics: "Spring-backed vector line renders" }
          ]
        }
      ]
    },
    {
      id: "backend",
      title: "Backend Infrastructure",
      color: "from-emerald-500 to-teal-500",
      glow: "rgba(16, 185, 129, 0.2)",
      accent: "text-emerald-500",
      bgActive: "bg-emerald-50/5 dark:bg-emerald-950/5",
      skills: [
        {
          id: "Express",
          name: "Express",
          icon: SiExpress,
          role: "REST Route Organizers",
          recruiterRole: "Server APIs and Data Routes",
          duration: "2022 — Present",
          yearAdded: 2022,
          percentage: 90,
          status: "Production Ready",
          desc: "Minimalist, high-throughput routing pipelines handling structural HTTP/HTTPS network handshakes.",
          unlocks: ["Node.js"],
          related: ["Node.js", "MongoDB"],
          evidence: ["Designed multi-tier error intercepting server middleware structures", "Integrated rate-limiting proxies preventing scrapers and brute attacks", "Built standardized REST specs delivering robust JSON contracts"],
          gitHubStats: { repos: 11, commits: 490 },
          projects: [
            { title: "Microservice Webhooks Aggregator", url: "https://github.com/example/webhooks", type: "Internal Ops", metrics: "Processes 200 reqs/sec smoothly" }
          ]
        },
        {
          id: "Node.js",
          name: "Node.js",
          icon: SiNodedotjs,
          role: "Runtime Kernel",
          recruiterRole: "Backend Engineering",
          duration: "2022 — Present",
          yearAdded: 2022,
          percentage: 91,
          status: "Production Ready",
          desc: "Event-driven, non-blocking asynchronous runtime environments handling heavy structural event loops.",
          unlocks: ["NestJS", "TypeScript"],
          related: ["Express", "TypeScript", "NestJS", "Prisma"],
          evidence: ["Engineered process streams reading gigabyte logs safely", "Configured cluster module instances optimizing multi-core threads", "Reduced worker loop block risks via optimized promise chaining"],
          gitHubStats: { repos: 14, commits: 1100 },
          projects: [
            { title: "Real-time Notification Node Hub", url: "https://github.com/example/notifications", type: "Utility Service", metrics: "Websocket clusters balancing 5k concurrent pipelines" }
          ]
        },
        {
          id: "TypeScript",
          name: "TypeScript",
          icon: SiTypescript,
          role: "Strict Compilation",
          recruiterRole: "Type-Safe Error Prevention",
          duration: "2021 — Present",
          yearAdded: 2021,
          percentage: 94,
          status: "Production Ready",
          desc: "Static compilation superstructure linking backend schemas and frontend states natively.",
          unlocks: ["NestJS"],
          related: ["React", "Next.js", "Node.js", "Prisma"],
          evidence: ["Developed end-to-end inferenced API definitions via Zod type maps", "Enforced zero 'any' fallback rules across enterprise monorepos", "Utilized sophisticated conditional mapped variants handling abstract patterns"],
          gitHubStats: { repos: 24, commits: 1980 },
          projects: [
            { title: "Full-Stack B2B Portal", url: "https://github.com/example/b2b-portal", type: "Enterprise", metrics: "Zero type-mismatch compilation drops" }
          ]
        },
        {
          id: "NestJS",
          name: "NestJS",
          icon: SiNestjs,
          role: "Enterprise Architecture",
          recruiterRole: "Scalable Enterprise Servers",
          duration: "2024 — Present",
          yearAdded: 2024,
          percentage: 78,
          status: "Advanced",
          desc: "Strictly typed architectural structures using Dependency Injection patterns for building testable backends.",
          unlocks: [],
          related: ["Node.js", "TypeScript", "Prisma"],
          evidence: ["Refactored abstract microservices using decoupled modules configurations", "Configured automated validation interceptors for input data parsing", "Wrote comprehensive unit mocks testing nested provider classes controllers"],
          gitHubStats: { repos: 4, commits: 180 },
          projects: [
            { title: "FinTech Transaction Broker", url: "https://github.com/example/fintech", type: "Commercial", metrics: "Clean Domain-Driven design patterns" }
          ]
        }
      ]
    },
    {
      id: "database",
      title: "Data Systems",
      color: "from-violet-500 to-indigo-500",
      glow: "rgba(139, 92, 246, 0.2)",
      accent: "text-violet-500",
      bgActive: "bg-violet-50/5 dark:bg-violet-950/5",
      skills: [
        {
          id: "MySQL",
          name: "MySQL",
          icon: SiMysql,
          role: "Relational Queries",
          recruiterRole: "Standard Databases",
          duration: "2021 — 2023",
          yearAdded: 2021,
          percentage: 80,
          status: "Advanced",
          desc: "Standard transactional schemas, relational foreign constraints management, and fundamental indexing normalization arrays.",
          unlocks: ["PostgreSQL"],
          related: ["Node.js", "PostgreSQL"],
          evidence: ["Normalized unstructured tabular spreadsheets into clean 3NF database spaces", "Wrote complex join procedures syncing structural analytical readouts", "Configured custom connection pools balancing query drop spikes"],
          gitHubStats: { repos: 6, commits: 150 },
          projects: [
            { title: "Legacy HR Administration Base", url: "https://github.com/example/hr-db", type: "Internal Utility", metrics: "Acid compliant normalizations" }
          ]
        },
        {
          id: "PostgreSQL",
          name: "PostgreSQL",
          icon: SiPostgresql,
          role: "Relational Hubs",
          recruiterRole: "Secure Data Warehousing",
          duration: "2022 — Present",
          yearAdded: 2022,
          percentage: 92,
          status: "Production Ready",
          desc: "Primary highly available database arrays, handling complex performance query isolation levels and indices profiling.",
          unlocks: ["Prisma"],
          related: ["Prisma", "Node.js", "Redis"],
          evidence: ["Optimized slow inner joins reducing database query responses from 800ms down to 34ms", "Configured partial indices mapping highly accessed text row search vectors", "Maintained transaction triggers verifying safe rollbacks during write drops"],
          gitHubStats: { repos: 11, commits: 420 },
          projects: [
            { title: "SaaS Multi-tenant Store", url: "https://github.com/example/saas-store", type: "Commercial", metrics: "Row Level Security schema isolation" }
          ]
        },
        {
          id: "Prisma",
          name: "Prisma",
          icon: SiPrisma,
          role: "Type-Safe ORM Layer",
          recruiterRole: "Database Communications",
          duration: "2023 — Present",
          yearAdded: 2023,
          percentage: 90,
          status: "Production Ready",
          desc: "Type-safe database abstraction mappings, executing migration pathways seamlessly without raw SQL leak vulnerabilities.",
          unlocks: ["MongoDB"],
          related: ["Node.js", "PostgreSQL", "TypeScript"],
          evidence: ["Designed structural schema files containing strictly typed relational maps", "Handled batch query mutations securely eliminating cross injection vectors", "Managed seamless automated environment migrations across production instances"],
          gitHubStats: { repos: 9, commits: 330 },
          projects: [
            { title: "SaaS Subscriptions Hub", url: "https://github.com/example/subscriptions", type: "Commercial", metrics: "Direct compile types sync" }
          ]
        },
        {
          id: "MongoDB",
          name: "MongoDB",
          icon: SiMongodb,
          role: "Document Storage",
          recruiterRole: "Flexible NoSQL Storage",
          duration: "2021 — Present",
          yearAdded: 2021,
          percentage: 88,
          status: "Production Ready",
          desc: "NoSQL document storage clusters, maximizing dynamic variable object mapping schemas and aggregation setups.",
          unlocks: [],
          related: ["Express", "Node.js", "Redis"],
          evidence: ["Architected compound pipeline aggregations handling data grouping layers", "Configured geographical queries tracing coordinate bounding spaces", "Optimized index parameters matching nested schema object search lookups"],
          gitHubStats: { repos: 15, commits: 510 },
          projects: [
            { title: "Real-time Location Engine", url: "https://github.com/example/geo-engine", type: "Commercial", metrics: "Sub-second proximity updates" }
          ]
        }
      ]
    },
    {
      id: "devops",
      title: "DevOps & Pipelines",
      color: "from-amber-500 to-orange-500",
      glow: "rgba(245, 158, 11, 0.2)",
      accent: "text-amber-500",
      bgActive: "bg-amber-50/5 dark:bg-amber-950/5",
      skills: [
        {
          id: "Git",
          name: "Git",
          icon: SiGit,
          role: "Atomic Versioning",
          recruiterRole: "Source Control & Team Sync",
          duration: "2020 — Present",
          yearAdded: 2020,
          percentage: 96,
          status: "Production Ready",
          desc: "Distributed source branches lifecycle strategies, handling strict rebase flow paths and security signing hooks.",
          unlocks: ["Docker"],
          related: ["Vercel", "Docker"],
          evidence: ["Implemented customized linting and staging gates via Husky pre-commits", "Resolved highly critical branch conflicts across complex commercial forks", "Enforced signed commit pipelines tracking verifiable software supply trees"],
          gitHubStats: { repos: 42, commits: 3400 },
          projects: [
            { title: "Open Source UI Primitives", url: "https://github.com/example/ui-primitives", type: "OSS", metrics: "Over 40 structured commits tree branches" }
          ]
        },
        {
          id: "Docker",
          name: "Docker",
          icon: SiDocker,
          role: "Container Runtimes",
          recruiterRole: "Cloud Environment Packaging",
          duration: "2023 — Present",
          yearAdded: 2023,
          percentage: 87,
          status: "Production Ready",
          desc: "Packaging multi-stage, reproducible micro-container images isolating runtime systems securely.",
          unlocks: ["Linux"],
          related: ["Linux", "Vercel"],
          evidence: ["Reduced image footprint sizing allocations from 1.2GB down to 84MB via Alpine builds", "Composed layered networking parameters joining backend-database spaces", "Configured health check boundaries shielding systems from container lockup cascades"],
          gitHubStats: { repos: 8, commits: 260 },
          projects: [
            { title: "Microservices Deployment Container Kit", url: "https://github.com/example/docker-kit", type: "DevOps Tooling", metrics: "Multi-stage cross compiled builds" }
          ]
        },
        {
          id: "Linux",
          name: "Linux",
          icon: SiLinux,
          role: "POSIX Kernel Management",
          recruiterRole: "Cloud Server System Control",
          duration: "2022 — Present",
          yearAdded: 2022,
          percentage: 84,
          status: "Advanced",
          desc: "POSIX bash administration, configuring daemon systems, system access permissions, and cloud virtualized spaces.",
          unlocks: ["Vercel"],
          related: ["Docker"],
          evidence: ["Wrote automation scripts scheduling safe encrypted cron backups", "Configured systemd services managing active platform recovery tasks", "Secured network boundaries utilizing strict SSH keys and firewall routing adjustments"],
          gitHubStats: { repos: 16, commits: 390 },
          projects: [
            { title: "Self-hosted Server Rig Setup", url: "https://github.com/example/linux-server", type: "Infrastructure", metrics: "99.9% host system uptime statistics" }
          ]
        },
        {
          id: "Vercel",
          name: "Vercel",
          icon: SiVercel,
          role: "Edge Matrix Platforms",
          recruiterRole: "Fast Website Delivery (Cloud)",
          duration: "2022 — Present",
          yearAdded: 2022,
          percentage: 93,
          status: "Production Ready",
          desc: "Global CDN delivery deployments, managing smart edge analytics and zero-downtime serverless integrations.",
          unlocks: [],
          related: ["Next.js", "Git"],
          evidence: ["Configured preview environment pipelines connected to active pull channels", "Optimized cache header controls reducing continuous server invocation costs", "Deployed serverless routing hooks executing sub-millisecond edge tasks"],
          gitHubStats: { repos: 20, commits: 540 },
          projects: [
            { title: "Global Analytics Edge Dashboard", url: "https://github.com/example/analytics-dashboard", type: "Commercial", metrics: "Distributed instant fallback endpoints" }
          ]
        }
      ]
    }
  ]
};

const achievementBadges = [
  { icon: "🏆", id: "fullstack", title: "Full Stack Master", desc: "Production capabilities across UI frameworks and data backends", criteria: "Explore 5 frontend and backend nodes" },
  { icon: "⚡", id: "performance", title: "Performance Tuning", desc: "Proven track record cutting database queries and interface render bottlenecks", criteria: "Click on any database node" },
  { icon: "☁", id: "cloud", title: "Cloud Automation", desc: "Automated container builds, version loops, and global server architectures ready", criteria: "Set timeline threshold to 2024" }
];

const allSkillsFlat = treeData.categories.flatMap(c => c.skills);

/* ==========================================================================
   MAIN COMPONENT IMPLEMENTATION
   ========================================================================== */
export default function SkillTreePage() {
  // Navigation / Filter States
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>("all");
  const [activeStatusFilter, setActiveStatusFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentYearTimeline, setCurrentYearTimeline] = useState<number>(2024);
  
  // Custom View States
  const [isRecruiterMode, setIsRecruiterMode] = useState<boolean>(false);
  const [selectedSkillId, setSelectedSkillId] = useState<string>("React");
  const [compareSkillId, setCompareSkillId] = useState<string | null>(null);
  const [hoveredSkillId, setHoveredSkillId] = useState<string | null>(null);

  // Gamification Track Engine States
  const [visitedNodes, setVisitedNodes] = useState<string[]>(["React"]);
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Interactive Project Modal Simulated Telemetry Log
  const [activeLog, setActiveLog] = useState<string>("System initialized. Awaiting pipeline selection...");

  // System Notifications Manager Trigger Utility
  const triggerToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Automated Real-Time Gamification Badge Achievement Rules
  useEffect(() => {
    const freshBadges = [...unlockedBadges];
    
    if (visitedNodes.length >= 5 && !freshBadges.includes("fullstack")) {
      freshBadges.push("fullstack");
      triggerToast("🏆 Achievement Unlocked: Full Stack Master Developer!");
    }
    
    const baseSelected = allSkillsFlat.find(s => s.id === selectedSkillId);
    if (baseSelected?.yearAdded === 2024 && !freshBadges.includes("cloud")) {
      freshBadges.push("cloud");
      triggerToast("☁ Achievement Unlocked: Cloud Horizon Specialist!");
    }

    if (freshBadges.length !== unlockedBadges.length) {
      setUnlockedBadges(freshBadges);
    }
  }, [visitedNodes, selectedSkillId, unlockedBadges]);

  const selectedSkill = useMemo(() => {
    return allSkillsFlat.find(s => s.id === selectedSkillId) || allSkillsFlat[0];
  }, [selectedSkillId]);

  const compareSkill = useMemo(() => {
    return compareSkillId ? allSkillsFlat.find(s => s.id === compareSkillId) : null;
  }, [compareSkillId]);

  // Compute Active Dependency Graph Vectors
  const activeDependencyChain = useMemo(() => {
    if (!hoveredSkillId) return [];
    const chain: string[] = [hoveredSkillId];
    const triggerSkill = allSkillsFlat.find(s => s.id === hoveredSkillId);
    if (triggerSkill?.unlocks) {
      chain.push(...triggerSkill.unlocks);
    }
    allSkillsFlat.forEach(s => {
      if (s.unlocks.includes(hoveredSkillId)) {
        chain.push(s.id);
      }
    });
    return chain;
  }, [hoveredSkillId]);

  // Combined Advanced Filtering Engine Matrix Processing
  const processedTreeData = useMemo(() => {
    return treeData.categories.map(category => {
      if (activeCategoryFilter !== "all" && category.id !== activeCategoryFilter) {
        return { ...category, skills: [] };
      }

      const filteredSkills = category.skills.filter(skill => {
        if (activeStatusFilter !== "all" && skill.status !== activeStatusFilter) return false;
        if (skill.yearAdded > currentYearTimeline) return false;

        if (searchQuery.trim() !== "") {
          const query = searchQuery.toLowerCase();
          const matchName = skill.name.toLowerCase().includes(query);
          const matchRole = skill.role.toLowerCase().includes(query);
          const matchDesc = skill.desc.toLowerCase().includes(query);
          if (!matchName && !matchRole && !matchDesc) return false;
        }
        return true;
      });

      return { ...category, skills: filteredSkills };
    });
  }, [activeCategoryFilter, activeStatusFilter, searchQuery, currentYearTimeline]);

  // Operational Node Click Router Handler
  const handleSelectNode = (id: string) => {
    setSelectedSkillId(id);
    setActiveLog(`Streaming pipeline data from telemetry layer node: [${id}]`);
    
    // Add item to visited tracker arrays
    if (!visitedNodes.includes(id)) {
      setVisitedNodes(prev => [...prev, id]);
      
      // Dynamic Database achievement interceptor rule
      const skillNode = allSkillsFlat.find(s => s.id === id);
      const isDb = treeData.categories.find(c => c.id === "database")?.skills.some(s => s.id === id);
      if (isDb && !unlockedBadges.includes("performance")) {
        setUnlockedBadges(prev => [...prev, "performance"]);
        triggerToast("⚡ Achievement Unlocked: Deep Performance Engine tuning logged!");
      }
    }
  };

  /* ==========================================================================
     EXPORT STRATEGIES & INTERACTIVE RUNTIME HOOKS
     ========================================================================== */
  const handleCopyStack = () => {
    const list = allSkillsFlat.map(s => `- ${s.name}: ${s.status} (${s.percentage}% Proficiency)`).join("\n");
    navigator.clipboard.writeText(`### Core Engineering System Blueprint Bundle\n${list}`);
    triggerToast("📁 Entire infrastructure configuration array copied to system clipboard!");
  };

  const handleDownloadPDFMock = () => {
    setActiveLog("Compiling architecture schema tokens into dynamic document object binary structural map...");
    setTimeout(() => {
      const serializedData = JSON.stringify(allSkillsFlat.map(s => ({ name: s.name, skill: s.percentage, layer: s.status })));
      const blob = new Blob([`PORTFOLIO ARCHITECTURE METRIC REPORT\nGenerated Date: 2026\n\n${serializedData}`], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `Architecture-Ecosystem-Spec-Report.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      triggerToast("↓ Downloaded verified analytical stack blueprint successfully.");
    }, 750);
  };

  const handleTriggerProjectNavigation = (e: React.MouseEvent, title: string, url: string) => {
    e.preventDefault();
    setActiveLog(`Redirecting framework request to sandbox repository environment: ${title}`);
    triggerToast(`🔗 Launching production workspace sandbox repository for: ${title}`);
    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
    }, 800);
  };

  const handleBadgeInteractionTrigger = (title: string, criteria: string) => {
    setActiveLog(`Evaluating criteria loop for badge engine verification matrix: ${title}`);
    triggerToast(`🎯 Requirement: ${criteria}`);
  };

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans antialiased relative selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* TOAST SYSTEM COMPONENT PIPELINE OVERLAY */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-16 left-1/2 -translate-x-1/2 z-[100] bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-mono text-xs px-5 py-3 rounded-xl shadow-2xl border border-neutral-800 dark:border-neutral-200 flex items-center gap-3 min-w-[320px] justify-center"
          >
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none z-0" />

      {/* TOP SCROLL-TRACKED SYSTEM CONTROL TELEMETRY BAR */}
      <div className="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-950/70 backdrop-blur-xl px-6 py-3 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <button 
            onClick={() => {
              setActiveLog("Resetting root pipeline telemetry arrays to base values...");
              setVisitedNodes(["React"]);
              setUnlockedBadges([]);
              setSelectedSkillId("React");
              setCompareSkillId(null);
              triggerToast("🔄 State engines reset back to initial defaults.");
            }}
            className="text-xs font-mono text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
          >
            ← Reset Graph State
          </button>
          <div className="h-4 w-[1px] bg-neutral-200 dark:bg-neutral-800" />
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="text-neutral-400">OVERALL PORTFOLIO EXPERTISE:</span>
            <div className="w-32 bg-neutral-200 dark:bg-neutral-800 h-2 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full w-[91%]" />
            </div>
            <span className="font-bold text-indigo-600 dark:text-indigo-400">91%</span>
          </div>
          <div className="hidden md:flex items-center gap-2 font-mono text-xs text-neutral-400">
            <span>NODES EXPLORED:</span>
            <span className="text-neutral-900 dark:text-white font-bold">{visitedNodes.length} / {allSkillsFlat.length}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-tight">Viewing Layout:</span>
          <div className="bg-neutral-100 dark:bg-neutral-900 p-1 rounded-xl border border-neutral-200 dark:border-neutral-800 flex items-center">
            <button
              onClick={() => {
                setIsRecruiterMode(false);
                setActiveLog("Toggled viewing state schema pattern context to: Developer Mode");
              }}
              className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${!isRecruiterMode ? "bg-white dark:bg-neutral-800 text-indigo-600 dark:text-indigo-400 font-bold shadow-sm" : "text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"}`}
            >
              Developer Space
            </button>
            <button
              onClick={() => {
                setIsRecruiterMode(true);
                setActiveLog("Toggled viewing state schema pattern context to: Recruiter Optimization Interface");
              }}
              className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${isRecruiterMode ? "bg-white dark:bg-neutral-800 text-indigo-600 dark:text-indigo-400 font-bold shadow-sm" : "text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"}`}
            >
              Recruiter Mode 👔
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 md:px-6 pt-10 pb-20 relative z-10 grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        
        {/* LEFT ARCHITECTURE CONTROLLER MODULES COLUMN */}
        <div className="xl:col-span-8 space-y-6">
          
          {/* SEARCH & RE-INDEX CONTROL MATRIX DASHBOARD */}
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 rounded-3xl space-y-4 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <h1 className="text-xl font-extrabold tracking-tight font-mono uppercase text-neutral-900 dark:text-white">
                  System Architecture Tree Blueprint
                </h1>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                  Explore full ecosystem paths, timeline additions, verified repository metrics, and deployment code blueprints.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyStack}
                  className="px-3 py-1.5 rounded-xl border border-neutral-200 dark:border-neutral-800 text-xs font-mono hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                >
                  📁 Copy Stack
                </button>
                <button
                  onClick={handleDownloadPDFMock}
                  className="px-3 py-1.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-mono hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
                >
                  ↓ Export Stack Report
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Filter by keyword (e.g. Server)..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setActiveLog(`Re-indexing active telemetry search node pointers matching sequence token: "${e.target.value}"`);
                  }}
                  className="w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl px-3 py-2 text-xs font-mono focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                {["all", "frontend", "backend", "database", "devops"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategoryFilter(cat);
                      setActiveLog(`Filtering ecosystem architecture graph column layout by: ${cat.toUpperCase()}`);
                    }}
                    className={`px-2.5 py-1.5 rounded-lg border text-[10px] font-mono capitalize transition-all whitespace-nowrap ${activeCategoryFilter === cat ? "bg-indigo-500 border-indigo-500 text-white font-bold" : "bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:text-neutral-900"}`}
                  >
                    {cat === "all" ? "All Pillars" : cat}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                {["all", "Production Ready", "Advanced", "Learning"].map((stat) => (
                  <button
                    key={stat}
                    onClick={() => {
                      setActiveStatusFilter(stat);
                      setActiveLog(`Filtering runtime capabilities arrays by expertise code marker: ${stat.toUpperCase()}`);
                    }}
                    className={`px-2.5 py-1.5 rounded-lg border text-[10px] font-mono transition-all whitespace-nowrap ${activeStatusFilter === stat ? "bg-indigo-500 border-indigo-500 text-white font-bold" : "bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:text-neutral-900"}`}
                  >
                    {stat === "all" ? "All Expertise" : stat}
                  </button>
                ))}
              </div>
            </div>

            {/* TIMELINE RANGE RUNTIME SLIDER INTEGRATION MAP */}
            <div className="border-t border-neutral-100 dark:border-neutral-800 pt-4 flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-neutral-400">TIMELINE LIFECYCLE HORIZON:</span>
                <span className="text-indigo-600 dark:text-indigo-400 font-bold px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
                  {currentYearTimeline === 2024 ? "Full Stack Matrix (Present)" : `Up to ${currentYearTimeline}`}
                </span>
              </div>
              <div className="flex-1 max-w-md flex items-center gap-3">
                <span className="text-[10px] text-neutral-400">2020</span>
                <input
                  type="range"
                  min="2020"
                  max="2024"
                  step="1"
                  value={currentYearTimeline}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    setCurrentYearTimeline(value);
                    setActiveLog(`Adjusted temporal matrix slider. Isolating software stacks baseline configurations added up to year: ${value}`);
                  }}
                  className="flex-1 accent-indigo-500 bg-neutral-200 dark:bg-neutral-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-[10px] text-neutral-400">2024</span>
              </div>
            </div>
          </div>

          {/* INTERACTIVE GAMIFIED ACHIEVEMENT BADGES CONTROL HUB */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {achievementBadges.map((badge) => {
              const isUnlocked = unlockedBadges.includes(badge.id);
              return (
                <div 
                  key={badge.id} 
                  onClick={() => handleBadgeInteractionTrigger(badge.title, badge.criteria)}
                  className={`border p-4 rounded-2xl flex items-start gap-3 relative overflow-hidden transition-all duration-300 cursor-pointer select-none hover:shadow-md ${
                    isUnlocked 
                      ? "bg-white dark:bg-neutral-900 border-indigo-500/40 shadow-sm" 
                      : "bg-neutral-100/40 dark:bg-neutral-900/20 border-neutral-200 dark:border-neutral-800/60 grayscale opacity-60 hover:opacity-80"
                  }`}
                >
                  <span className="text-2xl select-none">{badge.icon}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs font-bold font-mono text-neutral-800 dark:text-neutral-200 uppercase tracking-tight">{badge.title}</h4>
                      {isUnlocked && <span className="text-[9px] bg-indigo-500/10 text-indigo-500 px-1.5 py-0.2 rounded font-mono font-bold">UNLOCKED</span>}
                    </div>
                    <p className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-0.5 leading-snug">{badge.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* VISUAL TREE INTERACTION GRAPH DISPLAY ROW CONTAINER */}
          <div className="bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800/80 rounded-3xl p-6 relative overflow-x-auto shadow-sm">
            
            <div className="text-center mb-8 relative">
              <div className="inline-block px-4 py-2.5 rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-800 dark:from-white dark:to-neutral-100 text-white dark:text-neutral-900 font-mono font-bold text-xs uppercase tracking-widest relative z-10 shadow-md">
                ⚡ Core Full-Stack Router Engine
              </div>
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-neutral-200 dark:bg-neutral-800 -z-0" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-w-[840px] relative">
              {processedTreeData.map((category) => {
                if (category.skills.length === 0) return <div key={category.id} className="border border-dashed border-neutral-100 dark:border-neutral-900 rounded-2xl p-4 text-center text-xs font-mono text-neutral-400 opacity-40">Column Filtered</div>;
                
                return (
                  <div key={category.id} className="flex flex-col gap-6 relative">
                    <div className="pb-2 border-b border-neutral-100 dark:border-neutral-800/60 flex items-center justify-between">
                      <span className="text-[11px] font-bold font-mono tracking-tight uppercase text-neutral-800 dark:text-neutral-300">
                        {category.title}
                      </span>
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color}`} />
                    </div>

                    <div className="flex flex-col gap-5 relative">
                      {category.skills.map((skill, sIdx) => {
                        const isSelected = selectedSkillId === skill.id;
                        const isComparing = compareSkillId === skill.id;
                        const isInChain = activeDependencyChain.includes(skill.id);
                        
                        const colorStatusMap = {
                          "Production Ready": "bg-emerald-500",
                          "Advanced": "bg-blue-500",
                          "Learning": "bg-amber-500"
                        };

                        return (
                          <div 
                            key={skill.id} 
                            className="relative"
                            onMouseEnter={() => setHoveredSkillId(skill.id)}
                            onMouseLeave={() => setHoveredSkillId(null)}
                          >
                            {sIdx < category.skills.length - 1 && (
                              <div className={`absolute top-full left-7 w-[2px] h-6 z-0 transition-all duration-300 ${isInChain ? "bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]" : "bg-neutral-100 dark:bg-neutral-800"}`} />
                            )}

                            <motion.div
                              whileHover={{ y: -2 }}
                              onClick={() => handleSelectNode(skill.id)}
                              className={`p-3.5 rounded-2xl border cursor-pointer select-none relative z-10 transition-all duration-300 ${
                                isSelected 
                                  ? `border-indigo-500 shadow-md ${category.bgActive} ring-1 ring-indigo-500/20` 
                                  : isComparing
                                  ? "border-purple-500 bg-purple-50/10 dark:bg-purple-950/10 shadow-sm"
                                  : isInChain
                                  ? "border-indigo-400 bg-neutral-50 dark:bg-neutral-900 shadow-[0_0_12px_rgba(99,102,241,0.15)]"
                                  : "border-neutral-200 dark:border-neutral-800/80 bg-neutral-50/40 dark:bg-neutral-900/30 hover:border-neutral-300 dark:hover:border-neutral-700"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-xl border relative transition-all duration-300 ${isSelected ? "bg-white dark:bg-neutral-950 text-indigo-500 border-neutral-200 dark:border-neutral-800 scale-110" : "bg-white dark:bg-neutral-900 border-transparent text-neutral-400"}`}>
                                  <skill.icon className="w-4 h-4" />
                                  <span className={`absolute -top-1 -right-1 w-2 h-2 rounded-full ${colorStatusMap[skill.status]}`} />
                                </div>

                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-1">
                                    <h4 className="text-xs font-bold font-mono truncate text-neutral-800 dark:text-neutral-200 uppercase tracking-tight">
                                      {skill.name}
                                    </h4>
                                    <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 font-semibold">
                                      {skill.percentage}%
                                    </span>
                                  </div>
                                  <p className="text-[10px] text-neutral-400 dark:text-neutral-500 font-mono truncate mt-0.5">
                                    {isRecruiterMode ? skill.recruiterRole : skill.role}
                                  </p>
                                </div>
                              </div>

                              {isSelected && (
                                <div className="mt-3 pt-2.5 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-[9px] font-mono text-neutral-400">
                                  <span>Added: {skill.yearAdded}</span>
                                  <span className="px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400 rounded uppercase tracking-wider font-bold">ACTIVE CAPTURE</span>
                                </div>
                              )}
                            </motion.div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* TELEMETRY FEED INPUTS SHELL STATUS TERMINAL LOG */}
          <div className="bg-neutral-950 text-emerald-400 p-4 rounded-2xl border border-neutral-800 shadow-inner font-mono text-xs space-y-1">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-2 text-[10px] text-neutral-500 uppercase font-bold tracking-widest">
              <span>⚡ Terminal Pipeline Engine Monitors</span>
              <span className="text-emerald-500 animate-pulse">● System Operational</span>
            </div>
            <div className="pt-1 text-[11px] transition-all duration-200 text-neutral-300">
              <span className="text-neutral-500 font-bold mr-2">&gt;_</span>{activeLog}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN INSPECTOR CARD INTERACTION HUB */}
        <div className="xl:col-span-4 lg:sticky lg:top-20 z-30 space-y-6">
          <AnimatePresence mode="wait">
            {selectedSkill ? (
              <motion.div
                key={selectedSkill.id}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.2 }}
                className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-3xl p-6 shadow-xl space-y-6 relative overflow-hidden"
              >
                <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-5">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl text-indigo-500 dark:text-indigo-400 p-3 bg-neutral-50 dark:bg-neutral-950 rounded-2xl border border-neutral-200/60 dark:border-neutral-800">
                      <selectedSkill.icon />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono tracking-widest text-neutral-400 uppercase block">TELEMETRY POINTER</span>
                      <h2 className="text-lg font-bold font-mono text-neutral-900 dark:text-white uppercase tracking-tight">{selectedSkill.name}</h2>
                      <p className="text-xs text-indigo-500 dark:text-indigo-400 font-mono font-medium">
                        {isRecruiterMode ? selectedSkill.recruiterRole : selectedSkill.role}
                      </p>
                    </div>
                  </div>
                  
                  <span className={`text-[9px] font-mono font-bold px-2.5 py-1 rounded-full text-white uppercase tracking-wider shadow-sm ${
                    selectedSkill.status === "Production Ready" ? "bg-emerald-500" : selectedSkill.status === "Advanced" ? "bg-blue-500" : "bg-amber-500"
                  }`}>
                    {selectedSkill.status}
                  </span>
                </div>

                <div className="font-mono space-y-1.5 bg-neutral-50 dark:bg-neutral-950 p-3 rounded-xl border border-neutral-100 dark:border-neutral-800/40">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-neutral-400 uppercase text-[10px]">Ecosystem Production Usage</span>
                    <span className="font-bold text-neutral-900 dark:text-white">{selectedSkill.percentage}%</span>
                  </div>
                  <div className="w-full bg-neutral-200 dark:bg-neutral-800 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedSkill.percentage}%` }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="bg-indigo-500 h-full rounded-full" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 block uppercase tracking-wider">Protocol Context Statement</span>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">{selectedSkill.desc}</p>
                </div>

                {/* INTERACTIVE COMPONENT STATISTICS COUNTER SYSTEM CLICKS */}
                <div className="grid grid-cols-2 gap-3 font-mono text-center">
                  <div 
                    onClick={() => {
                      setActiveLog(`Accessing file registry for node [${selectedSkill.name}]. Scanning tracking parameters...`);
                      triggerToast(`📁 Scanned ${selectedSkill.gitHubStats.repos} functional sandboxes.`);
                    }}
                    className="p-2.5 bg-neutral-50 dark:bg-neutral-950 rounded-xl border border-neutral-100 dark:border-neutral-800/50 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <div className="text-[9px] text-neutral-400 uppercase">Repositories</div>
                    <div className="text-sm font-bold text-neutral-800 dark:text-neutral-200 mt-0.5">{selectedSkill.gitHubStats.repos} Active Base</div>
                  </div>
                  <div 
                    onClick={() => {
                      setActiveLog(`Auditing signed repository supply chain tracking chains for: [${selectedSkill.name}]`);
                      triggerToast(`📊 Verified +${selectedSkill.gitHubStats.commits} absolute commit hooks.`);
                    }}
                    className="p-2.5 bg-neutral-50 dark:bg-neutral-950 rounded-xl border border-neutral-100 dark:border-neutral-800/50 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <div className="text-[9px] text-neutral-400 uppercase">Tracked Commits</div>
                    <div className="text-sm font-bold text-neutral-800 dark:text-neutral-200 mt-0.5">+{selectedSkill.gitHubStats.commits} Nodes</div>
                  </div>
                </div>

                {/* GRAPH NODE DEEP NETWORK ROUTER MUTUAL CONNECTIONS */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 block uppercase tracking-wider">Ecosystem Mutual Links</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedSkill.related.map((relId) => (
                      <button
                        key={relId}
                        onClick={() => handleSelectNode(relId)}
                        className="text-[10px] font-mono bg-neutral-50 hover:bg-indigo-50 dark:bg-neutral-950 dark:hover:bg-indigo-950/40 px-2.5 py-1 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 transition-colors"
                      >
                        🔗 {relId}
                      </button>
                    ))}
                  </div>
                </div>

                {/* VERIFIED LIVE DEPLOYMENT AND REPOSITORY PROJECT REDIRECT SANDBOX */}
                <div className="space-y-2.5 border-t border-neutral-100 dark:border-neutral-800 pt-5">
                  <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 block uppercase tracking-wider">Production Proven Implementations</span>
                  <div className="space-y-2">
                    {selectedSkill.projects.map((proj, pIdx) => (
                      <a
                        key={pIdx}
                        href={proj.url}
                        onClick={(e) => handleTriggerProjectNavigation(e, proj.title, proj.url)}
                        className="group/proj flex items-center justify-between p-3 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 hover:bg-white dark:hover:bg-neutral-950 hover:border-indigo-400/50 dark:hover:border-indigo-500/30 transition-all duration-200 shadow-sm"
                      >
                        <div className="min-w-0 flex-1 pr-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200 font-mono tracking-tight group-hover/proj:text-indigo-600 dark:group-hover/proj:text-indigo-400 transition-colors">
                              ✔ {proj.title}
                            </span>
                            <span className="text-[9px] font-mono px-1.5 py-0.2 bg-neutral-200 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 rounded-sm">
                              {proj.type}
                            </span>
                          </div>
                          <p className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 mt-0.5 truncate">Spec: {proj.metrics}</p>
                        </div>
                        <span className="text-xs font-mono text-neutral-300 group-hover/proj:text-indigo-500 transition-colors">↗</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* EXPLICIT LOG MATRIX EVIDENCE ARRAYS */}
                <div className="space-y-2 font-mono">
                  <span className="text-[10px] text-neutral-400 dark:text-neutral-500 block uppercase tracking-wider">Expertise Verification Logs</span>
                  <ul className="text-[11px] text-neutral-500 dark:text-neutral-400 space-y-1.5 pl-1">
                    {selectedSkill.evidence.map((ev, eIdx) => (
                      <li 
                        key={eIdx} 
                        onClick={() => {
                          setActiveLog(`Verifying absolute token signature integrity array for requirement block: "${ev}"`);
                          triggerToast("✅ Cryptographic pipeline state: VERIFIED");
                        }}
                        className="leading-snug flex items-start gap-2 cursor-pointer hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
                      >
                        <span className="text-indigo-500 font-bold select-none">•</span>
                        <span>{ev}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* DYNAMIC REAL CONTACT FORM GENERATOR LAYER WITH DIRECT CTA LINK */}
                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 space-y-3">
                  <div className="p-3.5 rounded-2xl bg-indigo-500/5 dark:bg-indigo-400/5 border border-indigo-500/20 text-center font-mono">
                    <h4 className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-tight">Need {selectedSkill.name} Technical Expertise?</h4>
                    <p className="text-[10px] text-neutral-400 dark:text-neutral-500 mt-1 leading-normal">
                      I have built production web applications and managed infrastructure spaces utilizing this technology stack blueprint.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`mailto:architecture-pipeline@domain.com?subject=Inquiry regarding specialized ${selectedSkill.name} production development frameworks&body=Hello,%0D%0A%0D%0AI audited your digital architecture node blueprint graph interface and want to connect regarding your experience vector with ${selectedSkill.name}.`}
                      onClick={() => {
                        setActiveLog(`Assembling secure mail agent handshake package matching protocol token target reference [${selectedSkill.name}]`);
                        triggerToast("✉ Launching local standard mailing app sandbox pipeline...");
                      }}
                      className="w-full py-2 px-3 bg-indigo-500 hover:bg-indigo-600 active:scale-[0.99] text-white font-mono text-center text-xs font-bold rounded-xl shadow-sm transition-all block"
                    >
                      ✉ Hire For This Skill
                    </a>
                    <button
                      onClick={() => {
                        if (compareSkillId === selectedSkill.id) {
                          setCompareSkillId(null);
                          setActiveLog("Clearing comparator grid structural node tracking cache.");
                        } else {
                          setCompareSkillId(selectedSkill.id);
                          setActiveLog(`Pinned active core node reference [${selectedSkill.name}] to comparator processing matrix context.`);
                          triggerToast(`⚖ Target [${selectedSkill.name}] locked into comparison slots.`);
                        }
                      }}
                      className={`w-full py-2 px-3 border font-mono text-center text-xs font-bold rounded-xl shadow-sm transition-all ${
                        compareSkillId === selectedSkill.id 
                          ? "bg-purple-500 border-purple-500 text-white hover:bg-purple-600" 
                          : "border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                      }`}
                    >
                      ⚖ {compareSkillId === selectedSkill.id ? "Clear Slot" : "Pin to Compare"}
                    </button>
                  </div>
                </div>

              </motion.div>
            ) : (
              <div className="border border-dashed border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-3xl p-6 text-center font-mono text-xs space-y-4">
                <div className="text-3xl select-none">👋</div>
                <h3 className="font-bold text-sm uppercase tracking-tight text-neutral-800 dark:text-white"> E-Architecture Console</h3>
                <p className="text-neutral-400 dark:text-neutral-500 leading-relaxed text-[11px]">Select an operational tech infrastructure block inside the map to stream telemetry metrics.</p>
              </div>
            )}
          </AnimatePresence>

          {/* DYNAMIC SYSTEM NODE LEVEL GRAPH RE-INDEX COMPARISON FRAME GRID */}
          {compareSkill && selectedSkill && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-3xl p-5 shadow-lg space-y-4 font-mono text-xs relative"
            >
              <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-3">
                <span className="text-[10px] text-purple-500 font-bold uppercase tracking-wider">⚖ Infrastructure Node Comparator Processing Matrix</span>
                <button 
                  onClick={() => {
                    setCompareSkillId(null);
                    setActiveLog("Dismissing current comparative runtime structural analysis arrays.");
                  }} 
                  className="text-neutral-400 hover:text-neutral-900 text-[10px]"
                >
                  ✕ Close
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center text-[11px]">
                <div className="p-3 bg-neutral-50 dark:bg-neutral-950 rounded-xl border border-indigo-500/20">
                  <div className="font-bold text-neutral-800 dark:text-neutral-200 text-xs uppercase">{selectedSkill.name}</div>
                  <div className="text-[10px] text-neutral-400 mt-2">Usage Level: <span className="text-indigo-500 font-bold">{selectedSkill.percentage}%</span></div>
                  <div className="text-[10px] text-neutral-400">Since Era: {selectedSkill.yearAdded}</div>
                  <div className="text-[10px] text-neutral-400">Sandboxes: {selectedSkill.gitHubStats.repos} Base</div>
                  <div className="text-[10px] text-neutral-400">Commits: {selectedSkill.gitHubStats.commits} Hooks</div>
                </div>
                <div className="p-3 bg-neutral-50 dark:bg-neutral-950 rounded-xl border border-purple-500/20">
                  <div className="font-bold text-neutral-800 dark:text-neutral-200 text-xs uppercase">{compareSkill.name}</div>
                  <div className="text-[10px] text-purple-500 mt-2 font-bold">Usage Level: <span>{compareSkill.percentage}%</span></div>
                  <div className="text-[10px] text-neutral-400">Since Era: {compareSkill.yearAdded}</div>
                  <div className="text-[10px] text-neutral-400">Sandboxes: {compareSkill.gitHubStats.repos} Base</div>
                  <div className="text-[10px] text-neutral-400">Commits: {compareSkill.gitHubStats.commits} Hooks</div>
                </div>
              </div>

              {/* AUTOMATED VARIANCE FORMULA ANALYZER ENGINE VIEW */}
              <div className="bg-purple-500/5 border border-purple-500/20 rounded-xl p-3 text-center text-[11px] text-neutral-500 dark:text-neutral-400">
                <span className="font-bold text-purple-600 dark:text-purple-400 uppercase mr-1">Variance Telemetry:</span> 
                {selectedSkill.name} holds a <strong>{Math.abs(selectedSkill.percentage - compareSkill.percentage)}%</strong> capability offset vector compared to {compareSkill.name}.
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </main>
  );
}