import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from './../styles/theme'

import GlobalStyles from '../styles/global'
import AppProvider from '@/hooks'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </ThemeProvider>
    </>
  )
}
