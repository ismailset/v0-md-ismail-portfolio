import { and, desc, eq, ilike, or } from "drizzle-orm"
import { db } from "@/lib/db"
import { blogPosts, type BlogPost } from "@/lib/db/schema"

export async function getPublishedPosts(query?: string, category?: string) {
  const filters = [eq(blogPosts.status, "published")]
  if (category && category !== "All") filters.push(eq(blogPosts.category, category))
  if (query) {
    const search = `%${query}%`
    filters.push(or(ilike(blogPosts.title, search), ilike(blogPosts.excerpt, search), ilike(blogPosts.content, search))!)
  }
  return db.select().from(blogPosts).where(and(...filters)).orderBy(desc(blogPosts.publishedAt), desc(blogPosts.createdAt))
}

export async function getPublishedPost(slug: string) {
  const rows = await db.select().from(blogPosts).where(and(eq(blogPosts.slug, slug), eq(blogPosts.status, "published"))).limit(1)
  return rows[0] ?? null
}

export async function getRelatedPosts(post: BlogPost) {
  return db.select().from(blogPosts).where(and(eq(blogPosts.status, "published"), eq(blogPosts.category, post.category))).orderBy(desc(blogPosts.publishedAt)).limit(3)
}

export function readingTime(content: string) {
  return Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 220))
}
