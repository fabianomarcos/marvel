import { BuildImage, Container, ContainerImage } from './styles'
import Image from 'next/image'
import pontua from '@/assets/logo_pontua_white.svg'
import build from '@/assets/login.svg'

interface IProps {
  component: any
}

export default function Login({ component: Component }: IProps) {
  return (
    <Container>
      <ContainerImage>
        <Image
          src={pontua}
          height={50}
          width={169}
          quality={100}
          priority
          alt="Simbolo da Pontua"
        />
      </ContainerImage>
      <BuildImage>
        <Image
          src={build}
          height={458}
          width={612}
          quality={100}
          priority
          alt="Imagem de Prédio"
        />
        <Component />
      </BuildImage>
    </Container>
  )
}
