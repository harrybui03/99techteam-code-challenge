import { CreateTodoRequest, UpdateTodoRequest } from "../schema/TodoSchema"
import { Request, Response } from 'express';
export const createTodo = async (req: Request, res: Response) => {
    try {
        const todoInput: CreateTodoRequest = req.body;
        if (todoInput == null) {
            throw new Error("Invalid input.");
        }

        const todo = await global.todoService.create(todoInput);
        // Render success message in EJS template
        res.render('todoSuccess', { message: 'Create successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).render('error', { message: 'An error occurred while creating Todo.' });
    }
};

export const updateTodo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const todoInput: UpdateTodoRequest = req.body;
        if (todoInput == null) {
            throw new Error("Invalid input.");
        }

        const idNumber: number = parseInt(id);
        const todo = await global.todoService.update(idNumber, todoInput);

        // Render success message in EJS template
        res.render('todoSuccess', { message: 'Update successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).render('error', { message: 'An error occurred while updating Todo.' });
    }
};


export const deleteTodo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const idNumber: number = parseInt(id);

        await global.todoService.delete(idNumber);
        // Render success message in EJS template
        res.render('todoSuccess', { message: 'Delete successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).render('error', { message: 'An error occurred while deleting Todo.' });
    }
};


export const getTodo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const idNumber: number = parseInt(id);

        const todo = await global.todoService.getById(idNumber);
        // Render todo details page with the retrieved data
        res.render('todoDetails', { todo });
    } catch (err) {
        console.error(err);
        res.status(500).render('error', { message: 'An error occurred while getting Todo.' });
    }
};


export const getTodos = async (req: Request, res: Response) => {
    try {
        const { isCompleted } = req.query;

        const filter = isCompleted === 'true' ? true : isCompleted === 'false' ? false : undefined;
        const todos = await global.todoService.list(filter);

        // Render the list of todos
        res.render('todoList', { todos });
    } catch (err) {
        res.status(500).render('error', { message: 'An error occurred while getting todos.' });
    }
};
