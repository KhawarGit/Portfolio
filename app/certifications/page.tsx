
// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import {
//   certificationCategories,
//   type Certification,
// } from "@/data/certifications";

// export default function CertificationsPage() {
//   return (
//     <section className="min-h-screen bg-neutral-950 py-24 text-white">
//       <div className="container-width">

//         {/* HEADER */}
//         <div className="mb-24 text-center">
//           <h1 className="text-5xl font-bold">
//             Certifications
//           </h1>

//           <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
//             A curated collection of certifications showcasing continuous learning across cloud, frontend, and modern engineering.
//           </p>
//         </div>

//         {/* CATEGORIES */}
//         <div className="space-y-28">

//           {certificationCategories.map((category, categoryIndex) => {
//             const featured = category.items.find((i) => i.featured);
//             const rest = category.items.filter((i) => !i.featured);

//             const Icon = category.logo;

//             return (
//               <motion.section
//                 key={category.id}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.6,
//                   delay: categoryIndex * 0.08,
//                 }}
//                 className="relative"
//               >

//                 {/* CATEGORY FULL-WIDTH GLASS CONTAINER */}
//                 <div className="
//                   relative
//                   w-full
//                   rounded-3xl
//                   border border-white/10
//                   bg-white/[0.03]
//                   backdrop-blur-2xl
//                   p-8 md:p-10
//                   overflow-hidden
//                 ">

//                   {/* SOFT GLOW BACKGROUND */}
//                   <div className="
//                     pointer-events-none
//                     absolute inset-0
//                     bg-gradient-to-br
//                     from-violet-500/10
//                     via-cyan-500/5
//                     to-blue-500/10
//                     opacity-70
//                   " />

//                   {/* CATEGORY HEADER (LOGO ORB STYLE) */}
//                   <div className="relative mb-10 flex items-center gap-5">

// <motion.div
//   className="relative group"
//   style={{
//     perspective: 1200,
//     transformStyle: "preserve-3d",
//   }}
//   initial={{
//     rotateX: 18,
//     rotateY: -18,
//     scale: 0.96,
//   }}
//   animate={{
//     rotateX: [18, 28, 18],
//     rotateY: [-18, -8, -18],
//     y: [0, -6, 0],
//     scale: [0.96, 1, 0.96],
//   }}
//   transition={{
//     duration: 5,
//     repeat: Infinity,
//     ease: "easeInOut",
//   }}
//   whileHover={{
//     y: -10,
//     rotateX: 0,
//     rotateY: 0,
//     scale: 1.15,
//     transition: {
//       type: "spring",
//       stiffness: 220,
//       damping: 16,
//     },
//   }}
// >
//   {/* Ambient Glow */}
//   <span
//     className="
//       absolute
//       inset-0
//       rounded-2xl
//       bg-gradient-to-r
//       from-violet-500
//       via-cyan-400
//       to-blue-500
//       opacity-40
//       blur-2xl
//       scale-150
//       transition-all
//       duration-500
//       group-hover:opacity-80
//       group-hover:scale-[1.8]
//     "
//   />

//   {/* Shine Sweep */}
//   <span
//     className="
//       absolute
//       inset-0
//       overflow-hidden
//       rounded-2xl
//     "
//   >
//     <span
//       className="
//         absolute
//         -left-1/2
//         top-0
//         h-full
//         w-1/2
//         rotate-12
//         bg-gradient-to-r
//         from-transparent
//         via-white/20
//         to-transparent
//         transition-transform
//         duration-1000
//         group-hover:translate-x-[220%]
//       "
//     />
//   </span>

//   {/* Glass Badge */}
//   <motion.div
//     whileHover={{
//       rotate: 6,
//     }}
//     className="
//       relative
//       flex
//       h-16
//       w-16
//       items-center
//       justify-center
//       rounded-2xl
//       border
//       border-cyan-400/30
//       bg-white/10
//       backdrop-blur-2xl
//       shadow-[
//   0_10px_35px_rgba(0,0,0,.35),
//   0_0_18px_rgba(34,211,238,.18)
// ]
//       transition-all
//       duration-500
//       group-hover:border-cyan-400/60
//       group-hover:shadow-[0_0_35px_rgba(34,211,238,.35)]
//     "
//   >
//     {/* Glass Reflection */}
// {/* Ambient Gradient Border Glow */}
// <div
//   className="
//     absolute
//     -inset-[3px]
//     rounded-[22px]
//     bg-[conic-gradient(from_180deg_at_50%_50%,#3b82f6,#8b5cf6,#06b6d4,#3b82f6)]
//     opacity-70
//     blur-md
//     animate-[spin_8s_linear_infinite]
//     transition-all
//     duration-500
//     group-hover:opacity-100
//     group-hover:blur-lg
//   "
// />


//     <motion.div
//       whileHover={{
//         scale: 1.2,
//         rotate: -8,
//       }}
//       transition={{
//         type: "spring",
//         stiffness: 250,
//       }}
//     >
//       <div
//   className="
//     absolute
//     inset-[-2px]
//     rounded-[20px]
//     bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,.35),transparent)]
//     opacity-50
//     blur-[1px]
//     animate-[spin_12s_linear_infinite]
//   "
// />
//       <Icon className="text-[30px] text-white transition-colors duration-300 group-hover:text-cyan-300" />
//     </motion.div>
//   </motion.div>
// </motion.div>

//                     <div>
//                       <h2 className="text-2xl font-semibold">
//                         {category.title}
//                       </h2>

//                       {category.description && (
//                         <p className="mt-1 text-sm text-neutral-400">
//                           {category.description}
//                         </p>
//                       )}
//                     </div>
//                   </div>

//                   {/* FEATURED CERT */}
//                   {featured && (
//                     <div className="
//                       mb-12
//                       grid lg:grid-cols-2
//                       overflow-hidden
//                       rounded-2xl
//                       border border-white/10
//                       bg-white/5
//                     ">

//                       {/* IMAGE */}
//                       <div className="relative h-72 lg:h-full">
//                         <Image
//                           src={featured.image}
//                           alt={featured.title}
//                           fill
//                           className="object-cover"
//                         />
//                       </div>

//                       {/* CONTENT */}
//                       <div className="p-8 flex flex-col justify-center">

//                         <span className="
//                           mb-4 w-fit
//                           rounded-full
//                           border border-violet-500/30
//                           bg-violet-500/10
//                           px-3 py-1
//                           text-xs text-violet-300
//                         ">
//                           Featured
//                         </span>

//                         <h3 className="text-2xl font-semibold">
//                           {featured.title}
//                         </h3>

//                         <p className="mt-1 text-neutral-400">
//                           {featured.issuer}
//                         </p>

//                         <p className="mt-5 text-sm text-neutral-500 leading-7">
//                           {featured.description}
//                         </p>

//                         {/* SKILLS */}
//                         {featured.skills && (
//                           <div className="mt-6 flex flex-wrap gap-2">
//                             {featured.skills.map((skill) => (
//                               <span
//                                 key={skill}
//                                 className="
//                                   rounded-full
//                                   border border-white/10
//                                   px-3 py-1
//                                   text-xs text-neutral-300
//                                 "
//                               >
//                                 {skill}
//                               </span>
//                             ))}
//                           </div>
//                         )}

//                         <p className="mt-6 text-sm text-cyan-400">
//                           Issued {featured.issueDate}
//                         </p>

//                         {/* CREDENTIAL LINK PLACEHOLDER */}
//                         <div className="mt-6 text-xs text-neutral-500">
//                           Credential: (add link if available)
//                         </div>
//                       </div>
//                     </div>
//                   )}

//                   {/* GRID CERTS */}
//                   <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

//                     {rest.map((certificate: Certification, index) => (
//                       <motion.div
//                         key={certificate.id}
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{
//                           delay: index * 0.08,
//                         }}
//                         whileHover={{ y: -8 }}
//                         className="
//                           group
//                           rounded-2xl
//                           border border-white/10
//                           bg-white/[0.03]
//                           backdrop-blur-xl
//                           overflow-hidden
//                         "
//                       >

//                         {/* IMAGE */}
//                         <div className="relative h-52 overflow-hidden">
//                           <Image
//                             src={certificate.image}
//                             alt={certificate.title}
//                             fill
//                             className="object-cover transition duration-500 group-hover:scale-105"
//                           />
//                         </div>

//                         {/* CONTENT */}
//                         <div className="p-5">

//                           <h3 className="font-semibold">
//                             {certificate.title}
//                           </h3>

//                           <p className="mt-1 text-sm text-neutral-400">
//                             {certificate.issuer}
//                           </p>

//                           <p className="mt-3 text-sm text-neutral-500">
//                             {certificate.description}
//                           </p>

//                           {/* SKILLS */}
//                           {certificate.skills && (
//                             <div className="mt-4 flex flex-wrap gap-2">
//                               {certificate.skills.map((skill) => (
//                                 <span
//                                   key={skill}
//                                   className="
//                                     rounded-full
//                                     border border-white/10
//                                     px-2 py-1
//                                     text-[11px]
//                                     text-neutral-300
//                                   "
//                                 >
//                                   {skill}
//                                 </span>
//                               ))}
//                             </div>
//                           )}

//                           <div className="mt-5 flex justify-between text-xs text-neutral-500">
//                             <span>{certificate.issueDate}</span>
//                             <span className="text-cyan-400">View →</span>
//                           </div>

//                           {/* credential placeholder */}
//                           <div className="mt-3 text-[11px] text-neutral-600">
//                             Credential: add later
//                           </div>

//                         </div>
//                       </motion.div>
//                     ))}

//                   </div>
//                 </div>
//               </motion.section>
//             );
//           })}

//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import {
//   certificationCategories,
//   type Certification,
// } from "@/data/certifications";

// export default function CertificationsPage() {
//   return (
//     <section className="min-h-screen bg-neutral-950 py-24 text-white">
//       <div className="container-width">

//         {/* HEADER */}
//         <div className="mb-24 text-center">
//           <h1 className="text-5xl font-bold">
//             Certifications
//           </h1>

//           <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
//             A curated collection of certifications showcasing continuous learning across cloud, frontend, and modern engineering.
//           </p>
//         </div>

//         {/* CATEGORIES */}
//         <div className="space-y-28">

//           {certificationCategories.map((category, categoryIndex) => {
//             const featured = category.items.find((i) => i.featured);
//             const rest = category.items.filter((i) => !i.featured);

//             const Icon = category.logo;

//             return (
//               <motion.section
//                 key={category.id}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.6,
//                   delay: categoryIndex * 0.08,
//                 }}
//                 className="relative"
//               >

//                 {/* CATEGORY FULL-WIDTH GLASS CONTAINER */}
//                 <div className="
//                   relative
//                   w-full
//                   rounded-3xl
//                   border border-white/10
//                   bg-white/[0.03]
//                   backdrop-blur-2xl
//                   p-8 md:p-10
//                   overflow-hidden
//                 ">

//                   {/* SOFT GLOW BACKGROUND */}
//                   <div className="
//                     pointer-events-none
//                     absolute inset-0
//                     bg-gradient-to-br
//                     from-violet-500/10
//                     via-cyan-500/5
//                     to-blue-500/10
//                     opacity-70
//                   " />

//                   {/* CATEGORY HEADER (LOGO ORB STYLE) */}
//                   <div className="relative mb-10 flex items-center gap-5">

//                     <motion.div
//                       className="relative group"
//                       style={{
//                         perspective: 1800,
//                         transformStyle: "preserve-3d",
//                       }}
//                       initial={{
//                         rotateX: 18,
//                         rotateY: -18,
//                         rotateZ: 0,
//                         scale: 0.98,
//                       }}
//                       animate={{
//                         y: [0, -8, 0],
//                         rotateX: [18, 26, 18],
//                         rotateY: [-18, -8, -18],
//                         rotateZ: [0, 2, 0],
//                         scale: [0.98, 1.03, 0.98],
//                       }}
//                       transition={{
//                         duration: 7,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                       }}
//                       whileHover={{
//                         y: -14,
//                         scale: 1.18,
//                         rotateX: -8,
//                         rotateY: 8,
//                         rotateZ: 3,
//                         transition: {
//                           type: "spring",
//                           stiffness: 280,
//                           damping: 14,
//                           mass: 0.7,
//                         },
//                       }}
//                     >
//                       {/* Stronger Aura Aura */}
//                       <div
//                         className="
//                           absolute
//                           -inset-4
//                           rounded-[28px]
//                           bg-gradient-to-r
//                           from-cyan-400
//                           via-violet-500
//                           to-blue-500
//                           opacity-50
//                           blur-2xl
//                           scale-110
//                           transition-all
//                           duration-500
//                           group-hover:opacity-100
//                           group-hover:blur-[40px]
//                           group-hover:scale-150
//                         "
//                       />

//                       {/* Ambient Gradient Border Glow (Rotating Rim) */}
//                       <div
//                         className="
//                           absolute
//                           -inset-[2px]
//                           rounded-[20px]
//                           bg-[conic-gradient(from_0deg,#06b6d4,#8b5cf6,#3b82f6,#06b6d4)]
//                           animate-[spin_10s_linear_infinite]
//                           blur-[1.5px]
//                           opacity-80
//                           transition-all
//                           duration-500
//                           group-hover:opacity-100
//                           group-hover:blur-md
//                         "
//                       />

//                       {/* Layer 1: Shadow Plate for depth */}
//                       <div
//                         className="
//                           absolute
//                           inset-0
//                           translate-y-3
//                           scale-95
//                           rounded-2xl
//                           bg-black/40
//                           blur-xl
//                           transition-transform
//                           duration-500
//                           group-hover:translate-y-5
//                         "
//                       />

//                       {/* Shine Sweep (Hover Controlled) */}
//                       <span
//                         className="
//                           absolute
//                           inset-0
//                           overflow-hidden
//                           rounded-2xl
//                           z-10
//                         "
//                       >
//                         <span
//                           className="
//                             absolute
//                             -left-1/2
//                             top-0
//                             h-full
//                             w-1/2
//                             rotate-12
//                             bg-gradient-to-r
//                             from-transparent
//                             via-white/20
//                             to-transparent
//                             transition-transform
//                             duration-1000
//                             group-hover:translate-x-[220%]
//                           "
//                         />
//                       </span>

//                       {/* Moving Specular Highlight (Continuous Loop) */}
//                       <span className="absolute inset-0 overflow-hidden rounded-2xl z-10 pointer-events-none">
//                         <motion.div
//                           animate={{
//                             x: ["-140%", "160%"]
//                           }}
//                           transition={{
//                             duration: 5,
//                             repeat: Infinity,
//                             ease: "linear"
//                           }}
//                           className="
//                             absolute
//                             top-0
//                             h-full
//                             w-6
//                             rotate-12
//                             bg-gradient-to-r
//                             from-transparent
//                             via-white/20
//                             to-transparent
//                             blur-md
//                           "
//                         />
//                       </span>

//                       {/* Layer 2: Main Glass Badge */}
//                       <motion.div
//                         whileHover={{
//                           rotate: 6,
//                         }}
//                         className="
//                           relative
//                           flex
//                           h-16
//                           w-16
//                           items-center
//                           justify-center
//                           rounded-2xl
//                           border
//                           border-cyan-400/30
//                           bg-white/10
//                           backdrop-blur-2xl
//                           shadow-[0_10px_35px_rgba(0,0,0,.35),0_0_18px_rgba(34,211,238,.18)]
//                           transition-all
//                           duration-500
//                           group-hover:border-cyan-400/60
//                           group-hover:shadow-[0_0_25px_rgba(34,211,238,.45),0_0_55px_rgba(59,130,246,.35),0_20px_45px_rgba(0,0,0,.45)]
//                         "
//                       >
//                         {/* Layer 3: Top Reflection Highlight */}
//                         <div
//                           className="
//                             absolute
//                             inset-[1px]
//                             rounded-2xl
//                             bg-gradient-to-br
//                             from-white/30
//                             via-white/5
//                             to-transparent
//                             pointer-events-none
//                           "
//                         />

//                         {/* Layer 4: Bottom Light Strip */}
//                         <div
//                           className="
//                             absolute
//                             bottom-0
//                             left-3
//                             right-3
//                             h-px
//                             bg-gradient-to-r
//                             from-transparent
//                             via-cyan-300/70
//                             to-transparent
//                             pointer-events-none
//                           "
//                         />

//                         {/* Floating Icon Base */}
//                         <motion.div
//                           animate={{
//                             y: [0, -2, 0],
//                             rotate: [0, -5, 5, 0],
//                             scale: [1, 1.08, 1]
//                           }}
//                           transition={{
//                             duration: 3,
//                             repeat: Infinity,
//                             ease: "easeInOut"
//                           }}
//                           whileHover={{
//                             scale: 1.2,
//                             rotate: -8,
//                           }}

//                           className="z-20 flex items-center justify-center"
//                         >
//                           <Icon className="text-[30px] text-white transition-colors duration-300 group-hover:text-cyan-300" />
//                         </motion.div>
//                       </motion.div>
//                     </motion.div>

//                     <div>
//                       <h2 className="text-2xl font-semibold">
//                         {category.title}
//                       </h2>

//                       {category.description && (
//                         <p className="mt-1 text-sm text-neutral-400">
//                           {category.description}
//                         </p>
//                       )}
//                     </div>
//                   </div>

//                   {/* FEATURED CERT */}
//                   {featured && (
//                     <div className="
//                       mb-12
//                       grid lg:grid-cols-2
//                       overflow-hidden
//                       rounded-2xl
//                       border border-white/10
//                       bg-white/5
//                     ">

//                       {/* IMAGE */}
//                       <div className="relative h-72 lg:h-full">
//                         <Image
//                           src={featured.image}
//                           alt={featured.title}
//                           fill
//                           className="object-cover"
//                         />
//                       </div>

//                       {/* CONTENT */}
//                       <div className="p-8 flex flex-col justify-center">

//                         <span className="
//                           mb-4 w-fit
//                           rounded-full
//                           border border-violet-500/30
//                           bg-violet-500/10
//                           px-3 py-1
//                           text-xs text-violet-300
//                         ">
//                           Featured
//                         </span>

//                         <h3 className="text-2xl font-semibold">
//                           {featured.title}
//                         </h3>

//                         <p className="mt-1 text-neutral-400">
//                           {featured.issuer}
//                         </p>

//                         <p className="mt-5 text-sm text-neutral-500 leading-7">
//                           {featured.description}
//                         </p>

//                         {/* SKILLS */}
//                         {featured.skills && (
//                           <div className="mt-6 flex flex-wrap gap-2">
//                             {featured.skills.map((skill) => (
//                               <span
//                                 key={skill}
//                                 className="
//                                   rounded-full
//                                   border border-white/10
//                                   px-3 py-1
//                                   text-xs text-neutral-300
//                                 "
//                               >
//                                 {skill}
//                               </span>
//                             ))}
//                           </div>
//                         )}

//                         <p className="mt-6 text-sm text-cyan-400">
//                           Issued {featured.issueDate}
//                         </p>

//                         {/* CREDENTIAL LINK PLACEHOLDER */}
//                         <div className="mt-6 text-xs text-neutral-500">
//                           Credential: (add link if available)
//                         </div>
//                       </div>
//                     </div>
//                   )}

//                   {/* GRID CERTS */}
//                   <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

//                     {rest.map((certificate: Certification, index) => (
//                       <motion.div
//                         key={certificate.id}
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{
//                           delay: index * 0.08,
//                         }}
//                         whileHover={{ y: -8 }}
//                         className="
//                           group
//                           rounded-2xl
//                           border border-white/10
//                           bg-white/[0.03]
//                           backdrop-blur-xl
//                           overflow-hidden
//                         "
//                       >

//                         {/* IMAGE */}
//                         <div className="relative h-52 overflow-hidden">
//                           <Image
//                             src={certificate.image}
//                             alt={certificate.title}
//                             fill
//                             className="object-cover transition duration-500 group-hover:scale-105"
//                           />
//                         </div>

//                         {/* CONTENT */}
//                         <div className="p-5">

//                           <h3 className="font-semibold">
//                             {certificate.title}
//                           </h3>

//                           <p className="mt-1 text-sm text-neutral-400">
//                             {certificate.issuer}
//                           </p>

//                           <p className="mt-3 text-sm text-neutral-500">
//                             {certificate.description}
//                           </p>

//                           {/* SKILLS */}
//                           {certificate.skills && (
//                             <div className="mt-4 flex flex-wrap gap-2">
//                               {certificate.skills.map((skill) => (
//                                 <span
//                                   key={skill}
//                                   className="
//                                     rounded-full
//                                     border border-white/10
//                                     px-2 py-1
//                                     text-[11px]
//                                     text-neutral-300
//                                   "
//                                 >
//                                   {skill}
//                                 </span>
//                               ))}
//                             </div>
//                           )}

//                           <div className="mt-5 flex justify-between text-xs text-neutral-500">
//                             <span>{certificate.issueDate}</span>
//                             <span className="text-cyan-400">View →</span>
//                           </div>

//                           {/* credential placeholder */}
//                           <div className="mt-3 text-[11px] text-neutral-600">
//                             Credential: add later
//                           </div>

//                         </div>
//                       </motion.div>
//                     ))}

//                   </div>
//                 </div>
//               </motion.section>
//             );
//           })}

//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import {
//   certificationCategories,
//   type Certification,
// } from "@/data/certifications";

// const logoThemes = [
//   {
//     glow: "from-cyan-400 via-blue-500 to-indigo-500",
//     border: "from-cyan-400 via-blue-500 to-indigo-500",
//     text: "group-hover:text-cyan-300",
//     shadow: "rgba(34,211,238,.45)",
//   },
//   {
//     glow: "from-violet-500 via-fuchsia-500 to-pink-500",
//     border: "from-violet-500 via-fuchsia-500 to-pink-500",
//     text: "group-hover:text-violet-300",
//     shadow: "rgba(168,85,247,.45)",
//   },
//   {
//     glow: "from-emerald-400 via-teal-500 to-cyan-500",
//     border: "from-emerald-400 via-teal-500 to-cyan-500",
//     text: "group-hover:text-emerald-300",
//     shadow: "rgba(16,185,129,.45)",
//   },
//   {
//     glow: "from-orange-400 via-amber-500 to-yellow-400",
//     border: "from-orange-400 via-red-500 to-yellow-400",
//     text: "group-hover:text-orange-300",
//     shadow: "rgba(249,115,22,.45)",
//   },
//   {
//     glow: "from-pink-500 via-rose-500 to-red-500",
//     border: "from-pink-500 via-rose-500 to-red-500",
//     text: "group-hover:text-pink-300",
//     shadow: "rgba(236,72,153,.45)",
//   },
//   {
//     glow: "from-sky-400 via-cyan-400 to-teal-500",
//     border: "from-sky-400 via-cyan-400 to-teal-500",
//     text: "group-hover:text-sky-300",
//     shadow: "rgba(56,189,248,.45)",
//   },
// ];

// export default function CertificationsPage() {
//   return (
//     <section className="min-h-screen bg-neutral-950 py-24 text-white">
//       <div className="container-width">

//         {/* HEADER */}
//         <div className="mb-24 text-center">
//           <h1 className="text-5xl font-bold">
//             Certifications
//           </h1>

//           <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
//             A curated collection of certifications showcasing continuous learning across cloud, frontend, and modern engineering.
//           </p>
//         </div>

//         {/* CATEGORIES */}
//         <div className="space-y-28">

//           {certificationCategories.map((category, categoryIndex) => {
//             const featured = category.items.find((i) => i.featured);
//             const rest = category.items.filter((i) => !i.featured);

//             const Icon = category.logo;

//             // Deterministic selection based on category ID string hash
//             const theme =
//               logoThemes[
//                 Math.abs(
//                   category.id.split("").reduce((a, c) => a + c.charCodeAt(0), 0)
//                 ) % logoThemes.length
//               ];

//             return (
//               <motion.section
//                 key={category.id}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.6,
//                   delay: categoryIndex * 0.08,
//                 }}
//                 className="relative"
//               >

//                 {/* CATEGORY FULL-WIDTH GLASS CONTAINER */}
//                 <div className="
//                   relative
//                   w-full
//                   rounded-3xl
//                   border border-white/10
//                   bg-white/[0.03]
//                   backdrop-blur-2xl
//                   p-8 md:p-10
//                   overflow-hidden
//                 ">

//                   {/* SOFT GLOW BACKGROUND */}
//                   <div className="
//                     pointer-events-none
//                     absolute inset-0
//                     bg-gradient-to-br
//                     from-violet-500/10
//                     via-cyan-500/5
//                     to-blue-500/10
//                     opacity-70
//                   " />

//                   {/* CATEGORY HEADER (LOGO ORB STYLE) */}
//                   <div className="relative mb-10 flex items-center gap-5">

//                     <motion.div
//                       className="relative group"
//                       style={{
//                         perspective: 1800,
//                         transformStyle: "preserve-3d",
//                       }}
//                       initial={{
//                         rotateX: 18,
//                         rotateY: -18,
//                         rotateZ: 0,
//                         scale: 0.98,
//                       }}
//                       animate={{
//                         y: [0, -8, 0],
//                         rotateX: [18, 26, 18],
//                         rotateY: [-18, -8, -18],
//                         rotateZ: [0, 2, 0],
//                         scale: [0.98, 1.03, 0.98],
//                       }}
//                       transition={{
//                         duration: 7,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                       }}
//                       whileHover={{
//                         y: -14,
//                         scale: 1.12,
//                         rotateX: -10,
//                         rotateY: 10,
//                         rotateZ: 4,
//                         transition: {
//                           type: "spring",
//                           stiffness: 280,
//                           damping: 14,
//                           mass: 0.7,
//                         },
//                       }}
//                     >
//                       {/* Stronger Aura Aura with Dynamic Theme Glow */}
//                       <div
//                         className={`
//                           absolute
//                           -inset-4
//                           rounded-[28px]
//                           bg-gradient-to-r
//                           ${theme.glow}
//                           opacity-50
//                           blur-2xl
//                           scale-110
//                           transition-all
//                           duration-500
//                           group-hover:opacity-100
//                           group-hover:blur-[45px]
//                           group-hover:scale-150
//                         `}
//                       />

//                       {/* Ambient Gradient Border Glow (Rotating Rim) with Dynamic Theme Border */}
//                       <div
//                         className={`
//                           absolute
//                           -inset-[2px]
//                           rounded-[20px]
//                           bg-gradient-to-r
//                           ${theme.border}
//                           animate-[spin_10s_linear_infinite]
//                           blur-[2px]
//                           opacity-80
//                           transition-all
//                           duration-500
//                           group-hover:opacity-100
//                           group-hover:blur-md
//                         `}
//                       />

//                       {/* Layer 1: Shadow Plate for depth */}
//                       <div
//                         className="
//                           absolute
//                           inset-0
//                           translate-y-3
//                           scale-95
//                           rounded-2xl
//                           bg-black/40
//                           blur-xl
//                           transition-transform
//                           duration-500
//                           group-hover:translate-y-5
//                         "
//                       />

//                       {/* Shine Sweep (Hover Controlled) */}
//                       <span
//                         className="
//                           absolute
//                           inset-0
//                           overflow-hidden
//                           rounded-2xl
//                           z-10
//                         "
//                       >
//                         <span
//                           className="
//                             absolute
//                             -left-1/2
//                             top-0
//                             h-full
//                             w-1/2
//                             rotate-12
//                             bg-gradient-to-r
//                             from-transparent
//                             via-white/20
//                             to-transparent
//                             transition-transform
//                             duration-1000
//                             group-hover:translate-x-[220%]
//                           "
//                         />
//                       </span>

//                       {/* Moving Specular Highlight (Continuous Loop) */}
//                       <span className="absolute inset-0 overflow-hidden rounded-2xl z-10 pointer-events-none">
//                         <motion.div
//                           animate={{
//                             x: ["-140%", "160%"]
//                           }}
//                           transition={{
//                             duration: 5,
//                             repeat: Infinity,
//                             ease: "linear"
//                           }}
//                           className="
//                             absolute
//                             top-0
//                             h-full
//                             w-6
//                             rotate-12
//                             bg-gradient-to-r
//                             from-transparent
//                             via-white/20
//                             to-transparent
//                             blur-md
//                           "
//                         />
//                       </span>

//                       {/* Layer 2: Main Glass Badge with Colored Shadow styling */}
//                       <motion.div
//                         style={{
//                           boxShadow: `
//                             0 10px 35px rgba(0,0,0,.35),
//                             0 0 22px ${theme.shadow}
//                           `,
//                         }}
//                         className="
//                           relative
//                           flex
//                           h-16
//                           w-16
//                           items-center
//                           justify-center
//                           rounded-2xl
//                           border
//                           border-cyan-400/30
//                           bg-white/10
//                           backdrop-blur-2xl
//                           transition-all
//                           duration-500
//                           group-hover:border-cyan-400/60
//                         "
//                         variants={{
//                           hover: {
//                             boxShadow: `
//                               0 0 35px ${theme.shadow},
//                               0 0 80px ${theme.shadow},
//                               0 20px 50px rgba(0,0,0,.45)
//                             `
//                           }
//                         }}
//                         whileHover={{
//                           rotate: 6,
//                           boxShadow: `0 0 35px ${theme.shadow}, 0 0 80px ${theme.shadow}, 0 20px 50px rgba(0,0,0,.45)`,
//                         }}
//                         // Using framer motion prop structure to tie custom styling overrides smoothly
//                       >
//                         {/* Layer 3: Top Reflection Highlight */}
//                         <div
//                           className="
//                             absolute
//                             inset-[1px]
//                             rounded-2xl
//                             bg-gradient-to-br
//                             from-white/30
//                             via-white/5
//                             to-transparent
//                             pointer-events-none
//                           "
//                         />

//                         {/* Layer 4: Bottom Light Strip */}
//                         <div
//                           className="
//                             absolute
//                             bottom-0
//                             left-3
//                             right-3
//                             h-px
//                             bg-gradient-to-r
//                             from-transparent
//                             via-cyan-300/70
//                             to-transparent
//                             pointer-events-none
//                           "
//                         />

//                         {/* Floating Icon Base: Pop Out Setup */}
//                         <motion.div
//                           animate={{
//                             y: [0, -2, 0],
//                             rotate: [0, -6, 6, 0],
//                             scale: [1, 1.08, 1],
//                             z: [0, 20, 0],
//                           }}
//                           whileHover={{
//                             scale: 1.45,
//                             rotate: -10,
//                             y: -3,
//                             z: 80,
//                             transition: {
//                               type: "spring",
//                               stiffness: 400,
//                               damping: 15,
//                             },
//                           }}
//                           transition={{
//                             duration: 3,
//                             repeat: Infinity,
//                             ease: "easeInOut",
//                           }}
//                           style={{
//                             transformStyle: "preserve-3d",
//                             transformOrigin: "center",
//                           }}
//                           className="z-20 flex items-center justify-center"
//                         >
//                           <Icon 
//                             className={`
//                               text-[30px] 
//                               text-white 
//                               transition-all 
//                               duration-500 
//                               ${theme.text}
//                               drop-shadow-[0_0_12px_rgba(255,255,255,.35)]
//                             `} 
//                           />
//                         </motion.div>
//                       </motion.div>
//                     </motion.div>

//                     <div>
//                       <h2 className="text-2xl font-semibold">
//                         {category.title}
//                       </h2>

//                       {category.description && (
//                         <p className="mt-1 text-sm text-neutral-400">
//                           {category.description}
//                         </p>
//                       )}
//                     </div>
//                   </div>

//                   {/* FEATURED CERT */}
//                   {featured && (
//                     <div className="
//                       mb-12
//                       grid lg:grid-cols-2
//                       overflow-hidden
//                       rounded-2xl
//                       border border-white/10
//                       bg-white/5
//                     ">

//                       {/* IMAGE */}
//                       <div className="relative h-72 lg:h-full">
//                         <Image
//                           src={featured.image}
//                           alt={featured.title}
//                           fill
//                           className="object-cover"
//                         />
//                       </div>

//                       {/* CONTENT */}
//                       <div className="p-8 flex flex-col justify-center">

//                         <span className="
//                           mb-4 w-fit
//                           rounded-full
//                           border border-violet-500/30
//                           bg-violet-500/10
//                           px-3 py-1
//                           text-xs text-violet-300
//                         ">
//                           Featured
//                         </span>

//                         <h3 className="text-2xl font-semibold">
//                           {featured.title}
//                         </h3>

//                         <p className="mt-1 text-neutral-400">
//                           {featured.issuer}
//                         </p>

//                         <p className="mt-5 text-sm text-neutral-500 leading-7">
//                           {featured.description}
//                         </p>

//                         {/* SKILLS */}
//                         {featured.skills && (
//                           <div className="mt-6 flex flex-wrap gap-2">
//                             {featured.skills.map((skill) => (
//                               <span
//                                 key={skill}
//                                 className="
//                                   rounded-full
//                                   border border-white/10
//                                   px-3 py-1
//                                   text-xs text-neutral-300
//                                 "
//                               >
//                                 {skill}
//                               </span>
//                             ))}
//                           </div>
//                         )}

//                         <p className="mt-6 text-sm text-cyan-400">
//                           Issued {featured.issueDate}
//                         </p>

//                         {/* CREDENTIAL LINK PLACEHOLDER */}
//                         <div className="mt-6 text-xs text-neutral-500">
//                           Credential: (add link if available)
//                         </div>
//                       </div>
//                     </div>
//                   )}

//                   {/* GRID CERTS */}
//                   <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

//                     {rest.map((certificate: Certification, index) => (
//                       <motion.div
//                         key={certificate.id}
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{
//                           delay: index * 0.08,
//                         }}
//                         whileHover={{ y: -8 }}
//                         className="
//                           group
//                           rounded-2xl
//                           border border-white/10
//                           bg-white/[0.03]
//                           backdrop-blur-xl
//                           overflow-hidden
//                         "
//                       >

//                         {/* IMAGE */}
//                         <div className="relative h-52 overflow-hidden">
//                           <Image
//                             src={certificate.image}
//                             alt={certificate.title}
//                             fill
//                             className="object-cover transition duration-500 group-hover:scale-105"
//                           />
//                         </div>

//                         {/* CONTENT */}
//                         <div className="p-5">

//                           <h3 className="font-semibold">
//                             {certificate.title}
//                           </h3>

//                           <p className="mt-1 text-sm text-neutral-400">
//                             {certificate.issuer}
//                           </p>

//                           <p className="mt-3 text-sm text-neutral-500">
//                             {certificate.description}
//                           </p>

//                           {/* SKILLS */}
//                           {certificate.skills && (
//                             <div className="mt-4 flex flex-wrap gap-2">
//                               {certificate.skills.map((skill) => (
//                                 <span
//                                   key={skill}
//                                   className="
//                                     rounded-full
//                                     border border-white/10
//                                     px-2 py-1
//                                     text-[11px]
//                                     text-neutral-300
//                                   "
//                                 >
//                                   {skill}
//                                 </span>
//                               ))}
//                             </div>
//                           )}

//                           <div className="mt-5 flex justify-between text-xs text-neutral-500">
//                             <span>{certificate.issueDate}</span>
//                             <span className="text-cyan-400">View →</span>
//                           </div>

//                           {/* credential placeholder */}
//                           <div className="mt-3 text-[11px] text-neutral-600">
//                             Credential: add later
//                           </div>

//                         </div>
//                       </motion.div>
//                     ))}

//                   </div>
//                 </div>
//               </motion.section>
//             );
//           })}

//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  certificationCategories,
  type Certification,
} from "@/data/certifications";

const logoThemes = [
  {
    aura: "from-cyan-400 via-blue-500 to-indigo-500",
    rim: "from-blue-400 via-cyan-400 to-violet-500",
    badge: "border-cyan-400/40",
    strip: "via-cyan-300/80",
    icon: "group-hover:text-cyan-300",
    shadow: "rgba(34,211,238,.45)",
  },
  {
    aura: "from-violet-500 via-fuchsia-500 to-pink-500",
    rim: "from-pink-400 via-violet-400 to-fuchsia-500",
    badge: "border-violet-400/40",
    strip: "via-violet-300/80",
    icon: "group-hover:text-violet-300",
    shadow: "rgba(168,85,247,.45)",
  },
  {
    aura: "from-emerald-400 via-teal-500 to-cyan-500",
    rim: "from-emerald-400 via-lime-400 to-cyan-500",
    badge: "border-emerald-400/40",
    strip: "via-emerald-300/80",
    icon: "group-hover:text-emerald-300",
    shadow: "rgba(16,185,129,.45)",
  },
  {
    aura: "from-orange-400 via-red-500 to-yellow-400",
    rim: "from-orange-400 via-amber-400 to-red-500",
    badge: "border-orange-400/40",
    strip: "via-orange-300/80",
    icon: "group-hover:text-orange-300",
    shadow: "rgba(249,115,22,.45)",
  },
  {
    aura: "from-pink-500 via-rose-500 to-red-500",
    rim: "from-pink-500 via-rose-400 to-red-500",
    badge: "border-pink-400/40",
    strip: "via-pink-300/80",
    icon: "group-hover:text-pink-300",
    shadow: "rgba(236,72,153,.45)",
  },
  {
    aura: "from-sky-400 via-cyan-400 to-teal-500",
    rim: "from-sky-400 via-cyan-400 to-teal-500",
    badge: "border-sky-400/40",
    strip: "via-sky-300/80",
    icon: "group-hover:text-sky-300",
    shadow: "rgba(56,189,248,.45)",
  },
];

export default function CertificationsPage() {
  return (
    <section className="min-h-screen bg-neutral-950 py-24 text-white">
      <div className="container-width">

        {/* HEADER */}
        <div className="mb-24 text-center">
          <h1 className="text-5xl font-bold">
            Certifications
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            A curated collection of certifications showcasing continuous learning across cloud, frontend, and modern engineering.
          </p>
        </div>

        {/* CATEGORIES */}
        <div className="space-y-28">

          {certificationCategories.map((category, categoryIndex) => {
            const featured = category.items.find((i) => i.featured);
            const rest = category.items.filter((i) => !i.featured);

            const Icon = category.logo;

            // Deterministic selection based on category ID string hash
            const theme =
              logoThemes[
                Math.abs(
                  category.id.split("").reduce((a, c) => a + c.charCodeAt(0), 0)
                ) % logoThemes.length
              ];

            return (
              <motion.section
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: categoryIndex * 0.08,
                }}
                className="relative"
              >

                {/* CATEGORY FULL-WIDTH GLASS CONTAINER */}
                <div className="
                  relative
                  w-full
                  rounded-3xl
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-2xl
                  p-8 md:p-10
                  overflow-hidden
                ">

                  {/* SOFT GLOW BACKGROUND */}
                  <div className="
                    pointer-events-none
                    absolute inset-0
                    bg-gradient-to-br
                    from-violet-500/10
                    via-cyan-500/5
                    to-blue-500/10
                    opacity-70
                  " />

                  {/* CATEGORY HEADER (LOGO ORB STYLE) */}
                  <div className="relative mb-10 flex items-center gap-5">

                    <motion.div
                      className="relative group/logo"
                      style={{
                        perspective: 1800,
                        transformStyle: "preserve-3d",
                      }}
                      initial={{
                        rotateX: 18,
                        rotateY: -18,
                        rotateZ: 0,
                        scale: 0.98,
                      }}
                      animate={{
                        y: [0, -8, 0],
                        rotateX: [18, 26, 18],
                        rotateY: [-18, -8, -18],
                        rotateZ: [0, 2, 0],
                        scale: [0.98, 1.03, 0.98],
                      }}
                      transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      whileHover={{
                        y: -14,
                        scale: 1.12,
                        rotateX: -10,
                        rotateY: 10,
                        rotateZ: 4,
                        transition: {
                          type: "spring",
                          stiffness: 280,
                          damping: 14,
                          mass: 0.7,
                        },
                      }}
                    >
                      {/* Stronger Aura Aura with Dynamic Theme Glow */}
                      <div
                        className={`
                          absolute
                          -inset-4
                          rounded-[28px]
                          bg-gradient-to-r
                          ${theme.aura}
                          opacity-50
                          blur-2xl
                          scale-110
                          transition-all
                          duration-500
                          group-hover/logo:opacity-100
                          group-hover/logo:blur-[45px]
                          group-hover/logo:scale-150
                        `}
                      />

                      {/* Ambient Gradient Border Glow (Rotating Rim) with Dynamic Theme Border */}
                      <div
                        className={`
                          absolute
                          -inset-[2px]
                          rounded-[20px]
                          bg-gradient-to-r
                          ${theme.rim}
                          animate-[spin_10s_linear_infinite]
                          blur-[2px]
                          opacity-80
                          transition-all
                          duration-500
                          group-hover/logo:opacity-100
                          group-hover/logo:blur-md
                        `}
                      />

                      {/* Layer 1: Shadow Plate for depth */}
                      <div
                        className="
                          absolute
                          inset-0
                          translate-y-3
                          scale-95
                          rounded-2xl
                          bg-black/40
                          blur-xl
                          transition-transform
                          duration-500
                          group-hover/logo:translate-y-5
                        "
                      />

                      {/* Shine Sweep (Hover Controlled) */}
                      <span
                        className="
                          absolute
                          inset-0
                          overflow-hidden
                          rounded-2xl
                          z-10
                        "
                      >
                        <span
                          className="
                            absolute
                            -left-1/2
                            top-0
                            h-full
                            w-1/2
                            rotate-12
                            bg-gradient-to-r
                            from-transparent
                            via-white/20
                            to-transparent
                            transition-transform
                            duration-1000
                            group-hover/logo:translate-x-[220%]
                          "
                        />
                      </span>

                      {/* Moving Specular Highlight (Continuous Loop) */}
                      <span className="absolute inset-0 overflow-hidden rounded-2xl z-10 pointer-events-none">
                        <motion.div
                          animate={{
                            x: ["-140%", "160%"]
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          className="
                            absolute
                            top-0
                            h-full
                            w-6
                            rotate-12
                            bg-gradient-to-r
                            from-transparent
                            via-white/20
                            to-transparent
                            blur-md
                          "
                        />
                      </span>

                      {/* Layer 2: Main Glass Badge with Colored Shadow styling */}
                      <motion.div
                        style={{
                          boxShadow: `
                            0 10px 35px rgba(0,0,0,.35),
                            0 0 22px ${theme.shadow}
                          `,
                        }}
                        className={`
                          relative
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-2xl
                          border
                          ${theme.badge}
                          bg-white/10
                          backdrop-blur-2xl
                          transition-all
                          duration-500
                        `}
                        whileHover={{
                          rotate: 6,
                          scale: 1.08,
                          boxShadow: `
                            0 0 35px ${theme.shadow},
                            0 0 80px ${theme.shadow},
                            0 25px 60px rgba(0,0,0,.45)
                          `,
                        }}
                      >
                        {/* Layer 3: Top Reflection Highlight */}
                        <div
                          className="
                            absolute
                            inset-[1px]
                            rounded-2xl
                            bg-gradient-to-br
                            from-white/30
                            via-white/5
                            to-transparent
                            pointer-events-none
                          "
                        />

                        {/* Layer 4: Bottom Light Strip */}
                        <div
                          className={`
                            absolute
                            bottom-0
                            left-3
                            right-3
                            h-px
                            bg-gradient-to-r
                            from-transparent
                            ${theme.strip}
                            to-transparent
                            pointer-events-none
                          `}
                        />

                        {/* Floating Icon Base: Pop Out Setup */}
                        <motion.div
 animate={{
    y: [0, -2, 0],
    rotate: [0, -6, 6, 0],
    scale: [1, 1.08, 1],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut",
  }}
  whileHover={{
    scale: 1.75,
    rotate: -12,
    y: -8,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 11,
    },
  }}
                          style={{
                            transformStyle: "preserve-3d",
                            transformOrigin: "center",
                          }}
                          className="z-20 flex items-center justify-center"
                        >
                          <Icon 
                            className={`
                              text-[30px] 
                              text-white 
                              transition-all 
                              duration-500 
                              ${theme.icon}
                            `} 
                            style={{
                              filter: `
                                drop-shadow(0 0 8px white)
                                drop-shadow(0 0 14px ${theme.shadow})
                                drop-shadow(0 0 24px ${theme.shadow})
                              `,
                            }}
                          />
                        </motion.div>
                      </motion.div>
                    </motion.div>

                    <div>
                      <h2 className="text-2xl font-semibold">
                        {category.title}
                      </h2>

                      {category.description && (
                        <p className="mt-1 text-sm text-neutral-400">
                          {category.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* FEATURED CERT */}
                  {featured && (
                    <div className="
                      mb-12
                      grid lg:grid-cols-2
                      overflow-hidden
                      rounded-2xl
                      border border-white/10
                      bg-white/5
                    ">

                      {/* IMAGE */}
                      <div className="relative h-72 lg:h-full">
                        <Image
                          src={featured.image}
                          alt={featured.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* CONTENT */}
                      <div className="p-8 flex flex-col justify-center">

                        <span className="
                          mb-4 w-fit
                          rounded-full
                          border border-violet-500/30
                          bg-violet-500/10
                          px-3 py-1
                          text-xs text-violet-300
                        ">
                          Featured
                        </span>

                        <h3 className="text-2xl font-semibold">
                          {featured.title}
                        </h3>

                        <p className="mt-1 text-neutral-400">
                          {featured.issuer}
                        </p>

                        <p className="mt-5 text-sm text-neutral-500 leading-7">
                          {featured.description}
                        </p>

                        {/* SKILLS */}
                        {featured.skills && (
                          <div className="mt-6 flex flex-wrap gap-2">
                            {featured.skills.map((skill) => (
                              <span
                                key={skill}
                                className="
                                  rounded-full
                                  border border-white/10
                                  px-3 py-1
                                  text-xs text-neutral-300
                                "
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}

                        <p className="mt-6 text-sm text-cyan-400">
                          Issued {featured.issueDate}
                        </p>

                        {/* CREDENTIAL LINK PLACEHOLDER */}
                        <div className="mt-6 text-xs text-neutral-500">
                          Credential: (add link if available)
                        </div>
                      </div>
                    </div>
                  )}

                  {/* GRID CERTS */}
                  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                    {rest.map((certificate: Certification, index) => (
                      <motion.div
                        key={certificate.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.08,
                        }}
                        whileHover={{ y: -8 }}
                        className="
                          group
                          rounded-2xl
                          border border-white/10
                          bg-white/[0.03]
                          backdrop-blur-xl
                          overflow-hidden
                        "
                      >

                        {/* IMAGE */}
                        <div className="relative h-52 overflow-hidden">
                          <Image
                            src={certificate.image}
                            alt={certificate.title}
                            fill
                            className="object-cover transition duration-500 group-hover:scale-105"
                          />
                        </div>

                        {/* CONTENT */}
                        <div className="p-5">

                          <h3 className="font-semibold">
                            {certificate.title}
                          </h3>

                          <p className="mt-1 text-sm text-neutral-400">
                            {certificate.issuer}
                          </p>

                          <p className="mt-3 text-sm text-neutral-500">
                            {certificate.description}
                          </p>

                          {/* SKILLS */}
                          {certificate.skills && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {certificate.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="
                                    rounded-full
                                    border border-white/10
                                    px-2 py-1
                                    text-[11px]
                                    text-neutral-300
                                  "
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          )}

                          <div className="mt-5 flex justify-between text-xs text-neutral-500">
                            <span>{certificate.issueDate}</span>
                            <span className="text-cyan-400">View →</span>
                          </div>

                          {/* credential placeholder */}
                          <div className="mt-3 text-[11px] text-neutral-600">
                            Credential: add later
                          </div>

                        </div>
                      </motion.div>
                    ))}

                  </div>
                </div>
              </motion.section>
            );
          })}

        </div>
      </div>
    </section>
  );
}