import { Container } from './styles'

interface IProps {
  complement?: string
  title: string
  infoForUser: string
}

export default function FormTitle({ title, complement, infoForUser }: IProps) {
  return (
    <Container>
      <h1>
        {title}
        {complement && <span>{complement}</span>}
      </h1>

      <p>{infoForUser}</p>
    </Container>
  )
}
