"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Flame, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { imageConfig } from "@/lib/image-config"

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
    }[] = []

    const createParticles = () => {
      for (let i = 0; i < 100; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: `hsl(${Math.random() * 60 + 200}, 100%, 50%, ${Math.random() * 0.5 + 0.2})`,
        })
      }
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        p.x += p.speedX
        p.y += p.speedY

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1
      }

      requestAnimationFrame(animateParticles)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles.length = 0
      createParticles()
    }

    window.addEventListener("resize", handleResize)
    createParticles()
    animateParticles()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Função para rolagem suave
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ opacity: 0.4 }} />

      <div className="container relative z-10 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <Badge className="w-fit bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
              GYMPASS & TOTALPASS
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                TRANSFORME
              </span>{" "}
              seu corpo e sua vida{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">AGORA!</span>
            </h1>

            <p className="text-lg text-zinc-400">
              Acesso ilimitado a mais de 500 academias e estúdios. Comece sua transformação hoje e desafie seus limites!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
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
            </div>

            <div className="flex items-center gap-4 mt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 border border-zinc-800 flex items-center justify-center text-xs font-bold"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-zinc-400">
                <span className="text-primary font-bold">+10.000</span> pessoas transformaram suas vidas este mês
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-zinc-800 shadow-xl shadow-primary/10">
              <Image
                src={imageConfig.heroMainImage || "/placeholder.svg"}
                alt="Fitness transformation"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Flame className="h-6 w-6 text-primary" />
                  <div className="h-2 bg-zinc-700 rounded-full flex-1">
                    <div className="h-full w-4/5 bg-gradient-to-r from-primary to-blue-500 rounded-full" />
                  </div>
                  <span className="text-sm font-bold">80%</span>
                </div>

                <h3 className="text-xl font-bold mb-2">Resultados Reais</h3>
                <p className="text-sm text-zinc-400">
                  Nossos membros veem resultados em apenas 30 dias de treino consistente
                </p>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-zinc-900 border border-zinc-800 rounded-lg p-3 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-bold">ACESSO ILIMITADO</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

