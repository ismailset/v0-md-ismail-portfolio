import SignInForm from "@/components/sign-in-form"

export default function SignInPage() { return <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white"><div className="w-full max-w-md rounded-xl border border-gray-800 bg-gray-950 p-8"><p className="text-sm uppercase tracking-[0.2em] text-indigo-300">Private workspace</p><h1 className="mt-3 font-space-grotesk text-3xl font-bold">Admin sign in</h1><p className="mt-3 text-gray-400">Sign in with your portfolio administrator account.</p><div className="mt-8"><SignInForm /></div></div></main> }
