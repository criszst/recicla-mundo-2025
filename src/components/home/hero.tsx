'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf } from "lucide-react"

import { useRef } from "react"

import dynamic from 'next/dynamic'

import { motion,  useScroll, useTransform } from "motion/react"
import Link from "next/link"

const NoSSR = dynamic(() => import('@/components/animations/background'), { ssr: false })

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.75])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2])
  const y = useTransform(scrollYProgress, [0, 1], [0, 160])

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 py-32 overflow-hidden"
    >
      <NoSSR>
      </NoSSR>

      <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            scale,
            opacity,
            y,
          }}
          className="container mx-auto max-w-5xl text-center relative z-10"
        >
        <div className="inline-flex items-center gap-2 bg-linear-to-r from-emerald-50 to-teal-50 text-emerald-700 border-2 border-emerald-300 px-5 py-2.5 rounded-full text-sm font-bold mb-8 shadow-lg shadow-emerald-500/20 animate-in fade-in slide-in-from-top-4 duration-700">
          <Leaf className="w-5 h-5 animate-pulse" />
          <span>Movimento pela Sustentabilidade</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-balance mb-8 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          <span className="inline-block bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Transformando Resíduos em
          </span>
          <br />
          <span className="inline-block mt-2 text-transparent bg-clip-text bg-linear-to-r from-emerald-600 via-teal-500 to-emerald-600 animate-gradient bg-size[200%_auto]">
            Recursos
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto mb-12 text-pretty leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          Juntos podemos criar um futuro mais sustentável. O Recicla Mundo 2025 promove educação ambiental e combate a
          poluição plástica através de ações concretas.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
         <Link href="/doar">
          <Button
            size="lg"
            className="group text-base px-10 h-14 bg-linear-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-bold shadow-xl shadow-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 transition-all"
          >
            Doar Agora
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />


          </Button>
         </Link>
          <a href="#sobre">
          <Button
            size="lg"
            variant="outline"
            className="text-base px-10 h-14 border-2 border-emerald-400 text-emerald-700 hover:bg-emerald-50 bg-white/80 backdrop-blur-sm font-bold hover:scale-105 transition-all shadow-lg"
          >

              Saiba mais

          </Button>
           </a>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  )
}
