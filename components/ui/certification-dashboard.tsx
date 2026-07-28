"use client";

import { useMemo, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Layers, Building2, FolderKanban, TrendingUp } from "lucide-react";
import { certificationCategories } from "@/data/certifications";

/* Cool-family accent palette (blue -> violet -> cyan), reused across the
   dashboard so every chart/stat reads as one system. */
const ACCENTS = [
  "#3b82f6", // blue
  "#8b5cf6", // violet
  "#22d3ee", // cyan
  "#6366f1", // indigo
  "#0ea5e9", // sky
  "#14b8a6", // teal
  "#a855f7", // purple
  "#38bdf8", // light blue
];

function CountUp({ value, duration = 1200 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return <span ref={ref}>{display}</span>;
}

export default function CertificationDashboard() {
  const stats = useMemo(() => {
    const allItems = certificationCategories.flatMap((c) => c.items);

    const skillSet = new Set<string>();
    const issuerSet = new Set<string>();
    const typeCount: Record<string, number> = {};
    const skillCount: Record<string, number> = {};
    const issuerCount: Record<string, number> = {};

    for (const item of allItems) {
      item.skills?.forEach((s) => {
        skillSet.add(s);
        skillCount[s] = (skillCount[s] ?? 0) + 1;
      });
      issuerSet.add(item.issuer);
      issuerCount[item.issuer] = (issuerCount[item.issuer] ?? 0) + 1;
      const type = item.certificateType ?? "Course";
      typeCount[type] = (typeCount[type] ?? 0) + 1;
    }

    const categories = certificationCategories
      .map((c, i) => ({
        id: c.id,
        title: c.title,
        count: c.items.length,
        color: ACCENTS[i % ACCENTS.length],
      }))
      .sort((a, b) => b.count - a.count);

    const topSkills = Object.entries(skillCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 14);

    const topIssuers = Object.entries(issuerCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8);

    const types = Object.entries(typeCount).sort((a, b) => b[1] - a[1]);

    return {
      total: allItems.length,
      skills: skillSet.size,
      issuers: issuerSet.size,
      categoryCount: certificationCategories.length,
      categories,
      topSkills,
      topIssuers,
      types,
      maxCategoryCount: Math.max(...categories.map((c) => c.count), 1),
    };
  }, []);

  const kpis = [
    { label: "Certificates", value: stats.total, icon: Award, accent: "#3b82f6" },
    { label: "Unique Skills", value: stats.skills, icon: Layers, accent: "#8b5cf6" },
    { label: "Issuers", value: stats.issuers, icon: Building2, accent: "#22d3ee" },
    { label: "Categories", value: stats.categoryCount, icon: FolderKanban, accent: "#6366f1" },
  ];

  const typeTotal = stats.types.reduce((s, [, n]) => s + n, 0);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="mb-24 space-y-6"
    >
      {/* KPI ROW */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {kpis.map((k) => {
          const Icon = k.icon;
          return (
            <motion.div
              key={k.label}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 backdrop-blur-xl transition-colors hover:border-white/[0.16]"
            >
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
                style={{ backgroundColor: k.accent }}
              />
              <div className="mb-4 flex items-center justify-between">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${k.accent}1a`, color: k.accent }}
                >
                  <Icon size={18} />
                </span>
              </div>
              <div className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <CountUp value={k.value} />
                <span style={{ color: k.accent }}>+</span>
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-neutral-400">
                {k.label}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* MIDDLE ROW: category distribution + certificate types */}
      <div className="grid gap-4 lg:grid-cols-5">
        {/* Category distribution */}
        <motion.div
          variants={fadeUp}
          className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-xl lg:col-span-3"
        >
          <div className="mb-6 flex items-center gap-2">
            <TrendingUp size={16} className="text-blue-400" />
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300">
              Distribution by Domain
            </h3>
          </div>
          <div className="space-y-4">
            {stats.categories.map((cat, i) => (
              <div key={cat.id}>
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="text-neutral-300">{cat.title}</span>
                  <span className="font-mono text-xs text-neutral-500">{cat.count}</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/[0.04]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(cat.count / stats.maxCategoryCount) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${cat.color}, ${cat.color}aa)`,
                      boxShadow: `0 0 12px ${cat.color}55`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certificate types */}
        <motion.div
          variants={fadeUp}
          className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-xl lg:col-span-2"
        >
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-neutral-300">
            Credential Types
          </h3>
          {/* segmented bar */}
          <div className="mb-5 flex h-3 w-full overflow-hidden rounded-full">
            {stats.types.map(([type, count], i) => (
              <div
                key={type}
                title={`${type}: ${count}`}
                style={{
                  width: `${(count / typeTotal) * 100}%`,
                  backgroundColor: ACCENTS[i % ACCENTS.length],
                }}
              />
            ))}
          </div>
          <div className="space-y-2.5">
            {stats.types.map(([type, count], i) => (
              <div key={type} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2.5">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: ACCENTS[i % ACCENTS.length] }}
                  />
                  <span className="text-neutral-300">{type}</span>
                </div>
                <span className="font-mono text-xs text-neutral-500">{count}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* BOTTOM ROW: top skills + issuers */}
      <div className="grid gap-4 lg:grid-cols-5">
        {/* Top skills */}
        <motion.div
          variants={fadeUp}
          className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-xl lg:col-span-3"
        >
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-neutral-300">
            Most Frequent Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {stats.topSkills.map(([skill, count], i) => {
              const accent = ACCENTS[i % ACCENTS.length];
              return (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-transform hover:-translate-y-0.5"
                  style={{
                    borderColor: `${accent}40`,
                    backgroundColor: `${accent}14`,
                    color: "#e5e7eb",
                  }}
                >
                  {skill}
                  <span
                    className="rounded-full px-1.5 py-0.5 text-[10px] font-mono"
                    style={{ backgroundColor: `${accent}26`, color: accent }}
                  >
                    {count}
                  </span>
                </span>
              );
            })}
          </div>
        </motion.div>

        {/* Top issuers */}
        <motion.div
          variants={fadeUp}
          className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-xl lg:col-span-2"
        >
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-neutral-300">
            Leading Issuers
          </h3>
          <div className="space-y-3">
            {stats.topIssuers.map(([issuer, count], i) => {
              const max = stats.topIssuers[0][1];
              const accent = ACCENTS[i % ACCENTS.length];
              return (
                <div key={issuer} className="flex items-center gap-3">
                  <span className="w-32 shrink-0 truncate text-sm text-neutral-300" title={issuer}>
                    {issuer}
                  </span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.04]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(count / max) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.05 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: accent }}
                    />
                  </div>
                  <span className="w-5 shrink-0 text-right font-mono text-xs text-neutral-500">
                    {count}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
