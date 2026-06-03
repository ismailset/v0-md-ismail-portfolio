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
              I'm <span className="text-indigo-400 font-semibold">Md Ismail</span>, a Computer Science student at{" "}
              <span className="text-purple-400 font-semibold">Northern University Bangladesh</span> with a passion for
              competitive programming and problem solving. I approach every challenge as an opportunity to sharpen my
              algorithmic thinking and explore new perspectives.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg leading-relaxed font-inter text-center lg:text-left"
            >
              My focus is on mastering fundamental computer science concepts—data structures, algorithms, and
              computational complexity. I actively participate in competitive programming contests on platforms like
              Codeforces, CodeChef, and LeetCode, where I continuously improve my problem-solving skills through
              challenging algorithmic problems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg leading-relaxed font-inter text-center lg:text-left"
            >
              Beyond programming contests, I'm interested in entrepreneurship and building products that solve real
              problems. I believe in continuous learning, exploring new technologies, and combining competitive
              programming rigor with practical product development. I'm excited about opportunities where strong
              algorithms meet user-centric design.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
