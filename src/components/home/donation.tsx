"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Recycle, Smartphone } from "lucide-react"

import { motion, useInView } from "motion/react"
import Link from "next/link"
import { useRef } from "react"

// Donation Section
export function DonationSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const items = [
    { icon: Recycle, title: "Plástico", subtitle: "Garrafas, embalagens", color: "emerald" },
    { icon: FileText, title: "Papel", subtitle: "Jornais, papelão", color: "teal" },
    { icon: Smartphone, title: "Eletrônicos", subtitle: "Celulares, cabos", color: "cyan" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  }

  return (
    <section
      ref={sectionRef}
      id="doar"
      className="relative py-24 md:py-32 px-4 overflow-hidden bg-linear-to-r from-white via-gray-50 to-white"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-teal-200 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="bg-linear-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
                Transforme seus resíduos
              </span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-linear-to-r from-emerald-600 to-teal-500 mx-auto rounded-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 border border-gray-200"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Doe itens recicláveis
            </h3>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed et gravida nulla.
              Aenean sem nulla, scelerisque ac nibh et, rhoncus malesuada erat.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid md:grid-cols-3 gap-6 mb-10"
            >
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group relative bg-linear-to-r from-gray-50 to-white p-6 rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-emerald-50/50 to-teal-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative center">
                    <item.icon className="w-12 h-12 mb-3 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                    <p className="font-bold text-lg text-gray-900 mb-1">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="text-center"
            >
              <Link href="/doar">
              <Button
                size="lg"
                className="group relative overflow-hidden text-lg px-10 h-16 bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  Doar Itens
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>

                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </Button>

              </Link>
              <p className="text-sm text-gray-500 mt-4">
                Preencha um formulário rápido para doar.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
