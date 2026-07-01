// "use client";

// import { useMemo, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import * as d3 from "d3";
// import { Award, Layers, Milestone, ShieldCheck, Cpu, ExternalLink } from "lucide-react";
// import { certificationCategories } from "@/data/certifications";

// const brandThemes: Record<
//   string,
//   { aura: string; rim: string; text: string; shadow: string; color: string }
// > = {
//   cloud: {
//     aura: "from-sky-500 to-blue-600",
//     rim: "border-sky-500/30",
//     text: "text-sky-400",
//     shadow: "rgba(14, 165, 233, 0.4)",
//     color: "#0ea5e9",
//   },
//   frontend: {
//     aura: "from-pink-500 to-purple-600",
//     rim: "border-pink-500/30",
//     text: "text-pink-400",
//     shadow: "rgba(236, 72, 153, 0.4)",
//     color: "#ec4899",
//   },
//   google: {
//     aura: "from-emerald-500 to-green-600",
//     rim: "border-emerald-500/30",
//     text: "text-emerald-400",
//     shadow: "rgba(16, 185, 129, 0.4)",
//     color: "#10b981",
//   },
//   microsoft: {
//     aura: "from-blue-600 to-indigo-700",
//     rim: "border-blue-500/30",
//     text: "text-blue-400",
//     shadow: "rgba(37, 99, 235, 0.4)",
//     color: "#2563eb",
//   },
//   programming: {
//     aura: "from-amber-400 to-orange-500",
//     rim: "border-amber-500/30",
//     text: "text-amber-400",
//     shadow: "rgba(245, 158, 11, 0.4)",
//     color: "#f59e0b",
//   },
//   networking: {
//     aura: "from-teal-400 to-cyan-600",
//     rim: "border-teal-500/30",
//     text: "text-teal-400",
//     shadow: "rgba(20, 184, 166, 0.4)",
//     color: "#14b8a6",
//   },
//   database: {
//     aura: "from-violet-500 to-fuchsia-600",
//     rim: "border-violet-500/30",
//     text: "text-violet-400",
//     shadow: "rgba(139, 92, 246, 0.4)",
//     color: "#8b5cf6",
//   },
//   default: {
//     aura: "from-neutral-500 to-neutral-700",
//     rim: "border-neutral-500/30",
//     text: "text-neutral-400",
//     shadow: "rgba(115, 115, 115, 0.2)",
//     color: "#737373",
//   },
// };

// export default function CertificationUmbrellaDashboard() {
//   const [hoveredId, setHoveredId] = useState<string | null>(null);

//   const analytics = useMemo(() => {
//     const total = certificationCategories.reduce((acc, c) => acc + c.items.length, 0);
//     const skills = certificationCategories.flatMap((c) => c.items.flatMap((i) => i.skills || []));
//     const skillCount = new Set(skills).size;
//     const issuers = new Set(certificationCategories.flatMap((c) => c.items.map((i) => i.issuer))).size;

//     const categoryData = certificationCategories.map((c) => {
//       const theme = brandThemes[c.id] || brandThemes.default;
//       const categorySkills = Array.from(new Set(c.items.flatMap((i) => i.skills || [])));
//       const categoryIssuers = Array.from(new Set(c.items.map((i) => i.issuer)));
//       const skillDensity = c.items.length > 0 ? (categorySkills.length / c.items.length).toFixed(1) : "0.0";

//       return {
//         id: c.id,
//         name: c.title,
//         value: c.items.length,
//         logo: c.logo,
//         description: c.description,
//         skills: categorySkills,
//         issuersList: categoryIssuers,
//         skillDensity,
//         theme,
//       };
//     });

//     return { total, skillCount, issuers, categoryData };
//   }, []);

//   const radius = 95;
//   const pie = useMemo(() => d3.pie<any>().value((d) => d.value).sort(null), []);
//   const arc = useMemo(() => d3.arc<any>().innerRadius(68).outerRadius(radius).cornerRadius(5).padAngle(0.035), []);

//   const arcs = useMemo(() => pie(analytics.categoryData), [analytics.categoryData, pie]);

//   const activeCategory = analytics.categoryData.find((c) => c.id === hoveredId);
//   const ActiveLogo = activeCategory?.logo || ShieldCheck;

//   const globalSkillsSample = useMemo(() => {
//     return Array.from(new Set(certificationCategories.flatMap((c) => c.items.flatMap((i) => i.skills || [])))).slice(0, 8);
//   }, []);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 15 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//       style={{
//         boxShadow: activeCategory 
//           ? `0 30px 100px rgba(0,0,0,0.8), 0 0 50px -12px ${activeCategory.theme.shadow}`
//           : "0 30px 100px rgba(0,0,0,0.8), 0 0 50px -12px rgba(20,184,166,0.15)",
//         borderColor: activeCategory ? activeCategory.theme.color : "rgba(255,255,255,0.06)"
//       }}
//       className="relative mb-24 rounded-3xl border bg-neutral-900/10 p-8 backdrop-blur-3xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
//     >
//       {/* High-Fidelity Ambience Spill Overlays */}
//       <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
//         <div 
//           className="absolute -top-40 left-1/4 h-96 w-96 rounded-full blur-[140px] transition-all duration-700" 
//           style={{ backgroundColor: activeCategory?.theme.color ? `${activeCategory.theme.color}20` : "rgba(6,182,212,0.08)" }}
//         />
//         <div 
//           className="absolute -bottom-40 right-1/4 h-96 w-96 rounded-full blur-[140px] transition-all duration-700"
//           style={{ backgroundColor: activeCategory?.theme.color ? `${activeCategory.theme.color}15` : "rgba(139,92,246,0.08)" }}
//         />
//       </div>

//       <div className="relative z-10 grid gap-10 lg:grid-cols-12 items-center">
        
//         {/* LEFT COMPONENT: KPI MATRIX & DRILLDOWN RATIO GRAPH */}
//         <div className="space-y-6 lg:col-span-4">
//           <div className="space-y-1.5">
//             <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
//               <span className="h-1 w-1 rounded-full bg-cyan-400 animate-pulse" /> Telemetry Core
//             </span>
//             <h2 className="text-2xl font-bold tracking-tight text-white bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
//               Certification Matrix
//             </h2>
//             <p className="text-xs font-light text-neutral-400 max-w-sm leading-relaxed">
//               Real-time processing framework tracking distributed cloud credentials and systematic engineering standards.
//             </p>
//           </div>

//           <div className="grid grid-cols-2 gap-3.5">
//             <div className="group rounded-2xl border border-white/[0.04] bg-gradient-to-b from-neutral-950/60 to-neutral-950/20 p-4 shadow-inner hover:border-white/[0.08] transition-colors duration-300">
//               <div className="flex items-center gap-2 text-neutral-400">
//                 <Award className="h-4 w-4 group-hover:text-white transition-colors" />
//                 <span className="text-[11px] font-medium tracking-wide uppercase text-neutral-500 group-hover:text-neutral-400 transition-colors">Assets</span>
//               </div>
//               <p className="mt-2 text-3xl font-bold text-white tracking-tight">{analytics.total}</p>
//             </div>

//             <div className="group rounded-2xl border border-white/[0.04] bg-gradient-to-b from-neutral-950/60 to-neutral-950/20 p-4 shadow-inner hover:border-cyan-500/20 transition-colors duration-300">
//               <div className="flex items-center gap-2 text-cyan-400">
//                 <Layers className="h-4 w-4" />
//                 <span className="text-[11px] font-medium tracking-wide uppercase text-neutral-500 group-hover:text-cyan-500/70 transition-colors">Skills</span>
//               </div>
//               <p className="mt-2 text-3xl font-bold text-cyan-400 tracking-tight drop-shadow-[0_0_12px_rgba(34,211,238,0.2)]">{analytics.skillCount}</p>
//             </div>
//           </div>

//           {/* REFACTORED INTERACTIVE INSIGHT SHELF (PORTFOLIO DISTRIBUTION / SKILL DENSITY) */}
//           <div 
//             className="rounded-2xl border bg-gradient-to-b from-neutral-950/70 to-neutral-950/30 p-4 shadow-inner min-h-[148px] flex flex-col justify-center transition-all duration-500"
//             style={{ borderColor: activeCategory ? `${activeCategory.theme.color}20` : "rgba(255,255,255,0.04)" }}
//           >
//             <AnimatePresence mode="wait">
//               {activeCategory ? (
//                 <motion.div
//                   key={activeCategory.id}
//                   initial={{ opacity: 0, x: -8 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: 8 }}
//                   transition={{ duration: 0.2 }}
//                   className="space-y-3"
//                 >
//                   <div className="flex items-center justify-between">
//                     <span className={`text-xs font-bold uppercase tracking-wider ${activeCategory.theme.text} flex items-center gap-1.5`}>
//                       <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: activeCategory.theme.color }} />
//                       {activeCategory.name} Insight
//                     </span>
//                     <span 
//                       className="font-mono text-[11px] bg-neutral-900/80 px-2 py-0.5 rounded border transition-colors"
//                       style={{ color: activeCategory.theme.color, borderColor: `${activeCategory.theme.color}30` }}
//                     >
//                       Coverage: {Math.round((activeCategory.value / analytics.total) * 100)}%
//                     </span>
//                   </div>

//                   <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[11px] border-b border-white/[0.04] pb-2">
//                     <div className="text-neutral-500">Certificates: <span className="text-neutral-200 font-medium font-mono">{activeCategory.value}</span></div>
//                     <div className="text-neutral-500 truncate">Authorities: <span className="text-neutral-200 font-medium truncate" title={activeCategory.issuersList.join(", ")}>{activeCategory.issuersList.join(", ") || "N/A"}</span></div>
//                     <div className="text-neutral-500">Unique Skills: <span className="text-neutral-200 font-medium font-mono">{activeCategory.skills.length}</span></div>
//                     <div className="text-neutral-500">Density Score: <span className="text-neutral-200 font-medium font-mono">{activeCategory.skillDensity}/cert</span></div>
//                   </div>

//                   <div className="space-y-1">
//                     <div className="flex justify-between text-[10px] text-neutral-400">
//                       <span>Skill Concentration Density</span>
//                       <span className="font-mono font-bold text-amber-400">{activeCategory.skillDensity}</span>
//                     </div>
//                     <div className="relative h-1.5 w-full rounded-full bg-neutral-900 overflow-hidden">
//                       <motion.div 
//                         initial={{ width: 0 }}
//                         animate={{ width: `${Math.min((parseFloat(activeCategory.skillDensity) / 6) * 100, 100)}%` }}
//                         className="h-full bg-gradient-to-r from-amber-500 via-orange-400 to-amber-400"
//                       />
//                     </div>
//                   </div>
//                 </motion.div>
//               ) : (
//                 <motion.div
//                   key="global-distribution"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   className="space-y-3.5"
//                 >
//                   <div className="flex items-center justify-between text-[11px]">
//                     <span className="text-neutral-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
//                       <Cpu className="h-3 w-3 text-neutral-500" />
//                       Portfolio Distribution
//                     </span>
//                     <span className="font-mono text-neutral-500 text-[10px]">Macro Balance</span>
//                   </div>

//                   <div className="h-2 w-full rounded-full bg-neutral-900 overflow-hidden flex gap-0.5">
//                     {analytics.categoryData.map((c) => (
//                       <div 
//                         key={c.id} 
//                         className="h-full first:rounded-l-full last:rounded-r-full transition-all duration-300"
//                         style={{ 
//                           width: `${(c.value / analytics.total) * 100}%`,
//                           backgroundColor: c.theme.color 
//                         }}
//                       />
//                     ))}
//                   </div>

//                   <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-neutral-500">
//                     {analytics.categoryData.map((c) => (
//                       <span key={c.id} className="flex items-center gap-1 font-medium">
//                         <span className="h-1.5 w-1.5 rounded-full transition-transform group-hover:scale-125" style={{ backgroundColor: c.theme.color }} />
//                         {c.name} ({Math.round((c.value / analytics.total) * 100)}%)
//                       </span>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* CENTER COMPONENT: HIGH INTERACTIVE D3 ORBITAL DOME */}
//         <div className="flex flex-col items-center justify-center lg:col-span-4 relative py-4">
//           <div className="relative flex items-center justify-center h-[230px] w-[230px]">
            
//             {/* Outer Adaptive Glow Aura */}
//             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//               <div
//                 className="h-[190px] w-[190px] rounded-full blur-3xl opacity-35 transition-all duration-500"
//                 style={{ background: activeCategory?.theme.color || "rgba(56,189,248,0.2)" }}
//               />
//             </div>

//             {/* Core Backlight Ambient Array */}
//             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//               <div className="h-[140px] w-[140px] rounded-full bg-white/5 blur-xl" />
//             </div>

//             {/* Central Pulse Ring Vector */}
//             <motion.div
//               className="absolute h-[110px] w-[110px] rounded-full border border-white/5"
//               animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.6, 0.3] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//               style={{ boxShadow: `0 0 40px ${activeCategory?.theme.shadow || "rgba(255,255,255,0.02)"}` }}
//             />

//             {/* Content Display Inner HUD Layer */}
//             <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={hoveredId || "default"}
//                   initial={{ opacity: 0, scale: 0.85, y: 6 }}
//                   animate={{ opacity: 1, scale: 1, y: 0 }}
//                   exit={{ opacity: 0, scale: 0.85, y: -6 }}
//                   transition={{ type: "spring", stiffness: 350, damping: 25 }}
//                   className="flex flex-col items-center text-center"
//                 >
//                   <div
//                     className={`p-4 rounded-full border backdrop-blur-xl bg-neutral-950/80 shadow-2xl transition-all duration-300 ${activeCategory?.theme.rim || "border-white/10"}`}
//                     style={{ boxShadow: `0 0 35px ${activeCategory?.theme.shadow || "rgba(0,0,0,0)"}` }}
//                   >
//                     <ActiveLogo className={`text-2xl transition-colors duration-300 ${activeCategory?.theme.text || "text-neutral-400"}`} />
//                   </div>
                  
//                   <span className="mt-2 text-[10px] font-medium tracking-widest text-neutral-500 uppercase max-w-[120px] truncate">
//                     {activeCategory ? activeCategory.name : "Portfolio"}
//                   </span>
//                   <span className="text-xl font-bold text-white tracking-tight">
//                     {activeCategory ? `${activeCategory.value} Layers` : `${analytics.total} Active`}
//                   </span>
//                 </motion.div>
//               </AnimatePresence>
//             </div>

//             {/* D3 SVG Donut Render Track */}
//             <svg width={230} height={230} className="overflow-visible absolute z-10 rotate-[-90deg]">
//               <defs>
//                 <filter id="hudGlow">
//                   <feGaussianBlur stdDeviation="5" result="coloredBlur" />
//                   <feMerge>
//                     <feMergeNode in="coloredBlur" />
//                     <feMergeNode in="SourceGraphic" />
//                   </feMerge>
//                 </filter>
//               </defs>

//               <g transform="translate(115,115)">
//                 {arcs.map((d) => {
//                   const isHovered = d.data.id === hoveredId;
//                   return (
//                     <motion.path
//                       key={d.data.id}
//                       d={arc(d) || ""}
//                       fill={d.data.theme.color}
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       animate={{
//                         opacity: hoveredId === null ? 0.85 : isHovered ? 1 : 0.2,
//                         scale: isHovered ? 1.06 : 1,
//                       }}
//                       transition={{ type: "spring", stiffness: 280, damping: 22 }}
//                       onMouseEnter={() => setHoveredId(d.data.id)}
//                       onMouseLeave={() => setHoveredId(null)}
//                       style={{
//                         filter: isHovered ? `url(#hudGlow) drop-shadow(0 0 14px ${d.data.theme.shadow})` : "none",
//                         cursor: "pointer",
//                       }}
//                     />
//                   );
//                 })}
//               </g>
//             </svg>
//           </div>
//         </div>

//         {/* RIGHT COMPONENT: CATEGORIES FOCUS EXPANSION RACK */}
//         <div className="space-y-3.5 lg:col-span-4 w-full relative z-20">
//           <p className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 border-b border-white/[0.04] pb-2 flex justify-between items-center">
//             <span>Target Focus Tracks</span>
//             <span className="font-mono font-normal normal-case text-neutral-600 text-[9px]">Select to inspect</span>
//           </p>

//           <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-neutral-850">
//             {analytics.categoryData.map((c) => {
//               const isSelected = c.id === hoveredId;
//               const CardIcon = c.logo;

//               return (
//                 <motion.div
//                   key={c.id}
//                   onMouseEnter={() => setHoveredId(c.id)}
//                   onMouseLeave={() => setHoveredId(null)}
//                   animate={{
//                     borderColor: isSelected ? c.theme.color : "rgba(255,255,255,0.03)",
//                     backgroundColor: isSelected ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.01)",
//                     boxShadow: isSelected ? `0 0 20px -5px ${c.theme.shadow}` : "none"
//                   }}
//                   className="group flex items-center justify-between rounded-xl border p-2.5 cursor-pointer transition-all duration-300"
//                 >
//                   <div className="flex items-center gap-3 min-w-0">
//                     <div 
//                       className="p-2 rounded-lg bg-neutral-950 border border-white/[0.04] text-sm transition-colors duration-300"
//                       style={{ color: isSelected ? c.theme.color : "#a3a3a3" }}
//                     >
//                       <CardIcon />
//                     </div>
//                     <div className="truncate">
//                       <p className="text-xs font-semibold text-neutral-200 truncate group-hover:text-white transition-colors">{c.name}</p>
//                       <p className="text-[10px] text-neutral-500 font-light truncate">{c.description || "Verification sector"}</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-center gap-2 flex-shrink-0 pl-2">
//                     <span className="h-1.5 w-1.5 rounded-full transition-transform duration-300 group-hover:scale-125" style={{ backgroundColor: c.theme.color }} />
//                     <span className="text-xs font-bold text-neutral-400 font-mono group-hover:text-neutral-200 transition-colors">{c.value}</span>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* FOOTER SHELF MATRIX: DYNAMIC CONTEXTUAL FRAMEWORK SKILL TAGS */}
//       <div className="mt-8 pt-5 border-t border-white/[0.04] relative z-10">
//         <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//           <div className="space-y-0.5">
//             <span className="block text-[10px] uppercase font-bold tracking-widest text-neutral-500">
//               {activeCategory ? "Sector Competency Scope" : "Active Core Competencies"}
//             </span>
//             <p className="text-xs text-neutral-400 font-light">
//               {activeCategory ? `Verified toolchains mapping to ${activeCategory.name}` : "Cross-platform capability layers mapping over entire engineering scope."}
//             </p>
//           </div>

//           <div className="flex flex-wrap gap-1.5 max-w-xl sm:justify-end">
//             <AnimatePresence mode="popLayout">
//               {(activeCategory ? activeCategory.skills : globalSkillsSample).map((skill) => (
//                 <motion.span
//                   key={skill}
//                   layout
//                   initial={{ opacity: 0, scale: 0.9, y: 4 }}
//                   animate={{ opacity: 1, scale: 1, y: 0 }}
//                   exit={{ opacity: 0, scale: 0.9, y: -4 }}
//                   transition={{ type: "spring", stiffness: 400, damping: 30 }}
//                   style={{
//                     borderColor: activeCategory ? `${activeCategory.theme.color}30` : "rgba(255,255,255,0.04)"
//                   }}
//                   className={`rounded-md border px-2.5 py-1 text-[11px] font-medium tracking-wide shadow-sm backdrop-blur-md transition-all duration-300 ${
//                     activeCategory 
//                       ? `bg-white/[0.01] ${activeCategory.theme.text}` 
//                       : "bg-neutral-950/40 text-neutral-400 hover:text-neutral-200 hover:border-white/[0.1]"
//                   }`}
//                 >
//                   {skill}
//                 </motion.span>
//               ))}
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }


// "use client";

// import { useMemo, useState, useRef } from "react";
// import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
// import * as d3 from "d3";
// import { Award, Layers, ShieldCheck, Cpu, ChevronDown } from "lucide-react";
// import { certificationCategories } from "@/data/certifications";

// const brandThemes: Record<
//   string,
//   { aura: string; rim: string; text: string; shadow: string; color: string }
// > = {
//   cloud: {
//     aura: "from-sky-500 to-blue-600",
//     rim: "border-sky-500/30",
//     text: "text-sky-400",
//     shadow: "rgba(14, 165, 233, 0.4)",
//     color: "#0ea5e9",
//   },
//   frontend: {
//     aura: "from-pink-500 to-purple-600",
//     rim: "border-pink-500/30",
//     text: "text-pink-400",
//     shadow: "rgba(236, 72, 153, 0.4)",
//     color: "#ec4899",
//   },
//   google: {
//     aura: "from-emerald-500 to-green-600",
//     rim: "border-emerald-500/30",
//     text: "text-emerald-400",
//     shadow: "rgba(16, 185, 129, 0.4)",
//     color: "#10b981",
//   },
//   microsoft: {
//     aura: "from-blue-600 to-indigo-700",
//     rim: "border-blue-500/30",
//     text: "text-blue-400",
//     shadow: "rgba(37, 99, 235, 0.4)",
//     color: "#2563eb",
//   },
//   programming: {
//     aura: "from-amber-400 to-orange-500",
//     rim: "border-amber-500/30",
//     text: "text-amber-400",
//     shadow: "rgba(245, 158, 11, 0.4)",
//     color: "#f59e0b",
//   },
//   networking: {
//     aura: "from-teal-400 to-cyan-600",
//     rim: "border-teal-500/30",
//     text: "text-teal-400",
//     shadow: "rgba(20, 184, 166, 0.4)",
//     color: "#14b8a6",
//   },
//   database: {
//     aura: "from-violet-500 to-fuchsia-600",
//     rim: "border-violet-500/30",
//     text: "text-violet-400",
//     shadow: "rgba(139, 92, 246, 0.4)",
//     color: "#8b5cf6",
//   },
//   default: {
//     aura: "from-neutral-500 to-neutral-700",
//     rim: "border-neutral-500/30",
//     text: "text-neutral-400",
//     shadow: "rgba(115, 115, 115, 0.2)",
//     color: "#737373",
//   },
// };

// export default function CertificationUmbrellaDashboard() {
//   const [hoveredId, setHoveredId] = useState<string | null>(null);
//   const cardRef = useRef<HTMLDivElement>(null);

//   // --- 3D TILT PARALLAX LOGIC ---
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
//   const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

//   const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
//   const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     const width = rect.width;
//     const height = rect.height;
//     const mouseX = e.clientX - rect.left - width / 2;
//     const mouseY = e.clientY - rect.top - height / 2;
    
//     x.set(mouseX / width);
//     y.set(mouseY / height);
//   };

//   const handleMouseLeave = () => {
//     setHoveredId(null);
//     x.set(0);
//     y.set(0);
//   };

//   const analytics = useMemo(() => {
//     const total = certificationCategories.reduce((acc, c) => acc + c.items.length, 0);
//     const skills = certificationCategories.flatMap((c) => c.items.flatMap((i) => i.skills || []));
//     const skillCount = new Set(skills).size;
//     const issuers = new Set(certificationCategories.flatMap((c) => c.items.map((i) => i.issuer))).size;

//     const categoryData = certificationCategories.map((c) => {
//       const theme = brandThemes[c.id] || brandThemes.default;
//       const categorySkills = Array.from(new Set(c.items.flatMap((i) => i.skills || [])));
//       const categoryIssuers = Array.from(new Set(c.items.map((i) => i.issuer)));
//       const skillDensity = c.items.length > 0 ? (categorySkills.length / c.items.length).toFixed(1) : "0.0";

//       return {
//         id: c.id,
//         name: c.title,
//         value: c.items.length,
//         logo: c.logo,
//         description: c.description,
//         skills: categorySkills,
//         issuersList: categoryIssuers,
//         skillDensity,
//         theme,
//       };
//     });

//     return { total, skillCount, issuers, categoryData };
//   }, []);

//   const radius = 95;
//   const pie = useMemo(() => d3.pie<any>().value((d) => d.value).sort(null), []);
//   const arc = useMemo(() => d3.arc<any>().innerRadius(68).outerRadius(radius).cornerRadius(5).padAngle(0.035), []);

//   const arcs = useMemo(() => pie(analytics.categoryData), [analytics.categoryData, pie]);

//   const activeCategory = analytics.categoryData.find((c) => c.id === hoveredId);
//   const ActiveLogo = activeCategory?.logo || ShieldCheck;

//   const globalSkillsSample = useMemo(() => {
//     return Array.from(new Set(certificationCategories.flatMap((c) => c.items.flatMap((i) => i.skills || [])))).slice(0, 8);
//   }, []);

//   return (
//     <div style={{ perspective: "1200px" }} className="w-full mb-24">
//       <motion.div
//         ref={cardRef}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         initial={{ opacity: 0, y: 15 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//         style={{
//           rotateX,
//           rotateY,
//           transformStyle: "preserve-3d",
//           boxShadow: activeCategory 
//             ? `0 35px 80px -15px rgba(0,0,0,0.9), 0 0 60px -10px ${activeCategory.theme.shadow}`
//             : "0 35px 80px -15px rgba(0,0,0,0.9), 0 0 50px -12px rgba(20,184,166,0.15)",
//           borderColor: activeCategory ? activeCategory.theme.color : "rgba(255,255,255,0.08)"
//         }}
//         className="relative rounded-3xl border bg-neutral-900/40 p-8 pb-14 backdrop-blur-3xl overflow-hidden transition-all duration-300 hover:bg-neutral-900/50 group/card"
//       >
//         {/* Subtle 3D dynamic glare sheen */}
//         <div 
//           className="pointer-events-none absolute inset-0 z-50 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
//           style={{ transform: "translateZ(10px)" }}
//         />

//         {/* High-Fidelity Ambience Spill Overlays */}
//         <div className="pointer-events-none absolute inset-0 z-0 opacity-40" style={{ transform: "translateZ(-20px)" }}>
//           <div 
//             className="absolute -top-40 left-1/4 h-96 w-96 rounded-full blur-[140px] transition-all duration-700" 
//             style={{ backgroundColor: activeCategory?.theme.color ? `${activeCategory.theme.color}20` : "rgba(6,182,212,0.08)" }}
//           />
//           <div 
//             className="absolute -bottom-40 right-1/4 h-96 w-96 rounded-full blur-[140px] transition-all duration-700"
//             style={{ backgroundColor: activeCategory?.theme.color ? `${activeCategory.theme.color}15` : "rgba(139,92,246,0.08)" }}
//           />
//         </div>

//         {/* Base content grid */}
//         <div className="relative z-10 grid gap-10 lg:grid-cols-12 items-center" style={{ transform: "translateZ(25px)" }}>
          
//           {/* LEFT COMPONENT: KPI MATRIX */}
//           <div className="space-y-6 lg:col-span-4">
//             <div className="space-y-1.5">
//               <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
//                 <span className="h-1 w-1 rounded-full bg-cyan-400 animate-pulse" /> Telemetry Core
//               </span>
//               <h2 className="text-2xl font-bold tracking-tight text-white bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
//                 Certification Matrix
//               </h2>
//               <p className="text-xs font-light text-neutral-400 max-w-sm leading-relaxed">
//                 Real-time processing framework tracking distributed cloud credentials and systematic engineering standards.
//               </p>
//             </div>

//             <div className="grid grid-cols-2 gap-3.5">
//               <div className="group rounded-2xl border border-white/[0.04] bg-gradient-to-b from-neutral-950/60 to-neutral-950/20 p-4 shadow-inner hover:border-white/[0.08] transition-colors duration-300">
//                 <div className="flex items-center gap-2 text-neutral-400">
//                   <Award className="h-4 w-4 group-hover:text-white transition-colors" />
//                   <span className="text-[11px] font-medium tracking-wide uppercase text-neutral-500 group-hover:text-neutral-400 transition-colors">Assets</span>
//                 </div>
//                 <p className="mt-2 text-3xl font-bold text-white tracking-tight">{analytics.total}</p>
//               </div>

//               <div className="group rounded-2xl border border-white/[0.04] bg-gradient-to-b from-neutral-950/60 to-neutral-950/20 p-4 shadow-inner hover:border-cyan-500/20 transition-colors duration-300">
//                 <div className="flex items-center gap-2 text-cyan-400">
//                   <Layers className="h-4 w-4" />
//                   <span className="text-[11px] font-medium tracking-wide uppercase text-neutral-500 group-hover:text-cyan-500/70 transition-colors">Skills</span>
//                 </div>
//                 <p className="mt-2 text-3xl font-bold text-cyan-400 tracking-tight drop-shadow-[0_0_12px_rgba(34,211,238,0.2)]">{analytics.skillCount}</p>
//               </div>
//             </div>

//             {/* INTERACTIVE INSIGHT SHELF */}
//             <div 
//               className="rounded-2xl border bg-gradient-to-b from-neutral-950/70 to-neutral-950/30 p-4 shadow-inner min-h-[148px] flex flex-col justify-center transition-all duration-500"
//               style={{ borderColor: activeCategory ? `${activeCategory.theme.color}20` : "rgba(255,255,255,0.04)" }}
//             >
//               <AnimatePresence mode="wait">
//                 {activeCategory ? (
//                   <motion.div
//                     key={activeCategory.id}
//                     initial={{ opacity: 0, x: -8 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: 8 }}
//                     transition={{ duration: 0.2 }}
//                     className="space-y-3"
//                   >
//                     <div className="flex items-center justify-between">
//                       <span className={`text-xs font-bold uppercase tracking-wider ${activeCategory.theme.text} flex items-center gap-1.5`}>
//                         <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: activeCategory.theme.color }} />
//                         {activeCategory.name} Insight
//                       </span>
//                       <span 
//                         className="font-mono text-[11px] bg-neutral-900/80 px-2 py-0.5 rounded border transition-colors"
//                         style={{ color: activeCategory.theme.color, borderColor: `${activeCategory.theme.color}30` }}
//                       >
//                         Coverage: {Math.round((activeCategory.value / analytics.total) * 100)}%
//                       </span>
//                     </div>

//                     <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[11px] border-b border-white/[0.04] pb-2">
//                       <div className="text-neutral-500">Certificates: <span className="text-neutral-200 font-medium font-mono">{activeCategory.value}</span></div>
//                       <div className="text-neutral-500 truncate">Authorities: <span className="text-neutral-200 font-medium truncate" title={activeCategory.issuersList.join(", ")}>{activeCategory.issuersList.join(", ") || "N/A"}</span></div>
//                       <div className="text-neutral-500">Unique Skills: <span className="text-neutral-200 font-medium font-mono">{activeCategory.skills.length}</span></div>
//                       <div className="text-neutral-500">Density Score: <span className="text-neutral-200 font-medium font-mono">{activeCategory.skillDensity}/cert</span></div>
//                     </div>

//                     <div className="space-y-1">
//                       <div className="flex justify-between text-[10px] text-neutral-400">
//                         <span>Skill Concentration Density</span>
//                         <span className="font-mono font-bold text-amber-400">{activeCategory.skillDensity}</span>
//                       </div>
//                       <div className="relative h-1.5 w-full rounded-full bg-neutral-900 overflow-hidden">
//                         <motion.div 
//                           initial={{ width: 0 }}
//                           animate={{ width: `${Math.min((parseFloat(activeCategory.skillDensity) / 6) * 100, 100)}%` }}
//                           className="h-full bg-gradient-to-r from-amber-500 via-orange-400 to-amber-400"
//                         />
//                       </div>
//                     </div>
//                   </motion.div>
//                 ) : (
//                   <motion.div
//                     key="global-distribution"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     className="space-y-3.5"
//                   >
//                     <div className="flex items-center justify-between text-[11px]">
//                       <span className="text-neutral-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
//                         <Cpu className="h-3 w-3 text-neutral-500" />
//                         Portfolio Distribution
//                       </span>
//                       <span className="font-mono text-neutral-500 text-[10px]">Macro Balance</span>
//                     </div>

//                     <div className="h-2 w-full rounded-full bg-neutral-900 overflow-hidden flex gap-0.5">
//                       {analytics.categoryData.map((c) => (
//                         <div 
//                           key={c.id} 
//                           className="h-full first:rounded-l-full last:rounded-r-full transition-all duration-300"
//                           style={{ 
//                             width: `${(c.value / analytics.total) * 100}%`,
//                             backgroundColor: c.theme.color 
//                           }}
//                         />
//                       ))}
//                     </div>

//                     <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-neutral-500">
//                       {analytics.categoryData.map((c) => (
//                         <span key={c.id} className="flex items-center gap-1 font-medium">
//                           <span className="h-1.5 w-1.5 rounded-full transition-transform group-hover:scale-125" style={{ backgroundColor: c.theme.color }} />
//                           {c.name} ({Math.round((c.value / analytics.total) * 100)}%)
//                         </span>
//                       ))}
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>

//           {/* CENTER COMPONENT: D3 ORBITAL DOME */}
//           <div className="flex flex-col items-center justify-center lg:col-span-4 relative py-4" style={{ transform: "translateZ(35px)" }}>
//             <div className="relative flex items-center justify-center h-[230px] w-[230px]">
              
//               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//                 <div
//                   className="h-[190px] w-[190px] rounded-full blur-3xl opacity-35 transition-all duration-500"
//                   style={{ background: activeCategory?.theme.color || "rgba(56,189,248,0.2)" }}
//                 />
//               </div>

//               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//                 <div className="h-[140px] w-[140px] rounded-full bg-white/5 blur-xl" />
//               </div>

//               <motion.div
//                 className="absolute h-[110px] w-[110px] rounded-full border border-white/5"
//                 animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.6, 0.3] }}
//                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//                 style={{ boxShadow: `0 0 40px ${activeCategory?.theme.shadow || "rgba(255,255,255,0.02)"}` }}
//               />

//               <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20">
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={hoveredId || "default"}
//                     initial={{ opacity: 0, scale: 0.85, y: 6 }}
//                     animate={{ opacity: 1, scale: 1, y: 0 }}
//                     exit={{ opacity: 0, scale: 0.85, y: -6 }}
//                     transition={{ type: "spring", stiffness: 350, damping: 25 }}
//                     className="flex flex-col items-center text-center"
//                   >
//                     <div
//                       className={`p-4 rounded-full border backdrop-blur-xl bg-neutral-950/80 shadow-2xl transition-all duration-300 ${activeCategory?.theme.rim || "border-white/10"}`}
//                       style={{ boxShadow: `0 0 35px ${activeCategory?.theme.shadow || "rgba(0,0,0,0)"}` }}
//                     >
//                       <ActiveLogo className={`text-2xl transition-colors duration-300 ${activeCategory?.theme.text || "text-neutral-400"}`} />
//                     </div>
                    
//                     <span className="mt-2 text-[10px] font-medium tracking-widest text-neutral-500 uppercase max-w-[120px] truncate">
//                       {activeCategory ? activeCategory.name : "Portfolio"}
//                     </span>
//                     <span className="text-xl font-bold text-white tracking-tight">
//                       {activeCategory ? `${activeCategory.value} Layers` : `${analytics.total} Active`}
//                     </span>
//                   </motion.div>
//                 </AnimatePresence>
//               </div>

//               <svg width={230} height={230} className="overflow-visible absolute z-10 rotate-[-90deg]">
//                 <defs>
//                   <filter id="hudGlow">
//                     <feGaussianBlur stdDeviation="5" result="coloredBlur" />
//                     <feMerge>
//                       <feMergeNode in="coloredBlur" />
//                       <feMergeNode in="SourceGraphic" />
//                     </feMerge>
//                   </filter>
//                 </defs>

//                 <g transform="translate(115,115)">
//                   {arcs.map((d) => {
//                     const isHovered = d.data.id === hoveredId;
//                     return (
//                       <motion.path
//                         key={d.data.id}
//                         d={arc(d) || ""}
//                         fill={d.data.theme.color}
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         animate={{
//                           opacity: hoveredId === null ? 0.85 : isHovered ? 1 : 0.2,
//                           scale: isHovered ? 1.06 : 1,
//                         }}
//                         transition={{ type: "spring", stiffness: 280, damping: 22 }}
//                         onMouseEnter={() => setHoveredId(d.data.id)}
//                         style={{
//                           filter: isHovered ? `url(#hudGlow) drop-shadow(0 0 14px ${d.data.theme.shadow})` : "none",
//                           cursor: "pointer",
//                         }}
//                       />
//                     );
//                   })}
//                 </g>
//               </svg>
//             </div>
//           </div>

//           {/* RIGHT COMPONENT: FOCUS EXPANSION RACK */}
//           <div className="space-y-3.5 lg:col-span-4 w-full relative z-20">
//             <p className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 border-b border-white/[0.04] pb-2 flex justify-between items-center">
//               <span>Target Focus Tracks</span>
//               <span className="font-mono font-normal normal-case text-neutral-600 text-[9px]">Select to inspect</span>
//             </p>

//             <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-neutral-850">
//               {analytics.categoryData.map((c) => {
//                 const isSelected = c.id === hoveredId;
//                 const CardIcon = c.logo;

//                 return (
//                   <motion.div
//                     key={c.id}
//                     onMouseEnter={() => setHoveredId(c.id)}
//                     animate={{
//                       borderColor: isSelected ? c.theme.color : "rgba(255,255,255,0.03)",
//                       backgroundColor: isSelected ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.01)",
//                       boxShadow: isSelected ? `0 0 20px -5px ${c.theme.shadow}` : "none"
//                     }}
//                     className="group flex items-center justify-between rounded-xl border p-2.5 cursor-pointer transition-all duration-300"
//                   >
//                     <div className="flex items-center gap-3 min-w-0">
//                       <div 
//                         className="p-2 rounded-lg bg-neutral-950 border border-white/[0.04] text-sm transition-colors duration-300"
//                         style={{ color: isSelected ? c.theme.color : "#a3a3a3" }}
//                       >
//                         <CardIcon />
//                       </div>
//                       <div className="truncate">
//                         <p className="text-xs font-semibold text-neutral-200 truncate group-hover:text-white transition-colors">{c.name}</p>
//                         <p className="text-[10px] text-neutral-500 font-light truncate">{c.description || "Verification sector"}</p>
//                       </div>
//                     </div>
                    
//                     <div className="flex items-center gap-2 flex-shrink-0 pl-2">
//                       <span className="h-1.5 w-1.5 rounded-full transition-transform duration-300 group-hover:scale-125" style={{ backgroundColor: c.theme.color }} />
//                       <span className="text-xs font-bold text-neutral-400 font-mono group-hover:text-neutral-200 transition-colors">{c.value}</span>
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* FOOTER SHELF MATRIX */}
//         <div className="mt-8 pt-5 border-t border-white/[0.04] relative z-10" style={{ transform: "translateZ(15px)" }}>
//           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//             <div className="space-y-0.5">
//               <span className="block text-[10px] uppercase font-bold tracking-widest text-neutral-500">
//                 {activeCategory ? "Sector Competency Scope" : "Active Core Competencies"}
//               </span>
//               <p className="text-xs text-neutral-400 font-light">
//                 {activeCategory ? `Verified toolchains mapping to ${activeCategory.name}` : "Cross-platform capability layers mapping over entire engineering scope."}
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-1.5 max-w-xl sm:justify-end">
//               <AnimatePresence mode="popLayout">
//                 {(activeCategory ? activeCategory.skills : globalSkillsSample).map((skill) => (
//                   <motion.span
//                     key={skill}
//                     layout
//                     initial={{ opacity: 0, scale: 0.9, y: 4 }}
//                     animate={{ opacity: 1, scale: 1, y: 0 }}
//                     exit={{ opacity: 0, scale: 0.9, y: -4 }}
//                     transition={{ type: "spring", stiffness: 400, damping: 30 }}
//                     style={{
//                       borderColor: activeCategory ? `${activeCategory.theme.color}30` : "rgba(255,255,255,0.04)"
//                     }}
//                     className={`rounded-md border px-2.5 py-1 text-[11px] font-medium tracking-wide shadow-sm backdrop-blur-md transition-all duration-300 ${
//                       activeCategory 
//                         ? `bg-white/[0.01] ${activeCategory.theme.text}` 
//                         : "bg-neutral-950/40 text-neutral-400 hover:text-neutral-200 hover:border-white/[0.1]"
//                     }`}
//                   >
//                     {skill}
//                   </motion.span>
//                 ))}
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>

//         {/* DYNAMIC SCROLL INDICATOR OVERLAY */}
//         <div 
//           className="absolute bottom-3 left-0 right-0 flex justify-center pointer-events-none z-30" 
//           style={{ transform: "translateZ(40px)" }}
//         >
//           <motion.div 
//             animate={{ y: [0, 4, 0] }}
//             transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
//             className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/[0.04] bg-neutral-950/60 backdrop-blur-md shadow-lg"
//           >
//             <span className="text-[9px] font-semibold tracking-widest text-neutral-400 uppercase">
//               Scroll for Ledger Breakdown
//             </span>
//             <ChevronDown className="h-3 w-3 text-cyan-400 animate-pulse" />
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }



// "use client";

// import { useMemo, useState, useRef } from "react";
// import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
// import * as d3 from "d3";
// import { Award, Layers, ShieldCheck, Cpu, ChevronDown } from "lucide-react";
// import { certificationCategories } from "@/data/certifications";

// const brandThemes: Record<
//   string,
//   { aura: string; rim: string; text: string; shadow: string; color: string }
// > = {
//   cloud: {
//     aura: "from-sky-500 to-blue-600",
//     rim: "border-sky-500/30",
//     text: "text-sky-400",
//     shadow: "rgba(14, 165, 233, 0.4)",
//     color: "#0ea5e9",
//   },
//   frontend: {
//     aura: "from-pink-500 to-purple-600",
//     rim: "border-pink-500/30",
//     text: "text-pink-400",
//     shadow: "rgba(236, 72, 153, 0.4)",
//     color: "#ec4899",
//   },
//   google: {
//     aura: "from-emerald-500 to-green-600",
//     rim: "border-emerald-500/30",
//     text: "text-emerald-400",
//     shadow: "rgba(16, 185, 129, 0.4)",
//     color: "#10b981",
//   },
//   microsoft: {
//     aura: "from-blue-600 to-indigo-700",
//     rim: "border-blue-500/30",
//     text: "text-blue-400",
//     shadow: "rgba(37, 99, 235, 0.4)",
//     color: "#2563eb",
//   },
//   programming: {
//     aura: "from-amber-400 to-orange-500",
//     rim: "border-amber-500/30",
//     text: "text-amber-400",
//     shadow: "rgba(245, 158, 11, 0.4)",
//     color: "#f59e0b",
//   },
//   networking: {
//     aura: "from-teal-400 to-cyan-600",
//     rim: "border-teal-500/30",
//     text: "text-teal-400",
//     shadow: "rgba(20, 184, 166, 0.4)",
//     color: "#14b8a6",
//   },
//   database: {
//     aura: "from-violet-500 to-fuchsia-600",
//     rim: "border-violet-500/30",
//     text: "text-violet-400",
//     shadow: "rgba(139, 92, 246, 0.4)",
//     color: "#8b5cf6",
//   },
//   default: {
//     aura: "from-neutral-500 to-neutral-700",
//     rim: "border-neutral-500/30",
//     text: "text-neutral-400",
//     shadow: "rgba(115, 115, 115, 0.2)",
//     color: "#737373",
//   },
// };

// export default function CertificationUmbrellaDashboard() {
//   const [hoveredId, setHoveredId] = useState<string | null>(null);
//   const cardRef = useRef<HTMLDivElement>(null);

//   // --- 3D TILT PARALLAX LOGIC ---
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
//   const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

//   const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
//   const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     const width = rect.width;
//     const height = rect.height;
//     const mouseX = e.clientX - rect.left - width / 2;
//     const mouseY = e.clientY - rect.top - height / 2;
    
//     x.set(mouseX / width);
//     y.set(mouseY / height);
//   };

//   const handleMouseLeave = () => {
//     setHoveredId(null);
//     x.set(0);
//     y.set(0);
//   };

//   const analytics = useMemo(() => {
//     const total = certificationCategories.reduce((acc, c) => acc + c.items.length, 0);
//     const skills = certificationCategories.flatMap((c) => c.items.flatMap((i) => i.skills || []));
//     const skillCount = new Set(skills).size;
//     const issuers = new Set(certificationCategories.flatMap((c) => c.items.map((i) => i.issuer))).size;

//     const categoryData = certificationCategories.map((c) => {
//       const theme = brandThemes[c.id] || brandThemes.default;
//       const categorySkills = Array.from(new Set(c.items.flatMap((i) => i.skills || [])));
//       const categoryIssuers = Array.from(new Set(c.items.map((i) => i.issuer)));
//       const skillDensity = c.items.length > 0 ? (categorySkills.length / c.items.length).toFixed(1) : "0.0";

//       return {
//         id: c.id,
//         name: c.title,
//         value: c.items.length,
//         logo: c.logo,
//         description: c.description,
//         skills: categorySkills,
//         issuersList: categoryIssuers,
//         skillDensity,
//         theme,
//       };
//     });

//     return { total, skillCount, issuers, categoryData };
//   }, []);

//   const radius = 95;
//   const pie = useMemo(() => d3.pie<any>().value((d) => d.value).sort(null), []);
//   const arc = useMemo(() => d3.arc<any>().innerRadius(68).outerRadius(radius).cornerRadius(5).padAngle(0.035), []);

//   const arcs = useMemo(() => pie(analytics.categoryData), [analytics.categoryData, pie]);

//   const activeCategory = analytics.categoryData.find((c) => c.id === hoveredId);
//   const ActiveLogo = activeCategory?.logo || ShieldCheck;

//   const globalSkillsSample = useMemo(() => {
//     return Array.from(new Set(certificationCategories.flatMap((c) => c.items.flatMap((i) => i.skills || [])))).slice(0, 8);
//   }, []);

//   return (
//     <div style={{ perspective: "1200px" }} className="w-full mb-24">
//       <motion.div
//         ref={cardRef}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         initial={{ opacity: 0, y: 15 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//         style={{
//           rotateX,
//           rotateY,
//           transformStyle: "preserve-3d",
//           boxShadow: activeCategory 
//             ? `0 35px 80px -15px rgba(0,0,0,0.9), 0 0 60px -10px ${activeCategory.theme.shadow}`
//             : "0 35px 80px -15px rgba(0,0,0,0.9), 0 0 50px -12px rgba(20,184,166,0.15)",
//           borderColor: activeCategory ? activeCategory.theme.color : "rgba(255,255,255,0.08)"
//         }}
//         className="relative rounded-3xl border bg-neutral-900/40 p-8 pb-14 backdrop-blur-3xl overflow-hidden transition-all duration-300 hover:bg-neutral-900/50 group/card"
//       >
//         {/* Subtle 3D dynamic glare sheen */}
//         <div 
//           className="pointer-events-none absolute inset-0 z-50 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
//           style={{ transform: "translateZ(10px)" }}
//         />

//         {/* High-Fidelity Ambience Spill Overlays */}
//         <div className="pointer-events-none absolute inset-0 z-0 opacity-40" style={{ transform: "translateZ(-20px)" }}>
//           <div 
//             className="absolute -top-40 left-1/4 h-96 w-96 rounded-full blur-[140px] transition-all duration-700" 
//             style={{ backgroundColor: activeCategory?.theme.color ? `${activeCategory.theme.color}20` : "rgba(6,182,212,0.08)" }}
//           />
//           <div 
//             className="absolute -bottom-40 right-1/4 h-96 w-96 rounded-full blur-[140px] transition-all duration-700"
//             style={{ backgroundColor: activeCategory?.theme.color ? `${activeCategory.theme.color}15` : "rgba(139,92,246,0.08)" }}
//           />
//         </div>

//         {/* Base content grid */}
//         <div className="relative z-10 grid gap-10 lg:grid-cols-12 items-center" style={{ transform: "translateZ(25px)" }}>
          
//           {/* LEFT COMPONENT: KPI MATRIX */}
//           <div className="space-y-6 lg:col-span-4">
//             <div className="space-y-1.5">
//               <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
//                 <span className="h-1 w-1 rounded-full bg-cyan-400 animate-pulse" /> Telemetry Core
//               </span>
//               <h2 className="text-2xl font-bold tracking-tight text-white bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
//                 Certification Matrix
//               </h2>
//               <p className="text-xs font-light text-neutral-400 max-w-sm leading-relaxed">
//                 Real-time processing framework tracking distributed cloud credentials and systematic engineering standards.
//               </p>
//             </div>

//             <div className="grid grid-cols-2 gap-3.5">
//               <div className="group rounded-2xl border border-white/[0.04] bg-gradient-to-b from-neutral-950/60 to-neutral-950/20 p-4 shadow-inner hover:border-white/[0.08] transition-colors duration-300">
//                 <div className="flex items-center gap-2 text-neutral-400">
//                   <Award className="h-4 w-4 group-hover:text-white transition-colors" />
//                   <span className="text-[11px] font-medium tracking-wide uppercase text-neutral-500 group-hover:text-neutral-400 transition-colors">Assets</span>
//                 </div>
//                 <p className="mt-2 text-3xl font-bold text-white tracking-tight">{analytics.total}</p>
//               </div>

//               <div className="group rounded-2xl border border-white/[0.04] bg-gradient-to-b from-neutral-950/60 to-neutral-950/20 p-4 shadow-inner hover:border-cyan-500/20 transition-colors duration-300">
//                 <div className="flex items-center gap-2 text-cyan-400">
//                   <Layers className="h-4 w-4" />
//                   <span className="text-[11px] font-medium tracking-wide uppercase text-neutral-500 group-hover:text-cyan-500/70 transition-colors">Skills</span>
//                 </div>
//                 <p className="mt-2 text-3xl font-bold text-cyan-400 tracking-tight drop-shadow-[0_0_12px_rgba(34,211,238,0.2)]">{analytics.skillCount}</p>
//               </div>
//             </div>

//             {/* INTERACTIVE INSIGHT SHELF */}
//             <div 
//               className="rounded-2xl border bg-gradient-to-b from-neutral-950/70 to-neutral-950/30 p-4 shadow-inner min-h-[148px] flex flex-col justify-center transition-all duration-500"
//               style={{ borderColor: activeCategory ? `${activeCategory.theme.color}20` : "rgba(255,255,255,0.04)" }}
//             >
//               <AnimatePresence mode="wait">
//                 {activeCategory ? (
//                   <motion.div
//                     key={activeCategory.id}
//                     initial={{ opacity: 0, x: -8 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: 8 }}
//                     transition={{ duration: 0.2 }}
//                     className="space-y-3"
//                   >
//                     <div className="flex items-center justify-between">
//                       <span className={`text-xs font-bold uppercase tracking-wider ${activeCategory.theme.text} flex items-center gap-1.5`}>
//                         <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: activeCategory.theme.color }} />
//                         {activeCategory.name} Insight
//                       </span>
//                       <span 
//                         className="font-mono text-[11px] bg-neutral-900/80 px-2 py-0.5 rounded border transition-colors"
//                         style={{ color: activeCategory.theme.color, borderColor: `${activeCategory.theme.color}30` }}
//                       >
//                         Coverage: {Math.round((activeCategory.value / analytics.total) * 100)}%
//                       </span>
//                     </div>

//                     <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[11px] border-b border-white/[0.04] pb-2">
//                       <div className="text-neutral-500">Certificates: <span className="text-neutral-200 font-medium font-mono">{activeCategory.value}</span></div>
//                       <div className="text-neutral-500 truncate">Authorities: <span className="text-neutral-200 font-medium truncate" title={activeCategory.issuersList.join(", ")}>{activeCategory.issuersList.join(", ") || "N/A"}</span></div>
//                       <div className="text-neutral-500">Unique Skills: <span className="text-neutral-200 font-medium font-mono">{activeCategory.skills.length}</span></div>
//                       <div className="text-neutral-500">Density Score: <span className="text-neutral-200 font-medium font-mono">{activeCategory.skillDensity}/cert</span></div>
//                     </div>

//                     <div className="space-y-1">
//                       <div className="flex justify-between text-[10px] text-neutral-400">
//                         <span>Skill Concentration Density</span>
//                         <span className="font-mono font-bold text-amber-400">{activeCategory.skillDensity}</span>
//                       </div>
//                       <div className="relative h-1.5 w-full rounded-full bg-neutral-900 overflow-hidden">
//                         <motion.div 
//                           initial={{ width: 0 }}
//                           animate={{ width: `${Math.min((parseFloat(activeCategory.skillDensity) / 6) * 100, 100)}%` }}
//                           className="h-full bg-gradient-to-r from-amber-500 via-orange-400 to-amber-400"
//                         />
//                       </div>
//                     </div>
//                   </motion.div>
//                 ) : (
//                   <motion.div
//                     key="global-distribution"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     className="space-y-3.5"
//                   >
//                     <div className="flex items-center justify-between text-[11px]">
//                       <span className="text-neutral-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
//                         <Cpu className="h-3 w-3 text-neutral-500" />
//                         Portfolio Distribution
//                       </span>
//                       <span className="font-mono text-neutral-500 text-[10px]">Macro Balance</span>
//                     </div>

//                     <div className="h-2 w-full rounded-full bg-neutral-900 overflow-hidden flex gap-0.5">
//                       {analytics.categoryData.map((c) => (
//                         <div 
//                           key={c.id} 
//                           className="h-full first:rounded-l-full last:rounded-r-full transition-all duration-300"
//                           style={{ 
//                             width: `${(c.value / analytics.total) * 100}%`,
//                             backgroundColor: c.theme.color 
//                           }}
//                         />
//                       ))}
//                     </div>

//                     <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-neutral-500">
//                       {analytics.categoryData.map((c) => (
//                         <span key={c.id} className="flex items-center gap-1 font-medium">
//                           <span className="h-1.5 w-1.5 rounded-full transition-transform group-hover:scale-125" style={{ backgroundColor: c.theme.color }} />
//                           {c.name} ({Math.round((c.value / analytics.total) * 100)}%)
//                         </span>
//                       ))}
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>

//           {/* CENTER COMPONENT: D3 ORBITAL DOME */}
//           <div className="flex flex-col items-center justify-center lg:col-span-4 relative py-4" style={{ transform: "translateZ(35px)" }}>
//             <div className="relative flex items-center justify-center h-[230px] w-[230px]">
              
//               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//                 <div
//                   className="h-[190px] w-[190px] rounded-full blur-3xl opacity-35 transition-all duration-500"
//                   style={{ background: activeCategory?.theme.color || "rgba(56,189,248,0.2)" }}
//                 />
//               </div>

//               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//                 <div className="h-[140px] w-[140px] rounded-full bg-white/5 blur-xl" />
//               </div>

//               <motion.div
//                 className="absolute h-[110px] w-[110px] rounded-full border border-white/5"
//                 animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.6, 0.3] }}
//                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//                 style={{ boxShadow: `0 0 40px ${activeCategory?.theme.shadow || "rgba(255,255,255,0.02)"}` }}
//               />

//               <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20">
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={hoveredId || "default"}
//                     initial={{ opacity: 0, scale: 0.85, y: 6 }}
//                     animate={{ opacity: 1, scale: 1, y: 0 }}
//                     exit={{ opacity: 0, scale: 0.85, y: -6 }}
//                     transition={{ type: "spring", stiffness: 350, damping: 25 }}
//                     className="flex flex-col items-center text-center"
//                   >
//                     <div
//                       className={`p-4 rounded-full border backdrop-blur-xl bg-neutral-950/80 shadow-2xl transition-all duration-300 ${activeCategory?.theme.rim || "border-white/10"}`}
//                       style={{ boxShadow: `0 0 35px ${activeCategory?.theme.shadow || "rgba(0,0,0,0)"}` }}
//                     >
//                       <ActiveLogo className={`text-2xl transition-colors duration-300 ${activeCategory?.theme.text || "text-neutral-400"}`} />
//                     </div>
                    
//                     <span className="mt-2 text-[10px] font-medium tracking-widest text-neutral-500 uppercase max-w-[120px] truncate">
//                       {activeCategory ? activeCategory.name : "Portfolio"}
//                     </span>
//                     <span className="text-xl font-bold text-white tracking-tight">
//                       {activeCategory ? `${activeCategory.value} Layers` : `${analytics.total} Active`}
//                     </span>
//                   </motion.div>
//                 </AnimatePresence>
//               </div>

//               <svg width={230} height={230} className="overflow-visible absolute z-10 rotate-[-90deg]">
//                 <defs>
//                   <filter id="hudGlow">
//                     <feGaussianBlur stdDeviation="5" result="coloredBlur" />
//                     <feMerge>
//                       <feMergeNode in="coloredBlur" />
//                       <feMergeNode in="SourceGraphic" />
//                     </feMerge>
//                   </filter>
//                 </defs>

//                 <g transform="translate(115,115)">
//                   {arcs.map((d) => {
//                     const isHovered = d.data.id === hoveredId;
//                     return (
//                       <motion.path
//                         key={d.data.id}
//                         d={arc(d) || ""}
//                         fill={d.data.theme.color}
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         animate={{
//                           opacity: hoveredId === null ? 0.85 : isHovered ? 1 : 0.2,
//                           scale: isHovered ? 1.06 : 1,
//                         }}
//                         transition={{ type: "spring", stiffness: 280, damping: 22 }}
//                         onMouseEnter={() => setHoveredId(d.data.id)}
//                         style={{
//                           filter: isHovered ? `url(#hudGlow) drop-shadow(0 0 14px ${d.data.theme.shadow})` : "none",
//                           cursor: "pointer",
//                         }}
//                       />
//                     );
//                   })}
//                 </g>
//               </svg>
//             </div>
//           </div>

//           {/* RIGHT COMPONENT: FOCUS EXPANSION RACK */}
//           <div className="space-y-3.5 lg:col-span-4 w-full relative z-20">
//             <p className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 border-b border-white/[0.04] pb-2 flex justify-between items-center">
//               <span>Target Focus Tracks</span>
//               <span className="font-mono font-normal normal-case text-neutral-600 text-[9px]">Select to inspect</span>
//             </p>

//             <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-neutral-850">
//               {analytics.categoryData.map((c) => {
//                 const isSelected = c.id === hoveredId;
//                 const CardIcon = c.logo;

//                 return (
//                   <motion.div
//                     key={c.id}
//                     onMouseEnter={() => setHoveredId(c.id)}
//                     animate={{
//                       borderColor: isSelected ? c.theme.color : "rgba(255,255,255,0.03)",
//                       backgroundColor: isSelected ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.01)",
//                       boxShadow: isSelected ? `0 0 20px -5px ${c.theme.shadow}` : "none"
//                     }}
//                     className="group flex items-center justify-between rounded-xl border p-2.5 cursor-pointer transition-all duration-300"
//                   >
//                     <div className="flex items-center gap-3 min-w-0">
//                       <div 
//                         className="p-2 rounded-lg bg-neutral-950 border border-white/[0.04] text-sm transition-colors duration-300"
//                         style={{ color: isSelected ? c.theme.color : "#a3a3a3" }}
//                       >
//                         <CardIcon />
//                       </div>
//                       <div className="truncate">
//                         <p className="text-xs font-semibold text-neutral-200 truncate group-hover:text-white transition-colors">{c.name}</p>
//                         <p className="text-[10px] text-neutral-500 font-light truncate">{c.description || "Verification sector"}</p>
//                       </div>
//                     </div>
                    
//                     <div className="flex items-center gap-2 flex-shrink-0 pl-2">
//                       <span className="h-1.5 w-1.5 rounded-full transition-transform duration-300 group-hover:scale-125" style={{ backgroundColor: c.theme.color }} />
//                       <span className="text-xs font-bold text-neutral-400 font-mono group-hover:text-neutral-200 transition-colors">{c.value}</span>
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* FOOTER SHELF MATRIX */}
//         <div className="mt-8 pt-5 border-t border-white/[0.04] relative z-10" style={{ transform: "translateZ(15px)" }}>
//           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//             <div className="space-y-0.5">
//               <span className="block text-[10px] uppercase font-bold tracking-widest text-neutral-500">
//                 {activeCategory ? "Sector Competency Scope" : "Active Core Competencies"}
//               </span>
//               <p className="text-xs text-neutral-400 font-light">
//                 {activeCategory ? `Verified toolchains mapping to ${activeCategory.name}` : "Cross-platform capability layers mapping over entire engineering scope."}
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-1.5 max-w-xl sm:justify-end">
//               <AnimatePresence mode="popLayout">
//                 {(activeCategory ? activeCategory.skills : globalSkillsSample).map((skill) => (
//                   <motion.span
//                     key={skill}
//                     layout
//                     initial={{ opacity: 0, scale: 0.9, y: 4 }}
//                     animate={{ opacity: 1, scale: 1, y: 0 }}
//                     exit={{ opacity: 0, scale: 0.9, y: -4 }}
//                     transition={{ type: "spring", stiffness: 400, damping: 30 }}
//                     style={{
//                       borderColor: activeCategory ? `${activeCategory.theme.color}30` : "rgba(255,255,255,0.04)"
//                     }}
//                     className={`rounded-md border px-2.5 py-1 text-[11px] font-medium tracking-wide shadow-sm backdrop-blur-md transition-all duration-300 ${
//                       activeCategory 
//                         ? `bg-white/[0.01] ${activeCategory.theme.text}` 
//                         : "bg-neutral-950/40 text-neutral-400 hover:text-neutral-200 hover:border-white/[0.1]"
//                     }`}
//                   >
//                     {skill}
//                   </motion.span>
//                 ))}
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>

//         {/* DYNAMIC SCROLL INDICATOR OVERLAY */}
//         <div 
//           className="absolute bottom-3 left-0 right-0 flex justify-center pointer-events-none z-30" 
//           style={{ transform: "translateZ(40px)" }}
//         >
//           <motion.div 
//             animate={{ y: [0, 4, 0] }}
//             transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
//             className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/[0.04] bg-neutral-950/60 backdrop-blur-md shadow-lg"
//           >
//             <span className="text-[9px] font-semibold tracking-widest text-neutral-400 uppercase">
//               Scroll for Ledger Breakdown
//             </span>
//             <ChevronDown className="h-3 w-3 text-cyan-400 animate-pulse" />
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }



// "use client";

// import { useMemo, useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
// import * as d3 from "d3";
// import { 
//   Award, Layers, ShieldCheck, Cpu, ChevronDown, Calendar, 
//   BarChart3, Grid, Network, Sparkles, Search, CheckCircle2, 
//   ArrowUpRight, Clock, Gauge, Filter, Zap, BookOpen, ExternalLink
// } from "lucide-react";
// import { certificationCategories } from "@/data/certifications";

// // Extended TypeScript Core Interfaces based on recommendations
// export interface Certification {
//   id: string;
//   title: string;
//   issuer: string;
//   description: string;
//   image?: string;
//   issueDate: string; // YYYY-MM-DD
//   expiryDate?: string;
//   credentialId?: string;
//   credentialUrl?: string;
//   duration?: string;
//   level?: "Beginner" | "Intermediate" | "Advanced" | "Professional";
//   hours?: number;
//   featured?: boolean;
//   showOnHome?: boolean;
//   skills?: string[];
//   color?: string;
//   verified?: boolean;
// }
// type CertificationWithCategory = Certification & {
//     categoryId: string;
// };
// const brandThemes: Record<
//   string,
//   { aura: string; rim: string; text: string; shadow: string; color: string }
// > = {
//   cloud: { aura: "from-sky-500 to-blue-600", rim: "border-sky-500/30", text: "text-sky-400", shadow: "rgba(14, 165, 233, 0.4)", color: "#0ea5e9" },
//   frontend: { aura: "from-pink-500 to-purple-600", rim: "border-pink-500/30", text: "text-pink-400", shadow: "rgba(236, 72, 153, 0.4)", color: "#ec4899" },
//   google: { aura: "from-emerald-500 to-green-600", rim: "border-emerald-500/30", text: "text-emerald-400", shadow: "rgba(16, 185, 129, 0.4)", color: "#10b981" },
//   microsoft: { aura: "from-blue-600 to-indigo-700", rim: "border-blue-500/30", text: "text-blue-400", shadow: "rgba(37, 99, 235, 0.4)", color: "#2563eb" },
//   programming: { aura: "from-amber-400 to-orange-500", rim: "border-amber-500/30", text: "text-amber-400", shadow: "rgba(245, 158, 11, 0.4)", color: "#f59e0b" },
//   networking: { aura: "from-teal-400 to-cyan-600", rim: "border-teal-500/30", text: "text-teal-400", shadow: "rgba(20, 184, 166, 0.4)", color: "#14b8a6" },
//   database: { aura: "from-violet-500 to-fuchsia-600", rim: "border-violet-500/30", text: "text-violet-400", shadow: "rgba(139, 92, 246, 0.4)", color: "#8b5cf6" },
//   default: { aura: "from-neutral-500 to-neutral-700", rim: "border-neutral-500/30", text: "text-neutral-400", shadow: "rgba(115, 115, 115, 0.2)", color: "#737373" },
// };

// // Simple hook to execute count up animations for dashboard components
// function AnimatedCounter({ value }: { value: number }) {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     let start = 0;
//     const end = value;
//     if (start === end) return;
//     const totalDuration = 1000;
//     const incrementTime = Math.max(Math.floor(totalDuration / end), 20);
//     const timer = setInterval(() => {
//       start += 1;
//       setCount(start);
//       if (start >= end) clearInterval(timer);
//     }, incrementTime);
//     return () => clearInterval(timer);
//   }, [value]);
//   return <span>{count}</span>;
// }

// export default function CertificationUmbrellaDashboard() {
//   const [activeTab, setActiveTab] = useState<"overview" | "analytics" | "timeline" | "gallery" | "graph">("overview");
//   const [hoveredId, setHoveredId] = useState<string | null>(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("all");
//   const [selectedCertForDrawer, setSelectedCertForDrawer] = useState<Certification | null>(null);
  
//   const cardRef = useRef<HTMLDivElement>(null);
//   const d3GraphRef = useRef<SVGSVGElement>(null);

//   // --- 3D TILT PARALLAX LOGIC ---
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
//   const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
//   const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["2deg", "-2deg"]);
//   const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-2deg", "2deg"]);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     x.set((e.clientX - rect.left - rect.width / 2) / rect.width);
//     y.set((e.clientY - rect.top - rect.height / 2) / rect.height);
//   };

//   const handleMouseLeave = () => {
//     setHoveredId(null);
//     x.set(0);
//     y.set(0);
//   };

//   // --- COMPREHENSIVE DATA ENGINE ---
//   const analytics = useMemo(() => {
//     const total = certificationCategories.reduce((acc, c) => acc + c.items.length, 0);
//     const allCerts: CertificationWithCategory[] = certificationCategories.flatMap((c) => 
//       c.items.map((item: any) => ({
//         ...item,
//         categoryId: c.id,
//         color: brandThemes[c.id]?.color || brandThemes.default.color
//       }))
//     );

//     const skills = allCerts.flatMap((i) => i.skills || []);
//     const skillCount = new Set(skills).size;
//     const issuers = new Set(allCerts.map((i) => i.issuer)).size;
    
//     // Calculate skill frequencies
//     const skillMap: Record<string, number> = {};
//     skills.forEach(s => { skillMap[s] = (skillMap[s] || 0) + 1; });
//     const sortedSkills = Object.entries(skillMap)
//       .map(([name, count]) => ({ name, count }))
//       .sort((a, b) => b.count - a.count);

//     // Calculate issuer breakdown
//     const issuerMap: Record<string, number> = {};
//     allCerts.forEach(c => { issuerMap[c.issuer] = (issuerMap[c.issuer] || 0) + 1; });
//     const issuerDistribution = Object.entries(issuerMap).map(([name, count]) => ({ name, count }));

//     // Extract time matrix details
//     const timelineData = allCerts
//       .filter(c => c.issueDate)
//       .sort((a, b) => new Date(a.issueDate).getTime() - new Date(b.issueDate).getTime());

//     // Filter featured cards
//     const featuredCerts = allCerts.filter(c => c.featured);

//     // Compute Dynamic Health / Portfolio Score Logic (Simulated complex engine metrics)
//     const baseScore = 65;
//     const skillWeight = Math.min(skillCount * 1.5, 20);
//     const volumeWeight = Math.min(total * 1.0, 10);
//     const balanceWeight = Math.min(certificationCategories.length * 2, 10);
//     const portfolioScore = Math.min(Math.round(baseScore + skillWeight + volumeWeight + balanceWeight), 100);

//     const categoryData = certificationCategories.map((c) => {
//       const theme = brandThemes[c.id] || brandThemes.default;
//       const categorySkills = Array.from(new Set(c.items.flatMap((i: any) => i.skills || [])));
//       const categoryIssuers = Array.from(new Set(c.items.map((i: any) => i.issuer)));
//       const skillDensity = c.items.length > 0 ? (categorySkills.length / c.items.length).toFixed(1) : "0.0";

//       return {
//         id: c.id,
//         name: c.title,
//         value: c.items.length,
//         logo: c.logo,
//         description: c.description,
//         skills: categorySkills,
//         issuersList: categoryIssuers,
//         skillDensity,
//         theme,
//         items: c.items.map((item: any) => ({ ...item, categoryId: c.id }))
//       };
//     });

//     return { 
//       total, 
//       skillCount, 
//       issuers, 
//       categoryData, 
//       allCerts, 
//       sortedSkills, 
//       issuerDistribution, 
//       portfolioScore,
//       timelineData,
//       featuredCerts
//     };
//   }, []);

//   // --- D3 ORBITAL DOME LOGIC ---
//   const radius = 95;
//   const pie = useMemo(() => d3.pie<any>().value((d) => d.value).sort(null), []);
//   const arc = useMemo(() => d3.arc<any>().innerRadius(68).outerRadius(radius).cornerRadius(5).padAngle(0.035), []);
//   const arcs = useMemo(() => pie(analytics.categoryData), [analytics.categoryData, pie]);

//   const activeCategory = analytics.categoryData.find((c) => c.id === hoveredId);
//   const ActiveLogo = activeCategory?.logo || ShieldCheck;

//   // --- D3 FORCE GRAPH SYSTEM ---
//   useEffect(() => {
//     if (activeTab !== "graph" || !d3GraphRef.current) return;

//     const svg = d3.select(d3GraphRef.current);
//     svg.selectAll("*").remove();

//     const width = 500;
//     const height = 320;

//     // Build Nodes & Links arrays from architecture data
//     const nodes: any[] = [{ id: "root", label: "Core Portfolio", type: "root", size: 14 }];
//     const links: any[] = [];

//     analytics.categoryData.forEach((cat) => {
//       nodes.push({ id: cat.id, label: cat.name, type: "category", color: cat.theme.color, size: 10 });
//       links.push({ source: "root", target: cat.id });

//       cat.items.slice(0, 3).forEach((cert: any, idx: number) => {
//         const certNodeId = `${cat.id}-cert-${idx}`;
//         nodes.push({ id: certNodeId, label: cert.title, type: "cert", color: cat.theme.color, size: 6 });
//         links.push({ source: cat.id, target: certNodeId });
//       });
//     });

//     const simulation = d3.forceSimulation(nodes)
//       .force("link", d3.forceLink(links).id((d: any) => d.id).distance(50))
//       .force("charge", d3.forceManyBody().strength(-120))
//       .force("center", d3.forceCenter(width / 2, height / 2))
//       .force("collision", d3.forceCollide().radius(20));

//     const link = svg.append("g")
//       .attr("stroke", "rgba(255,255,255,0.06)")
//       .attr("stroke-width", 1.5)
//       .selectAll("line")
//       .data(links)
//       .join("line");

//     const node = svg.append("g")
//       .selectAll("g")
//       .data(nodes)
//       .join("g")
//       .call(d3.drag<any, any>()
//         .on("start", (event, d) => {
//           if (!event.active) simulation.alphaTarget(0.3).restart();
//           d.fx = d.x; d.fy = d.y;
//         })
//         .on("drag", (event, d) => { d.fx = event.x; d.fy = event.y; })
//         .on("end", (event, d) => {
//           if (!event.active) simulation.alphaTarget(0);
//           d.fx = null; d.fy = null;
//         })
//       );

//     node.append("circle")
//       .attr("r", (d: any) => d.size)
//       .attr("fill", (d: any) => d.color || "#22d3ee")
//       .attr("stroke", "#0a0a0a")
//       .attr("stroke-width", 1.5)
//       .style("box-shadow", "0 0 10px white");

//     node.append("text")
//       .text((d: any) => d.label)
//       .attr("x", 14)
//       .attr("y", 4)
//       .style("fill", "rgba(255,255,255,0.5)")
//       .style("font-size", "9px")
//       .style("pointer-events", "none")
//       .style("font-family", "monospace");

//     simulation.on("tick", () => {
//       link
//         .attr("x1", (d: any) => d.source.x)
//         .attr("y1", (d: any) => d.source.y)
//         .attr("x2", (d: any) => d.target.x)
//         .attr("y2", (d: any) => d.target.y);

//       node.attr("transform", (d: any) => `translate(${d.x},${d.y})`);
//     });

//     return () => {simulation.stop();}
//   }, [activeTab, analytics]);

//   // Filtered dataset for Gallery framework view mode
//   const filteredCertifications = useMemo(() => {
//     return analytics.allCerts.filter(c => {
//       const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
//                             c.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                             (c.skills && c.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())));
//       const matchesCategory = selectedCategoryFilter === "all" || c.categoryId === selectedCategoryFilter;
//       return matchesSearch && matchesCategory;
//     });
//   }, [analytics.allCerts, searchQuery, selectedCategoryFilter]);

//   return (
//     <div style={{ perspective: "1400px" }} className="w-full mb-24 text-neutral-200">
      
//       {/* PREMIUM TAB ARCHITECTURE NAVIGATION SWITCHBOARD */}
//       <div className="flex flex-wrap items-center justify-center gap-1.5 mb-6 bg-neutral-950/60 p-1.5 rounded-2xl border border-white/[0.04] max-w-3xl mx-auto backdrop-blur-xl">
//         {[
//           { id: "overview", label: "Overview", icon: Cpu },
//           { id: "analytics", label: "Analytics Stack", icon: BarChart3 },
//           { id: "timeline", label: "Learning Ledger", icon: Calendar },
//           { id: "gallery", label: "Cert Showcase", icon: Grid },
//           { id: "graph", label: "Knowledge Graph", icon: Network }
//         ].map((tab) => {
//           const TabIcon = tab.icon;
//           return (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id as any)}
//               className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all duration-300 relative ${
//                 activeTab === tab.id ? "text-cyan-400 bg-white/[0.04] border border-cyan-500/10 shadow-inner" : "text-neutral-400 hover:text-white hover:bg-white/[0.01]"
//               }`}
//             >
//               <TabIcon className="h-3.5 w-3.5" />
//               {tab.label}
//               {activeTab === tab.id && (
//                 <motion.span layoutId="activeTabUnderline" className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
//               )}
//             </button>
//           );
//         })}
//       </div>

//       <motion.div
//         ref={cardRef}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         style={{
//           rotateX,
//           rotateY,
//           transformStyle: "preserve-3d",
//           boxShadow: activeCategory 
//             ? `0 35px 90px -15px rgba(0,0,0,0.95), 0 0 70px -10px ${activeCategory.theme.shadow}`
//             : "0 35px 90px -15px rgba(0,0,0,0.95), 0 0 60px -12px rgba(20,184,166,0.12)",
//           borderColor: activeCategory ? activeCategory.theme.color : "rgba(255,255,255,0.06)"
//         }}
//         className="relative rounded-3xl border bg-neutral-900/30 p-6 md:p-8 pb-12 backdrop-blur-3xl overflow-hidden transition-all duration-300 group/card"
//       >
//         {/* Dynamic glare sheen overlay sheets */}
//         <div className="pointer-events-none absolute inset-0 z-50 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" style={{ transform: "translateZ(15px)" }} />

//         {/* High-Fidelity Ambience Spill Blobs */}
//         <div className="pointer-events-none absolute inset-0 z-0 opacity-30" style={{ transform: "translateZ(-30px)" }}>
//           <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full blur-[150px] transition-all duration-700" style={{ backgroundColor: activeCategory?.theme.color ? `${activeCategory.theme.color}25` : "rgba(6,182,212,0.1)" }} />
//           <div className="absolute -bottom-40 right-1/4 h-96 w-96 rounded-full blur-[150px] transition-all duration-700" style={{ backgroundColor: activeCategory?.theme.color ? `${activeCategory.theme.color}20` : "rgba(139,92,246,0.1)" }} />
//         </div>

//         {/* MAIN CONTROLLER DASHBOARD BODY WITH HOISTED ANTERIOR STATES */}
//         <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
          
//           <AnimatePresence mode="wait">
//             {/* TAB 1: EXECUTIVE METRIC OVERVIEW */}
//             {activeTab === "overview" && (
//               <motion.div key="overview" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }} className="grid gap-8 lg:grid-cols-12 items-center">
                
//                 {/* LEFT KPI MATRICES */}
//                 <div className="space-y-6 lg:col-span-4">
//                   <div className="space-y-1.5">
//                     <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-400">
//                       <span className="h-1 w-1 rounded-full bg-cyan-400 animate-pulse" /> Telemetry Core v2.0
//                     </span>
//                     <h2 className="text-2xl font-bold tracking-tight text-white bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">Certification Engine</h2>
//                     <p className="text-xs font-light text-neutral-400 leading-relaxed">Framework metrics mapping global cloud distribution, toolchain expertise, and real-world system benchmarks.</p>
//                   </div>

//                   <div className="grid grid-cols-2 gap-3.5">
//                     {/* ENHANCED SCORE DIAL CONTAINER */}
//                     <div className="group rounded-2xl border border-white/[0.04] bg-gradient-to-b from-neutral-950/70 to-neutral-950/30 p-4 shadow-inner hover:border-cyan-500/20 transition-all duration-300 flex flex-col justify-between">
//                       <div className="flex items-center gap-2 text-cyan-400">
//                         <Gauge className="h-4 w-4" />
//                         <span className="text-[10px] font-bold tracking-wider uppercase text-neutral-500 group-hover:text-cyan-400 transition-colors">Portfolio Health</span>
//                       </div>
//                       <div className="mt-3">
//                         <p className="text-4xl font-extrabold text-white tracking-tight"><AnimatedCounter value={analytics.portfolioScore} />%</p>
//                         <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1 mt-0.5"><CheckCircle2 className="h-2.5 w-2.5" /> Excellent standing</span>
//                       </div>
//                     </div>

//                     <div className="group rounded-2xl border border-white/[0.04] bg-gradient-to-b from-neutral-950/70 to-neutral-950/30 p-4 shadow-inner hover:border-white/[0.08] transition-all duration-300 flex flex-col justify-between">
//                       <div className="flex items-center gap-2 text-neutral-400">
//                         <Layers className="h-4 w-4" />
//                         <span className="text-[10px] font-bold tracking-wider uppercase text-neutral-500 group-hover:text-neutral-400 transition-colors">Unique Skills</span>
//                       </div>
//                       <div className="mt-3">
//                         <p className="text-4xl font-extrabold text-cyan-400 tracking-tight"><AnimatedCounter value={analytics.skillCount} /></p>
//                         <span className="text-[10px] text-neutral-500">Across {analytics.issuers} platforms</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* INTERACTIVE INSIGHT MATRIX RACK */}
//                   <div className="rounded-2xl border bg-gradient-to-b from-neutral-950/80 to-neutral-950/40 p-4 shadow-inner min-h-[140px] flex flex-col justify-center transition-all duration-500" style={{ borderColor: activeCategory ? `${activeCategory.theme.color}20` : "rgba(255,255,255,0.04)" }}>
//                     {activeCategory ? (
//                       <div className="space-y-3">
//                         <div className="flex items-center justify-between">
//                           <span className={`text-xs font-bold uppercase tracking-wider ${activeCategory.theme.text} flex items-center gap-1.5`}>
//                             <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: activeCategory.theme.color }} /> {activeCategory.name} Insight
//                           </span>
//                           <span className="font-mono text-[10px] bg-neutral-900/80 px-2 py-0.5 rounded border" style={{ color: activeCategory.theme.color, borderColor: `${activeCategory.theme.color}20` }}>
//                             Coverage: {Math.round((activeCategory.value / analytics.total) * 100)}%
//                           </span>
//                         </div>
//                         <div className="grid grid-cols-2 gap-y-1.5 text-[11px] border-b border-white/[0.04] pb-2 text-neutral-400">
//                           <div>Assets: <span className="text-neutral-200 font-mono font-bold">{activeCategory.value}</span></div>
//                           <div className="truncate">Issuers: <span className="text-neutral-200 font-medium truncate">{activeCategory.issuersList[0] || "Global"}</span></div>
//                           <div>Toolchains: <span className="text-neutral-200 font-mono font-bold">{activeCategory.skills.length}</span></div>
//                           <div>Density Score: <span className="text-neutral-200 font-mono font-bold">{activeCategory.skillDensity}/c</span></div>
//                         </div>
//                         <div className="space-y-1">
//                           <div className="flex justify-between text-[10px] text-neutral-400"><span>Concentration Strength</span><span className="font-mono text-cyan-400">{activeCategory.skillDensity}</span></div>
//                           <div className="h-1 w-full bg-neutral-900 rounded-full overflow-hidden">
//                             <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500" style={{ width: `${Math.min((parseFloat(activeCategory.skillDensity) / 5) * 100, 100)}%` }} />
//                           </div>
//                         </div>
//                       </div>
//                     ) : (
//                       <div className="space-y-3">
//                         <div className="flex items-center justify-between text-[11px]">
//                           <span className="text-neutral-400 font-semibold uppercase tracking-wider flex items-center gap-1.5"><Sparkles className="h-3 w-3 text-amber-400" /> AI Portfolio Engine</span>
//                           <span className="text-[10px] text-neutral-500 font-mono">Real-time Summary</span>
//                         </div>
//                         <p className="text-xs font-light text-neutral-400 leading-normal bg-white/[0.01] border border-white/[0.03] p-2.5 rounded-xl">
//                           &quot;Demonstrates a distinct concentration index in <span className="text-cyan-400 font-medium">Cloud Architectures</span> and modern orchestration models. Recommended optimization vector: integrate infrastructure-as-code automation frameworks.&quot;
//                         </p>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 {/* D3 ROTATING GRAPH ORBIT */}
//                 <div className="flex flex-col items-center justify-center lg:col-span-4 relative py-2">
//                   <div className="relative flex items-center justify-center h-[220px] w-[220px]">
//                     <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//                       <div className="h-[180px] w-[180px] rounded-full blur-3xl opacity-25 transition-all duration-500" style={{ background: activeCategory?.theme.color || "rgba(56,189,248,0.2)" }} />
//                     </div>
//                     <motion.div className="absolute h-[110px] w-[110px] rounded-full border border-white/5" animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 4, repeat: Infinity }} />
                    
//                     <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20">
//                       <ActiveLogo className={`text-3xl mb-1 transition-colors ${activeCategory?.theme.text || "text-neutral-400"}`} />
//                       <span className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase max-w-[120px] truncate">{activeCategory ? activeCategory.name : "Total Portfolio"}</span>
//                       <span className="text-xl font-black text-white">{activeCategory ? `${activeCategory.value} Tracks` : `${analytics.total} Active`}</span>
//                     </div>

//                     <svg width={220} height={220} className="overflow-visible absolute z-10 rotate-[-90deg]">
//                       <g transform="translate(110,110)">
//                         {arcs.map((d) => {
//                           const isHovered = d.data.id === hoveredId;
//                           return (
//                             <motion.path
//                               key={d.data.id}
//                               d={arc(d) || ""}
//                               fill={d.data.theme.color}
//                               animate={{ opacity: hoveredId === null ? 0.8 : isHovered ? 1 : 0.2, scale: isHovered ? 1.05 : 1 }}
//                               onMouseEnter={() => setHoveredId(d.data.id)}
//                               style={{ cursor: "pointer" }}
//                             />
//                           );
//                         })}
//                       </g>
//                     </svg>
//                   </div>
//                 </div>

//                 {/* TRACK FOCUS CONSOLE SELECTION RACK */}
//                 <div className="space-y-3 lg:col-span-4 w-full">
//                   <p className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 border-b border-white/[0.04] pb-2 flex justify-between">
//                     <span>Target Focus Modules</span>
//                     <span className="font-mono text-[9px] text-neutral-600">Hover sectors</span>
//                   </p>
//                   <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1 scrollbar-thin">
//                     {analytics.categoryData.map((c) => {
//                       const isSelected = c.id === hoveredId;
//                       const CatIcon = c.logo;
//                       return (
//                         <div
//                           key={c.id}
//                           onMouseEnter={() => setHoveredId(c.id)}
//                           className={`flex items-center justify-between rounded-xl border p-2.5 cursor-pointer transition-all duration-300 ${
//                             isSelected ? "bg-white/[0.03] border-neutral-600" : "bg-neutral-950/20 border-white/[0.02]"
//                           }`}
//                           style={{ borderColor: isSelected ? c.theme.color : "rgba(255,255,255,0.02)" }}
//                         >
//                           <div className="flex items-center gap-2.5 min-w-0">
//                             <div className="p-2 rounded-lg bg-neutral-950 text-neutral-400" style={{ color: isSelected ? c.theme.color : "" }}>
//                               <CatIcon className="h-3.5 w-3.5" />
//                             </div>
//                             <div className="truncate">
//                               <p className="text-xs font-semibold text-neutral-200 truncate">{c.name}</p>
//                               <p className="text-[10px] text-neutral-500 truncate">{c.description || "Verified architecture vector"}</p>
//                             </div>
//                           </div>
//                           <div className="flex items-center gap-1.5 font-mono text-xs font-bold pl-2">
//                             <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: c.theme.color }} />
//                             <span>{c.value}</span>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>

//               </motion.div>
//             )}

//             {/* TAB 2: METRIC VISUALIZATION & ISSUER ANALYTICS STACK */}
//             {activeTab === "analytics" && (
//               <motion.div key="analytics" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   {/* ISSUER PLATFORM MATRIX DISTRIBUTION BAR CHART */}
//                   <div className="rounded-2xl border border-white/[0.04] bg-neutral-950/40 p-5 space-y-4">
//                     <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
//                       <Award className="h-3.5 w-3.5 text-cyan-400" /> Platform Issuer Distribution
//                     </h3>
//                     <div className="space-y-2.5 pt-2">
//                       {analytics.issuerDistribution.map((issuer) => {
//                         const percent = Math.round((issuer.count / analytics.total) * 100);
//                         return (
//                           <div key={issuer.name} className="space-y-1 group">
//                             <div className="flex justify-between text-[11px]">
//                               <span className="text-neutral-300 font-medium group-hover:text-white transition-colors">{issuer.name}</span>
//                               <span className="text-neutral-500 font-mono">{issuer.count} ({percent}%)</span>
//                             </div>
//                             <div className="h-2 w-full bg-neutral-900 rounded-md overflow-hidden relative">
//                               <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md transition-all duration-500" style={{ width: `${percent}%` }} />
//                             </div>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>

//                   {/* HIGH-CONCENTRATION SKILL INTENSITY HEAT BAR MATRIX */}
//                   <div className="rounded-2xl border border-white/[0.04] bg-neutral-950/40 p-5 space-y-4">
//                     <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
//                       <Zap className="h-3.5 w-3.5 text-amber-400" /> Technology Skill Intensity Vector
//                     </h3>
//                     <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
//                       {analytics.sortedSkills.slice(0, 6).map((skill) => {
//                         const percent = Math.min((skill.count / analytics.total) * 100 * 2, 100);
//                         return (
//                           <div key={skill.name} className="space-y-1">
//                             <div className="flex justify-between text-[11px]">
//                               <span className="text-neutral-300 font-medium">{skill.name}</span>
//                               <span className="text-amber-400 font-mono text-[10px] bg-amber-500/5 border border-amber-500/10 px-1.5 py-0.2 rounded">Weight Index: {skill.count}</span>
//                             </div>
//                             <div className="h-1.5 w-full bg-neutral-900 rounded-md overflow-hidden">
//                               <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-md" style={{ width: `${percent}%` }} />
//                             </div>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 </div>

//                 {/* REC ENGINE ENGINE SHELF CONTAINER */}
//                 <div className="rounded-2xl border border-dashed border-cyan-500/20 bg-cyan-500/[0.02] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//                   <div className="space-y-0.5">
//                     <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wide flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5 animate-spin" /> Suggested Specialized Training Vectors</h4>
//                     <p className="text-[11px] text-neutral-400 font-light">Calculated delta gaps matching global platform footprint matrices.</p>
//                   </div>
//                   <div className="flex flex-wrap gap-2">
//                     {["Terraform Core", "Kubernetes CKA", "AWS Solutions Architect", "GitHub Advanced DevOps"].map((rec) => (
//                       <span key={rec} className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-md bg-neutral-950/80 border border-white/[0.04] text-neutral-300 hover:border-cyan-400/40 transition-colors cursor-pointer">
//                         + {rec}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             )}

//             {/* TAB 3: TIMELINE HORIZONTAL JOURNEY LEDGER */}
//             {activeTab === "timeline" && (
//               <motion.div key="timeline" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
//                 <div className="flex items-center justify-between border-b border-white/[0.04] pb-2">
//                   <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">Chronological Deployment Journey</h3>
//                   <span className="text-[10px] font-mono text-neutral-500">Historical Pipeline</span>
//                 </div>
                
//                 <div className="flex gap-4 overflow-x-auto pb-4 pt-2 scrollbar-thin snap-x">
//                   {analytics.timelineData.map((cert, index) => (
//                     <div key={cert.id || index} className="min-w-[210px] max-w-[210px] bg-neutral-950/40 border border-white/[0.04] rounded-xl p-4 snap-center space-y-3 flex-shrink-0 relative group hover:border-neutral-700 transition-all">
//                       <div className="absolute -top-1.5 left-4 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded text-[8px] font-mono text-cyan-400 font-bold">
//                         {cert.issueDate ? cert.issueDate.substring(0, 7) : "Active"}
//                       </div>
//                       <div className="pt-2">
//                         <h4 className="text-xs font-bold text-neutral-200 line-clamp-1 group-hover:text-cyan-400 transition-colors">{cert.title}</h4>
//                         <p className="text-[10px] text-neutral-500 font-mono">{cert.issuer}</p>
//                       </div>
//                       <div className="h-px bg-white/[0.04] w-full" />
//                       <div className="flex flex-wrap gap-1">
//                         {cert.skills?.slice(0, 2).map(s => (
//                           <span key={s} className="text-[9px] bg-neutral-900 border border-white/[0.03] px-1.5 py-0.2 rounded text-neutral-400">{s}</span>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             )}

//             {/* TAB 4: ADVANCED HIGH-END GRID MATRIX SHOWCASE */}
//             {activeTab === "gallery" && (
//               <motion.div key="gallery" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-5">
                
//                 {/* ADVANCED MULTI-AXIS FILTER AND SEARCH RACK */}
//                 <div className="flex flex-col sm:flex-row gap-3">
//                   <div className="relative flex-1">
//                     <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-neutral-500" />
//                     <input 
//                       type="text" 
//                       placeholder="Search credentials, technical toolchains, domains..." 
//                       value={searchQuery}
//                       onChange={(e) => setSearchQuery(e.target.value)}
//                       className="w-full bg-neutral-950/50 border border-white/[0.04] rounded-xl pl-9 pr-4 py-2 text-xs focus:outline-none focus:border-cyan-500/40 transition-all text-neutral-200"
//                     />
//                   </div>
//                   <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
//                     <button 
//                       onClick={() => setSelectedCategoryFilter("all")}
//                       className={`px-3 py-1.5 rounded-lg text-[11px] font-medium border whitespace-nowrap transition-all ${
//                         selectedCategoryFilter === "all" ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" : "bg-neutral-950/30 text-neutral-400 border-white/[0.03]"
//                       }`}
//                     >
//                       All Domains
//                     </button>
//                     {analytics.categoryData.map(cat => (
//                       <button 
//                         key={cat.id}
//                         onClick={() => setSelectedCategoryFilter(cat.id)}
//                         className={`px-3 py-1.5 rounded-lg text-[11px] font-medium border whitespace-nowrap transition-all ${
//                           selectedCategoryFilter === cat.id ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" : "bg-neutral-950/30 text-neutral-400 border-white/[0.03]"
//                         }`}
//                       >
//                         {cat.name}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* CERTIFICATE DEPLOYMENT GRID */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-h-[340px] overflow-y-auto pr-1">
//                   {filteredCertifications.map((cert) => (
//                     <div 
//                       key={cert.id} 
//                       onClick={() => setSelectedCertForDrawer(cert)}
//                       className="group p-4 rounded-xl border border-white/[0.04] bg-neutral-950/30 hover:bg-neutral-950/60 hover:border-neutral-700 transition-all duration-300 cursor-pointer space-y-3 relative overflow-hidden"
//                     >
//                       {/* Left vertical border indicator dynamically color-keyed */}
//                       <div className="absolute left-0 top-0 bottom-0 w-1 bg-neutral-500" style={{ backgroundColor: cert.color }} />
                      
//                       <div className="space-y-1">
//                         <div className="flex items-start justify-between gap-2">
//                           <h4 className="text-xs font-bold text-neutral-200 group-hover:text-cyan-400 transition-colors line-clamp-1">{cert.title}</h4>
//                           <ArrowUpRight className="h-3 w-3 text-neutral-600 group-hover:text-neutral-400 flex-shrink-0" />
//                         </div>
//                         <p className="text-[10px] text-neutral-500 font-medium font-mono">{cert.issuer}</p>
//                       </div>

//                       <p className="text-[11px] text-neutral-400 font-light line-clamp-2 leading-relaxed">{cert.description}</p>

//                       <div className="flex items-center justify-between pt-1 text-[9px] text-neutral-500 font-mono">
//                         <span className="flex items-center gap-1"><Calendar className="h-2.5 w-2.5" /> {cert.issueDate || "Active"}</span>
//                         {cert.level && <span className="bg-white/[0.03] border border-white/[0.05] px-1.5 py-0.2 rounded text-neutral-400">{cert.level}</span>}
//                       </div>
//                     </div>
//                   ))}

//                   {filteredCertifications.length === 0 && (
//                     <div className="col-span-full py-12 text-center text-xs text-neutral-500 font-mono">
//                       No matching verified credentials discovered in current filtered submatrix.
//                     </div>
//                   )}
//                 </div>
//               </motion.div>
//             )}

//             {/* TAB 5: D3 TOPOLOGICAL KNOWLEDGE NODE GRAPH MAP */}
//             {activeTab === "graph" && (
//               <motion.div key="graph" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-4">
//                 <div className="flex justify-between items-center border-b border-white/[0.04] pb-2">
//                   <div className="space-y-0.5">
//                     <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">Interactive Infrastructure Topography</h3>
//                     <p className="text-[10px] text-neutral-500 font-light">Force-directed vector mapping linkages across platforms, certificates, and domains.</p>
//                   </div>
//                   <span className="text-[9px] font-mono bg-neutral-950 px-2 py-0.5 rounded border border-white/[0.05] text-neutral-500 animate-pulse">Fully Draggable Nodes</span>
//                 </div>
//                 <div className="w-full bg-neutral-950/40 rounded-2xl border border-white/[0.04] overflow-hidden flex justify-center">
//                   <svg ref={d3GraphRef} width={500} height={320} className="w-full max-w-[500px]" />
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>

//         </div>

//         {/* COMPACT PERIPHERAL FLOATING FOOTER MATRIX COMPREHENSION CHIPS */}
//         <div className="mt-8 pt-5 border-t border-white/[0.04] relative z-10" style={{ transform: "translateZ(10px)" }}>
//           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//             <div className="space-y-0.5">
//               <span className="block text-[10px] uppercase font-bold tracking-widest text-neutral-500">
//                 {activeCategory ? "Sector Technical Competencies" : "Active Core Competencies"}
//               </span>
//               <p className="text-xs text-neutral-400 font-light">
//                 {activeCategory ? `Verified toolchains mapping explicitly to ${activeCategory.name}.` : "Cross-platform engineering capabilities mapping global architectures."}
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-1.5 max-w-xl sm:justify-end">
//               {(activeCategory ? activeCategory.skills : analytics.sortedSkills.slice(0, 8).map(s => s.name)).map((skill) => (
//                 <span
//                   key={skill}
//                   style={{ borderColor: activeCategory ? `${activeCategory.theme.color}30` : "rgba(255,255,255,0.04)" }}
//                   className={`rounded-md border px-2.5 py-1 text-[11px] font-mono font-medium tracking-wide backdrop-blur-md transition-all duration-300 ${
//                     activeCategory ? `bg-white/[0.01] ${activeCategory.theme.text}` : "bg-neutral-950/40 text-neutral-400 hover:text-cyan-400"
//                   }`}
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* DYNAMIC SCROLL SLIDE RUNWAY INDICATOR */}
//         <div className="absolute bottom-3 left-0 right-0 flex justify-center pointer-events-none z-30" style={{ transform: "translateZ(30px)" }}>
//           <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/[0.04] bg-neutral-950/70 backdrop-blur-md shadow-lg">
//             <span className="text-[9px] font-bold tracking-widest text-neutral-500 uppercase">Scroll Matrix for Ledger Breakdown</span>
//             <ChevronDown className="h-3 w-3 text-cyan-400 animate-bounce" />
//           </div>
//         </div>
//       </motion.div>

//       {/* OVERLAY DRAWER: DETAILED LOOKUP SHEET FOR CHOSEN CREDENTIALS */}
//       <AnimatePresence>
//         {selectedCertForDrawer && (
//           <>
//             {/* Backdrop lock blur layer */}
//             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedCertForDrawer(null)} className="fixed inset-0 bg-black/60 backdrop-blur-md z-50" />
            
//             {/* Slide up panel sheet container */}
//             <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 30, stiffness: 300 }} className="fixed bottom-0 left-0 right-0 max-w-2xl mx-auto bg-neutral-900 border-t border-white/[0.08] rounded-t-3xl p-6 z-50 space-y-6 shadow-2xl text-neutral-200">
//               <div className="flex justify-between items-start">
//                 <div className="space-y-1">
//                   <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest bg-cyan-500/5 border border-cyan-500/10 px-2 py-0.5 rounded-md">Verified Asset Blueprint</span>
//                   <h3 className="text-lg font-bold text-white pt-1">{selectedCertForDrawer.title}</h3>
//                   <p className="text-xs text-neutral-400 font-mono">{selectedCertForDrawer.issuer}</p>
//                 </div>
//                 <button onClick={() => setSelectedCertForDrawer(null)} className="text-xs bg-neutral-950 border border-white/[0.04] px-2.5 py-1 rounded-lg text-neutral-400 hover:text-white">✕ Close</button>
//               </div>

//               <div className="h-px bg-white/[0.04] w-full" />

//               <div className="space-y-2">
//                 <h4 className="text-[10px] font-bold tracking-wider text-neutral-500 uppercase">Credential Architectural Objective</h4>
//                 <p className="text-xs text-neutral-300 font-light leading-relaxed">{selectedCertForDrawer.description}</p>
//               </div>

//               <div className="grid grid-cols-2 gap-4 bg-neutral-950/40 p-4 rounded-xl border border-white/[0.02]">
//                 <div className="text-xs text-neutral-400 space-y-1">
//                   <div>Deployment: <span className="text-neutral-200 font-mono font-medium">{selectedCertForDrawer.issueDate || "N/A"}</span></div>
//                   <div>Expiry Window: <span className="text-neutral-200 font-mono font-medium">{selectedCertForDrawer.expiryDate || "Never"}</span></div>
//                 </div>
//                 <div className="text-xs text-neutral-400 space-y-1">
//                   <div>Verification Status: <span className="text-emerald-400 font-medium">✓ System Cleared</span></div>
//                   <div>Difficulty Index: <span className="text-neutral-200 font-medium">{selectedCertForDrawer.level || "Intermediate"}</span></div>
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <h4 className="text-[10px] font-bold tracking-wider text-neutral-500 uppercase">Acquired Toolchain Competencies</h4>
//                 <div className="flex flex-wrap gap-1.5">
//                   {selectedCertForDrawer.skills?.map(s => (
//                     <span key={s} className="text-[11px] font-mono bg-neutral-950 border border-white/[0.04] px-2.5 py-1 rounded-md text-neutral-300">{s}</span>
//                   )) || <span className="text-xs text-neutral-500 italic">No explicit micro skills tags mapped.</span>}
//                 </div>
//               </div>

//               {selectedCertForDrawer.credentialUrl && (
//                 <a href={selectedCertForDrawer.credentialUrl} target="_blank" rel="noopener noreferrer" className="w-full py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-lg">
//                   <ExternalLink className="h-3.5 w-3.5" /> Query Live Credential Database Authority
//                 </a>
//               )}
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//     </div>
//   );
// }




// "use client";

// import { useMemo, useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
// import * as d3 from "d3";
// import { 
//   Award, Layers, ShieldCheck, Cpu, Search, Sparkles, 
//   Calendar, Network, Folder, CheckCircle, Info, ExternalLink, 
//   Clock, MapPin, Monitor, Flame, Zap, HelpCircle, ChevronRight, X
// } from "lucide-react";
// import { certificationCategories, Certification, CertificationCategory } from "@/data/certifications";

// // --- Tab Configurations ---
// const DASHBOARD_TABS = [
//   { id: "overview", label: "Executive Overview", icon: Cpu },
//   { id: "analytics", label: "Distribution & Analytics", icon: Layers },
//   { id: "timeline", label: "Learning Timeline", icon: Calendar },
//   { id: "gallery", label: "Credentials Vault", icon: Award },
//   { id: "graph", label: "Knowledge Architecture", icon: Network },
//   { id: "ai-insights", label: "AI Strategy Engine", icon: Sparkles },
// ];

// // --- Counter Hook for Count-Up Animation ---
// function Counter({ value }: { value: number }) {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     let start = 0;
//     const end = value;
//     if (start === end) return;
//     const totalDuration = 1000;
//     const incrementTime = Math.abs(Math.floor(totalDuration / end));
//     const timer = setInterval(() => {
//       start += 1;
//       setCount(start);
//       if (start === end) clearInterval(timer);
//     }, incrementTime);
//     return () => clearInterval(timer);
//   }, [value]);
//   return <>{count}</>;
// }

// export default function CertificationUmbrellaDashboard() {
//   const [activeTab, setActiveTab] = useState("overview");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedFilter, setSelectedFilter] = useState("All");
//   const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

//   // --- Flattened Data Utilities ---
//   const allCertifications = useMemo(() => {
//     return certificationCategories.flatMap((cat) => 
//       cat.items.map((item) => ({ ...item, categoryId: cat.id, categoryTitle: cat.title }))
//     );
//   }, []);

//   const uniqueIssuers = useMemo(() => {
//     return Array.from(new Set(allCertifications.map((c) => c.issuer)));
//   }, [allCertifications]);

//   const uniqueSkills = useMemo(() => {
//     return Array.from(new Set(allCertifications.flatMap((c) => c.skills)));
//   }, [allCertifications]);

//   // --- Dynamic Portfolio Health Score Metrics ---
//   const portfolioScoreMetrics = useMemo(() => {
//     const totalCerts = allCertifications.length;
//     const verifiedCount = allCertifications.filter(c => c.verified).length;
//     const advancedCerts = allCertifications.filter(c => c.level === "Advanced" || c.level === "Professional").length;
//     const platformDiversity = new Set(allCertifications.map(c => c.learningPlatform)).size;

//     // Premium algorithmic calculation stringing together real data metrics
//     let score = 60; 
//     score += (verifiedCount / totalCerts) * 15;
//     score += (advancedCerts / totalCerts) * 15;
//     score += Math.min(platformDiversity * 2.5, 10);
//     const finalScore = Math.min(Math.round(score), 100);

//     let rating = "Good";
//     let colorClass = "text-amber-400";
//     if (finalScore >= 90) { rating = "Excellent"; colorClass = "text-emerald-400"; }
//     else if (finalScore >= 80) { rating = "Very Good"; colorClass = "text-cyan-400"; }

//     return { score: finalScore, rating, colorClass };
//   }, [allCertifications]);

//   return (
//     <div className="w-full text-white space-y-8 select-none min-h-screen pb-20">
      
//       {/* HEADER CONTROLS / PREMIUM NAVIGATION CAROUSEL */}
//       <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-white/[0.06] pb-4">
//         <div className="flex items-center gap-3">
//           <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)]">
//             <ShieldCheck className="h-5 w-5 text-white animate-pulse" />
//           </div>
//           <div>
//             <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
//               Ecosystem Intelligence Hub
//             </h1>
//             <p className="text-xs text-neutral-500">Continuous telemetry pipeline verifying engineering certifications</p>
//           </div>
//         </div>

//         {/* Navigation Tabs */}
//         <div className="flex flex-wrap gap-1 bg-neutral-950/80 p-1 rounded-xl border border-white/[0.04] backdrop-blur-xl">
//           {DASHBOARD_TABS.map((tab) => {
//             const Icon = tab.icon;
//             const isActive = activeTab === tab.id;
//             return (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`relative flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium tracking-wide transition-all duration-300 ${
//                   isActive ? "text-cyan-400 z-10" : "text-neutral-400 hover:text-neutral-200"
//                 }`}
//               >
//                 {isActive && (
//                   <motion.div
//                     layoutId="activeTabGlow"
//                     className="absolute inset-0 bg-white/[0.04] border border-white/[0.06] rounded-lg shadow-inner"
//                     transition={{ type: "spring", stiffness: 380, damping: 30 }}
//                   />
//                 )}
//                 <Icon className="h-3.5 w-3.5" />
//                 {tab.label}
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       {/* RENDER ACTIVE SCREEN COMPONENT */}
//       <div className="w-full">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeTab}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
//           >
//             {activeTab === "overview" && (
//               <OverviewTab 
//                 allCerts={allCertifications} 
//                 issuersCount={uniqueIssuers.length} 
//                 skillsCount={uniqueSkills.length} 
//                 scoreMetrics={portfolioScoreMetrics}
//                 setSelectedCert={setSelectedCert}
//               />
//             )}
//             {activeTab === "analytics" && (
//               <AnalyticsTab allCerts={allCertifications} issuers={uniqueIssuers} skills={uniqueSkills} />
//             )}
//             {activeTab === "timeline" && <TimelineTab allCerts={allCertifications} />}
//             {activeTab === "gallery" && (
//               <GalleryTab 
//                 allCerts={allCertifications} 
//                 searchQuery={searchQuery} 
//                 setSearchQuery={setSearchQuery}
//                 selectedFilter={selectedFilter}
//                 setSelectedFilter={setSelectedFilter}
//                 setSelectedCert={setSelectedCert}
//               />
//             )}
//             {activeTab === "graph" && <KnowledgeGraphTab allCerts={allCertifications} />}
//             {activeTab === "ai-insights" && <AIInsightsTab allCerts={allCertifications} />}
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* MASTER DRAWER SYSTEM FOR INDIVIDUAL CERTIFICATE DRILLDOWN */}
//       <CredentialDrawer selectedCert={selectedCert} onClose={() => setSelectedCert(null)} />
//     </div>
//   );
// }

// // ==========================================
// // VIEW TAB 1: EXECUTIVE OVERVIEW
// // ==========================================
// function OverviewTab({ allCerts, issuersCount, skillsCount, scoreMetrics, setSelectedCert }: any) {
//   const featuredCerts = useMemo(() => allCerts.filter((c: any) => c.featured), [allCerts]);
//   const homeHighlights = useMemo(() => allCerts.filter((c: any) => c.showOnHome).slice(0, 5), [allCerts]);
//   const [carouselIndex, setCarouselIndex] = useState(0);

//   useEffect(() => {
//     if (featuredCerts.length <= 1) return;
//     const interval = setInterval(() => {
//       setCarouselIndex((prev) => (prev + 1) % featuredCerts.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [featuredCerts]);

//   const currentFeatured = featuredCerts[carouselIndex];

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
//       {/* Portfolio Health Score Radial Block */}
//       <div className="lg:col-span-4 bg-neutral-900/40 border border-white/[0.05] rounded-2xl p-6 backdrop-blur-2xl flex flex-col items-center justify-center relative group overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
//         <h3 className="text-xs uppercase font-bold tracking-widest text-neutral-500 mb-4 self-start">Ecosystem Vitality</h3>
        
//         <div className="relative h-44 w-44 flex items-center justify-center">
//           <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
//             <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.02)" strokeWidth="6" fill="transparent" />
//             <motion.circle 
//               cx="50" cy="50" r="42" 
//               stroke={scoreMetrics.score >= 90 ? "#10b981" : "#22d3ee"} 
//               strokeWidth="6" 
//               fill="transparent" 
//               strokeDasharray="264"
//               initial={{ strokeDashoffset: 264 }}
//               animate={{ strokeDashoffset: 264 - (264 * scoreMetrics.score) / 100 }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//               strokeLinecap="round"
//             />
//           </svg>
//           <div className="absolute inset-0 flex flex-col items-center justify-center">
//             <span className="text-4xl font-extrabold tracking-tight text-white">
//               <Counter value={scoreMetrics.score} />%
//             </span>
//             <span className={`text-xs font-semibold uppercase mt-1 tracking-wider ${scoreMetrics.colorClass}`}>
//               {scoreMetrics.rating}
//             </span>
//           </div>
//         </div>

//         <div className="grid grid-cols-3 w-full gap-2 mt-6 border-t border-white/[0.04] pt-4 text-center">
//           <div>
//             <p className="text-[10px] text-neutral-500 uppercase font-medium">Assets</p>
//             <p className="text-lg font-bold text-neutral-200"><Counter value={allCerts.length} /></p>
//           </div>
//           <div>
//             <p className="text-[10px] text-neutral-500 uppercase font-medium">Issuers</p>
//             <p className="text-lg font-bold text-neutral-200"><Counter value={issuersCount} /></p>
//           </div>
//           <div>
//             <p className="text-[10px] text-neutral-500 uppercase font-medium">Skills</p>
//             <p className="text-lg font-bold text-cyan-400"><Counter value={skillsCount} /></p>
//           </div>
//         </div>
//       </div>

//       {/* Featured Auto-Sliding Hero Carousel */}
//       <div className="lg:col-span-8 bg-neutral-900/40 border border-white/[0.05] rounded-2xl p-6 backdrop-blur-2xl flex flex-col justify-between relative overflow-hidden group">
//         <div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
//         <div className="flex items-center justify-between border-b border-white/[0.04] pb-3 mb-4">
//           <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 flex items-center gap-1.5">
//             <Flame className="h-3.5 w-3.5 text-amber-500 animate-pulse" /> Featured Engineering Standard
//           </span>
//           <div className="flex gap-1">
//             {featuredCerts.map((_, idx) => (
//               <div 
//                 key={idx} 
//                 onClick={() => setCarouselIndex(idx)}
//                 className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 ${idx === carouselIndex ? "w-4 bg-cyan-400" : "w-1.5 bg-neutral-700"}`} 
//               />
//             ))}
//           </div>
//         </div>

//         <AnimatePresence mode="wait">
//           {currentFeatured && (
//             <motion.div 
//               key={currentFeatured.id}
//               initial={{ opacity: 0, x: 15 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -15 }}
//               transition={{ duration: 0.3 }}
//               className="grid md:grid-cols-12 gap-4 items-center flex-1"
//             >
//               <div className="md:col-span-8 space-y-3">
//                 <div className="flex items-center gap-2">
//                   <span className="text-[10px] font-mono bg-neutral-950 px-2 py-0.5 rounded border border-white/[0.06] text-neutral-400">
//                     {currentFeatured.issuer}
//                   </span>
//                   {currentFeatured.verified && (
//                     <span className="text-[9px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full flex items-center gap-1 font-medium">
//                       <CheckCircle className="h-2.5 w-2.5" /> Authenticated
//                     </span>
//                   )}
//                 </div>
//                 <h2 className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
//                   {currentFeatured.title}
//                 </h2>
//                 <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-xl">
//                   {currentFeatured.description}
//                 </p>
//                 <div className="flex flex-wrap gap-1 pt-1">
//                   {currentFeatured.skills.map((s: string) => (
//                     <span key={s} className="text-[10px] bg-white/[0.02] border border-white/[0.04] rounded px-2 py-0.5 text-neutral-300">
//                       {s}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <div className="md:col-span-4 flex justify-center md:justify-end">
//                 <button 
//                   onClick={() => setSelectedCert(currentFeatured)}
//                   className="mt-4 md:mt-0 px-4 py-2.5 rounded-xl border border-white/[0.08] bg-neutral-950 text-xs font-medium tracking-wide flex items-center gap-2 hover:bg-neutral-900 hover:border-cyan-500/30 text-neutral-300 hover:text-white transition-all shadow-xl"
//                 >
//                   Inspect Credentials <ChevronRight className="h-3.5 w-3.5" />
//                 </button>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* Automated Latest Highlights (showOnHome Dynamic Row) */}
//       <div className="lg:col-span-12 bg-neutral-900/40 border border-white/[0.05] rounded-2xl p-5 backdrop-blur-2xl space-y-4">
//         <div className="flex items-center justify-between border-b border-white/[0.04] pb-2">
//           <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 flex items-center gap-1.5">
//             <Zap className="h-3.5 w-3.5 text-cyan-400" /> Automated Pipeline Highlights
//           </span>
//           <span className="text-[10px] font-mono text-neutral-500">Criteria: showOnHome == true</span>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
//           {homeHighlights.map((cert: any) => (
//             <div 
//               key={cert.id}
//               onClick={() => setSelectedCert(cert)}
//               className="bg-neutral-950/60 border border-white/[0.03] rounded-xl p-3.5 hover:border-white/[0.08] cursor-pointer transition-all hover:bg-neutral-950 flex flex-col justify-between group"
//             >
//               <div>
//                 <div className="flex justify-between items-start gap-2 mb-1.5">
//                   <span className="text-[9px] font-mono text-neutral-500 truncate block max-w-[80px]">
//                     {cert.issuer}
//                   </span>
//                   <span className="text-[9px] font-mono text-neutral-400">{cert.issueDate}</span>
//                 </div>
//                 <h4 className="text-xs font-bold text-neutral-200 group-hover:text-cyan-400 transition-colors line-clamp-2 leading-snug">
//                   {cert.title}
//                 </h4>
//               </div>
//               <div className="flex items-center justify-between border-t border-white/[0.04] mt-3 pt-2">
//                 <span className="text-[9px] text-neutral-500 font-light">{cert.level || "Intermediate"}</span>
//                 <span className="text-[9px] text-cyan-500 font-medium group-hover:underline flex items-center gap-0.5">
//                   Open <ExternalLink className="h-2 w-2" />
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // ==========================================
// // VIEW TAB 2: DISTRIBUTION & ANALYTICS
// // ==========================================
// function AnalyticsTab({ allCerts, issuers, skills }: any) {
//   // Compute Issuer Distribution Breakdown
//   const issuerDistribution = useMemo(() => {
//     const counts: Record<string, number> = {};
//     allCerts.forEach((c: any) => {
//       counts[c.issuer] = (counts[c.issuer] || 0) + 1;
//     });
//     return Object.entries(counts)
//       .map(([name, count]) => ({ name, count }))
//       .sort((a, b) => b.count - a.count);
//   }, [allCerts]);

//   // Compute Skill Matrix Concentration
//   const skillConcentration = useMemo(() => {
//     const counts: Record<string, number> = {};
//     allCerts.forEach((c: any) => {
//       c.skills.forEach((s: string) => { counts[s] = (counts[s] || 0) + 1; });
//     });
//     return Object.entries(counts)
//       .map(([name, count]) => ({ name, count }))
//       .sort((a, b) => b.count - a.count)
//       .slice(0, 6);
//   }, [allCerts]);

//   // Category Expandable Details Data Mapping
//   const categoriesCalculated = useMemo(() => {
//     return certificationCategories.map(cat => {
//       const hoursCount = cat.items.reduce((acc, item) => acc + (item.hours || 0), 0);
//       return {
//         ...cat,
//         totalCerts: cat.items.length,
//         totalHours: hoursCount,
//       };
//     });
//   }, []);

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
//       {/* Issuer Bar Distribution Panel */}
//       <div className="lg:col-span-6 bg-neutral-900/40 border border-white/[0.05] rounded-2xl p-5 backdrop-blur-2xl space-y-4">
//         <h3 className="text-xs uppercase font-bold tracking-widest text-neutral-500 border-b border-white/[0.04] pb-2">
//           Authority Issuance Volume
//         </h3>
//         <div className="space-y-3">
//           {issuerDistribution.map((item) => {
//             const maxCount = issuerDistribution[0]?.count || 1;
//             const percentage = (item.count / maxCount) * 100;
//             return (
//               <div key={item.name} className="space-y-1 group">
//                 <div className="flex justify-between text-xs">
//                   <span className="text-neutral-300 font-light group-hover:text-white transition-colors">{item.name}</span>
//                   <span className="font-mono text-neutral-400 font-bold">{item.count}</span>
//                 </div>
//                 <div className="h-2 w-full bg-neutral-950 rounded-full overflow-hidden border border-white/[0.02]">
//                   <motion.div 
//                     initial={{ width: 0 }}
//                     animate={{ width: `${percentage}%` }}
//                     transition={{ duration: 1, ease: "easeOut" }}
//                     className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"
//                   />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Skill Heatmap Vectors */}
//       <div className="lg:col-span-6 bg-neutral-900/40 border border-white/[0.05] rounded-2xl p-5 backdrop-blur-2xl space-y-4">
//         <h3 className="text-xs uppercase font-bold tracking-widest text-neutral-500 border-b border-white/[0.04] pb-2">
//           Core Skill Matrix Density
//         </h3>
//         <div className="space-y-3">
//           {skillConcentration.map((item) => {
//             const maxCount = skillConcentration[0]?.count || 1;
//             const percentage = (item.count / maxCount) * 100;
//             return (
//               <div key={item.name} className="space-y-1 group">
//                 <div className="flex justify-between text-xs">
//                   <span className="text-neutral-300 font-light group-hover:text-white transition-colors">{item.name}</span>
//                   <span className="font-mono text-cyan-400 font-bold">{item.count} Nodes</span>
//                 </div>
//                 <div className="h-2 w-full bg-neutral-950 rounded-full overflow-hidden border border-white/[0.02]">
//                   <motion.div 
//                     initial={{ width: 0 }}
//                     animate={{ width: `${percentage}%` }}
//                     transition={{ duration: 1, ease: "easeOut" }}
//                     className="h-full bg-gradient-to-r from-cyan-500 to-teal-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.2)]"
//                   />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Category Intelligence Detailed Display Panels */}
//       <div className="lg:col-span-12 space-y-3">
//         <h3 className="text-xs uppercase font-bold tracking-widest text-neutral-500">
//           Domain Breakdown Architecture
//         </h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {categoriesCalculated.map((cat) => {
//             const Icon = cat.logo;
//             return (
//               <div 
//                 key={cat.id}
//                 className="bg-neutral-900/40 border border-white/[0.04] hover:border-white/[0.08] p-5 rounded-xl backdrop-blur-xl transition-all space-y-4"
//               >
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2.5">
//                     <div className="p-2 rounded-lg bg-neutral-950 text-neutral-400 border border-white/[0.04]">
//                       <Icon className="h-4 w-4 text-cyan-400" />
//                     </div>
//                     <h4 className="text-sm font-bold text-white">{cat.title}</h4>
//                   </div>
//                   <span className="text-[10px] uppercase tracking-wider font-mono bg-white/[0.02] border border-white/[0.06] px-2 py-0.5 rounded text-neutral-400">
//                     {cat.difficulty || "Advanced"}
//                   </span>
//                 </div>
                
//                 <p className="text-xs text-neutral-400 font-light line-clamp-2 leading-relaxed">
//                   {cat.description}
//                 </p>

//                 <div className="grid grid-cols-2 gap-2 border-t border-white/[0.04] pt-3 text-xs">
//                   <div className="text-neutral-500">
//                     Certificates: <span className="text-neutral-200 font-bold font-mono">{cat.totalCerts}</span>
//                   </div>
//                   <div className="text-neutral-500">
//                     Total Effort: <span className="text-neutral-200 font-bold font-mono">{cat.totalHours} Hrs</span>
//                   </div>
//                 </div>

//                 <div className="flex flex-wrap gap-1 pt-1">
//                   {cat.skillsOverview?.slice(0, 4).map((skill) => (
//                     <span key={skill} className="text-[9px] bg-cyan-500/5 text-cyan-400 border border-cyan-500/10 rounded px-1.5 py-0.5">
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// // ==========================================
// // VIEW TAB 3: CHRONOLOGICAL LEARNING TIMELINE
// // ==========================================
// function TimelineTab({ allCerts }: any) {
//   // Sort and reconstruct chronological year milestones
//   const timelineData = useMemo(() => {
//     const yearsMap: Record<string, any[]> = {};
//     allCerts.forEach((c: any) => {
//       const year = c.issueDate;
//       if (!yearsMap[year]) yearsMap[year] = [];
//       yearsMap[year].push(c);
//     });
//     return Object.entries(yearsMap).sort((a, b) => parseInt(a[0]) - parseInt(b[0]));
//   }, [allCerts]);

//   return (
//     <div className="bg-neutral-900/20 border border-white/[0.04] rounded-2xl p-6 overflow-x-auto scrollbar-none relative">
//       <div className="absolute top-4 left-6 flex items-center gap-1.5">
//         <div className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
//         <span className="text-xs uppercase font-bold tracking-widest text-neutral-500">Horizontal Journey Ledger</span>
//       </div>
      
//       <div className="flex items-start gap-12 pt-8 min-w-[900px] pb-4">
//         {timelineData.map(([year, items], idx) => (
//           <div key={year} className="w-72 flex-shrink-0 relative space-y-4">
            
//             {/* Horizontal connecting vector line */}
//             {idx < timelineData.length - 1 && (
//               <div className="absolute top-3.5 left-16 right-0 h-[1px] bg-gradient-to-r from-neutral-800 to-transparent pointer-events-none" />
//             )}

//             <div className="flex items-center gap-2">
//               <div className="h-7 w-16 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-md font-mono text-xs font-bold flex items-center justify-center shadow-lg">
//                 {year}
//               </div>
//               <span className="text-[10px] text-neutral-500 font-mono font-medium">({items.length} Assets)</span>
//             </div>

//             <div className="space-y-2 border-l border-white/[0.04] pl-3 ml-3.5">
//               {items.map((cert) => (
//                 <div 
//                   key={cert.id} 
//                   className="bg-neutral-950/40 border border-white/[0.03] rounded-lg p-2.5 hover:border-white/[0.08] hover:bg-neutral-950 transition-all group"
//                 >
//                   <p className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider">{cert.issuer}</p>
//                   <h4 className="text-xs font-bold text-neutral-200 group-hover:text-cyan-400 transition-colors truncate">
//                     {cert.title}
//                   </h4>
//                   {cert.skills && (
//                     <div className="flex flex-wrap gap-1 mt-1.5">
//                       {cert.skills.slice(0, 2).map((s: string) => (
//                         <span key={s} className="text-[8px] bg-white/[0.02] text-neutral-400 rounded px-1">
//                           {s}
//                         </span>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // ==========================================
// // VIEW TAB 4: CREDENTIALS VAULT GALLERY
// // ==========================================
// function GalleryTab({ allCerts, searchQuery, setSearchQuery, selectedFilter, setSelectedFilter, setSelectedCert }: any) {
  
//   // Extract interactive operational unique dynamic filters
//   const filterPills = useMemo(() => {
//     const defaultPills = ["All", "Cloud", "Frontend", "Programming", "Database", "Networking"];
//     return defaultPills;
//   }, []);

//   // Filter & Search Engine Calculations
//   const filteredCerts = useMemo(() => {
//     return allCerts.filter((c: any) => {
//       const query = searchQuery.toLowerCase();
//       const matchesSearch = c.title.toLowerCase().includes(query) || 
//                             c.issuer.toLowerCase().includes(query) || 
//                             c.skills.some((s: string) => s.toLowerCase().includes(query));
      
//       if (selectedFilter === "All") return matchesSearch;
//       const matchesCategory = c.categoryId.toLowerCase() === selectedFilter.toLowerCase();
//       return matchesCategory && matchesSearch;
//     });
//   }, [allCerts, searchQuery, selectedFilter]);

//   return (
//     <div className="space-y-6">
      
//       {/* Search and Filters Hub Control Unit */}
//       <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-neutral-900/40 p-4 rounded-xl border border-white/[0.04] backdrop-blur-xl">
//         <div className="relative w-full md:w-80">
//           <Search className="absolute left-3 top-2.5 h-4 w-4 text-neutral-500" />
//           <input
//             type="text"
//             placeholder="Search credentials, authorities, tech skills..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full bg-neutral-950 border border-white/[0.06] rounded-xl pl-9 pr-4 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500/40 transition-all"
//           />
//         </div>

//         {/* Filter Pills Underlined System */}
//         <div className="flex flex-wrap gap-1 w-full md:w-auto overflow-x-auto">
//           {filterPills.map((pill) => {
//             const isSelected = selectedFilter.toLowerCase() === pill.toLowerCase();
//             return (
//               <button
//                 key={pill}
//                 onClick={() => setSelectedFilter(pill)}
//                 className={`relative px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
//                   isSelected ? "text-cyan-400" : "text-neutral-400 hover:text-neutral-200"
//                 }`}
//               >
//                 {isSelected && (
//                   <motion.div 
//                     layoutId="galleryFilterIndicator"
//                     className="absolute inset-0 bg-white/[0.03] border border-white/[0.05] rounded-lg"
//                   />
//                 )}
//                 {pill}
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       {/* Grid Configuration Layout Rendering 3D Tilt Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         <AnimatePresence mode="popLayout">
//           {filteredCerts.map((cert: any) => (
//             <TiltCard key={cert.id} cert={cert} onClick={() => setSelectedCert(cert)} />
//           ))}
//         </AnimatePresence>
//       </div>

//       {filteredCerts.length === 0 && (
//         <div className="text-center py-12 text-neutral-500 text-xs font-light">
//           No engineering nodes matched your operational parameter settings.
//         </div>
//       )}
//     </div>
//   );
// }

// // 3D Tilt Card Parallax Core Sub-Component
// function TiltCard({ cert, onClick }: { cert: any; onClick: () => void }) {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const mouseXSpring = useSpring(x, { stiffness: 150, damping: 22 });
//   const mouseYSpring = useSpring(y, { stiffness: 150, damping: 22 });

//   const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
//   const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     x.set((e.clientX - rect.left - rect.width / 2) / rect.width);
//     y.set((e.clientY - rect.top - rect.height / 2) / rect.height);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   const accentColor = cert.color || "#0ea5e9";

//   return (
//     <div style={{ perspective: "1000px" }}>
//       <motion.div
//         ref={cardRef}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         onClick={onClick}
//         style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
//         className="h-56 bg-gradient-to-b from-neutral-900/60 to-neutral-900/20 border border-white/[0.04] rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden backdrop-blur-md cursor-pointer transition-all duration-300 hover:bg-neutral-900/50 hover:border-white/[0.08] group"
//       >
//         {/* Dynamic Inner Glow Map */}
//         <div 
//           className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" 
//           style={{ background: `radial-gradient(circle at 50% 50%, ${accentColor}, transparent 60%)` }}
//         />

//         <div className="space-y-2" style={{ transform: "translateZ(20px)" }}>
//           <div className="flex items-center justify-between">
//             <span className="text-[10px] font-mono text-neutral-400 bg-neutral-950 px-2 py-0.5 rounded border border-white/[0.05]">
//               {cert.issuer}
//             </span>
//             <span className="text-[10px] font-mono text-neutral-500">{cert.issueDate}</span>
//           </div>
//           <h3 className="text-sm font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
//             {cert.title}
//           </h3>
//           <p className="text-[11px] font-light text-neutral-400 line-clamp-2 leading-relaxed">
//             {cert.description}
//           </p>
//         </div>

//         <div className="space-y-3" style={{ transform: "translateZ(15px)" }}>
//           <div className="flex flex-wrap gap-1">
//             {cert.skills?.slice(0, 3).map((s: string) => (
//               <span key={s} className="text-[9px] bg-white/[0.02] border border-white/[0.04] px-1.5 py-0.5 rounded text-neutral-300">
//                 {s}
//               </span>
//             ))}
//           </div>
          
//           <div className="flex items-center justify-between border-t border-white/[0.04] pt-2">
//             <span className="text-[10px] font-medium text-neutral-500">{cert.level || "Intermediate"}</span>
//             <span 
//               className="text-[10px] font-medium transition-all flex items-center gap-1 group-hover:underline"
//               style={{ color: accentColor }}
//             >
//               Open Ledger <ExternalLink className="h-2.5 w-2.5" />
//             </span>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// // ==========================================
// // VIEW TAB 5: D3 INTERACTIVE KNOWLEDGE ARCHITECTURE GRAPH
// // ==========================================
// function KnowledgeGraphTab({ allCerts }: any) {
//   const containerRef = useRef<SVGSVGElement>(null);

//   const graphData = useMemo(() => {
//     const nodes: any[] = [];
//     const links: any[] = [];
//     const nodeMap = new Map();

//     // Central core origin cluster hub
//     nodes.push({ id: "Root", label: "Skills Universe", group: "root", size: 14 });
//     nodeMap.set("Root", true);

//     certificationCategories.forEach((cat) => {
//       if (!nodeMap.has(cat.id)) {
//         nodes.push({ id: cat.id, label: cat.title, group: "category", size: 10 });
//         nodeMap.set(cat.id, true);
//         links.push({ source: "Root", target: cat.id });
//       }

//       cat.items.forEach((item) => {
//         if (!nodeMap.has(item.id)) {
//           nodes.push({ id: item.id, label: item.title, group: "cert", size: 7, color: item.color });
//           nodeMap.set(item.id, true);
//           links.push({ source: cat.id, target: item.id });
//         }

//         item.skills.forEach((skill) => {
//           const skillId = `skill-${skill}`;
//           if (!nodeMap.has(skillId)) {
//             nodes.push({ id: skillId, label: skill, group: "skill", size: 6 });
//             nodeMap.set(skillId, true);
//           }
//           links.push({ source: item.id, target: skillId });
//         });
//       });
//     });

//     return { nodes, links };
//   }, [allCerts]);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const width = 800;
//     const height = 400;

//     const svg = d3.select(containerRef.current)
//       .attr("viewBox", `0 0 ${width} ${height}`)
//       .html(""); // Clean canvas repaint context

//     // Graph structural layout physics engines configuration attributes
//     const simulation = d3.forceSimulation(graphData.nodes)
//       .force("link", d3.forceLink(graphData.links).id((d: any) => d.id).distance(45))
//       .force("charge", d3.forceManyBody().strength(-80))
//       .force("center", d3.forceCenter(width / 2, height / 2))
//       .force("collision", d3.forceCollide().radius(18));

//     const link = svg.append("g")
//       .attr("stroke", "rgba(255,255,255,0.04)")
//       .attr("stroke-width", 1)
//       .selectAll("line")
//       .data(graphData.links)
//       .join("line");

//     const node = svg.append("g")
//       .selectAll("g")
//       .data(graphData.nodes)
//       .join("g")
//       .call(d3.drag<any, any>()
//         .on("start", (e, d) => {
//           if (!e.active) simulation.alphaTarget(0.3).restart();
//           d.fx = d.x; d.fy = d.y;
//         })
//         .on("drag", (e, d) => { d.fx = e.x; d.fy = e.y; })
//         .on("end", (e, d) => {
//           if (!e.active) simulation.alphaTarget(0);
//           d.fx = null; d.fy = null;
//         })
//       );

//     node.append("circle")
//       .attr("r", (d: any) => d.size)
//       .attr("fill", (d: any) => {
//         if (d.group === "root") return "#22d3ee";
//         if (d.group === "category") return "#6366f1";
//         if (d.group === "cert") return d.color || "#a3a3a3";
//         return "#14b8a6";
//       })
//       .attr("stroke", "rgba(0,0,0,0.5)")
//       .attr("stroke-width", 1);

//     node.append("text")
//       .text((d: any) => d.label)
//       .attr("x", (d: any) => d.size + 4)
//       .attr("y", 3)
//       .style("font-size", "8px")
//       .style("fill", "rgba(255,255,255,0.6)")
//       .style("pointer-events", "none")
//       .style("font-family", "monospace")
//       .style("max-width", "60px");

//     simulation.on("tick", () => {
//       link
//         .attr("x1", (d: any) => d.source.x)
//         .attr("y1", (d: any) => d.source.y)
//         .attr("x2", (d: any) => d.target.x)
//         .attr("y2", (d: any) => d.target.y);

//       node.attr("transform", (d: any) => `translate(${d.x},${d.y})`);
//     });

//     return () => simulation.stop();
//   }, [graphData]);

//   return (
//     <div className="bg-neutral-900/40 border border-white/[0.05] rounded-2xl p-5 backdrop-blur-2xl space-y-4">
//       <div className="flex justify-between items-center border-b border-white/[0.04] pb-2">
//         <h3 className="text-xs uppercase font-bold tracking-widest text-neutral-500">
//           Knowledge Node Topography Simulator
//         </h3>
//         <div className="flex gap-4 text-[9px] font-mono text-neutral-500">
//           <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-cyan-400" /> Origin Core</span>
//           <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-indigo-500" /> Tracks</span>
//           <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-teal-500" /> Toolchains</span>
//         </div>
//       </div>
//       <div className="w-full bg-neutral-950/80 rounded-xl overflow-hidden border border-white/[0.03] cursor-grab active:cursor-grabbing">
//         <svg ref={containerRef} className="w-full h-auto min-h-[400px]" />
//       </div>
//     </div>
//   );
// }

// // ==========================================
// // VIEW TAB 6: AI AUTOMATED STRATEGY ENGINE
// // ==========================================
// function AIInsightsTab({ allCerts }: any) {
//   // Analytical processing logic mapping potential engineering target strategies
//   const portfolioInsights = useMemo(() => {
//     const skills = allCerts.flatMap((c: any) => c.skills);
//     const hasCloud = skills.includes("AWS") || skills.includes("Azure");
//     const hasContainers = skills.includes("Docker") || skills.includes("Kubernetes");
    
//     const strategies = [
//       { text: "Highly resilient framework signature found inside distributed systems.", strength: "Advanced Cloud Deployments" },
//       { text: "Excellent procedural algorithmic structure verified over semantic scripts.", strength: "Core Programming Architecture" }
//     ];

//     const missingNextRecommendations = [];
//     if (hasCloud && !hasContainers) {
//       missingNextRecommendations.push({ title: "CKA: Certified Kubernetes Administrator", platform: "Linux Foundation" });
//       missingNextRecommendations.push({ title: "HashiCorp Terraform Associate", platform: "HashiCorp" });
//     } else {
//       missingNextRecommendations.push({ title: "AWS Solutions Architect Professional", platform: "Amazon Web Services" });
//       missingNextRecommendations.push({ title: "Prometheus Certified Associate", platform: "Linux Foundation" });
//     }

//     return { strategies, recommendations: missingNextRecommendations };
//   }, [allCerts]);

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
//       {/* Generated Structural Portfolio Summary Card */}
//       <div className="lg:col-span-7 bg-neutral-900/40 border border-white/[0.05] rounded-2xl p-6 backdrop-blur-2xl space-y-4 relative">
//         <div className="flex items-center gap-2 border-b border-white/[0.04] pb-2">
//           <Sparkles className="h-4 w-4 text-cyan-400 animate-spin" style={{ animationDuration: "3s" }} />
//           <h3 className="text-xs uppercase font-bold tracking-widest text-white">
//             Compiled Strategy Engine Audit
//           </h3>
//         </div>

//         <div className="space-y-4">
//           {portfolioInsights.strategies.map((strat, i) => (
//             <div key={i} className="bg-neutral-950/40 border border-white/[0.03] p-4 rounded-xl space-y-1.5">
//               <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider block">
//                 Detected Strength Layer {i + 1}
//               </span>
//               <h4 className="text-sm font-bold text-neutral-200">{strat.strength}</h4>
//               <p className="text-xs font-light text-neutral-400 leading-relaxed">{strat.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Suggested Track Progression Channels */}
//       <div className="lg:col-span-5 bg-neutral-900/40 border border-white/[0.05] rounded-2xl p-6 backdrop-blur-2xl space-y-4">
//         <h3 className="text-xs uppercase font-bold tracking-widest text-neutral-500 border-b border-white/[0.04] pb-2">
//           Target Recommendations Pipeline
//         </h3>
        
//         <div className="space-y-3">
//           {portfolioInsights.recommendations.map((rec) => (
//             <div 
//               key={rec.title}
//               className="bg-neutral-950 border border-white/[0.03] hover:border-cyan-500/20 p-4 rounded-xl flex items-center justify-between transition-all group"
//             >
//               <div className="space-y-1">
//                 <span className="text-[9px] font-mono text-neutral-500 block uppercase tracking-wider">{rec.platform}</span>
//                 <h4 className="text-xs font-bold text-neutral-200 group-hover:text-cyan-400 transition-colors">
//                   {rec.title}
//                 </h4>
//               </div>
//               <span className="text-[10px] font-medium text-cyan-400 bg-cyan-500/5 px-2 py-1 rounded border border-cyan-500/10 flex-shrink-0">
//                 Strategic Next
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // ==========================================
// // VIEW COMPONENT 7: CREDENTIAL INSPECTION DRAWER
// // ==========================================
// function CredentialDrawer({ selectedCert, onClose }: { selectedCert: Certification | null; onClose: () => void }) {
//   if (!selectedCert) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex justify-end">
//       {/* Dimmed backdrop barrier curtain */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.5 }}
//         exit={{ opacity: 0 }}
//         onClick={onClose}
//         className="absolute inset-0 bg-black/60 backdrop-blur-sm"
//       />

//       {/* Drawer Body panel */}
//       <motion.div 
//         initial={{ x: "100%" }}
//         animate={{ x: 0 }}
//         exit={{ x: "100%" }}
//         transition={{ type: "spring", damping: 30, stiffness: 300 }}
//         className="relative w-full max-w-md h-full bg-neutral-950 border-l border-white/[0.08] p-6 shadow-2xl flex flex-col justify-between z-10 overflow-y-auto"
//       >
//         <div className="space-y-6">
//           <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
//             <span className="text-xs font-mono text-neutral-500">Security Vault Inspection</span>
//             <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-white/5 transition-colors border border-white/[0.04]">
//               <X className="h-4 w-4 text-neutral-400 hover:text-white" />
//             </button>
//           </div>

//           <div className="space-y-2">
//             <div className="flex flex-wrap items-center gap-2">
//               <span className="text-[10px] font-mono bg-white/[0.04] border border-white/[0.08] text-neutral-300 px-2 py-0.5 rounded">
//                 {selectedCert.issuer}
//               </span>
//               {selectedCert.verified && (
//                 <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-medium">
//                   Verified Integrity
//                 </span>
//               )}
//             </div>
//             <h2 className="text-lg font-bold text-white tracking-tight leading-snug">
//               {selectedCert.title}
//             </h2>
//           </div>

//           {/* Core Telemetry Parameters Table Grid */}
//           <div className="space-y-2 bg-neutral-900/40 p-4 rounded-xl border border-white/[0.03]">
//             <h3 className="text-[10px] uppercase font-bold tracking-wider text-neutral-500 mb-2">Metadata Matrices</h3>
//             <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs border-b border-white/[0.04] pb-3">
//               <div>
//                 <p className="text-neutral-500 text-[10px] uppercase font-medium">Issued Milestone</p>
//                 <p className="text-neutral-200 font-medium font-mono flex items-center gap-1 mt-0.5">
//                   <Calendar className="h-3 w-3 text-neutral-400" /> {selectedCert.issueDate}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-neutral-500 text-[10px] uppercase font-medium">Validation Lifecycle</p>
//                 <p className="text-neutral-200 font-medium font-mono flex items-center gap-1 mt-0.5">
//                   <Clock className="h-3 w-3 text-neutral-400" /> {selectedCert.expiryDate || "Lifetime"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-neutral-500 text-[10px] uppercase font-medium">Platform Infrastructure</p>
//                 <p className="text-neutral-200 font-medium flex items-center gap-1 mt-0.5 truncate">
//                   <Monitor className="h-3 w-3 text-neutral-400" /> {selectedCert.learningPlatform || "Coursera"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-neutral-500 text-[10px] uppercase font-medium">Localization Format</p>
//                 <p className="text-neutral-200 font-medium flex items-center gap-1 mt-0.5">
//                   <MapPin className="h-3 w-3 text-neutral-400" /> {selectedCert.location || "Online"}
//                 </p>
//               </div>
//             </div>
            
//             <div className="pt-2 text-xs">
//               <p className="text-neutral-500 text-[10px] uppercase font-medium">Internal Registry Hex ID</p>
//               <p className="text-neutral-300 font-mono mt-0.5 truncate">{selectedCert.credentialId || "N/A-VERIFIED-NODE"}</p>
//             </div>
//           </div>

//           <div className="space-y-2">
//             <h3 className="text-[10px] uppercase font-bold tracking-wider text-neutral-500">Functional Description</h3>
//             <p className="text-xs font-light text-neutral-400 leading-relaxed">
//               {selectedCert.description}
//             </p>
//           </div>

//           <div className="space-y-2">
//             <h3 className="text-[10px] uppercase font-bold tracking-wider text-neutral-500">MAPPED TOOLCHAIN COMPETENCIES</h3>
//             <div className="flex flex-wrap gap-1">
//               {selectedCert.skills?.map((skill: string) => (
//                 <span key={skill} className="text-xs bg-cyan-500/5 text-cyan-400 border border-cyan-500/10 rounded-md px-2.5 py-1 font-medium">
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* External URL Action Links */}
//         {selectedCert.credentialUrl && (
//           <div className="mt-8 pt-4 border-t border-white/[0.06]">
//             <a 
//               href={selectedCert.credentialUrl} 
//               target="_blank" 
//               rel="noreferrer"
//               className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-xs font-semibold tracking-wide text-white flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all"
//             >
//               Query Remote Verification Authority <ExternalLink className="h-3.5 w-3.5" />
//             </a>
//           </div>
//         )}
//       </motion.div>
//     </div>
//   );
// }


// "use client";

// import { useMemo, useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
// import * as d3 from "d3";
// import { 
//   Award, Layers, ShieldCheck, Cpu, Search, Sparkles, 
//   Calendar, Network, CheckCircle, ExternalLink, 
//   Clock, MapPin, Monitor, Flame, Zap, X, ChevronRight
// } from "lucide-react";
// import { certificationCategories, Certification } from "@/data/certifications";

// // --- Tab Configurations ---
// const DASHBOARD_TABS = [
//   { id: "overview", label: "Executive Overview", icon: Cpu },
//   { id: "analytics", label: "Distribution & Analytics", icon: Layers },
//   { id: "timeline", label: "Learning Timeline", icon: Calendar },
//   { id: "gallery", label: "Credentials Vault", icon: Award },
//   { id: "graph", label: "Knowledge Architecture", icon: Network },
//   { id: "ai-insights", label: "AI Strategy Engine", icon: Sparkles },
// ];

// // --- Counter Hook for Count-Up Animation ---
// function Counter({ value }: { value: number }) {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     let start = 0;
//     const end = value;
//     if (start === end) return;
//     const totalDuration = 1000;
//     const incrementTime = Math.abs(Math.floor(totalDuration / end));
//     const timer = setInterval(() => {
//       start += 1;
//       setCount(start);
//       if (start === end) clearInterval(timer);
//     }, incrementTime);
//     return () => clearInterval(timer);
//   }, [value]);
//   return <>{count}</>;
// }

// export default function CertificationUmbrellaDashboard() {
//   const [activeTab, setActiveTab] = useState("overview");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedFilter, setSelectedFilter] = useState("All");
//   const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

//   // --- Flattened Data Utilities ---
//   const allCertifications = useMemo(() => {
//     return certificationCategories.flatMap((cat) => 
//       cat.items.map((item) => ({ ...item, categoryId: cat.id, categoryTitle: cat.title }))
//     );
//   }, []);

//   const uniqueIssuers = useMemo(() => {
//     return Array.from(new Set(allCertifications.map((c) => c.issuer)));
//   }, [allCertifications]);

//   const uniqueSkills = useMemo(() => {
//     return Array.from(new Set(allCertifications.flatMap((c) => c.skills)));
//   }, [allCertifications]);

//   // --- Dynamic Portfolio Health Score Metrics ---
//   const portfolioScoreMetrics = useMemo(() => {
//     const totalCerts = allCertifications.length;
//     const verifiedCount = allCertifications.filter(c => c.verified).length;
//     const advancedCerts = allCertifications.filter(c => c.level === "Advanced" || c.level === "Professional").length;
//     const platformDiversity = new Set(allCertifications.map(c => c.learningPlatform)).size;

//     let score = 60; 
//     score += (verifiedCount / totalCerts) * 15;
//     score += (advancedCerts / totalCerts) * 15;
//     score += Math.min(platformDiversity * 2.5, 10);
//     const finalScore = Math.min(Math.round(score), 100);

//     let rating = "Good";
//     let colorClass = "text-amber-400";
//     if (finalScore >= 90) { rating = "Excellent"; colorClass = "text-emerald-400"; }
//     else if (finalScore >= 80) { rating = "Very Good"; colorClass = "text-cyan-400"; }

//     return { score: finalScore, rating, colorClass };
//   }, [allCertifications]);

//   return (
//     <div className="w-full text-white space-y-8 select-none min-h-screen pb-20">
      
//       {/* HEADER CONTROLS / PREMIUM NAVIGATION CAROUSEL */}
//       <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-white/[0.06] pb-4">
//         <div className="flex items-center gap-3">
//           <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)]">
//             <ShieldCheck className="h-5 w-5 text-white animate-pulse" />
//           </div>
//           <div>
//             <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
//               Ecosystem Intelligence Hub
//             </h1>
//             <p className="text-xs text-neutral-500">Continuous telemetry pipeline verifying engineering certifications</p>
//           </div>
//         </div>

//         {/* Navigation Tabs */}
//         <div className="flex flex-wrap gap-1 bg-neutral-950/80 p-1 rounded-xl border border-white/[0.04] backdrop-blur-xl">
//           {DASHBOARD_TABS.map((tab) => {
//             const Icon = tab.icon;
//             const isActive = activeTab === tab.id;
//             return (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`relative flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium tracking-wide transition-all duration-300 ${
//                   isActive ? "text-cyan-400 z-10" : "text-neutral-400 hover:text-neutral-200"
//                 }`}
//               >
//                 {isActive && (
//                   <motion.div
//                     layoutId="activeTabGlow"
//                     className="absolute inset-0 bg-white/[0.04] border border-white/[0.06] rounded-lg shadow-inner"
//                     transition={{ type: "spring", stiffness: 380, damping: 30 }}
//                   />
//                 )}
//                 <Icon className="h-3.5 w-3.5" />
//                 {tab.label}
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       {/* RENDER ACTIVE SCREEN COMPONENT */}
//       <div className="w-full">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeTab}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
//           >
//             {activeTab === "overview" && (
//               <OverviewTab 
//                 allCerts={allCertifications} 
//                 issuersCount={uniqueIssuers.length} 
//                 skillsCount={uniqueSkills.length} 
//                 scoreMetrics={portfolioScoreMetrics}
//                 setSelectedCert={setSelectedCert}
//               />
//             )}
//             {activeTab === "analytics" && (
//               <AnalyticsTab allCerts={allCertifications} />
//             )}
//             {activeTab === "timeline" && <TimelineTab allCerts={allCertifications} />}
//             {activeTab === "gallery" && (
//               <GalleryTab 
//                 allCerts={allCertifications} 
//                 searchQuery={searchQuery} 
//                 setSearchQuery={setSearchQuery}
//                 selectedFilter={selectedFilter}
//                 setSelectedFilter={setSelectedFilter}
//                 setSelectedCert={setSelectedCert}
//               />
//             )}
//             {activeTab === "graph" && <KnowledgeGraphTab allCerts={allCertifications} />}
//             {activeTab === "ai-insights" && <AIInsightsTab allCerts={allCertifications} />}
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* MASTER DRAWER SYSTEM FOR INDIVIDUAL CERTIFICATE DRILLDOWN */}
//       <CredentialDrawer selectedCert={selectedCert} onClose={() => setSelectedCert(null)} />
//     </div>
//   );
// }

// // ==========================================
// // VIEW TAB 1: EXECUTIVE OVERVIEW
// // ==========================================
// function OverviewTab({ allCerts, issuersCount, skillsCount, scoreMetrics, setSelectedCert }: any) {
//   const featuredCerts = useMemo(() => allCerts.filter((c: any) => c.featured), [allCerts]);
//   const homeHighlights = useMemo(() => allCerts.filter((c: any) => c.showOnHome).slice(0, 5), [allCerts]);
//   const [carouselIndex, setCarouselIndex] = useState(0);

//   useEffect(() => {
//     if (featuredCerts.length <= 1) return;
//     const interval = setInterval(() => {
//       setCarouselIndex((prev) => (prev + 1) % featuredCerts.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [featuredCerts]);

//   const currentFeatured = featuredCerts[carouselIndex];

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
//       {/* Portfolio Health Score Radial Block */}
//       <div className="lg:col-span-4 bg-neutral-900/40 border border-white/[0.05] rounded-2xl p-6 backdrop-blur-2xl flex flex-col items-center justify-center relative group overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
//         <h3 className="text-xs uppercase font-bold tracking-widest text-neutral-500 mb-4 self-start">Ecosystem Vitality</h3>
        
//         <div className="relative h-44 w-44 flex items-center justify-center">
//           <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
//             <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.02)" strokeWidth="6" fill="transparent" />
//             <motion.circle 
//               cx="50" cy="50" r="42" 
//               stroke={scoreMetrics.score >= 90 ? "#10b981" : "#22d3ee"} 
//               strokeWidth="6" 
//               fill="transparent" 
//               strokeDasharray="264"
//               initial={{ strokeDashoffset: 264 }}
//               animate={{ strokeDashoffset: 264 - (264 * scoreMetrics.score) / 100 }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//               strokeLinecap="round"
//             />
//           </svg>
//           <div className="absolute inset-0 flex flex-col items-center justify-center">
//             <span className="text-4xl font-extrabold tracking-tight text-white">
//               <Counter value={scoreMetrics.score} />%
//             </span>
//             <span className={`text-xs font-semibold uppercase mt-1 tracking-wider ${scoreMetrics.colorClass}`}>
//               {scoreMetrics.rating}
//             </span>
//           </div>
//         </div>

//         <div className="grid grid-cols-3 w-full gap-2 mt-6 border-t border-white/[0.04] pt-4 text-center">
//           <div>
//             <p className="text-[10px] text-neutral-500 uppercase font-medium">Assets</p>
//             <p className="text-lg font-bold text-neutral-200"><Counter value={allCerts.length} /></p>
//           </div>
//           <div>
//             <p className="text-[10px] text-neutral-500 uppercase font-medium">Issuers</p>
//             <p className="text-lg font-bold text-neutral-200"><Counter value={issuersCount} /></p>
//           </div>
//           <div>
//             <p className="text-[10px] text-neutral-500 uppercase font-medium">Skills</p>
//             <p className="text-lg font-bold text-cyan-400"><Counter value={skillsCount} /></p>
//           </div>
//         </div>
//       </div>

//       {/* Featured Auto-Sliding Hero Carousel */}
//       <div className="lg:col-span-8 bg-neutral-900/40 border border-white/[0.05] rounded-2xl p-6 backdrop-blur-2xl flex flex-col justify-between relative overflow-hidden group">
//         <div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
//         <div className="flex items-center justify-between border-b border-white/[0.04] pb-3 mb-4">
//           <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 flex items-center gap-1.5">
//             <Flame className="h-3.5 w-3.5 text-amber-500 animate-pulse" /> Featured Engineering Standard
//           </span>
//           <div className="flex gap-1">
//             {/* RESOLVED: Explicit parameter types for map signature */}
//             {featuredCerts.map((_item: unknown, idx: number) => (
//               <div 
//                 key={idx} 
//                 onClick={() => setCarouselIndex(idx)}
//                 className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 ${idx === carouselIndex ? "w-4 bg-cyan-400" : "w-1.5 bg-neutral-700"}`} 
//               />
//             ))}
//           </div>
//         </div>

//         <AnimatePresence mode="wait">
//           {currentFeatured && (
//             <motion.div 
//               key={currentFeatured.id}
//               initial={{ opacity: 0, x: 15 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -15 }}
//               transition={{ duration: 0.3 }}
//               className="grid md:grid-cols-12 gap-4 items-center flex-1"
//             >
//               <div className="md:col-span-8 space-y-3">
//                 <div className="flex items-center gap-2">
//                   <span className="text-[10px] font-mono bg-neutral-950 px-2 py-0.5 rounded border border-white/[0.06] text-neutral-400">
//                     {currentFeatured.issuer}
//                   </span>
//                   {currentFeatured.verified && (
//                     <span className="text-[9px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full flex items-center gap-1 font-medium">
//                       <CheckCircle className="h-2.5 w-2.5" /> Authenticated
//                     </span>
//                   )}
//                 </div>
//                 <h2 className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
//                   {currentFeatured.title}
//                 </h2>
//                 <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-xl">
//                   {currentFeatured.description}
//                 </p>
//                 <div className="flex flex-wrap gap-1 pt-1">
//                   {currentFeatured.skills.map((s: string) => (
//                     <span key={s} className="text-[10px] bg-white/[0.02] border border-white/[0.04] rounded px-2 py-0.5 text-neutral-300">
//                       {s}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <div className="md:col-span-4 flex justify-center md:justify-end">
//                 <button 
//                   onClick={() => setSelectedCert(currentFeatured)}
//                   className="mt-4 md:mt-0 px-4 py-2.5 rounded-xl border border-white/[0.08] bg-neutral-950 text-xs font-medium tracking-wide flex items-center gap-2 hover:bg-neutral-900 hover:border-cyan-500/30 text-neutral-300 hover:text-white transition-all shadow-xl"
//                 >
//                   Inspect Credentials <ChevronRight className="h-3.5 w-3.5" />
//                 </button>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* Automated Latest Highlights */}
//       <div className="lg:col-span-12 bg-neutral-900/40 border border-white/[0.05] rounded-2xl p-5 backdrop-blur-2xl space-y-4">
//         <div className="flex items-center justify-between border-b border-white/[0.04] pb-2">
//           <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 flex items-center gap-1.5">
//             <Zap className="h-3.5 w-3.5 text-cyan-400" /> Automated Pipeline Highlights
//           </span>
//           <span className="text-[10px] font-mono text-neutral-500">Criteria: showOnHome == true</span>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
//           {homeHighlights.map((cert: any) => (
//             <div 
//               key={cert.id}
//               onClick={() => setSelectedCert(cert)}
//               className="bg-neutral-950/60 border border-white/[0.03] rounded-xl p-3.5 hover:border-white/[0.08] cursor-pointer transition-all hover:bg-neutral-950 flex flex-col justify-between group"
//             >
//               <div>
//                 <div className="flex justify-between items-start gap-2 mb-1.5">
//                   <span className="text-[9px] font-mono text-neutral-500 truncate block max-w-[80px]">
//                     {cert.issuer}
//                   </span>
//                   <span className="text-[9px] font-mono text-neutral-400">{cert.issueDate}</span>
//                 </div>
//                 <h4 className="text-xs font-bold text-neutral-200 group-hover:text-cyan-400 transition-colors line-clamp-2 leading-snug">
//                   {cert.title}
//                 </h4>
//               </div>
//               <div className="flex items-center justify-between border-t border-white/[0.04] mt-3 pt-2">
//                 <span className="text-[9px] text-neutral-500 font-light">{cert.level || "Intermediate"}</span>
//                 <span className="text-[9px] text-cyan-500 font-medium group-hover:underline flex items-center gap-0.5">
//                   Open <ExternalLink className="h-2 w-2" />
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // ==========================================
// // VIEW TAB 2: DISTRIBUTION & ANALYTICS
// // ==========================================
// function AnalyticsTab({ allCerts }: any) {
//   const issuerDistribution = useMemo(() => {
//     const counts: Record<string, number> = {};
//     allCerts.forEach((c: any) => {
//       counts[c.issuer] = (counts[c.issuer] || 0) + 1;
//     });
//     return Object.entries(counts)
//       .map(([name, count]) => ({ name, count }))
//       .sort((a, b) => b.count - a.count);
//   }, [allCerts]);

//   const skillConcentration = useMemo(() => {
//     const counts: Record<string, number> = {};
//     allCerts.forEach((c: any) => {
//       c.skills.forEach((s: string) => { counts[s] = (counts[s] || 0) + 1; });
//     });
//     return Object.entries(counts)
//       .map(([name, count]) => ({ name, count }))
//       .sort((a, b) => b.count - a.count)
//       .slice(0, 6);
//   }, [allCerts]);

//   const categoriesCalculated = useMemo(() => {
//     return certificationCategories.map(cat => {
//       const hoursCount = cat.items.reduce((acc, item) => acc + (item.hours || 0), 0);
//       return {
//         ...cat,
//         totalCerts: cat.items.length,
//         totalHours: hoursCount,
//       };
//     });
//   }, []);

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//       <div className="lg:col-span-6 bg-neutral-900/40 border border-white/[0.05] rounded-2xl p-5 backdrop-blur-2xl space-y-4">
//         <h3 className="text-xs uppercase font-bold tracking-widest text-neutral-500 border-b border-white/[0.04] pb-2">
//           Authority Issuance Volume
//         </h3>
//         <div className="space-y-3">
//           {issuerDistribution.map((item) => {
//             const maxCount = issuerDistribution[0]?.count || 1;
//             const percentage = (item.count / maxCount) * 100;
//             return (
//               <div key={item.name} className="space-y-1 group">
//                 <div className="flex justify-between text-xs">
//                   <span className="text-neutral-300 font-light group-hover:text-white transition-colors">{item.name}</span>
//                   <span className="font-mono text-neutral-400 font-bold">{item.count}</span>
//                 </div>
//                 <div className="h-2 w-full bg-neutral-950 rounded-full overflow-hidden border border-white/[0.02]">
//                   <motion.div 
//                     initial={{ width: 0 }}
//                     animate={{ width: `${percentage}%` }}
//                     transition={{ duration: 1, ease: "easeOut" }}
//                     className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"
//                   />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       <div className="lg:col-span-6 bg-neutral-900/40 border border-white/[0.05] rounded-2xl p-5 backdrop-blur-2xl space-y-4">
//         <h3 className="text-xs uppercase font-bold tracking-widest text-neutral-500 border-b border-white/[0.04] pb-2">
//           Core Skill Matrix Density
//         </h3>
//         <div className="space-y-3">
//           {skillConcentration.map((item) => {
//             const maxCount = skillConcentration[0]?.count || 1;
//             const percentage = (item.count / maxCount) * 100;
//             return (
//               <div key={item.name} className="space-y-1 group">
//                 <div className="flex justify-between text-xs">
//                   <span className="text-neutral-300 font-light group-hover:text-white transition-colors">{item.name}</span>
//                   <span className="font-mono text-cyan-400 font-bold">{item.count} Nodes</span>
//                 </div>
//                 <div className="h-2 w-full bg-neutral-950 rounded-full overflow-hidden border border-white/[0.02]">
//                   <motion.div 
//                     initial={{ width: 0 }}
//                     animate={{ width: `${percentage}%` }}
//                     transition={{ duration: 1, ease: "easeOut" }}
//                     className="h-full bg-gradient-to-r from-cyan-500 to-teal-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.2)]"
//                   />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       <div className="lg:col-span-12 space-y-3">
//         <h3 className="text-xs uppercase font-bold tracking-widest text-neutral-500">
//           Domain Breakdown Architecture
//         </h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {categoriesCalculated.map((cat) => {
//             const Icon = cat.logo;
//             return (
//               <div 
//                 key={cat.id}
//                 className="bg-neutral-900/40 border border-white/[0.04] hover:border-white/[0.08] p-5 rounded-xl backdrop-blur-xl transition-all space-y-4"
//               >
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2.5">
//                     <div className="p-2 rounded-lg bg-neutral-950 text-neutral-400 border border-white/[0.04]">
//                       <Icon className="h-4 w-4 text-cyan-400" />
//                     </div>
//                     <h4 className="text-sm font-bold text-white">{cat.title}</h4>
//                   </div>
//                   <span className="text-[10px] uppercase tracking-wider font-mono bg-white/[0.02] border border-white/[0.06] px-2 py-0.5 rounded text-neutral-400">
//                     {cat.difficulty || "Advanced"}
//                   </span>
//                 </div>
                
//                 <p className="text-xs text-neutral-400 font-light line-clamp-2 leading-relaxed">
//                   {cat.description}
//                 </p>

//                 <div className="grid grid-cols-2 gap-2 border-t border-white/[0.04] pt-3 text-xs">
//                   <div className="text-neutral-500">
//                     Certificates: <span className="text-neutral-200 font-bold font-mono">{cat.totalCerts}</span>
//                   </div>
//                   <div className="text-neutral-500">
//                     Total Effort: <span className="text-neutral-200 font-bold font-mono">{cat.totalHours} Hrs</span>
//                   </div>
//                 </div>

//                 <div className="flex flex-wrap gap-1 pt-1">
//                   {cat.skillsOverview?.slice(0, 4).map((skill) => (
//                     <span key={skill} className="text-[9px] bg-cyan-500/5 text-cyan-400 border border-cyan-500/10 rounded px-1.5 py-0.5">
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// // ==========================================
// // VIEW TAB 3: CHRONOLOGICAL LEARNING TIMELINE
// // ==========================================
// function TimelineTab({ allCerts }: any) {
//   const timelineData = useMemo(() => {
//     const yearsMap: Record<string, any[]> = {};
//     allCerts.forEach((c: any) => {
//       const year = c.issueDate;
//       if (!yearsMap[year]) yearsMap[year] = [];
//       yearsMap[year].push(c);
//     });
//     return Object.entries(yearsMap).sort((a, b) => parseInt(a[0]) - parseInt(b[0]));
//   }, [allCerts]);

//   return (
//     <div className="bg-neutral-900/20 border border-white/[0.04] rounded-2xl p-6 overflow-x-auto scrollbar-none relative">
//       <div className="absolute top-4 left-6 flex items-center gap-1.5">
//         <div className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
//         <span className="text-xs uppercase font-bold tracking-widest text-neutral-500">Horizontal Journey Ledger</span>
//       </div>
      
//       <div className="flex items-start gap-12 pt-8 min-w-[900px] pb-4">
//         {timelineData.map(([year, items], idx) => (
//           <div key={year} className="w-72 flex-shrink-0 relative space-y-4">
//             {idx < timelineData.length - 1 && (
//               <div className="absolute top-3.5 left-16 right-0 h-[1px] bg-gradient-to-r from-neutral-800 to-transparent pointer-events-none" />
//             )}

//             <div className="flex items-center gap-2">
//               <div className="h-7 w-16 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-md font-mono text-xs font-bold flex items-center justify-center shadow-lg">
//                 {year}
//               </div>
//               <span className="text-[10px] text-neutral-500 font-mono font-medium">({items.length} Assets)</span>
//             </div>

//             <div className="space-y-2 border-l border-white/[0.04] pl-3 ml-3.5">
//               {items.map((cert) => (
//                 <div 
//                   key={cert.id} 
//                   className="bg-neutral-950/40 border border-white/[0.03] rounded-lg p-2.5 hover:border-white/[0.08] hover:bg-neutral-950 transition-all group"
//                 >
//                   <p className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider">{cert.issuer}</p>
//                   <h4 className="text-xs font-bold text-neutral-200 group-hover:text-cyan-400 transition-colors truncate">
//                     {cert.title}
//                   </h4>
//                   {cert.skills && (
//                     <div className="flex flex-wrap gap-1 mt-1.5">
//                       {cert.skills.slice(0, 2).map((s: string) => (
//                         <span key={s} className="text-[8px] bg-white/[0.02] text-neutral-400 rounded px-1">
//                           {s}
//                         </span>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // ==========================================
// // VIEW TAB 4: CREDENTIALS VAULT GALLERY
// // ==========================================
// function GalleryTab({ allCerts, searchQuery, setSearchQuery, selectedFilter, setSelectedFilter, setSelectedCert }: any) {
//   const filterPills = ["All", "Cloud", "Frontend", "Programming", "Database", "Networking"];

//   const filteredCerts = useMemo(() => {
//     return allCerts.filter((c: any) => {
//       const query = searchQuery.toLowerCase();
//       const matchesSearch = c.title.toLowerCase().includes(query) || 
//                             c.issuer.toLowerCase().includes(query) || 
//                             c.skills.some((s: string) => s.toLowerCase().includes(query));
      
//       if (selectedFilter === "All") return matchesSearch;
//       const matchesCategory = c.categoryId.toLowerCase() === selectedFilter.toLowerCase();
//       return matchesCategory && matchesSearch;
//     });
//   }, [allCerts, searchQuery, selectedFilter]);

//   return (
//     <div className="space-y-6">
//       <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-neutral-900/40 p-4 rounded-xl border border-white/[0.04] backdrop-blur-xl">
//         <div className="relative w-full md:w-80">
//           <Search className="absolute left-3 top-2.5 h-4 w-4 text-neutral-500" />
//           <input
//             type="text"
//             placeholder="Search credentials, authorities, tech skills..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full bg-neutral-950 border border-white/[0.06] rounded-xl pl-9 pr-4 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500/40 transition-all"
//           />
//         </div>

//         <div className="flex flex-wrap gap-1 w-full md:w-auto overflow-x-auto">
//           {filterPills.map((pill) => {
//             const isSelected = selectedFilter.toLowerCase() === pill.toLowerCase();
//             return (
//               <button
//                 key={pill}
//                 onClick={() => setSelectedFilter(pill)}
//                 className={`relative px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
//                   isSelected ? "text-cyan-400" : "text-neutral-400 hover:text-neutral-200"
//                 }`}
//               >
//                 {isSelected && (
//                   <motion.div 
//                     layoutId="galleryFilterIndicator"
//                     className="absolute inset-0 bg-white/[0.03] border border-white/[0.05] rounded-lg"
//                   />
//                 )}
//                 {pill}
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         <AnimatePresence mode="popLayout">
//           {filteredCerts.map((cert: any) => (
//             <TiltCard key={cert.id} cert={cert} onClick={() => setSelectedCert(cert)} />
//           ))}
//         </AnimatePresence>
//       </div>

//       {filteredCerts.length === 0 && (
//         <div className="text-center py-12 text-neutral-500 text-xs font-light">
//           No engineering nodes matched your operational parameter settings.
//         </div>
//       )}
//     </div>
//   );
// }

// function TiltCard({ cert, onClick }: { cert: any; onClick: () => void }) {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const mouseXSpring = useSpring(x, { stiffness: 150, damping: 22 });
//   const mouseYSpring = useSpring(y, { stiffness: 150, damping: 22 });

//   const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
//   const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     x.set((e.clientX - rect.left - rect.width / 2) / rect.width);
//     y.set((e.clientY - rect.top - rect.height / 2) / rect.height);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   const accentColor = cert.color || "#0ea5e9";

//   return (
//     <div style={{ perspective: "1000px" }}>
//       <motion.div
//         ref={cardRef}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         onClick={onClick}
//         style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
//         className="h-56 bg-gradient-to-b from-neutral-900/60 to-neutral-900/20 border border-white/[0.04] rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden backdrop-blur-md cursor-pointer transition-all duration-300 hover:bg-neutral-900/50 hover:border-white/[0.08] group"
//       >
//         <div 
//           className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" 
//           style={{ background: `radial-gradient(circle at 50% 50%, ${accentColor}, transparent 60%)` }}
//         />

//         <div className="space-y-2" style={{ transform: "translateZ(20px)" }}>
//           <div className="flex items-center justify-between">
//             <span className="text-[10px] font-mono text-neutral-400 bg-neutral-950 px-2 py-0.5 rounded border border-white/[0.05]">
//               {cert.issuer}
//             </span>
//             <span className="text-[10px] font-mono text-neutral-500">{cert.issueDate}</span>
//           </div>
//           <h3 className="text-sm font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
//             {cert.title}
//           </h3>
//           <p className="text-[11px] font-light text-neutral-400 line-clamp-2 leading-relaxed">
//             {cert.description}
//           </p>
//         </div>

//         <div className="space-y-3" style={{ transform: "translateZ(15px)" }}>
//           <div className="flex flex-wrap gap-1">
//             {cert.skills?.slice(0, 3).map((s: string) => (
//               <span key={s} className="text-[9px] bg-white/[0.02] border border-white/[0.04] px-1.5 py-0.5 rounded text-neutral-300">
//                 {s}
//               </span>
//             ))}
//           </div>
          
//           <div className="flex items-center justify-between border-t border-white/[0.04] pt-2">
//             <span className="text-[10px] font-medium text-neutral-500">{cert.level || "Intermediate"}</span>
//             <span 
//               className="text-[10px] font-medium transition-all flex items-center gap-1 group-hover:underline"
//               style={{ color: accentColor }}
//             >
//               Open Ledger <ExternalLink className="h-2.5 w-2.5" />
//             </span>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// // ==========================================
// // VIEW TAB 5: D3 INTERACTIVE KNOWLEDGE ARCHITECTURE GRAPH
// // ==========================================
// function KnowledgeGraphTab({ allCerts }: any) {
//   const containerRef = useRef<SVGSVGElement>(null);

//   const graphData = useMemo(() => {
//     const nodes: any[] = [];
//     const links: any[] = [];
//     const nodeMap = new Map();

//     nodes.push({ id: "Root", label: "Skills Universe", group: "root", size: 14 });
//     nodeMap.set("Root", true);

//     certificationCategories.forEach((cat) => {
//       if (!nodeMap.has(cat.id)) {
//         nodes.push({ id: cat.id, label: cat.title, group: "category", size: 10 });
//         nodeMap.set(cat.id, true);
//         links.push({ source: "Root", target: cat.id });
//       }

//       cat.items.forEach((item) => {
//         if (!nodeMap.has(item.id)) {
//           nodes.push({ id: item.id, label: item.title, group: "cert", size: 7, color: item.color });
//           nodeMap.set(item.id, true);
//           links.push({ source: cat.id, target: item.id });
//         }

//         item.skills.forEach((skill) => {
//           const skillId = `skill-${skill}`;
//           if (!nodeMap.has(skillId)) {
//             nodes.push({ id: skillId, label: skill, group: "skill", size: 6 });
//             nodeMap.set(skillId, true);
//           }
//           links.push({ source: item.id, target: skillId });
//         });
//       });
//     });

//     return { nodes, links };
//   }, [allCerts]);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const width = 800;
//     const height = 400;

//     const svg = d3.select(containerRef.current)
//       .attr("viewBox", `0 0 ${width} ${height}`)
//       .html(""); 

//     const simulation = d3.forceSimulation(graphData.nodes)
//       .force("link", d3.forceLink(graphData.links).id((d: any) => d.id).distance(45))
//       .force("charge", d3.forceManyBody().strength(-80))
//       .force("center", d3.forceCenter(width / 2, height / 2))
//       .force("collision", d3.forceCollide().radius(18));

//     const link = svg.append("g")
//       .attr("stroke", "rgba(255,255,255,0.04)")
//       .attr("stroke-width", 1)
//       .selectAll("line")
//       .data(graphData.links)
//       .join("line");

//     const node = svg.append("g")
//       .selectAll("g")
//       .data(graphData.nodes)
//       .join("g")
//       .call(d3.drag<any, any>()
//         .on("start", (e, d) => {
//           if (!e.active) simulation.alphaTarget(0.3).restart();
//           d.fx = d.x; d.fy = d.y;
//         })
//         .on("drag", (e, d) => { d.fx = e.x; d.fy = e.y; })
//         .on("end", (e, d) => {
//           if (!e.active) simulation.alphaTarget(0);
//           d.fx = null; d.fy = null;
//         })
//       );

//     node.append("circle")
//       .attr("r", (d: any) => d.size)
//       .attr("fill", (d: any) => {
//         if (d.group === "root") return "#22d3ee";
//         if (d.group === "category") return "#6366f1";
//         if (d.group === "cert") return d.color || "#a3a3a3";
//         return "#14b8a6";
//       })
//       .attr("stroke", "rgba(0,0,0,0.5)")
//       .attr("stroke-width", 1);

//     node.append("text")
//       .text((d: any) => d.label)
//       .attr("x", (d: any) => d.size + 4)
//       .attr("y", 3)
//       .style("font-size", "8px")
//       .style("fill", "rgba(255,255,255,0.6)")
//       .style("pointer-events", "none")
//       .style("font-family", "monospace");

//     simulation.on("tick", () => {
//       link
//         .attr("x1", (d: any) => d.source.x)
//         .attr("y1", (d: any) => d.source.y)
//         .attr("x2", (d: any) => d.target.x)
//         .attr("y2", (d: any) => d.target.y);

//       node.attr("transform", (d: any) => `translate(${d.x},${d.y})`);
//     });

//     // RESOLVED: Evaluates simulation closure safely inside an explicit block to return void
//     return () => {
//       simulation.stop();
//     };
//   }, [graphData]);

//   return (
//     <div className="bg-neutral-900/40 border border-white/[0.05] rounded-2xl p-5 backdrop-blur-2xl space-y-4">
//       <div className="flex justify-between items-center border-b border-white/[0.04] pb-2">
//         <h3 className="text-xs uppercase font-bold tracking-widest text-neutral-500">
//           Knowledge Node Topography Simulator
//         </h3>
//         <div className="flex gap-4 text-[9px] font-mono text-neutral-500">
//           <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-cyan-400" /> Origin Core</span>
//           <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-indigo-500" /> Tracks</span>
//           <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-teal-500" /> Toolchains</span>
//         </div>
//       </div>
//       <div className="w-full bg-neutral-950/80 rounded-xl overflow-hidden border border-white/[0.03] cursor-grab active:cursor-grabbing">
//         <svg ref={containerRef} className="w-full h-auto min-h-[400px]" />
//       </div>
//     </div>
//   );
// }

// // ==========================================
// // VIEW TAB 6: AI AUTOMATED STRATEGY ENGINE
// // ==========================================
// function AIInsightsTab({ allCerts }: any) {
//   const portfolioInsights = useMemo(() => {
//     const skills = allCerts.flatMap((c: any) => c.skills);
//     const hasCloud = skills.includes("AWS") || skills.includes("Azure");
//     const hasContainers = skills.includes("Docker") || skills.includes("Kubernetes");
    
//     const strategies = [
//       { text: "Highly resilient framework signature found inside distributed systems.", strength: "Advanced Cloud Deployments" },
//       { text: "Excellent procedural algorithmic structure verified over semantic scripts.", strength: "Core Programming Architecture" }
//     ];

//     const missingNextRecommendations = [];
//     if (hasCloud && !hasContainers) {
//       missingNextRecommendations.push({ title: "CKA: Certified Kubernetes Administrator", platform: "Linux Foundation" });
//       missingNextRecommendations.push({ title: "HashiCorp Terraform Associate", platform: "HashiCorp" });
//     } else {
//       missingNextRecommendations.push({ title: "AWS Solutions Architect Professional", platform: "Amazon Web Services" });
//       missingNextRecommendations.push({ title: "Prometheus Certified Associate", platform: "Linux Foundation" });
//     }

//     return { strategies, recommendations: missingNextRecommendations };
//   }, [allCerts]);

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//       <div className="lg:col-span-7 bg-neutral-900/40 border border-white/[0.05] rounded-2xl p-6 backdrop-blur-2xl space-y-4 relative">
//         <div className="flex items-center gap-2 border-b border-white/[0.04] pb-2">
//           <Sparkles className="h-4 w-4 text-cyan-400 animate-spin" style={{ animationDuration: "3s" }} />
//           <h3 className="text-xs uppercase font-bold tracking-widest text-white">
//             Compiled Strategy Engine Audit
//           </h3>
//         </div>

//         <div className="space-y-4">
//           {portfolioInsights.strategies.map((strat, i) => (
//             <div key={i} className="bg-neutral-950/40 border border-white/[0.03] p-4 rounded-xl space-y-1.5">
//               <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider block">
//                 Detected Strength Layer {i + 1}
//               </span>
//               <h4 className="text-sm font-bold text-neutral-200">{strat.strength}</h4>
//               <p className="text-xs font-light text-neutral-400 leading-relaxed">{strat.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="lg:col-span-5 bg-neutral-900/40 border border-white/[0.05] rounded-2xl p-6 backdrop-blur-2xl space-y-4">
//         <h3 className="text-xs uppercase font-bold tracking-widest text-neutral-500 border-b border-white/[0.04] pb-2">
//           Target Recommendations Pipeline
//         </h3>
        
//         <div className="space-y-3">
//           {portfolioInsights.recommendations.map((rec) => (
//             <div 
//               key={rec.title}
//               className="bg-neutral-950 border border-white/[0.03] hover:border-cyan-500/20 p-4 rounded-xl flex items-center justify-between transition-all group"
//             >
//               <div className="space-y-1">
//                 <span className="text-[9px] font-mono text-neutral-500 block uppercase tracking-wider">{rec.platform}</span>
//                 <h4 className="text-xs font-bold text-neutral-200 group-hover:text-cyan-400 transition-colors">
//                   {rec.title}
//                 </h4>
//               </div>
//               <span className="text-[10px] font-medium text-cyan-400 bg-cyan-500/5 px-2 py-1 rounded border border-cyan-500/10 flex-shrink-0">
//                 Strategic Next
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // ==========================================
// // VIEW COMPONENT 7: CREDENTIAL INSPECTION DRAWER
// // ==========================================
// function CredentialDrawer({ selectedCert, onClose }: { selectedCert: Certification | null; onClose: () => void }) {
//   if (!selectedCert) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex justify-end">
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.5 }}
//         exit={{ opacity: 0 }}
//         onClick={onClose}
//         className="absolute inset-0 bg-black/60 backdrop-blur-sm"
//       />

//       <motion.div 
//         initial={{ x: "100%" }}
//         animate={{ x: 0 }}
//         exit={{ x: "100%" }}
//         transition={{ type: "spring", damping: 30, stiffness: 300 }}
//         className="relative w-full max-w-md h-full bg-neutral-950 border-l border-white/[0.08] p-6 shadow-2xl flex flex-col justify-between z-10 overflow-y-auto"
//       >
//         <div className="space-y-6">
//           <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
//             <span className="text-xs font-mono text-neutral-500">Security Vault Inspection</span>
//             <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-white/5 transition-colors border border-white/[0.04]">
//               <X className="h-4 w-4 text-neutral-400 hover:text-white" />
//             </button>
//           </div>

//           <div className="space-y-2">
//             <div className="flex flex-wrap items-center gap-2">
//               <span className="text-[10px] font-mono bg-white/[0.04] border border-white/[0.08] text-neutral-300 px-2 py-0.5 rounded">
//                 {selectedCert.issuer}
//               </span>
//               {selectedCert.verified && (
//                 <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-medium">
//                   Verified Integrity
//                 </span>
//               )}
//             </div>
//             <h2 className="text-lg font-bold text-white tracking-tight leading-snug">
//               {selectedCert.title}
//             </h2>
//           </div>

//           <div className="space-y-2 bg-neutral-900/40 p-4 rounded-xl border border-white/[0.03]">
//             <h3 className="text-[10px] uppercase font-bold tracking-wider text-neutral-500 mb-2">Metadata Matrices</h3>
//             <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs border-b border-white/[0.04] pb-3">
//               <div>
//                 <p className="text-neutral-500 text-[10px] uppercase font-medium">Issued Milestone</p>
//                 <p className="text-neutral-200 font-medium font-mono flex items-center gap-1 mt-0.5">
//                   <Calendar className="h-3 w-3 text-neutral-400" /> {selectedCert.issueDate}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-neutral-500 text-[10px] uppercase font-medium">Validation Lifecycle</p>
//                 <p className="text-neutral-200 font-medium font-mono flex items-center gap-1 mt-0.5">
//                   <Clock className="h-3 w-3 text-neutral-400" /> {selectedCert.expiryDate || "Lifetime"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-neutral-500 text-[10px] uppercase font-medium">Platform Infrastructure</p>
//                 <p className="text-neutral-200 font-medium flex items-center gap-1 mt-0.5 truncate">
//                   <Monitor className="h-3 w-3 text-neutral-400" /> {selectedCert.learningPlatform || "Coursera"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-neutral-500 text-[10px] uppercase font-medium">Localization Format</p>
//                 <p className="text-neutral-200 font-medium flex items-center gap-1 mt-0.5">
//                   <MapPin className="h-3 w-3 text-neutral-400" /> {selectedCert.location || "Online"}
//                 </p>
//               </div>
//             </div>
            
//             <div className="pt-2 text-xs">
//               <p className="text-neutral-500 text-[10px] uppercase font-medium">Internal Registry Hex ID</p>
//               <p className="text-neutral-300 font-mono mt-0.5 truncate">{selectedCert.credentialId || "N/A-VERIFIED-NODE"}</p>
//             </div>
//           </div>

//           <div className="space-y-2">
//             <h3 className="text-[10px] uppercase font-bold tracking-wider text-neutral-500">Functional Description</h3>
//             <p className="text-xs font-light text-neutral-400 leading-relaxed">
//               {selectedCert.description}
//             </p>
//           </div>

//           <div className="space-y-2">
//             <h3 className="text-[10px] uppercase font-bold tracking-wider text-neutral-500">MAPPED TOOLCHAIN COMPETENCIES</h3>
//             <div className="flex flex-wrap gap-1">
//               {selectedCert.skills?.map((skill: string) => (
//                 <span key={skill} className="text-xs bg-cyan-500/5 text-cyan-400 border border-cyan-500/10 rounded-md px-2.5 py-1 font-medium">
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         {selectedCert.credentialUrl && (
//           <div className="mt-8 pt-4 border-t border-white/[0.06]">
//             <a 
//               href={selectedCert.credentialUrl} 
//               target="_blank" 
//               rel="noreferrer"
//               className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-xs font-semibold tracking-wide text-white flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all"
//             >
//               Query Remote Verification Authority <ExternalLink className="h-3.5 w-3.5" />
//             </a>
//           </div>
//         )}
//       </motion.div>
//     </div>
//   );
// }








// "use client";

// import { useMemo, useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
// import * as d3 from "d3";
// import { 
//   Award, Layers, ShieldCheck, Cpu, Search, Sparkles, 
//   Calendar, Network, CheckCircle, ExternalLink, 
//   Clock, MapPin, Monitor, Flame, Zap, X, ChevronRight, ChevronDown
// } from "lucide-react";
// import { certificationCategories, Certification } from "@/data/certifications";

// // --- Tab Configurations ---
// const DASHBOARD_TABS = [
//   { id: "overview", label: "Executive Overview", icon: Cpu },
//   { id: "analytics", label: "Distribution & Analytics", icon: Layers },
//   { id: "timeline", label: "Learning Timeline", icon: Calendar },
//   { id: "gallery", label: "Credentials Vault", icon: Award },
//   { id: "graph", label: "Knowledge Architecture", icon: Network },
//   { id: "ai-insights", label: "AI Strategy Engine", icon: Sparkles },
// ];

// // --- High-Fidelity Brand Themes Map ---
// const brandThemes: Record<
//   string,
//   { aura: string; rim: string; text: string; shadow: string; color: string }
// > = {
//   cloud: {
//     aura: "from-sky-500 to-blue-600",
//     rim: "border-sky-500/30",
//     text: "text-sky-400",
//     shadow: "rgba(14, 165, 233, 0.4)",
//     color: "#0ea5e9",
//   },
//   frontend: {
//     aura: "from-pink-500 to-purple-600",
//     rim: "border-pink-500/30",
//     text: "text-pink-400",
//     shadow: "rgba(236, 72, 153, 0.4)",
//     color: "#ec4899",
//   },
//   google: {
//     aura: "from-emerald-500 to-green-600",
//     rim: "border-emerald-500/30",
//     text: "text-emerald-400",
//     shadow: "rgba(16, 185, 129, 0.4)",
//     color: "#10b981",
//   },
//   microsoft: {
//     aura: "from-blue-600 to-indigo-700",
//     rim: "border-blue-500/30",
//     text: "text-blue-400",
//     shadow: "rgba(37, 99, 235, 0.4)",
//     color: "#2563eb",
//   },
//   programming: {
//     aura: "from-amber-400 to-orange-500",
//     rim: "border-amber-500/30",
//     text: "text-amber-400",
//     shadow: "rgba(245, 158, 11, 0.4)",
//     color: "#f59e0b",
//   },
//   networking: {
//     aura: "from-teal-400 to-cyan-600",
//     rim: "border-teal-500/30",
//     text: "text-teal-400",
//     shadow: "rgba(20, 184, 166, 0.4)",
//     color: "#14b8a6",
//   },
//   database: {
//     aura: "from-violet-500 to-fuchsia-600",
//     rim: "border-violet-500/30",
//     text: "text-violet-400",
//     shadow: "rgba(139, 92, 246, 0.4)",
//     color: "#8b5cf6",
//   },
//   default: {
//     aura: "from-neutral-500 to-neutral-700",
//     rim: "border-neutral-500/30",
//     text: "text-neutral-400",
//     shadow: "rgba(115, 115, 115, 0.2)",
//     color: "#737373",
//   },
// };

// // --- Counter Hook for Count-Up Animation ---
// function Counter({ value }: { value: number }) {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     let start = 0;
//     const end = value;
//     if (start === end) return;
//     const totalDuration = 1000;
//     const incrementTime = Math.abs(Math.floor(totalDuration / end));
//     const timer = setInterval(() => {
//       start += 1;
//       setCount(start);
//       if (start === end) clearInterval(timer);
//     }, incrementTime);
//     return () => clearInterval(timer);
//   }, [value]);
//   return <>{count}</>;
// }

// export default function CertificationUmbrellaDashboard() {
//   const [activeTab, setActiveTab] = useState("overview");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedFilter, setSelectedFilter] = useState("All");
//   const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

//   // --- Flattened Data Utilities ---
//   const allCertifications = useMemo(() => {
//     return certificationCategories.flatMap((cat) => 
//       cat.items.map((item) => ({ ...item, categoryId: cat.id, categoryTitle: cat.title }))
//     );
//   }, []);

//   const uniqueIssuers = useMemo(() => {
//     return Array.from(new Set(allCertifications.map((c) => c.issuer)));
//   }, [allCertifications]);

//   const uniqueSkills = useMemo(() => {
//     return Array.from(new Set(allCertifications.flatMap((c) => c.skills)));
//   }, [allCertifications]);

//   // --- Dynamic Portfolio Health Score Metrics ---
//   const portfolioScoreMetrics = useMemo(() => {
//     const totalCerts = allCertifications.length;
//     const verifiedCount = allCertifications.filter(c => c.verified).length;
//     const advancedCerts = allCertifications.filter(c => c.level === "Advanced" || c.level === "Professional").length;
//     const platformDiversity = new Set(allCertifications.map(c => c.learningPlatform)).size;

//     let score = 60; 
//     score += (verifiedCount / totalCerts) * 15;
//     score += (advancedCerts / totalCerts) * 15;
//     score += Math.min(platformDiversity * 2.5, 10);
//     const finalScore = Math.min(Math.round(score), 100);

//     let rating = "Good";
//     let colorClass = "text-amber-400";
//     if (finalScore >= 90) { rating = "Excellent"; colorClass = "text-emerald-400"; }
//     else if (finalScore >= 80) { rating = "Very Good"; colorClass = "text-cyan-400"; }

//     return { score: finalScore, rating, colorClass };
//   }, [allCertifications]);

//   return (
//     <div className="w-full text-white space-y-8 select-none min-h-screen pb-20">
      
//       {/* HEADER CONTROLS / PREMIUM NAVIGATION CAROUSEL */}
//       <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-white/[0.06] pb-4">
//         <div className="flex items-center gap-3">
//           <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)]">
//             <ShieldCheck className="h-5 w-5 text-white animate-pulse" />
//           </div>
//           <div>
//             <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
//               Ecosystem Intelligence Hub
//             </h1>
//             <p className="text-xs text-neutral-500">Continuous telemetry pipeline verifying engineering certifications</p>
//           </div>
//         </div>

//         {/* Navigation Tabs */}
//         <div className="flex flex-wrap gap-1 bg-neutral-950/80 p-1 rounded-xl border border-white/[0.04] backdrop-blur-xl">
//           {DASHBOARD_TABS.map((tab) => {
//             const Icon = tab.icon;
//             const isActive = activeTab === tab.id;
//             return (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`relative flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium tracking-wide transition-all duration-300 ${
//                   isActive ? "text-cyan-400 z-10" : "text-neutral-400 hover:text-neutral-200"
//                 }`}
//               >
//                 {isActive && (
//                   <motion.div
//                     layoutId="activeTabGlow"
//                     className="absolute inset-0 bg-white/[0.04] border border-white/[0.06] rounded-lg shadow-inner"
//                     transition={{ type: "spring", stiffness: 380, damping: 30 }}
//                   />
//                 )}
//                 <Icon className="h-3.5 w-3.5" />
//                 {tab.label}
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       {/* RENDER ACTIVE SCREEN COMPONENT */}
//       <div className="w-full">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeTab}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
//           >
//             {activeTab === "overview" && (
//               <OverviewTab 
//                 allCerts={allCertifications} 
//                 issuersCount={uniqueIssuers.length} 
//                 skillsCount={uniqueSkills.length} 
//                 scoreMetrics={portfolioScoreMetrics}
//                 setSelectedCert={setSelectedCert}
//               />
//             )}
//             {activeTab === "analytics" && (
//               <AnalyticsTab allCerts={allCertifications} />
//             )}
//             {activeTab === "timeline" && <TimelineTab allCerts={allCertifications} />}
//             {activeTab === "gallery" && (
//               <GalleryTab 
//                 allCerts={allCertifications} 
//                 searchQuery={searchQuery} 
//                 setSearchQuery={setSearchQuery}
//                 selectedFilter={selectedFilter}
//                 setSelectedFilter={setSelectedFilter}
//                 setSelectedCert={setSelectedCert}
//               />
//             )}
//             {activeTab === "graph" && <KnowledgeGraphTab allCerts={allCertifications} />}
//             {activeTab === "ai-insights" && <AIInsightsTab allCerts={allCertifications} />}
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* MASTER DRAWER SYSTEM FOR INDIVIDUAL CERTIFICATE DRILLDOWN */}
//       <CredentialDrawer selectedCert={selectedCert} onClose={() => setSelectedCert(null)} />
//     </div>
//   );
// }

// // ==========================================
// // VIEW TAB 1: EXECUTIVE OVERVIEW (UNIFIED INTEL MATRIX)
// // ==========================================
// function OverviewTab({ allCerts, issuersCount, skillsCount, scoreMetrics, setSelectedCert }: any) {
//   const featuredCerts = useMemo(() => allCerts.filter((c: any) => c.featured), [allCerts]);
//   const homeHighlights = useMemo(() => allCerts.filter((c: any) => c.showOnHome).slice(0, 5), [allCerts]);
//   const [carouselIndex, setCarouselIndex] = useState(0);

//   // --- D3 Orbital Dome Integration Logic ---
//   const [hoveredId, setHoveredId] = useState<string | null>(null);
//   const cardRef = useRef<HTMLDivElement>(null);

//   const xMotion = useMotionValue(0);
//   const yMotion = useMotionValue(0);

//   const mouseXSpring = useSpring(xMotion, { stiffness: 150, damping: 20 });
//   const mouseYSpring = useSpring(yMotion, { stiffness: 150, damping: 20 });

//   const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
//   const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     const width = rect.width;
//     const height = rect.height;
//     xMotion.set((e.clientX - rect.left - width / 2) / width);
//     yMotion.set((e.clientY - rect.top - height / 2) / height);
//   };

//   const handleMouseLeave = () => {
//     setHoveredId(null);
//     xMotion.set(0);
//     yMotion.set(0);
//   };

//   const analytics = useMemo(() => {
//     const categoryData = certificationCategories.map((c) => {
//       const theme = brandThemes[c.id] || brandThemes.default;
//       const categorySkills = Array.from(new Set(c.items.flatMap((i) => i.skills || [])));
//       const categoryIssuers = Array.from(new Set(c.items.map((i) => i.issuer)));
//       const skillDensity = c.items.length > 0 ? (categorySkills.length / c.items.length).toFixed(1) : "0.0";

//       return {
//         id: c.id,
//         name: c.title,
//         value: c.items.length,
//         logo: c.logo,
//         description: c.description,
//         skills: categorySkills,
//         issuersList: categoryIssuers,
//         skillDensity,
//         theme,
//       };
//     });
//     return { categoryData };
//   }, []);

//   const radius = 95;
//   const pie = useMemo(() => d3.pie<any>().value((d) => d.value).sort(null), []);
//   const arc = useMemo(() => d3.arc<any>().innerRadius(68).outerRadius(radius).cornerRadius(5).padAngle(0.035), []);
//   const arcs = useMemo(() => pie(analytics.categoryData), [analytics.categoryData, pie]);

//   const activeCategory = analytics.categoryData.find((c) => c.id === hoveredId);
//   const ActiveLogo = activeCategory?.logo || ShieldCheck;

//   const globalSkillsSample = useMemo(() => {
//     return Array.from(new Set(certificationCategories.flatMap((c) => c.items.flatMap((i) => i.skills || [])))).slice(0, 8);
//   }, []);

//   useEffect(() => {
//     if (featuredCerts.length <= 1) return;
//     const interval = setInterval(() => {
//       setCarouselIndex((prev) => (prev + 1) % featuredCerts.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [featuredCerts]);

//   const currentFeatured = featuredCerts[carouselIndex];

//   return (
//     <div className="space-y-6">
      
//       {/* 1. INTEL GRAPH COMPONENT OVERVIEW PANEL (3D TILT INTEGRATION) */}
//       <div style={{ perspective: "1200px" }} className="w-full">
//         <motion.div
//           ref={cardRef}
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//           style={{
//             rotateX,
//             rotateY,
//             transformStyle: "preserve-3d",
//             boxShadow: activeCategory 
//               ? `0 35px 80px -15px rgba(0,0,0,0.9), 0 0 60px -10px ${activeCategory.theme.shadow}`
//               : "0 35px 80px -15px rgba(0,0,0,0.9), 0 0 50px -12px rgba(20,184,166,0.15)",
//             borderColor: activeCategory ? activeCategory.theme.color : "rgba(255,255,255,0.08)"
//           }}
//           className="relative rounded-3xl border bg-neutral-900/40 p-8 pb-14 backdrop-blur-3xl overflow-hidden transition-all duration-300 hover:bg-neutral-900/50 group/card"
//         >
//           <div 
//             className="pointer-events-none absolute inset-0 z-50 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
//             style={{ transform: "translateZ(10px)" }}
//           />

//           <div className="pointer-events-none absolute inset-0 z-0 opacity-40" style={{ transform: "translateZ(-20px)" }}>
//             <div 
//               className="absolute -top-40 left-1/4 h-96 w-96 rounded-full blur-[140px] transition-all duration-700" 
//               style={{ backgroundColor: activeCategory?.theme.color ? `${activeCategory.theme.color}20` : "rgba(6,182,212,0.08)" }}
//             />
//             <div 
//               className="absolute -bottom-40 right-1/4 h-96 w-96 rounded-full blur-[140px] transition-all duration-700"
//               style={{ backgroundColor: activeCategory?.theme.color ? `${activeCategory.theme.color}15` : "rgba(139,92,246,0.08)" }}
//             />
//           </div>

//           <div className="relative z-10 grid gap-10 lg:grid-cols-12 items-center" style={{ transform: "translateZ(25px)" }}>
            
//             {/* KPI MATRIX TRACKER */}
//             <div className="space-y-6 lg:col-span-4">
//               <div className="space-y-1.5">
//                 <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
//                   <span className="h-1 w-1 rounded-full bg-cyan-400 animate-pulse" /> Telemetry Core
//                 </span>
//                 <h2 className="text-2xl font-bold tracking-tight text-white bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
//                   Certification Matrix
//                 </h2>
//                 <p className="text-xs font-light text-neutral-400 max-w-sm leading-relaxed">
//                   Real-time processing framework tracking distributed cloud credentials and systematic engineering standards.
//                 </p>
//               </div>

//               <div className="grid grid-cols-2 gap-3.5">
//                 <div className="group rounded-2xl border border-white/[0.04] bg-gradient-to-b from-neutral-950/60 to-neutral-950/20 p-4 shadow-inner hover:border-white/[0.08] transition-colors duration-300">
//                   <div className="flex items-center gap-2 text-neutral-400">
//                     <Award className="h-4 w-4 group-hover:text-white transition-colors" />
//                     <span className="text-[11px] font-medium tracking-wide uppercase text-neutral-500 group-hover:text-neutral-400 transition-colors">Assets</span>
//                   </div>
//                   <p className="mt-2 text-3xl font-bold text-white tracking-tight">{allCerts.length}</p>
//                 </div>

//                 <div className="group rounded-2xl border border-white/[0.04] bg-gradient-to-b from-neutral-950/60 to-neutral-950/20 p-4 shadow-inner hover:border-cyan-500/20 transition-colors duration-300">
//                   <div className="flex items-center gap-2 text-cyan-400">
//                     <Layers className="h-4 w-4" />
//                     <span className="text-[11px] font-medium tracking-wide uppercase text-neutral-500 group-hover:text-cyan-500/70 transition-colors">Skills</span>
//                   </div>
//                   <p className="mt-2 text-3xl font-bold text-cyan-400 tracking-tight drop-shadow-[0_0_12px_rgba(34,211,238,0.2)]">{skillsCount}</p>
//                 </div>
//               </div>

//               {/* DYNAMIC INFORMATION PANEL */}
//               <div 
//                 className="rounded-2xl border bg-gradient-to-b from-neutral-950/70 to-neutral-950/30 p-4 shadow-inner min-h-[148px] flex flex-col justify-center transition-all duration-500"
//                 style={{ borderColor: activeCategory ? `${activeCategory.theme.color}20` : "rgba(255,255,255,0.04)" }}
//               >
//                 <AnimatePresence mode="wait">
//                   {activeCategory ? (
//                     <motion.div
//                       key={activeCategory.id}
//                       initial={{ opacity: 0, x: -8 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: 8 }}
//                       transition={{ duration: 0.2 }}
//                       className="space-y-3"
//                     >
//                       <div className="flex items-center justify-between">
//                         <span className={`text-xs font-bold uppercase tracking-wider ${activeCategory.theme.text} flex items-center gap-1.5`}>
//                           <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: activeCategory.theme.color }} />
//                           {activeCategory.name} Insight
//                         </span>
//                         <span 
//                           className="font-mono text-[11px] bg-neutral-900/80 px-2 py-0.5 rounded border transition-colors"
//                           style={{ color: activeCategory.theme.color, borderColor: `${activeCategory.theme.color}30` }}
//                         >
//                           Coverage: {Math.round((activeCategory.value / allCerts.length) * 100)}%
//                         </span>
//                       </div>

//                       <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[11px] border-b border-white/[0.04] pb-2">
//                         <div className="text-neutral-500">Certificates: <span className="text-neutral-200 font-medium font-mono">{activeCategory.value}</span></div>
//                         <div className="text-neutral-500 truncate">Authorities: <span className="text-neutral-200 font-medium truncate" title={activeCategory.issuersList.join(", ")}>{activeCategory.issuersList.join(", ") || "N/A"}</span></div>
//                         <div className="text-neutral-500">Unique Skills: <span className="text-neutral-200 font-medium font-mono">{activeCategory.skills.length}</span></div>
//                         <div className="text-neutral-500">Density Score: <span className="text-neutral-200 font-medium font-mono">{activeCategory.skillDensity}/cert</span></div>
//                       </div>

//                       <div className="space-y-1">
//                         <div className="flex justify-between text-[10px] text-neutral-400">
//                           <span>Skill Concentration Density</span>
//                           <span className="font-mono font-bold text-amber-400">{activeCategory.skillDensity}</span>
//                         </div>
//                         <div className="relative h-1.5 w-full rounded-full bg-neutral-900 overflow-hidden">
//                           <motion.div 
//                             initial={{ width: 0 }}
//                             animate={{ width: `${Math.min((parseFloat(activeCategory.skillDensity) / 6) * 100, 100)}%` }}
//                             className="h-full bg-gradient-to-r from-amber-500 via-orange-400 to-amber-400"
//                           />
//                         </div>
//                       </div>
//                     </motion.div>
//                   ) : (
//                     <motion.div
//                       key="global-distribution"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                       className="space-y-3.5"
//                     >
//                       <div className="flex items-center justify-between text-[11px]">
//                         <span className="text-neutral-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
//                           <Cpu className="h-3 w-3 text-neutral-500" />
//                           Portfolio Distribution
//                         </span>
//                         <span className="font-mono text-neutral-500 text-[10px]">Macro Balance</span>
//                       </div>

//                       <div className="h-2 w-full rounded-full bg-neutral-900 overflow-hidden flex gap-0.5">
//                         {analytics.categoryData.map((c) => (
//                           <div 
//                             key={c.id} 
//                             className="h-full first:rounded-l-full last:rounded-r-full transition-all duration-300"
//                             style={{ 
//                               width: `${(c.value / allCerts.length) * 100}%`,
//                               backgroundColor: c.theme.color 
//                             }}
//                           />
//                         ))}
//                       </div>

//                       <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-neutral-500">
//                         {analytics.categoryData.map((c) => (
//                           <span key={c.id} className="flex items-center gap-1 font-medium">
//                             <span className="h-1.5 w-1.5 rounded-full transition-transform group-hover:scale-125" style={{ backgroundColor: c.theme.color }} />
//                             {c.name} ({Math.round((c.value / allCerts.length) * 100)}%)
//                           </span>
//                         ))}
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </div>

//             {/* D3 ORBITAL DOME DOCK */}
//             <div className="flex flex-col items-center justify-center lg:col-span-4 relative py-4" style={{ transform: "translateZ(35px)" }}>
//               <div className="relative flex items-center justify-center h-[230px] w-[230px]">
                
//                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//                   <div
//                     className="h-[190px] w-[190px] rounded-full blur-3xl opacity-35 transition-all duration-500"
//                     style={{ background: activeCategory?.theme.color || "rgba(56,189,248,0.2)" }}
//                   />
//                 </div>

//                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
//                   <div className="h-[140px] w-[140px] rounded-full bg-white/5 blur-xl" />
//                 </div>

//                 <motion.div
//                   className="absolute h-[110px] w-[110px] rounded-full border border-white/5"
//                   animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.6, 0.3] }}
//                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//                   style={{ boxShadow: `0 0 40px ${activeCategory?.theme.shadow || "rgba(255,255,255,0.02)"}` }}
//                 />

//                 <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20">
//                   <AnimatePresence mode="wait">
//                     <motion.div
//                       key={hoveredId || "default"}
//                       initial={{ opacity: 0, scale: 0.85, y: 6 }}
//                       animate={{ opacity: 1, scale: 1, y: 0 }}
//                       exit={{ opacity: 0, scale: 0.85, y: -6 }}
//                       transition={{ type: "spring", stiffness: 350, damping: 25 }}
//                       className="flex flex-col items-center text-center"
//                     >
//                       <div
//                         className={`p-4 rounded-full border backdrop-blur-xl bg-neutral-950/80 shadow-2xl transition-all duration-300 ${activeCategory?.theme.rim || "border-white/10"}`}
//                         style={{ boxShadow: `0 0 35px ${activeCategory?.theme.shadow || "rgba(0,0,0,0)"}` }}
//                       >
//                         <ActiveLogo className={`text-2xl transition-colors duration-300 ${activeCategory?.theme.text || "text-neutral-400"}`} />
//                       </div>
                      
//                       <span className="mt-2 text-[10px] font-medium tracking-widest text-neutral-500 uppercase max-w-[120px] truncate">
//                         {activeCategory ? activeCategory.name : "Portfolio"}
//                       </span>
//                       <span className="text-xl font-bold text-white tracking-tight">
//                         {activeCategory ? `${activeCategory.value} Layers` : `${allCerts.length} Active`}
//                       </span>
//                     </motion.div>
//                   </AnimatePresence>
//                 </div>

//                 <svg width={230} height={230} className="overflow-visible absolute z-10 rotate-[-90deg]">
//                   <defs>
//                     <filter id="hudGlow">
//                       <feGaussianBlur stdDeviation="5" result="coloredBlur" />
//                       <feMerge>
//                         <feMergeNode in="coloredBlur" />
//                         <feMergeNode in="SourceGraphic" />
//                       </feMerge>
//                     </filter>
//                   </defs>

//                   <g transform="translate(115,115)">
//                     {arcs.map((d: any) => {
//                       const isHovered = d.data.id === hoveredId;
//                       return (
//                         <motion.path
//                           key={d.data.id}
//                           d={arc(d) || ""}
//                           fill={d.data.theme.color}
//                           initial={{ opacity: 0, scale: 0.9 }}
//                           animate={{
//                             opacity: hoveredId === null ? 0.85 : isHovered ? 1 : 0.2,
//                             scale: isHovered ? 1.06 : 1,
//                           }}
//                           transition={{ type: "spring", stiffness: 280, damping: 22 }}
//                           onMouseEnter={() => setHoveredId(d.data.id)}
//                           style={{
//                             filter: isHovered ? `url(#hudGlow) drop-shadow(0 0 14px ${d.data.theme.shadow})` : "none",
//                             cursor: "pointer",
//                           }}
//                         />
//                       );
//                     })}
//                   </g>
//                 </svg>
//               </div>
//             </div>

//             {/* FOCUS TRACKS INTERACTIVE SELECTION */}
//             <div className="space-y-3.5 lg:col-span-4 w-full relative z-20">
//               <p className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 border-b border-white/[0.04] pb-2 flex justify-between items-center">
//                 <span>Target Focus Tracks</span>
//                 <span className="font-mono font-normal normal-case text-neutral-600 text-[9px]">Hover to inspect</span>
//               </p>

//               <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-neutral-850">
//                 {analytics.categoryData.map((c) => {
//                   const isSelected = c.id === hoveredId;
//                   const CardIcon = c.logo;

//                   return (
//                     <motion.div
//                       key={c.id}
//                       onMouseEnter={() => setHoveredId(c.id)}
//                       animate={{
//                         borderColor: isSelected ? c.theme.color : "rgba(255,255,255,0.03)",
//                         backgroundColor: isSelected ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.01)",
//                         boxShadow: isSelected ? `0 0 20px -5px ${c.theme.shadow}` : "none"
//                       }}
//                       className="group flex items-center justify-between rounded-xl border p-2.5 cursor-pointer transition-all duration-300"
//                     >
//                       <div className="flex items-center gap-3 min-w-0">
//                         <div 
//                           className="p-2 rounded-lg bg-neutral-950 border border-white/[0.04] text-sm transition-colors duration-300"
//                           style={{ color: isSelected ? c.theme.color : "#a3a3a3" }}
//                         >
//                           <CardIcon className="h-4 w-4" />
//                         </div>
//                         <div className="truncate">
//                           <p className="text-xs font-semibold text-neutral-200 truncate group-hover:text-white transition-colors">{c.name}</p>
//                           <p className="text-[10px] text-neutral-500 font-light truncate">{c.description || "Verification sector"}</p>
//                         </div>
//                       </div>
                      
//                       <div className="flex items-center gap-2 flex-shrink-0 pl-2">
//                         <span className="h-1.5 w-1.5 rounded-full transition-transform duration-300 group-hover:scale-125" style={{ backgroundColor: c.theme.color }} />
//                         <span className="text-xs font-bold text-neutral-400 font-mono group-hover:text-neutral-200 transition-colors">{c.value}</span>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* ACTIVE TOOLCHAIN COMPETENCY MATRIX FOOTER */}
//           <div className="mt-8 pt-5 border-t border-white/[0.04] relative z-10" style={{ transform: "translateZ(15px)" }}>
//             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//               <div className="space-y-0.5">
//                 <span className="block text-[10px] uppercase font-bold tracking-widest text-neutral-500">
//                   {activeCategory ? "Sector Competency Scope" : "Active Core Competencies"}
//                 </span>
//                 <p className="text-xs text-neutral-400 font-light">
//                   {activeCategory ? `Verified toolchains mapping to ${activeCategory.name}` : "Cross-platform capability layers mapping over entire engineering scope."}
//                 </p>
//               </div>

//               <div className="flex flex-wrap gap-1.5 max-w-xl sm:justify-end">
//                 <AnimatePresence mode="popLayout">
//                   {(activeCategory ? activeCategory.skills : globalSkillsSample).map((skill) => (
//                     <motion.span
//                       key={skill}
//                       layout
//                       initial={{ opacity: 0, scale: 0.9, y: 4 }}
//                       animate={{ opacity: 1, scale: 1, y: 0 }}
//                       exit={{ opacity: 0, scale: 0.9, y: -4 }}
//                       transition={{ type: "spring", stiffness: 400, damping: 30 }}
//                       style={{
//                         borderColor: activeCategory ? `${activeCategory.theme.color}30` : "rgba(255,255,255,0.04)"
//                       }}
//                       className={`rounded-md border px-2.5 py-1 text-[11px] font-medium tracking-wide shadow-sm backdrop-blur-md transition-all duration-300 ${
//                         activeCategory 
//                           ? `bg-white/[0.01] ${activeCategory.theme.text}` 
//                           : "bg-neutral-950/40 text-neutral-400 hover:text-neutral-200 hover:border-white/[0.1]"
//                       }`}
//                     >
//                       {skill}
//                     </motion.span>
//                   ))}
//                 </AnimatePresence>
//               </div>
//             </div>
//           </div>

//           <div className="absolute bottom-3 left-0 right-0 flex justify-center pointer-events-none z-30" style={{ transform: "translateZ(40px)" }}>
//             <motion.div 
//               animate={{ y: [0, 4, 0] }}
//               transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
//               className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/[0.04] bg-neutral-950/60 backdrop-blur-md shadow-lg"
//             >
//               <span className="text-[9px] font-semibold tracking-widest text-neutral-400 uppercase">Scroll for Ledger Breakdown</span>
//               <ChevronDown className="h-3 w-3 text-cyan-400 animate-pulse" />
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>

//       {/* 2. SECONDARY MATRICES LAYOUT SECTION */}
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//         {/* Portfolio Health Score Radial Block */}
//         <div className="lg:col-span-4 bg-neutral-900/40 border border-white/[0.05] rounded-2xl p-6 backdrop-blur-2xl flex flex-col items-center justify-center relative group overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
//           <h3 className="text-xs uppercase font-bold tracking-widest text-neutral-500 mb-4 self-start">Ecosystem Vitality</h3>
          
//           <div className="relative h-44 w-44 flex items-center justify-center">
//             <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
//               <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.02)" strokeWidth="6" fill="transparent" />
//               <motion.circle 
//                 cx="50" cy="50" r="42" 
//                 stroke={scoreMetrics.score >= 90 ? "#10b981" : "#22d3ee"} 
//                 strokeWidth="6" 
//                 fill="transparent" 
//                 strokeDasharray="264"
//                 initial={{ strokeDashoffset: 264 }}
//                 animate={{ strokeDashoffset: 264 - (264 * scoreMetrics.score) / 100 }}
//                 transition={{ duration: 1.5, ease: "easeOut" }}
//                 strokeLinecap="round"
//               />
//             </svg>
//             <div className="absolute inset-0 flex flex-col items-center justify-center">
//               <span className="text-4xl font-extrabold tracking-tight text-white">
//                 <Counter value={scoreMetrics.score} />%
//               </span>
//               <span className={`text-xs font-semibold uppercase mt-1 tracking-wider ${scoreMetrics.colorClass}`}>
//                 {scoreMetrics.rating}
//               </span>
//             </div>
//           </div>

//           <div className="grid grid-cols-3 w-full gap-2 mt-6 border-t border-white/[0.04] pt-4 text-center">
//             <div>
//               <p className="text-[10px] text-neutral-500 uppercase font-medium">Assets</p>
//               <p className="text-lg font-bold text-neutral-200"><Counter value={allCerts.length} /></p>
//             </div>
//             <div>
//               <p className="text-[10px] text-neutral-500 uppercase font-medium">Issuers</p>
//               <p className="text-lg font-bold text-neutral-200"><Counter value={issuersCount} /></p>
//             </div>
//             <div>
//               <p className="text-[10px] text-neutral-500 uppercase font-medium">Skills</p>
//               <p className="text-lg font-bold text-cyan-400"><Counter value={skillsCount} /></p>
//             </div>
//           </div>
//         </div>

//         {/* Featured Auto-Sliding Hero Carousel */}
//         <div className="lg:col-span-8 bg-neutral-900/40 border border-white/[0.05] rounded-2xl p-6 backdrop-blur-2xl flex flex-col justify-between relative overflow-hidden group">
//           <div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
//           <div className="flex items-center justify-between border-b border-white/[0.04] pb-3 mb-4">
//             <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 flex items-center gap-1.5">
//               <Flame className="h-3.5 w-3.5 text-amber-500 animate-pulse" /> Featured Engineering Standard
//             </span>
//             <div className="flex gap-1">
//               {featuredCerts.map((_item: unknown, idx: number) => (
//                 <div 
//                   key={idx} 
//                   onClick={() => setCarouselIndex(idx)}
//                   className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 ${idx === carouselIndex ? "w-4 bg-cyan-400" : "w-1.5 bg-neutral-700"}`} 
//                 />
//               ))}
//             </div>
//           </div>

//           <AnimatePresence mode="wait">
//             {currentFeatured && (
//               <motion.div 
//                 key={currentFeatured.id}
//                 initial={{ opacity: 0, x: 15 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -15 }}
//                 transition={{ duration: 0.3 }}
//                 className="grid md:grid-cols-12 gap-4 items-center flex-1"
//               >
//                 <div className="md:col-span-8 space-y-3">
//                   <div className="flex items-center gap-2">
//                     <span className="text-[10px] font-mono bg-neutral-950 px-2 py-0.5 rounded border border-white/[0.06] text-neutral-400">
//                       {currentFeatured.issuer}
//                     </span>
//                     {currentFeatured.verified && (
//                       <span className="text-[9px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full flex items-center gap-1 font-medium">
//                         <CheckCircle className="h-2.5 w-2.5" /> Authenticated
//                       </span>
//                     )}
//                   </div>
//                   <h2 className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
//                     {currentFeatured.title}
//                   </h2>
//                   <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-xl">
//                     {currentFeatured.description}
//                   </p>
//                   <div className="flex flex-wrap gap-1 pt-1">
//                     {currentFeatured.skills.map((s: string) => (
//                       <span key={s} className="text-[10px] bg-white/[0.02] border border-white/[0.04] rounded px-2 py-0.5 text-neutral-300">
//                         {s}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="md:col-span-4 flex justify-center md:justify-end">
//                   <button 
//                     onClick={() => setSelectedCert(currentFeatured)}
//                     className="mt-4 md:mt-0 px-4 py-2.5 rounded-xl border border-white/[0.08] bg-neutral-950 text-xs font-medium tracking-wide flex items-center gap-2 hover:bg-neutral-900 hover:border-cyan-500/30 text-neutral-300 hover:text-white transition-all shadow-xl"
//                   >
//                     Inspect Credentials <ChevronRight className="h-3.5 w-3.5" />
//                   </button>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* Automated Latest Highlights Footer Pipeline */}
//         <div className="lg:col-span-12 bg-neutral-900/40 border border-white/[0.05] rounded-2xl p-5 backdrop-blur-2xl space-y-4">
//           <div className="flex items-center justify-between border-b border-white/[0.04] pb-2">
//             <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 flex items-center gap-1.5">
//               <Zap className="h-3.5 w-3.5 text-cyan-400" /> Automated Pipeline Highlights
//             </span>
//             <span className="text-[10px] font-mono text-neutral-500">Criteria: showOnHome == true</span>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
//             {homeHighlights.map((cert: any) => (
//               <div 
//                 key={cert.id}
//                 onClick={() => setSelectedCert(cert)}
//                 className="bg-neutral-950/60 border border-white/[0.03] rounded-xl p-3.5 hover:border-white/[0.08] cursor-pointer transition-all hover:bg-neutral-950 flex flex-col justify-between group"
//               >
//                 <div>
//                   <div className="flex justify-between items-start gap-2 mb-1.5">
//                     <span className="text-[9px] font-mono text-neutral-500 truncate block max-w-[80px]">
//                       {cert.issuer}
//                     </span>
//                     <span className="text-[9px] font-mono text-neutral-400">{cert.issueDate}</span>
//                   </div>
//                   <h4 className="text-xs font-bold text-neutral-200 group-hover:text-cyan-400 transition-colors line-clamp-2 leading-snug">
//                     {cert.title}
//                   </h4>
//                 </div>
//                 <div className="flex items-center justify-between border-t border-white/[0.04] mt-3 pt-2">
//                   <span className="text-[9px] text-neutral-500 font-light">{cert.level || "Intermediate"}</span>
//                   <span className="text-[9px] text-cyan-500 font-medium group-hover:underline flex items-center gap-0.5">
//                     Open <ExternalLink className="h-2 w-2" />
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ==========================================
// // VIEW TAB 2: DISTRIBUTION & ANALYTICS
// // ==========================================
// function AnalyticsTab({ allCerts }: any) {
//   const issuerDistribution = useMemo(() => {
//     const counts: Record<string, number> = {};
//     allCerts.forEach((c: any) => {
//       counts[c.issuer] = (counts[c.issuer] || 0) + 1;
//     });
//     return Object.entries(counts)
//       .map(([name, count]) => ({ name, count }))
//       .sort((a, b) => b.count - a.count);
//   }, [allCerts]);

//   const skillConcentration = useMemo(() => {
//     const counts: Record<string, number> = {};
//     allCerts.forEach((c: any) => {
//       c.skills.forEach((s: string) => { counts[s] = (counts[s] || 0) + 1; });
//     });
//     return Object.entries(counts)
//       .map(([name, count]) => ({ name, count }))
//       .sort((a, b) => b.count - a.count)
//       .slice(0, 6);
//   }, [allCerts]);

//   const categoriesCalculated = useMemo(() => {
//     return certificationCategories.map(cat => {
//       const hoursCount = cat.items.reduce((acc, item) => acc + (item.hours || 0), 0);
//       return {
//         ...cat,
//         totalCerts: cat.items.length,
//         totalHours: hoursCount,
//       };
//     });
//   }, []);

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//       <div className="lg:col-span-6 bg-neutral-900/40 border border-white/[0.05] rounded-2xl p-5 backdrop-blur-2xl space-y-4">
//         <h3 className="text-xs uppercase font-bold tracking-widest text-neutral-500 border-b border-white/[0.04] pb-2">
//           Authority Issuance Volume
//         </h3>
//         <div className="space-y-3">
//           {issuerDistribution.map((item) => {
//             const maxCount = issuerDistribution[0]?.count || 1;
//             const percentage = (item.count / maxCount) * 100;
//             return (
//               <div key={item.name} className="space-y-1 group">
//                 <div className="flex justify-between text-xs">
//                   <span className="text-neutral-300 font-light group-hover:text-white transition-colors">{item.name}</span>
//                   <span className="font-mono text-neutral-400 font-bold">{item.count}</span>
//                 </div>
//                 <div className="h-2 w-full bg-neutral-950 rounded-full overflow-hidden border border-white/[0.02]">
//                   <motion.div 
//                     initial={{ width: 0 }}
//                     animate={{ width: `${percentage}%` }}
//                     transition={{ duration: 1, ease: "easeOut" }}
//                     className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"
//                   />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       <div className="lg:col-span-6 bg-neutral-900/40 border border-white/[0.05] rounded-2xl p-5 backdrop-blur-2xl space-y-4">
//         <h3 className="text-xs uppercase font-bold tracking-widest text-neutral-500 border-b border-white/[0.04] pb-2">
//           Core Skill Matrix Density
//         </h3>
//         <div className="space-y-3">
//           {skillConcentration.map((item) => {
//             const maxCount = skillConcentration[0]?.count || 1;
//             const percentage = (item.count / maxCount) * 100;
//             return (
//               <div key={item.name} className="space-y-1 group">
//                 <div className="flex justify-between text-xs">
//                   <span className="text-neutral-300 font-light group-hover:text-white transition-colors">{item.name}</span>
//                   <span className="font-mono text-cyan-400 font-bold">{item.count} Nodes</span>
//                 </div>
//                 <div className="h-2 w-full bg-neutral-950 rounded-full overflow-hidden border border-white/[0.02]">
//                   <motion.div 
//                     initial={{ width: 0 }}
//                     animate={{ width: `${percentage}%` }}
//                     transition={{ duration: 1, ease: "easeOut" }}
//                     className="h-full bg-gradient-to-r from-cyan-500 to-teal-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.2)]"
//                   />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       <div className="lg:col-span-12 space-y-3">
//         <h3 className="text-xs uppercase font-bold tracking-widest text-neutral-500">
//           Domain Breakdown Architecture
//         </h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {categoriesCalculated.map((cat) => {
//             const Icon = cat.logo;
//             return (
//               <div 
//                 key={cat.id}
//                 className="bg-neutral-900/40 border border-white/[0.04] hover:border-white/[0.08] p-5 rounded-xl backdrop-blur-xl transition-all space-y-4"
//               >
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2.5">
//                     <div className="p-2 rounded-lg bg-neutral-950 text-neutral-400 border border-white/[0.04]">
//                       <Icon className="h-4 w-4 text-cyan-400" />
//                     </div>
//                     <h4 className="text-sm font-bold text-white">{cat.title}</h4>
//                   </div>
//                   <span className="text-[10px] uppercase tracking-wider font-mono bg-white/[0.02] border border-white/[0.06] px-2 py-0.5 rounded text-neutral-400">
//                     {cat.difficulty || "Advanced"}
//                   </span>
//                 </div>
                
//                 <p className="text-xs text-neutral-400 font-light line-clamp-2 leading-relaxed">
//                   {cat.description}
//                 </p>

//                 <div className="grid grid-cols-2 gap-2 border-t border-white/[0.04] pt-3 text-xs">
//                   <div className="text-neutral-500">
//                     Certificates: <span className="text-neutral-200 font-bold font-mono">{cat.totalCerts}</span>
//                   </div>
//                   <div className="text-neutral-500">
//                     Total Effort: <span className="text-neutral-200 font-bold font-mono">{cat.totalHours} Hrs</span>
//                   </div>
//                 </div>

//                 <div className="flex flex-wrap gap-1 pt-1">
//                   {cat.skillsOverview?.slice(0, 4).map((skill) => (
//                     <span key={skill} className="text-[9px] bg-cyan-500/5 text-cyan-400 border border-cyan-500/10 rounded px-1.5 py-0.5">
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// // ==========================================
// // VIEW TAB 3: CHRONOLOGICAL LEARNING TIMELINE
// // ==========================================
// function TimelineTab({ allCerts }: any) {
//   const timelineData = useMemo(() => {
//     const yearsMap: Record<string, any[]> = {};
//     allCerts.forEach((c: any) => {
//       const year = c.issueDate;
//       if (!yearsMap[year]) yearsMap[year] = [];
//       yearsMap[year].push(c);
//     });
//     return Object.entries(yearsMap).sort((a, b) => parseInt(a[0]) - parseInt(b[0]));
//   }, [allCerts]);

//   return (
//     <div className="bg-neutral-900/20 border border-white/[0.04] rounded-2xl p-6 overflow-x-auto scrollbar-none relative">
//       <div className="absolute top-4 left-6 flex items-center gap-1.5">
//         <div className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
//         <span className="text-xs uppercase font-bold tracking-widest text-neutral-500">Horizontal Journey Ledger</span>
//       </div>
      
//       <div className="flex items-start gap-12 pt-8 min-w-[900px] pb-4">
//         {timelineData.map(([year, items], idx) => (
//           <div key={year} className="w-72 flex-shrink-0 relative space-y-4">
//             {idx < timelineData.length - 1 && (
//               <div className="absolute top-3.5 left-16 right-0 h-[1px] bg-gradient-to-r from-neutral-800 to-transparent pointer-events-none" />
//             )}

//             <div className="flex items-center gap-2">
//               <div className="h-7 w-16 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-md font-mono text-xs font-bold flex items-center justify-center shadow-lg">
//                 {year}
//               </div>
//               <span className="text-[10px] text-neutral-500 font-mono font-medium">({items.length} Assets)</span>
//             </div>

//             <div className="space-y-2 border-l border-white/[0.04] pl-3 ml-3.5">
//               {items.map((cert) => (
//                 <div 
//                   key={cert.id} 
//                   className="bg-neutral-950/40 border border-white/[0.03] rounded-lg p-2.5 hover:border-white/[0.08] hover:bg-neutral-950 transition-all group"
//                 >
//                   <p className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider">{cert.issuer}</p>
//                   <h4 className="text-xs font-bold text-neutral-200 group-hover:text-cyan-400 transition-colors truncate">
//                     {cert.title}
//                   </h4>
//                   {cert.skills && (
//                     <div className="flex flex-wrap gap-1 mt-1.5">
//                       {cert.skills.slice(0, 2).map((s: string) => (
//                         <span key={s} className="text-[8px] bg-white/[0.02] text-neutral-400 rounded px-1">
//                           {s}
//                         </span>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // ==========================================
// // VIEW TAB 4: CREDENTIALS VAULT GALLERY
// // ==========================================
// function GalleryTab({ allCerts, searchQuery, setSearchQuery, selectedFilter, setSelectedFilter, setSelectedCert }: any) {
//   const filterPills = ["All", "Cloud", "Frontend", "Programming", "Database", "Networking"];

//   const filteredCerts = useMemo(() => {
//     return allCerts.filter((c: any) => {
//       const query = searchQuery.toLowerCase();
//       const matchesSearch = c.title.toLowerCase().includes(query) || 
//                             c.issuer.toLowerCase().includes(query) || 
//                             c.skills.some((s: string) => s.toLowerCase().includes(query));
      
//       if (selectedFilter === "All") return matchesSearch;
//       const matchesCategory = c.categoryId.toLowerCase() === selectedFilter.toLowerCase();
//       return matchesCategory && matchesSearch;
//     });
//   }, [allCerts, searchQuery, selectedFilter]);

//   return (
//     <div className="space-y-6">
//       <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-neutral-900/40 p-4 rounded-xl border border-white/[0.04] backdrop-blur-xl">
//         <div className="relative w-full md:w-80">
//           <Search className="absolute left-3 top-2.5 h-4 w-4 text-neutral-500" />
//           <input
//             type="text"
//             placeholder="Search credentials, authorities, tech skills..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full bg-neutral-950 border border-white/[0.06] rounded-xl pl-9 pr-4 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500/40 transition-all"
//           />
//         </div>

//         <div className="flex flex-wrap gap-1 w-full md:w-auto overflow-x-auto">
//           {filterPills.map((pill) => {
//             const isSelected = selectedFilter.toLowerCase() === pill.toLowerCase();
//             return (
//               <button
//                 key={pill}
//                 onClick={() => setSelectedFilter(pill)}
//                 className={`relative px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
//                   isSelected ? "text-cyan-400" : "text-neutral-400 hover:text-neutral-200"
//                 }`}
//               >
//                 {isSelected && (
//                   <motion.div 
//                     layoutId="galleryFilterIndicator"
//                     className="absolute inset-0 bg-white/[0.03] border border-white/[0.05] rounded-lg"
//                   />
//                 )}
//                 {pill}
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         <AnimatePresence mode="popLayout">
//           {filteredCerts.map((cert: any) => (
//             <TiltCard key={cert.id} cert={cert} onClick={() => setSelectedCert(cert)} />
//           ))}
//         </AnimatePresence>
//       </div>

//       {filteredCerts.length === 0 && (
//         <div className="text-center py-12 text-neutral-500 text-xs font-light">
//           No engineering nodes matched your operational parameter settings.
//         </div>
//       )}
//     </div>
//   );
// }

// function TiltCard({ cert, onClick }: { cert: any; onClick: () => void }) {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const mouseXSpring = useSpring(x, { stiffness: 150, damping: 22 });
//   const mouseYSpring = useSpring(y, { stiffness: 150, damping: 22 });

//   const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
//   const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     x.set((e.clientX - rect.left - rect.width / 2) / rect.width);
//     y.set((e.clientY - rect.top - rect.height / 2) / rect.height);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   const accentColor = cert.color || "#0ea5e9";

//   return (
//     <div style={{ perspective: "1000px" }}>
//       <motion.div
//         ref={cardRef}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         onClick={onClick}
//         style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
//         className="h-56 bg-gradient-to-b from-neutral-900/60 to-neutral-900/20 border border-white/[0.04] rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden backdrop-blur-md cursor-pointer transition-all duration-300 hover:bg-neutral-900/50 hover:border-white/[0.08] group"
//       >
//         <div 
//           className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" 
//           style={{ background: `radial-gradient(circle at 50% 50%, ${accentColor}, transparent 60%)` }}
//         />

//         <div className="space-y-2" style={{ transform: "translateZ(20px)" }}>
//           <div className="flex items-center justify-between">
//             <span className="text-[10px] font-mono text-neutral-400 bg-neutral-950 px-2 py-0.5 rounded border border-white/[0.05]">
//               {cert.issuer}
//             </span>
//             <span className="text-[10px] font-mono text-neutral-500">{cert.issueDate}</span>
//           </div>
//           <h3 className="text-sm font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
//             {cert.title}
//           </h3>
//           <p className="text-[11px] font-light text-neutral-400 line-clamp-2 leading-relaxed">
//             {cert.description}
//           </p>
//         </div>

//         <div className="space-y-3" style={{ transform: "translateZ(15px)" }}>
//           <div className="flex flex-wrap gap-1">
//             {cert.skills?.slice(0, 3).map((s: string) => (
//               <span key={s} className="text-[9px] bg-white/[0.02] border border-white/[0.04] px-1.5 py-0.5 rounded text-neutral-300">
//                 {s}
//               </span>
//             ))}
//           </div>
          
//           <div className="flex items-center justify-between border-t border-white/[0.04] pt-2">
//             <span className="text-[10px] font-medium text-neutral-500">{cert.level || "Intermediate"}</span>
//             <span 
//               className="text-[10px] font-medium transition-all flex items-center gap-1 group-hover:underline"
//               style={{ color: accentColor }}
//             >
//               Open Ledger <ExternalLink className="h-2.5 w-2.5" />
//             </span>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// // ==========================================
// // VIEW TAB 5: D3 INTERACTIVE KNOWLEDGE ARCHITECTURE GRAPH
// // ==========================================
// function KnowledgeGraphTab({ allCerts }: any) {
//   const containerRef = useRef<SVGSVGElement>(null);

//   const graphData = useMemo(() => {
//     const nodes: any[] = [];
//     const links: any[] = [];
//     const nodeMap = new Map();

//     nodes.push({ id: "Root", label: "Skills Universe", group: "root", size: 14 });
//     nodeMap.set("Root", true);

//     certificationCategories.forEach((cat) => {
//       if (!nodeMap.has(cat.id)) {
//         nodes.push({ id: cat.id, label: cat.title, group: "category", size: 10 });
//         nodeMap.set(cat.id, true);
//         links.push({ source: "Root", target: cat.id });
//       }

//       cat.items.forEach((item) => {
//         if (!nodeMap.has(item.id)) {
//           nodes.push({ id: item.id, label: item.title, group: "cert", size: 7, color: item.color });
//           nodeMap.set(item.id, true);
//           links.push({ source: cat.id, target: item.id });
//         }

//         item.skills.forEach((skill) => {
//           const skillId = `skill-${skill}`;
//           if (!nodeMap.has(skillId)) {
//             nodes.push({ id: skillId, label: skill, group: "skill", size: 6 });
//             nodeMap.set(skillId, true);
//           }
//           links.push({ source: item.id, target: skillId });
//         });
//       });
//     });

//     return { nodes, links };
//   }, [allCerts]);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const width = 800;
//     const height = 400;

//     const svg = d3.select(containerRef.current)
//       .attr("viewBox", `0 0 ${width} ${height}`)
//       .html(""); 

//     const simulation = d3.forceSimulation(graphData.nodes)
//       .force("link", d3.forceLink(graphData.links).id((d: any) => d.id).distance(45))
//       .force("charge", d3.forceManyBody().strength(-80))
//       .force("center", d3.forceCenter(width / 2, height / 2))
//       .force("collision", d3.forceCollide().radius(18));

//     const link = svg.append("g")
//       .attr("stroke", "rgba(255,255,255,0.04)")
//       .attr("stroke-width", 1)
//       .selectAll("line")
//       .data(graphData.links)
//       .join("line");

//     const node = svg.append("g")
//       .selectAll("g")
//       .data(graphData.nodes)
//       .join("g")
//       .call(d3.drag<any, any>()
//         .on("start", (e, d) => {
//           if (!e.active) simulation.alphaTarget(0.3).restart();
//           d.fx = d.x; d.fy = d.y;
//         })
//         .on("drag", (e, d) => { d.fx = e.x; d.fy = e.y; })
//         .on("end", (e, d) => {
//           if (!e.active) simulation.alphaTarget(0);
//           d.fx = null; d.fy = null;
//         })
//       );

//     node.append("circle")
//       .attr("r", (d: any) => d.size)
//       .attr("fill", (d: any) => {
//         if (d.group === "root") return "#22d3ee";
//         if (d.group === "category") return "#6366f1";
//         if (d.group === "cert") return d.color || "#a3a3a3";
//         return "#14b8a6";
//       })
//       .attr("stroke", "rgba(0,0,0,0.5)")
//       .attr("stroke-width", 1);

//     node.append("text")
//       .text((d: any) => d.label)
//       .attr("x", (d: any) => d.size + 4)
//       .attr("y", 3)
//       .style("font-size", "8px")
//       .style("fill", "rgba(255,255,255,0.6)")
//       .style("pointer-events", "none")
//       .style("font-family", "monospace");

//     simulation.on("tick", () => {
//       link
//         .attr("x1", (d: any) => d.source.x)
//         .attr("y1", (d: any) => d.source.y)
//         .attr("x2", (d: any) => d.target.x)
//         .attr("y2", (d: any) => d.target.y);

//       node.attr("transform", (d: any) => `translate(${d.x},${d.y})`);
//     });

//     return () => {
//       simulation.stop();
//     };
//   }, [graphData]);

//   return (
//     <div className="bg-neutral-900/40 border border-white/[0.05] rounded-2xl p-5 backdrop-blur-2xl space-y-4">
//       <div className="flex justify-between items-center border-b border-white/[0.04] pb-2">
//         <h3 className="text-xs uppercase font-bold tracking-widest text-neutral-500">
//           Knowledge Node Topography Simulator
//         </h3>
//         <div className="flex gap-4 text-[9px] font-mono text-neutral-500">
//           <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-cyan-400" /> Origin Core</span>
//           <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-indigo-500" /> Tracks</span>
//           <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-teal-500" /> Toolchains</span>
//         </div>
//       </div>
//       <div className="w-full bg-neutral-950/80 rounded-xl overflow-hidden border border-white/[0.03] cursor-grab active:cursor-grabbing">
//         <svg ref={containerRef} className="w-full h-auto min-h-[400px]" />
//       </div>
//     </div>
//   );
// }

// // ==========================================
// // VIEW TAB 6: AI AUTOMATED STRATEGY ENGINE
// // ==========================================
// function AIInsightsTab({ allCerts }: any) {
//   const portfolioInsights = useMemo(() => {
//     const skills = allCerts.flatMap((c: any) => c.skills);
//     const hasCloud = skills.includes("AWS") || skills.includes("Azure");
//     const hasContainers = skills.includes("Docker") || skills.includes("Kubernetes");
    
//     const strategies = [
//       { text: "Highly resilient framework signature found inside distributed systems.", strength: "Advanced Cloud Deployments" },
//       { text: "Excellent procedural algorithmic structure verified over semantic scripts.", strength: "Core Programming Architecture" }
//     ];

//     const missingNextRecommendations = [];
//     if (hasCloud && !hasContainers) {
//       missingNextRecommendations.push({ title: "CKA: Certified Kubernetes Administrator", platform: "Linux Foundation" });
//       missingNextRecommendations.push({ title: "HashiCorp Terraform Associate", platform: "HashiCorp" });
//     } else {
//       missingNextRecommendations.push({ title: "AWS Solutions Architect Professional", platform: "Amazon Web Services" });
//       missingNextRecommendations.push({ title: "Prometheus Certified Associate", platform: "Linux Foundation" });
//     }

//     return { strategies, recommendations: missingNextRecommendations };
//   }, [allCerts]);

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//       <div className="lg:col-span-7 bg-neutral-900/40 border border-white/[0.05] rounded-2xl p-6 backdrop-blur-2xl space-y-4 relative">
//         <div className="flex items-center gap-2 border-b border-white/[0.04] pb-2">
//           <Sparkles className="h-4 w-4 text-cyan-400 animate-spin" style={{ animationDuration: "3s" }} />
//           <h3 className="text-xs uppercase font-bold tracking-widest text-white">
//             Compiled Strategy Engine Audit
//           </h3>
//         </div>

//         <div className="space-y-4">
//           {portfolioInsights.strategies.map((strat, i) => (
//             <div key={i} className="bg-neutral-950/40 border border-white/[0.03] p-4 rounded-xl space-y-1.5">
//               <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider block">
//                 Detected Strength Layer {i + 1}
//               </span>
//               <h4 className="text-sm font-bold text-neutral-200">{strat.strength}</h4>
//               <p className="text-xs font-light text-neutral-400 leading-relaxed">{strat.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="lg:col-span-5 bg-neutral-900/40 border border-white/[0.05] rounded-2xl p-6 backdrop-blur-2xl space-y-4">
//         <h3 className="text-xs uppercase font-bold tracking-widest text-neutral-500 border-b border-white/[0.04] pb-2">
//           Target Recommendations Pipeline
//         </h3>
        
//         <div className="space-y-3">
//           {portfolioInsights.recommendations.map((rec) => (
//             <div 
//               key={rec.title}
//               className="bg-neutral-950 border border-white/[0.03] hover:border-cyan-500/20 p-4 rounded-xl flex items-center justify-between transition-all group"
//             >
//               <div className="space-y-1">
//                 <span className="text-[9px] font-mono text-neutral-500 block uppercase tracking-wider">{rec.platform}</span>
//                 <h4 className="text-xs font-bold text-neutral-200 group-hover:text-cyan-400 transition-colors">
//                   {rec.title}
//                 </h4>
//               </div>
//               <span className="text-[10px] font-medium text-cyan-400 bg-cyan-500/5 px-2 py-1 rounded border border-cyan-500/10 flex-shrink-0">
//                 Strategic Next
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // ==========================================
// // VIEW COMPONENT 7: CREDENTIAL INSPECTION DRAWER
// // ==========================================
// function CredentialDrawer({ selectedCert, onClose }: { selectedCert: Certification | null; onClose: () => void }) {
//   if (!selectedCert) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex justify-end">
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.5 }}
//         exit={{ opacity: 0 }}
//         onClick={onClose}
//         className="absolute inset-0 bg-black/60 backdrop-blur-sm"
//       />

//       <motion.div 
//         initial={{ x: "100%" }}
//         animate={{ x: 0 }}
//         exit={{ x: "100%" }}
//         transition={{ type: "spring", damping: 30, stiffness: 300 }}
//         className="relative w-full max-w-md h-full bg-neutral-950 border-l border-white/[0.08] p-6 shadow-2xl flex flex-col justify-between z-10 overflow-y-auto"
//       >
//         <div className="space-y-6">
//           <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
//             <span className="text-xs font-mono text-neutral-500">Security Vault Inspection</span>
//             <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-white/5 transition-colors border border-white/[0.04]">
//               <X className="h-4 w-4 text-neutral-400 hover:text-white" />
//             </button>
//           </div>

//           <div className="space-y-2">
//             <div className="flex flex-wrap items-center gap-2">
//               <span className="text-[10px] font-mono bg-white/[0.04] border border-white/[0.08] text-neutral-300 px-2 py-0.5 rounded">
//                 {selectedCert.issuer}
//               </span>
//               {selectedCert.verified && (
//                 <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-medium">
//                   Verified Integrity
//                 </span>
//               )}
//             </div>
//             <h2 className="text-lg font-bold text-white tracking-tight leading-snug">
//               {selectedCert.title}
//             </h2>
//           </div>

//           <div className="space-y-2 bg-neutral-900/40 p-4 rounded-xl border border-white/[0.03]">
//             <h3 className="text-[10px] uppercase font-bold tracking-wider text-neutral-500 mb-2">Metadata Matrices</h3>
//             <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs border-b border-white/[0.04] pb-3">
//               <div>
//                 <p className="text-neutral-500 text-[10px] uppercase font-medium">Issued Milestone</p>
//                 <p className="text-neutral-200 font-medium font-mono flex items-center gap-1 mt-0.5">
//                   <Calendar className="h-3 w-3 text-neutral-400" /> {selectedCert.issueDate}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-neutral-500 text-[10px] uppercase font-medium">Validation Lifecycle</p>
//                 <p className="text-neutral-200 font-medium font-mono flex items-center gap-1 mt-0.5">
//                   <Clock className="h-3 w-3 text-neutral-400" /> {selectedCert.expiryDate || "Lifetime"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-neutral-500 text-[10px] uppercase font-medium">Platform Infrastructure</p>
//                 <p className="text-neutral-200 font-medium flex items-center gap-1 mt-0.5 truncate">
//                   <Monitor className="h-3 w-3 text-neutral-400" /> {selectedCert.learningPlatform || "Coursera"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-neutral-500 text-[10px] uppercase font-medium">Localization Format</p>
//                 <p className="text-neutral-200 font-medium flex items-center gap-1 mt-0.5">
//                   <MapPin className="h-3 w-3 text-neutral-400" /> {selectedCert.location || "Online"}
//                 </p>
//               </div>
//             </div>
            
//             <div className="pt-2 text-xs">
//               <p className="text-neutral-500 text-[10px] uppercase font-medium">Internal Registry Hex ID</p>
//               <p className="text-neutral-300 font-mono mt-0.5 truncate">{selectedCert.credentialId || "N/A-VERIFIED-NODE"}</p>
//             </div>
//           </div>

//           <div className="space-y-2">
//             <h3 className="text-[10px] uppercase font-bold tracking-wider text-neutral-500">Functional Description</h3>
//             <p className="text-xs font-light text-neutral-400 leading-relaxed">
//               {selectedCert.description}
//             </p>
//           </div>

//           <div className="space-y-2">
//             <h3 className="text-[10px] uppercase font-bold tracking-wider text-neutral-500">MAPPED TOOLCHAIN COMPETENCIES</h3>
//             <div className="flex flex-wrap gap-1">
//               {selectedCert.skills?.map((skill: string) => (
//                 <span key={skill} className="text-xs bg-cyan-500/5 text-cyan-400 border border-cyan-500/10 rounded-md px-2.5 py-1 font-medium">
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         {selectedCert.credentialUrl && (
//           <div className="mt-8 pt-4 border-t border-white/[0.06]">
//             <a 
//               href={selectedCert.credentialUrl} 
//               target="_blank" 
//               rel="noreferrer"
//               className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-xs font-semibold tracking-wide text-white flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all"
//             >
//               Query Remote Verification Authority <ExternalLink className="h-3.5 w-3.5" />
//             </a>
//           </div>
//         )}
//       </motion.div>
//     </div>
//   );
// }









"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import * as d3 from "d3";
import { 
  Award, Layers, ShieldCheck, Cpu, Search, Sparkles, 
  Calendar, Network, CheckCircle, ExternalLink, 
  Clock, MapPin, Monitor, Flame, Zap, X, ChevronRight, ChevronDown
} from "lucide-react";
import { certificationCategories, Certification } from "@/data/certifications";

// --- Tab Configurations ---
const DASHBOARD_TABS = [
  { id: "overview", label: "Executive Overview", icon: Cpu },
  { id: "analytics", label: "Distribution & Analytics", icon: Layers },
  { id: "timeline", label: "Learning Timeline", icon: Calendar },
  { id: "gallery", label: "Credentials Vault", icon: Award },
  { id: "graph", label: "Knowledge Architecture", icon: Network },
  { id: "ai-insights", label: "AI Strategy Engine", icon: Sparkles },
];

// --- High-Fidelity Brand Themes Map ---
const brandThemes: Record<
  string,
  { aura: string; rim: string; text: string; shadow: string; color: string }
> = {
  cloud: {
    aura: "from-sky-500 to-blue-600",
    rim: "border-sky-500/30",
    text: "text-sky-400",
    shadow: "rgba(14, 165, 233, 0.4)",
    color: "#0ea5e9",
  },
  frontend: {
    aura: "from-pink-500 to-purple-600",
    rim: "border-pink-500/30",
    text: "text-pink-400",
    shadow: "rgba(236, 72, 153, 0.4)",
    color: "#ec4899",
  },
  google: {
    aura: "from-emerald-500 to-green-600",
    rim: "border-emerald-500/30",
    text: "text-emerald-400",
    shadow: "rgba(16, 185, 129, 0.4)",
    color: "#10b981",
  },
  microsoft: {
    aura: "from-blue-600 to-indigo-700",
    rim: "border-blue-500/30",
    text: "text-blue-400",
    shadow: "rgba(37, 99, 235, 0.4)",
    color: "#2563eb",
  },
  programming: {
    aura: "from-amber-400 to-orange-500",
    rim: "border-amber-500/30",
    text: "text-amber-400",
    shadow: "rgba(245, 158, 11, 0.4)",
    color: "#f59e0b",
  },
  networking: {
    aura: "from-teal-400 to-cyan-600",
    rim: "border-teal-500/30",
    text: "text-teal-400",
    shadow: "rgba(20, 184, 166, 0.4)",
    color: "#14b8a6",
  },
  database: {
    aura: "from-violet-500 to-fuchsia-600",
    rim: "border-violet-500/30",
    text: "text-violet-400",
    shadow: "rgba(139, 92, 246, 0.4)",
    color: "#8b5cf6",
  },
  default: {
    aura: "from-neutral-500 to-neutral-700",
    rim: "border-neutral-500/30",
    text: "text-neutral-400",
    shadow: "rgba(115, 115, 115, 0.2)",
    color: "#737373",
  },
};

// --- Counter Hook for Count-Up Animation ---
function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    const totalDuration = 1000;
    const incrementTime = Math.abs(Math.floor(totalDuration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [value]);
  return <>{count}</>;
}

export default function CertificationUmbrellaDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  // --- Flattened Data Utilities ---
  const allCertifications = useMemo(() => {
    return certificationCategories.flatMap((cat) => 
      cat.items.map((item) => ({ ...item, categoryId: cat.id, categoryTitle: cat.title }))
    );
  }, []);

  const uniqueIssuers = useMemo(() => {
    return Array.from(new Set(allCertifications.map((c) => c.issuer)));
  }, [allCertifications]);

  const uniqueSkills = useMemo(() => {
    return Array.from(new Set(allCertifications.flatMap((c) => c.skills)));
  }, [allCertifications]);

  // --- Dynamic Portfolio Health Score Metrics ---
  const portfolioScoreMetrics = useMemo(() => {
    const totalCerts = allCertifications.length;
    const verifiedCount = allCertifications.filter(c => c.verified).length;
    const advancedCerts = allCertifications.filter(c => c.level === "Advanced" || c.level === "Professional").length;
    const platformDiversity = new Set(allCertifications.map(c => c.learningPlatform)).size;

    let score = 60; 
    score += (verifiedCount / totalCerts) * 15;
    score += (advancedCerts / totalCerts) * 15;
    score += Math.min(platformDiversity * 2.5, 10);
    const finalScore = Math.min(Math.round(score), 100);

    let rating = "Good";
    let colorClass = "text-amber-400";
    if (finalScore >= 90) { rating = "Excellent"; colorClass = "text-emerald-400"; }
    else if (finalScore >= 80) { rating = "Very Good"; colorClass = "text-cyan-400"; }

    return { score: finalScore, rating, colorClass };
  }, [allCertifications]);

  return (
    <div className="w-full text-white space-y-8 select-none min-h-screen pb-20">
      
      {/* HEADER CONTROLS / PREMIUM NAVIGATION CAROUSEL */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-white/[0.06] pb-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)]">
            <ShieldCheck className="h-5 w-5 text-white animate-pulse" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              Ecosystem Intelligence Hub
            </h1>
            <p className="text-xs text-neutral-500">Continuous telemetry pipeline verifying engineering certifications</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-1 bg-neutral-950/80 p-1 rounded-xl border border-white/[0.04] backdrop-blur-xl">
          {DASHBOARD_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium tracking-wide transition-all duration-300 ${
                  isActive ? "text-cyan-400 z-10" : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 bg-white/[0.04] border border-white/[0.06] rounded-lg shadow-inner"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className="h-3.5 w-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* RENDER ACTIVE SCREEN COMPONENT */}
      <div className="w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {activeTab === "overview" && (
              <OverviewTab 
                allCerts={allCertifications} 
                issuersCount={uniqueIssuers.length} 
                skillsCount={uniqueSkills.length} 
                scoreMetrics={portfolioScoreMetrics}
                setSelectedCert={setSelectedCert}
              />
            )}
            {activeTab === "analytics" && (
              <AnalyticsTab allCerts={allCertifications} />
            )}
            {activeTab === "timeline" && <TimelineTab allCerts={allCertifications} />}
            {activeTab === "gallery" && (
              <GalleryTab 
                allCerts={allCertifications} 
                searchQuery={searchQuery} 
                setSearchQuery={setSearchQuery}
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
                setSelectedCert={setSelectedCert}
              />
            )}
            {activeTab === "graph" && <KnowledgeGraphTab allCerts={allCertifications} />}
            {activeTab === "ai-insights" && <AIInsightsTab allCerts={allCertifications} />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* MASTER DRAWER SYSTEM FOR INDIVIDUAL CERTIFICATE DRILLDOWN */}
      <CredentialDrawer selectedCert={selectedCert} onClose={() => setSelectedCert(null)} />
    </div>
  );
}

// ==========================================
// VIEW TAB 1: EXECUTIVE OVERVIEW (UNIFIED INTEL MATRIX)
// ==========================================
function OverviewTab({ allCerts, issuersCount, skillsCount, scoreMetrics, setSelectedCert }: any) {
  const featuredCerts = useMemo(() => allCerts.filter((c: any) => c.featured), [allCerts]);
  const homeHighlights = useMemo(() => allCerts.filter((c: any) => c.showOnHome).slice(0, 5), [allCerts]);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // --- D3 Orbital Dome Integration Logic ---
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const xMotion = useMotionValue(0);
  const yMotion = useMotionValue(0);

  const mouseXSpring = useSpring(xMotion, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(yMotion, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    xMotion.set((e.clientX - rect.left - width / 2) / width);
    yMotion.set((e.clientY - rect.top - height / 2) / height);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
    xMotion.set(0);
    yMotion.set(0);
  };

  const analytics = useMemo(() => {
    const categoryData = certificationCategories.map((c) => {
      const theme = brandThemes[c.id] || brandThemes.default;
      const categorySkills = Array.from(new Set(c.items.flatMap((i) => i.skills || [])));
      const categoryIssuers = Array.from(new Set(c.items.map((i) => i.issuer)));
      const skillDensity = c.items.length > 0 ? (categorySkills.length / c.items.length).toFixed(1) : "0.0";

      return {
        id: c.id,
        name: c.title,
        value: c.items.length,
        logo: c.logo,
        description: c.description,
        skills: categorySkills,
        issuersList: categoryIssuers,
        skillDensity,
        theme,
      };
    });
    return { categoryData };
  }, []);

  const radius = 95;
  const pie = useMemo(() => d3.pie<any>().value((d) => d.value).sort(null), []);
  const arc = useMemo(() => d3.arc<any>().innerRadius(68).outerRadius(radius).cornerRadius(5).padAngle(0.035), []);
  const arcs = useMemo(() => pie(analytics.categoryData), [analytics.categoryData, pie]);

  const activeCategory = analytics.categoryData.find((c) => c.id === hoveredId);
  const ActiveLogo = activeCategory?.logo || ShieldCheck;

  const globalSkillsSample = useMemo(() => {
    return Array.from(new Set(certificationCategories.flatMap((c) => c.items.flatMap((i) => i.skills || [])))).slice(0, 8);
  }, []);

  useEffect(() => {
    if (featuredCerts.length <= 1) return;
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % featuredCerts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredCerts]);

  const currentFeatured = featuredCerts[carouselIndex];

  return (
    <div className="space-y-6">
      
      {/* 1. INTEL GRAPH COMPONENT OVERVIEW PANEL (3D TILT INTEGRATION) */}
      <div style={{ perspective: "1200px" }} className="w-full">
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            boxShadow: activeCategory 
              ? `0 35px 80px -15px rgba(0,0,0,0.9), 0 0 60px -10px ${activeCategory.theme.shadow}`
              : "0 35px 80px -15px rgba(0,0,0,0.9), 0 0 50px -12px rgba(20,184,166,0.15)",
            borderColor: activeCategory ? activeCategory.theme.color : "rgba(255,255,255,0.08)"
          }}
          className="relative rounded-3xl border bg-neutral-900/40 p-8 pb-14 backdrop-blur-3xl overflow-hidden transition-all duration-300 hover:bg-neutral-900/50 group/card"
        >
          <div 
            className="pointer-events-none absolute inset-0 z-50 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
            style={{ transform: "translateZ(10px)" }}
          />

          <div className="pointer-events-none absolute inset-0 z-0 opacity-40" style={{ transform: "translateZ(-20px)" }}>
            <div 
              className="absolute -top-40 left-1/4 h-96 w-96 rounded-full blur-[140px] transition-all duration-700" 
              style={{ backgroundColor: activeCategory?.theme.color ? `${activeCategory.theme.color}20` : "rgba(6,182,212,0.08)" }}
            />
            <div 
              className="absolute -bottom-40 right-1/4 h-96 w-96 rounded-full blur-[140px] transition-all duration-700"
              style={{ backgroundColor: activeCategory?.theme.color ? `${activeCategory.theme.color}15` : "rgba(139,92,246,0.08)" }}
            />
          </div>

          <div className="relative z-10 grid gap-10 lg:grid-cols-12 items-center" style={{ transform: "translateZ(25px)" }}>
            
            {/* KPI MATRIX TRACKER */}
            <div className="space-y-6 lg:col-span-4">
              <div className="space-y-1.5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                  <span className="h-1 w-1 rounded-full bg-cyan-400 animate-pulse" /> Telemetry Core
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-white bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                  Certification Matrix
                </h2>
                <p className="text-xs font-light text-neutral-400 max-w-sm leading-relaxed">
                  Real-time processing framework tracking distributed cloud credentials and systematic engineering standards.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                <div className="group rounded-2xl border border-white/[0.04] bg-gradient-to-b from-neutral-950/60 to-neutral-950/20 p-4 shadow-inner hover:border-white/[0.08] transition-colors duration-300">
                  <div className="flex items-center gap-2 text-neutral-400">
                    <Award className="h-4 w-4 group-hover:text-white transition-colors" />
                    <span className="text-[11px] font-medium tracking-wide uppercase text-neutral-500 group-hover:text-neutral-400 transition-colors">Assets</span>
                  </div>
                  <p className="mt-2 text-3xl font-bold text-white tracking-tight">{allCerts.length}</p>
                </div>

                <div className="group rounded-2xl border border-white/[0.04] bg-gradient-to-b from-neutral-950/60 to-neutral-950/20 p-4 shadow-inner hover:border-cyan-500/20 transition-colors duration-300">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <Layers className="h-4 w-4" />
                    <span className="text-[11px] font-medium tracking-wide uppercase text-neutral-500 group-hover:text-cyan-500/70 transition-colors">Skills</span>
                  </div>
                  <p className="mt-2 text-3xl font-bold text-cyan-400 tracking-tight drop-shadow-[0_0_12px_rgba(34,211,238,0.2)]">{skillsCount}</p>
                </div>
              </div>

              {/* DYNAMIC INFORMATION PANEL */}
              <div 
                className="rounded-2xl border bg-gradient-to-b from-neutral-950/70 to-neutral-950/30 p-4 shadow-inner min-h-[148px] flex flex-col justify-center transition-all duration-500"
                style={{ borderColor: activeCategory ? `${activeCategory.theme.color}20` : "rgba(255,255,255,0.04)" }}
              >
                <AnimatePresence mode="wait">
                  {activeCategory ? (
                    <motion.div
                      key={activeCategory.id}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 8 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-bold uppercase tracking-wider ${activeCategory.theme.text} flex items-center gap-1.5`}>
                          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: activeCategory.theme.color }} />
                          {activeCategory.name} Insight
                        </span>
                        <span 
                          className="font-mono text-[11px] bg-neutral-900/80 px-2 py-0.5 rounded border transition-colors"
                          style={{ color: activeCategory.theme.color, borderColor: `${activeCategory.theme.color}30` }}
                        >
                          Coverage: {Math.round((activeCategory.value / allCerts.length) * 100)}%
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[11px] border-b border-white/[0.04] pb-2">
                        <div className="text-neutral-500">Certificates: <span className="text-neutral-200 font-medium font-mono">{activeCategory.value}</span></div>
                        <div className="text-neutral-500 truncate">Authorities: <span className="text-neutral-200 font-medium truncate" title={activeCategory.issuersList.join(", ")}>{activeCategory.issuersList.join(", ") || "N/A"}</span></div>
                        <div className="text-neutral-500">Unique Skills: <span className="text-neutral-200 font-medium font-mono">{activeCategory.skills.length}</span></div>
                        <div className="text-neutral-500">Density Score: <span className="text-neutral-200 font-medium font-mono">{activeCategory.skillDensity}/cert</span></div>
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between text-[10px] text-neutral-400">
                          <span>Skill Concentration Density</span>
                          <span className="font-mono font-bold text-amber-400">{activeCategory.skillDensity}</span>
                        </div>
                        <div className="relative h-1.5 w-full rounded-full bg-neutral-900 overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.min((parseFloat(activeCategory.skillDensity) / 6) * 100, 100)}%` }}
                            className="h-full bg-gradient-to-r from-amber-500 via-orange-400 to-amber-400"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="global-distribution"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-3.5"
                    >
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-neutral-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                          <Cpu className="h-3 w-3 text-neutral-500" />
                          Portfolio Distribution
                        </span>
                        <span className="font-mono text-neutral-500 text-[10px]">Macro Balance</span>
                      </div>

                      <div className="h-2 w-full rounded-full bg-neutral-900 overflow-hidden flex gap-0.5">
                        {analytics.categoryData.map((c) => (
                          <div 
                            key={c.id} 
                            className="h-full first:rounded-l-full last:rounded-r-full transition-all duration-300"
                            style={{ 
                              width: `${(c.value / allCerts.length) * 100}%`,
                              backgroundColor: c.theme.color 
                            }}
                          />
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-neutral-500">
                        {analytics.categoryData.map((c) => (
                          <span key={c.id} className="flex items-center gap-1 font-medium">
                            <span className="h-1.5 w-1.5 rounded-full transition-transform group-hover:scale-125" style={{ backgroundColor: c.theme.color }} />
                            {c.name} ({Math.round((c.value / allCerts.length) * 100)}%)
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* D3 ORBITAL DOME DOCK */}
            <div className="flex flex-col items-center justify-center lg:col-span-4 relative py-4" style={{ transform: "translateZ(35px)" }}>
              <div className="relative flex items-center justify-center h-[230px] w-[230px]">
                
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div
                    className="h-[190px] w-[190px] rounded-full blur-3xl opacity-35 transition-all duration-500"
                    style={{ background: activeCategory?.theme.color || "rgba(56,189,248,0.2)" }}
                  />
                </div>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                  <div className="h-[140px] w-[140px] rounded-full bg-white/5 blur-xl" />
                </div>

                <motion.div
                  className="absolute h-[110px] w-[110px] rounded-full border border-white/5"
                  animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  style={{ boxShadow: `0 0 40px ${activeCategory?.theme.shadow || "rgba(255,255,255,0.02)"}` }}
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={hoveredId || "default"}
                      initial={{ opacity: 0, scale: 0.85, y: 6 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.85, y: -6 }}
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      className="flex flex-col items-center text-center"
                    >
                      <div
                        className={`p-4 rounded-full border backdrop-blur-xl bg-neutral-950/80 shadow-2xl transition-all duration-300 ${activeCategory?.theme.rim || "border-white/10"}`}
                        style={{ boxShadow: `0 0 35px ${activeCategory?.theme.shadow || "rgba(0,0,0,0)"}` }}
                      >
                        <ActiveLogo className={`text-2xl transition-colors duration-300 ${activeCategory?.theme.text || "text-neutral-400"}`} />
                      </div>
                      
                      <span className="mt-2 text-[10px] font-medium tracking-widest text-neutral-500 uppercase max-w-[120px] truncate">
                        {activeCategory ? activeCategory.name : "Portfolio"}
                      </span>
                      <span className="text-xl font-bold text-white tracking-tight">
                        {activeCategory ? `${activeCategory.value} Layers` : `${allCerts.length} Active`}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <svg width={230} height={230} className="overflow-visible absolute z-10 rotate-[-90deg]">
                  <defs>
                    <filter id="hudGlow">
                      <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  <g transform="translate(115,115)">
                    {arcs.map((d: any) => {
                      const isHovered = d.data.id === hoveredId;
                      return (
                        <motion.path
                          key={d.data.id}
                          d={arc(d) || ""}
                          fill={d.data.theme.color}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{
                            opacity: hoveredId === null ? 0.85 : isHovered ? 1 : 0.2,
                            scale: isHovered ? 1.06 : 1,
                          }}
                          transition={{ type: "spring", stiffness: 280, damping: 22 }}
                          onMouseEnter={() => setHoveredId(d.data.id)}
                          style={{
                            filter: isHovered ? `url(#hudGlow) drop-shadow(0 0 14px ${d.data.theme.shadow})` : "none",
                            cursor: "pointer",
                          }}
                        />
                      );
                    })}
                  </g>
                </svg>
              </div>
            </div>

            {/* FOCUS TRACKS INTERACTIVE SELECTION */}
            <div className="space-y-3.5 lg:col-span-4 w-full relative z-20">
              <p className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 border-b border-white/[0.04] pb-2 flex justify-between items-center">
                <span>Target Focus Tracks</span>
                <span className="font-mono font-normal normal-case text-neutral-600 text-[9px]">Hover to inspect</span>
              </p>

              <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-neutral-850">
                {analytics.categoryData.map((c) => {
                  const isSelected = c.id === hoveredId;
                  const CardIcon = c.logo;

                  return (
                    <motion.div
                      key={c.id}
                      onMouseEnter={() => setHoveredId(c.id)}
                      animate={{
                        borderColor: isSelected ? c.theme.color : "rgba(255,255,255,0.03)",
                        backgroundColor: isSelected ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.01)",
                        boxShadow: isSelected ? `0 0 20px -5px ${c.theme.shadow}` : "none"
                      }}
                      className="group flex items-center justify-between rounded-xl border p-2.5 cursor-pointer transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div 
                          className="p-2 rounded-lg bg-neutral-950 border border-white/[0.04] text-sm transition-colors duration-300"
                          style={{ color: isSelected ? c.theme.color : "#a3a3a3" }}
                        >
                          <CardIcon className="h-4 w-4" />
                        </div>
                        <div className="truncate">
                          <p className="text-xs font-semibold text-neutral-200 truncate group-hover:text-white transition-colors">{c.name}</p>
                          <p className="text-[10px] text-neutral-500 font-light truncate">{c.description || "Verification sector"}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 flex-shrink-0 pl-2">
                        <span className="h-1.5 w-1.5 rounded-full transition-transform duration-300 group-hover:scale-125" style={{ backgroundColor: c.theme.color }} />
                        <span className="text-xs font-bold text-neutral-400 font-mono group-hover:text-neutral-200 transition-colors">{c.value}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ACTIVE TOOLCHAIN COMPETENCY MATRIX FOOTER */}
          <div className="mt-8 pt-5 border-t border-white/[0.04] relative z-10" style={{ transform: "translateZ(15px)" }}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-0.5">
                <span className="block text-[10px] uppercase font-bold tracking-widest text-neutral-500">
                  {activeCategory ? "Sector Competency Scope" : "Active Core Competencies"}
                </span>
                <p className="text-xs text-neutral-400 font-light">
                  {activeCategory ? `Verified toolchains mapping to ${activeCategory.name}` : "Cross-platform capability layers mapping over entire engineering scope."}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 max-w-xl sm:justify-end">
                <AnimatePresence mode="popLayout">
                  {(activeCategory ? activeCategory.skills : globalSkillsSample).map((skill) => (
                    <motion.span
                      key={skill}
                      layout
                      initial={{ opacity: 0, scale: 0.9, y: 4 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      style={{
                        borderColor: activeCategory ? `${activeCategory.theme.color}30` : "rgba(255,255,255,0.04)"
                      }}
                      className={`rounded-md border px-2.5 py-1 text-[11px] font-medium tracking-wide shadow-sm backdrop-blur-md transition-all duration-300 ${
                        activeCategory 
                          ? `bg-white/[0.01] ${activeCategory.theme.text}` 
                          : "bg-neutral-950/40 text-neutral-400 hover:text-neutral-200 hover:border-white/[0.1]"
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="absolute bottom-3 left-0 right-0 flex justify-center pointer-events-none z-30" style={{ transform: "translateZ(40px)" }}>
            <motion.div 
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/[0.04] bg-neutral-950/60 backdrop-blur-md shadow-lg"
            >
              <span className="text-[9px] font-semibold tracking-widest text-neutral-400 uppercase">Scroll for Ledger Breakdown</span>
              <ChevronDown className="h-3 w-3 text-cyan-400 animate-pulse" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* 2. SECONDARY MATRICES LAYOUT SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Portfolio Health Score Radial Block */}
        <div className="lg:col-span-4 bg-neutral-900/40 border border-white/[0.05] rounded-2xl p-6 backdrop-blur-2xl flex flex-col items-center justify-center relative group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <h3 className="text-xs uppercase font-bold tracking-widest text-neutral-500 mb-4 self-start">Ecosystem Vitality</h3>
          
          <div className="relative h-44 w-44 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.02)" strokeWidth="6" fill="transparent" />
              <motion.circle 
                cx="50" cy="50" r="42" 
                stroke={scoreMetrics.score >= 90 ? "#10b981" : "#22d3ee"} 
                strokeWidth="6" 
                fill="transparent" 
                strokeDasharray="264"
                initial={{ strokeDashoffset: 264 }}
                animate={{ strokeDashoffset: 264 - (264 * scoreMetrics.score) / 100 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-extrabold tracking-tight text-white">
                <Counter value={scoreMetrics.score} />%
              </span>
              <span className={`text-xs font-semibold uppercase mt-1 tracking-wider ${scoreMetrics.colorClass}`}>
                {scoreMetrics.rating}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 w-full gap-2 mt-6 border-t border-white/[0.04] pt-4 text-center">
            <div>
              <p className="text-[10px] text-neutral-500 uppercase font-medium">Assets</p>
              <p className="text-lg font-bold text-neutral-200"><Counter value={allCerts.length} /></p>
            </div>
            <div>
              <p className="text-[10px] text-neutral-500 uppercase font-medium">Issuers</p>
              <p className="text-lg font-bold text-neutral-200"><Counter value={issuersCount} /></p>
            </div>
            <div>
              <p className="text-[10px] text-neutral-500 uppercase font-medium">Skills</p>
              <p className="text-lg font-bold text-cyan-400"><Counter value={skillsCount} /></p>
            </div>
          </div>
        </div>

        {/* Featured Auto-Sliding Hero Carousel */}
        <div className="lg:col-span-8 bg-neutral-900/40 border border-white/[0.05] rounded-2xl p-6 backdrop-blur-2xl flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex items-center justify-between border-b border-white/[0.04] pb-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 flex items-center gap-1.5">
              <Flame className="h-3.5 w-3.5 text-amber-500 animate-pulse" /> Featured Engineering Standard
            </span>
            <div className="flex gap-1">
              {featuredCerts.map((_item: unknown, idx: number) => (
                <div 
                  key={idx} 
                  onClick={() => setCarouselIndex(idx)}
                  className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 ${idx === carouselIndex ? "w-4 bg-cyan-400" : "w-1.5 bg-neutral-700"}`} 
                />
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {currentFeatured && (
              <motion.div 
                key={currentFeatured.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-12 gap-4 items-center flex-1"
              >
                <div className="md:col-span-8 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono bg-neutral-950 px-2 py-0.5 rounded border border-white/[0.06] text-neutral-400">
                      {currentFeatured.issuer}
                    </span>
                    {currentFeatured.verified && (
                      <span className="text-[9px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full flex items-center gap-1 font-medium">
                        <CheckCircle className="h-2.5 w-2.5" /> Authenticated
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                    {currentFeatured.title}
                  </h2>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-xl">
                    {currentFeatured.description}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {currentFeatured.skills.map((s: string) => (
                      <span key={s} className="text-[10px] bg-white/[0.02] border border-white/[0.04] rounded px-2 py-0.5 text-neutral-300">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-4 flex justify-center md:justify-end">
                  <button 
                    onClick={() => setSelectedCert(currentFeatured)}
                    className="mt-4 md:mt-0 px-4 py-2.5 rounded-xl border border-white/[0.08] bg-neutral-950 text-xs font-medium tracking-wide flex items-center gap-2 hover:bg-neutral-900 hover:border-cyan-500/30 text-neutral-300 hover:text-white transition-all shadow-xl"
                  >
                    Inspect Credentials <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Automated Latest Highlights Footer Pipeline */}
        <div className="lg:col-span-12 bg-neutral-900/40 border border-white/[0.05] rounded-2xl p-5 backdrop-blur-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-white/[0.04] pb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-cyan-400" /> Automated Pipeline Highlights
            </span>
            <span className="text-[10px] font-mono text-neutral-500">Criteria: showOnHome == true</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {homeHighlights.map((cert: any) => (
              <div 
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="bg-neutral-950/60 border border-white/[0.03] rounded-xl p-3.5 hover:border-white/[0.08] cursor-pointer transition-all hover:bg-neutral-950 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start gap-2 mb-1.5">
                    <span className="text-[9px] font-mono text-neutral-500 truncate block max-w-[80px]">
                      {cert.issuer}
                    </span>
                    <span className="text-[9px] font-mono text-neutral-400">{cert.issueDate}</span>
                  </div>
                  <h4 className="text-xs font-bold text-neutral-200 group-hover:text-cyan-400 transition-colors line-clamp-2 leading-snug">
                    {cert.title}
                  </h4>
                </div>
                <div className="flex items-center justify-between border-t border-white/[0.04] mt-3 pt-2">
                  <span className="text-[9px] text-neutral-500 font-light">{cert.level || "Intermediate"}</span>
                  <span className="text-[9px] text-cyan-500 font-medium group-hover:underline flex items-center gap-0.5">
                    Open <ExternalLink className="h-2 w-2" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// VIEW TAB 2: DISTRIBUTION & ANALYTICS
// ==========================================
function AnalyticsTab({ allCerts }: any) {
  const issuerDistribution = useMemo(() => {
    const counts: Record<string, number> = {};
    allCerts.forEach((c: any) => {
      counts[c.issuer] = (counts[c.issuer] || 0) + 1;
    });
    return Object.entries(counts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  }, [allCerts]);

  const skillConcentration = useMemo(() => {
    const counts: Record<string, number> = {};
    allCerts.forEach((c: any) => {
      c.skills.forEach((s: string) => { counts[s] = (counts[s] || 0) + 1; });
    });
    return Object.entries(counts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 6);
  }, [allCerts]);

  const categoriesCalculated = useMemo(() => {
    return certificationCategories.map(cat => {
      const hoursCount = cat.items.reduce((acc, item) => acc + (item.hours || 0), 0);
      return {
        ...cat,
        totalCerts: cat.items.length,
        totalHours: hoursCount,
      };
    });
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-6 bg-neutral-900/40 border border-white/[0.05] rounded-2xl p-5 backdrop-blur-2xl space-y-4">
        <h3 className="text-xs uppercase font-bold tracking-widest text-neutral-500 border-b border-white/[0.04] pb-2">
          Authority Issuance Volume
        </h3>
        <div className="space-y-3">
          {issuerDistribution.map((item) => {
            const maxCount = issuerDistribution[0]?.count || 1;
            const percentage = (item.count / maxCount) * 100;
            return (
              <div key={item.name} className="space-y-1 group">
                <div className="flex justify-between text-xs">
                  <span className="text-neutral-300 font-light group-hover:text-white transition-colors">{item.name}</span>
                  <span className="font-mono text-neutral-400 font-bold">{item.count}</span>
                </div>
                <div className="h-2 w-full bg-neutral-950 rounded-full overflow-hidden border border-white/[0.02]">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="lg:col-span-6 bg-neutral-900/40 border border-white/[0.05] rounded-2xl p-5 backdrop-blur-2xl space-y-4">
        <h3 className="text-xs uppercase font-bold tracking-widest text-neutral-500 border-b border-white/[0.04] pb-2">
          Core Skill Matrix Density
        </h3>
        <div className="space-y-3">
          {skillConcentration.map((item) => {
            const maxCount = skillConcentration[0]?.count || 1;
            const percentage = (item.count / maxCount) * 100;
            return (
              <div key={item.name} className="space-y-1 group">
                <div className="flex justify-between text-xs">
                  <span className="text-neutral-300 font-light group-hover:text-white transition-colors">{item.name}</span>
                  <span className="font-mono text-cyan-400 font-bold">{item.count} Nodes</span>
                </div>
                <div className="h-2 w-full bg-neutral-950 rounded-full overflow-hidden border border-white/[0.02]">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-teal-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.2)]"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="lg:col-span-12 space-y-3">
        <h3 className="text-xs uppercase font-bold tracking-widest text-neutral-500">
          Domain Breakdown Architecture
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categoriesCalculated.map((cat) => {
            const Icon = cat.logo;
            return (
              <div 
                key={cat.id}
                className="bg-neutral-900/40 border border-white/[0.04] hover:border-white/[0.08] p-5 rounded-xl backdrop-blur-xl transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-neutral-950 text-neutral-400 border border-white/[0.04]">
                      <Icon className="h-4 w-4 text-cyan-400" />
                    </div>
                    <h4 className="text-sm font-bold text-white">{cat.title}</h4>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-mono bg-white/[0.02] border border-white/[0.06] px-2 py-0.5 rounded text-neutral-400">
                    {cat.difficulty || "Advanced"}
                  </span>
                </div>
                
                <p className="text-xs text-neutral-400 font-light line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>

                <div className="grid grid-cols-2 gap-2 border-t border-white/[0.04] pt-3 text-xs">
                  <div className="text-neutral-500">
                    Certificates: <span className="text-neutral-200 font-bold font-mono">{cat.totalCerts}</span>
                  </div>
                  <div className="text-neutral-500">
                    Total Effort: <span className="text-neutral-200 font-bold font-mono">{cat.totalHours} Hrs</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 pt-1">
                  {cat.skillsOverview?.slice(0, 4).map((skill) => (
                    <span key={skill} className="text-[9px] bg-cyan-500/5 text-cyan-400 border border-cyan-500/10 rounded px-1.5 py-0.5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// VIEW TAB 3: CHRONOLOGICAL LEARNING TIMELINE
// ==========================================
function TimelineTab({ allCerts }: any) {
  const timelineData = useMemo(() => {
    const yearsMap: Record<string, any[]> = {};
    allCerts.forEach((c: any) => {
      const year = c.issueDate;
      if (!yearsMap[year]) yearsMap[year] = [];
      yearsMap[year].push(c);
    });
    return Object.entries(yearsMap).sort((a, b) => parseInt(a[0]) - parseInt(b[0]));
  }, [allCerts]);

  return (
    <div className="bg-neutral-900/20 border border-white/[0.04] rounded-2xl p-6 overflow-x-auto scrollbar-none relative">
      <div className="absolute top-4 left-6 flex items-center gap-1.5">
        <div className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
        <span className="text-xs uppercase font-bold tracking-widest text-neutral-500">Horizontal Journey Ledger</span>
      </div>
      
      <div className="flex items-start gap-12 pt-8 min-w-[900px] pb-4">
        {timelineData.map(([year, items], idx) => (
          <div key={year} className="w-72 flex-shrink-0 relative space-y-4">
            {idx < timelineData.length - 1 && (
              <div className="absolute top-3.5 left-16 right-0 h-[1px] bg-gradient-to-r from-neutral-800 to-transparent pointer-events-none" />
            )}

            <div className="flex items-center gap-2">
              <div className="h-7 w-16 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-md font-mono text-xs font-bold flex items-center justify-center shadow-lg">
                {year}
              </div>
              <span className="text-[10px] text-neutral-500 font-mono font-medium">({items.length} Assets)</span>
            </div>

            <div className="space-y-2 border-l border-white/[0.04] pl-3 ml-3.5">
              {items.map((cert) => (
                <div 
                  key={cert.id} 
                  className="bg-neutral-950/40 border border-white/[0.03] rounded-lg p-2.5 hover:border-white/[0.08] hover:bg-neutral-950 transition-all group"
                >
                  <p className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider">{cert.issuer}</p>
                  <h4 className="text-xs font-bold text-neutral-200 group-hover:text-cyan-400 transition-colors truncate">
                    {cert.title}
                  </h4>
                  {cert.skills && (
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {cert.skills.slice(0, 2).map((s: string) => (
                        <span key={s} className="text-[8px] bg-white/[0.02] text-neutral-400 rounded px-1">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// VIEW TAB 4: CREDENTIALS VAULT GALLERY
// ==========================================
function GalleryTab({ allCerts, searchQuery, setSearchQuery, selectedFilter, setSelectedFilter, setSelectedCert }: any) {
  const filterPills = ["All", "Cloud", "Frontend", "Programming", "Database", "Networking"];

  const filteredCerts = useMemo(() => {
    return allCerts.filter((c: any) => {
      const query = searchQuery.toLowerCase();
      const matchesSearch = c.title.toLowerCase().includes(query) || 
                            c.issuer.toLowerCase().includes(query) || 
                            c.skills.some((s: string) => s.toLowerCase().includes(query));
      
      if (selectedFilter === "All") return matchesSearch;
      const matchesCategory = c.categoryId.toLowerCase() === selectedFilter.toLowerCase();
      return matchesCategory && matchesSearch;
    });
  }, [allCerts, searchQuery, selectedFilter]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-neutral-900/40 p-4 rounded-xl border border-white/[0.04] backdrop-blur-xl">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-neutral-500" />
          <input
            type="text"
            placeholder="Search credentials, authorities, tech skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-neutral-950 border border-white/[0.06] rounded-xl pl-9 pr-4 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500/40 transition-all"
          />
        </div>

        <div className="flex flex-wrap gap-1 w-full md:w-auto overflow-x-auto">
          {filterPills.map((pill) => {
            const isSelected = selectedFilter.toLowerCase() === pill.toLowerCase();
            return (
              <button
                key={pill}
                onClick={() => setSelectedFilter(pill)}
                className={`relative px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
                  isSelected ? "text-cyan-400" : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                {isSelected && (
                  <motion.div 
                    layoutId="galleryFilterIndicator"
                    className="absolute inset-0 bg-white/[0.03] border border-white/[0.05] rounded-lg"
                  />
                )}
                {pill}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredCerts.map((cert: any) => (
            <TiltCard key={cert.id} cert={cert} onClick={() => setSelectedCert(cert)} />
          ))}
        </AnimatePresence>
      </div>

      {filteredCerts.length === 0 && (
        <div className="text-center py-12 text-neutral-500 text-xs font-light">
          No engineering nodes matched your operational parameter settings.
        </div>
      )}
    </div>
  );
}

function TiltCard({ cert, onClick }: { cert: any; onClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 22 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 22 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) / rect.width);
    y.set((e.clientY - rect.top - rect.height / 2) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const accentColor = cert.color || "#0ea5e9";

  return (
    <div style={{ perspective: "1000px" }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="h-56 bg-gradient-to-b from-neutral-900/60 to-neutral-900/20 border border-white/[0.04] rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden backdrop-blur-md cursor-pointer transition-all duration-300 hover:bg-neutral-900/50 hover:border-white/[0.08] group"
      >
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" 
          style={{ background: `radial-gradient(circle at 50% 50%, ${accentColor}, transparent 60%)` }}
        />

        <div className="space-y-2" style={{ transform: "translateZ(20px)" }}>
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-neutral-400 bg-neutral-950 px-2 py-0.5 rounded border border-white/[0.05]">
              {cert.issuer}
            </span>
            <span className="text-[10px] font-mono text-neutral-500">{cert.issueDate}</span>
          </div>
          <h3 className="text-sm font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
            {cert.title}
          </h3>
          <p className="text-[11px] font-light text-neutral-400 line-clamp-2 leading-relaxed">
            {cert.description}
          </p>
        </div>

        <div className="space-y-3" style={{ transform: "translateZ(15px)" }}>
          <div className="flex flex-wrap gap-1">
            {cert.skills?.slice(0, 3).map((s: string) => (
              <span key={s} className="text-[9px] bg-white/[0.02] border border-white/[0.04] px-1.5 py-0.5 rounded text-neutral-300">
                {s}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between border-t border-white/[0.04] pt-2">
            <span className="text-[10px] font-medium text-neutral-500">{cert.level || "Intermediate"}</span>
            <span 
              className="text-[10px] font-medium transition-all flex items-center gap-1 group-hover:underline"
              style={{ color: accentColor }}
            >
              Open Ledger <ExternalLink className="h-2.5 w-2.5" />
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ==========================================
// VIEW TAB 5: D3 INTERACTIVE KNOWLEDGE ARCHITECTURE GRAPH
// ==========================================
function KnowledgeGraphTab({ allCerts }: any) {
  const containerRef = useRef<SVGSVGElement>(null);

  const graphData = useMemo(() => {
    const nodes: any[] = [];
    const links: any[] = [];
    const nodeMap = new Map();

    nodes.push({ id: "Root", label: "Skills Universe", group: "root", size: 14 });
    nodeMap.set("Root", true);

    certificationCategories.forEach((cat) => {
      if (!nodeMap.has(cat.id)) {
        nodes.push({ id: cat.id, label: cat.title, group: "category", size: 10 });
        nodeMap.set(cat.id, true);
        links.push({ source: "Root", target: cat.id });
      }

      cat.items.forEach((item) => {
        if (!nodeMap.has(item.id)) {
          nodes.push({ id: item.id, label: item.title, group: "cert", size: 7, color: item.color });
          nodeMap.set(item.id, true);
          links.push({ source: cat.id, target: item.id });
        }

        item.skills.forEach((skill) => {
          const skillId = `skill-${skill}`;
          if (!nodeMap.has(skillId)) {
            nodes.push({ id: skillId, label: skill, group: "skill", size: 6 });
            nodeMap.set(skillId, true);
          }
          links.push({ source: item.id, target: skillId });
        });
      });
    });

    return { nodes, links };
  }, [allCerts]);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = 800;
    const height = 400;

    const svg = d3.select(containerRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .html(""); 

    const simulation = d3.forceSimulation(graphData.nodes)
      .force("link", d3.forceLink(graphData.links).id((d: any) => d.id).distance(45))
      .force("charge", d3.forceManyBody().strength(-80))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(18));

    const link = svg.append("g")
      .attr("stroke", "rgba(255,255,255,0.04)")
      .attr("stroke-width", 1)
      .selectAll("line")
      .data(graphData.links)
      .join("line");

    const node = svg.append("g")
      .selectAll("g")
      .data(graphData.nodes)
      .join("g")
      .call(d3.drag<any, any>()
        .on("start", (e, d) => {
          if (!e.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x; d.fy = d.y;
        })
        .on("drag", (e, d) => { d.fx = e.x; d.fy = e.y; })
        .on("end", (e, d) => {
          if (!e.active) simulation.alphaTarget(0);
          d.fx = null; d.fy = null;
        })
      );

    node.append("circle")
      .attr("r", (d: any) => d.size)
      .attr("fill", (d: any) => {
        if (d.group === "root") return "#22d3ee";
        if (d.group === "category") return "#6366f1";
        if (d.group === "cert") return d.color || "#a3a3a3";
        return "#14b8a6";
      })
      .attr("stroke", "rgba(0,0,0,0.5)")
      .attr("stroke-width", 1);

    node.append("text")
      .text((d: any) => d.label)
      .attr("x", (d: any) => d.size + 4)
      .attr("y", 3)
      .style("font-size", "8px")
      .style("fill", "rgba(255,255,255,0.6)")
      .style("pointer-events", "none")
      .style("font-family", "monospace");

    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      node.attr("transform", (d: any) => `translate(${d.x},${d.y})`);
    });

    return () => {
      simulation.stop();
    };
  }, [graphData]);

  return (
    <div className="bg-neutral-900/40 border border-white/[0.05] rounded-2xl p-5 backdrop-blur-2xl space-y-4">
      <div className="flex justify-between items-center border-b border-white/[0.04] pb-2">
        <h3 className="text-xs uppercase font-bold tracking-widest text-neutral-500">
          Knowledge Node Topography Simulator
        </h3>
        <div className="flex gap-4 text-[9px] font-mono text-neutral-500">
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-cyan-400" /> Origin Core</span>
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-indigo-500" /> Tracks</span>
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-teal-500" /> Toolchains</span>
        </div>
      </div>
      <div className="w-full bg-neutral-950/80 rounded-xl overflow-hidden border border-white/[0.03] cursor-grab active:cursor-grabbing">
        <svg ref={containerRef} className="w-full h-auto min-h-[400px]" />
      </div>
    </div>
  );
}

// ==========================================
// VIEW TAB 6: AI AUTOMATED STRATEGY ENGINE
// ==========================================
function AIInsightsTab({ allCerts }: any) {
  const portfolioInsights = useMemo(() => {
    const skills = allCerts.flatMap((c: any) => c.skills);
    const hasCloud = skills.includes("AWS") || skills.includes("Azure");
    const hasContainers = skills.includes("Docker") || skills.includes("Kubernetes");
    
    const strategies = [
      { text: "Highly resilient framework signature found inside distributed systems.", strength: "Advanced Cloud Deployments" },
      { text: "Excellent procedural algorithmic structure verified over semantic scripts.", strength: "Core Programming Architecture" }
    ];

    const missingNextRecommendations = [];
    if (hasCloud && !hasContainers) {
      missingNextRecommendations.push({ title: "CKA: Certified Kubernetes Administrator", platform: "Linux Foundation" });
      missingNextRecommendations.push({ title: "HashiCorp Terraform Associate", platform: "HashiCorp" });
    } else {
      missingNextRecommendations.push({ title: "AWS Solutions Architect Professional", platform: "Amazon Web Services" });
      missingNextRecommendations.push({ title: "Prometheus Certified Associate", platform: "Linux Foundation" });
    }

    return { strategies, recommendations: missingNextRecommendations };
  }, [allCerts]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-7 bg-neutral-900/40 border border-white/[0.05] rounded-2xl p-6 backdrop-blur-2xl space-y-4 relative">
        <div className="flex items-center gap-2 border-b border-white/[0.04] pb-2">
          <Sparkles className="h-4 w-4 text-cyan-400 animate-spin" style={{ animationDuration: "3s" }} />
          <h3 className="text-xs uppercase font-bold tracking-widest text-white">
            Compiled Strategy Engine Audit
          </h3>
        </div>

        <div className="space-y-4">
          {portfolioInsights.strategies.map((strat, i) => (
            <div key={i} className="bg-neutral-950/40 border border-white/[0.03] p-4 rounded-xl space-y-1.5">
              <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider block">
                Detected Strength Layer {i + 1}
              </span>
              <h4 className="text-sm font-bold text-neutral-200">{strat.strength}</h4>
              <p className="text-xs font-light text-neutral-400 leading-relaxed">{strat.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-5 bg-neutral-900/40 border border-white/[0.05] rounded-2xl p-6 backdrop-blur-2xl space-y-4">
        <h3 className="text-xs uppercase font-bold tracking-widest text-neutral-500 border-b border-white/[0.04] pb-2">
          Target Recommendations Pipeline
        </h3>
        
        <div className="space-y-3">
          {portfolioInsights.recommendations.map((rec) => (
            <div 
              key={rec.title}
              className="bg-neutral-950 border border-white/[0.03] hover:border-cyan-500/20 p-4 rounded-xl flex items-center justify-between transition-all group"
            >
              <div className="space-y-1">
                <span className="text-[9px] font-mono text-neutral-500 block uppercase tracking-wider">{rec.platform}</span>
                <h4 className="text-xs font-bold text-neutral-200 group-hover:text-cyan-400 transition-colors">
                  {rec.title}
                </h4>
              </div>
              <span className="text-[10px] font-medium text-cyan-400 bg-cyan-500/5 px-2 py-1 rounded border border-cyan-500/10 flex-shrink-0">
                Strategic Next
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// VIEW COMPONENT 7: CREDENTIAL INSPECTION DRAWER
// ==========================================
function CredentialDrawer({ selectedCert, onClose }: { selectedCert: Certification | null; onClose: () => void }) {
  if (!selectedCert) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      <motion.div 
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="relative w-full max-w-md h-full bg-neutral-950 border-l border-white/[0.08] p-6 shadow-2xl flex flex-col justify-between z-10 overflow-y-auto"
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <span className="text-xs font-mono text-neutral-500">Security Vault Inspection</span>
            <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-white/5 transition-colors border border-white/[0.04]">
              <X className="h-4 w-4 text-neutral-400 hover:text-white" />
            </button>
          </div>

          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono bg-white/[0.04] border border-white/[0.08] text-neutral-300 px-2 py-0.5 rounded">
                {selectedCert.issuer}
              </span>
              {selectedCert.verified && (
                <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-medium">
                  Verified Integrity
                </span>
              )}
            </div>
            <h2 className="text-lg font-bold text-white tracking-tight leading-snug">
              {selectedCert.title}
            </h2>
          </div>

          <div className="space-y-2 bg-neutral-900/40 p-4 rounded-xl border border-white/[0.03]">
            <h3 className="text-[10px] uppercase font-bold tracking-wider text-neutral-500 mb-2">Metadata Matrices</h3>
            <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs border-b border-white/[0.04] pb-3">
              <div>
                <p className="text-neutral-500 text-[10px] uppercase font-medium">Issued Milestone</p>
                <p className="text-neutral-200 font-medium font-mono flex items-center gap-1 mt-0.5">
                  <Calendar className="h-3 w-3 text-neutral-400" /> {selectedCert.issueDate}
                </p>
              </div>
              <div>
                <p className="text-neutral-500 text-[10px] uppercase font-medium">Validation Lifecycle</p>
                <p className="text-neutral-200 font-medium font-mono flex items-center gap-1 mt-0.5">
                  <Clock className="h-3 w-3 text-neutral-400" /> {selectedCert.expiryDate || "Lifetime"}
                </p>
              </div>
              <div>
                <p className="text-neutral-500 text-[10px] uppercase font-medium">Platform Infrastructure</p>
                <p className="text-neutral-200 font-medium flex items-center gap-1 mt-0.5 truncate">
                  <Monitor className="h-3 w-3 text-neutral-400" /> {selectedCert.learningPlatform || "Coursera"}
                </p>
              </div>
              <div>
                <p className="text-neutral-500 text-[10px] uppercase font-medium">Localization Format</p>
                <p className="text-neutral-200 font-medium flex items-center gap-1 mt-0.5">
                  <MapPin className="h-3 w-3 text-neutral-400" /> {selectedCert.location || "Online"}
                </p>
              </div>
            </div>
            
            <div className="pt-2 text-xs">
              <p className="text-neutral-500 text-[10px] uppercase font-medium">Internal Registry Hex ID</p>
              <p className="text-neutral-300 font-mono mt-0.5 truncate">{selectedCert.credentialId || "N/A-VERIFIED-NODE"}</p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-[10px] uppercase font-bold tracking-wider text-neutral-500">Functional Description</h3>
            <p className="text-xs font-light text-neutral-400 leading-relaxed">
              {selectedCert.description}
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-[10px] uppercase font-bold tracking-wider text-neutral-500">MAPPED TOOLCHAIN COMPETENCIES</h3>
            <div className="flex flex-wrap gap-1">
              {selectedCert.skills?.map((skill: string) => (
                <span key={skill} className="text-xs bg-cyan-500/5 text-cyan-400 border border-cyan-500/10 rounded-md px-2.5 py-1 font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {selectedCert.credentialUrl && (
          <div className="mt-8 pt-4 border-t border-white/[0.06]">
            <a 
              href={selectedCert.credentialUrl} 
              target="_blank" 
              rel="noreferrer"
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-xs font-semibold tracking-wide text-white flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all"
            >
              Query Remote Verification Authority <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        )}
      </motion.div>
    </div>
  );
}

