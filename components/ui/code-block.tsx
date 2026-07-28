"use client";

import { useState } from "react";
import { Highlight, themes, Prism } from "prism-react-renderer";
import { Check, Copy } from "lucide-react";
import type { CodeSnippet } from "@/data/blogs";

export default function CodeBlock({ snippet }: { snippet: CodeSnippet }) {
  const [copied, setCopied] = useState(false);
  const code = snippet.code.trim();
  // Fall back to plain text for any language Prism's bundled grammar
  // set doesn't include, instead of letting Highlight throw.
  const language = Prism.languages[snippet.language] ? snippet.language : "text";

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — nothing sensible to do.
    }
  }

  return (
    <div className="not-prose group/code relative my-6 overflow-hidden rounded-xl border border-neutral-800 bg-[#0d1117] shadow-lg">
      <div className="flex items-center justify-between gap-3 border-b border-neutral-800 bg-neutral-900/60 px-4 py-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
          </span>
          <span className="truncate font-mono text-xs text-neutral-400">
            {snippet.filename ?? snippet.language}
          </span>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="flex shrink-0 items-center gap-1.5 rounded-md border border-neutral-700 px-2 py-1 text-xs text-neutral-400 transition-colors hover:border-neutral-600 hover:text-neutral-200"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" /> Copied
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" /> Copy
            </>
          )}
        </button>
      </div>

      <Highlight theme={themes.nightOwl} code={code} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} overflow-x-auto p-4 text-[13px] leading-relaxed`}
            style={{ ...style, background: "transparent" }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <span className="mr-4 inline-block w-4 select-none text-right text-neutral-600">
                  {i + 1}
                </span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
