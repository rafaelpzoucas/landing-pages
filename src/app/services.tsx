import { layout } from '@/components/layout'
import { Section } from '@/components/section'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'
import Link from 'next/link'

import Image from 'next/image'
import violenceIcon from '../../public/icons/10.svg'
import criminalIcon from '../../public/icons/11.svg'
import sentenceIcon from '../../public/icons/12.svg'
import freedomIcon from '../../public/icons/13.svg'
import drugsIcon from '../../public/icons/5.svg'
import sexualIcon from '../../public/icons/6.svg'
import fraudeIcon from '../../public/icons/7.svg'
import stealIcon from '../../public/icons/8.svg'
import restrictionIcon from '../../public/icons/9.svg'

const services = [
  {
    icon: drugsIcon,
    title: 'Tráfico de drogas',
    message: 'Fala truta quero falar sobre drogas',
  },
  {
    icon: sexualIcon,
    title: 'Crimes sexuais',
    message: '#',
  },
  {
    icon: fraudeIcon,
    title: 'Fraude',
    message: '#',
  },
  {
    icon: stealIcon,
    title: 'Roubo ou furto',
    message: '#',
  },
  {
    icon: restrictionIcon,
    title: 'Ordem de restrição',
    message: '#',
  },
  {
    icon: violenceIcon,
    title: 'Violência doméstica',
    message: '#',
  },
  {
    icon: criminalIcon,
    title: 'Defesa Criminal',
    message: '#',
  },
  {
    icon: sentenceIcon,
    title: 'Execução da pena',
    message: '#',
  },
  {
    icon: freedomIcon,
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
              <div className="relative w-52 h-32">
                <Image
                  src={service.icon}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
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
