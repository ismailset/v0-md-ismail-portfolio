import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Md Ismail – Full-Stack Developer | React, Node, AI",
  description:
    "Md Ismail is a full-stack developer specializing in React, Node.js, and AI-powered web solutions. CSE student at Northern University Bangladesh building innovative digital experiences.",
  canonical: "https://mdismail.dev",
  metadataBase: new URL("https://mdismail.dev"),
  openGraph: {
    type: "profile",
    url: "https://mdismail.dev",
    title: "Md Ismail – Full-Stack Developer | React, Node, AI",
    description:
      "Md Ismail is a full-stack developer specializing in React, Node.js, and AI-powered web solutions. CSE student at Northern University Bangladesh building innovative digital experiences.",
    images: [
      {
        url: "https://mdismail.dev/images/md-ismail-full-stack-developer.jpg",
        width: 1200,
        height: 1200,
        alt: "Md Ismail Full-Stack Developer",
        type: "image/jpeg",
      },
    ],
    siteName: "Md Ismail",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Ismail – Full-Stack Developer | React, Node, AI",
    description:
      "Md Ismail is a full-stack developer specializing in React, Node.js, and AI-powered web solutions. CSE student at Northern University Bangladesh building innovative digital experiences.",
    images: ["https://mdismail.dev/images/md-ismail-full-stack-developer.jpg"],
    creator: "@mdismail",
  },
  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head></head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
