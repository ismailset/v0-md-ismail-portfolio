"use client"

import { useState } from "react"
import type { BlogPost } from "@/lib/db/schema"
import { blogCategories } from "@/lib/db/schema"
import { BlogContentRenderer } from "./blog-content-renderer"
import { CoverImageUpload } from "./cover-image-upload"

export function PostEditor({ post, action }: { post?: BlogPost | null; action: (data: FormData) => void }) {
  const [title, setTitle] = useState(post?.title ?? "")
  const [content, setContent] = useState(post?.content ?? "")
  const [contentType, setContentType] = useState<"markdown" | "html">((post?.contentType as "markdown" | "html") ?? "markdown")
  const [coverImage, setCoverImage] = useState(post?.coverImage ?? "")
  const slug = post?.slug ?? title.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")

  return <form action={action} className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
    <div className="flex flex-col gap-5">
      {post ? <input type="hidden" name="id" value={post.id} /> : null}
      <input type="hidden" name="coverImage" value={coverImage} />
      <input type="hidden" name="contentType" value={contentType} />
      <label className="flex flex-col gap-2"><span>Title</span><input name="title" value={title} onChange={(event) => setTitle(event.target.value)} required className="form-input rounded-lg p-3" /></label>
      <label className="flex flex-col gap-2"><span>Slug</span><input name="slug" defaultValue={slug} required className="form-input rounded-lg p-3" /></label>
      <label className="flex flex-col gap-2"><span>Excerpt</span><textarea name="excerpt" defaultValue={post?.excerpt ?? ""} required rows={3} className="form-input rounded-lg p-3" /></label>
      <div className="flex flex-col gap-2"><span>Cover image</span><CoverImageUpload value={coverImage} onChange={setCoverImage} onRemove={() => setCoverImage("")} /><label className="flex flex-col gap-2"><span className="text-sm text-white/70">Image alt text</span><input name="coverImageAlt" defaultValue={post?.coverImageAlt ?? ""} placeholder={title || "Describe the cover image"} className="form-input rounded-lg p-3" /></label></div>
      <div className="grid gap-5 sm:grid-cols-2"><label className="flex flex-col gap-2"><span>Category</span><select name="category" defaultValue={post?.category ?? "Programming"} className="form-input rounded-lg p-3">{blogCategories.map((category) => <option key={category}>{category}</option>)}</select></label><label className="flex flex-col gap-2"><span>Status</span><select name="status" defaultValue={post?.status ?? "draft"} className="form-input rounded-lg p-3"><option value="draft">Draft</option><option value="published">Published</option></select></label></div>
      <label className="flex flex-col gap-2"><span>Tags, comma separated</span><input name="tags" defaultValue={post?.tags.join(", ") ?? ""} className="form-input rounded-lg p-3" /></label>
      <div className="flex flex-wrap items-center justify-between gap-3"><span>Content</span><div className="flex rounded-lg border border-white/10 bg-white/[0.03] p-1"><button type="button" onClick={() => setContentType("markdown")} className={`rounded-md px-3 py-1.5 text-sm ${contentType === "markdown" ? "bg-indigo-500 text-white" : "text-white/60"}`}>Markdown</button><button type="button" onClick={() => setContentType("html")} className={`rounded-md px-3 py-1.5 text-sm ${contentType === "html" ? "bg-indigo-500 text-white" : "text-white/60"}`}>HTML</button></div></div>
      <textarea name="content" value={content} onChange={(event) => setContent(event.target.value)} required rows={22} spellCheck={contentType !== "html"} className={`form-input rounded-lg p-3 ${contentType === "html" ? "font-mono text-sm leading-6" : ""}`} placeholder={contentType === "html" ? "Paste safe article HTML here..." : "Write your Markdown content..."} />
      <div className="flex gap-3"><button className="btn-primary" type="submit">Save post</button></div>
    </div><aside className="rounded-xl border border-white/10 bg-white/[0.03] p-5"><p className="mb-4 text-sm text-white/60">{contentType === "html" ? "Sanitized HTML preview" : "Live preview"}</p><BlogContentRenderer content={content} contentType={contentType} /></aside>
  </form>
}
