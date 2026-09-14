import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-center text-white">
      <div className="flex max-w-md flex-col items-center gap-5">
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">404</p>
        <h1 className="text-4xl font-bold">Page not found</h1>
        <p className="text-gray-400">The page you’re looking for doesn’t exist or may have moved.</p>
        <Link href="/" className="rounded-lg border border-indigo-400/40 px-5 py-3 text-sm font-medium text-indigo-200 transition-colors hover:border-indigo-300 hover:text-white">
          Back to portfolio
        </Link>
      </div>
    </main>
  )
}
