"use client"

import Image from "next/image"
import { useRef, useState } from "react"

type Props = { value?: string | null; onChange: (url: string) => void; onRemove: () => void }

export function CoverImageUpload({ value, onChange, onRemove }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [dragging, setDragging] = useState(false)
  const [state, setState] = useState<"idle" | "uploading" | "error">("idle")
  const [error, setError] = useState("")

  async function upload(file: File) {
    setState("uploading"); setError("")
    const formData = new FormData(); formData.set("file", file)
    try {
      const response = await fetch("/api/admin/blog/upload", { method: "POST", body: formData })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || "Upload failed. Please try again.")
      onChange(result.url); setState("idle")
    } catch (uploadError) { setError(uploadError instanceof Error ? uploadError.message : "Upload failed. Please try again."); setState("error") }
  }

  function selectFile(file?: File) {
    if (!file) return
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) { setError("Use JPG, PNG, or WEBP images only"); setState("error"); return }
    if (file.size > 10 * 1024 * 1024) { setError("Image must be 10 MB or smaller"); setState("error"); return }
    void upload(file)
  }

  if (value) return <div className="flex flex-col gap-3"><div className="relative aspect-[1200/630] overflow-hidden rounded-xl border border-indigo-500/30 bg-slate-950"><Image src={value} alt="Uploaded cover image preview" fill className="object-cover" sizes="(max-width: 768px) 100vw, 600px" /></div><div className="flex flex-wrap gap-2"><button type="button" onClick={() => inputRef.current?.click()} className="btn-secondary">Change image</button><button type="button" onClick={onRemove} className="btn-secondary">Remove image</button></div><input ref={inputRef} type="file" accept="image/jpeg,image/png,image/webp" className="sr-only" onChange={(event) => selectFile(event.target.files?.[0])} /></div>

  return <div className="flex flex-col gap-2"><button type="button" onClick={() => inputRef.current?.click()} onDragOver={(event) => { event.preventDefault(); setDragging(true) }} onDragLeave={() => setDragging(false)} onDrop={(event) => { event.preventDefault(); setDragging(false); selectFile(event.dataTransfer.files[0]) }} className={`flex min-h-44 flex-col items-center justify-center gap-2 rounded-xl border border-dashed p-6 text-center transition-colors ${dragging ? "border-indigo-400 bg-indigo-500/10" : "border-white/20 bg-white/[0.03] hover:border-indigo-400/60"}`}><span className="text-base font-medium">{state === "uploading" ? "Uploading..." : "Upload cover image"}</span><span className="text-sm text-white/60">Click to browse or drag and drop</span><span className="text-xs text-white/40">JPG, PNG, WEBP · Max 10 MB · Recommended 1200 × 630</span></button><input ref={inputRef} type="file" accept="image/jpeg,image/png,image/webp" className="sr-only" onChange={(event) => selectFile(event.target.files?.[0])} />{state === "error" && <p className="text-sm text-red-300" role="alert">{error}</p>}</div>
}
