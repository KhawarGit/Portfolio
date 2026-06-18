"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden">
      {/* Softer background (reduced noise) */}
      <div className="absolute inset-0 -z-10 bg-neutral-50 dark:bg-neutral-950" />

      {/* Very subtle glow (not overpowering) */}
      <div className="absolute left-10 bottom-10 -z-10 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="absolute right-10 top-10 -z-10 h-72 w-72 rounded-full bg-violet-500/5 blur-3xl" />

      <div className="container-width section-padding">
        {/* Main box */}
        <div className="rounded-2xl border border-neutral-200 bg-white px-8 py-10 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">

          <div className="grid gap-10 md:grid-cols-3">

            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                Khawar <span className="text-gradient">Khan</span>
              </h3>

              <p className="mt-4 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                Full Stack Developer focused on building scalable systems,
                automation tools, and clean user experiences.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-neutral-900 dark:text-white">
                Quick Links
              </h4>

              <div className="flex flex-col gap-2 text-sm">
                {["projects", "about", "skills", "contact"].map((id) => (
                  <Link
                    key={id}
                    href={`#${id}`}
                    className="text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white transition"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-neutral-900 dark:text-white">
                Connect
              </h4>

              <div className="flex gap-5 text-xl text-neutral-700 dark:text-neutral-300">
                <Link
                  href="https://github.com/yourusername"
                  target="_blank"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  <FaGithub />
                </Link>

                <Link
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  <FaLinkedin />
                </Link>

                <Link
                  href="mailto:your.email@example.com"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  <Mail size={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-neutral-200 dark:border-neutral-800" />

          {/* Bottom */}
          <div className="flex flex-col gap-2 text-center text-sm text-neutral-600 dark:text-neutral-400 md:flex-row md:justify-between">
            <p>© {new Date().getFullYear()} Khawar Khan</p>
            <p>Built with Next.js + Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}