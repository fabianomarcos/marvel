import { compare, hash } from 'bcryptjs'
import IUsersRepository, { ICreateUserDTO } from './IUserRepository'
import { User } from './User'
import { prisma } from '@/lib/prisma'

class UsersRepository implements IUsersRepository {
  private static INSTANCE: IUsersRepository

  private constructor() {}

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
    const findUser = await prisma.user.findUnique({
      where: { email }
    }) as User | undefined;
    return findUser
  }

  public async create(userData: ICreateUserDTO): Promise<User> {
    const user =  await prisma.user.create({ data: userData }) as User;
    return user
  }

  public async update(user: User): Promise<User> {
    await prisma.user.update({ where: { email: user.email }, data: { ...user }})
    return user
  }
}

export default UsersRepository
