"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Search } from "lucide-react"
import { blogCategories } from "@/lib/db/schema"

export function BlogFilters() {
  const router = useRouter()
  const params = useSearchParams()
  const update = (key: string, value: string) => { const next = new URLSearchParams(params.toString()); value && value !== "All" ? next.set(key, value) : next.delete(key); router.push(`/blog${next.toString() ? `?${next}` : ""}`) }
  return <div className="flex flex-col gap-4 rounded-xl border border-gray-800 bg-gray-950/50 p-4 md:flex-row"><label className="relative flex-1"><span className="sr-only">Search posts</span><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" /><input defaultValue={params.get("q") ?? ""} onKeyDown={(event) => { if (event.key === "Enter" && !event.nativeEvent.isComposing && event.keyCode !== 229) update("q", event.currentTarget.value) }} placeholder="Search posts, topics, or tags" className="form-input w-full rounded-lg py-3 pl-10 pr-4" /></label><select aria-label="Filter by category" defaultValue={params.get("category") ?? "All"} onChange={(event) => update("category", event.target.value)} className="form-input rounded-lg px-4 py-3 md:w-64"><option>All</option>{blogCategories.map((category) => <option key={category}>{category}</option>)}</select></div>
}
