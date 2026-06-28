"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Certification } from "@/data/certifications";

interface FeaturedCertificateProps {
  certificate: Certification;
}

export default function FeaturedCertificate({
  certificate,
}: FeaturedCertificateProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      whileHover={{
        y: -4,
      }}
      className="
      group
      relative
      mb-14
      overflow-hidden
      rounded-[34px]
      border
      border-white/10
      bg-gradient-to-br
      from-white/[0.05]
      via-white/[0.03]
      to-white/[0.02]
      backdrop-blur-2xl
      shadow-[0_30px_80px_rgba(0,0,0,.45)]
    "
    >
      {/* Ambient Glow */}
      <div className="absolute -left-28 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

      {/* Moving Border */}
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
        <div className="absolute inset-0 rounded-[34px] bg-gradient-to-r from-cyan-500/10 via-transparent to-violet-500/10" />
      </div>

      <div className="relative grid lg:grid-cols-[1.1fr_.9fr]">
        {/* Image */}
        <div className="relative overflow-hidden">
          <motion.div
            whileHover={{
              scale: 1.04,
            }}
            transition={{
              duration: 0.6,
            }}
            className="relative h-[520px]"
          >
            <Image
              src={certificate.image}
              alt={certificate.title}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-transparent" />

          {/* Floating Badge */}
          <div className="absolute left-8 top-8 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-xl">
            Featured
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-10 lg:p-14">
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.15,
            }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
              Professional Certification
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight">
              {certificate.title}
            </h2>

            <p className="mt-3 text-lg text-neutral-300">
              {certificate.issuer}
            </p>

            <p className="mt-8 max-w-xl leading-8 text-neutral-400">
              {certificate.description}
            </p>

            {/* Skills */}
            {certificate.skills?.length ? (
              <div className="mt-10 flex flex-wrap gap-3">
                {certificate.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{
                      y: -2,
                    }}
                    className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-4
                    py-2
                    text-sm
                    text-neutral-300
                    backdrop-blur-xl
                  "
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            ) : null}

            {/* Bottom */}
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  Issued
                </p>

                <p className="mt-1 text-lg font-medium">
                  {certificate.issueDate}
                </p>
              </div>

              <motion.a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                rounded-full
                border
                border-cyan-500/20
                bg-cyan-500/10
                px-6
                py-3
                text-sm
                font-medium
                text-cyan-300
                transition
                hover:bg-cyan-500/20
              "
              >
                View Credential →
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}