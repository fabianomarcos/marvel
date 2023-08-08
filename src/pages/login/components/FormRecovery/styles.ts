import { styled } from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.PRIMARY_800};
  width: 380px;
  height: 433px;
  border-radius: 5%;
  padding: 48px 36px;
  flex-shrink: 0;

  @media (max-width: 1180px) {
    width: 580px;
    height: 360px;
    gap: 24px;
    display: flex;
    flex-direction: column;
  }
`

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 11px;
  width: 100%;

  @media (max-width: 1180px) {
    margin-bottom: 12px;
  }
`