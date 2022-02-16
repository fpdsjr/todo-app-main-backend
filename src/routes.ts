import { Router } from "express"
import { CreateToDoController } from "./modules/todo/useCases/createTodo/CreateToDoController";
import { ListAllToDoController } from "./modules/todo/useCases/listAllToDo/ListAllToDoController";
import { UpdateToDoController } from "./modules/todo/useCases/updateTodo/UpdateTodoController";

const routes = Router();

const createToDo = new CreateToDoController();
const listAllTodo = new ListAllToDoController()
const updateToDo = new UpdateToDoController();



routes.post("/todo", createToDo.handle)

routes.get("/listalltodo",  listAllTodo.handle)

routes.put("/todo/:id", updateToDo.handle)


export { routes }