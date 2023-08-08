import styled, { css } from "styled-components";

interface ContainerProps {
  is_error: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  padding: 1rem;
  width: 100%;

  border: 2px solid ${({ theme }) => theme.COLORS.BLACK};
  border-radius: 10px;

  input {
    color: ${({ theme }) => theme.COLORS.PRIMARY_500};
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: -1.04px;
    flex: 1;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_400};
      background: transparent;
      text-align: left;
      font-size: 0.875rem;
      font-weight: 400;
      letter-spacing: -0.91px;
    }
  }

  svg {
    margin-right: 1rem;
  }

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.is_error &&
    css`
      color: ${({ theme }) => theme.COLORS.ORANGE_500};
      border-color: ${({ theme }) => theme.COLORS.ORANGE_500};
    `}
`;

export const Error = styled.div`
  height: 20px;
  margin-left: 2px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
