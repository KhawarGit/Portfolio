// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Briefcase, Calendar, GraduationCap, School, Laptop2 } from "lucide-react";
// import { FaLinkedin } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function Timeline() {
// const items = [
//   {
//     type: "job",
//     title: "Software Engineer",
//     institution: "ABC Technologies",
//     duration: "2024 - Present",
//     location: "Karachi, Pakistan",
//     linkedin: "https://linkedin.com/company/abc",
//     logo: "/images/company1.png",
//     description:
//       "Building scalable full-stack applications, automation platforms, and internal engineering tools.",

//     points: [
//       "Developed enterprise Next.js applications",
//       "Built automation solutions using Python & TCL",
//       "Optimized backend APIs and deployment workflows",
//     ],
//   },

//   {
//     type: "university",
//     title: "Bachelor of Software Engineering",
//     institution: "Your University",
//     duration: "2022 - 2026",
//     location: "Karachi, Pakistan",
//     linkedin: "https://linkedin.com/school/your-university",
//     logo: "/images/university.png",
//     description:
//       "Focused on Software Engineering, Artificial Intelligence, Data Structures and Algorithms, and Full Stack Development.",

//     points: [
//       "CGPA: 3.6 / 4.0",
//       "Built 20+ academic & personal projects",
//       "Relevant Coursework: DSA, DBMS, OS, AI",
//     ],
//   },

//   {
//     type: "internship",
//     title: "Software Engineering Intern",
//     institution: "XYZ Solutions",
//     duration: "Jun 2024 - Aug 2024",
//     location: "Karachi, Pakistan",
//     linkedin: "https://linkedin.com/company/xyz",
//     logo: "/images/company2.png",
//     description:
//       "Worked on frontend development, API integrations and automation tooling for internal systems.",

//     points: [
//       "Built reusable React components",
//       "Integrated REST APIs",
//       "Improved application performance by 25%",
//     ],
//   },

//   {
//     type: "college",
//     title: "Higher Secondary Education",
//     institution: "ABC Government College",
//     duration: "2020 - 2022",
//     location: "Karachi, Pakistan",
//     linkedin: "https://linkedin.com",
//     logo: "/images/college.png",
//     description:
//       "Completed Pre-Engineering with emphasis on Mathematics, Physics and Computer Science.",

//     points: [
//       "Grade: A+",
//       "Participated in programming competitions",
//       "Built foundation in mathematics & computing",
//     ],
//   },
// ];

//   return (
//     // <section id="timeline" className="relative py-24">
//     <section id="timeline" className="relative py-24 overflow-x-hidden">

//       <div className="container-width">

//         {/* HEADER */}
//         <div className="mb-16 text-center">
//           <h2 className="text-4xl font-bold">
//             My <span className="text-gradient">Journey</span>
//           </h2>
//           <p className="mt-4 text-neutral-500 dark:text-neutral-400">
//             Education and experience shaping my engineering path
//           </p>
//         </div>


//         {/* <div className="relative mt-20 space-y-20"> */}
//         <div className="relative mt-20 space-y-20 overflow-x-clip">
//         {/* CENTER LINE */}
//  {/* Apple Timeline */}
// {/* <div className="absolute left-1/2 top-0 h-full -translate-x-1/2"> */}
// {/* <div className="absolute left-1/2 top-10 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"> */}
// <div className="absolute left-1/2 top-0 h-full -translate-x-1/2 pointer-events-none">

//   {/* Glow */}
//   <div className="
//     absolute
//     left-1/2
//     h-full
//     w-6
//     -translate-x-1/2
//     bg-violet-500/10
//     blur-3xl
//   "/>

//   {/* Line */}
//   <motion.div
//     initial={{ height: 0 }}
//     whileInView={{ height: "100%" }}
//     viewport={{ once: true }}
//     transition={{ duration: 1.5 }}
//     className="
//       absolute
//       left-1/2
//       top-0
//       w-[3px]
//       -translate-x-1/2
//       bg-gradient-to-b
//       from-cyan-400
//       via-violet-500
//       to-blue-500
//       rounded-full
//     "
//   />

// </div>

//           {items.map((item, index) => {
//             const isLeft = index % 2 === 0;

//             return (
//               <motion.div
//                 key={index}
// initial={{
// opacity:0,
// x:isLeft?-120:120,
// rotate:isLeft?-4:4,
// scale:.94
// }}

// whileInView={{
// opacity:1,
// x:0,
// rotate:0,
// scale:1
// }}
// whileHover={{
//   scale: 1.02,
// }}

// transition={{
// duration:.8,
// ease:"easeOut"
// }}
              
//                 viewport={{ once: false, amount: 0.45 }}
               
//                 // className="grid grid-cols-1 lg:grid-cols-2 items-center relative"

//                 className="grid grid-cols-1 lg:grid-cols-2 items-center relative overflow-x-hidden will-change-transform"
//               >

//                 {/* DOT */}
// {/* <div className="absolute left-1/2 top-8 -translate-x-1/2 z-30"> */}
// <div
//     className="
//         absolute
//         left-1/2
//         top-10
//         -translate-x-1/2
//         -translate-y-1/2
//         z-30
//     "
// >

// <motion.div

// animate={{
//     y:[0,-4,0],
//     rotate:[0,5,0,-5,0],
//     scale:[1,1.05,1],
// }}

// transition={{
//     duration:5,
//     repeat:Infinity,
//     ease: "easeInOut"
// }}

// className="
// relative
// flex
// h-14
// w-14
// items-center
// justify-center

// rounded-full

// border
// border-white/20

// bg-white/10

// backdrop-blur-xl

// shadow-[0_0_35px_rgba(59,130,246,.25)]
// ">

// {
//   item.type === "job" ? (
//     <Briefcase className="text-cyan-400" />
//   ) : item.type === "university" ? (
//     <GraduationCap className="text-violet-400" />
//   ) : item.type === "internship" ? (
//     <Laptop2 className="text-emerald-400" />
//   ) : (
//     <School className="text-orange-400" />
//   )
// }

// <div className="
// absolute
// inset-0
// rounded-full
// bg-cyan-400/20
// blur-xl
// "/>

// </motion.div>

// </div>

//                 {/* LEFT */}
//                 {isLeft ? (
//                   <div className="lg:pr-16">
//                     <motion.div
//   initial={{
//     width: 0,
//     opacity: 0,
//   }}
//   whileInView={{
//     width: 112,
//     opacity: 1,
//   }}
//   viewport={{ once: false, amount: 0.5 }}
//   transition={{
//     duration: 0.8,
//     delay: 0.25,
//     ease: "easeOut",
//   }}
//   className="
//     absolute
//     top-12
//     right-[48%]
//     h-[2px]
//     bg-gradient-to-r
//     from-cyan-400
//     to-transparent
//   "
// />
//                     <Card item={item} />
//                   </div>
//                 ) : (
//                   <div />
//                 )}

//                 {/* RIGHT */}
//                 {!isLeft ? (
//                   <div className="lg:pl-16">

// <motion.div
//   initial={{
//     width: 0,
//     opacity: 0,
//   }}
//   whileInView={{
//     width: 112,
//     opacity: 1,
//   }}
//   viewport={{ once: false, amount: 0.5 }}
//   transition={{
//     duration: 0.8,
//     delay: 0.25,
//     ease: "easeOut",
//   }}
//   className="
//     absolute
//     top-12
//     left-[48%]
//     h-[2px]
//     bg-gradient-to-r
//     from-transparent
//     to-cyan-400
//   "
// />
//                     <Card item={item} />
//                   </div>
//                 ) : (
//                   <div />
//                 )}

//               </motion.div>
//             );
//           })}

//         </div>
//       </div>
//     </section>
//   );
// }

// /* ================= CARD ================= */
// function Card({ item }: any) {
//   return (
// <motion.div
// whileHover={{
//     y:-8,
//     scale:1.01,
// }}

// transition={{
//     type:"spring",
//     stiffness:180,
//     damping:20,
// }}

// className="
// group
// relative
// rounded-2xl
// p-[1px]
// bg-gradient-to-r
// from-blue-500
// via-violet-500
// to-cyan-500
// hover:shadow-[0_30px_80px_rgba(59,130,246,.18)]
// "
// >
//         <div
// className="
// absolute
// inset-0
// pointer-events-none

// rounded-3xl

// bg-gradient-to-r

// from-blue-500/30

// via-violet-500/30

// to-cyan-500/30

// opacity-0

// blur-xl

// transition

// duration-700

// group-hover:opacity-100
// "
// />

//       {/* INNER CARD */}
//       <div className="
//         relative rounded-3xl p-6
//         bg-white/5 dark:bg-neutral-900/80
//         backdrop-blur-xl
//         border border-white/15
//         transition-all duration-500
//         group-hover:-translate-y-2
//         group-hover:rotate-[0.5deg]
//       ">

// <div
// className="
// absolute
// inset-0

// opacity-0

// blur-3xl

// transition

// duration-700

// group-hover:opacity-100

// bg-gradient-to-r

// from-blue-500/10

// via-violet-500/10

// to-cyan-500/10
// pointer-events-none
// "/>

// <div
// className="
// absolute

// right-6

// top-2

// text-8xl

// font-black

// tracking-tight

// text-white/5

// select-none
// ">
// {item.duration.split("-")[1]?.trim()}
// </div>
//         {/* HEADER */}
//         <div className="flex items-start justify-between gap-4">

//           <div className="flex items-center gap-4">

//             <div className="
//               relative h-12 w-12 overflow-hidden rounded-xl
//               border border-white/10
//               bg-white/5
//             ">
//               <Image
//                 src={item.logo}
//                 alt={item.institution}
//                 fill
//                 className="object-cover"
//               />
//             </div>

//             <div>
//               <h3 className="text-xl font-semibold flex items-center gap-2">
// {
//   item.type === "job" ? (
//     <Briefcase size={18} className="text-cyan-400" />
//   ) : item.type === "university" ? (
//     <GraduationCap size={18} className="text-violet-400" />
//   ) : item.type === "internship" ? (
//     <Laptop2 size={18} className="text-emerald-400" />
//   ) : (
//     <School size={18} className="text-orange-400" />
//   )
// }

//                 {item.title}
//               </h3>

//               <p className="text-sm text-neutral-500">
//                 {item.institution}
//               </p>

//               {item.location && (
//                 <p className="text-xs text-neutral-400">
//                   📍 {item.location}
//                 </p>
//               )}
//             </div>
//           </div>

//           <div className="text-right text-sm text-neutral-500">
//             <div className="flex items-center gap-2 justify-end">
//               <Calendar size={14} />
//               {/* {item.duration} */}
//               <span
// className="
// rounded-full

// border

// border-violet-500/30

// bg-violet-500/10

// px-3

// py-1

// text-xs

// font-semibold

// text-violet-300
// ">
// {item.duration}
// </span>
//             </div>

//             <Link
//               href={item.linkedin}
//               target="_blank"
//               className="text-xs hover:text-violet-500 transition"
//             >
//               LinkedIn ↗
//             </Link>
//           </div>
//         </div>

//         {/* DESCRIPTION */}
//         {/* <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
//           {item.description}
//         </p> */}
//         <motion.p

// initial={{opacity:0}}

// whileInView={{opacity:1}}

// transition={{delay:.3}}

// className="mt-5 leading-7 text-neutral-400"
// >
//     {item.description}
// </motion.p>

//         {/* POINTS */}
//         <ul className="mt-4 space-y-2 text-sm text-neutral-500">
//           {item.points.map((p: string, i: number) => (
//             // <li key={i} className="flex gap-2">
//             <motion.li
//             key={i}

// initial={{
// opacity:0,
// x:-20
// }}

// whileInView={{
// opacity:1,
// x:0
// }}

// transition={{
// delay:.4+i*.12,
// duration:.5,
// type:"spring",
// stiffness:120
// }}

// className="flex gap-3"
// >

//     <span className="text-violet-500">▹</span>
//     {p}
// </motion.li>
//             // </li>
//           ))}
//         </ul>

//       </div>
//     </motion.div>
//   );
// }





// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Briefcase, Calendar, GraduationCap, School, Laptop2 } from "lucide-react";
// import { FaLinkedin } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function Timeline() {
//   const items = [
//     {
//       type: "job",
//       title: "Software Engineer",
//       institution: "ABC Technologies",
//       duration: "2024 - Present",
//       location: "Karachi, Pakistan",
//       linkedin: "https://linkedin.com/company/abc",
//       logo: "/images/company1.png",
//       description:
//         "Building scalable full-stack applications, automation platforms, and internal engineering tools.",
//       points: [
//         "Developed enterprise Next.js applications",
//         "Built automation solutions using Python & TCL",
//         "Optimized backend APIs and deployment workflows",
//       ],
//     },
//     {
//       type: "university",
//       title: "Bachelor of Software Engineering",
//       institution: "Your University",
//       duration: "2022 - 2026",
//       location: "Karachi, Pakistan",
//       linkedin: "https://linkedin.com/school/your-university",
//       logo: "/images/university.png",
//       description:
//         "Focused on Software Engineering, Artificial Intelligence, Data Structures and Algorithms, and Full Stack Development.",
//       points: [
//         "CGPA: 3.6 / 4.0",
//         "Built 20+ academic & personal projects",
//         "Relevant Coursework: DSA, DBMS, OS, AI",
//       ],
//     },
//     {
//       type: "internship",
//       title: "Software Engineering Intern",
//       institution: "XYZ Solutions",
//       duration: "Jun 2024 - Aug 2024",
//       location: "Karachi, Pakistan",
//       linkedin: "https://linkedin.com/company/xyz",
//       logo: "/images/company2.png",
//       description:
//         "Worked on frontend development, API integrations and automation tooling for internal systems.",
//       points: [
//         "Built reusable React components",
//         "Integrated REST APIs",
//         "Improved application performance by 25%",
//       ],
//     },
//     {
//       type: "college",
//       title: "Higher Secondary Education",
//       institution: "ABC Government College",
//       duration: "2020 - 2022",
//       location: "Karachi, Pakistan",
//       linkedin: "https://linkedin.com",
//       logo: "/images/college.png",
//       description:
//         "Completed Pre-Engineering with emphasis on Mathematics, Physics and Computer Science.",
//       points: [
//         "Grade: A+",
//         "Participated in programming competitions",
//         "Built foundation in mathematics & computing",
//       ],
//     },
//   ];

//   return (
//     <section id="timeline" className="relative py-24 overflow-x-hidden">
//       <div className="container-width">
//         {/* HEADER */}
//         <div className="mb-16 text-center">
//           <h2 className="text-4xl font-bold">
//             My <span className="text-gradient">Journey</span>
//           </h2>
//           <p className="mt-4 text-neutral-500 dark:text-neutral-400">
//             Education and experience shaping my engineering path
//           </p>
//         </div>

//         <div className="relative mt-20 space-y-20 overflow-x-clip">
//           {/* CENTER LINE */}
//           <div className="absolute left-1/2 top-0 h-full -translate-x-1/2 pointer-events-none">
//             {/* Glow */}
//             <div className="absolute left-1/2 h-full w-6 -translate-x-1/2 bg-violet-500/10 blur-3xl" />

//             {/* Line */}
//             <motion.div
//               initial={{ height: 0 }}
//               whileInView={{ height: "100%" }}
//               viewport={{ once: true }}
//               transition={{ duration: 1.5 }}
//               className="absolute left-1/2 top-0 w-[3px] -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-violet-500 to-blue-500 rounded-full"
//             />
//           </div>

//           {items.map((item, index) => {
//             const isLeft = index % 2 === 0;

//             return (
//               <motion.div
//                 key={index}
//                 initial={{
//                   opacity: 0,
//                   x: isLeft ? -120 : 120,
//                   rotate: isLeft ? -4 : 4,
//                   scale: 0.94,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   x: 0,
//                   rotate: 0,
//                   scale: 1,
//                 }}
//                 whileHover={{
//                   scale: 1.02,
//                 }}
//                 transition={{
//                   duration: 0.8,
//                   ease: "easeOut",
//                 }}
//                 viewport={{ once: false, amount: 0.45 }}
//                 className="grid grid-cols-1 lg:grid-cols-2 items-center relative overflow-x-hidden will-change-transform"
//               >
//                 {/* DOT */}
//                 <div className="absolute left-1/2 top-10 -translate-x-1/2 -translate-y-1/2 z-30">
//                   <motion.div
//                     animate={{
//                       y: [0, -4, 0],
//                       rotate: [0, 5, 0, -5, 0],
//                       scale: [1, 1.05, 1],
//                     }}
//                     transition={{
//                       duration: 5,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                     }}
//                     className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_0_35px_rgba(59,130,246,.25)]"
//                   >
//                     {item.type === "job" ? (
//                       <Briefcase className="text-cyan-400" />
//                     ) : item.type === "university" ? (
//                       <GraduationCap className="text-violet-400" />
//                     ) : item.type === "internship" ? (
//                       <Laptop2 className="text-emerald-400" />
//                     ) : (
//                       <School className="text-orange-400" />
//                     )}

//                     <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl" />
//                   </motion.div>
//                 </div>

//                 {/* LEFT */}
//                 {isLeft ? (
//                   <div className="lg:pr-16">
//                     <motion.div
//                       initial={{ width: 0, opacity: 0 }}
//                       whileInView={{ width: 112, opacity: 1 }}
//                       viewport={{ once: false, amount: 0.5 }}
//                       transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
//                       className="absolute top-12 right-[48%] h-[2px] bg-gradient-to-r from-cyan-400 to-transparent"
//                     />
//                     <Card item={item} />
//                   </div>
//                 ) : (
//                   <div />
//                 )}

//                 {/* RIGHT */}
//                 {!isLeft ? (
//                   <div className="lg:pl-16">
//                     <motion.div
//                       initial={{ width: 0, opacity: 0 }}
//                       whileInView={{ width: 112, opacity: 1 }}
//                       viewport={{ once: false, amount: 0.5 }}
//                       transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
//                       className="absolute top-12 left-[48%] h-[2px] bg-gradient-to-r from-transparent to-cyan-400"
//                     />
//                     <Card item={item} />
//                   </div>
//                 ) : (
//                   <div />
//                 )}
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ================= CARD ================= */
// function Card({ item }: any) {
//   return (
//     <motion.div
//       whileHover={{
//         y: -8,
//         scale: 1.01,
//       }}
//       transition={{
//         type: "spring",
//         stiffness: 180,
//         damping: 20,
//       }}
//       className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 hover:shadow-[0_30px_80px_rgba(59,130,246,.18)]"
//     >
//       <div className="absolute inset-0 pointer-events-none rounded-3xl bg-gradient-to-r from-blue-500/12 via-violet-500/12 to-cyan-500/12 opacity-0 blur-xl transition duration-700 group-hover:opacity-100" />

//       {/* INNER CARD */}
//       <div className="relative rounded-3xl p-7 bg-white dark:bg-neutral-900/95 border border-neutral-200 dark:border-neutral-800 shadow-lg shadow-neutral-200/60 dark:shadow-black/30 transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-[0.5deg] overflow-hidden">
        
//         {/* Subtle top accent */}
//         <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-cyan-500 via-violet-500 to-blue-500" />

//         <div className="absolute inset-0 opacity-0 blur-3xl transition duration-700 group-hover:opacity-100 bg-gradient-to-r from-blue-500/12 via-violet-500/12 to-cyan-500/12 pointer-events-none" />

//         {/* The giant year watermark */}
//         <div className="absolute right-6 top-4 text-7xl font-black tracking-tight text-neutral-100 dark:text-white/5 pointer-events-none select-none">
//           {item.duration.split("-")[1]?.trim()}
//         </div>

//         {/* HEADER */}
//         <div className="flex items-start justify-between gap-4 relative z-10">
//           <div className="flex items-center gap-4">
//             <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
//               <Image
//                 src={item.logo}
//                 alt={item.institution}
//                 fill
//                 className="object-cover"
//               />
//             </div>

//             <div>
//               <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white flex items-center gap-2">
//                 {item.type === "job" ? (
//                   <Briefcase size={18} className="text-cyan-400" />
//                 ) : item.type === "university" ? (
//                   <GraduationCap size={18} className="text-violet-400" />
//                 ) : item.type === "internship" ? (
//                   <Laptop2 size={18} className="text-emerald-400" />
//                 ) : (
//                   <School size={18} className="text-orange-400" />
//                 )}
//                 {item.title}
//               </h3>

//               <p className="mt-1 text-sm font-medium text-neutral-700 dark:text-neutral-300">
//                 {item.institution}
//               </p>

//               {item.location && (
//                 <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-500">
//                   📍 {item.location}
//                 </p>
//               )}
//             </div>
//           </div>

//           <div className="text-right text-sm text-neutral-500 flex flex-col items-end gap-2">
//             <div className="flex items-center gap-2 justify-end">
//               <Calendar size={14} className="text-neutral-500 dark:text-neutral-500" />
//               <span className="inline-flex items-center rounded-full border border-violet-500/30 bg-violet-100 dark:bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-700 dark:text-violet-300">
//                 {item.duration}
//               </span>
//             </div>

//             <Link
//               href={item.linkedin}
//               target="_blank"
//               className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-neutral-500 dark:text-neutral-500 hover:text-violet-500 dark:hover:text-violet-500 transition-colors"
//             >
//               <FaLinkedin className="text-sm" />
//               LinkedIn
//             </Link>
//           </div>
//         </div>

//         {/* CONTENT SPLIT LINE BEFORE DESCRIPTION */}
//         <div className="my-5 border-t border-neutral-200 dark:border-neutral-800" />

//         {/* DESCRIPTION */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="mt-5 text-[15px] leading-7 text-neutral-700 dark:text-neutral-300"
//         >
//           {item.description}
//         </motion.p>

//         {/* CONTENT SPLIT LINE BEFORE ACHIEVEMENTS */}
//         <div className="my-5 border-t border-neutral-200 dark:border-neutral-800" />

//         {/* POINTS */}
//         <ul className="mt-4 space-y-3">
//           {item.points.map((p: string, i: number) => (
//             <motion.li
//               key={i}
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{
//                 delay: 0.4 + i * 0.12,
//                 duration: 0.5,
//                 type: "spring",
//                 stiffness: 120,
//               }}
//               className="flex gap-3 text-[14px] leading-6 text-neutral-600 dark:text-neutral-400"
//             >
//               {/* Premium Dot Bullet Indicator */}
//               <div className="mt-[7px] h-2 w-2 rounded-full bg-violet-500 shrink-0" />
//               {p}
//             </motion.li>
//           ))}
//         </ul>
//       </div>
//     </motion.div>
//   );
// }






"use client";

import Image from "next/image";
import Link from "next/link";
import { Briefcase, Calendar, GraduationCap, School, Laptop2 } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Timeline() {
  const items = [
    {
      type: "job",
      title: "Software Engineer",
      institution: "ABC Technologies",
      duration: "2024 - Present",
      location: "Karachi, Pakistan",
      linkedin: "https://linkedin.com/company/abc",
      logo: "/images/company1.png",
      description:
        "Building scalable full-stack applications, automation platforms, and internal engineering tools.",
      points: [
        "Developed enterprise Next.js applications",
        "Built automation solutions using Python & TCL",
        "Optimized backend APIs and deployment workflows",
      ],
    },
    {
      type: "university",
      title: "Bachelor of Software Engineering",
      institution: "Your University",
      duration: "2022 - 2026",
      location: "Karachi, Pakistan",
      linkedin: "https://linkedin.com/school/your-university",
      logo: "/images/university.png",
      description:
        "Focused on Software Engineering, Artificial Intelligence, Data Structures and Algorithms, and Full Stack Development.",
      points: [
        "CGPA: 3.6 / 4.0",
        "Built 20+ academic & personal projects",
        "Relevant Coursework: DSA, DBMS, OS, AI",
      ],
    },
    {
      type: "internship",
      title: "Software Engineering Intern",
      institution: "XYZ Solutions",
      duration: "Jun 2024 - Aug 2024",
      location: "Karachi, Pakistan",
      linkedin: "https://linkedin.com/company/xyz",
      logo: "/images/company2.png",
      description:
        "Worked on frontend development, API integrations and automation tooling for internal systems.",
      points: [
        "Built reusable React components",
        "Integrated REST APIs",
        "Improved application performance by 25%",
      ],
    },
    {
      type: "college",
      title: "Higher Secondary Education",
      institution: "ABC Government College",
      duration: "2020 - 2022",
      location: "Karachi, Pakistan",
      linkedin: "https://linkedin.com",
      logo: "/images/college.png",
      description:
        "Completed Pre-Engineering with emphasis on Mathematics, Physics and Computer Science.",
      points: [
        "Grade: A+",
        "Participated in programming competitions",
        "Built foundation in mathematics & computing",
      ],
    },
  ];

  return (
    // Changed overflow-x-hidden to overflow-visible and added vertical padding to ensure no clipping
    <section id="timeline" className="relative py-24 overflow-visible">
      <div className="container-width px-4">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="mt-4 text-neutral-500 dark:text-neutral-400">
            Education and experience shaping my engineering path
          </p>
        </div>

        {/* Added overflow-visible so the container doesn't cut off animated elements */}
        <div className="relative mt-20 space-y-24 overflow-visible">
          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 h-full -translate-x-1/2 pointer-events-none">
            {/* Glow */}
            <div className="absolute left-1/2 h-full w-6 -translate-x-1/2 bg-violet-500/10 blur-3xl" />

            {/* Line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="absolute left-1/2 top-0 w-[3px] -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-violet-500 to-blue-500 rounded-full"
            />
          </div>

          {items.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: isLeft ? -120 : 120,
                  rotate: isLeft ? -4 : 4,
                  scale: 0.94,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  rotate: 0,
                  scale: 1,
                }}
                whileHover={{
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                viewport={{ once: false, amount: 0.3 }}
                // Added py-6 (vertical cushion for hover lift) and changed overflow to overflow-visible
                className="grid grid-cols-1 lg:grid-cols-2 items-center relative py-6 overflow-visible will-change-transform"
              >
                {/* DOT */}
                <div className="absolute left-1/2 top-16 -translate-x-1/2 -translate-y-1/2 z-30">
                  <motion.div
                    animate={{
                      y: [0, -4, 0],
                      rotate: [0, 5, 0, -5, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_0_35px_rgba(59,130,246,.25)]"
                  >
                    {item.type === "job" ? (
                      <Briefcase className="text-cyan-400" />
                    ) : item.type === "university" ? (
                      <GraduationCap className="text-violet-400" />
                    ) : item.type === "internship" ? (
                      <Laptop2 className="text-emerald-400" />
                    ) : (
                      <School className="text-orange-400" />
                    )}

                    <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl" />
                  </motion.div>
                </div>

                {/* LEFT */}
                {isLeft ? (
                  // Added px-4 to give side margins so shadows/glows aren't sliced at the container edge
                  <div className="lg:pr-20 lg:pl-4 overflow-visible relative">
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      whileInView={{ width: 112, opacity: 1 }}
                      viewport={{ once: false, amount: 0.5 }}
                      transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
                      className="absolute top-16 right-[48%] h-[2px] bg-gradient-to-r from-cyan-400 to-transparent hidden lg:block"
                    />
                    <Card item={item} />
                  </div>
                ) : (
                  <div />
                )}

                {/* RIGHT */}
                {!isLeft ? (
                  // Added px-4 to give side margins so shadows/glows aren't sliced at the container edge
                  <div className="lg:pl-20 lg:pr-4 overflow-visible relative">
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      whileInView={{ width: 112, opacity: 1 }}
                      viewport={{ once: false, amount: 0.5 }}
                      transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
                      className="absolute top-16 left-[48%] h-[2px] bg-gradient-to-r from-transparent to-cyan-400 hidden lg:block"
                    />
                    <Card item={item} />
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
function Card({ item }: any) {
  return (
    <motion.div
      whileHover={{
        y: -10, // Gives a slightly cleaner lift
        scale: 1.015,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 20,
      }}
      className="group relative rounded-3xl p-[1px] bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 hover:shadow-[0_30px_80px_rgba(59,130,246,.22)]"
    >
      {/* Outer Glow Background */}
      <div className="absolute inset-0 pointer-events-none rounded-3xl bg-gradient-to-r from-blue-500/12 via-violet-500/12 to-cyan-500/12 opacity-0 blur-xl transition duration-700 group-hover:opacity-100" />

      {/* INNER CARD */}
      <div className="relative rounded-3xl p-7 bg-white dark:bg-neutral-900/95 border border-neutral-200 dark:border-neutral-800 shadow-lg shadow-neutral-200/60 dark:shadow-black/30 transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-[0.5deg] overflow-hidden">
        
        {/* Subtle top accent */}
        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-cyan-500 via-violet-500 to-blue-500" />

        <div className="absolute inset-0 opacity-0 blur-3xl transition duration-700 group-hover:opacity-100 bg-gradient-to-r from-blue-500/12 via-violet-500/12 to-cyan-500/12 pointer-events-none" />

        {/* The giant year watermark */}
        <div className="absolute right-6 top-4 text-7xl font-black tracking-tight text-neutral-100 dark:text-white/5 pointer-events-none select-none">
          {item.duration.split("-")[1]?.trim()}
        </div>

        {/* HEADER */}
        <div className="flex items-start justify-between gap-4 relative z-10">
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
              <Image
                src={item.logo}
                alt={item.institution}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white flex items-center gap-2">
                {item.type === "job" ? (
                  <Briefcase size={18} className="text-cyan-400" />
                ) : item.type === "university" ? (
                  <GraduationCap size={18} className="text-violet-400" />
                ) : item.type === "internship" ? (
                  <Laptop2 size={18} className="text-emerald-400" />
                ) : (
                  <School size={18} className="text-orange-400" />
                )}
                {item.title}
              </h3>

              <p className="mt-1 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                {item.institution}
              </p>

              {item.location && (
                <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-500">
                  📍 {item.location}
                </p>
              )}
            </div>
          </div>

          <div className="text-right text-sm text-neutral-500 flex flex-col items-end gap-2">
            <div className="flex items-center gap-2 justify-end">
              <Calendar size={14} className="text-neutral-500 dark:text-neutral-500" />
              <span className="inline-flex items-center rounded-full border border-violet-500/30 bg-violet-100 dark:bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-700 dark:text-violet-300">
                {item.duration}
              </span>
            </div>

            <Link
              href={item.linkedin}
              target="_blank"
              className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-neutral-500 dark:text-neutral-500 hover:text-violet-500 dark:hover:text-violet-500 transition-colors"
            >
              <FaLinkedin className="text-sm" />
              LinkedIn
            </Link>
          </div>
        </div>

        {/* CONTENT SPLIT LINE BEFORE DESCRIPTION */}
        <div className="my-5 border-t border-neutral-200 dark:border-neutral-800" />

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-5 text-[15px] leading-7 text-neutral-700 dark:text-neutral-300"
        >
          {item.description}
        </motion.p>

        {/* CONTENT SPLIT LINE BEFORE ACHIEVEMENTS */}
        <div className="my-5 border-t border-neutral-200 dark:border-neutral-800" />

        {/* POINTS */}
        <ul className="mt-4 space-y-3">
          {item.points.map((p: string, i: number) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.4 + i * 0.12,
                duration: 0.5,
                type: "spring",
                stiffness: 120,
              }}
              className="flex gap-3 text-[14px] leading-6 text-neutral-600 dark:text-neutral-400"
            >
              {/* Premium Dot Bullet Indicator */}
              <div className="mt-[7px] h-2 w-2 rounded-full bg-violet-500 shrink-0" />
              {p}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}