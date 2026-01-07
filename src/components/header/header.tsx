'use client'

import { Leaf } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { SharedTitle } from "../animations/SharedTitle"

export default function Header({ showTitle = true }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  const menuItems = [
    { id: 1, label: "Sobre",  url: "#sobre",  },
    { id: 2, label: "Doar",  url: "/doar",  },
    { id: 3, label: "Contato", url: "#contato",  }
  ]


  const itemVariants = {
    open: { y: 0, opacity: 1 },
    closed: { y: 20, opacity: 0 }
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-sm"
    >
      <div className="container mx-auto px-4 md:px-10 py-4 md:py-5">
        <div className="grid grid-cols-3 items-center">

          {/* LOGO */}
          <div className="flex items-center justify-start">
            <AnimatePresence>
              {showTitle && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="bg-linear-to-br from-emerald-500 to-teal-600 p-2 rounded-lg"
                >
                  <Leaf className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>


          <div className="flex justify-center">
            <AnimatePresence mode="wait">
              {showTitle && (
                <SharedTitle className="text-xl md:text-2xl font-extrabold whitespace-nowrap" />
              )}
            </AnimatePresence>
          </div>


          <div className="flex justify-end">

            <nav className="hidden md:flex gap-8" onMouseLeave={() => setHoveredPath(null)}>
              {menuItems.map((item) => (
                <Link
                  key={item.url}
                  href={item.url}
                  onMouseEnter={() => setHoveredPath(item.url)}
                  className="relative px-1 py-1 text-gray-700 hover:text-emerald-600 font-medium transition-colors"
                >
                  <span>{item.label}</span>

                  {item.url === hoveredPath && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute left-0 bottom-0 w-full h-0.5 bg-emerald-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile Button */}
            <button
              className="md:hidden p-2 text-emerald-600"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="space-y-1.5">
                <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }} className="block w-5 h-0.5 bg-current" />
                <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="block w-6 h-0.5 bg-current" />
                <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }} className="block w-5 h-0.5 bg-current" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white border-t border-emerald-50"
          >
            <ul className="p-6 space-y-4">
              {menuItems.map((item) => (
                <motion.li key={item.id} variants={itemVariants}>
                  <Link
                    key={item.url}
                    href={item.url}
                    onMouseEnter={() => setHoveredPath(item.url)}
                    className="relative px-1 py-1 text-gray-700 hover:text-emerald-600 font-medium transition-colors"
                  >
                    <span>{item.label}</span>

                    {item.url === hoveredPath && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute left-0 bottom-0 w-full h-0.5 bg-emerald-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
