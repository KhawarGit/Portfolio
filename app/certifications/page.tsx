
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



// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import {
//   certificationCategories,
//   type Certification,
// } from "@/data/certifications";

// const logoThemes = [
//   {
//     aura: "from-cyan-400 via-blue-500 to-indigo-500",
//     rim: "from-blue-400 via-cyan-400 to-violet-500",
//     badge: "border-cyan-400/40",
//     strip: "via-cyan-300/80",
//     icon: "group-hover:text-cyan-300",
//     shadow: "rgba(34,211,238,.45)",
//   },
//   {
//     aura: "from-violet-500 via-fuchsia-500 to-pink-500",
//     rim: "from-pink-400 via-violet-400 to-fuchsia-500",
//     badge: "border-violet-400/40",
//     strip: "via-violet-300/80",
//     icon: "group-hover:text-violet-300",
//     shadow: "rgba(168,85,247,.45)",
//   },
//   {
//     aura: "from-emerald-400 via-teal-500 to-cyan-500",
//     rim: "from-emerald-400 via-lime-400 to-cyan-500",
//     badge: "border-emerald-400/40",
//     strip: "via-emerald-300/80",
//     icon: "group-hover:text-emerald-300",
//     shadow: "rgba(16,185,129,.45)",
//   },
//   {
//     aura: "from-orange-400 via-red-500 to-yellow-400",
//     rim: "from-orange-400 via-amber-400 to-red-500",
//     badge: "border-orange-400/40",
//     strip: "via-orange-300/80",
//     icon: "group-hover:text-orange-300",
//     shadow: "rgba(249,115,22,.45)",
//   },
//   {
//     aura: "from-pink-500 via-rose-500 to-red-500",
//     rim: "from-pink-500 via-rose-400 to-red-500",
//     badge: "border-pink-400/40",
//     strip: "via-pink-300/80",
//     icon: "group-hover:text-pink-300",
//     shadow: "rgba(236,72,153,.45)",
//   },
//   {
//     aura: "from-sky-400 via-cyan-400 to-teal-500",
//     rim: "from-sky-400 via-cyan-400 to-teal-500",
//     badge: "border-sky-400/40",
//     strip: "via-sky-300/80",
//     icon: "group-hover:text-sky-300",
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
//                       className="relative group/logo"
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
//                           ${theme.aura}
//                           opacity-50
//                           blur-2xl
//                           scale-110
//                           transition-all
//                           duration-500
//                           group-hover/logo:opacity-100
//                           group-hover/logo:blur-[45px]
//                           group-hover/logo:scale-150
//                         `}
//                       />

//                       {/* Ambient Gradient Border Glow (Rotating Rim) with Dynamic Theme Border */}
//                       <div
//                         className={`
//                           absolute
//                           -inset-[2px]
//                           rounded-[20px]
//                           bg-gradient-to-r
//                           ${theme.rim}
//                           animate-[spin_10s_linear_infinite]
//                           blur-[2px]
//                           opacity-80
//                           transition-all
//                           duration-500
//                           group-hover/logo:opacity-100
//                           group-hover/logo:blur-md
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
//                           group-hover/logo:translate-y-5
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
//                             group-hover/logo:translate-x-[220%]
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
//                         className={`
//                           relative
//                           flex
//                           h-16
//                           w-16
//                           items-center
//                           justify-center
//                           rounded-2xl
//                           border
//                           ${theme.badge}
//                           bg-white/10
//                           backdrop-blur-2xl
//                           transition-all
//                           duration-500
//                         `}
//                         whileHover={{
//                           rotate: 6,
//                           scale: 1.08,
//                           boxShadow: `
//                             0 0 35px ${theme.shadow},
//                             0 0 80px ${theme.shadow},
//                             0 25px 60px rgba(0,0,0,.45)
//                           `,
//                         }}
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
//                           className={`
//                             absolute
//                             bottom-0
//                             left-3
//                             right-3
//                             h-px
//                             bg-gradient-to-r
//                             from-transparent
//                             ${theme.strip}
//                             to-transparent
//                             pointer-events-none
//                           `}
//                         />

//                         {/* Floating Icon Base: Pop Out Setup */}
//                         <motion.div
//  animate={{
//     y: [0, -2, 0],
//     rotate: [0, -6, 6, 0],
//     scale: [1, 1.08, 1],
//   }}
//   transition={{
//     duration: 3,
//     repeat: Infinity,
//     repeatType: "loop",
//     ease: "easeInOut",
//   }}
//   whileHover={{
//     scale: 1.75,
//     rotate: -12,
//     y: -8,
//     transition: {
//       type: "spring",
//       stiffness: 500,
//       damping: 11,
//     },
//   }}
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
//                               ${theme.icon}
//                             `} 
//                             style={{
//                               filter: `
//                                 drop-shadow(0 0 8px white)
//                                 drop-shadow(0 0 14px ${theme.shadow})
//                                 drop-shadow(0 0 24px ${theme.shadow})
//                               `,
//                             }}
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



// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import {
//   certificationCategories,
//   type Certification,
// } from "@/data/certifications";


// const logoThemes = [
//   {
//     aura: "from-cyan-400 via-blue-500 to-indigo-500",
//     rim: "from-blue-400 via-cyan-400 to-violet-500",
//     badge: "border-cyan-400/40",
//     strip: "via-cyan-300/80",
//     icon: "group-hover:text-cyan-300",
//     shadow: "rgba(34,211,238,.45)",
//   },
//   {
//     aura: "from-violet-500 via-fuchsia-500 to-pink-500",
//     rim: "from-pink-400 via-violet-400 to-fuchsia-500",
//     badge: "border-violet-400/40",
//     strip: "via-violet-300/80",
//     icon: "group-hover:text-violet-300",
//     shadow: "rgba(168,85,247,.45)",
//   },
//   {
//     aura: "from-emerald-400 via-teal-500 to-cyan-500",
//     rim: "from-emerald-400 via-lime-400 to-cyan-500",
//     badge: "border-emerald-400/40",
//     strip: "via-emerald-300/80",
//     icon: "group-hover:text-emerald-300",
//     shadow: "rgba(16,185,129,.45)",
//   },
//   {
//     aura: "from-orange-400 via-red-500 to-yellow-400",
//     rim: "from-orange-400 via-amber-400 to-red-500",
//     badge: "border-orange-400/40",
//     strip: "via-orange-300/80",
//     icon: "group-hover:text-orange-300",
//     shadow: "rgba(249,115,22,.45)",
//   },
//   {
//     aura: "from-pink-500 via-rose-500 to-red-500",
//     rim: "from-pink-500 via-rose-400 to-red-500",
//     badge: "border-pink-400/40",
//     strip: "via-pink-300/80",
//     icon: "group-hover:text-pink-300",
//     shadow: "rgba(236,72,153,.45)",
//   },
//   {
//     aura: "from-sky-400 via-cyan-400 to-teal-500",
//     rim: "from-sky-400 via-cyan-400 to-teal-500",
//     badge: "border-sky-400/40",
//     strip: "via-sky-300/80",
//     icon: "group-hover:text-sky-300",
//     shadow: "rgba(56,189,248,.45)",
//   },
// ];

// export default function CertificationsPage() {
//   return (
//     <section className="relative min-h-screen overflow-hidden bg-neutral-950 py-24 text-white">
//       {/* PREMIUM UPGRADE: Vercel/Apple Style Grid Floor Background */}
//       <div className="pointer-events-none fixed inset-0 opacity-[0.06]" aria-hidden="true">
//         <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:30px_30px]" />
//       </div>

//       {/* PREMIUM UPGRADE: Floating Ambient Luxury Blobs */}
//       <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" aria-hidden="true" />
//       <div className="pointer-events-none absolute top-1/2 right-1/4 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px]" aria-hidden="true" />

//       <div className="container-width relative z-10">

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

//                 {/* PREMIUM UPGRADE: Category Container with rich spatial depth gradients and deep shadows */}
//                 <div className="
//                   relative
//                   w-full
//                   rounded-3xl
//                   border border-white/10
//                   bg-gradient-to-b from-white/[0.04] to-white/[0.02]
//                   backdrop-blur-2xl
//                   p-8 md:p-10
//                   overflow-hidden
//                   shadow-[0_20px_80px_rgba(0,0,0,0.4)]
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
//                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.06),transparent_60%)]" />
//                   <div className="relative mb-10 flex items-center gap-5">
                    

//                     <motion.div
//                       className="relative group/logo"
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
//                         repeatType: "reverse",
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
//                       {/* Stronger Aura with Dynamic Theme Glow */}
//                       <div
//                         className={`
//                           absolute
//                           -inset-4
//                           rounded-[28px]
//                           bg-gradient-to-r
//                           ${theme.aura}
//                           opacity-50
//                           blur-2xl
//                           scale-110
//                           transition-all
//                           duration-500
//                           group-hover/logo:opacity-100
//                           group-hover/logo:blur-[45px]
//                           group-hover/logo:scale-150
//                         `}
//                       />

//                       {/* Ambient Gradient Border Glow (Rotating Rim) with Dynamic Theme Border */}
//                       <div
//                         className={`
//                           absolute
//                           -inset-[2px]
//                           rounded-[20px]
//                           bg-gradient-to-r
//                           ${theme.rim}
//                           animate-[spin_10s_linear_infinite]
//                           blur-[2px]
//                           opacity-80
//                           transition-all
//                           duration-500
//                           group-hover/logo:opacity-100
//                           group-hover/logo:blur-md
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
//                           group-hover/logo:translate-y-5
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
//                             group-hover/logo:translate-x-[220%]
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
//                         className={`
//                           relative
//                           flex
//                           h-16
//                           w-16
//                           items-center
//                           justify-center
//                           rounded-2xl
//                           border
//                           ${theme.badge}
//                           bg-white/10
//                           backdrop-blur-2xl
//                           transition-all
//                           duration-500
//                         `}
//                         whileHover={{
//                           rotate: 6,
//                           scale: 1.08,
//                           boxShadow: `
//                             0 0 35px ${theme.shadow},
//                             0 0 80px ${theme.shadow},
//                             0 25px 60px rgba(0,0,0,.45)
//                           `,
//                         }}
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
//                           className={`
//                             absolute
//                             bottom-0
//                             left-3
//                             right-3
//                             h-px
//                             bg-gradient-to-r
//                             from-transparent
//                             ${theme.strip}
//                             to-transparent
//                             pointer-events-none
//                           `}
//                         />

//                         {/* Floating Icon Base: Pop Out Setup */}
//                         <motion.div
//                           animate={{
//                             y: [0, -2, 0],
//                             rotate: [0, -6, 6, 0],
//                             scale: [1, 1.08, 1],
//                           }}
//                           transition={{
//                             duration: 3,
//                             repeat: Infinity,
//                             repeatType: "loop",
//                             ease: "easeInOut",
//                           }}
//                           whileHover={{
//                             scale: 1.75,
//                             rotate: -12,
//                             y: -8,
//                             transition: {
//                               type: "spring",
//                               stiffness: 500,
//                               damping: 11,
//                             },
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
//                               ${theme.icon}
//                             `} 
//                             style={{
//                               filter: `
//                                 drop-shadow(0 0 8px white)
//                                 drop-shadow(0 0 14px ${theme.shadow})
//                                 drop-shadow(0 0 24px ${theme.shadow})
//                               `,
//                             }}
//                           />
//                         </motion.div>
//                       </motion.div>
//                     </motion.div>

//                     <div>
//                       <h2 className="text-2xl font-semibold tracking-tight">
//                         {category.title}
//                       </h2>

//                       {/* PREMIUM UPGRADE: Integrated High-End Stats Badge */}
// <div className="relative mt-2 inline-flex items-center gap-2 rounded-full px-3 py-1 overflow-hidden group">

//   {/* glass base */}
//   <div className="absolute inset-0 rounded-full bg-white/[0.04] backdrop-blur-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]" />

//   {/* animated energy field */}
//   <div
//     className="absolute inset-0 opacity-30"
//     style={{
//       background: `radial-gradient(circle at 30% 30%, ${theme.shadow}, transparent 60%)`,
//       animation: "floatGlow 6s ease-in-out infinite",
//     }}
//   />

//   {/* moving highlight */}
//   <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

//   {/* DOT */}
//   <span className="relative flex h-2 w-2">
//     <span
//       className="absolute h-full w-full rounded-full blur-sm opacity-70 animate-pulse"
//       style={{ backgroundColor: theme.shadow }}
//     />
//     <span
//       className="relative h-2 w-2 rounded-full animate-[dotShift_6s_ease-in-out_infinite]"
//       style={{ backgroundColor: theme.shadow }}
//     />
//   </span>

//   {/* number */}
//   <span className="relative text-xs font-semibold text-white/90 tracking-wide">
//     {category.items.length}
//   </span>

//   {/* label */}
//   <span className="relative text-xs text-neutral-400">
//     certifications
//   </span>
// </div>

//                       {category.description && (
//                         <p className="mt-2 text-sm text-neutral-400">
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
//                       bg-gradient-to-b from-white/[0.06] to-white/[0.03]
//                       shadow-[0_15px_50px_rgba(0,0,0,0.3)]
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
                        
//                         whileHover={{
//                           y: -10,
//                           scale: 1.02,
//                           transition: { type: "spring", stiffness: 200, damping: 18 }
//                         }}
                        
//                         className="
//                           group
//                           relative
//                           rounded-2xl
//                           border border-white/10
//                           bg-gradient-to-b from-white/[0.04] to-white/[0.02]
//                           backdrop-blur-xl
//                           overflow-hidden
//                           shadow-[0_10px_40px_rgba(0,0,0,0.25)]
//                           transition-all duration-500
//                           hover:border-white/20
//                           hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]
//                         "
//                       >
//                         {/* PREMIUM UPGRADE: High-end Light Sweep implementation */}
//                         <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
//                           <span className="absolute -left-1/2 top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-0 group-hover:translate-x-[250%] transition-transform duration-1000 ease-in-out" />
//                         </span>

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
//                         <div className="p-5 relative z-10">

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
    badge: "border-cyan-400/30",
    strip: "via-cyan-300/80",
    icon: "group-hover:text-cyan-300",
    shadow: "rgba(34,211,238,.35)",
    textGradient: "from-white via-neutral-200 to-cyan-200",
  },
  {
    aura: "from-violet-500 via-fuchsia-500 to-pink-500",
    rim: "from-pink-400 via-violet-400 to-fuchsia-500",
    badge: "border-violet-400/30",
    strip: "via-violet-300/80",
    icon: "group-hover:text-violet-300",
    shadow: "rgba(168,85,247,.35)",
    textGradient: "from-white via-neutral-200 to-violet-200",
  },
  {
    aura: "from-emerald-400 via-teal-500 to-cyan-500",
    rim: "from-emerald-400 via-lime-400 to-cyan-500",
    badge: "border-emerald-400/30",
    strip: "via-emerald-300/80",
    icon: "group-hover:text-emerald-300",
    shadow: "rgba(16,185,129,.35)",
    textGradient: "from-white via-neutral-200 to-emerald-200",
  },
  {
    aura: "from-orange-400 via-red-500 to-yellow-400",
    rim: "from-orange-400 via-amber-400 to-red-500",
    badge: "border-orange-400/30",
    strip: "via-orange-300/80",
    icon: "group-hover:text-orange-300",
    shadow: "rgba(249,115,22,.35)",
    textGradient: "from-white via-neutral-200 to-orange-200",
  },
  {
    aura: "from-pink-500 via-rose-500 to-red-500",
    rim: "from-pink-500 via-rose-400 to-red-500",
    badge: "border-pink-400/30",
    strip: "via-pink-300/80",
    icon: "group-hover:text-pink-300",
    shadow: "rgba(236,72,153,.35)",
    textGradient: "from-white via-neutral-200 to-rose-200",
  },
  {
    aura: "from-sky-400 via-cyan-400 to-teal-500",
    rim: "from-sky-400 via-cyan-400 to-teal-500",
    badge: "border-sky-400/30",
    strip: "via-sky-300/80",
    icon: "group-hover:text-sky-300",
    shadow: "rgba(56,189,248,.35)",
    textGradient: "from-white via-neutral-200 to-sky-200",
  },
];

export default function CertificationsPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-neutral-950 py-24 text-white selection:bg-white/10">
      {/* Vercel/Apple Style Grid Floor Background */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.04]" aria-hidden="true">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      {/* Floating Ambient Luxury Blobs */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-[140px]" aria-hidden="true" />
      <div className="pointer-events-none absolute top-1/2 right-1/4 h-96 w-96 rounded-full bg-violet-500/5 blur-[140px]" aria-hidden="true" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">

        {/* HEADER */}
        <div className="mb-28 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold tracking-tight bg-gradient-to-b from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent sm:text-6xl"
          >
            Certifications
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-5 max-w-2xl text-base text-neutral-400 font-light leading-relaxed"
          >
            A curated portfolio of validated expertise showcasing structured continuous learning across distributed clouds, architectures, and modern frameworks.
          </motion.p>
        </div>

        {/* CATEGORIES */}
        <div className="space-y-36">
          {certificationCategories.map((category, categoryIndex) => {
            const featured = category.items.find((i) => i.featured);
            const rest = category.items.filter((i) => !i.featured);
            const Icon = category.logo;

            // Deterministic dynamic theme selection
            const theme = logoThemes[
              Math.abs(category.id.split("").reduce((a, c) => a + c.charCodeAt(0), 0)) % logoThemes.length
            ];

            // Extract quick summary stats for the empty space layout
            const uniqueSkillsCount = new Set(category.items.flatMap(i => i.skills || [])).size;
            const mostRecentDate = category.items.reduce((max, item) => item.issueDate > max ? item.issueDate : max, "");

            return (
              <motion.section
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Main Card Wrapper */}
                <div className="relative w-full rounded-3xl border border-white/[0.07] bg-gradient-to-b from-neutral-900/40 to-neutral-900/10 backdrop-blur-3xl p-8 md:p-12 overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.8)]">
                  
                  {/* Subtle Contextual Color Spill */}
                  <div 
                    className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full opacity-[0.03] blur-[80px]" 
                    style={{ backgroundColor: theme.shadow }} 
                  />

                  {/* HEADER SECTION (Grid for Logo + Text + Empty Space Panel) */}
                  <div className="relative mb-12 grid gap-8 lg:grid-cols-12 items-start border-b border-white/[0.05] pb-10">
                    
                    {/* Left Column: Icon and Title Block */}
                    <div className="flex flex-col sm:flex-row gap-6 lg:col-span-7 items-start">
                      
                      {/* Orbital Animated Custom Glass Logo */}
<motion.div
  className="relative group/logo flex-shrink-0"
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
    y: [0, -6, 0], // merged subtle float from first snippet
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
  {/* Aura Glow */}
  <div
    className={`
      absolute -inset-4 rounded-[28px]
      bg-gradient-to-r ${theme.aura}
      opacity-50 blur-2xl scale-110
      transition-all duration-500
      group-hover/logo:opacity-100
      group-hover/logo:blur-[45px]
      group-hover/logo:scale-150
    `}
  />

  {/* Rotating Rim */}
  <div
    className={`
      absolute -inset-[2px] rounded-[20px]
      bg-gradient-to-r ${theme.rim}
      animate-[spin_10s_linear_infinite]
      blur-[2px] opacity-80
      transition-all duration-500
      group-hover/logo:opacity-100
      group-hover/logo:blur-md
    `}
  />

  {/* Shadow Depth Layer */}
  <div className="absolute inset-0 translate-y-3 scale-95 rounded-2xl bg-black/40 blur-xl transition-transform duration-500 group-hover/logo:translate-y-5" />

  {/* Shine Sweep */}
  <span className="absolute inset-0 overflow-hidden rounded-2xl z-10">
    <span className="absolute -left-1/2 top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover/logo:translate-x-[220%]" />
  </span>

  {/* Moving Specular Highlight */}
  <span className="absolute inset-0 overflow-hidden rounded-2xl z-10 pointer-events-none">
    <motion.div
      animate={{ x: ["-140%", "160%"] }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      className="absolute top-0 h-full w-6 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-md"
    />
  </span>

  {/* Main Badge */}
  <motion.div
    className={`
      relative flex h-16 w-16 items-center justify-center
      rounded-2xl border ${theme.badge}
      bg-neutral-950/80 backdrop-blur-xl shadow-xl
    `}
    style={{
      boxShadow: `0 10px 35px rgba(0,0,0,.35), 0 0 22px ${theme.shadow}`,
    }}
    whileHover={{
      rotate: 6,
      scale: 1.08,
      boxShadow: `
        0 0 35px ${theme.shadow},
        0 25px 60px rgba(0,0,0,.45)
      `,
    }}
  >
    {/* Reflection */}
    <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none" />

    {/* Icon with merged floating animation */}
    <motion.div
      animate={{
        y: [0, -2, 0],
        rotate: [0, -6, 6, 0],
        scale: [1, 1.08, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.75,
        rotate: -12,
        y: -8,
        transition: { type: "spring", stiffness: 500, damping: 11 },
      }}
      className="flex items-center justify-center"
    >
      <Icon
        className={`text-2xl text-white/90 transition-colors duration-300 ${theme.icon}`}
        style={{
          filter: `
            drop-shadow(0 0 8px white)
            drop-shadow(0 0 14px ${theme.shadow})
          `,
        }}
      />
    </motion.div>
  </motion.div>
</motion.div>
                      {/* Heading Text */}
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-3">
                          <h2 className={`text-3xl font-bold tracking-tight bg-gradient-to-r ${theme.textGradient} bg-clip-text text-transparent`}>
                            {category.title}
                          </h2>
                          
                          {/* Premium Stats Count pill */}
                          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-0.5 text-[11px] font-medium tracking-wider text-neutral-300 uppercase shadow-inner">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            {category.items.length} Modules
                          </div>
                        </div>

                        {category.description && (
                          <p className="text-sm text-neutral-400 max-w-xl font-light leading-relaxed">
                            {category.description}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* PREMIUM DESIGN UPGRADE: Right Column Filling Empty Header Space with Aggregate KPIs */}
                    <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:col-span-5 w-full lg:justify-end">
                      <div className="rounded-2xl border border-white/[0.04] bg-neutral-900/30 p-4 backdrop-blur-sm">
                        <span className="block text-[10px] uppercase tracking-widest text-neutral-500 font-semibold">Focus Engine</span>
                        <span className="mt-1 block text-lg font-medium text-neutral-200 tracking-tight">{uniqueSkillsCount} Core Skills</span>
                      </div>
                      
                      <div className="rounded-2xl border border-white/[0.04] bg-neutral-900/30 p-4 backdrop-blur-sm">
                        <span className="block text-[10px] uppercase tracking-widest text-neutral-500 font-semibold">Latest Attainment</span>
                        <span className="mt-1 block text-sm font-medium text-cyan-400/90 truncate">{mostRecentDate || "Verified Portfolio"}</span>
                      </div>
                    </div>

                  </div>

                  {/* FEATURED CERTIFICATION HIGHLIGHT */}
                  {featured && (
                    <div className="mb-12 grid lg:grid-cols-12 overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent shadow-2xl transition-all duration-300 hover:border-white/[0.1]">
                      
                      {/* Image Frame with Overlay Matrix */}
                      <div className="relative h-64 lg:h-full lg:col-span-5 min-h-[260px] group/img overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent z-10 opacity-60 lg:hidden" />
                        <div className="absolute inset-0 bg-neutral-950/10 z-10 mix-blend-multiply" />
                        <Image
                          src={featured.image}
                          alt={featured.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                        />
                      </div>

                      {/* Content Panel */}
                      <div className="p-8 lg:p-10 lg:col-span-7 flex flex-col justify-center">
                        <div>
                          <span className="inline-flex items-center gap-1.5 rounded-md border border-amber-500/20 bg-amber-500/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-400 shadow-sm">
                            ★ Master Showcase
                          </span>
                        </div>

                        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white/90">
                          {featured.title}
                        </h3>
                        <p className="text-sm text-neutral-400 mt-1 font-medium">
                          Issued by {featured.issuer}
                        </p>

                        <p className="mt-4 text-sm text-neutral-400 font-light leading-relaxed">
                          {featured.description}
                        </p>

                        {/* Interactive Dynamic Badges */}
                        {featured.skills && (
                          <div className="mt-6 flex flex-wrap gap-1.5">
                            {featured.skills.map((skill) => (
                              <span
                                key={skill}
                                className="rounded-md border border-white/[0.05] bg-white/[0.02] px-2.5 py-1 text-xs text-neutral-300 font-light"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="mt-8 pt-6 border-t border-white/[0.05] flex items-center justify-between text-xs text-neutral-500">
                          <span>Timeline: <strong className="text-neutral-300 font-normal">{featured.issueDate}</strong></span>
                          <span className="text-cyan-400 hover:underline cursor-pointer font-medium tracking-wide">Secure Verification Node →</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* RESPONSIVE CERTIFICATIONS GRID */}
                  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {rest.map((certificate: Certification, index) => (
                      <motion.div
                        key={certificate.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05, duration: 0.4 }}
                        whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                        className="group/card relative rounded-2xl border border-white/[0.05] bg-neutral-900/20 backdrop-blur-md overflow-hidden flex flex-col justify-between shadow-lg hover:border-white/[0.12] hover:bg-neutral-900/40 transition-all duration-300"
                      >
                        <div>
                          {/* Micro Laser Shimmer on Hover */}
                          <span className="pointer-events-none absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 z-20">
                            <span className="absolute -left-1/2 top-0 h-full w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent translate-x-0 group-hover/card:translate-x-[400%] transition-transform duration-1000 ease-in-out" />
                          </span>

                          {/* Image Box */}
                          <div className="relative h-44 w-full overflow-hidden border-b border-white/[0.03]">
                            <Image
                              src={certificate.image}
                              alt={certificate.title}
                              fill
                              className="object-cover transition-transform duration-500 ease-out group-hover/card:scale-103"
                            />
                          </div>

                          {/* Inner Content Block */}
                          <div className="p-6">
                            <h3 className="font-semibold text-base text-neutral-100 tracking-tight leading-snug group-hover/card:text-white transition-colors">
                              {certificate.title}
                            </h3>
                            <p className="mt-1 text-xs text-neutral-400 font-medium">
                              {certificate.issuer}
                            </p>
                            <p className="mt-3 text-xs text-neutral-400 font-light line-clamp-2 leading-relaxed">
                              {certificate.description}
                            </p>

                            {/* Skills Row */}
                            {certificate.skills && (
                              <div className="mt-4 flex flex-wrap gap-1">
                                {certificate.skills.slice(0, 3).map((skill) => (
                                  <span
                                    key={skill}
                                    className="rounded px-2 py-0.5 text-[10px] border border-white/[0.04] bg-white/[0.01] text-neutral-400 font-light"
                                  >
                                    {skill}
                                  </span>
                                ))}
                                {certificate.skills.length > 3 && (
                                  <span className="text-[10px] text-neutral-500 px-1 self-center">+{certificate.skills.length - 3}</span>
                                )}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Anchor Bottom Action bar */}
                        <div className="mx-6 pb-5 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-neutral-500">
                          <span className="font-light">{certificate.issueDate}</span>
                          <span className="inline-flex items-center text-cyan-400 group-hover/card:text-cyan-300 font-medium transition-colors">
                            Validate <span className="transform translate-x-0 group-hover/card:translate-x-1 transition-transform ml-1">→</span>
                          </span>
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