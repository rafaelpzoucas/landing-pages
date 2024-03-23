import { Inter, Tinos } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const tinos = Tinos({ weight: ['400', '700'], subsets: ['latin'] })

export const layout = {
  fonts: {
    default: inter,
    highlight: tinos,
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
