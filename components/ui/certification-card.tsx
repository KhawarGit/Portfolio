"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import TimelineNode from "@/components/ui/timeline-node";
import SpotlightCard from "@/components/ui/spotlight-card";

interface CertificationItem {
  title: string;
  description: string;
  image: string;
  date: string;
  link: string;
}

interface CertificationCardProps {
  item: CertificationItem;
  align: "left" | "right";
}

export default function CertificationCard({
  item,
  align,
}: CertificationCardProps) {
  const isLeft = align === "left";

  return (
    // <motion.div
    //   initial={{
    //     opacity: 0,
    //     x: isLeft ? -80 : 80,
    //   }}
    //   whileInView={{
    //     opacity: 1,
    //     x: 0,
    //   }}
    //   viewport={{ once: true, amount: 0.3 }}
    //   transition={{
    //     duration: 0.7,
    //     ease: "easeOut",
    //   }}
    //   className="relative grid items-center lg:grid-cols-2"
    // >
    //   {/* Timeline Node (Desktop) */}
    //   {/* <div className="absolute left-1/2 top-1/2 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 shadow-lg dark:border-neutral-950 lg:block" /> */}
    //   <TimelineNode />
    //   {/* Left Card */}
    //   {isLeft && (
    //     <div className="lg:pr-12">
    //       <CardContent item={item} />
    //     </div>
    //   )}

    //   {/* Spacer */}
    //   <div className="hidden lg:block" />

    //   {/* Right Card */}
    //   {!isLeft && (
    //     <>
    //       <div className="hidden lg:block" />

    //       <div className="lg:pl-12">
    //         <CardContent item={item} />
    //       </div>
    //     </>
    //   )}

    //   {/* Mobile Layout */}
    //   <div className="lg:hidden">
    //     <CardContent item={item} />
    //   </div>
    // </motion.div>
    // <motion.div
    //   initial={{
    //     opacity: 0,
    //     x: isLeft ? -120 : 120,
    //   }}
    //   whileInView={{
    //     opacity: 1,
    //     x: 0,
    //   }}
    //   viewport={{ once: true, amount: 0.3 }}
    //   transition={{
    //     duration: 0.8,
    //     ease: "easeOut",
    //   }}
    //   className="relative flex w-full items-center"
    // >
    //   {/* Timeline Node */}
    //   <TimelineNode />

    //   {/* Desktop */}
    //   <div className="hidden w-full lg:flex">
    //     {isLeft ? (
    //       <>
    //         {/* Left Card */}
    //         <div className="w-1/2 pr-10">
    //           <CardContent item={item} />
    //         </div>

    //         {/* Empty Right */}
    //         <div className="w-1/2" />
    //       </>
    //     ) : (
    //       <>
    //         {/* Empty Left */}
    //         <div className="w-1/2" />

    //         {/* Right Card */}
    //         <div className="w-1/2 pl-10">
    //           <CardContent item={item} />
    //         </div>
    //       </>
    //     )}
    //   </div>

    //   {/* Mobile */}
    //   <div className="w-full lg:hidden">
    //     <CardContent item={item} />
    //   </div>
    // </motion.div>

    <motion.div
      initial={{
        opacity: 0,
        x: isLeft ? -120 : 120,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      // viewport={{ once: true, amount: 0.3 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        // duration: 0.8,
        // ease: "easeOut",
        type: "spring",
        stiffness: 90,
        damping: 18,
      }}
      className="relative flex w-full items-center"
    >
      {/* Timeline Node */}
      <TimelineNode />

      {/* Desktop Layout */}
      <div className="hidden w-full lg:flex">
        {isLeft ? (
          <>
            {/* Left Card */}
            <div className="relative w-1/2 pr-12">
              {/* Connector to timeline */}
              <div className="absolute right-0 top-1/2 h-[2px] w-12 -translate-y-1/2 bg-gradient-to-r from-cyan-400 to-violet-500" />

              <CardContent item={item} />
            </div>

            {/* Empty right half */}
            <div className="w-1/2" />
          </>
        ) : (
          <>
            {/* Empty left half */}
            <div className="w-1/2" />

            {/* Right Card */}
            <div className="relative w-1/2 pl-12">
              {/* Connector to timeline */}
              <div className="absolute left-0 top-1/2 h-[2px] w-12 -translate-y-1/2 bg-gradient-to-r from-violet-500 to-cyan-400" />

              <CardContent item={item} />
            </div>
          </>
        )}
      </div>

      {/* Mobile Layout */}
      <div className="w-full lg:hidden">
        <CardContent item={item} />
      </div>
    </motion.div>

  );
}



function CardContent({ item }: { item: CertificationItem }) {
  return (
    <SpotlightCard className="rounded-3xl transition-transform duration-300 hover:scale-[1.02]">
      {/* <div className="group overflow-hidden rounded-3xl border border-neutral-200/70 bg-white/80 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-neutral-800/70 dark:bg-neutral-900/70"> */}
      <div className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-neutral-300
        bg-white
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-300
        hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)]
        dark:border-neutral-700
        dark:bg-neutral-900
        dark:hover:border-blue-500/40
        dark:hover:shadow-[0_20px_60px_rgba(59,130,246,0.10)]
      ">
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" /> */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {item.date}
          </span> */}

          <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
            {item.date}
          </span>

          {/* <h3 className="mt-2 text-2xl font-bold">{item.title}</h3> */}
          <h3 className="mt-2 text-2xl font-bold text-neutral-900 dark:text-white">{item.title}</h3>

          <p className="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-400">
            {item.description}
          </p>

          <Link
            href={item.link}
            target="_blank"
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-blue-600
              to-violet-600
              px-4
              py-2.5
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-lg
              hover:shadow-blue-500/25
              "
          >
            View Credential
            <ExternalLink size={16} />
          </Link>
        </div>
      </div>
    </SpotlightCard>
  );
}