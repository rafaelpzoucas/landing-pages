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

        <div className="flex flex-col gap-6 md:text-xl text-muted/70">
          <p>Prezados,</p>
          <p>
            Sou Gabriel Candela, membro inscrito na Ordem dos Advogados do
            Brasil, pertencente à 27ª Subseção, localizada no estado de São
            Paulo. Minha formação jurídica foi realizada pela respeitada
            Fundação do Município de Assis.
          </p>
          <p>
            Como terceira geração de advogados em minha família, meu
            envolvimento com o Direito começou desde tenra idade e
            posteriormente esta trajetória culminou na obtenção do meu diploma
            na área, consolidando minha vocação e paixão pelo exercício da
            advocacia.
          </p>
          <p>
            Especializado e dedicado exclusivamente ao Direito Penal, empenho-me
            para aprimorar minhas habilidades e conhecimentos nesta área
            específica.
          </p>
          <p>
            Além disso, tenho o privilégio de ser autor de diversos artigos
            jurídicos, abordando uma ampla gama de temas relevantes, os quais
            foram publicados em conceituados portais de notícias. Esta
            contribuição acadêmica reflete meu compromisso com a disseminação do
            conhecimento e a promoção de debates construtivos no meio jurídico.
          </p>
          <p>
            Minha atuação estende-se por todo o território nacional,
            proporcionando-me uma visão abrangente e multifacetada das questões
            jurídicas.
          </p>
          <p>
            Como profissional, sou guiado por princípios éticos inabaláveis,
            comprometido com a justiça e o respeito aos direitos fundamentais de
            meus clientes. Minha missão é garantir que a lei seja aplicada de
            forma justa e equitativa, sempre buscando a melhor defesa dos
            interesses daqueles que represento.
          </p>
          <p>Atenciosamente, Dr. Candela.</p>
        </div>
      </div>
    </Section>
  )
}
