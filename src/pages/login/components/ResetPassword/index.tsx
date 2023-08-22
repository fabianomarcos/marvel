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
import { Loader } from '@/components/Loader'

export type ResetFormData = {
  email: string
  password: string
  confirm_password: string
  token: string
}

export default function FormResetPassword() {
  const [showLoader, setShowLoader] = useState(false)
  const formRef = useRef<FormHandles>(null)
  const { addToast } = useToast()
  const router = useRouter()

  const handleSubmit = useCallback(
    async (data: ResetFormData) => {
      setShowLoader(true)
      try {
        formRef.current?.setErrors({})
        const message = 'Campo obrigatório'
        const schema = Yup.object().shape({
          password: Yup.string().required(message),
          password_confirmation: Yup.string().oneOf(
            [Yup.ref('password'), undefined],
            'As Senhas não conferem.'
          ),
        })

        await schema.validate(data, { abortEarly: false })

        await api.put('/reset-password', data)

        setShowLoader(false)

        await router.push('/reset-password/success')

        addToast({
          type: 'success',
          title: 'Senha alterada com sucesso',
          description: 'Tudo certo.',
        })
      } catch (err: any) {
        const description =
          err.message ||
          'Ocorreu um erro ao redefinir as senhas, cheque as credenciais.'
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)
          formRef.current?.setErrors(errors)
        }

        addToast({
          type: 'error',
          title: 'Erro na redefinição',
          description: err?.response?.data?.message || description,
        })
        setShowLoader(false)
      }
    },
    [addToast, router]
  )

  return (
    <Container>
      {showLoader && <Loader />}
      <FormTitle
        title="Redefinir senha"
        complement="."
        infoForUser="Informe as suas novas credenciais de acesso ao portal"
      />
      <FormCreateAndResetUser label="redefinir" handleSubmit={handleSubmit} />
    </Container>
  )
}
