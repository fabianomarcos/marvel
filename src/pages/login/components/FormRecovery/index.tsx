import { useCallback, useRef } from 'react'
import { api } from '@/lib/axios'
import { useRouter } from 'next/router'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'

import { FiMail } from 'react-icons/fi'

import { Container, ContainerInput } from './styles'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { useAuth } from '@/hooks/auth'
import getValidationErrors from '@/utils/getValidationErrors'
import { useToast } from '@/hooks/toast'
import FormTitle from '../TitleForm'
import { User } from '@/pages/api/users/User'
import { At } from 'phosphor-react'



export default function FormLogin() {
  const formRef = useRef<FormHandles>(null)
  const { signIn: login } = useAuth()
  const { addToast } = useToast()
  const router = useRouter()

  const handleSubmit = useCallback(
    async (dataEmail: {email: string}) => {
      try {
        formRef.current?.setErrors({})
        const message = 'Campo obrigatório'
        const schema = Yup.object().shape({
          email: Yup.string().required(message).email('Digite um email válido'),
        })

        await schema.validate(dataEmail, { abortEarly: false })

        const { data } = await api.get<{user: User }>(`users/${dataEmail.email}`)

        if (data?.user?.id)
          await router.push(`/reset-password`,)

        addToast({
          type: 'success',
          title: 'Usuário identificado com sucesso',
          description: 'Usuário.',
        })
      } catch (err: any) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)
          formRef.current?.setErrors(errors)
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: err.message || 'Ocorreu um erro ao fazer login, cheque as credenciais.',
        })
      }
    },
    [addToast, login, router],
  )

  return (
    <Container>
      <FormTitle
        title="Recuperar senha"
        complement="."
        infoForUser="Informe o email do seu cadastro. Nós estaremos realizando o envio de um link com as instruções para você redefinir sua senha."
      />

      <Form ref={formRef} onSubmit={handleSubmit}>
        <ContainerInput>
          <Input name="email" icon={At} placeholder="Informe seu email" />
        </ContainerInput>
        <Button type="submit">enviar link</Button>
      </Form>
    </Container>
  )
}
