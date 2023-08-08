import { styled } from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.PRIMARY_800};
  width: 380px;
  height: 433px;
  border-radius: 5%;
  padding: 48px 36px;
  flex-shrink: 0;

  a {
    text-decoration: none;
  }

  @media (max-width: 1180px) {
    width: 580px;
    height: 470px;
  }
`

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 11px;
  width: 100%;

  @media (max-width: 1180px) {
    gap: 2rem;
    margin-bottom: 36px;
  }
`

export const LinkContainer = styled.div`
  display: flex;
  justify-content: end;
  margin: 1rem 0.375rem 0 0;
  gap: 5px;

  @media (max-width: 1180px) {
    margin-top: 1.4rem;
  }
`

export const ForgotPasswordContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 5px;
  margin-top: 0.6rem;

  a {
    color: ${({ theme }) => theme.COLORS.ORANGE_500};
  }
`
