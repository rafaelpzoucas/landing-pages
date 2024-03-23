import { Inter, Tinos } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const tinos = Tinos({ weight: ['400', '700'], subsets: ['latin'] })

export const layout = {
  fonts: {
    default: inter,
    highlight: tinos,
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
