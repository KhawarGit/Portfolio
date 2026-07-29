"use client";

import { useState } from "react";
import * as Icons from "lucide-react";
import type { Branch, Accent } from "@/data/blogs";

const ACCENT_STYLES: Record<
  Accent,
  { badge: string; ring: string; line: string; rootBorder: string; rootBg: string }
> = {
  blue: {
    badge: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
    ring: "ring-blue-500/40",
    line: "bg-blue-300 dark:bg-blue-500/30",
    rootBorder: "border-blue-500",
    rootBg: "bg-blue-500/10 text-blue-700 dark:text-blue-300",
  },
  violet: {
    badge: "bg-violet-500/15 text-violet-600 dark:text-violet-400",
    ring: "ring-violet-500/40",
    line: "bg-violet-300 dark:bg-violet-500/30",
    rootBorder: "border-violet-500",
    rootBg: "bg-violet-500/10 text-violet-700 dark:text-violet-300",
  },
  cyan: {
    badge: "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400",
    ring: "ring-cyan-500/40",
    line: "bg-cyan-300 dark:bg-cyan-500/30",
    rootBorder: "border-cyan-500",
    rootBg: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
  },
  indigo: {
    badge: "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400",
    ring: "ring-indigo-500/40",
    line: "bg-indigo-300 dark:bg-indigo-500/30",
    rootBorder: "border-indigo-500",
    rootBg: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300",
  },
  teal: {
    badge: "bg-teal-500/15 text-teal-600 dark:text-teal-400",
    ring: "ring-teal-500/40",
    line: "bg-teal-300 dark:bg-teal-500/30",
    rootBorder: "border-teal-500",
    rootBg: "bg-teal-500/10 text-teal-700 dark:text-teal-300",
  },
};

const iconMap = Icons as unknown as Record<string, Icons.LucideIcon>;

function BranchIcon({ name, className }: { name?: string; className?: string }) {
  const Icon = (name && iconMap[name]) || Icons.Circle;
  return <Icon className={className} />;
}

export default function BlogBranchTree({
  title,
  description,
  root,
  rootIcon,
  branches,
  accent,
}: {
  title: string;
  description?: string;
  root: string;
  rootIcon?: string;
  branches: Branch[];
  accent: Accent;
}) {
  const [active, setActive] = useState<string | null>(null);
  const styles = ACCENT_STYLES[accent];

  return (
    <div className="not-prose my-8 rounded-2xl border border-neutral-200 bg-neutral-50/60 p-5 dark:border-neutral-800 dark:bg-neutral-900/30 sm:p-6">
      <div className="mb-6">
        <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100">{title}</h4>
        {description && (
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{description}</p>
        )}
      </div>

      {/* Root node */}
      <div className="flex flex-col items-center">
        <div
          className={`inline-flex items-center gap-2 rounded-xl border-2 px-4 py-2.5 text-sm font-bold ${styles.rootBorder} ${styles.rootBg}`}
        >
          <BranchIcon name={rootIcon} className="h-4 w-4" />
          {root}
        </div>
        <div className={`h-6 w-px ${styles.line}`} />
      </div>

      {/* Horizontal connector spanning the branch row, desktop only */}
      <div className={`mx-auto hidden h-px max-w-[85%] sm:block ${styles.line}`} />

      <div className="grid gap-5 pt-2 sm:grid-cols-2 sm:pt-0 lg:grid-cols-3">
        {branches.map((branch) => {
          const isActive = active === branch.id;
          return (
            <div key={branch.id} className="flex flex-col items-center">
              <div className={`hidden h-6 w-px sm:block ${styles.line}`} />

              <button
                type="button"
                onClick={() => setActive(isActive ? null : branch.id)}
                className={`w-full rounded-xl border bg-white p-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:bg-neutral-900 ${
                  isActive
                    ? `border-transparent ring-2 ${styles.ring}`
                    : "border-neutral-200 dark:border-neutral-800"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${styles.badge}`}
                  >
                    <BranchIcon name={branch.icon} className="h-4 w-4" />
                  </span>
                  <span className="font-bold text-neutral-900 dark:text-neutral-100">
                    {branch.label}
                  </span>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {branch.description}
                </p>

                <div className="mt-3 space-y-2.5 border-t border-neutral-100 pt-3 dark:border-neutral-800">
                  {branch.items.map((item) => (
                    <div key={item.id}>
                      <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                        {item.label}
                      </p>
                      <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
