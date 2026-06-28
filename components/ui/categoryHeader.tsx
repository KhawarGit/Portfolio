// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";

// interface CategoryHeaderProps {
//   title: string;
//   description?: string;
//   logo: string;
//   totalCertificates: number;
//   featuredCount: number;
// }

// export default function CategoryHeader({
//   title,
//   description,
//   logo,
//   totalCertificates,
//   featuredCount,
// }: CategoryHeaderProps) {
//   return (
//     <motion.header
//       initial={{ opacity: 0, y: 24 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//       className="relative mb-12"
//     >
//       {/* Background glow */}
//       <div className="absolute -top-16 left-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
//       <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

//       <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
//         {/* LEFT SIDE */}
//         <div className="flex items-center gap-6">
//           {/* LOGO BUTTON (UPDATED STYLE) */}
//           <Link href="#" className="group relative">
//             {/* Glow Layer */}
//             <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-60" />

//             {/* Icon Container */}
//             <div
//               className="
//                 relative
//                 flex h-16 w-16 items-center justify-center
//                 rounded-2xl
//                 border border-white/10
//                 bg-white/5
//                 backdrop-blur-xl
//                 transition-all duration-500
//                 group-hover:-translate-y-2
//                 group-hover:rotate-6
//                 group-hover:border-cyan-400/60
//                 group-hover:shadow-[0_0_30px_rgba(34,211,238,.35)]
//               "
//             >
//               <Image
//                 src={logo}
//                 alt={title}
//                 width={34}
//                 height={34}
//                 className="transition-all duration-500 group-hover:scale-110"
//               />
//             </div>
//           </Link>

//           {/* TEXT */}
//           <div>
//             <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">
//               Category
//             </p>

//             <h2 className="text-3xl font-bold tracking-tight">
//               {title}
//             </h2>

//             {description && (
//               <p className="mt-2 max-w-xl text-neutral-400 leading-7">
//                 {description}
//               </p>
//             )}
//           </div>
//         </div>

//         {/* RIGHT STATS */}
//         <div className="flex gap-4">
//           <StatCard value={totalCertificates} label="Total" />
//           <StatCard value={featuredCount} label="Featured" />
//         </div>
//       </div>

//       {/* divider */}
//       <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
//     </motion.header>
//   );
// }

// function StatCard({
//   value,
//   label,
// }: {
//   value: number;
//   label: string;
// }) {
//   return (
//     <motion.div
//       whileHover={{ y: -3, scale: 1.03 }}
//       className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 backdrop-blur-xl"
//     >
//       <p className="text-center text-2xl font-bold">{value}</p>
//       <p className="mt-1 text-center text-xs uppercase tracking-widest text-neutral-500">
//         {label}
//       </p>
//     </motion.div>
//   );
// }


// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import type { IconType } from "react-icons";

// interface CategoryHeaderProps {
//   title: string;
//   description?: string;
//   Icon: IconType; // ✅ changed from logo → Icon
//   totalCertificates: number;
//   featuredCount: number;
// }

// export default function CategoryHeader({
//   title,
//   description,
//   Icon,
//   totalCertificates,
//   featuredCount,
// }: CategoryHeaderProps) {
//   return (
//     <motion.header
//       initial={{ opacity: 0, y: 24 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//       className="relative mb-12"
//     >
//       {/* glow */}
//       <div className="absolute -top-16 left-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
//       <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

//       <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        
//         {/* LEFT */}
//         <div className="flex items-center gap-6">

//           {/* ICON BUTTON */}
//           <Link href="#" className="group relative">
//             <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-60" />

//             <div className="
//               relative flex h-16 w-16 items-center justify-center
//               rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl
//               transition-all duration-500
//               group-hover:-translate-y-2 group-hover:rotate-6
//               group-hover:border-cyan-400/60
//               group-hover:shadow-[0_0_30px_rgba(34,211,238,.35)]
//             ">
//               <Icon className="text-3xl text-white transition group-hover:scale-110 group-hover:text-cyan-400" />
//             </div>
//           </Link>

//           {/* TEXT */}
//           <div>
//             <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">
//               Category
//             </p>

//             <h2 className="text-3xl font-bold">{title}</h2>

//             {description && (
//               <p className="mt-2 max-w-xl text-neutral-400">
//                 {description}
//               </p>
//             )}
//           </div>
//         </div>

//         {/* STATS */}
//         <div className="flex gap-4">
//           <StatCard value={totalCertificates} label="Total" />
//           <StatCard value={featuredCount} label="Featured" />
//         </div>
//       </div>

//       <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
//     </motion.header>
//   );
// }

// function StatCard({ value, label }: { value: number; label: string }) {
//   return (
//     <motion.div
//       whileHover={{ y: -3, scale: 1.03 }}
//       className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 backdrop-blur-xl"
//     >
//       <p className="text-center text-2xl font-bold">{value}</p>
//       <p className="mt-1 text-center text-xs uppercase tracking-widest text-neutral-500">
//         {label}
//       </p>
//     </motion.div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import type { IconType } from "react-icons";

interface CategoryHeaderProps {
  title: string;
  description?: string;
  Icon: IconType;
  totalCertificates: number;
  featuredCount: number;
}

export default function CategoryHeader({
  title,
  description,
  Icon,
  totalCertificates,
  featuredCount,
}: CategoryHeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative mb-14"
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute -top-24 left-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        {/* LEFT CARD */}
        <Tilt
          tiltMaxAngleX={18}
          tiltMaxAngleY={18}
          perspective={1200}
          scale={1.05}
          glareEnable={true}
          glareMaxOpacity={0.2}
          glareColor="#7c3aed"
          className="w-fit"
        >
          <div className="relative group flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.3)]">

            {/* hover glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-violet-500/20 blur-2xl opacity-0 transition duration-500 group-hover:opacity-70" />

            {/* ICON (REAL 3D FLOAT) */}
            <motion.div
              animate={{
                y: [0, -6, 0],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                rotateX: 20,
                rotateY: -20,
                scale: 1.15,
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 shadow-inner"
            >
              <Icon className="text-3xl text-cyan-400" />
            </motion.div>

            {/* TEXT */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
                Category
              </p>

              <h2 className="text-2xl font-bold">{title}</h2>

              {description && (
                <p className="mt-1 max-w-md text-sm text-neutral-400">
                  {description}
                </p>
              )}
            </div>
          </div>
        </Tilt>

        {/* RIGHT STATS */}
        <div className="flex gap-4">

          <StatBox
            label="Total Certificates"
            value={totalCertificates}
            accent="cyan"
          />

          <StatBox
            label="Featured"
            value={featuredCount}
            accent="violet"
          />
        </div>
      </div>

      {/* divider */}
      <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </motion.header>
  );
}

/* ================= 3D STAT BOX ================= */
function StatBox({
  label,
  value,
  accent,
}: {
  label: string;
  value: number;
  accent: "cyan" | "violet";
}) {
  return (
    <Tilt
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      perspective={1200}
      scale={1.05}
      glareEnable={true}
      glareMaxOpacity={0.2}
      glareColor={accent === "cyan" ? "#22d3ee" : "#a78bfa"}
      className="w-fit"
    >
      <motion.div
        whileHover={{
          y: -6,
          scale: 1.05,
        }}
        className="relative group overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
      >
        {/* glow background */}
        <div
          className={`
            absolute inset-0 opacity-0 blur-2xl transition duration-500
            group-hover:opacity-100
            ${accent === "cyan" ? "bg-cyan-500/20" : "bg-violet-500/20"}
          `}
        />

        {/* content */}
        <p className="relative z-10 text-center text-2xl font-bold">
          {value}
        </p>

        <p className="relative z-10 mt-1 text-center text-xs uppercase tracking-widest text-neutral-500">
          {label}
        </p>
      </motion.div>
    </Tilt>
  );
}