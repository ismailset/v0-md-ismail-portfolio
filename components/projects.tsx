"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

const projectsData = [
  {
    name: "68Share",
    description: "Secure file sharing platform with end-to-end encryption. Share files between devices instantly without sign-up. Fast P2P transfer with privacy-first architecture.",
    url: "https://68share.mdismail.dev/",
    image: "/68share-banner.png",
    tech: ["Next.js", "WebRTC", "Encryption", "TypeScript"],
    featured: true,
  },
  {
    name: "CodePath",
    description: "Interactive competitive programming platform for learning and practicing coding problems. Track your progress from beginner to expert problem solver.",
    url: "https://codepath.mdismail.dev/",
    image: "/codepath-banner.png",
    tech: ["Next.js", "React", "Algorithm", "Competitive Programming"],
    featured: false,
  },
  {
    name: "FreeSpeak",
    description: "Anonymous messaging platform where you can express yourself freely without judgment. Share anything anonymously with complete privacy and security.",
    url: "https://freespeak.mdismail.dev/",
    image: "/freespeak-banner.png",
    tech: ["Next.js", "Socket.io", "Privacy", "Anonymity"],
    featured: false,
  },
  {
    name: "Image Resizer",
    description: "User-friendly interface for image resizing with drag-and-drop functionality. Resize, compress, and optimize images with instant preview.",
    url: "https://img-resize.mdismail.dev/",
    image: "/modern-image-resizer-tool-interface-with-drag-and-.jpg",
    tech: ["React", "Canvas API", "Image Processing"],
    featured: false,
  },
  {
    name: "News Aggregator",
    description: "Contemporary news website aggregating content with AI-powered recommendations. Clean interface with real-time updates and personalized feed.",
    url: "https://news.mdismail.dev/",
    image: "/modern-news-aggregator-website-with-ai-powered-new.jpg",
    tech: ["Next.js", "AI", "News API", "Real-time"],
    featured: false,
  },
  {
    name: "DocMate BD",
    description: "Government services documentation platform for Bangladesh. Simplify access to important documents and administrative processes.",
    url: "https://doc-matebd.vercel.app/",
    image: "/docmate-bangladesh-government-services-online-appl.jpg",
    tech: ["Next.js", "Government Services", "Documentation"],
    featured: false,
  },
  {
    name: "Education Platform",
    description: "Modern educational platform with clean layout and interactive learning modules. Designed for Gen-Z learners with intuitive navigation.",
    url: "https://eduvibe.mdismail.dev/",
    image: "/modern-educational-platform-homepage-with-clean-la.jpg",
    tech: ["React", "Next.js", "Education"],
    featured: false,
  },
  {
    name: "IELTS Mate",
    description: "Comprehensive IELTS exam preparation platform with practice tests and score tracking. Prepare for your IELTS exam with expert guidance.",
    url: "https://ieltsmate.ismailsworld.xyz/",
    image: "/ielts-preparation-platform-with-ai-features-practi.jpg",
    tech: ["Next.js", "IELTS", "Exam Prep", "AI"],
    featured: false,
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
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/50 shadow-xl transition-all duration-500 group-hover:border-indigo-500/50 group-hover:shadow-2xl group-hover:shadow-indigo-500/20 h-full flex flex-col">
                  {/* Image Container */}
                  <div className={`relative overflow-hidden ${project.featured ? "h-48 sm:h-64" : "h-40 sm:h-52"} bg-gray-950 flex-shrink-0`}>
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
                  <div className="p-5 sm:p-6 space-y-3 sm:space-y-4 flex flex-col flex-grow relative z-10">
                    {/* Title */}
                    <motion.h3
                      className="text-xl sm:text-2xl font-bold text-white font-space-grotesk leading-snug group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.15 + 0.1 }}
                    >
                      {project.name}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className="text-gray-300 leading-relaxed font-inter text-xs sm:text-sm flex-grow line-clamp-2 sm:line-clamp-3 group-hover:text-gray-200 transition-colors duration-300"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.15 + 0.15 }}
                    >
                      {project.description}
                    </motion.p>

                    {/* Tech Stack */}
                    <motion.div
                      className="flex flex-wrap gap-1.5 sm:gap-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.15 + 0.2 }}
                    >
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          whileHover={{ scale: 1.05 }}
                          className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-xs font-semibold border backdrop-blur-sm transition-all duration-300 cursor-default ${
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
                      className="flex gap-2 sm:gap-3 pt-3 sm:pt-4 mt-auto"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.15 + 0.25 }}
                    >
                      <Button asChild className="btn-primary flex-1 font-inter font-semibold text-sm overflow-hidden relative group/btn py-2.5">
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
