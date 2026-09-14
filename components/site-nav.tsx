import Link from "next/link"

export default function SiteNav() {
  return <header className="fixed left-0 right-0 top-0 z-40 border-b border-gray-900/80 bg-black/80 backdrop-blur-md"><nav className="container-spacing flex items-center justify-between px-6 py-4 md:px-24 lg:px-32" aria-label="Main navigation"><Link href="/" className="font-dancing text-2xl font-bold text-white">MD ISMAIL</Link><div className="flex items-center gap-5 text-sm font-medium text-gray-300 md:gap-8"><Link href="/#about" className="transition-colors hover:text-indigo-300">About</Link><Link href="/#projects" className="transition-colors hover:text-indigo-300">Projects</Link><Link href="/blog" className="transition-colors hover:text-indigo-300">Blog</Link><Link href="/#contact" className="transition-colors hover:text-indigo-300">Contact</Link></div></nav></header>
}
