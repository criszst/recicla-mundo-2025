"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

import Link from "next/link"

export function DonationSection() {
  return (
     <section id="doar" className="relative py-32 px-4 overflow-hidden">
       <div className="absolute inset-0 bg-linear-to-br from-white via-emerald-50/40 to-teal-50" />
       <div className="absolute inset-0 opacity-5">
         <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl" />
         <div className="absolute bottom-20 left-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl" />
       </div>

       <div className="container mx-auto max-w-10xl relative z-10">
         <div className="text-center mb-12">
           <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-xl mb-6">
             <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
               <span className="bg-linear-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
                 Transforme seus resíduos em recursos!
               </span>
             </h2>
             <div className="w-full h-1.5 bg-linear-to-r from-emerald-600 to-teal-500 mx-auto rounded-full" />
           </div>
         </div>

         <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-16 border-2 border-emerald-100 text-center">
           <div className="max-w-10xl mx-auto">

             <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
               Doe itens recicláveis
             </h3>

             <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
               Você pode contribuir doando materiais recicláveis como plástico, papel, vidro, metal e eletrônicos.
               Cada item doado ajuda a construir um futuro mais sustentável e gera renda para comunidades que trabalham com reciclagem.
             </p>

             <div className="grid md:grid-cols-3 gap-6 mb-10">
               <div className="bg-linear-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-200">
                 <p className="text-4xl mb-2">♻️</p>
                 <p className="font-bold text-gray-900">Plástico</p>
                 <p className="text-sm text-gray-600">Garrafas, embalagens</p>
               </div>
               <div className="bg-linear-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-200">
                 <p className="text-4xl mb-2">📄</p>
                 <p className="font-bold text-gray-900">Papel</p>
                 <p className="text-sm text-gray-600">Jornais, papelão</p>
               </div>
               <div className="bg-linear-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-200">
                 <p className="text-4xl mb-2">📱</p>
                 <p className="font-bold text-gray-900">Eletrônicos</p>
                 <p className="text-sm text-gray-600">Celulares, cabos</p>
               </div>
             </div>

             <Link href="/doar">
             <Button
               size="lg"
               className="group text-lg px-12 h-16 bg-linear-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
             >
               Doar Itens
               <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
             </Button>

             </Link>

             <p className="text-sm text-gray-500 mt-6">
               Preencha um formulário rápido e agende a coleta dos seus itens
             </p>
           </div>
         </div>
       </div>
     </section>
   )
}
