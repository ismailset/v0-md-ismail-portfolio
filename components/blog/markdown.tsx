import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"
import rehypeSlug from "rehype-slug"
import "highlight.js/styles/github-dark.css"

export function Markdown({ content }: { content: string }) {
  return (
    <div className="blog-prose prose prose-invert max-w-none prose-headings:font-space-grotesk prose-a:text-indigo-300 prose-a:no-underline hover:prose-a:underline prose-code:text-indigo-200 prose-pre:border prose-pre:border-gray-800 prose-pre:bg-gray-950 prose-img:rounded-xl prose-blockquote:border-indigo-500">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug, rehypeHighlight]}>{content}</ReactMarkdown>
    </div>
  )
}
