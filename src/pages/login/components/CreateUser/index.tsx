import { useCallback, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'

import { Container } from './styles'
import getValidationErrors from '@/utils/getValidationErrors'
import { useToast } from '@/hooks/toast'
import FormTitle from '../TitleForm'
import { api } from '@/lib/axios'
import { FormCreateAndResetUser } from '../FormCreateAndResetUser'

export type CreateFormData = {
  email: string
  password: string
  confirm_password: string
}

export default function FormCreateUser() {
  const formRef = useRef<FormHandles>(null)
  const { addToast } = useToast()
  const router = useRouter()

  const handleSubmit = useCallback(
    async (data: CreateFormData) => {
      try {
        formRef.current?.setErrors({})
        const message = 'Campo obrigatório'
        const schema = Yup.object().shape({
          password: Yup.string().required(message),
          password_confirmation: Yup.string().oneOf(
            [Yup.ref('password'), undefined],
            'As Senhas não conferem.',
          ),
        })

        await schema.validate(data, { abortEarly: false })

        const user = await api.post('/users', data)

        await router.push('/login')

        addToast({
          type: 'success',
          title: 'Usuário criado com sucesso',
          description: 'Tudo certo.',
        })
      } catch (err: any) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)
          formRef.current?.setErrors(errors)
        }

        addToast({
          type: 'error',
          title: 'Erro na criação do usuário',
          description:
            err.message || 'Ocorreu um erro ao redefinir as senhas, cheque as credenciais.',
        })
      }
    },
    [addToast, router],
  )

  return (
    <Container>
      <FormTitle
        title="Criar usuário"
        complement="."
        infoForUser="Informe seu email e senha para acesso ao portal"
      />
      <FormCreateAndResetUser label='enviar' handleSubmit={handleSubmit}/>
    </Container>
  )
}
