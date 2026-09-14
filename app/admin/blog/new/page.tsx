import Link from "next/link"
import { PostEditor } from "@/components/blog/post-editor"
import { savePost } from "../actions"

export default function NewPostPage() { return <main className="min-h-screen bg-black px-6 py-12 text-white md:px-12"><div className="mx-auto max-w-7xl"><Link href="/admin/blog" className="text-indigo-300">← Dashboard</Link><h1 className="mt-8 font-space-grotesk text-4xl font-bold">Create post</h1><div className="mt-10"><PostEditor action={savePost} /></div></div></main> }
