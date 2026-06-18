"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form submitted:", form);
    alert("Message sent successfully (demo)");

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-10 top-10 -z-10 h-72 w-72 rounded-full bg-blue-400/5 blur-3xl" />
      <div className="absolute right-10 bottom-10 -z-10 h-80 w-80 rounded-full bg-violet-400/5 blur-3xl" />

      <div className="container-width relative">

        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Get In <span className="text-gradient">Touch</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
            Have a project, opportunity, or idea? Let’s build something amazing together.
          </p>
        </div>

        {/* Layout */}
        <div className="grid gap-10 lg:grid-cols-2">

          {/* LEFT PANEL (Info) */}
          <div className="space-y-6">

            {/* Info Card */}
            <div className="rounded-2xl border border-neutral-200/60 bg-white/50 p-6 backdrop-blur-xl shadow-sm transition hover:-translate-y-1 dark:border-neutral-800/60 dark:bg-neutral-900/30">
              <h3 className="mb-2 text-xl font-semibold">Contact Info</h3>

              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Prefer email or social? I usually respond within 24 hours.
              </p>

              <div className="mt-6 flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                <Mail size={18} />
                <span className="text-sm">your.email@example.com</span>
              </div>
            </div>

            {/* Social Card */}
            <div className="rounded-2xl border border-neutral-200/60 bg-white/50 p-6 backdrop-blur-xl shadow-sm transition hover:-translate-y-1 dark:border-neutral-800/60 dark:bg-neutral-900/30">

              <h3 className="mb-4 text-xl font-semibold">Connect</h3>

              <div className="flex gap-5 text-2xl text-neutral-700 dark:text-neutral-300">

                <Link
                  href="https://github.com/yourusername"
                  target="_blank"
                  className="transition hover:scale-110 hover:text-black dark:hover:text-white"
                >
                  <FaGithub />
                </Link>

                <Link
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  className="transition hover:scale-110 hover:text-black dark:hover:text-white"
                >
                  <FaLinkedin />
                </Link>

                <Link
                  href="mailto:your.email@example.com"
                  className="transition hover:scale-110 hover:text-black dark:hover:text-white"
                >
                  <Mail size={22} />
                </Link>

              </div>
            </div>
          </div>

          {/* RIGHT PANEL (FORM — now PRIMARY FOCUS) */}
          <div className="rounded-2xl border border-neutral-200/60 bg-white/70 p-8 backdrop-blur-2xl shadow-lg transition hover:-translate-y-1 dark:border-neutral-800/60 dark:bg-neutral-900/50">

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-neutral-300/60 bg-white/60 px-4 py-3 text-sm outline-none transition focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10 dark:border-neutral-700/60 dark:bg-neutral-900/40"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-neutral-300/60 bg-white/60 px-4 py-3 text-sm outline-none transition focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10 dark:border-neutral-700/60 dark:bg-neutral-900/40"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-xl border border-neutral-300/60 bg-white/60 px-4 py-3 text-sm outline-none transition focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10 dark:border-neutral-700/60 dark:bg-neutral-900/40"
                required
              />

              {/* PREMIUM BUTTON */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 px-6 py-3 font-medium text-white shadow-md transition hover:scale-[1.02] hover:shadow-xl"
              >
                Send Message
                <Send size={18} />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}