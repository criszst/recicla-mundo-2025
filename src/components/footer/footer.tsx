import { Leaf, Mail, MapPin } from "lucide-react";

export function Footer() {
  const thisYear = new Date().getFullYear()

   return (
     <section id="contato" className="relative py-10 px-4 overflow-hidden">
       <div className="absolute inset-0 bg-linear-to-br from-emerald-900 via-teal-800 to-emerald-900" />
       <div className="absolute inset-0 opacity-10">
         <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-400 rounded-full blur-3xl" />
         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-400 rounded-full blur-3xl" />
       </div>

       <div className="container mx-auto max-w-6xl relative z-10">
         <div className="grid md:grid-cols-3 gap-12 mb-16">
           <div>
             <div className="flex items-center gap-3 mb-4">
               <div className="bg-white/10 backdrop-blur-sm p-2 rounded-xl">
                 <Leaf className="w-8 h-8 text-emerald-300" />
               </div>
               <h3 className="text-3xl font-bold text-white">Recicla Mundo {thisYear}</h3>
             </div>
             <p className="text-emerald-100 leading-relaxed text-lg">
               Transformando resíduos em recursos para um futuro sustentável.
             </p>
           </div>

           <div>
             <h4 className="font-bold mb-6 text-white text-xl">Contato</h4>
             <div className="space-y-4">
               <div className="flex items-center gap-3 text-emerald-100 hover:text-white transition-colors group">
                 <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
                   <Mail className="w-5 h-5" />
                 </div>
                 <span className="text-base">contato@loremipsum</span>
               </div>
               <div className="flex items-center gap-3 text-emerald-100">
                 <div className="bg-white/10 p-2 rounded-lg">
                   <MapPin className="w-5 h-5" />
                 </div>
                 <span className="text-base">Brasil</span>
               </div>
             </div>
           </div>

           <div>
             <h4 className="font-bold mb-6 text-white text-xl">Redes Sociais</h4>
             <a
               href="https://instagram.com/reciclamundo.2025oficial"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-3 text-emerald-100 hover:text-white transition-colors group"
             >
               <div className="bg-white/10 p-2 rounded-lg group-hover:bg-linear-to-br group-hover:from-purple-500 group-hover:to-pink-500 transition-all">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                 </svg>
               </div>
               <span className="text-base font-medium">@reciclamundo.2025oficial</span>
             </a>
           </div>
         </div>

         <div className="pt-8 border-t border-white/20 text-center">
           <p className="text-emerald-200 text-base">
             © {thisYear} Recicla Mundo. Todos os direitos reservados.
           </p>
         </div>
       </div>
     </section>
   )
}
