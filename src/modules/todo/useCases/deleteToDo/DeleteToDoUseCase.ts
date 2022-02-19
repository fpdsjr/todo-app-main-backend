import { prisma } from "../../../../database/prismaClient";

export class DeleteToDoUseCase {
  async execute() {
    const deleteToDo = await prisma.todo.deleteMany({
      where: {
        active: false,
      },
    });

    return deleteToDo;
  }
}
