"use client"

import hljs from "highlight.js/lib/common"
import { Markdown } from "./markdown"
import { sanitizeHtml } from "@/lib/sanitize-html"
import "highlight.js/styles/github-dark.css"

function highlightHtml(html: string) {
  if (typeof document === "undefined") return html
  const wrapper = document.createElement("div")
  wrapper.innerHTML = html
  wrapper.querySelectorAll("pre code").forEach((block) => {
    const language = Array.from(block.classList).find((name) => name.startsWith("language-"))?.replace("language-", "")
    const result = language && hljs.getLanguage(language) ? hljs.highlight(block.textContent ?? "", { language }).value : hljs.highlightAuto(block.textContent ?? "").value
    block.innerHTML = result
    block.classList.add("hljs")
  })
  wrapper.querySelectorAll("table").forEach((table) => {
    const scroll = document.createElement("div")
    scroll.className = "table-scroll"
    table.parentNode?.insertBefore(scroll, table)
    scroll.appendChild(table)
  })
  return wrapper.innerHTML
}

export function BlogContentRenderer({ content, contentType = "markdown" }: { content: string; contentType?: "markdown" | "html" }) {
  if (contentType !== "html") return <Markdown content={content} />
  return <div className="blog-content" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: highlightHtml(sanitizeHtml(content)) }} />
}

