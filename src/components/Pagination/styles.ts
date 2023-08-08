import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-top: 44px;
  justify-content: center;

  button, > span {
    display: flex;
    padding: 10px 16px;
    justify-content: center;
    align-items: center;
    align-items: center;
    gap: 8px;
    color: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_600};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
    background: ${({ theme }) => theme.COLORS.WHITE};

    &:first-child, &:last-child {
      border-radius: 8px 0 0 8px;
    }

    &:last-child {
      border-radius: 0 8px 8px 0;
    }
  }

  > span {
    padding: 6px 16px 12px;
  }

`
