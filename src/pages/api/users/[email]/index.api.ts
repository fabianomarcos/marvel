import type { NextApiRequest, NextApiResponse } from 'next'
import UsersRepository from '../UsersRepository'
import FindUserByEmailService from './FindUserByEmailService'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') return res.status(405).end()

  const usersRepository = UsersRepository.getInstance()
  const findUser = new FindUserByEmailService(usersRepository)

  const { email } = req.query

  try {
    const user = await findUser.execute(email as string)
    return res.status(200).json({ user })
  } catch (error: any) {
    console.error('error: ', error)
    return res.status(401).json({ message: error.message })
  }
}
