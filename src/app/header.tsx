import { Nav } from '@/components/nav'
import { navItems } from '@/data/nav-links'
import Image from 'next/image'

import logo from '../../public/logo.svg'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-row items-center justify-center p-4 backdrop-blur-sm">
      <div className="flex flex-row items-center justify-between w-full max-w-7xl">
        <div className="flex flex-row items-center gap-2">
          <Image src={logo} width={150} height={47} alt="Caio Ramão" />
        </div>

        <Nav items={navItems} />
      </div>
    </header>
  )
}
