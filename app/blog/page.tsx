import type { Metadata } from "next"
import { getPublishedPosts } from "@/lib/blog"
import { BlogCard } from "@/components/blog/blog-card"
import { BlogFilters } from "@/components/blog/blog-filters"
import SiteNav from "@/components/site-nav"

export const metadata: Metadata = { title: "Blog | Md Ismail", description: "Thoughts, tutorials, projects, and things I’m learning." }

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ q?: string; category?: string }> }) {
  const params = await searchParams
  const posts = await getPublishedPosts(params.q, params.category)
  return <main className="min-h-screen overflow-x-hidden pt-24 text-white"><SiteNav /><section className="section-spacing"><div className="container-spacing"><div className="mb-12 max-w-3xl"><p className="mb-4 text-sm uppercase tracking-[0.24em] text-indigo-300">Writing</p><h1 className="section-header text-white">Blog</h1><p className="section-subtitle mb-0">Thoughts, tutorials, projects, and things I&apos;m learning.</p></div><BlogFilters /><div className="mt-10">{posts.length ? <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">{posts.map((post) => <BlogCard key={post.id} post={post} />)}</div> : <div className="rounded-xl border border-gray-800 bg-gray-950/50 p-12 text-center"><h2 className="font-space-grotesk text-2xl font-bold">No posts found</h2><p className="mt-3 text-gray-400">Try another search or category.</p></div>}</div></div></section></main>
}
