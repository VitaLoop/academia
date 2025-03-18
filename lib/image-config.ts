// Este arquivo centraliza todas as URLs de imagem do site
// Substitua as URLs de placeholder pelas suas imagens hospedadas

type ImageConfig = {
  // Hero Section
  heroMainImage: string

  // Sports Section
  sportsImages: {
    musculacao: string
    crossfit: string
    natacao: string
    pilates: string
    yoga: string
    spinning: string
  }

  // Testimonials Section
  testimonialImages: {
    carlosSilva: string
    anaOliveira: string
    marcosPereira: string
    julianaCosta: string
    robertoAlmeida: string
  }

  // Background Images
  ctaBackground: string
}

export const imageConfig: ImageConfig = {
  // Hero Section
  heroMainImage: "https://iili.io/3oUlNkJ.gif",

  // Sports Section
  sportsImages: {
    musculacao: "https://iili.io/3olAGMQ.png",
    crossfit: "https://iili.io/3o7pDWN.png",
    natacao: "https://iili.io/3o7aLjj.png",
    pilates: "https://iili.io/3o5yAu4.png",
    yoga: "https://iili.io/3o5jgqu.png",
    spinning: "https://iili.io/3oRk3ga.png",
  },

  // Testimonials Section
  testimonialImages: {
    carlosSilva: "https://iili.io/3ouP1hx.jpg",
    anaOliveira: "https://iili.io/3oACfee.jpg",
    marcosPereira: "https://iili.io/3oATA2R.jpg",
    julianaCosta: "https://iili.io/3oA5wSj.jpg",
    robertoAlmeida: "https://iili.io/3oAMfzG.jpg",
  },

  // Background Images
  ctaBackground: "/placeholder.svg?height=1000&width=2000",
}

