"use client"

import { motion } from "framer-motion"
import { Code, Brain, Cpu, FileText } from "lucide-react"

const programmingLanguages = [
  {
    name: "C",
    level: "Advanced",
    description: "Strong understanding of procedural programming, memory management, problem solving, and algorithm implementation.",
  },
  {
    name: "C++",
    level: "Intermediate",
    description: "STL, object-oriented programming, competitive programming techniques, and algorithmic problem solving.",
  },
  {
    name: "Python",
    level: "Beginner",
    description: "Scripting, automation, and foundational problem solving.",
  },
]

const coreConcepts = [
  {
    name: "Data Structures",
    description: "Arrays, linked lists, stacks, queues, trees, heaps, hash tables, and graphs.",
  },
  {
    name: "Algorithms",
    description: "Searching, sorting, greedy methods, recursion, and optimization techniques.",
  },
  {
    name: "Problem Solving",
    description: "Breaking down complex challenges into efficient solutions.",
  },
  {
    name: "OOP",
    description: "Classes, inheritance, encapsulation, abstraction, and polymorphism.",
  },
  {
    name: "Discrete Mathematics",
    description: "Logic, sets, combinatorics, relations, and graph fundamentals.",
  },
  {
    name: "Time Complexity",
    description: "Big-O analysis and performance optimization.",
  },
]

const productivityTools = [
  { name: "Microsoft Excel", description: "Data organization and analysis." },
  { name: "Microsoft PowerPoint", description: "Presentation design and communication." },
  { name: "Microsoft Word", description: "Documentation and reporting." },
  { name: "Git", description: "Version control and collaboration." },
  { name: "GitHub", description: "Code hosting and project management." },
]

export default function Skills() {
  const SkillCard = ({ icon: Icon, title, description, level }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-indigo-500/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20"
    >
      {Icon && <Icon className="w-8 h-8 text-indigo-400 mb-4" />}
      <h3 className="text-lg font-semibold text-white mb-2 font-inter">{title}</h3>
      {level && <div className="text-sm text-indigo-400 font-medium mb-3">{level}</div>}
      <p className="text-sm text-gray-300 font-inter leading-relaxed">{description}</p>
    </motion.div>
  )

  return (
    <section id="skills" className="section-spacing">
      <div className="container-spacing">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="section-header text-white">Skills & Expertise</h2>
            <p className="section-subtitle">Core competencies in competitive programming and problem solving</p>
          </div>

          {/* Programming Languages */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Code className="w-6 h-6 text-indigo-400" />
              <h3 className="text-2xl font-bold text-white font-inter">Programming Languages</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {programmingLanguages.map((lang, index) => (
                <SkillCard
                  key={index}
                  title={lang.name}
                  description={lang.description}
                  level={lang.level}
                  icon={null}
                />
              ))}
            </div>
          </div>

          {/* Core Concepts */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Brain className="w-6 h-6 text-purple-400" />
              <h3 className="text-2xl font-bold text-white font-inter">Core Concepts</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreConcepts.map((concept, index) => (
                <SkillCard key={index} title={concept.name} description={concept.description} />
              ))}
            </div>
          </div>

          {/* Productivity Tools */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Cpu className="w-6 h-6 text-pink-400" />
              <h3 className="text-2xl font-bold text-white font-inter">Tools & Technologies</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {productivityTools.map((tool, index) => (
                <SkillCard key={index} title={tool.name} description={tool.description} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
