import { styled } from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.PRIMARY_800};
  width: 380px;
  height: 433px;
  border-radius: 5%;
  padding: 24px 36px;
  flex-shrink: 0;
  letter-spacing: -2.34px;
`
export const ContainerButton = styled.div`
  width: 88px;
`