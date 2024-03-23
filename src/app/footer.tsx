import { Section } from '@/components/section'
import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'

export function Footer() {
  return (
    <Section className="flex items-center justify-center">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 w-full max-w-5xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.639611117181!2d-50.411338099999995!3d-22.6672217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9495399637bc79bb%3A0xd026629437f28102!2sR.%20Padre%20Anchieta%2C%20998%20-%20Centro%2C%20Assis%20-%20SP%2C%2019800-310!5e0!3m2!1spt-BR!2sbr!4v1710764552256!5m2!1spt-BR!2sbr"
          width="100%"
          className="aspect-square md:aspect-video rounded-xl"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="flex flex-col gap-4">
          Logo
          <div className="flex flex-row items-center gap-2 py-2">
            <Phone className="w-5 h-5" />
            <p>(18) 33293633</p>
          </div>
          <div className="flex flex-row items-center gap-2 py-2">
            <Phone className="w-5 h-5" />
            <p>email@email.com</p>
          </div>
          <div className="flex flex-row items-center gap-2 py-2">
            <Phone className="w-5 h-5" />
            <p>Rua da saudade, 666</p>
          </div>
          <Button className="w-full sm:max-w-xs">Entre em contato</Button>
        </div>
      </div>
    </Section>
  )
}
