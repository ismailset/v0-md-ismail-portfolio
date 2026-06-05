"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export default function Hero() {
  const roles = ["Competitive Programmer", "Problem Solver", "Entrepreneur", "CSE Student"]
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

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
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              <p className="text-2xl md:text-3xl text-gray-300 font-space-grotesk font-medium tracking-wide mb-2">
                Hey it's me
              </p>
              <h1 className="text-6xl md:text-8xl font-bold text-white font-dancing leading-tight glow-text mb-6">
                MD ISMAIL
              </h1>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white font-space-grotesk leading-tight mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Competitive Programmer &<br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Entrepreneur
              </span>
            </motion.h2>

            <motion.div
              className="mb-8 h-12 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.p
                key={currentRole}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl text-indigo-400 font-inter font-medium"
              >
                {roles[currentRole]}
              </motion.p>
            </motion.div>

            <motion.p
              className="hero-description mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Building products, solving problems, and exploring entrepreneurship through technology. Computer Science
              student passionate about algorithms, competitive programming, and turning ideas into useful digital
              experiences.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Button className="btn-primary font-inter text-base px-8 py-4" onClick={scrollToProjects}>
                View Projects
              </Button>
              <Button
                variant="outline"
                className="btn-secondary font-inter text-base px-8 py-4 bg-transparent"
                onClick={scrollToContact}
              >
                <MessageCircle className="mr-3 h-5 w-5" />
                Contact Me
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
                  src="/images/md-ismail-full-stack-developer.jpg"
                  alt="Md Ismail Competitive Programmer and Entrepreneur"
                  width={384}
                  height={384}
                  className="w-full h-full object-cover"
                  priority
                  sizes="(max-width: 768px) 288px, 384px"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
