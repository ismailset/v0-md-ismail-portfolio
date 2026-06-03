"use client"

import { motion } from "framer-motion"
import { Facebook, Linkedin, MessageSquare, Send, Heart, Mail, Phone, MapPin, Code, Coffee } from "lucide-react"

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/profile.php?id=61568108246777",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/md-ismail-50b966362",
  },
  {
    name: "WhatsApp",
    icon: MessageSquare,
    url: "https://wa.me/+8801405621042",
  },
  {
    name: "Telegram",
    icon: Send,
    url: "https://t.me/mdismail_9",
  },
]

const quickLinks = [
  { name: "About", id: "about" },
  { name: "Education", id: "education" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
]

const services = [
  "Competitive Programming",
  "Algorithm Design",
  "Web Development",
  "Problem Solving",
  "Entrepreneurship",
]

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="footer-section bg-gradient-to-t from-gray-950 to-black">
      <div className="container-spacing">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Brand Column */}
          <motion.div
            className="footer-column"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4 font-dancing">Md Ismail</h3>
            <p className="text-gray-400 font-inter leading-relaxed mb-6">
              Competitive Programmer & Entrepreneur passionate about solving problems and building impactful products.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={16} className="text-indigo-400" />
                <span className="font-inter text-sm">iammdismail0@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={16} className="text-indigo-400" />
                <span className="font-inter text-sm">+880 1405 621042</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={16} className="text-indigo-400" />
                <span className="font-inter text-sm">Dhaka, Bangladesh</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            className="footer-column"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="footer-title">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className="footer-link block text-left hover:translate-x-1 transition-transform duration-300"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Services Column */}
          <motion.div
            className="footer-column"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h4 className="footer-title">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 font-inter text-sm flex items-center gap-2">
                  <Code size={12} className="text-indigo-400" />
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon
            return (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-800/50 hover:bg-indigo-600 rounded-full transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/25 backdrop-blur-sm border border-gray-700/50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title={link.name}
              >
                <IconComponent size={20} className="text-gray-300 hover:text-white" />
              </motion.a>
            )
          })}
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          className="copyright-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 font-inter text-sm flex items-center gap-2">
              © {new Date().getFullYear()} <span className="text-white font-semibold">Md Ismail</span>. All rights
              reserved.
            </p>

            <p className="text-gray-400 font-inter text-sm flex items-center gap-2">
              Made with <Heart size={14} className="text-red-500 animate-pulse" /> and
              <Coffee size={14} className="text-amber-500" /> from
              <span className="text-indigo-400 font-medium">Bangladesh</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
