import { styled } from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.PRIMARY_800};
  width: 405px;
  height: 319px;
  border-radius: 5%;
  padding: 24px 36px;
  flex-shrink: 0;
  letter-spacing: -2.34px;
  margin-bottom: 128px;
`
export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;

  button {
    width: 88px;
  }
`