  'use client'
  
  import { Leaf, Recycle, Heart } from "lucide-react"
  
  export function AboutSection({ scrollY = 0 }) {
  
    // TODO: Change parallax to function when element appears on viewport
    const sectionOffset = 400
    const parallaxOffset = (scrollY - sectionOffset) * 0.1
  
    const fadeIn = Math.max(0, Math.min(1, (scrollY - sectionOffset + 100) / 200))
  
    return (
      <section id="sobre" className="py-24 px-4 bg-linear-to-b from-white to-emerald-50/30 relative overflow-hidden">
        {/* Parallax Background Elements */}
        <div
          className="absolute top-20 right-10 w-64 h-64 bg-emerald-200 rounded-full blur-3xl opacity-20"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-teal-200 rounded-full blur-3xl opacity-20"
          style={{ transform: `translateY(${-parallaxOffset}px)` }}
        />
  
        <div className="container mx-auto max-w-6xl relative z-10">
          <div
            className="text-center mb-16 transition-all duration-500"
            style={{
              opacity: fadeIn,
              transform: `translateY(${(1 - fadeIn) * 50}px)`,
            }}
          >
            <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl px-40 py-6 shadow-xl">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-3">
                <span className="bg-linear-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
                  Sobre o Projeto
                </span>
              </h2>
              <div className="w-full h-1.5 bg-linear-to-r from-emerald-600 to-teal-500 mx-auto rounded-full" />
            </div>
          </div>
  
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Recycle, title: 'Reciclagem Consciente', text: 'Educamos comunidades sobre a importância da reciclagem e como transformar resíduos em oportunidades.', delay: 0 },
              { icon: Leaf, title: 'Meio Ambiente', text: 'Trabalhamos ativamente na preservação ambiental e no combate à poluição plástica em nossos ecossistemas.', delay: 0.1 },
              { icon: Heart, title: 'Impacto Social', text: 'Criamos oportunidades e promovemos mudanças reais nas comunidades através da sustentabilidade.', delay: 0.2 }
            ].map((item, index) => {
              const cardFade = Math.max(0, Math.min(1, (scrollY - sectionOffset + 500 - index * 100) / 400))
              const Icon = item.icon
  
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-linear-to-br from-green-50 to-green-100 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                  style={{
                    opacity: cardFade,
                    transform: `translateY(${(1 - cardFade) * 30}px)`,
                    transitionDelay: `${item.delay}s`,
                  }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 border-2 border-green-300 bg-white/50">
                    <Icon className="w-8 h-8 text-green-800" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              )
            })}
          </div>
  
          <div
            className="max-w-3xl mx-auto text-center transition-all duration-500"
            style={{
              opacity: Math.max(0, Math.min(1, (scrollY - sectionOffset + 700) / 400)),
              transform: `translateY(${Math.max(0, 50 - (scrollY - sectionOffset + 700) / 8)}px)`,
            }}
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              O Recicla Mundo 2025 nasceu da necessidade urgente de ação contra a crise ambiental. Acreditamos que
              pequenas atitudes transformam realidades e que juntos podemos construir um planeta mais limpo, verde e
              sustentável para as futuras gerações.
            </p>
          </div>
        </div>
      </section>
    )
  }
