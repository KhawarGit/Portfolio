import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function BlogCta() {
  return (
    <div className="not-prose relative mt-14 overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-br from-blue-500/5 via-violet-500/5 to-cyan-500/5 p-8 dark:border-neutral-800 sm:p-10">
      <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative">
        <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">
          Found this useful?{" "}
          <span className="text-gradient">Let&apos;s build your next thing.</span>
        </h3>
        <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-400">
          I design and ship production web apps, secure APIs, and automation
          pipelines end to end — the same rigor you just read about, applied
          to your product. If you&apos;ve got an idea, an MVP to launch, or a
          system that needs hardening, I&apos;d like to hear about it.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg dark:bg-white dark:text-black"
          >
            <Mail size={16} />
            Let&apos;s Talk
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-700 transition-all duration-300 hover:border-violet-400 hover:text-violet-600 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-violet-500 dark:hover:text-violet-400"
          >
            See My Work
          </Link>
        </div>
      </div>
    </div>
  );
}
