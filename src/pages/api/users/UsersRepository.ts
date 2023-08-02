import { v4 as uuid } from 'uuid'
import { compare, hash } from 'bcryptjs'
import IUsersRepository, { ICreateUserDTO } from './IUserRepository'
import { User } from './User'

class UsersRepository implements IUsersRepository {
  private users: User[]
  fakeUsers = [
    { id: '1d66e534-c560-4389-adc6-1da629286c4e', email: 'geronimo@email.com', password: '$2a$08$xNlUZ2I09svqqJO/0Anl4eJMn/Xi8AbZmDUroLfSwxtkwwo2ZRykS' },
    { id: '2d66e534-c560-4389-adc6-1da629286c4e', email: 'ana@email.com', password: '$2a$08$xNlUZ2I09svqqJO/0Anl4eJMn/Xi8AbZmDUroLfSwxtkwwo2ZRykS' },
    { id: '3d66e534-c560-4389-adc6-1da629286c4e', email: 'jair@email.com', password: '$2a$08$xNlUZ2I09svqqJO/0Anl4eJMn/Xi8AbZmDUroLfSwxtkwwo2ZRykS' },
  ]

  private static INSTANCE: IUsersRepository

  private constructor() {
    this.users = this.fakeUsers
  }

  public static getInstance(): IUsersRepository {
    UsersRepository.INSTANCE = UsersRepository.INSTANCE
      ? UsersRepository.INSTANCE
      : new UsersRepository()
    return UsersRepository.INSTANCE
  }

  public async generateHash(payload: string): Promise<string> {
    return hash(payload, 8)
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed)
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = this.users.find((user) => user.email === email)
    return findUser
  }

  public async create(userData: ICreateUserDTO): Promise<User> {
    const user = new User()

    Object.assign(user, { id: uuid() }, userData)

    this.users.push(user)

    return user
  }

  public async save(user: User): Promise<User> {
    const findIndex = this.users.findIndex(
      (findUser) => findUser.id === user.id,
    )

    this.users[findIndex] = user

    return user
  }
}

export default UsersRepository
