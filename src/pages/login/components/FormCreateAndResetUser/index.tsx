import { useRef, useState } from 'react'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'

import { SignIn } from 'phosphor-react'
import { Icons } from '@/lib/icons'

import { ContainerInput } from './styles'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'

export type IProps = {
  handleSubmit: (data: any) => Promise<void>
  label: string
}

export function FormCreateAndResetUser({ handleSubmit, label }: IProps) {
  const [closedEye, setClosedEye] = useState(true)
  const formRef = useRef<FormHandles>(null)
  const onClickIcon = (closed: boolean) => setClosedEye(!closed)

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <ContainerInput>
        <Input name="email" icon={Icons.At} placeholder="Informe seu email" />
        <Input
          name="password"
          icon={closedEye ? Icons.EyeClosed : Icons.Eye}
          onClickIcon={() => onClickIcon(closedEye)}
          type={closedEye ? 'password' : 'text'}
          placeholder="Informe sua nova senha"
        />
        <Input
          name="confirm_password"
          icon={closedEye ? Icons.EyeClosed : Icons.Eye}
          onClickIcon={() => onClickIcon(closedEye)}
          type={closedEye ? 'password' : 'text'}
          placeholder="Confirme sua nova senha"
        />
      </ContainerInput>
      <Button type="submit">
        <>
          <span>{label}</span>
          <SignIn size={13} color='#FBFBFB' />
        </>
      </Button>
    </Form>
  )
}
