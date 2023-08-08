import { styled } from 'styled-components'

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 37px;
  gap: 8px;
  color: ${({ theme }) => theme.COLORS.GRAY_500};

  font-family: 'Inter';
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`