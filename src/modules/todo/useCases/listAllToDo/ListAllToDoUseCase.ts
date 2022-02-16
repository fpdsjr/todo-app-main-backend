import { prisma } from "../../../../database/prismaClient"



export class ListAllToDoUseCase {
  async execute() {
    const listAllToDos = await prisma.todo.findMany()
    
    
    return listAllToDos
  }

}