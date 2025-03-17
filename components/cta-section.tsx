"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"
import { imageConfig } from "@/lib/image-config"

export default function CtaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Função para rolagem suave
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 opacity-30" />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("${imageConfig.ctaBackground}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-extrabold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">TRANSFORME</span>{" "}
            SUA VIDA{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">HOJE!</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-300 text-lg mb-8 max-w-2xl mx-auto"
          >
            Não espere mais para começar sua jornada fitness. Junte-se a milhares de pessoas que já estão vendo
            resultados reais. Comece com 7 dias de garantia!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-black font-bold text-lg w-full sm:w-auto"
              onClick={() => scrollToSection("pricing")}
            >
              COMEÇAR AGORA <Zap className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-white w-full sm:w-auto"
              onClick={() => scrollToSection("pricing")}
            >
              Ver planos
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 text-sm text-zinc-400"
          >
            Mais de 10.000 pessoas se inscreveram este mês. Não perca essa oportunidade!
          </motion.p>
        </div>
      </div>
    </section>
  )
}

