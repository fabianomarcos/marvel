import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.COLORS.DIVIDER};
`

export const ContainerImg = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.DIVIDER};

  img {
    margin: 19px 0 9px 24px;
  }
  `
export const ContainerLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 0 16px 24px;
  margin-bottom: 51px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.BLACK};
  }

  button {
    background: ${({ theme }) => theme.COLORS.WHITE};
    border: none;

    span {
      padding-top: 3px;
    }
  }
`