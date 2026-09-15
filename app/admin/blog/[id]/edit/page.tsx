import Link from "next/link"
import { notFound } from "next/navigation"
import { PostEditor } from "@/components/blog/post-editor"
import { getAdminPost, savePost } from "../../actions"

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) { const post = await getAdminPost((await params).id); if (!post) notFound(); return <main className="min-h-screen bg-black px-6 py-12 text-white md:px-12"><div className="mx-auto max-w-7xl"><Link href="/admin/blog" className="text-indigo-300">← Dashboard</Link><h1 className="mt-8 font-space-grotesk text-4xl font-bold">Edit post</h1><div className="mt-10"><PostEditor post={post} action={savePost} /></div></div></main> }
