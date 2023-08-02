import IUsersRepository from '../IUserRepository'
import { User } from '../User'

class FindUserByEmailService {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute(email: string): Promise<User> {
    const checkUserExist = await this.usersRepository.findByEmail(email)

    if (!checkUserExist) throw new Error('Este email não está cadastrado.')

    return checkUserExist
  }
}

export default FindUserByEmailService
