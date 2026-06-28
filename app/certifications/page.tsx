
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  certificationCategories,
  type Certification,
} from "@/data/certifications";

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

<div className="relative group">
  <span className="
    absolute inset-0 rounded-2xl
    bg-gradient-to-r from-violet-500 to-cyan-500
    opacity-0 blur-xl transition-all duration-500
    group-hover:opacity-60
  " />

  <div className="
    relative flex h-14 w-14 items-center justify-center
    rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl
    transition-all duration-500
    group-hover:-translate-y-1 group-hover:rotate-3
    group-hover:border-cyan-400/60
    group-hover:shadow-[0_0_30px_rgba(34,211,238,.35)]
  ">
    <category.logo className="text-2xl text-white" />
  </div>
</div>

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