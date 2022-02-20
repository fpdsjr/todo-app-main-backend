import { Request, Response } from "express";
import { DeleteOnlyOneToDoUseCase } from "./DeleteOnlyOneToDoUseCase";

export class DeleteOnlyOneToDoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const deleteOnlyOneToDoUseCase = new DeleteOnlyOneToDoUseCase();

    const result = await deleteOnlyOneToDoUseCase.execute({ id });

    return response.status(204).json(result);
  }
}
