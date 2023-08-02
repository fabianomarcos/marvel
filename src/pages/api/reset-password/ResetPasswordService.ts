import IUsersRepository from '../users/IUserRepository'
import { User } from '../users/User'

interface IRequest {
  email: string
  password: string
  confirm_password: string
}

class ResetPasswordService {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute({
    email,
    password,
    confirm_password,
  }: IRequest): Promise<User> {
    const checkUserExist = await this.usersRepository.findByEmail(email)

    if (!checkUserExist) throw new Error('Email inválido.')

    const isEqualPasswords = confirm_password === password
    if (!isEqualPasswords) throw new Error('As senhas não são iguais')

    checkUserExist.password = await this.usersRepository.generateHash(password)

    return checkUserExist
  }
}

export default ResetPasswordService
