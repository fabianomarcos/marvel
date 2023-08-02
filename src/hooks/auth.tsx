import React, { createContext, useCallback, useState, useContext } from 'react'
import { api } from '@/lib/axios'
import { StorageEnum } from '@/utils/storageEnum'

interface SignInCredentials {
  email: string
  password: string
}

interface User {
  id: string
  avatar_url: string
  name: string
  email: string
}
interface AuthState {
  token: string
  user: User
}

interface AuthContextData {
  user: User
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): void
  updateUser(user: User): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

function AuthProvider({ children }: any) {
  const [data, setData] = useState<AuthState>(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem(StorageEnum.token) || ''
      const user = localStorage.getItem(StorageEnum.user)

      if (token && user && user !== 'undefined') {
        api.defaults.headers.authorization = `Bearer ${token}`

        return { token, user: JSON.parse(user) }
      }
    }
    return {} as AuthState
  })

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post<AuthState>('/auth/session', {
      email,
      password,
    })

    const { token, user } = response.data

    localStorage.setItem(StorageEnum.token, token)
    localStorage.setItem(StorageEnum.user, JSON.stringify(user))

    api.defaults.headers.authorization = `Bearer ${token}`

    setData({ token, user })
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem(StorageEnum.token)
    localStorage.removeItem(StorageEnum.user)

    setData({} as AuthState)
  }, [])

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem(StorageEnum.user, JSON.stringify(user))

      setData({
        token: data.token,
        user,
      })
    },
    [setData, data.token],
  )
  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }
