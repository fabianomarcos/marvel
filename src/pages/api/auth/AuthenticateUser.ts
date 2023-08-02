import IUsersRepository, { ICreateUserDTO } from '../users/IUserRepository'
import { User } from '../users/User'
import { sign } from 'jsonwebtoken'
import authConfig from './config'

interface IResponse {
  user: User
  token: string
}

class AuthenticateUserService {
  private usersRepository: IUsersRepository
  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository
  }

  public async execute({
    email,
    password,
  }: ICreateUserDTO): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) throw new Error('Senhas ou email errados.')

    const passwordMatched = await this.usersRepository.compareHash(
      password,
      user.password,
    )

    if (!passwordMatched) throw new Error('Senha ou email errados.')

    const { secret, expiresIn } = authConfig.jwt

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    })

    return { user, token }
  }
}

export default AuthenticateUserService
