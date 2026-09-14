import type { MetadataRoute } from "next"
import { getPublishedPosts } from "@/lib/blog"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> { const posts = await getPublishedPosts(); return [{ url: "https://mdismail.dev", lastModified: new Date() }, { url: "https://mdismail.dev/blog", lastModified: new Date() }, ...posts.map((post) => ({ url: `https://mdismail.dev/blog/${post.slug}`, lastModified: post.updatedAt }))] }
