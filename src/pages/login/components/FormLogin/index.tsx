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
import { StorageEnum } from '@/utils/storageEnum'
import { Loader } from '@/components/Loader'

export type SignInFormData = {
  email: string
  password: string
}

export default function FormLogin() {
  const [showLoader, setShowLoader] = useState(false);
  const [closedEye, setClosedEye] = useState(true)
  const formRef = useRef<FormHandles>(null)
  const { signIn: login } = useAuth()
  const { addToast } = useToast()
  const router = useRouter()

  const showToast = () => addToast({
    type: 'success',
    title: 'Autenticação realizada com sucesso',
    description: 'Bem vindo à plataforma.',
  })

  const validateSchema = () => {
    formRef.current?.setErrors({})
    const message = 'Campo obrigatório'
    const schema = Yup.object().shape({
      email: Yup.string().required(message).email('Digite um email válido'),
      password: Yup.string().required(message),
    })
    return { schema };
  }

  const handleError = (err: any) => {
    if (err instanceof Yup.ValidationError) {
      const errors = getValidationErrors(err)
      formRef.current?.setErrors(errors)
    }

    const description =
      err?.response?.data?.message||
      err?.message ||
      'Ocorreu um erro ao fazer login, cheque as credenciais.'

    setShowLoader(false);

    addToast({
      type: 'error',
      title: 'Erro na autenticação',
      description,
    })
  }

  const redirectToHomePage = useCallback(() => {
    if (typeof window !== 'undefined') {
      setShowLoader(false);
      const favoriteId = localStorage.getItem(StorageEnum.favorite)
      if (favoriteId && favoriteId !== 'undefined') {
        router.push('/')
        showToast()
        return true
      }
    }
    return false
  }, [])

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        setShowLoader(true);
        const { schema } = validateSchema()
        await schema.validate(data, { abortEarly: false })

        await login(data)

        const sendToHomePage = redirectToHomePage()

        if (sendToHomePage) return

        setShowLoader(false);

        await router.push('/agent')

        showToast()
      } catch (err: any) {
        handleError(err)
      }
    },
    [addToast, login, router],
  )

  const onClickIcon = (closed: boolean) => setClosedEye(!closed)

  return (
    <Container>
      {showLoader && <Loader />}
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
