import { css, styled } from 'styled-components'

interface IContainerProps {
  isActive?: boolean
}

export const Container = styled.div`

`

export const Li = styled.li<IContainerProps>`
  display: inline-block;
  list-style: none;
  padding: 0 8px 16px;
  margin-bottom: 27px;

  color: ${({ theme }) => theme.COLORS.PRIMARY_600};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;

  ${(props) => props.isActive && css`
    border-bottom: 3px solid ${({ theme }) => theme.COLORS.PRIMARY_600};
  `}
`

export const Title = styled.div`
  color: ${({ theme }) => theme.COLORS.PRIMARY_600};
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.72px;
  margin-bottom: 24px;

  strong {
    color: ${({ theme }) => theme.COLORS.ORANGE_500};
  }

  span {
    color: ${({ theme }) => theme.COLORS.GRAY_500};
    font-weight: 300;
  }
`

