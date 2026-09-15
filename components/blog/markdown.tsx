import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"
import rehypeSlug from "rehype-slug"
import "highlight.js/styles/github-dark.css"

export function Markdown({ content }: { content: string }) {
  return (
    <div className="blog-content">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug, rehypeHighlight]}>{content}</ReactMarkdown>
    </div>
  )
}
