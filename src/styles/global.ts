import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Epilogue', 'Inter', serif;
  }

  h1 {
    font-size: 36px;
    font-weight: 700;
    letter-spacing: -2.34px;
  }

  button {
    cursor: pointer;
  }
`
