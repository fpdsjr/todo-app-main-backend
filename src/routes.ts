import { Router } from "express"
import { CreateToDoController } from "./modules/todo/useCases/createTodo/CreateToDoController";
import { ListAllToDoController } from "./modules/todo/useCases/listAllToDo/ListAllToDoController";

const routes = Router();

const createToDo = new CreateToDoController();
const listAllTodo = new ListAllToDoController()



routes.post("/todo", createToDo.handle)

routes.get("/listalltodo",  listAllTodo.handle)

export { routes }