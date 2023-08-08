import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
} from 'react'
import { Info, IconProps } from 'phosphor-react'
import { useField } from '@unform/core'
import { Container, Error } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  containerStyle?: object
  icon?: React.ComponentType<IconProps>
  onClickIcon?: () => void
}

export function Input({
  name,
  containerStyle = {},
  icon: Icon,
  onClickIcon,
  ...rest
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const { fieldName, defaultValue, error, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])

  return (
    <Container
      style={containerStyle}
      is_error={!!error}
    >
      <input
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
      {Icon && <Icon size={20} onClick={onClickIcon} />}

      {error && (
        <Error title={error}>
          <Info  color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  )
}
