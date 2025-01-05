import { TodoService } from "../services/TodoService"

declare global {
    var todoService: TodoService
}

export const initDependencies = async () => {
    global.todoService = new TodoService();
}