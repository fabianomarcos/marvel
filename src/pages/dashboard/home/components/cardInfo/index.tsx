import Image from 'next/image'

import { IInfoCharacters } from '../homePage'
import { Container, DescriptionCard } from './styles'
import Link from 'next/link'

interface IProps {
  infoCharacters: IInfoCharacters[]
}

export default function CardInfo({ infoCharacters }: IProps) {
  return (
    <>
      {infoCharacters?.map((info) => {
        return (
          <Link href={`/perfil/${info.id}`}>
            <Container key={info.name}>
              <Image
                src={`${info.thumbnail.path}.${info.thumbnail.extension}`}
                alt={info.name}
                width={83}
                height={119}
                quality={100}
              />
              <DescriptionCard>
                <strong >{info.name}</strong>
                <span>{info.description}</span>
              </DescriptionCard>
            </Container>
          </Link>
        )
      })}
    </>
  )
}
