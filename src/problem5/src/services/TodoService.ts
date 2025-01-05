import { Repository } from "typeorm";
import { Todo } from "../entities/Todo";
import { AppDataSource } from "../database/DataSource";
import { CreateTodoRequest, UpdateTodoRequest } from "../schema/TodoSchema";

export class TodoService {
    private todoRepository!: Repository<Todo>;

    constructor() {
        this.todoRepository = AppDataSource.getRepository(Todo);
    }

    async create(input: CreateTodoRequest) {
        const todo = this.todoRepository.create({ ...input, createdAt: new Date() });
        return this.todoRepository.save(todo);
    }

    async getById(id: number) {
        return this.todoRepository.findOneBy({ id });
    }

    async update(id: number,input: UpdateTodoRequest) {
        return await this.todoRepository.update(id, input);
    }

    async delete(id: number) {
        return this.todoRepository.delete(id);
    }

    async list(isCompleted?: boolean) {
        // If isCompleted is provided, use it to filter; otherwise, fetch all todos
        const whereClause = isCompleted !== undefined ? { where: { isCompleted } } : {};
    
        // Fetch todos based on the condition
        return this.todoRepository.find(whereClause);
    }
}