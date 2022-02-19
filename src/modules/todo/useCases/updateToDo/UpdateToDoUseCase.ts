import { prisma } from "../../../../database/prismaClient";

interface IUpdateToDoUseCase {
  id: string;
}

export class UpdateToDoUseCase {
  async execute({ id }: IUpdateToDoUseCase) {
    const getActive = await prisma.todo.findFirst({
      where: {
        id,
      },
    });

    const updateToDo = await prisma.todo.update({
      where: {
        id,
      },
      data: {
        active: !getActive?.active,
      },
    });

    return updateToDo;
  }
}
