import { put } from "@vercel/blob"
import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"

const MAX_FILE_SIZE = 10 * 1024 * 1024
const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp"])

export async function POST(request: Request) {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const formData = await request.formData()
  const file = formData.get("file")
  if (!(file instanceof File)) return NextResponse.json({ error: "No image selected" }, { status: 400 })
  if (!ALLOWED_TYPES.has(file.type)) return NextResponse.json({ error: "Use JPG, PNG, or WEBP images only" }, { status: 400 })
  if (file.size > MAX_FILE_SIZE) return NextResponse.json({ error: "Image must be 10 MB or smaller" }, { status: 400 })

  try {
    const extension = file.type === "image/png" ? "png" : file.type === "image/webp" ? "webp" : "jpg"
    const blob = await put(`blog-covers/${crypto.randomUUID()}.${extension}`, file, { access: "public", addRandomSuffix: false, contentType: file.type })
    return NextResponse.json({ url: blob.url })
  } catch (error) {
    console.error("[v0] Blog cover upload failed", error)
    return NextResponse.json({ error: "Upload failed. Please try again." }, { status: 500 })
  }
}
