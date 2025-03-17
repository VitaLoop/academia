"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, CreditCard, Dumbbell, Heart, MapPin, Shield, Smartphone, Users } from "lucide-react"

const features = [
  {
    icon: <Dumbbell className="h-10 w-10 text-primary" />,
    title: "Acesso Ilimitado",
    description: "Entre em qualquer academia da rede sem restrições de horário ou frequência",
  },
  {
    icon: <MapPin className="h-10 w-10 text-primary" />,
    title: "500+ Academias",
    description: "Rede com mais de 500 academias e estúdios em todo o Brasil",
  },
  {
    icon: <CreditCard className="h-10 w-10 text-primary" />,
    title: "Economia Real",
    description: "Economize até 70% comparado a mensalidades tradicionais",
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Sem Fidelidade",
    description: "Cancele quando quiser sem multas ou taxas adicionais",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "App Exclusivo",
    description: "Acompanhe seu progresso e encontre academias pelo app",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Comunidade",
    description: "Faça parte de uma comunidade motivada e inspiradora",
  },
  {
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: "Saúde Integral",
    description: "Programas de bem-estar físico e mental para uma vida equilibrada",
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Garantia",
    description: "7 dias de garantia para testar sem compromisso",
  },
]

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="features" className="py-20 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-70" />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Por que escolher o{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">FitPass</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-400 text-lg"
          >
            Revolucione sua experiência fitness com benefícios exclusivos que transformarão sua rotina de exercícios
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
            >
              <Card className="bg-zinc-900/50 border-zinc-800 hover:border-primary/50 transition-all duration-300 h-full group overflow-hidden">
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative">{feature.icon}</div>
                  </div>

                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  <p className="text-zinc-300">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

