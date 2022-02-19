import { prisma } from "../../../../database/prismaClient";

interface IUpdateToDoUseCase {
  id: string;
}

export class UpdateToDoUseCase {
  async execute({ id }: IUpdateToDoUseCase) {
    const boolean = true;

    const updateToDo = await prisma.todo.update({
      where: {
        id,
      },
      data: {
        active: !boolean,
      },
    });

    return updateToDo;
  }
}
