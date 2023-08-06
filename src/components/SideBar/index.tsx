import { useRouter } from 'next/router'
import Image from 'next/image'

import logo from '@/assets/pontua_side_bar.svg'
import { Icons } from '@/lib/icons'
import IconRouter from './components'

import { Container, ContainerImg, ContainerLinks } from './styles'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'

export default function SideBar() {
  const router = useRouter()
  const isActive = router.pathname === '/perfil/[name]'
  const { signOut } = useAuth()

  const logout = () => {
    signOut()
    router.push('/login')
  }

  return (
    <Container>
      <ContainerImg>
        <Image
          src={logo}
          width={104}
          height={26}
          quality={100}
          priority
          alt="Simbolo da Pontua"
        />
      </ContainerImg>
      <ContainerLinks>
        <Link href='/'>
          <IconRouter linkName='Home' icon={Icons.QrCode} isActive={!isActive} />
        </Link>
        <Link href='/perfil'>
          <IconRouter linkName='Perfil' icon={Icons.User} isActive={isActive} />
        </Link>
      </ContainerLinks>
      <ContainerLinks>
        <button onClick={logout}>
          <IconRouter linkName='Sair' icon={Icons.Logout} isActive={false} />
        </button>
      </ContainerLinks>
    </Container>
  )
}
