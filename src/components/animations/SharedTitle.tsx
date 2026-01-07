'use client'
import { motion } from "motion/react"

export function SharedTitle({ className }: { className?: string }) {
  return (
    <motion.h1
      layoutId="site-title"
      transition={{ type: "spring", stiffness: 120, damping: 22 }}
      className={className}
    >
      <span className="bg-linear-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
        Recicla Mundo
      </span>
    </motion.h1>
  )
}
