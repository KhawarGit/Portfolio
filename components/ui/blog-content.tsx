import { Info, TriangleAlert, Lightbulb } from "lucide-react";
import type { ContentBlock, Accent } from "@/data/blogs";
import CodeBlock from "@/components/ui/code-block";
import BlogTree from "@/components/ui/blog-tree";

const CALLOUT_STYLES = {
  info: {
    icon: Info,
    className:
      "border-blue-200 bg-blue-50/60 text-blue-900 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-200",
    iconClassName: "text-blue-500",
  },
  warning: {
    icon: TriangleAlert,
    className:
      "border-amber-200 bg-amber-50/60 text-amber-900 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-200",
    iconClassName: "text-amber-500",
  },
  tip: {
    icon: Lightbulb,
    className:
      "border-violet-200 bg-violet-50/60 text-violet-900 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-200",
    iconClassName: "text-violet-500",
  },
} as const;

export default function BlogContent({
  blocks,
  accent,
}: {
  blocks: ContentBlock[];
  accent: Accent;
}) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p
                key={i}
                className="text-[17px] leading-8 text-neutral-700 dark:text-neutral-300"
              >
                {block.text}
              </p>
            );

          case "heading":
            return (
              <h2
                key={i}
                className="pt-4 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white"
              >
                {block.text}
              </h2>
            );

          case "list": {
            const ListTag = block.ordered ? "ol" : "ul";
            return (
              <ListTag
                key={i}
                className={`space-y-2 pl-5 text-[17px] leading-7 text-neutral-700 dark:text-neutral-300 ${
                  block.ordered ? "list-decimal" : "list-disc"
                }`}
              >
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ListTag>
            );
          }

          case "code":
            return <CodeBlock key={i} snippet={block.snippet} />;

          case "callout": {
            const style = CALLOUT_STYLES[block.variant];
            const Icon = style.icon;
            return (
              <div
                key={i}
                className={`not-prose flex gap-3 rounded-xl border p-4 text-[15px] leading-relaxed ${style.className}`}
              >
                <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${style.iconClassName}`} />
                <p>{block.text}</p>
              </div>
            );
          }

          case "tree":
            return (
              <BlogTree
                key={i}
                title={block.title}
                description={block.description}
                root={block.root}
                accent={accent}
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
