import { ProfileType } from '@/model/profile'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import logoImg from '../../public/logo.svg'

export const profile: ProfileType = {
  logo: logoImg,
  name: 'Caio Ramão',
  phone: '5518996603136',
  role: 'Advogado',
  about:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam nobis porro repellendus quos et saepe dolorem dignissimos mollitia ea neque, libero perferendis aut corrupti ex vel? Ratione voluptas est perferendis!',
  social: [
    {
      name: 'Facebook',
      icon: FaFacebook,
      href: 'https://facebook.com/advogado',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      href: 'https://instagram.com/advogado',
    },
  ],
}
