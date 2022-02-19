import { Router } from "express";
import { CreateToDoController } from "./modules/todo/useCases/createToDo/CreateToDoController";
import { DeleteToDoController } from "./modules/todo/useCases/deleteToDo/DeleteToDoController";
import { ListAllToDoController } from "./modules/todo/useCases/listAllToDo/ListAllToDoController";
import { UpdateToDoController } from "./modules/todo/useCases/updateToDo/UpdateToDoController";

const routes = Router();

const createToDo = new CreateToDoController();
const listAllToDo = new ListAllToDoController();
const updateToDo = new UpdateToDoController();
const deleteToDo = new DeleteToDoController();

routes.post("/todo", createToDo.handle);

routes.get("/listalltodo", listAllToDo.handle);

routes.put("/todo/:id", updateToDo.handle);

routes.delete("/deletetodo/", deleteToDo.handle);

export { routes };
