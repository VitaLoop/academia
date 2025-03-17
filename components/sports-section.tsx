"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { imageConfig } from "@/lib/image-config"

const sports = [
  {
    name: "Musculação",
    benefits: ["Ganho de massa muscular", "Aumento de força", "Melhora postura"],
    image: imageConfig.sportsImages.musculacao,
  },
  {
    name: "Crossfit",
    benefits: ["Condicionamento físico", "Resistência", "Explosão muscular"],
    image: imageConfig.sportsImages.crossfit,
  },
  {
    name: "Natação",
    benefits: ["Baixo impacto", "Trabalha todo o corpo", "Melhora cardio"],
    image: imageConfig.sportsImages.natacao,
  },
  {
    name: "Pilates",
    benefits: ["Flexibilidade", "Fortalecimento do core", "Alívio de dores"],
    image: imageConfig.sportsImages.pilates,
  },
  {
    name: "Yoga",
    benefits: ["Equilíbrio", "Redução de estresse", "Consciência corporal"],
    image: imageConfig.sportsImages.yoga,
  },
  {
    name: "Spinning",
    benefits: ["Queima calórica", "Resistência", "Saúde cardiovascular"],
    image: imageConfig.sportsImages.spinning,
  },
]

export default function SportsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="sports" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_var(--tw-gradient-stops))] from-black via-zinc-900 to-black opacity-80" />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Modalidades{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">Disponíveis</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-400 text-lg"
          >
            Explore diversas modalidades esportivas e encontre a que mais combina com seu estilo de vida
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sports.map((sport, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
            >
              <Card className="bg-zinc-900/50 border-zinc-800 hover:border-primary/50 transition-all duration-300 h-full group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={sport.image || "/placeholder.svg"}
                    alt={sport.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{sport.name}</h3>
                </div>

                <CardContent className="p-6">
                  <h4 className="text-sm font-medium text-zinc-300 mb-3">Benefícios:</h4>
                  <div className="flex flex-wrap gap-2">
                    {sport.benefits.map((benefit, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="bg-zinc-800/50 hover:bg-zinc-800 border-zinc-700 text-zinc-200"
                      >
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

