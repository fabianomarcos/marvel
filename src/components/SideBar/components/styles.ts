import { css } from 'styled-components'
import { styled } from 'styled-components'

interface ContainerProps {
  isActive: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  gap: 14px;
  text-decoration: none;

  ${(props) =>
    props.isActive && css`
      color: ${({ theme }) => theme.COLORS.ORANGE_400}
    `
  }
`