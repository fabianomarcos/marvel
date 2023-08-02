import { Form } from '@unform/web'

import { Container } from './styles'
import { Button } from '@/components/Button'
import FormTitle from '../TitleForm'
import Link from 'next/link'

export default function SuccessResetPassword() {
  return (
    <Container>
      <FormTitle
        title="Tudo certo"
        complement=";)"
        infoForUser="Senha alterada com sucesso, agora você pode realizar seu login"
      />

      <Form>
        <Link href='/login'>
          <Button>
              voltar para o login
          </Button>
        </Link>
      </Form>
    </Container>
  )
}
