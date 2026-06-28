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

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { certificationCategories } from "@/data/certifications";
import { IconType } from "react-icons";

/* =========================
   CARD COMPONENT
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
  // categoryLogo?: string;

    // FIXED HERE 👇
  categoryLogo?: IconType;

};

export default function CertificationsPreview() {

  const certifications = certificationCategories
    .flatMap((category) =>
      category.items.map((item) => ({
        ...item,
        categoryTitle: category.title,
        categoryId: category.id,
        categoryLogo: category.logo,
      }))
    )
    .filter((certificate) => certificate.showOnHome);

  if (!certifications.length) return null;

  return (
    <section className="relative overflow-x-hidden py-28">
      <div className="container-width">

        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">Certifications</h2>
          <p className="mt-3 text-neutral-500">
            Continuous learning across modern technologies
          </p>
        </div>

        {/* SAFE MARQUEE WRAPPER */}
        <div className="relative w-full overflow-hidden">

          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-40 bg-gradient-to-r from-background via-background/70 to-transparent" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-40 bg-gradient-to-l from-background via-background/70 to-transparent" />

          {/* TRACK */}
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >

            {/* SET 1 */}
            <div className="flex gap-6">
              {certifications.map((cert, index) => (
                <Card key={`a-${cert.id}-${index}`} cert={cert} />
              ))}
            </div>

            {/* SET 2 (duplicate for seamless loop) */}
            <div className="flex gap-6" aria-hidden="true">
              {certifications.map((cert, index) => (
                <Card key={`b-${cert.id}-${index}`} cert={cert} />
              ))}
            </div>

          </motion.div>
        </div>

        {/* Animated Dots */}
        <div className="mt-10 flex justify-center gap-2">
          {certifications.map((_, index) => (
            <motion.div
              key={index}
              className="h-2 w-2 rounded-full bg-white/25"
              animate={{
                scale: [1, 1.6, 1],
                opacity: [0.25, 1, 0.25],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: index * 0.18,
              }}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/certifications"
            className="
              rounded-full
              border
              border-violet-500/30
              bg-violet-500/10
              px-6
              py-3
              text-sm
              text-violet-300
              transition
              hover:bg-violet-500/20
            "
          >
            View All Certifications →
          </Link>
        </div>

      </div>
    </section>
  );
}



function Card({ cert }: { cert: Certification }) {
  return (
    <div
      className="
        group
        relative
        min-w-[340px]
        flex-shrink-0
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
      "
    >
      {/* Hover Glow */}
      <div className="
        absolute inset-0 opacity-0 transition-opacity duration-500
        group-hover:opacity-100
        bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-blue-500/10
      " />

      {/* Image */}
      <div className="relative h-[190px]">
        <Image
          src={cert.image}
          alt={cert.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="relative p-5">
        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
          {cert.categoryTitle}
        </span>

        <h3 className="mt-4 text-lg font-semibold">
          {cert.title}
        </h3>

        <p className="mt-1 text-sm text-neutral-400">
          {cert.issuer}
        </p>

        <p className="mt-3 line-clamp-2 text-sm text-neutral-500">
          {cert.description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-xs text-violet-400">
            {cert.issueDate}
          </span>

          {cert.featured && (
            <span className="rounded-full bg-violet-500/15 px-2 py-1 text-[10px] font-medium text-violet-300">
              Featured
            </span>
          )}
        </div>
      </div>
    </div>
  );
}