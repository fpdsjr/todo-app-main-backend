import { Request, Response } from "express";
import { CreateToDoUseCase } from "./CreateToDoUseCase";



export class CreateToDoController {
  async handle(request: Request, response: Response) {
    const { description, active } = request.body

    const createToDo = new CreateToDoUseCase();

    const todo = await createToDo.execute({
      description,
      active
    })

    return response.status(200).json(todo);
  }
}