"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  duration: number
  delay: number
  direction: number
}

export function BackgroundAnimation() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 1,
      color: ["#00205B", "#D4AF37", "#0077C8"][i % 3],
      duration: Math.random() * 15 + 15,
      delay: Math.random() * 5,
      direction: Math.random() > 0.5 ? 1 : -1,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {/* === SOFT GLOWING ORBS === */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-25"
        style={{
          background: "radial-gradient(circle, #00205B, transparent 70%)",
        }}
        animate={{
          x: [0, 120, -60, 0],
          y: [0, -80, 60, 0],
          rotate: [0, 15, -10, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        initial={{ top: "5%", left: "5%" }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
        style={{
          background: "radial-gradient(circle, #D4AF37, transparent 70%)",
        }}
        animate={{
          x: [0, -150, 100, 0],
          y: [0, 60, -50, 0],
          rotate: [0, -10, 20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        initial={{ top: "40%", right: "5%" }}
      />

      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full blur-[110px] opacity-15"
        style={{
          background: "radial-gradient(circle, #0077C8, transparent 70%)",
        }}
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -100, 60, 0],
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 45, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        initial={{ bottom: "5%", left: "25%" }}
      />

      {/* === FLOATING PARTICLES === */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            left: `${p.x}%`,
            top: `${p.y}%`,
            boxShadow: `0 0 6px ${p.color}55`,
          }}
          animate={{
            x: [0, p.direction * 30, -p.direction * 30, 0],
            y: [0, -80, 0],
            opacity: [0, 0.7, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* === SUBTLE MOVING GRID LAYER === */}
      <motion.div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #00205B 1px, transparent 1px),
            linear-gradient(to bottom, #00205B 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px", "0px 0px"],
        }}
        transition={{
          duration: 40,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* === LIGHT SHIMMER LAYER === */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent mix-blend-overlay"
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
    </div>
  )
}
