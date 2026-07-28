import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import BlogContent from "@/components/ui/blog-content";
import BlogCta from "@/components/ui/blog-cta";
import ReadingProgress from "@/components/ui/reading-progress";
import { blogPosts, getBlogPostBySlug, getAdjacentPosts } from "@/data/blogs";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

const ACCENT_TEXT: Record<string, string> = {
  blue: "text-blue-600 dark:text-blue-400",
  violet: "text-violet-600 dark:text-violet-400",
  cyan: "text-cyan-600 dark:text-cyan-400",
  indigo: "text-indigo-600 dark:text-indigo-400",
  teal: "text-teal-600 dark:text-teal-400",
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const { previous, next } = getAdjacentPosts(slug);
  const publishedLabel = new Date(post.publishDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="relative min-h-screen">
      <ReadingProgress />
      <Navbar />

      <article className="section-padding pt-32">
        <div className="container-width">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 transition-colors hover:text-violet-600 dark:text-neutral-400 dark:hover:text-violet-400"
            >
              <ArrowLeft size={15} /> Back to all articles
            </Link>

            <div className="mt-6">
              <span
                className={`text-xs font-bold uppercase tracking-wider ${ACCENT_TEXT[post.accent]}`}
              >
                {post.category}
              </span>
              <h1 className="mt-3 text-3xl font-black tracking-tight text-neutral-900 dark:text-white sm:text-4xl md:text-5xl">
                {post.title}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                {post.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-neutral-200 py-4 text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} /> {publishedLabel}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} /> {post.readTime}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10">
              <BlogContent blocks={post.content} accent={post.accent} />
            </div>

            <BlogCta />

            {(previous || next) && (
              <nav className="mt-12 grid gap-4 border-t border-neutral-200 pt-8 dark:border-neutral-800 sm:grid-cols-2">
                {previous ? (
                  <Link
                    href={`/blog/${previous.slug}`}
                    className="group rounded-xl border border-neutral-200 p-4 transition-colors hover:border-violet-400 dark:border-neutral-800 dark:hover:border-violet-500"
                  >
                    <span className="flex items-center gap-1.5 text-xs font-medium text-neutral-500 dark:text-neutral-400">
                      <ArrowLeft size={13} /> Previous
                    </span>
                    <span className="mt-1 block font-semibold text-neutral-900 group-hover:text-violet-600 dark:text-neutral-100 dark:group-hover:text-violet-400">
                      {previous.title}
                    </span>
                  </Link>
                ) : (
                  <span />
                )}

                {next && (
                  <Link
                    href={`/blog/${next.slug}`}
                    className="group rounded-xl border border-neutral-200 p-4 text-right transition-colors hover:border-violet-400 dark:border-neutral-800 dark:hover:border-violet-500"
                  >
                    <span className="flex items-center justify-end gap-1.5 text-xs font-medium text-neutral-500 dark:text-neutral-400">
                      Next <ArrowRight size={13} />
                    </span>
                    <span className="mt-1 block font-semibold text-neutral-900 group-hover:text-violet-600 dark:text-neutral-100 dark:group-hover:text-violet-400">
                      {next.title}
                    </span>
                  </Link>
                )}
              </nav>
            )}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
