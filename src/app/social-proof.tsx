import { Section } from '@/components/section'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import { testimonials } from '@/data/social-proof'
import { cn } from '@/lib/utils'
import { Spectral } from 'next/font/google'

const spectral = Spectral({ weight: ['400', '600'], subsets: ['latin'] })

export function SocialProof() {
  return (
    <Section
      id="social-proof"
      className="flex flex-col items-center justify-center gap-16 md:gap-32"
    >
      <h1 className={cn(spectral.className, 'text-2xl md:text-4xl font-bold')}>
        Experiências de Sucesso com Nossa Assistência Jurídica
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 max-w-7xl">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="flex flex-col gap-6 p-6">
            <p className="text-muted-foreground">{testimonial.testimonial}</p>

            <footer className="flex flex-row items-center gap-4">
              <Avatar>
                <AvatarImage src={testimonial.avatar_url} />
                <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
              </Avatar>

              <strong>{testimonial.name}</strong>
            </footer>
          </Card>
        ))}
      </div>
    </Section>
  )
}
