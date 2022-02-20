import { prisma } from "../../../../database/prismaClient";

interface IDeleteOnlyOneToDoUseCase {
  id: string;
}

export class DeleteOnlyOneToDoUseCase {
  async execute({ id }: IDeleteOnlyOneToDoUseCase) {
    const deleteToDo = await prisma.todo.delete({
      where: {
        id: id,
      },
    });

    return deleteToDo;
  }
}
