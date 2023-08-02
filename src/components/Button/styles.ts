import styled from 'styled-components'
import { shade } from 'polished'
import { theme } from '@/styles/theme'

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.COLORS.PRIMARY_600};
  color: ${theme.COLORS.WHITE};
  height: 3rem;
  border-radius: 0.56rem;
  gap: 0.56rem;
  border: 0;
  flex-shrink: 0;
  width: 100%;
  font-weight: 500;
  font-size: 24px;
  letter-spacing: -1.56px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#213770')};
  }
`
