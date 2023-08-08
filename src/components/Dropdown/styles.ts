import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  height: 44px;
  gap: 8px;
  margin: 9px 0 16px 0;

  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -1.56px;

  select {
    padding: 13px;
    width: 100%;
    border-radius: 8px;
    border: 1px solid var(--gray-300, #D0D5DD);
    background: var(--white, #FFF);
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  }
`
