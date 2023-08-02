import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react'
import { Activity, IconProps } from 'phosphor-react'
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

  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const { fieldName, defaultValue, error, registerField } = useField(name)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!inputRef.current?.value)
  }, [])

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
      is_filled={isFilled}
      is_focused={isFocused}
      data-testid="input-container"
    >
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
      {Icon && <Icon size={20} onClick={onClickIcon} />}

      {error && (
        <Error title={error}>
          <Activity color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  )
}
