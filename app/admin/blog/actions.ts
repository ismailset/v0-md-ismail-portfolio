"use server"

import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { blogPosts, type BlogStatus } from "@/lib/db/schema"
import { and, desc, eq } from "drizzle-orm"
import { headers } from "next/headers"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

async function adminId() { const session = await auth.api.getSession({ headers: await headers() }); if (!session?.user) redirect("/sign-in?next=/admin/blog"); return session.user.id }
function slugify(value: string) { return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") }
export async function listAdminPosts() { const authorId = await adminId(); return db.select().from(blogPosts).where(eq(blogPosts.authorId, authorId)).orderBy(desc(blogPosts.updatedAt)) }
export async function getAdminPost(id: string) { const authorId = await adminId(); const rows = await db.select().from(blogPosts).where(and(eq(blogPosts.id, id), eq(blogPosts.authorId, authorId))).limit(1); return rows[0] ?? null }
export async function savePost(formData: FormData) { const authorId = await adminId(); const id = String(formData.get("id") ?? crypto.randomUUID()); const title = String(formData.get("title") ?? "").trim(); const slug = slugify(String(formData.get("slug") ?? title)); const excerpt = String(formData.get("excerpt") ?? "").trim(); const content = String(formData.get("content") ?? ""); const category = String(formData.get("category") ?? "Programming"); const tags = String(formData.get("tags") ?? "").split(",").map((tag) => tag.trim()).filter(Boolean); const status = (String(formData.get("status") ?? "draft") === "published" ? "published" : "draft") as BlogStatus; if (!title || !excerpt || !content || !slug) throw new Error("Title, slug, excerpt, and content are required."); const values = { title, slug, excerpt, content, category, tags, status, coverImage: String(formData.get("coverImage") ?? "").trim() || null, publishedAt: status === "published" ? new Date() : null, updatedAt: new Date(), authorId }; const existing = await db.select({ id: blogPosts.id }).from(blogPosts).where(and(eq(blogPosts.id, id), eq(blogPosts.authorId, authorId))).limit(1); if (existing.length) await db.update(blogPosts).set(values).where(and(eq(blogPosts.id, id), eq(blogPosts.authorId, authorId))); else await db.insert(blogPosts).values({ ...values, id, createdAt: new Date() }); revalidatePath("/blog"); revalidatePath(`/blog/${slug}`); revalidatePath("/admin/blog"); redirect("/admin/blog") }
export async function deletePost(id: string) { const authorId = await adminId(); await db.delete(blogPosts).where(and(eq(blogPosts.id, id), eq(blogPosts.authorId, authorId))); revalidatePath("/blog"); revalidatePath("/admin/blog") }
export async function togglePost(id: string, status: BlogStatus) { const authorId = await adminId(); await db.update(blogPosts).set({ status, publishedAt: status === "published" ? new Date() : null, updatedAt: new Date() }).where(and(eq(blogPosts.id, id), eq(blogPosts.authorId, authorId))); revalidatePath("/blog"); revalidatePath("/admin/blog") }
