"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Zap } from "lucide-react"

// Estrutura de planos com links diretos para WhatsApp
const plans = [
  {
    id: "basic",
    name: "Básico",
    price: "79",
    description: "Ideal para iniciantes que buscam uma opção econômica",
    features: [
      "Acesso a 100+ academias",
      "Horários limitados (off-peak)",
      "2 modalidades diferentes",
      "Suporte por e-mail",
    ],
    popular: false,
    cta: "Começar agora",
    ctaUrl: "https://wa.me/5521964579176?text=Quero%20adquirir%20o%20plano%20B%C3%81SICO!",
  },
  {
    id: "premium",
    name: "Premium",
    price: "129",
    description: "Nossa opção mais popular para entusiastas de fitness",
    features: [
      "Acesso a 300+ academias",
      "Horário integral",
      "Todas as modalidades",
      "Suporte prioritário 24/7",
      "App exclusivo com treinos",
      "Avaliação física mensal",
    ],
    popular: true,
    cta: "Escolher Premium",
    ctaUrl: "https://wa.me/5521964579176?text=Quero%20adquirir%20o%20plano%20PREMIUM!",
  },
  {
    id: "vip",
    name: "VIP",
    price: "199",
    description: "Experiência completa para quem busca resultados máximos",
    features: [
      "Acesso a 500+ academias",
      "Horário integral",
      "Todas as modalidades + exclusivas",
      "Suporte VIP 24/7",
      "App exclusivo com treinos personalizados",
      "Avaliação física quinzenal",
      "Nutricionista incluso",
      "Personal trainer 2x por mês",
    ],
    popular: false,
    cta: "Escolher VIP",
    ctaUrl: "https://wa.me/5521964579176?text=Quero%20adquirir%20o%20plano%20VIP!",
  },
]

export default function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_var(--tw-gradient-stops))] from-black via-zinc-900 to-black opacity-80" />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Planos{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">Acessíveis</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-400 text-lg"
          >
            Escolha o plano ideal para seus objetivos e transforme sua vida agora mesmo
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className={`${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
            >
              <Card
                className={`bg-zinc-900/50 border-zinc-800 h-full relative overflow-hidden ${
                  plan.popular ? "border-primary/50 shadow-lg shadow-primary/20" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-primary text-black font-bold px-4 py-1 text-xs transform rotate-45 translate-x-[30%] translate-y-[-30%] shadow-md">
                      POPULAR
                    </div>
                  </div>
                )}

                <CardHeader className="pb-0">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-extrabold text-primary">R${plan.price}</span>
                    <span className="text-zinc-300 ml-1">/mês</span>
                  </div>
                  <p className="text-sm text-zinc-300 mt-2">{plan.description}</p>
                </CardHeader>

                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <a href={plan.ctaUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-primary hover:bg-primary/90 text-black"
                          : "bg-zinc-800 hover:bg-zinc-700 text-white"
                      }`}
                      size="lg"
                    >
                      {plan.cta}
                      {plan.popular && <Zap className="ml-2 h-5 w-5" />}
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-zinc-400 mb-4">
            Todos os planos incluem 7 dias de garantia. Cancele quando quiser sem multas.
          </p>
          <Badge variant="outline" className="bg-zinc-900 border-zinc-700 text-white">
            Economize 20% nos planos anuais
          </Badge>
        </div>
      </div>
    </section>
  )
}

