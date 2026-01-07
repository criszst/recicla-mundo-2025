'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, Recycle, ArrowLeft, Search, Info } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import Link from "next/link"
import { useState, useMemo } from "react"

interface DonationItem {
  id: string;
  name: string;
  category: string;
  icon: string;
}

export default function DonationFormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    selectedItems: [] as string[],
    itemSearch: "",
    additionalInfo: "",
  })

  const [activeCategory, setActiveCategory] = useState("Todos")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const availableItems: DonationItem[] = [
    { id: "plastico-pet", name: "Garrafas PET", category: "Plástico", icon: "🍾" },
    { id: "plastico-embalagem", name: "Embalagens Plásticas", category: "Plástico", icon: "📦" },
    { id: "papel-jornal", name: "Jornais e Revistas", category: "Papel", icon: "📰" },
    { id: "papel-papelao", name: "Papelão", category: "Papel", icon: "📦" },
    { id: "vidro-garrafas", name: "Garrafas de Vidro", category: "Vidro", icon: "🍷" },
    { id: "metal-latas", name: "Latas de Alumínio", category: "Metal", icon: "🥫" },
    { id: "eletronico-celular", name: "Celulares", category: "Eletrônicos", icon: "📱" },
    { id: "eletronico-computador", name: "Notebooks", category: "Eletrônicos", icon: "💻" },
    { id: "eletronico-pilhas", name: "Pilhas e Baterias", category: "Eletrônicos", icon: "🔋" },
  ]

  const categories = ["Todos", ...Array.from(new Set(availableItems.map(i => i.category)))]


  const filteredItems = useMemo(() => {
    return availableItems.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(formData.itemSearch.toLowerCase())
      const matchesCategory = activeCategory === "Todos" || item.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }, [formData.itemSearch, activeCategory])

  const toggleItem = (itemId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedItems: prev.selectedItems.includes(itemId)
        ? prev.selectedItems.filter(id => id !== itemId)
        : [...prev.selectedItems, itemId]
    }))
  }


  const handleSendEmail = async (data: typeof formData) => {
    setIsSubmitting(true)
    try {
      // TODO: futura implementacao da api pro email
      console.log("Enviando para API:", data)

    } catch (error: unknown) {
      alert("Erro ao enviar. Tente novamente.")
      console.log(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.selectedItems.length === 0) return
    handleSendEmail(formData)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-slate-50 pt-20 pb-16 px-4"
    >
      <div className="container mx-auto max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Voltar para o início
        </Link>

        <div className="bg-white rounded-[2rem] shadow-xl shadow-emerald-900/5 overflow-hidden border border-emerald-100">

          <div className="bg-emerald-600 p-8 text-white text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-block p-3 bg-white/20 rounded-2xl mb-4 backdrop-blur-md"
            >
              <Recycle className="w-8 h-8" />
            </motion.div>
            <h1 className="text-3xl font-bold">Doação de Itens</h1>
            <p className="text-emerald-100 mt-2">Transforme seu descarte em oportunidade</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10">


            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold">1</span>
                <h2 className="text-xl font-bold text-gray-800">Seus Dados</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="text-sm font-semibold text-gray-600 ml-1">Nome Completo</label>
                  <Input
                    required
                    placeholder="Como podemos te chamar?"
                    className="h-12 rounded-xl border-gray-200 focus:ring-emerald-500"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-600 ml-1">WhatsApp / Telefone</label>
                  <Input
                    required
                    placeholder="(00) 00000-0000"
                    className="h-12 rounded-xl border-gray-200"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-600 ml-1">E-mail</label>
                  <Input
                    required
                    type="email"
                    placeholder="email@exemplo.com"
                    className="h-12 rounded-xl border-gray-200"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
            </section>


            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold">2</span>
                  <h2 className="text-xl font-bold text-gray-800">O que você vai doar?</h2>
                </div>
                <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">
                  {formData.selectedItems.length} selecionados
                </span>
              </div>

              <div className="space-y-4">

                <div className="flex flex-col gap-4">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      placeholder="Busque por material (ex: Vidro, Papelão...)"
                      className="pl-12 h-14 rounded-2xl border-2 border-emerald-50 focus:border-emerald-500 bg-emerald-50/30"
                      value={formData.itemSearch}
                      onChange={e => setFormData({...formData, itemSearch: e.target.value})}
                    />
                  </div>

                  <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    {categories.map(cat => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                          activeCategory === cat
                          ? "bg-emerald-600 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>


                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <AnimatePresence mode="popLayout">
                    {filteredItems.map(item => (
                      <motion.button
                        layout
                        key={item.id}
                        type="button"
                        onClick={() => toggleItem(item.id)}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative p-4 rounded-2xl border-2 transition-all flex flex-col items-center text-center gap-2 ${
                          formData.selectedItems.includes(item.id)
                          ? "border-emerald-500 bg-emerald-50"
                          : "border-gray-100 bg-white hover:border-emerald-200"
                        }`}
                      >
                        <span className="text-3xl">{item.icon}</span>
                        <span className="text-xs font-bold text-gray-800 leading-tight">{item.name}</span>
                        {formData.selectedItems.includes(item.id) && (
                          <motion.div
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            className="absolute -top-2 -right-2 bg-emerald-500 text-white rounded-full p-1"
                          >
                            <Check className="w-3 h-3" strokeWidth={4} />
                          </motion.div>
                        )}
                      </motion.button>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </section>


            <section className="space-y-4">
               <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold">3</span>
                <h2 className="text-xl font-bold text-gray-800">Mais detalhes</h2>
              </div>
              <div className="relative">
                <textarea
                  placeholder="Ex: 'Os vidros estão em caixas'..."
                  className="w-full h-32 p-4 rounded-2xl border-gray-200 focus:ring-emerald-500 focus:border-emerald-500 resize-none bg-gray-50/50"
                  value={formData.additionalInfo}
                  onChange={e => setFormData({...formData, additionalInfo: e.target.value})}
                />
                <div className="absolute bottom-3 right-3 text-gray-400">
                  <Info className="w-4 h-4" />
                </div>
              </div>
            </section>


            <Button
              type="submit"
              disabled={formData.selectedItems.length === 0 || isSubmitting}
              className="w-full h-16 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-bold shadow-lg shadow-emerald-200 transition-all active:scale-95"
            >
              {isSubmitting ? (
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
                  <Recycle className="w-6 h-6" />
                </motion.div>
              ) : (
                <>Solicitar Coleta Agora</>
              )}
            </Button>

            <p className="text-center text-xs text-gray-400">
              Ao enviar, nossa equipe analisará os itens e entrará em contato via WhatsApp.
            </p>
          </form>
        </div>
      </div>
    </motion.div>
  )
}
