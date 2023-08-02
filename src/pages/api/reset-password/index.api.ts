import type { NextApiRequest, NextApiResponse } from 'next'
import CreateUserService from './ResetPasswordService'
import UsersRepository from '../users/UsersRepository'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'PUT') return res.status(405).end()

  const usersRepository = UsersRepository.getInstance()
  const createUser = new CreateUserService(usersRepository)

  const { email, password, confirm_password } = req.body

  try {
    const user = await createUser.execute({
      email,
      password,
      confirm_password,
    })
    return res.status(201).json({ user })
  } catch (error: any) {
    console.error('error: ', error)
    return res.status(401).json({ message: error.message })
  }
}
