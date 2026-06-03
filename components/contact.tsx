"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [showThankYou, setShowThankYou] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const mailtoBody = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    const mailtoLink = `mailto:iammdismail0@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(mailtoBody)}`

    window.location.href = mailtoLink

    setShowThankYou(true)
    setFormData({ name: "", email: "", subject: "", message: "" })

    setTimeout(() => {
      setShowThankYou(false)
    }, 5000)
  }

  return (
    <section id="contact" className="section-spacing bg-gray-950/30">
      <div className="container-spacing">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="section-header text-white">Get In Touch</h2>
            <p className="section-subtitle">Have a question or proposal? Let's connect</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gray-900/50 rounded-xl p-8 border border-gray-800"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-200 mb-2 block font-inter">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input font-inter"
                  placeholder="Your name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-200 mb-2 block font-inter">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input font-inter"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <Label htmlFor="subject" className="text-gray-200 mb-2 block font-inter">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input font-inter"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-gray-200 mb-2 block font-inter">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-input min-h-[120px] font-inter"
                  placeholder="Tell me your thoughts..."
                />
              </div>

              <Button type="submit" className="btn-primary w-full font-inter">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>

            <AnimatePresence>
              {showThankYou && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-6 p-4 border border-green-500 rounded-lg flex items-center gap-3 bg-green-500/10"
                >
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <p className="text-green-300 font-inter">Email client opened. Please send to complete the message.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
