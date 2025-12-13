"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, MessageCircle } from "lucide-react"

export default function Hero() {
  const [quoteText, setQuoteText] = useState("")
  const [showQuote, setShowQuote] = useState(false)
  const fullQuote = "Make it possible when it's impossible."

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowQuote(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (showQuote && quoteText.length < fullQuote.length) {
      const timer = setTimeout(() => {
        setQuoteText(fullQuote.substring(0, quoteText.length + 1))
      }, 80)
      return () => clearTimeout(timer)
    }
  }, [quoteText, showQuote, fullQuote])

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center section-spacing">
      <div className="container-spacing">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <motion.div
            className="flex-1 text-center lg:text-left max-w-3xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <p className="text-2xl md:text-3xl text-gray-300 font-space-grotesk font-medium tracking-wide mb-2">
                Hey it's me
              </p>
              <h1 className="text-6xl md:text-8xl font-bold text-white font-dancing leading-tight glow-text">
                MD ISMAIL
              </h1>
            </motion.div>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Full-Stack Developer & CSE Student
            </motion.p>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Passionate about creating innovative web solutions and exploring cutting-edge technologies. I transform
              ideas into digital experiences that make a difference.
            </motion.p>

            {/* Animated Quote */}
            <motion.div
              className="mb-12 p-8 border-l-4 border-indigo-500 bg-gray-900/30 rounded-r-xl backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <blockquote className="text-xl italic text-gray-200 font-caveat font-medium">
                "{quoteText}
                {showQuote && quoteText.length < fullQuote.length && (
                  <span className="inline-block w-0.5 h-6 bg-indigo-500 ml-1 animate-blink"></span>
                )}
                "
              </blockquote>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              <Button className="btn-primary font-inter text-base px-8 py-4">
                <Download className="mr-3 h-5 w-5" />
                Download CV
              </Button>
              <Button
                variant="outline"
                className="btn-secondary font-inter text-base px-8 py-4"
                onClick={scrollToContact}
              >
                <MessageCircle className="mr-3 h-5 w-5" />
                Let's Talk
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <motion.div
                className="w-full h-full rounded-full border-4 border-indigo-500 shadow-2xl glow-border overflow-hidden transition-transform duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/images/md-ismail-portrait.jpg"
                  alt="Md Ismail"
                  width={384}
                  height={384}
                  className="w-full h-full object-cover"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
