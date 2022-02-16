import { Router } from "express"
import { CreateToDoController } from "./modules/todo/useCases/createTodo/CreateToDoController";



const routes = Router();

const createToDo = new CreateToDoController();





routes.post("/todo", createToDo.handle)


export { routes }