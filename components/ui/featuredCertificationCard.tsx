"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Certification } from "@/data/certifications";

interface FeaturedCertificationCardProps {
  certification: Certification;
}

export default function FeaturedCertificationCard({
  certification,
}: FeaturedCertificationCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-gradient-to-br
        from-violet-500/[0.08]
        via-white/[0.02]
        to-cyan-500/[0.06]
        backdrop-blur-2xl
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      >
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-violet-500/15 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-500/15 blur-[120px]" />
      </div>

      <div className="relative grid lg:grid-cols-[1.2fr_1fr]">
        {/* Certificate Preview */}
        <div className="relative flex items-center justify-center p-10">
          <motion.div
            whileHover={{
              rotate: 0,
              scale: 1.02,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
            }}
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              shadow-[0_35px_90px_rgba(0,0,0,.45)]
              rotate-[-2deg]
            "
          >
            <Image
              src={certification.image}
              alt={certification.title}
              width={900}
              height={650}
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center p-10">
          <span
            className="
              w-fit
              rounded-full
              border
              border-violet-400/30
              bg-violet-500/10
              px-4
              py-1.5
              text-xs
              font-medium
              uppercase
              tracking-[0.25em]
              text-violet-300
            "
          >
            Featured Certificate
          </span>

          <h3 className="mt-6 text-3xl font-bold leading-tight">
            {certification.title}
          </h3>

          <p className="mt-3 text-lg text-neutral-300">
            {certification.issuer}
          </p>

          <p className="mt-6 leading-8 text-neutral-400">
            {certification.description}
          </p>

          {certification.skills?.length ? (
            <div className="mt-8 flex flex-wrap gap-2">
              {certification.skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-3
                    py-1.5
                    text-xs
                    text-neutral-300
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          ) : null}

          <div className="mt-10 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-500">
                Issued
              </p>

              <p className="mt-1 font-medium text-violet-300">
                {certification.issueDate}
              </p>
            </div>

            <motion.a
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-5
                py-2.5
                text-sm
                text-neutral-200
                transition-colors
                hover:border-violet-400/40
                hover:bg-violet-500/10
              "
            >
              View Credential →
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}