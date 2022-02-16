import { prisma } from "../../../../database/prismaClient"


interface IUpdateToDoUseCase {
  id: string
}


export class UpdateToDoUseCase {
  async execute({ id }: IUpdateToDoUseCase) {
    const updateToDo = await prisma.todo.update({
      where: {
        id,
      },
      data: {
        active: false
      }
    })
    
    return updateToDo;
  }
}