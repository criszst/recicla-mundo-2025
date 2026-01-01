'use client'

import { Leaf } from 'lucide-react'
import { motion } from "motion/react"

// Minimal Loading Screen Component
export default function LoadingScreen({onFinish}: { onFinish: () => void }) {
  const container = {
    visible: {
      transition: { staggerChildren: 0.06 },
    },
  }

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  }
  return (
    <div
         className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-700 delay-700`}
       >
         {/* Floating Leaves */}
         <div className={`absolute inset-0 overflow-hidden transition-opacity duration-500`}>
           {[...Array(8)].map((_, i) => (
             <div
               key={i}
               className="absolute"
               style={{
                 top: `${15 + (i * 12) % 70}%`,
                 left: `${10 + (i * 15) % 80}%`,
                 animation: `float ${3 + (i % 3)}s ease-in-out infinite`,
                 animationDelay: `${i * 0.3}s`,
               }}
             >
               <Leaf
                 className="text-emerald-200 opacity-40"
                 style={{
                   width: `${40 + (i % 3) * 20}px`,
                   height: `${40 + (i % 3) * 20}px`,
                   transform: `rotate(${i * 45}deg)`,
                 }}
               />
             </div>
           ))}


         </div>

         {/* Main Title */}
         <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-white"
            >
              <motion.h1
                layoutId="site-title"
                variants={container}
                initial="hidden"
                animate="visible"
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="text-6xl md:text-8xl font-extrabold"
                onAnimationComplete={onFinish}
              >
                {"Recicla Mundo".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={letter}
                    className="inline-block bg-linear-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>
            </motion.div>

         <style jsx>{`
           @keyframes float {
             0%, 100% {
               transform: translateY(0px) rotate(0deg);
             }
             50% {
               transform: translateY(-20px) rotate(10deg);
             }
           }
         `}</style>
       </div>
  )
}
