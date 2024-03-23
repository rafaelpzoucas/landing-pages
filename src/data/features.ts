import { FeatureType } from '@/model/features'
import {
  AtSign,
  Baby,
  BriefcaseBusiness,
  CircleDollarSign,
  Handshake,
  HeartPulse,
  Scale,
  Shield,
} from 'lucide-react'

export const features: FeatureType = {
  title: 'Protegendo Seus Interesses com Excelência',
  data: [
    {
      icon: BriefcaseBusiness,
      title: 'Direito Trabalhista',
      description:
        'Assessoria em questões trabalhistas, como rescisões contratuais, ações trabalhistas, consultoria em relações de trabalho, entre outros.',
    },
    {
      icon: HeartPulse,
      title: 'Direito Médico e da Saúde',
      description:
        'Assessoria jurídica em questões relacionadas ao direito médico e da saúde, como responsabilidade médica, direitos do paciente, legislação sanitária, entre outros.',
    },
    {
      icon: Scale,
      title: 'Direito Civil',
      description:
        'Atuação em diversas áreas do direito civil, como contratos, responsabilidade civil, direito imobiliário, entre outros.',
    },
    {
      icon: Baby,
      title: 'Direito de Família e Sucessões',
      description:
        'Assessoria em questões familiares, como divórcio, pensão alimentícia, guarda dos filhos, inventários, testamentos, entre outros.',
    },
    {
      icon: Shield,
      title: 'Direito do Consumidor',
      description:
        'Defesa dos direitos dos consumidores, como ações contra fornecedores, indenizações por danos materiais e morais, entre outros.',
    },
    {
      icon: CircleDollarSign,
      title: 'Direito Previdenciário',
      description:
        'Atuação em questões relacionadas à previdência social, como aposentadorias, pensões, benefícios por incapacidade, entre outros.',
    },
    {
      icon: Handshake,
      title: 'Direito Empresarial',
      description:
        'Assessoria jurídica em questões empresariais, como constituição de empresas, contratos empresariais, litígios societários, entre outros.',
    },
    {
      icon: AtSign,
      title: 'Direito Digital',
      description:
        'Assessoria jurídica em questões relacionadas ao direito digital, como proteção de dados, contratos eletrônicos, crimes cibernéticos, entre outros.',
    },
  ],
}
