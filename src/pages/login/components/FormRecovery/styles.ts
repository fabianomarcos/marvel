import { theme } from '@/styles/theme'
import { styled } from 'styled-components'

export const Container = styled.div`
  background: ${theme.COLORS.WHITE};
  color: ${theme.COLORS.PRIMARY_800};
  width: 380px;
  height: 433px;
  border-radius: 5%;
  padding: 48px 36px;
  flex-shrink: 0;
`

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 11px;
  width: 100%;
`