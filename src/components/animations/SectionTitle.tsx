'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionTitle({
  title,
  subtitle,
  className = '',
}: SectionTitleProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className={`text-center mb-16 ${className}`}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="inline-block backdrop-blur-sm rounded-2xl px-20 py-6 shadow-xl"
      >
        <h2 className="text-2xl md:text-5xl lg:text-6xl font-extrabold">
          <span className="bg-linear-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
            {title}
          </span>
        </h2>

        {subtitle && (
          <p className="mt-3 text-base md:text-lg text-gray-600">
            {subtitle}
          </p>
        )}
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-24 h-1 bg-linear-to-r from-emerald-600 to-teal-500 mx-auto mt-4 rounded-full"
      />
    </motion.div>
  )
}
