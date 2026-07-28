"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ArrowRight, Clock } from "lucide-react";
import type { BlogPost, Accent } from "@/data/blogs";

const ACCENT_GRADIENT: Record<Accent, string> = {
  blue: "from-blue-500 to-cyan-500",
  violet: "from-violet-500 to-blue-500",
  cyan: "from-cyan-500 to-blue-500",
  indigo: "from-indigo-500 to-violet-500",
  teal: "from-teal-500 to-cyan-500",
};

const ACCENT_TEXT: Record<Accent, string> = {
  blue: "text-blue-600 dark:text-blue-400",
  violet: "text-violet-600 dark:text-violet-400",
  cyan: "text-cyan-600 dark:text-cyan-400",
  indigo: "text-indigo-600 dark:text-indigo-400",
  teal: "text-teal-600 dark:text-teal-400",
};

export default function BlogListing({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const categories = useMemo(
    () => Array.from(new Set(posts.map((p) => p.category))),
    [posts]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCategory = !category || post.category === category;
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [posts, query, category]);

  return (
    <div>
      {/* Search + filters */}
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full rounded-xl border border-neutral-300 bg-white/60 py-2.5 pl-9 pr-3 text-sm text-neutral-900 outline-none transition-colors focus:border-violet-400 dark:border-neutral-700 dark:bg-neutral-900/60 dark:text-neutral-100"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setCategory(null)}
            className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
              category === null
                ? "border-violet-500 bg-violet-500/10 text-violet-600 dark:text-violet-400"
                : "border-neutral-300 text-neutral-600 hover:border-violet-400 dark:border-neutral-700 dark:text-neutral-400"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                category === cat
                  ? "border-violet-500 bg-violet-500/10 text-violet-600 dark:text-violet-400"
                  : "border-neutral-300 text-neutral-600 hover:border-violet-400 dark:border-neutral-700 dark:text-neutral-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-neutral-300 py-16 text-center text-neutral-500 dark:border-neutral-700 dark:text-neutral-400">
          No articles match &quot;{query}&quot;.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900/40"
              >
                <div className={`h-1.5 w-full bg-gradient-to-r ${ACCENT_GRADIENT[post.accent]}`} />

                <div className="flex flex-1 flex-col p-6">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${ACCENT_TEXT[post.accent]}`}
                  >
                    {post.category}
                  </span>

                  <h3 className="mt-2 text-lg font-bold leading-snug text-neutral-900 transition-colors group-hover:text-violet-600 dark:text-neutral-100 dark:group-hover:text-violet-400">
                    {post.title}
                  </h3>

                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4 text-xs text-neutral-500 dark:border-neutral-800 dark:text-neutral-500">
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} /> {post.readTime}
                    </span>
                    <span className="flex items-center gap-1 font-medium text-violet-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-violet-400">
                      Read <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
