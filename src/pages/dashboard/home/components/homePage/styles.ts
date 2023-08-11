import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  padding: 19px 27px;
`;

export const NotFoundItem = styled.h1`
  display: flex;
  color: ${({ theme })=> theme.COLORS.ORANGE_400};
  flex-direction: column;
  justify-content: center;
  min-height: 400px;
  align-items: start;
  padding-left: 120px;

  span {
    padding: 0 0 24px 0;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
