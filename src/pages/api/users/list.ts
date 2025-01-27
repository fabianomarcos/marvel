/* eslint-disable no-useless-constructor */
import IUsersRepository from "./IUserRepository";
import { User } from "./User";

interface IRequest {
  email: string;
  password: string;
  confirm_password: string;
}

export class ListService {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute(): Promise<any> {
    const user = await this.usersRepository.list();

    return user;
  }
}
