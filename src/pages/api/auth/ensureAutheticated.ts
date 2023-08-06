import type { NextApiRequest, NextApiResponse } from 'next'
import { verify } from 'jsonwebtoken'

import authConfig from './config'

interface ITokenPayload {
  iat: number
  exp: number
  sub: string
}

export default function ensureAuthenticated(
  request: NextApiRequest,
  _: NextApiResponse,
): void {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new Error('Token inválido d')
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded = verify(token, authConfig.jwt.secret)

    const { sub } = decoded as ITokenPayload

    (request as any).user = {
      id: sub,
    }
  } catch {
    throw new Error('Token inválido')
  }
}
