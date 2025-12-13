"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="section-spacing bg-gray-950/30">
      <div className="container-spacing">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="section-header text-white">About Me</h2>
            <p className="section-subtitle">Get to know more about my journey and passion for technology</p>
          </div>

          <div className="prose prose-invert max-w-none content-spacing">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg leading-relaxed font-inter text-center lg:text-left"
            >
              I'm <span className="text-indigo-400 font-semibold">Md Ismail</span>, a passionate Computer Science
              student at <span className="text-purple-400 font-semibold">Northern University Bangladesh</span>. My
              journey in technology is driven by curiosity and the desire to build solutions that solve real-world
              problems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg leading-relaxed font-inter text-center lg:text-left"
            >
              I specialize in full-stack web development with expertise in modern technologies like React, Node.js, and
              MongoDB. I believe in continuous learning and pushing the boundaries of what's possible with code.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg leading-relaxed font-inter text-center lg:text-left"
            >
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
              sharing knowledge with the developer community. I'm always excited about the next challenge and
              opportunity to grow.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
