import { Inter, Playfair_Display as PlayfairDisplay } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const playfair = PlayfairDisplay({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const layout = {
  fonts: {
    default: inter,
    highlight: playfair,
  },
  header: true,
  cover: true,
  metrics: false,
  features: true,
  cta: true,
  benefits: true,
  articles: false,
  social_proof: false,
  faq: false,
  footer: true,
  copyright: true,
}
