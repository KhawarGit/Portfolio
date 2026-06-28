// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { certificationCategories } from "@/data/certifications";

// export default function CertificationsPreview() {
//   // Flatten all certificates and keep only homepage ones
// const certifications = certificationCategories
//   .flatMap((category) =>
//     category.items.map((item) => ({
//       ...item,
//       categoryTitle: category.title,
//       categoryId: category.id,
//       categoryLogo: category.logo,
//     }))
//   )
//   .filter((certificate) => certificate.showOnHome);

//   if (!certifications.length) return null;

//   return (
//     <section className="relative overflow-hidden py-28">
//       <div className="container-width">

//         {/* Header */}
//         <div className="mb-14 text-center">
//           <h2 className="text-4xl font-bold">
//             Certifications
//           </h2>

//           <p className="mt-3 text-neutral-500">
//             Continuous learning across modern technologies
//           </p>
//         </div>

//         <div className="relative">

//           {/* Left Fade */}
//           <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-40 bg-gradient-to-r from-background via-background/70 to-transparent" />

//           {/* Right Fade */}
//           <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-40 bg-gradient-to-l from-background via-background/70 to-transparent" />

//           {/* Infinite Track */}
//           <motion.div
//             className="flex w-max gap-6"
//             animate={{ x: ["0%", "-50%"] }}
//             transition={{
//               duration: 28,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           >
//             {[...certifications, ...certifications].map((cert, index) => (
//               <motion.div
//                 key={`${cert.id}-${index}`}
//                 whileHover={{
//                   y: -8,
//                   scale: 1.03,
//                 }}
//                 transition={{
//                   type: "spring",
//                   stiffness: 250,
//                   damping: 18,
//                 }}
//                 className="
//                   group
//                   relative
//                   min-w-[340px]
//                   overflow-hidden
//                   rounded-3xl
//                   border
//                   border-white/10
//                   bg-white/5
//                   backdrop-blur-xl
//                 "
//               >
//                 {/* Hover Glow */}
//                 <div
//                   className="
//                     absolute
//                     inset-0
//                     opacity-0
//                     transition-opacity
//                     duration-500
//                     group-hover:opacity-100
//                     bg-gradient-to-br
//                     from-cyan-500/10
//                     via-violet-500/10
//                     to-blue-500/10
//                   "
//                 />

//                 {/* Image */}
//                 <div className="relative h-[190px]">
//                   <Image
//                     src={cert.image}
//                     alt={cert.title}
//                     fill
//                     className="object-cover transition duration-500 group-hover:scale-105"
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="relative p-5">

//                   <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
//                     {cert.categoryTitle}
//                   </span>

//                   <h3 className="mt-4 text-lg font-semibold">
//                     {cert.title}
//                   </h3>

//                   <p className="mt-1 text-sm text-neutral-400">
//                     {cert.issuer}
//                   </p>

//                   <p className="mt-3 line-clamp-2 text-sm text-neutral-500">
//                     {cert.description}
//                   </p>

//                   <div className="mt-5 flex items-center justify-between">
//                     <span className="text-xs text-violet-400">
//                       {cert.issueDate}
//                     </span>

//                     {cert.featured && (
//                       <span className="rounded-full bg-violet-500/15 px-2 py-1 text-[10px] font-medium text-violet-300">
//                         Featured
//                       </span>
//                     )}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Animated Dots */}
//           <div className="mt-10 flex justify-center gap-2">
//             {certifications.map((_, index) => (
//               <motion.div
//                 key={index}
//                 className="h-2 w-2 rounded-full bg-white/25"
//                 animate={{
//                   scale: [1, 1.6, 1],
//                   opacity: [0.25, 1, 0.25],
//                 }}
//                 transition={{
//                   duration: 2.5,
//                   repeat: Infinity,
//                   delay: index * 0.18,
//                 }}
//               />
//             ))}
//           </div>

//           {/* CTA */}
//           <div className="mt-12 flex justify-center">
//             <Link
//               href="/certifications"
//               className="
//                 rounded-full
//                 border
//                 border-violet-500/30
//                 bg-violet-500/10
//                 px-6
//                 py-3
//                 text-sm
//                 text-violet-300
//                 transition
//                 hover:bg-violet-500/20
//               "
//             >
//               View All Certifications →
//             </Link>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { certificationCategories } from "@/data/certifications";
// import { IconType } from "react-icons";

// /* =========================
//    CARD COMPONENT
// ========================= */
// type Certification = {
//   id: string;
//   title: string;
//   image: string;
//   issuer: string;
//   description: string;
//   issueDate: string;
//   featured?: boolean;
//   showOnHome?: boolean;
//   categoryTitle: string;
//   categoryId: string;
//   // categoryLogo?: string;

//     // FIXED HERE 👇
//   categoryLogo?: IconType;

// };

// export default function CertificationsPreview() {

//   const certifications = certificationCategories
//     .flatMap((category) =>
//       category.items.map((item) => ({
//         ...item,
//         categoryTitle: category.title,
//         categoryId: category.id,
//         categoryLogo: category.logo,
//       }))
//     )
//     .filter((certificate) => certificate.showOnHome);

//   if (!certifications.length) return null;

//   return (
//     <section className="relative overflow-x-hidden py-28">
//       <div className="container-width">

//         {/* Header */}
//         <div className="mb-14 text-center">
//           <h2 className="text-4xl font-bold">Certifications</h2>
//           <p className="mt-3 text-neutral-500">
//             Continuous learning across modern technologies
//           </p>
//         </div>

//         {/* SAFE MARQUEE WRAPPER */}
//         <div className="relative w-full overflow-hidden">

//           {/* Left Fade */}
//           <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-40 bg-gradient-to-r from-background via-background/70 to-transparent" />

//           {/* Right Fade */}
//           <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-40 bg-gradient-to-l from-background via-background/70 to-transparent" />

//           {/* TRACK */}
//           <motion.div
//             className="flex gap-6"
//             animate={{ x: ["0%", "-100%"] }}
//             transition={{
//               duration: 30,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           >

//             {/* SET 1 */}
//             <div className="flex gap-6">
//               {certifications.map((cert, index) => (
//                 <Card key={`a-${cert.id}-${index}`} cert={cert} />
//               ))}
//             </div>

//             {/* SET 2 (duplicate for seamless loop) */}
//             <div className="flex gap-6" aria-hidden="true">
//               {certifications.map((cert, index) => (
//                 <Card key={`b-${cert.id}-${index}`} cert={cert} />
//               ))}
//             </div>

//           </motion.div>
//         </div>

//         {/* Animated Dots */}
//         <div className="mt-10 flex justify-center gap-2">
//           {certifications.map((_, index) => (
//             <motion.div
//               key={index}
//               className="h-2 w-2 rounded-full bg-white/25"
//               animate={{
//                 scale: [1, 1.6, 1],
//                 opacity: [0.25, 1, 0.25],
//               }}
//               transition={{
//                 duration: 2.5,
//                 repeat: Infinity,
//                 delay: index * 0.18,
//               }}
//             />
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="mt-12 flex justify-center">
//           <Link
//             href="/certifications"
//             className="
//               rounded-full
//               border
//               border-violet-500/30
//               bg-violet-500/10
//               px-6
//               py-3
//               text-sm
//               text-violet-300
//               transition
//               hover:bg-violet-500/20
//             "
//           >
//             View All Certifications →
//           </Link>
//         </div>

//       </div>
//     </section>
//   );
// }



// function Card({ cert }: { cert: Certification }) {
//   return (
//     <div
//       className="
//         group
//         relative
//         min-w-[340px]
//         flex-shrink-0
//         overflow-hidden
//         rounded-3xl
//         border
//         border-white/10
//         bg-white/5
//         backdrop-blur-xl
//       "
//     >
//       {/* Hover Glow */}
//       <div className="
//         absolute inset-0 opacity-0 transition-opacity duration-500
//         group-hover:opacity-100
//         bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-blue-500/10
//       " />

//       {/* Image */}
//       <div className="relative h-[190px]">
//         <Image
//           src={cert.image}
//           alt={cert.title}
//           fill
//           className="object-cover transition duration-500 group-hover:scale-105"
//         />
//       </div>

//       {/* Content */}
//       <div className="relative p-5">
//         <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
//           {cert.categoryTitle}
//         </span>

//         <h3 className="mt-4 text-lg font-semibold">
//           {cert.title}
//         </h3>

//         <p className="mt-1 text-sm text-neutral-400">
//           {cert.issuer}
//         </p>

//         <p className="mt-3 line-clamp-2 text-sm text-neutral-500">
//           {cert.description}
//         </p>

//         <div className="mt-5 flex items-center justify-between">
//           <span className="text-xs text-violet-400">
//             {cert.issueDate}
//           </span>

//           {cert.featured && (
//             <span className="rounded-full bg-violet-500/15 px-2 py-1 text-[10px] font-medium text-violet-300">
//               Featured
//             </span>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { certificationCategories } from "@/data/certifications";
// import { IconType } from "react-icons";

// /* =========================
//    TYPES
// ========================= */
// type Certification = {
//   id: string;
//   title: string;
//   image: string;
//   issuer: string;
//   description: string;
//   issueDate: string;
//   featured?: boolean;
//   showOnHome?: boolean;
//   categoryTitle: string;
//   categoryId: string;
//   categoryLogo?: IconType;
// };

// export default function CertificationsPreview() {
//   const certifications = certificationCategories
//     .flatMap((category) =>
//       category.items.map((item) => ({
//         ...item,
//         categoryTitle: category.title,
//         categoryId: category.id,
//         categoryLogo: category.logo,
//       }))
//     )
//     .filter((certificate) => certificate.showOnHome);

//   const [current, setCurrent] = useState(0);
//   const [paused, setPaused] = useState(false);

//   const next = () =>
//     setCurrent((prev) => (prev + 1) % certifications.length);

//   const previous = () =>
//     setCurrent(
//       (prev) => (prev - 1 + certifications.length) % certifications.length
//     );

//   // Auto play logic
//   useEffect(() => {
//     if (paused || !certifications.length) return;

//     const id = setInterval(next, 3500);

//     return () => clearInterval(id);
//   }, [paused, current, certifications.length]);

//   if (!certifications.length) return null;

//   return (
//     <section className="relative overflow-x-hidden py-28">
//       {/* Background ambient animation */}
//       <motion.div
//         className="
//           absolute
//           inset-0
//           opacity-20
//           bg-[length:300%_300%]
//           bg-gradient-to-r
//           from-cyan-500/10
//           via-violet-500/10
//           to-blue-500/10
//           pointer-events-none
//         "
//         animate={{
//           backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//         }}
//         transition={{
//           duration: 18,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       />

//       <div className="container-width relative z-10">
//         {/* Header */}
//         <div className="mb-14 text-center">
//           <h2 className="text-4xl font-bold">Certifications</h2>
//           <p className="mt-3 text-neutral-500">
//             Continuous learning across modern technologies
//           </p>
//         </div>

//         {/* CAROUSEL CONTAINER */}
//         <div
//           className="relative mt-8 w-full"
//           onMouseEnter={() => setPaused(true)}
//           onMouseLeave={() => setPaused(false)}
//         >
//           {/* Previous Button */}
//           <button
//             onClick={previous}
//             className="
//               absolute
//               left-4
//               top-1/2
//               -translate-y-1/2
//               z-40
//               rounded-full
//               bg-white/10
//               p-3
//               text-white
//               backdrop-blur
//               transition
//               hover:bg-white/20
//               active:scale-95
//             "
//             aria-label="Previous slide"
//           >
//             ←
//           </button>

//           {/* Next Button */}
//           <button
//             onClick={next}
//             className="
//               absolute
//               right-4
//               top-1/2
//               -translate-y-1/2
//               z-40
//               rounded-full
//               bg-white/10
//               p-3
//               text-white
//               backdrop-blur
//               transition
//               hover:bg-white/20
//               active:scale-95
//             "
//             aria-label="Next slide"
//           >
//             →
//           </button>

//           {/* Swipe Track */}
//           <motion.div
//             drag="x"
//             dragConstraints={{ left: 0, right: 0 }}
//             onDragEnd={(_, info) => {
//               if (info.offset.x < -120) next();
//               if (info.offset.x > 120) previous();
//             }}
//             className="relative h-[490px] w-full overflow-hidden"
//           >
//             {certifications.map((cert, index) => {
//               const diff =
//                 (index - current + certifications.length) %
//                 certifications.length;

//               let x = 0;
//               let scale = 0.85;
//               let opacity = 0.25;
//               let blur = "blur(5px)";
//               let z = 0;

//               if (diff === 0) {
//                 x = 0;
//                 scale = 1;
//                 opacity = 1;
//                 blur = "blur(0px)";
//                 z = 30;
//               } else if (diff === 1) {
//                 x = 340;
//                 scale = 0.94;
//                 opacity = 0.65;
//                 blur = "blur(2px)";
//                 z = 20;
//               } else if (diff === certifications.length - 1) {
//                 x = -340;
//                 scale = 0.94;
//                 opacity = 0.65;
//                 blur = "blur(2px)";
//                 z = 20;
//               } else {
//                 // Keep structural properties clean for hidden cards
//                 opacity = 0;
//                 z = 0;
//               }

//               return (
//                 <motion.div
//                   key={cert.id}
//                   animate={{
//                     x: `calc(-50% + ${x}px)`,
//                     scale,
//                     opacity,
//                     filter: blur,
//                   }}
//                   transition={{
//                     type: "spring",
//                     stiffness: 140,
//                     damping: 24,
//                   }}
//                   style={{
//                     zIndex: z,
//                   }}
//                   className="
//                     absolute
//                     left-1/2
//                     top-4
//                   "
//                 >
//                   <Card cert={cert} />
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>

//         {/* Premium dots */}
//         <div className="mt-10 flex justify-center gap-2">
//           {certifications.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrent(index)}
//               aria-label={`Go to slide ${index + 1}`}
//             >
//               <motion.div
//                 animate={{
//                   width: current === index ? 34 : 10,
//                   opacity: current === index ? 1 : 0.4,
//                 }}
//                 transition={{
//                   type: "spring",
//                   stiffness: 300,
//                   damping: 24,
//                 }}
//                 className={`
//                   h-2 rounded-full
//                   ${current === index ? "bg-cyan-400" : "bg-white/25"}
//                 `}
//               />
//             </button>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="mt-12 flex justify-center">
//           <Link
//             href="/certifications"
//             className="
//               rounded-full
//               border
//               border-violet-500/30
//               bg-violet-500/10
//               px-6
//               py-3
//               text-sm
//               text-violet-300
//               transition
//               hover:bg-violet-500/20
//             "
//           >
//             View All Certifications →
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* =========================
//    CARD COMPONENT
// ========================= */
// function Card({ cert }: { cert: Certification }) {
//   const Logo = cert.categoryLogo;

//   return (
//     <motion.div
//       whileHover={{
//         y: -8,
//       }}
//       transition={{
//         type: "spring",
//         stiffness: 220,
//         damping: 18,
//       }}
//       className="
//         group
//         relative
//         w-[340px]
//         flex-shrink-0
//         overflow-hidden
//         rounded-3xl
//         border
//         border-white/10
//         bg-white/5
//         backdrop-blur-xl
//       "
//     >
//       {/* Hover Glow */}
//       <div
//         className="
//           absolute inset-0 opacity-0 transition-opacity duration-500
//           group-hover:opacity-100
//           bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-blue-500/10
//           z-10
//           pointer-events-none
//         "
//       />

//       {/* Floating category icon */}
//       <div
//         className="
//           absolute
//           right-5
//           top-5
//           z-20
//           flex
//           h-11
//           w-11
//           items-center
//           justify-center
//           rounded-xl
//           border
//           border-white/10
//           bg-black/30
//           backdrop-blur
//           text-white
//         "
//       >
//         {Logo && <Logo size={20} />}
//       </div>

//       {/* Image with Advanced Animation */}
//       <motion.div
//         className="relative h-[190px] overflow-hidden"
//         whileHover={{
//           scale: 1.05,
//           rotate: 0.4,
//         }}
//         transition={{
//           duration: 0.45,
//         }}
//       >
//         <Image
//           src={cert.image}
//           alt={cert.title}
//           fill
//           className="object-cover"
//         />
//       </motion.div>

//       {/* Content */}
//       <div className="relative p-5">
//         <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
//           {cert.categoryTitle}
//         </span>

//         <h3 className="mt-4 text-lg font-semibold text-white">
//           {cert.title}
//         </h3>

//         <p className="mt-1 text-sm text-neutral-400">
//           {cert.issuer}
//         </p>

//         <p className="mt-3 line-clamp-2 text-sm text-neutral-500">
//           {cert.description}
//         </p>

//         <div className="mt-5 flex items-center justify-between">
//           <span className="text-xs text-violet-400">
//             {cert.issueDate}
//           </span>

//           {cert.featured && (
//             <span className="rounded-full bg-violet-500/15 px-2 py-1 text-[10px] font-medium text-violet-300">
//               Featured
//             </span>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   );
// }


// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { certificationCategories } from "@/data/certifications";
// import { IconType } from "react-icons";

// /* =========================
//    TYPES
// ========================= */
// type Certification = {
//   id: string;
//   title: string;
//   image: string;
//   issuer: string;
//   description: string;
//   issueDate: string;
//   featured?: boolean;
//   showOnHome?: boolean;
//   categoryTitle: string;
//   categoryId: string;
//   categoryLogo?: IconType;
// };

// export default function CertificationsPreview() {
//   const certifications = certificationCategories
//     .flatMap((category) =>
//       category.items.map((item) => ({
//         ...item,
//         categoryTitle: category.title,
//         categoryId: category.id,
//         categoryLogo: category.logo,
//       }))
//     )
//     .filter((certificate) => certificate.showOnHome);

//   const [current, setCurrent] = useState(0);
//   const [paused, setPaused] = useState(false);
//   const AUTOPLAY_TIME = 3500; // Time in ms per slide

//   const next = () => {
//     setCurrent((prev) => (prev + 1) % certifications.length);
//   };

//   const previous = () => {
//     setCurrent(
//       (prev) => (prev - 1 + certifications.length) % certifications.length
//     );
//   };

//   // Auto play logic
//   useEffect(() => {
//     if (paused || !certifications.length) return;

//     const timer = setInterval(() => {
//       next();
//     }, AUTOPLAY_TIME);

//     return () => clearInterval(timer);
//   }, [paused, current, certifications.length]);

//   if (!certifications.length) return null;

//   return (
//     <section className="relative overflow-x-hidden py-28">
//       {/* Background ambient animation */}
//       <motion.div
//         className="
//           absolute
//           inset-0
//           opacity-20
//           bg-[length:300%_300%]
//           bg-gradient-to-r
//           from-cyan-500/10
//           via-violet-500/10
//           to-blue-500/10
//           pointer-events-none
//         "
//         animate={{
//           backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//         }}
//         transition={{
//           duration: 18,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       />

//       <div className="container-width relative z-10">
//         {/* Header */}
//         <div className="mb-14 text-center">
//           <h2 className="text-4xl font-bold">Certifications</h2>
//           <p className="mt-3 text-neutral-500">
//             Continuous learning across modern technologies
//           </p>
//         </div>

//         {/* CAROUSEL CONTAINER */}
//         <div
//           className="relative mt-8 w-full"
//           onMouseEnter={() => setPaused(true)}
//           onMouseLeave={() => setPaused(false)}
//         >
//           {/* Previous Button */}
//           <button
//             onClick={previous}
//             className="
//               absolute
//               left-4
//               top-1/2
//               -translate-y-1/2
//               z-40
//               rounded-full
//               bg-white/10
//               p-3
//               text-white
//               backdrop-blur
//               transition
//               hover:bg-white/20
//               active:scale-95
//             "
//             aria-label="Previous slide"
//           >
//             ←
//           </button>

//           {/* Next Button */}
//           <button
//             onClick={next}
//             className="
//               absolute
//               right-4
//               top-1/2
//               -translate-y-1/2
//               z-40
//               rounded-full
//               bg-white/10
//               p-3
//               text-white
//               backdrop-blur
//               transition
//               hover:bg-white/20
//               active:scale-95
//             "
//             aria-label="Next slide"
//           >
//             →
//           </button>

//           {/* Swipe Track */}
//           <motion.div
//             drag="x"
//             dragConstraints={{ left: 0, right: 0 }}
//             onDragEnd={(_, info) => {
//               if (info.offset.x < -120) next();
//               if (info.offset.x > 120) previous();
//             }}
//             className="relative h-[510px] w-full overflow-hidden"
//           >
//             {certifications.map((cert, index) => {
//               // Even smoother: Compute relative circular offsets for all items
//               let offset = index - current;
//               if (offset > certifications.length / 2) {
//                 offset -= certifications.length;
//               }
//               if (offset < -certifications.length / 2) {
//                 offset += certifications.length;
//               }

//               const x = offset * 360;
//               const scale = 1 - Math.abs(offset) * 0.08;
//               const opacity = Math.max(0, 1 - Math.abs(offset) * 0.35);
//               const blur = `blur(${Math.abs(offset) * 2}px)`;
//               const z = 100 - Math.abs(offset);

//               return (
//                 <motion.div
//                   key={cert.id}
//                   layout
//                   animate={{
//                     x: `calc(-50% + ${x}px)`,
//                     scale,
//                     opacity,
//                     filter: blur,
//                   }}
//                   transition={{
//                     layout: {
//                       type: "spring",
//                       stiffness: 140,
//                       damping: 18,
//                       mass: 0.8,
//                     },
//                     x: {
//                       type: "spring",
//                       stiffness: 140,
//                       damping: 18,
//                       mass: 0.8,
//                     },
//                     scale: {
//                       type: "spring",
//                       stiffness: 150,
//                     },
//                     opacity: {
//                       duration: 0.35,
//                     },
//                   }}
//                   style={{
//                     zIndex: z,
//                   }}
//                   className="
//                     absolute
//                     left-1/2
//                     top-4
//                   "
//                 >
//                   {/* Subtle Floating Architecture */}
//                   <motion.div
//                     animate={{
//                       y: [0, -6, 0],
//                     }}
//                     transition={{
//                       duration: 4,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                       delay: index * 0.2,
//                     }}
//                   >
//                     <Card cert={cert} />
//                   </motion.div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>

//         {/* Premium dots with continuous internal timer tracks */}
//         <div className="mt-10 flex justify-center gap-2">
//           {certifications.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrent(index)}
//               aria-label={`Go to slide ${index + 1}`}
//               className="relative h-2 block overflow-hidden rounded-full focus:outline-none"
//             >
//               {/* Main Indicator Background Layer */}
//               <motion.div
//                 animate={{
//                   width: current === index ? 34 : 10,
//                   opacity: current === index ? 1 : 0.4,
//                 }}
//                 transition={{
//                   type: "spring",
//                   stiffness: 300,
//                   damping: 24,
//                 }}
//                 className={`
//                   h-full w-full relative overflow-hidden
//                   ${current === index ? "bg-cyan-950/40 border border-cyan-500/20" : "bg-white/25"}
//                 `}
//               >
//                 {/* Active continuous inner tracker bar */}
//                 {current === index && (
//                   <motion.div
//                     key={`bar-${current}-${paused}`}
//                     initial={{ left: "-100%" }}
//                     animate={paused ? { left: "-100%" } : { left: "0%" }}
//                     transition={{
//                       duration: AUTOPLAY_TIME / 1000,
//                       ease: "linear",
//                     }}
//                     className="absolute top-0 bottom-0 left-0 w-full bg-cyan-400 rounded-full"
//                   />
//                 )}
//               </motion.div>
//             </button>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="mt-12 flex justify-center">
//           <Link
//             href="/certifications"
//             className="
//               rounded-full
//               border
//               border-violet-500/30
//               bg-violet-500/10
//               px-6
//               py-3
//               text-sm
//               text-violet-300
//               transition
//               hover:bg-violet-500/20
//             "
//           >
//             View All Certifications →
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* =========================
//    CARD COMPONENT
// ========================= */
// function Card({ cert }: { cert: Certification }) {
//   const Logo = cert.categoryLogo;

//   return (
//     <motion.div
//       whileHover={{
//         y: -8,
//       }}
//       transition={{
//         type: "spring",
//         stiffness: 220,
//         damping: 18,
//       }}
//       className="
//         group
//         relative
//         w-[340px]
//         flex-shrink-0
//         overflow-hidden
//         rounded-3xl
//         border
//         border-white/10
//         bg-white/5
//         backdrop-blur-xl
//       "
//     >
//       {/* Hover Glow */}
//       <div
//         className="
//           absolute inset-0 opacity-0 transition-opacity duration-500
//           group-hover:opacity-100
//           bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-blue-500/10
//           z-10
//           pointer-events-none
//         "
//       />

//       {/* Floating category icon */}
//       <div
//         className="
//           absolute
//           right-5
//           top-5
//           z-20
//           flex
//           h-11
//           w-11
//           items-center
//           justify-center
//           rounded-xl
//           border
//           border-white/10
//           bg-black/30
//           backdrop-blur
//           text-white
//         "
//       >
//         {Logo && <Logo size={20} />}
//       </div>

//       {/* Image with Advanced Animation */}
//       <motion.div
//         className="relative h-[190px] overflow-hidden"
//         whileHover={{
//           scale: 1.05,
//           rotate: 0.4,
//         }}
//         transition={{
//           duration: 0.45,
//         }}
//       >
//         <Image
//           src={cert.image}
//           alt={cert.title}
//           fill
//           className="object-cover"
//         />
//       </motion.div>

//       {/* Content */}
//       <div className="relative p-5">
//         <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
//           {cert.categoryTitle}
//         </span>

//         <h3 className="mt-4 text-lg font-semibold text-white">
//           {cert.title}
//         </h3>

//         <p className="mt-1 text-sm text-neutral-400">
//           {cert.issuer}
//         </p>

//         <p className="mt-3 line-clamp-2 text-sm text-neutral-500">
//           {cert.description}
//         </p>

//         <div className="mt-5 flex items-center justify-between">
//           <span className="text-xs text-violet-400">
//             {cert.issueDate}
//           </span>

//           {cert.featured && (
//             <span className="rounded-full bg-violet-500/15 px-2 py-1 text-[10px] font-medium text-violet-300">
//               Featured
//             </span>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   );
// }


"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { certificationCategories } from "@/data/certifications";
import { IconType } from "react-icons";

/* =========================
   TYPES
========================= */
type Certification = {
  id: string;
  title: string;
  image: string;
  issuer: string;
  description: string;
  issueDate: string;
  featured?: boolean;
  showOnHome?: boolean;
  categoryTitle: string;
  categoryId: string;
  categoryLogo?: IconType;
};

export default function CertificationsPreview() {
  const certifications = useMemo(
    () =>
      certificationCategories
        .flatMap((category) =>
          category.items.map((item) => ({
            ...item,
            categoryTitle: category.title,
            categoryId: category.id,
            categoryLogo: category.logo,
          }))
        )
        .filter((c) => c.showOnHome),
    []
  );

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const controls = useAnimation();

  const AUTOPLAY = 3500;

  const next = () => {
    setCurrent((p) => (p + 1) % certifications.length);
  };

  const prev = () => {
    setCurrent(
      (p) => (p - 1 + certifications.length) % certifications.length
    );
  };

  /* =========================
     AUTO PLAY
  ========================= */
  useEffect(() => {
    if (paused) return;

    const id = setInterval(() => {
      next();
    }, AUTOPLAY);

    return () => clearInterval(id);
  }, [paused, certifications.length]);

  /* =========================
     SLIDE ANIMATION (REAL TRACK)
  ========================= */
  useEffect(() => {
    controls.start({
      x: `-${current * 360}px`,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 18,
      },
    });
  }, [current]);

  if (!certifications.length) return null;

  return (
    <section className="relative overflow-hidden py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-violet-500/5 to-blue-500/5 blur-3xl" />

      <div className="container-width relative z-10">
        {/* HEADER */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">Certifications</h2>
          <p className="mt-3 text-neutral-500">
            Continuous learning across modern technologies
          </p>
        </div>

        {/* CONTROLS */}
        <div
          className="relative overflow-visible py-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* BUTTONS */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 p-3 backdrop-blur hover:bg-white/20"
          >
            ←
          </button>

          <button
            onClick={next}
            className="absolute right-3 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 p-3 backdrop-blur hover:bg-white/20"
          >
            →
          </button>

          {/* TRACK */}
          <motion.div
            animate={controls}
            className="flex gap-6 will-change-transform"
            style={{ width: "max-content" }}
          >
            {/* duplicate for infinite loop */}
            {[...certifications, ...certifications].map((cert, i) => (
              <div key={i} className="w-[340px] flex-shrink-0">
                <Card cert={cert} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* DOTS */}
        <div className="mt-10 flex justify-center gap-2">
          {certifications.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="h-2 overflow-hidden rounded-full"
            >
              <div
                className={`h-2 transition-all ${
                  current === i
                    ? "w-8 bg-cyan-400"
                    : "w-2 bg-white/30"
                }`}
              />
            </button>
          ))}
        </div>

        {/* CTA */}
<div className="mt-12 flex justify-center">
  <Link
    href="/certifications"
    className="
      group relative overflow-hidden
      rounded-full
      border border-violet-500/20
      bg-gradient-to-r from-violet-500/10 via-cyan-500/10 to-blue-500/10
      px-7 py-3
      text-sm text-violet-200
      backdrop-blur-xl
      transition-all duration-300
      hover:scale-[1.05]
      hover:border-violet-400/40
    "
  >
    {/* animated shine */}
    <span className="
      absolute inset-0 -translate-x-full
      bg-gradient-to-r from-transparent via-white/10 to-transparent
      group-hover:translate-x-full
      transition-transform duration-700
    " />

    <span className="relative flex items-center gap-2">
      View All Certifications
      <span className="transition-transform group-hover:translate-x-1">
        →
      </span>
    </span>
  </Link>
</div>

      </div>
    </section>
  );
}

const themeColors = [
  "from-cyan-400 to-blue-500",
  "from-violet-400 to-pink-500",
  "from-blue-400 to-cyan-500",
  "from-indigo-400 to-violet-500",
  "from-sky-400 to-cyan-500",
];
function getColor(id: string) {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % themeColors.length;
  return themeColors[index];
}

/* =========================
   CARD (UNCHANGED STYLE)
========================= */
function Card({ cert }: { cert: Certification }) {
  const Logo = cert.categoryLogo;

  return (
    <motion.div
       whileHover={{
    y: -12,
    rotateX: 2,
    rotateY: -2,
    scale: 1.02,
  }}
    transition={{
    type: "spring",
    stiffness: 200,
    damping: 18,
  }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-blue-500/10" />

{Logo && (
  <motion.div
    className="absolute right-4 top-4 z-20"
    initial={{ rotateX: 20, rotateY: -20, scale: 0.9 }}
    animate={{
      rotateX: [20, 28, 20],
      rotateY: [-20, -10, -20],
      y: [0, -4, 0],
      scale: [0.95, 1, 0.95],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    whileHover={{
      rotateX: 0,
      rotateY: 0,
      scale: 1.15,
    }}
    style={{
      transformStyle: "preserve-3d",
      perspective: 1000,
    }}
  >
    {(() => {
      const color = getColor(cert.id);

      return (
        <>
          {/* Glow */}
          <div
            className={`absolute inset-0 rounded-xl blur-xl scale-150 bg-gradient-to-r ${color} opacity-40`}
          />
          {/* Shine sweep */}
<div className="
  absolute inset-0 opacity-0 group-hover:opacity-100
  transition-opacity duration-300
">
  <div className="
    absolute -left-1/2 top-0 h-full w-1/2
    rotate-12
    bg-gradient-to-r from-transparent via-white/10 to-transparent
    group-hover:translate-x-[220%]
    transition-transform duration-1000
  " />
</div>

          {/* Badge */}
          <div
            className="
              relative
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/10
              backdrop-blur-xl
              shadow-[0_10px_30px_rgba(0,0,0,0.3)]
            "
          >
            <Logo size={18} className="text-white" />
          </div>
        </>
      );
    })()}
  </motion.div>
)}

<motion.div
  className="relative h-[190px] overflow-hidden"
  whileHover={{
    scale: 1.08,
  }}
  transition={{ duration: 0.5 }}
>
  <motion.div
    className="absolute inset-0"
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.6 }}
  >
    <Image
      src={cert.image}
      alt={cert.title}
      fill
      className="object-cover"
    />
  </motion.div>
</motion.div>

      <div className="relative p-5">
        {/* <span className="text-xs text-cyan-300"> */}
        <motion.span
  whileHover={{ scale: 1.05 }}
  className="inline-flex text-xs text-cyan-300 transition"
>
          {cert.categoryTitle}
        {/* </span> */}
        </motion.span>

        <h3 className="mt-3 text-lg font-semibold">
          {cert.title}
        </h3>

        {/* <p className="text-sm text-neutral-400"> */}
        <p className="text-sm text-neutral-400 transition group-hover:text-neutral-200">
          {cert.issuer}</p>

        <p className="mt-2 text-sm text-neutral-500">
          {cert.description}
        </p>

        <div className="mt-4 flex justify-between text-xs text-violet-400">
          <span>{cert.issueDate}</span>
          {cert.featured && <span>Featured</span>}
        </div>
      </div>
    </motion.div>
  );
}