"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function BackgroundElements() {
  const [stars, setStars] = useState<{ top: string; left: string; size: string; opacity: string }[]>([])

  // Generate stars for background
  useEffect(() => {
    const newStars = Array.from({ length: 100 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      opacity: `${Math.random() * 0.5 + 0.2}`,
    }))
    setStars(newStars)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Subtle stars */}
      {stars.map((star, index) => (
        <motion.div
          key={index}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
          }}
          animate={{
            opacity: [star.opacity, Number(star.opacity) * 1.5, star.opacity],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Gradient blobs */}
      <div className="blob absolute w-[500px] h-[500px] top-[10%] left-[10%] transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="blob absolute w-[600px] h-[600px] top-[60%] right-[5%] transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="blob absolute w-[400px] h-[400px] bottom-[10%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  )
}
