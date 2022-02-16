import { Request, Response } from "express";
import { ListAllToDoUseCase } from "./ListAllToDoUseCase";



export class ListAllToDoController {
  async handle(request: Request, response: Response) {
    const listAllToDoUseCase = new ListAllToDoUseCase();

    const allTodos = await listAllToDoUseCase.execute();

    return response.json(allTodos);
  }
}