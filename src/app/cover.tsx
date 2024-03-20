import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Spectral } from 'next/font/google'
import { FaWhatsapp } from 'react-icons/fa'
import hero from '../../public/hero-image.jpg'

const spectral = Spectral({ weight: ['400', '600'], subsets: ['latin'] })

export function Cover() {
  return (
    <section className="flex items-center justify-center">
      <div className="fixed w-full h-screen">
        <Image src={hero} alt="" fill className="object-cover opacity-30" />
      </div>

      <aside className="relative z-10 w-full md:max-w-5xl h-screen flex flex-col items-center justify-center text-center gap-4 md:gap-8 p-8">
        <h1
          className={cn(
            spectral.className,
            'text-4xl md:text-7xl font-bold text-primary',
          )}
        >
          Segurança legal para seus direitos essenciais.
        </h1>
        <p className="text-muted-foreground md:text-xl md:max-w-3xl">
          Defenda seus interesses legais com um profissional especializado,
          comprometido em oferecer representação de alta qualidade.
        </p>
        <Button size={'lg'}>
          <FaWhatsapp className="mr-2 text-lg" /> Entre em contato agora
        </Button>
      </aside>
    </section>
  )
}
