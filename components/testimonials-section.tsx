"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { imageConfig } from "@/lib/image-config"

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Membro há 8 meses",
    image: imageConfig.testimonialImages.carlosSilva,
    content:
      "Desde que comecei a usar o FitPass, minha vida mudou completamente. Tenho acesso a academias de alto padrão por um preço que cabe no meu bolso. Perdi 15kg em apenas 6 meses!",
    rating: 5,
  },
  {
    name: "Ana Oliveira",
    role: "Membro há 1 ano",
    image: imageConfig.testimonialImages.anaOliveira,
    content:
      "A flexibilidade de poder treinar em qualquer academia da rede é incrível! Viajo muito a trabalho e sempre encontro uma unidade próxima. O app é super intuitivo e facilita muito.",
    rating: 5,
  },
  {
    name: "Marcos Pereira",
    role: "Membro há 3 meses",
    image: imageConfig.testimonialImages.marcosPereira,
    content:
      "Economizo mais de R$150 por mês usando o FitPass em comparação com a mensalidade da minha antiga academia. E o melhor: tenho acesso a muito mais modalidades!",
    rating: 4,
  },
  {
    name: "Juliana Costa",
    role: "Membro há 6 meses",
    image: imageConfig.testimonialImages.julianaCosta,
    content:
      "Experimentei várias modalidades que nunca tinha tentado antes. Descobri que amo pilates e agora faço 3x por semana. Minha postura melhorou e as dores nas costas sumiram!",
    rating: 5,
  },
  {
    name: "Roberto Almeida",
    role: "Membro há 2 anos",
    image: imageConfig.testimonialImages.robertoAlmeida,
    content:
      "Sou usuário desde o início e posso dizer que o serviço só melhora. O suporte é excelente e sempre resolvem qualquer problema rapidamente. Recomendo a todos!",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 2))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(testimonials.length / 2)) % Math.ceil(testimonials.length / 2))
  }

  return (
    <section id="testimonials" className="py-20 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-70" />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            O que nossos{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">Membros</span>{" "}
            dizem
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-400 text-lg"
          >
            Histórias reais de pessoas que transformaram suas vidas com o FitPass
          </motion.p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonials.slice(pageIndex * 2, pageIndex * 2 + 2).map((testimonial, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                      >
                        <Card className="bg-zinc-900/50 border-zinc-800 h-full">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4 mb-4">
                              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                                <Image
                                  src={testimonial.image || "/placeholder.svg"}
                                  alt={testimonial.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>

                              <div>
                                <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                                <p className="text-sm text-zinc-300">{testimonial.role}</p>
                                <div className="flex mt-1">
                                  {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${i < testimonial.rating ? "text-primary fill-primary" : "text-zinc-600"}`}
                                    />
                                  ))}
                                </div>
                              </div>

                              <Quote className="h-8 w-8 text-primary/20 ml-auto" />
                            </div>

                            <p className="text-zinc-200">{testimonial.content}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-white"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, i) => (
              <Button
                key={i}
                variant="outline"
                size="icon"
                className={`w-3 h-3 p-0 rounded-full ${
                  i === currentIndex ? "bg-primary border-primary" : "bg-zinc-800 border-zinc-700 border-2"
                }`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}

            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-white"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

