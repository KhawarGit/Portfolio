"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "lucide-react";
import { ChevronDown } from "lucide-react";
import type { TreeNode, Accent } from "@/data/blogs";

const ACCENT_STYLES: Record<
  Accent,
  { badge: string; line: string; ring: string; text: string }
> = {
  blue: {
    badge: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
    line: "border-blue-300 dark:border-blue-500/30",
    ring: "ring-blue-500/30",
    text: "text-blue-600 dark:text-blue-400",
  },
  violet: {
    badge: "bg-violet-500/15 text-violet-600 dark:text-violet-400",
    line: "border-violet-300 dark:border-violet-500/30",
    ring: "ring-violet-500/30",
    text: "text-violet-600 dark:text-violet-400",
  },
  cyan: {
    badge: "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400",
    line: "border-cyan-300 dark:border-cyan-500/30",
    ring: "ring-cyan-500/30",
    text: "text-cyan-600 dark:text-cyan-400",
  },
  indigo: {
    badge: "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400",
    line: "border-indigo-300 dark:border-indigo-500/30",
    ring: "ring-indigo-500/30",
    text: "text-indigo-600 dark:text-indigo-400",
  },
  teal: {
    badge: "bg-teal-500/15 text-teal-600 dark:text-teal-400",
    line: "border-teal-300 dark:border-teal-500/30",
    ring: "ring-teal-500/30",
    text: "text-teal-600 dark:text-teal-400",
  },
};

const iconMap = Icons as unknown as Record<string, Icons.LucideIcon>;

function NodeIcon({ name, className }: { name?: string; className?: string }) {
  const Icon = (name && iconMap[name]) || Icons.Circle;
  return <Icon className={className} />;
}

function TreeNodeItem({
  node,
  accent,
  depth,
  isLast,
}: {
  node: TreeNode;
  accent: Accent;
  depth: number;
  isLast: boolean;
}) {
  const [open, setOpen] = useState(depth < 2);
  const styles = ACCENT_STYLES[accent];
  const hasChildren = !!node.children?.length;

  return (
    <div className={depth > 0 ? `relative pl-6 ${isLast ? "" : `border-l ${styles.line}`}` : ""}>
      {depth > 0 && (
        <span
          className={`absolute left-0 top-5 h-px w-6 border-t ${styles.line}`}
          aria-hidden="true"
        />
      )}

      <div className={depth > 0 ? "pb-2 pt-0" : "pb-2"}>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className={`group flex w-full items-start gap-3 rounded-xl border border-neutral-200 bg-white/60 p-3 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/60 ${open ? `ring-1 ${styles.ring}` : ""}`}
        >
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${styles.badge}`}
          >
            <NodeIcon name={node.icon} className="h-[18px] w-[18px]" />
          </span>

          <span className="min-w-0 flex-1">
            <span className="flex items-center justify-between gap-2">
              <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                {node.label}
              </span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-neutral-400 transition-transform ${open ? "rotate-180" : ""}`}
              />
            </span>

            <AnimatePresence initial={false}>
              {open && (
                <motion.span
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="block overflow-hidden"
                >
                  <span className="mt-1.5 block text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {node.description}
                  </span>
                </motion.span>
              )}
            </AnimatePresence>
          </span>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && hasChildren && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {node.children!.map((child, i) => (
              <TreeNodeItem
                key={child.id}
                node={child}
                accent={accent}
                depth={depth + 1}
                isLast={i === node.children!.length - 1}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function BlogTree({
  title,
  description,
  root,
  accent,
}: {
  title: string;
  description?: string;
  root: TreeNode;
  accent: Accent;
}) {
  return (
    <div className="not-prose my-8 rounded-2xl border border-neutral-200 bg-neutral-50/60 p-5 dark:border-neutral-800 dark:bg-neutral-900/30 sm:p-6">
      <div className="mb-4">
        <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100">{title}</h4>
        {description && (
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{description}</p>
        )}
      </div>

      <TreeNodeItem node={root} accent={accent} depth={0} isLast />
    </div>
  );
}
