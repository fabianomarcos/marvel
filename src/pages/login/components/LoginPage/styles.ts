import { styled } from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.PRIMARY_800};
  min-width: 1800px;
  min-height: 1160px;

  @media (max-width: 1500px) {
    min-width: 700px;
    min-height: 1000px;
    gap: 140px;
  }
`;

export const ContainerImage = styled.div`
  width: 100%;
  padding: 48px 0 0 108px;
`;

export const BuildImage = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: end;
  gap: 140px;
  padding: 100px 200px;

  @media (max-width: 1180px) {
     img {
      display: none;
     }
  }
`;
