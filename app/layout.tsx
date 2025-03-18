import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "FitPass - Gympass & Totalpass",
  description: "Acesso ilimitado a mais de 500 academias e estúdios. Comece sua transformação hoje!",
  generator: "FitPass",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="min-h-screen bg-black text-white">{children}</body>
    </html>
  )
}



import './globals.css'