"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X } from "lucide-react"

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappLink = "https://wa.me/5521964579176?text=Quero%20adquirir%20seus%20planos%20Gympass%20e%20Totalpass!"

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-lg p-4 mb-4 w-72 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <h3 className="font-bold text-white">Suporte FitPass</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-zinc-400 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <p className="text-zinc-300 text-sm mb-4">
            Olá! Como podemos ajudar você hoje? Clique abaixo para falar com um de nossos consultores.
          </p>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Iniciar conversa no WhatsApp</Button>
          </a>
        </div>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`rounded-full h-14 w-14 shadow-lg ${isOpen ? "bg-red-500 hover:bg-red-600" : "bg-green-600 hover:bg-green-700"}`}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
    </div>
  )
}

