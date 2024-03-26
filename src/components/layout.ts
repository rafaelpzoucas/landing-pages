import {
  Frank_Ruhl_Libre,
  Montserrat
} from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })
const playfair = Frank_Ruhl_Libre({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const layout = {
  fonts: {
    default: montserrat,
    highlight: playfair,
  },
  header: false,
  cover: true,
  metrics: false,
  features: false,
  cta: false,
  benefits: false,
  articles: true,
  social_proof: false,
  faq: false,
  footer: true,
  copyright: true,
}
