import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'

import { Container, ContainerButton } from './styles'

import { Button } from '@/components/Button'
import { Dropdown } from '@/components/Dropdown'
import FormTitle from '../TitleForm'

import { useStore } from '@/hooks/store'
import { StorageEnum } from '@/utils/storageEnum'

export default function Agent() {
  const [agentId, setAgentId] = useState('')
  const router = useRouter()
  const formRef = useRef<FormHandles>(null)
  const { characters, getAgents } = useStore()
  const formattedCharacters = characters.map((character) => ({
    name: character.name,
    id: character.id
  }))

  const onSubmit = () => {
    localStorage.setItem(StorageEnum.favorite, agentId)
    router.push('/')
  }

  useEffect(() => {
    getAgents({ limit: 100 })
  },[])

  const handleInputChange = (event: any) => {
    event.preventDefault();
    const { value } = event.target;
    console.log('values: ', value);
    setAgentId(value)
  }

  return (
    <Container>
      <FormTitle
        title="Selecione o seu agente mais legal"
        complement="."
        infoForUser="Tenha a visão completa do seu agente."
      />

      <Form ref={formRef} onSubmit={onSubmit}>
        <Dropdown name="agent" onChange={handleInputChange} options={formattedCharacters} />
        <ContainerButton>
          <Button type='submit'>
            Entrar
          </Button>
        </ContainerButton>
      </Form>
    </Container>
  )
}
