import { Section } from '@/components/section'
import { buttonVariants } from '@/components/ui/button'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

export function CallToAction() {
  return (
    <Section className="flex flex-col items-center justify-center gap-4 text-center bg-gradient-to-r from-primary via-[#F4E29F] to-[#A0750F] text-primary-foreground">
      <p className="text-muted">Entre em contato</p>
      <h1 className="text-3xl md:text-5xl font-bold max-w-lg">
        Agende uma reunião para discutir o seu caso.
      </h1>

      <Link
        href={`https:/wa.me/${profile.phone}`}
        className={cn(
          buttonVariants({ variant: 'secondary', size: 'lg' }),
          'mt-10',
        )}
      >
        <FaWhatsapp className="mr-2 text-lg" /> Entre em contato agora
      </Link>
    </Section>
  )
}
