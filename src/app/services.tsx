import { layout } from '@/components/layout'
import { Section } from '@/components/section'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'
import { Scale } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Scale,
    title: 'Tráfico de drogas',
    message: 'Fala truta quero falar sobre drogas',
  },
  {
    icon: Scale,
    title: 'Crimes sexuais',
    message: '#',
  },
  {
    icon: Scale,
    title: 'Fraude',
    message: '#',
  },
  {
    icon: Scale,
    title: 'Roubo ou furto',
    message: '#',
  },
  {
    icon: Scale,
    title: 'Ordem de restrição',
    message: '#',
  },
  {
    icon: Scale,
    title: 'Violência doméstica',
    message: '#',
  },
  {
    icon: Scale,
    title: 'Defesa Criminal',
    message: '#',
  },
  {
    icon: Scale,
    title: 'Execução da pena',
    message: '#',
  },
  {
    icon: Scale,
    title: 'Pedidos de liberdade',
    message: '#',
  },
]

export function Services() {
  return (
    <Section
      id="services"
      className="flex flex-col items-center justify-center gap-16 md:gap-32"
    >
      <div className="relative flex flex-col gap-16 md:gap-32 max-w-7xl">
        <div className="-ml-16 bg-primary w-full max-w-[200px] md:max-w-[500px] h-4 md:h8"></div>
        <h1
          className={cn(
            layout.fonts.highlight.className,
            'text-2xl md:text-4xl font-bold uppercase -mt-8 md:-mt-16',
          )}
        >
          Qual sua história?
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full ">
          {services.map((service, index) => (
            <Link
              href={`https://wa.me/${profile.phone}?text=${service.message}`}
              key={index}
              className="flex flex-col items-center gap-2 md:gap-4 text-center w-full"
            >
              <service.icon className="w-10 h-10 md:w-28 md:h-28" />
              <p className="text-sm md:text-2xl font-bold text-primary">
                {service.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  )
}
