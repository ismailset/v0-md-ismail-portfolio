"use client"

import Link from "next/link"
import { useState } from "react"

const links = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
]

export default function SiteNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-4 pt-4 sm:px-6">
      <nav
        className="container-spacing mx-auto flex items-center justify-between rounded-2xl border border-white/10 bg-black/80 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-md sm:px-5"
        aria-label="Main navigation"
      >
        <Link href="/" className="font-dancing text-2xl font-bold text-white" onClick={() => setIsOpen(false)}>
          MD ISMAIL
        </Link>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="portfolio-menu"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((open) => !open)}
          className="flex size-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-white/10 text-gray-200 transition-colors hover:border-indigo-300/50 hover:text-indigo-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
        >
          <span className={`h-0.5 w-5 bg-current transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 bg-current transition-opacity ${isOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 bg-current transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {isOpen && (
        <div id="portfolio-menu" className="container-spacing mx-auto mt-2 rounded-2xl border border-white/10 bg-black/95 p-2 shadow-2xl shadow-black/30 backdrop-blur-md">
          <div className="flex flex-col gap-1" role="menu">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                role="menuitem"
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-indigo-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
