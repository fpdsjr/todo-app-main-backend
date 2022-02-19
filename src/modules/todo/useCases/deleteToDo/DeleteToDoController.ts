import { Request, Response } from "express";
import { DeleteToDoUseCase } from "./DeleteToDoUseCase";

export class DeleteToDoController {
  async handle(request: Request, response: Response) {
    const deleteToDoUseCase = new DeleteToDoUseCase();

    const result = deleteToDoUseCase.execute();

    return response.status(203).json(result);
  }
}
