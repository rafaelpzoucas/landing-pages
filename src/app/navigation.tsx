import { Section } from '@/components/section'
import { MapPin, Newspaper, Phone, Users } from 'lucide-react'
import Link from 'next/link'

const links = [
  {
    icon: Newspaper,
    title: 'Artigos',
    link: '#articles',
  },
  {
    icon: Phone,
    title: 'Contato',
    link: '#footer',
  },
  {
    icon: MapPin,
    title: 'Maps',
    link: '#footer',
  },
  {
    icon: Users,
    title: 'Redes sociais',
    link: '#footer',
  },
]

export function Navigation() {
  return (
    <Section className="relative w-full p-8 md:p-20 !bg-white flex items-center justify-center">
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-7xl">
        {links.map((link, index) => (
          <Link
            href={link.link}
            key={index}
            className="flex flex-col gap-4 items-center justify-center"
          >
            <div className="flex items-center justify-center w-full md:w-3/4 aspect-square bg-secondary rounded-3xl">
              <link.icon className="w-28 h-28" />
            </div>
            <p className="uppercase md:text-xl font-bold text-yellow-700">
              {link.title}
            </p>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-background w-full h-4/5 md:h-3/5"></div>
    </Section>
  )
}
