"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowRight, ArrowLeft, ChevronDown } from "lucide-react";
import type { SequenceActor, SequenceStep, Accent } from "@/data/blogs";

const ACCENT_STYLES: Record<
  Accent,
  { text: string; ring: string; dot: string }
> = {
  blue: { text: "text-blue-600 dark:text-blue-400", ring: "ring-blue-500/30", dot: "bg-blue-500" },
  violet: { text: "text-violet-600 dark:text-violet-400", ring: "ring-violet-500/30", dot: "bg-violet-500" },
  cyan: { text: "text-cyan-600 dark:text-cyan-400", ring: "ring-cyan-500/30", dot: "bg-cyan-500" },
  indigo: { text: "text-indigo-600 dark:text-indigo-400", ring: "ring-indigo-500/30", dot: "bg-indigo-500" },
  teal: { text: "text-teal-600 dark:text-teal-400", ring: "ring-teal-500/30", dot: "bg-teal-500" },
};

const iconMap = Icons as unknown as Record<string, Icons.LucideIcon>;

function ActorIcon({ name, className }: { name?: string; className?: string }) {
  const Icon = (name && iconMap[name]) || Icons.Circle;
  return <Icon className={className} />;
}

export default function BlogSequence({
  title,
  description,
  actors,
  steps,
  accent,
}: {
  title: string;
  description?: string;
  actors: SequenceActor[];
  steps: SequenceStep[];
  accent: Accent;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const styles = ACCENT_STYLES[accent];
  const actorById = Object.fromEntries(actors.map((a) => [a.id, a]));

  return (
    <div className="not-prose my-8 rounded-2xl border border-neutral-200 bg-neutral-50/60 p-5 dark:border-neutral-800 dark:bg-neutral-900/30 sm:p-6">
      <div className="mb-5">
        <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100">{title}</h4>
        {description && (
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{description}</p>
        )}
      </div>

      {/* Actor legend */}
      <div className="mb-6 flex flex-wrap gap-2">
        {actors.map((actor) => (
          <span
            key={actor.id}
            className="flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
          >
            <ActorIcon name={actor.icon} className={`h-3.5 w-3.5 ${styles.text}`} />
            {actor.label}
          </span>
        ))}
      </div>

      {/* Steps timeline */}
      <div className="relative space-y-3 border-l border-dashed border-neutral-300 pl-6 dark:border-neutral-700">
        {steps.map((step, i) => {
          const from = actorById[step.from];
          const to = actorById[step.to];
          const isOpen = openIndex === i;
          const Arrow = step.isReturn ? ArrowLeft : ArrowRight;

          return (
            <div key={i} className="relative">
              <span
                className={`absolute -left-[29px] top-3 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white ${styles.dot}`}
              >
                {i + 1}
              </span>

              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className={`flex w-full flex-wrap items-center gap-2 rounded-xl border border-neutral-200 bg-white p-3 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 ${isOpen ? `ring-1 ${styles.ring}` : ""}`}
              >
                <span className="rounded-md bg-neutral-100 px-2 py-1 text-xs font-semibold text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                  {from?.label ?? step.from}
                </span>

                <span className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                  {step.isReturn && (
                    <span className="w-3 border-t border-dashed border-neutral-400" />
                  )}
                  <Arrow className="h-3.5 w-3.5" />
                  <span className="font-mono">{step.label}</span>
                </span>

                <span className="rounded-md bg-neutral-100 px-2 py-1 text-xs font-semibold text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                  {to?.label ?? step.to}
                </span>

                {step.description && (
                  <ChevronDown
                    className={`ml-auto h-4 w-4 text-neutral-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                )}
              </button>

              <AnimatePresence initial={false}>
                {isOpen && step.description && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-3 pb-1 pt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                      {step.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
