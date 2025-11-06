"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface TypingAnimationProps {
  text: string
  className?: string
  delay?: number
  speed?: number
  showCursor?: boolean
}

export function TypingAnimation({
  text,
  className = "",
  delay = 0,
  speed = 0.05,
  showCursor = true,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!hasStarted && delay > 0) {
      const startTimeout = setTimeout(() => {
        setHasStarted(true)
      }, delay * 1000)
      return () => clearTimeout(startTimeout)
    }

    if (hasStarted && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1))
        setCurrentIndex((prev) => prev + 1)
      }, speed * 1000)

      return () => clearTimeout(timeout)
    } else if (hasStarted && currentIndex >= text.length) {
      setIsComplete(true)
    }
  }, [currentIndex, text, speed, delay, hasStarted])

  useEffect(() => {
    if (delay === 0) {
      setHasStarted(true)
    }
  }, [delay])

  return (
    <span className={className}>
      {displayedText}
      {showCursor && !isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "linear" }}
          className="inline-block ml-1"
        >
          |
        </motion.span>
      )}
    </span>
  )
}
