"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

const projectsData = [
  {
    name: "DocMate BD",
    description:
      "Online application assistance platform for all Bangladesh government services. Provides expert guidance for passport, NID, birth certificate applications with 98% success rate and 24/7 support. Trusted by 5000+ Bangladeshis.",
    url: "https://doc-matebd.vercel.app/",
    image: "/docmate-bangladesh-government-services-online-appl.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Payment Integration", "24/7 Support"],
    featured: true,
  },
  {
    name: "CodePath",
    description:
      "An intelligent coding path finder that helps developers explore structured learning routes for mastering programming languages and frameworks with personalized recommendations.",
    url: "https://codepath.mdismail.dev/",
    image: "/placeholder.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "AI"],
  },
  {
    name: "Speak",
    description:
      "A voice communication platform designed for seamless real-time conversations with advanced audio processing and intuitive interface for modern users.",
    url: "https://speak.mdismail.dev/",
    image: "/placeholder.jpg",
    tech: ["React", "WebRTC", "Node.js", "TypeScript"],
  },
  {
    name: "News Aggregator Website",
    description:
      "A modern AI-powered news platform that fetches and summarizes trending news across different categories. Built with performance and user readability in mind.",
    url: "https://news.mdismail.dev/",
    image: "/modern-news-aggregator-website-with-ai-powered-new.jpg",
    tech: ["React", "Vite", "Tailwind CSS", "News API", "OpenAI"],
  },
  {
    name: "Study Buddy",
    description:
      "A modern, vibrant landing page designed with Gen-Z aesthetics, featuring smooth animations and interactive elements that engage young audiences.",
    url: "https://project.mdismail.dev/",
    image: "/vibrant-gen-z-study-landing-page-with-bold-colors-.jpg",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Image Resizer UI",
    description:
      "User-friendly interface for image resizing with drag-and-drop functionality, built with modern web APIs for seamless file processing.",
    url: "https://img-resize.mdismail.dev/",
    image: "/modern-image-resizer-tool-interface-with-drag-and-.jpg",
    tech: ["React", "Canvas API", "File API"],
  },
  {
    name: "Education Website",
    description:
      "Clean and elegant educational platform design with modern layout, showcasing responsive design principles and user experience best practices for online learning.",
    url: "https://eduvibe.mdismail.dev/",
    image: "/modern-educational-platform-homepage-with-clean-la.jpg",
    tech: ["Next.js", "CSS", "JavaScript"],
  },
  {
    name: "Ielts Mate",
    description:
      "Cutting-edge IELTS preparation platform with AI-powered features, designed to help students achieve their target scores through interactive learning and practice.",
    url: "https://ieltsmate.ismailsworld.xyz/",
    image: "/ielts-preparation-platform-with-ai-features-practi.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-spacing">
      <div className="container-spacing">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="section-header text-white">Featured Projects</h2>
            <p className="section-subtitle">A showcase of my recent work and creative solutions</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -8 }}
                className={`group relative ${project.featured ? "lg:col-span-2" : ""}`}
              >
                {/* Card Container with Glow Effect */}
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/50 shadow-xl transition-all duration-500 group-hover:border-indigo-500/50 group-hover:shadow-2xl group-hover:shadow-indigo-500/20 h-full">
                  {/* Image Container */}
                  <div className={`relative overflow-hidden ${project.featured ? "h-96" : "h-64"} bg-gray-950`}>
                    {project.featured && (
                      <motion.div
                        className="absolute top-4 left-4 z-20"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <span className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm">
                          ✨ Featured
                        </span>
                      </motion.div>
                    )}
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      width={800}
                      height={400}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                  </div>

                  {/* Content Container */}
                  <div className="p-8 space-y-5 flex flex-col h-full relative z-10">
                    {/* Title */}
                    <motion.h3
                      className="text-2xl md:text-3xl font-bold text-white font-space-grotesk leading-snug group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.15 + 0.1 }}
                    >
                      {project.name}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className="text-gray-300 leading-relaxed font-inter text-sm flex-1 line-clamp-3 group-hover:text-gray-200 transition-colors duration-300"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.15 + 0.15 }}
                    >
                      {project.description}
                    </motion.p>

                    {/* Tech Stack */}
                    <motion.div
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.15 + 0.2 }}
                    >
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          whileHover={{ scale: 1.08, translateY: -2 }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold border backdrop-blur-sm transition-all duration-300 cursor-default ${
                            project.featured
                              ? "bg-indigo-600/20 text-indigo-300 border-indigo-500/40 hover:bg-indigo-600/30 hover:border-indigo-400/60"
                              : "bg-gray-800/50 text-indigo-300 border-gray-600/60 hover:bg-gray-700/60 hover:border-indigo-500/40"
                          }`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                      className="flex gap-3 pt-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.15 + 0.25 }}
                    >
                      <Button asChild className="btn-primary flex-1 font-inter font-semibold overflow-hidden relative group/btn">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 relative z-10"
                        >
                          <span>View Project</span>
                          <motion.div
                            className="transition-transform"
                            whileHover={{ x: 4 }}
                          >
                            <ExternalLink size={16} />
                          </motion.div>
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="text-gray-400 font-inter mb-4">
              Want to see more of my work? Check out my GitHub for additional projects and contributions.
            </p>
            <Button asChild className="btn-secondary font-inter">
              <a
                href="https://github.com/ismailset"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <ExternalLink size={16} />
                View GitHub Profile
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
