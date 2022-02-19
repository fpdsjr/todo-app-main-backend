import { Request, Response } from "express";
import { UpdateToDoUseCase } from "./UpdateToDoUseCase";

export class UpdateToDoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const updateToDoUseCase = new UpdateToDoUseCase();

    const updateToDo = await updateToDoUseCase.execute({
      id,
    });

    return response.json(updateToDo);
  }
}
