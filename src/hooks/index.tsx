import React from 'react'

import { AuthProvider } from './auth'
import { ToastProvider } from './toast'

function AppProvider({ children }: any) {
  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  )
}

export default AppProvider
