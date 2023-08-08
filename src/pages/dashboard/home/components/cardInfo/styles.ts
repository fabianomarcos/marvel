import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 150px;

  display: inline-flex;
  padding: 14px 10px;
  align-items: flex-start;
  gap: 15px;
  background: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 15px;
  box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.06);

  img {
    border-radius: 15px;
  }

  span {
    font-size: 12px;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.36px;
  }
`

export const DescriptionCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`