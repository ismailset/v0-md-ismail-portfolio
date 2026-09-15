import Link from "next/link"
import Image from "next/image"
import type { BlogPost } from "@/lib/db/schema"
import { readingTime } from "@/lib/blog"

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="project-card group block">
      <div className="relative aspect-[16/9] overflow-hidden bg-gray-950">
        {post.coverImage ? <Image src={post.coverImage} alt={post.coverImageAlt || post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" /> : <div className="flex h-full items-center justify-center bg-gradient-to-br from-indigo-950 to-gray-950 text-5xl font-bold text-indigo-300">{post.title.slice(0, 1)}</div>}
      </div>
      <div className="flex flex-col gap-4 p-6">
        <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.18em] text-indigo-300"><span>{post.category}</span><span>{readingTime(post.content)} min read</span></div>
        <h2 className="font-space-grotesk text-2xl font-bold text-white transition-colors group-hover:text-indigo-300">{post.title}</h2>
        <p className="line-clamp-3 text-gray-400">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2">{post.tags.slice(0, 3).map((tag) => <span key={tag} className="skill-tag px-3 py-1 text-xs">{tag}</span>)}</div>
        <time className="text-sm text-gray-500">{new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(post.publishedAt ?? post.createdAt)}</time>
      </div>
    </Link>
  )
}
