"use client"

import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"

type Props = {
  title: string
  type: "markdown" | "pdf" | "link"
  src: string
  onExit: () => void
}

export default function DocumentViewer({
  title,
  type,
  src,
  onExit
}: Props) {
  const [content, setContent] = useState("")

  useEffect(() => {
    if (type !== "markdown") return

    fetch(src)
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch(() =>
        setContent("Failed to load document.")
      )
  }, [src, type])

  return (
    <div className="w-screen h-screen bg-neutral-950 text-white overflow-auto">

      {/* TOP BAR */}
      <div className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10 p-4 flex justify-between items-center">
        <h1 className="font-semibold">
          {title}
        </h1>

        <button
          onClick={onExit}
          className="opacity-70 hover:opacity-100"
        >
          ← Back
        </button>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto p-8">

        {type === "markdown" && (
          <article className="prose prose-invert max-w-none">
            <ReactMarkdown>
              {content}
            </ReactMarkdown>
          </article>
        )}

        {type === "pdf" && (
          <iframe
            src={src}
            className="w-full h-[85vh] rounded-lg border border-white/10"
          />
        )}

        {type === "link" && (
          <div className="flex flex-col gap-4">
            <p>
              Open external resource:
            </p>

            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {src}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}