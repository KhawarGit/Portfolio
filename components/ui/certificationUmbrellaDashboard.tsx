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



"use client";

import { useMemo, useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import * as d3 from "d3";
import { Award, Layers, ShieldCheck, Cpu, ChevronDown } from "lucide-react";
import { certificationCategories } from "@/data/certifications";

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

export default function CertificationUmbrellaDashboard() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // --- 3D TILT PARALLAX LOGIC ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
    x.set(0);
    y.set(0);
  };

  const analytics = useMemo(() => {
    const total = certificationCategories.reduce((acc, c) => acc + c.items.length, 0);
    const skills = certificationCategories.flatMap((c) => c.items.flatMap((i) => i.skills || []));
    const skillCount = new Set(skills).size;
    const issuers = new Set(certificationCategories.flatMap((c) => c.items.map((i) => i.issuer))).size;

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

    return { total, skillCount, issuers, categoryData };
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

  return (
    <div style={{ perspective: "1200px" }} className="w-full mb-24">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
        {/* Subtle 3D dynamic glare sheen */}
        <div 
          className="pointer-events-none absolute inset-0 z-50 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
          style={{ transform: "translateZ(10px)" }}
        />

        {/* High-Fidelity Ambience Spill Overlays */}
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

        {/* Base content grid */}
        <div className="relative z-10 grid gap-10 lg:grid-cols-12 items-center" style={{ transform: "translateZ(25px)" }}>
          
          {/* LEFT COMPONENT: KPI MATRIX */}
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
                <p className="mt-2 text-3xl font-bold text-white tracking-tight">{analytics.total}</p>
              </div>

              <div className="group rounded-2xl border border-white/[0.04] bg-gradient-to-b from-neutral-950/60 to-neutral-950/20 p-4 shadow-inner hover:border-cyan-500/20 transition-colors duration-300">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Layers className="h-4 w-4" />
                  <span className="text-[11px] font-medium tracking-wide uppercase text-neutral-500 group-hover:text-cyan-500/70 transition-colors">Skills</span>
                </div>
                <p className="mt-2 text-3xl font-bold text-cyan-400 tracking-tight drop-shadow-[0_0_12px_rgba(34,211,238,0.2)]">{analytics.skillCount}</p>
              </div>
            </div>

            {/* INTERACTIVE INSIGHT SHELF */}
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
                        Coverage: {Math.round((activeCategory.value / analytics.total) * 100)}%
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
                            width: `${(c.value / analytics.total) * 100}%`,
                            backgroundColor: c.theme.color 
                          }}
                        />
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-neutral-500">
                      {analytics.categoryData.map((c) => (
                        <span key={c.id} className="flex items-center gap-1 font-medium">
                          <span className="h-1.5 w-1.5 rounded-full transition-transform group-hover:scale-125" style={{ backgroundColor: c.theme.color }} />
                          {c.name} ({Math.round((c.value / analytics.total) * 100)}%)
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CENTER COMPONENT: D3 ORBITAL DOME */}
          <div className="flex flex-col items-center justify-center lg:col-span-4 relative py-4" style={{ transform: "translateZ(35px)" }}>
            <div className="relative flex items-center justify-center h-[230px] w-[230px]">
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className="h-[190px] w-[190px] rounded-full blur-3xl opacity-35 transition-all duration-500"
                  style={{ background: activeCategory?.theme.color || "rgba(56,189,248,0.2)" }}
                />
              </div>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
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
                      {activeCategory ? `${activeCategory.value} Layers` : `${analytics.total} Active`}
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
                  {arcs.map((d) => {
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

          {/* RIGHT COMPONENT: FOCUS EXPANSION RACK */}
          <div className="space-y-3.5 lg:col-span-4 w-full relative z-20">
            <p className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 border-b border-white/[0.04] pb-2 flex justify-between items-center">
              <span>Target Focus Tracks</span>
              <span className="font-mono font-normal normal-case text-neutral-600 text-[9px]">Select to inspect</span>
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
                        <CardIcon />
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

        {/* FOOTER SHELF MATRIX */}
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

        {/* DYNAMIC SCROLL INDICATOR OVERLAY */}
        <div 
          className="absolute bottom-3 left-0 right-0 flex justify-center pointer-events-none z-30" 
          style={{ transform: "translateZ(40px)" }}
        >
          <motion.div 
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/[0.04] bg-neutral-950/60 backdrop-blur-md shadow-lg"
          >
            <span className="text-[9px] font-semibold tracking-widest text-neutral-400 uppercase">
              Scroll for Ledger Breakdown
            </span>
            <ChevronDown className="h-3 w-3 text-cyan-400 animate-pulse" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}