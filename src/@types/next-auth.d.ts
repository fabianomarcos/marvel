// eslint-disable-next-line no-unused-vars
import NextAuth from 'next-auth'

declare module 'next-auth' {
  export interface User {
    id: string
    password: string
    email: string
  }

  export interface Session {
    user: User
  }
}
