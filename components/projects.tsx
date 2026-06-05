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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`project-card group ${
                  project.featured ? "lg:col-span-2 border-2 border-indigo-500/50" : ""
                }`}
              >
                <div className={`${project.featured ? "h-80" : "h-56"} overflow-hidden relative bg-gray-900/50`}>
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                        Latest Project
                      </span>
                    </div>
                  )}
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300 font-space-grotesk">
                    {project.name}
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-inter text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 hover:scale-105 ${
                          project.featured
                            ? "bg-indigo-600/20 text-indigo-300 border-indigo-500/30 hover:bg-indigo-600/30"
                            : "bg-gray-800/80 text-indigo-300 border-gray-700 hover:bg-gray-700/80"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button asChild className="btn-primary flex-1 font-inter group/btn">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={16} className="transition-transform group-hover/btn:translate-x-1" />
                        Live Demo
                      </a>
                    </Button>
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
