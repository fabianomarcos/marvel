import { useRouter } from 'next/router'
import { Form } from '@unform/web'

import { Container } from './styles'
import { Button } from '@/components/Button'
import FormTitle from '../TitleForm'

export function SuccessResetPassword() {
  const router = useRouter()
  const onSubmit = () => router.push('/login')

  return (
    <Container>
      <FormTitle
        title="Tudo certo"
        complement=" ;)"
        infoForUser="Senha alterada com sucesso, agora você pode realizar seu login"
      />

      <Form onSubmit={onSubmit}>
        <Button type='submit'>
          voltar para o login
        </Button>
      </Form>
    </Container>
  )
}
