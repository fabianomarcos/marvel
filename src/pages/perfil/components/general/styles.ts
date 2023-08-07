import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 31px;
  max-width: 1016px;
  height: 226px;
  flex-shrink: 0;
  box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.06);
  padding: 42px 34px;
  border-radius: 15px;

  img {
    border-radius: 50%;
  }
  `

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.COLORS.PRIMARY_500};
  font-size: 24px;
  letter-spacing: -0.72px;
`

export const Description = styled.span`
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  font-size: 16px;
  font-weight: 600;
  line-height: 153.5%;
  letter-spacing: -0.48px;
`

