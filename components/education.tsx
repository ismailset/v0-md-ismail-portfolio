"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

const educationData = [
  {
    institution: "Northern University Bangladesh",
    degree: "Computer Science & Engineering",
    period: "Running",
    location: "Dhaka, Bangladesh",
    description:
      "Currently pursuing Bachelor's degree with focus on software engineering, algorithms, and web technologies.",
    status: "current",
  },
  {
    institution: "Brahmanbaria United College",
    degree: "Higher Secondary Certificate — Science",
    period: "2022 - 2024",
    location: "Brahmanbaria, Bangladesh",
    description:
      "Completed higher secondary education with excellent grades in Science group, focusing on Mathematics, Physics, and Chemistry.",
    status: "completed",
  },
  {
    institution: "Mukundapur High School",
    degree: "Secondary School Certificate",
    period: "2017 - 2022",
    location: "Brahmanbaria, Bangladesh",
    description: "Completed secondary education with strong foundation in mathematics and science subjects.",
    status: "completed",
  },
]

export default function Education() {
  return (
    <section id="education" className="section-spacing">
      <div className="container-spacing">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="section-header text-white">Education</h2>
            <p className="section-subtitle">My academic journey and educational background</p>
          </div>

          <div className="space-y-8">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="education-card group pl-8 py-6 mb-8"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 mt-1">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        item.status === "current" ? "bg-indigo-600 text-white" : "bg-gray-700 text-gray-300"
                      } transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white`}
                    >
                      <GraduationCap size={20} />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 font-space-grotesk">{item.institution}</h3>
                    <p className="text-lg text-indigo-400 mb-3 font-inter font-medium">{item.degree}</p>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed font-inter">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
