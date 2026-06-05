"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink, Code2, Trophy, Target } from "lucide-react"

const cpProfiles = [
  {
    platform: "Codeforces",
    username: "md_ismail_nub",
    url: "https://codeforces.com/profile/md_ismail_nub",
    description: "Programming contests and competitive coding",
    icon: Trophy,
    color: "from-blue-600 to-cyan-600",
  },
  {
    platform: "CodeChef",
    username: "mdismail_nub",
    url: "https://www.codechef.com/users/mdismail_nub",
    description: "Competitive programming challenges and contests",
    icon: Code2,
    color: "from-amber-600 to-orange-600",
  },
  {
    platform: "LeetCode",
    username: "md_ismail",
    url: "https://leetcode.com/md_ismail",
    description: "Data structures and algorithm practice",
    icon: Target,
    color: "from-yellow-600 to-orange-600",
  },
  {
    platform: "Beecrowd",
    username: "Profile #1171293",
    url: "https://judge.beecrowd.com/en/profile/1171293",
    description: "Problem solving and algorithm practice",
    icon: Target,
    color: "from-green-600 to-emerald-600",
  },
  {
    platform: "AtCoder",
    username: "md_ismail",
    url: "https://atcoder.jp/users/md_ismail",
    description: "Japanese programming contests",
    icon: Trophy,
    color: "from-purple-600 to-pink-600",
  },
  {
    platform: "HackerRank",
    username: "md_ismail_nub",
    url: "https://www.hackerrank.com/md_ismail_nub",
    description: "Programming challenges and skill certification",
    icon: Code2,
    color: "from-indigo-600 to-blue-600",
  },
]

export default function CompetitiveProgramming() {
  return (
    <section id="competitive-programming" className="section-spacing bg-gray-950/30">
      <div className="container-spacing">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="section-header text-white">Competitive Programming Journey</h2>
            <p className="section-subtitle">Improving problem-solving skills through contests and algorithmic challenges</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cpProfiles.map((profile, index) => {
              const IconComponent = profile.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300 group hover:scale-105"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Icon with gradient */}
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${profile.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Platform Name */}
                    <h3 className="text-2xl font-bold text-white font-space-grotesk">{profile.platform}</h3>

                    {/* Username */}
                    <p className="text-indigo-300 font-medium font-inter">@{profile.username}</p>

                    {/* Description */}
                    <p className="text-gray-400 text-sm font-inter leading-relaxed">{profile.description}</p>

                    {/* View Profile Button */}
                    <Button asChild className="btn-primary w-full font-inter mt-4">
                      <a
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={16} />
                        View Profile
                      </a>
                    </Button>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Additional Info */}
          <motion.div
            className="text-center mt-12 bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="text-gray-300 font-inter leading-relaxed">
              Actively solving algorithmic challenges and participating in programming contests to sharpen
              problem-solving skills and improve coding efficiency. Always eager to learn new techniques and optimize
              solutions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
