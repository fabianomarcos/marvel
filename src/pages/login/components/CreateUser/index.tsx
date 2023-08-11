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

export type CreateFormData = {
  email: string
  password: string
  confirm_password: string
}

export default function FormCreateUser() {
  const [showLoader, setShowLoader] = useState(false)
  const formRef = useRef<FormHandles>(null)
  const { addToast } = useToast()
  const router = useRouter()

  const showToast = () =>
    addToast({
      type: 'success',
      title: 'Usuário criado com sucesso',
      description: 'Tudo certo.',
    })

  const handleSubmit = useCallback(
    async (data: CreateFormData) => {
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

        await api.post('/users', data)

        setShowLoader(false)

        await router.push('/agent')

        showToast()
      } catch (err: any) {
        let description =
          err.message ||
          'Ocorreu um erro ao redefinir as senhas, cheque as credenciais.'
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)
          console.log('errors: ', errors)
          formRef.current?.setErrors(errors)
          description = errors
        }

        addToast({
          type: 'error',
          title: 'Erro na criação do usuário',
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
        title="Criar usuário"
        complement="."
        infoForUser="Informe seu email e senha para acesso ao portal"
      />
      <FormCreateAndResetUser label="enviar" handleSubmit={handleSubmit} />
    </Container>
  )
}
