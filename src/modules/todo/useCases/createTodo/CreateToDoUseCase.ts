import { prisma } from "../../../../database/prismaClient";


interface ICreateToDoUseCase {
  description: string;
  active: boolean;
}

export class CreateToDoUseCase {
  async execute({ description, active}: ICreateToDoUseCase ) {
    const createToDo = await prisma.todo.create({
      data: {
        description,
        active
      }
    });

    return createToDo;
  }
}