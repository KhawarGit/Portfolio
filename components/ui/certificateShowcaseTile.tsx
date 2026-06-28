"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Certification } from "@/data/certifications";

interface CertificateShowcaseTileProps {
  certificate: Certification;
}

export default function CertificateShowcaseTile({
  certificate,
}: CertificateShowcaseTileProps) {
  return (
    <motion.div
      whileHover={{
        rotateX: 6,
        rotateY: -6,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      style={{ transformStyle: "preserve-3d" }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        shadow-[0_20px_70px_rgba(0,0,0,0.4)]
      "
    >
      {/* Gradient Hover Border */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          bg-gradient-to-r
          from-cyan-500/10
          via-violet-500/10
          to-blue-500/10
        "
      />

      {/* Image Section */}
      <div className="relative h-52 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6 }}
          className="h-full w-full"
        >
          <Image
            src={certificate.image}
            alt={certificate.title}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Light Sweep Effect */}
        <div
          className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-700
          "
        >
          <div className="absolute -left-20 top-0 h-full w-20 rotate-12 bg-white/10 blur-xl animate-pulse" />
        </div>
      </div>

      {/* Content */}
      <div className="relative p-5">
        {/* Title */}
        <h3 className="text-lg font-semibold text-white">
          {certificate.title}
        </h3>

        <p className="mt-1 text-sm text-neutral-400">
          {certificate.issuer}
        </p>

        <p className="mt-3 line-clamp-2 text-sm text-neutral-500">
          {certificate.description}
        </p>

        {/* Skills */}
        {certificate.skills?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {certificate.skills.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.02]
                  px-2.5
                  py-1
                  text-[11px]
                  text-neutral-300
                "
              >
                {skill}
              </span>
            ))}
          </div>
        ) : null}

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between">
          <span className="text-xs text-neutral-500">
            {certificate.issueDate}
          </span>

          <motion.a
            href={certificate.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 3 }}
            className="
              text-xs
              text-cyan-400
              transition
              hover:text-cyan-300
            "
          >
            View →
          </motion.a>
        </div>
      </div>

      {/* Depth Layer */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-inner" />
    </motion.div>
  );
}