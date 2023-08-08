import { styled } from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.PRIMARY_800};
  width: 380px;
  height: 433px;
  border-radius: 5%;
  padding: 24px 36px;
  flex-shrink: 0;

  @media (max-width: 1180px) {
    width: 580px;
    height: 440px;
  }
`
