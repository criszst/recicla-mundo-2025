"use client"

import { Leaf } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export default function Header({ showTitle = true }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 20,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  }

  const topLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 8 }
  }

  const middleLineVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 }
  }

  const bottomLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -8 }
  }

  const menuItems = [
    { href: "#sobre", label: "Sobre" },
    { href: "/doar", label: "Doar" },
    { href: "#contato", label: "Contato" }
  ]

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

            <Link href="/doar"  className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              Doar
            </Link>

            <a href="#contato" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              Contato
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="container mx-auto px-4 py-4 grid grid-cols-3 items-center">
          <div className="flex items-center justify-start">
            <motion.div
              animate={{
                scale: showTitle ? 1 : 0,
                opacity: showTitle ? 1 : 0
              }}
              transition={{ duration: 0.7 }}
              className="bg-linear-to-br from-emerald-500 to-teal-600 p-2 rounded-lg"
            >
              <Leaf className="w-5 h-5 text-white" />
            </motion.div>
          </div>

          <div className="flex justify-center">
            <motion.h1
              animate={{
                opacity: showTitle ? 1 : 0,
                y: showTitle ? 0 : 8
              }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-md font-extrabold"
            >
              <span className="bg-linear-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
                Recicla Mundo
              </span>
            </motion.h1>
          </div>

          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            animate={{
              opacity: showTitle ? 1 : 0
            }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col gap-1.5 p-3 items-end justify-center w-12 h-12 ml-auto"
            aria-label="Menu"
          >
            <motion.span
              variants={topLineVariants}
              animate={menuOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-emerald-600 origin-center"
            />
            <motion.span
              variants={middleLineVariants}
              animate={menuOpen ? "open" : "closed"}
              transition={{ duration: 0.2 }}
              className="w-6 h-0.5 bg-emerald-600"
            />
            <motion.span
              variants={bottomLineVariants}
              animate={menuOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-emerald-600 origin-center"
            />
          </motion.button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              className="overflow-hidden bg-white/95 backdrop-blur-md border-t border-emerald-100"
            >
              <motion.ul className="flex flex-col py-4 px-6 space-y-1">
                {menuItems.map((item) => (
                  <motion.li
                    key={item.href}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, x: 8 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-3 px-4 text-gray-700 hover:text-emerald-600 font-medium transition-colors rounded-lg hover:bg-emerald-50"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
