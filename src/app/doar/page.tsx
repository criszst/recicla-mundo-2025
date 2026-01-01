'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, Mail, Phone, Recycle, User, X, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function DonationFormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    selectedItems: [] as string[],
    itemSearch: "",
    additionalInfo: "",
  })

  const [showItemSearch, setShowItemSearch] = useState(false)

  const availableItems = [
    { id: "plastico-pet", name: "Garrafas PET", category: "Plástico", icon: "🍾" },
    { id: "plastico-embalagem", name: "Embalagens Plásticas", category: "Plástico", icon: "📦" },
    { id: "plastico-sacolas", name: "Sacolas Plásticas", category: "Plástico", icon: "🛍️" },
    { id: "papel-jornal", name: "Jornais e Revistas", category: "Papel", icon: "📰" },
    { id: "papel-papelao", name: "Papelão", category: "Papel", icon: "📦" },
    { id: "papel-escritorio", name: "Papel de Escritório", category: "Papel", icon: "📄" },
    { id: "vidro-garrafas", name: "Garrafas de Vidro", category: "Vidro", icon: "🍷" },
    { id: "vidro-potes", name: "Potes de Vidro", category: "Vidro", icon: "🫙" },
    { id: "metal-latas", name: "Latas de Alumínio", category: "Metal", icon: "🥫" },
    { id: "metal-ferro", name: "Sucata de Ferro", category: "Metal", icon: "⚙️" },
    { id: "eletronico-celular", name: "Celulares", category: "Eletrônicos", icon: "📱" },
    { id: "eletronico-computador", name: "Computadores/Notebooks", category: "Eletrônicos", icon: "💻" },
    { id: "eletronico-cabos", name: "Cabos e Fios", category: "Eletrônicos", icon: "🔌" },
    { id: "eletronico-pilhas", name: "Pilhas e Baterias", category: "Eletrônicos", icon: "🔋" },
  ]

  const filteredItems = availableItems.filter(item =>
    item.name.toLowerCase().includes(formData.itemSearch.toLowerCase()) ||
    item.category.toLowerCase().includes(formData.itemSearch.toLowerCase())
  )

  const toggleItem = (itemId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedItems: prev.selectedItems.includes(itemId)
        ? prev.selectedItems.filter(id => id !== itemId)
        : [...prev.selectedItems, itemId]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Obrigado pela sua doação! Entraremos em contato em breve para agendar a coleta.")
    console.log("Dados do formulário:", formData)
  }

  const getSelectedItemsDetails = () => {
    return availableItems.filter(item => formData.selectedItems.includes(item.id))
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-teal-50 pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <button
            className="flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-semibold transition-colors group"
          >
            <ArrowRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
            Voltar para Início
          </button>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-emerald-100">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
              <span className="bg-linear-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
                Doação de Itens
              </span>
            </h1>
            <p className="text-lg text-gray-600">
              Preencha os dados abaixo para doar seus materiais recicláveis.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Data Section */}
            <div className="space-y-6">
              <div className="border-l-4 border-emerald-600 pl-4">
                <h3 className="text-2xl font-bold text-gray-900">Dados Pessoais</h3>
                <p className="text-sm text-gray-600 mt-1">Informações para contato e agendamento da coleta</p>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Nome Completo *</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="pl-12 h-12 border-2 border-gray-300 focus:border-emerald-500 rounded-xl"
                    placeholder="João Silva"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">E-mail *</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-12 h-12 border-2 border-gray-300 focus:border-emerald-500 rounded-xl"
                      placeholder="joao@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Telefone *</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="pl-12 h-12 border-2 border-gray-300 focus:border-emerald-500 rounded-xl"
                      placeholder="(11) 98765-4321"
                    />
                  </div>
                </div>
              </div>
            </div>



            {/* Items Selection Section */}
            <div className="space-y-6">
              <div className="border-l-4 border-rose-600 pl-4">
                <h3 className="text-2xl font-bold text-gray-900">Itens para Doação</h3>
                <p className="text-sm text-gray-600 mt-1">Selecione os materiais que você deseja doar</p>
              </div>

              <div className="bg-linear-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl border-2 border-emerald-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative flex-1">
                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <Input
                      type="text"
                      value={formData.itemSearch}
                      onChange={(e) => {
                        setFormData({ ...formData, itemSearch: e.target.value })
                        setShowItemSearch(true)
                      }}
                      onFocus={() => setShowItemSearch(true)}
                      className="pl-12 h-12 border-2 border-emerald-300 focus:border-emerald-500 rounded-xl bg-white"
                      placeholder="Buscar item ou categoria (ex: plástico, celular...)"
                    />
                  </div>
                  <Button
                    type="button"
                    onClick={() => setShowItemSearch(!showItemSearch)}
                    className="h-12 px-6 bg-emerald-600 hover:bg-emerald-700"
                  >
                    {showItemSearch ? "Ocultar" : "Mostrar Todos"}
                  </Button>
                </div>

                {showItemSearch && (
                  <div className="max-h-96 overflow-y-auto bg-white rounded-xl border-2 border-emerald-200 p-4">
                    <div className="grid md:grid-cols-2 gap-3">
                      {filteredItems.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => toggleItem(item.id)}
                          className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-left ${
                            formData.selectedItems.includes(item.id)
                              ? "border-emerald-600 bg-emerald-50 shadow-md"
                              : "border-gray-200 hover:border-emerald-300 bg-white"
                          }`}
                        >
                          <div className="shrink-0 text-3xl">{item.icon}</div>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-gray-900 truncate">{item.name}</p>
                            <p className="text-sm text-gray-600">{item.category}</p>
                          </div>
                          {formData.selectedItems.includes(item.id) && (
                            <Check className="w-6 h-6 text-emerald-600 shrink-0" />
                          )}
                        </button>
                      ))}
                    </div>
                    {filteredItems.length === 0 && (
                      <p className="text-center text-gray-500 py-8">
                        Nenhum item encontrado. Tente outro termo de busca.
                      </p>
                    )}
                  </div>
                )}
              </div>

              {formData.selectedItems.length > 0 && (
                <div className="bg-white border-2 border-emerald-200 rounded-2xl p-6">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-600" />
                    Itens Selecionados ({formData.selectedItems.length})
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {getSelectedItemsDetails().map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-2 bg-linear-to-r from-emerald-100 to-teal-100 px-4 py-2 rounded-full border border-emerald-300"
                      >
                        <span className="text-xl">{item.icon}</span>
                        <span className="font-semibold text-gray-900 text-sm">{item.name}</span>
                        <button
                          type="button"
                          onClick={() => toggleItem(item.id)}
                          className="ml-1 text-emerald-700 hover:text-emerald-900"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Informações Adicionais (opcional)
                </label>
                <textarea
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                  className="w-full h-32 p-4 border-2 border-gray-300 focus:border-emerald-500 rounded-xl resize-none"
                  placeholder="Descreva a quantidade aproximada, estado dos itens ou qualquer outra informação relevante..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t-2 border-gray-200">
              <Button
                type="submit"
                disabled={formData.selectedItems.length === 0}
                className="w-full h-16 text-xl font-bold bg-linear-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                <Recycle className="mr-3 w-6 h-6" />
                Confirmar Doação
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
