import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.ORANGE_500};
`