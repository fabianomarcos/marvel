import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.ORANGE_500};
`
export const Search = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 37px;
  gap: 16px;

  input {
    width: 230px;
    border-radius: 15px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
    padding: 10px;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.PRIMARY_200};
      text-align: left;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: -0.36px;
    }
  }
`