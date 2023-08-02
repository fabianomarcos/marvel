import type { NextApiRequest, NextApiResponse } from 'next'
import AuthenticateUserService from './AuthenticateUser'
import UsersRepository from '../users/UsersRepository'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') return res.status(405).end()

  const usersRepository = UsersRepository.getInstance()
  const authenticateUser = new AuthenticateUserService(usersRepository)

  const { email, password } = req.body

  try {
    const { user, token } = await authenticateUser.execute({
      email,
      password,
    })

    return res.status(201).json({ user, token })
  } catch (error: any) {
    console.error('error: ', error)
    return res.status(401).json({ message: error.message })
  }
}
