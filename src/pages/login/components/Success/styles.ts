import { styled } from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.PRIMARY_800};
  width: 380px;
  height: 370px;
  font-size: 36px;
  border-radius: 5%;
  padding: 53px 36px;
  flex-shrink: 0;

  p {
    margin: 36px 0;
  }

  @media (max-width: 1180px) {
    width: 580px;
    height: 300px;

    p {
      margin: 36px 0;
    }
  }
`
