import { useCallback, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'

import { At, Eye, EyeClosed, SignIn } from 'phosphor-react'

import { Container, ContainerInput } from './styles'
import getValidationErrors from '@/utils/getValidationErrors'
import { useToast } from '@/hooks/toast'
import FormTitle from '../TitleForm'
import { api } from '@/lib/axios'
import { FormCreateAndResetUser } from '../FormCreateAndResetUser'

export type ResetFormData = {
  email: string
  password: string
  confirm_password: string
  token: string
}

export default function FormResetPassword() {
  const formRef = useRef<FormHandles>(null)
  const { addToast } = useToast()
  const router = useRouter()

  const handleSubmit = useCallback(
    async (data: ResetFormData) => {
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

        await api.put('/reset-password', data)

        await router.push('/login')

        addToast({
          type: 'success',
          title: 'Senha alterada com sucesso',
          description: 'Tudo certo.',
        })
      } catch (err: any) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)
          formRef.current?.setErrors(errors)
        }

        addToast({
          type: 'error',
          title: 'Erro na redefinição',
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
        title="Redefinir senha"
        complement="."
        infoForUser="Informe as suas novas credenciais de acesso ao portal"
      />
      <FormCreateAndResetUser label='redefinir' handleSubmit={handleSubmit}/>
    </Container>
  )
}
