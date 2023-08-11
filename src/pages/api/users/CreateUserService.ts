/* eslint-disable no-useless-constructor */
import IUsersRepository from './IUserRepository'
import { User } from './User'

interface IRequest {
  email: string
  password: string
  confirm_password: string
}

class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute({ email, password, confirm_password }: IRequest): Promise<User> {
    const checkUserExist = await this.usersRepository.findByEmail(email)

    if (checkUserExist) throw new Error('Este email já é utilizado.')

    const isEqualPasswords = confirm_password === password

    if (!isEqualPasswords) throw new Error('As senhas não são iguais')

    const hashedPassword = await this.usersRepository.generateHash(password)

    const user = await this.usersRepository.create({
      email,
      password: hashedPassword,
    })

    return user
  }
}

export default CreateUserService
