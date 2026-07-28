import type { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import BlogListing from "@/components/ui/blog-listing";
import { blogPosts } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical, in-depth articles on software delivery, secure API design, DevOps, and AI-assisted development — from real production experience.",
};

export default function BlogIndexPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <section className="section-padding pt-32">
        <div className="container-width">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex rounded-full border border-neutral-300 bg-white/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-600 backdrop-blur dark:border-neutral-700 dark:bg-neutral-900/50 dark:text-neutral-400">
              Blog & Insights
            </span>
            <h1 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              Notes from <span className="text-gradient">building production software</span>
            </h1>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              Deep dives on process, architecture, security, and the tools I
              use daily — written the way I&apos;d explain them to a client
              before we start building.
            </p>
          </div>

          <div className="mt-14">
            <BlogListing posts={blogPosts} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
