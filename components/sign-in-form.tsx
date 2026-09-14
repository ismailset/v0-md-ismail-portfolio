"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "@/lib/auth-client"

export default function SignInForm() { const router = useRouter(); const [error, setError] = useState(""); const [pending, setPending] = useState(false); async function submit(formData: FormData) { setPending(true); setError(""); const result = await signIn.email({ email: String(formData.get("email")), password: String(formData.get("password")) }); if (result.error) setError("Unable to sign in with those credentials."); else { router.push("/admin/blog"); router.refresh() } setPending(false) } return <form action={submit} className="flex flex-col gap-5"><label className="flex flex-col gap-2"><span>Email</span><input name="email" type="email" required className="form-input rounded-lg p-3" /></label><label className="flex flex-col gap-2"><span>Password</span><input name="password" type="password" required className="form-input rounded-lg p-3" /></label>{error && <p role="alert" className="text-sm text-red-300">{error}</p>}<button disabled={pending} className="btn-primary disabled:opacity-60">{pending ? "Signing in…" : "Sign in"}</button></form> }
