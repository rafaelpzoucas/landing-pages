import { layout } from '@/components/layout'
import { Section } from '@/components/section'
import { cn } from '@/lib/utils'

export function About() {
  return (
    <Section className="!bg-white text-primary-foreground flex justify-center">
      <div className="max-w-3xl flex flex-col gap-8">
        <div className="flex flex-row items-center gap-4">
          <div className="w-4 h-16 bg-primary"></div>
          <h1
            className={cn(
              layout.fonts.highlight.className,
              'text-2xl md:text-4xl font-bold uppercase text-primary',
            )}
          >
            Quem sou
          </h1>
        </div>
        <p className="text-lg md:text-2xl text-muted/70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
          laboriosam fugiat, ipsam perspiciatis soluta blanditiis expedita
          voluptates autem voluptas quo officiis iure alias non nostrum ratione,
          dolor nemo minus sequi. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Eius, facere. Optio, expedita sapiente asperiores,
          ex accusamus necessitatibus explicabo dolor a repellendus, nesciunt
          quos id perspiciatis. Nesciunt laudantium asperiores quaerat autem!
        </p>
      </div>
    </Section>
  )
}
