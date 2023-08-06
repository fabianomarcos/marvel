import { styled } from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.PRIMARY_800};

  span {
    color: ${({ theme }) => theme.COLORS.ORANGE_500};
  }

  p {
    color: ${({ theme }) => theme.COLORS.GRAY_500};
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 127%;
    letter-spacing: 0.2px;
    margin: 16px 0 6px 0;
  }
`
