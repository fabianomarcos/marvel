import { User } from './User'

export interface ICreateUserDTO {
  email: string
  password: string
}

export default interface IUsersRepository {
  findByEmail(email: string): Promise<User | undefined>
  create(data: ICreateUserDTO): Promise<User>
  compareHash(payload: string, hashed: string): Promise<boolean>
  generateHash(payload: string): Promise<string>
}
