import { useRouter } from 'next/router'
import { Form } from '@unform/web'

import { Container, ContainerButton } from './styles'
import { Button } from '@/components/Button'
import FormTitle from '../TitleForm'

export default function Agent() {
  const router = useRouter()
  const onSubmit = () => router.push('/login')

  return (
    <Container>
      <FormTitle
        title="Selecione o seu agente mais legal"
        complement="."
        infoForUser="Tenha a visão completa do seu agente."
      />

      <Form onSubmit={onSubmit}>
        <ContainerButton>
          <Button>
            Entrar
          </Button>
        </ContainerButton>
      </Form>
    </Container>
  )
}
