import { ProfileType } from '@/model/profile'
import { FaInstagram } from 'react-icons/fa'
import logoImg from '../../public/logo.svg'

export const profile: ProfileType = {
  logo: logoImg,
  name: 'Caio Ramão',
  phone: '5518996603136',
  role: 'Advogado',
  about:
    'Dedicando minha carreira à advocacia, sou um profissional comprometido em oferecer soluções jurídicas eficazes e personalizadas aos meus clientes. Com uma abordagem especializada para o seu caso, busco entender todas as suas necessidades e oferecer uma orientação legal sólida e acessível. Estou aqui para ajudá-lo juridicamente com confiança e tranquilidade. Sinta-se à vontade para entrar em contato e agendar uma consulta para discutir suas preocupações legais. O seu caso é a minha prioridade.',
  social: [
    {
      name: 'Instagram',
      icon: FaInstagram,
      href: 'https://instagram.com/caioramaoadv',
    },
  ],
}
