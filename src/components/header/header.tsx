"use client"

import { Leaf } from "lucide-react"
import { useState } from "react"

import { motion } from "motion/react"

export default function Header({ showTitle = true }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.header
         initial={{ opacity: 0, y: -12 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{
           duration: 0.6,
           ease: "easeOut",
         }}
         className="fixed top-0 left-0 right-0 z-40
                    bg-white/95 backdrop-blur-md
                    border-b border-emerald-100 shadow-sm"
       >
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="container mx-auto px-10 py-5 grid grid-cols-3 items-center">
          <div className="flex items-center justify-start gap-3">
            <div
              className={`bg-linear-to-br from-emerald-500 to-teal-600 p-2 rounded-lg transition-all duration-700 ${
                showTitle ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
            >
              <Leaf className="w-6 h-6 text-white" />
            </div>
          </div>

          <div className="flex justify-center">
            {showTitle && (
              <motion.h1
                layoutId="site-title"
                transition={{ type: "spring", stiffness: 120, damping: 22 }}
                className="text-2xl font-extrabold"
              >
                <span className="bg-linear-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
                  Recicla Mundo
                </span>
              </motion.h1>
            )}
          </div>

          <nav
            className={`flex justify-end gap-6 transition-all duration-700 ease-out delay-500 ${
              showTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a href="#sobre" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              Sobre
            </a>
            <a href="#doar" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              Doar
            </a>
            <a href="#contato" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              Contato
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="container mx-auto px-2 grid grid-cols-3 items-center">
          <div className="flex items-center justify-start p-1 mt-2">
            <div
              className={`bg-linear-to-br from-emerald-500 to-teal-600 p-2 rounded-lg transition-all duration-700 ease-out ${
                showTitle ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
            >
              <Leaf className="w-5 h-5 text-white" />
            </div>
          </div>

          <div className="flex justify-center">
            <motion.h1
              // layoutId="site-title"
              className={`text-[1.3rem] mt-4 font-extrabold transition-all duration-1000 ease-out delay-300 ${
                showTitle ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
              }`}
            >
              <span className="bg-linear-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
                Recicla Mundo
              </span>
            </motion.h1>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`flex flex-col gap-1.5 p-3 mt-2 items-end transition-all duration-700 ease-out delay-500 ${
              showTitle ? 'opacity-100' : 'opacity-0'
            }`}
            aria-label="Menu"
          >
            <span className={`w-6 h-0.5 bg-emerald-600 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-emerald-600 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-emerald-600 transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <nav
          className={`overflow-hidden py-2 transition-all duration-300 ${
            menuOpen ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4 py-4 border-t border-emerald-100">
            <a
              href="#sobre"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors px-2"
            >
              Sobre
            </a>
            <a
              href="#doar"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors px-2"
            >
              Doar
            </a>
            <a
              href="#contato"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors px-2"
            >
              Contato
            </a>
          </div>
        </nav>
      </div>
    </motion.header>
  )
}
