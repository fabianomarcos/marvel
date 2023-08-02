import { theme } from '@/styles/theme'
import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${theme.COLORS.PRIMARY_800};
`
export const ContainerImage = styled.div`
  width: 100vw;
  padding: 48px 0 0 108px;
`
export const BuildImage = styled.div`
  display: flex;
  justify-content: start;
  align-items: end;
  gap: 140px;
  padding: 100px 0 0 200px;
`
