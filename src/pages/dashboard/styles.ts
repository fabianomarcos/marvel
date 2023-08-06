import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
`

export const StructurePage = styled.div`
  display: grid;
  grid-template-columns: 256px auto;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.COLORS.WHITE};
  `

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContentSiglePage = styled.div`
  padding: 24px 0 0 34px;
`