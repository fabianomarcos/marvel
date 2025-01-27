import type { NextApiRequest, NextApiResponse } from "next";
import UsersRepository from "../users/UsersRepository";
import { ListService } from "../users/list";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") return res.status(405).end();

  const usersRepository = UsersRepository.getInstance();
  const listUsers = new ListService(usersRepository);

  try {
    const user = await listUsers.execute();
    return res.status(201).json({ user });
  } catch (error: any) {
    console.error("error: ", error);
    return res.status(401).json({ message: error.message });
  }
}
