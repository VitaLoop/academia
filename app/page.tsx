"use client"

import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import TestimonialsSection from "@/components/testimonials-section"
import SportsSection from "@/components/sports-section"
import PricingSection from "@/components/pricing-section"
import CtaSection from "@/components/cta-section"
import WhatsAppChat from "@/components/whatsapp-chat"

export default function Home() {
  // Função para rolagem suave
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-40 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">FitPass</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("sports")}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Esportes
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Planos
            </button>
          </nav>
          <div>
            <Button
              className="bg-primary hover:bg-primary/90 text-black font-bold"
              onClick={() => scrollToSection("pricing")}
            >
              COMEÇAR AGORA
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <SportsSection />
        <TestimonialsSection />
        <PricingSection />
        <CtaSection />
      </main>

      <footer className="border-t border-zinc-800 py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span className="text-lg font-bold">FitPass</span>
          </div>
          <div className="text-zinc-400 text-sm">
            © {new Date().getFullYear()} FitPass. Todos os direitos reservados.
          </div>
          <div className="flex gap-4">
            <button className="text-zinc-400 hover:text-white transition-colors">Termos</button>
            <button className="text-zinc-400 hover:text-white transition-colors">Privacidade</button>
            <button className="text-zinc-400 hover:text-white transition-colors">Contato</button>
          </div>
        </div>
      </footer>

      <WhatsAppChat />
    </div>
  )
}

