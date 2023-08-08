import { useCallback, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import Link from 'next/link'
import * as Yup from 'yup'

import { Question, SignIn } from 'phosphor-react'
import { Icons } from '@/lib/icons'

import { Container, ContainerInput, ForgotPasswordContainer, LinkContainer } from './styles'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { useAuth } from '@/hooks/auth'
import getValidationErrors from '@/utils/getValidationErrors'
import { useToast } from '@/hooks/toast'
import FormTitle from '../TitleForm'

export type SignInFormData = {
  email: string
  password: string
}

export default function FormLogin() {
  const [closedEye, setClosedEye] = useState(true)
  const formRef = useRef<FormHandles>(null)
  const { signIn: login } = useAuth()
  const { addToast } = useToast()
  const router = useRouter()

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({})
        const message = 'Campo obrigatório'
        const schema = Yup.object().shape({
          email: Yup.string().required(message).email('Digite um email válido'),
          password: Yup.string().required(message),
        })

        await schema.validate(data, { abortEarly: false })

        await login(data)

        await router.push('/')

        addToast({
          type: 'success',
          title: 'Autenticação realizada com sucesso',
          description: 'Bem vindo à plataforma.',
        })
      } catch (err: any) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)
          formRef.current?.setErrors(errors)
        }

        const description =
          err?.response?.data?.message||
          err?.message ||
          'Ocorreu um erro ao fazer login, cheque as credenciais.'

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description,
        })
      }
    },
    [addToast, login, router],
  )

  const onClickIcon = (closed: boolean) => setClosedEye(!closed)

  return (
    <Container>
      <FormTitle
        title="Bem-vindo"
        complement="."
        infoForUser="Informe as suas credenciais de acesso ao portal"
      />

      <Form ref={formRef} onSubmit={handleSubmit}>
        <ContainerInput>
          <Input name="email" icon={Icons.At} placeholder="Informe seu email" />
          <Input
            name="password"
            icon={closedEye ? Icons.EyeClosed : Icons.Eye}
            onClickIcon={() => onClickIcon(closedEye)}
            type={closedEye ? 'password' : 'text'}
            placeholder="Informe sua senha"
          />
        </ContainerInput>
        <Button type="submit">
          <>
            <span>entrar</span>
            <SignIn size={13} color='#FBFBFB' />
          </>
        </Button>
      </Form>

      <LinkContainer>
        <Question color='#293D71' />
        <Link href="/create-user">Cadastrar usuário</Link>
      </LinkContainer>

      <ForgotPasswordContainer>
        <Question color='#F21A05' />
        <span>
          <Link href="/recovery-password">Esqueceu a senha?</Link>
        </span>
      </ForgotPasswordContainer>
    </Container>
  )
}
