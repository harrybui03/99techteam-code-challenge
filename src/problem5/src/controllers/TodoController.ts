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
        const todoInput = req.body;
        if (todoInput == null) {
            throw new Error("Invalid input.");
        }

        todoInput.isCompleted = todoInput.isCompleted === 'on';

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
        const { filter } = req.query;
        // Determine the filter based on the `filterStatus` query parameter
        const filterStatus =
            filter === 'completed' ? true :
                filter === 'pending' ? false :
                    undefined;
        console.log(filter , filterStatus);

        // Fetch todos from the service with the appropriate filter
        const todos = await global.todoService.list(filterStatus);

        // Render the list of todos, passing the filterStatus for the UI
        res.render('todoList', { todos, filterStatus });
    } catch (err) {
        res.status(500).render('error', { message: 'An error occurred while getting todos.' });
    }
};


export const getCreateTodo = async (req: Request, res: Response) => {
    try {
        // Render the create todo page
        res.render('createTodo');
    } catch (err) {
        res.status(500).render('error', { message: 'An error occurred while getting create todo page.' });
    }
}

export const getUpdateTodo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const idNumber: number = parseInt(id);
        const todo = await global.todoService.getById(idNumber);
        // Render the create todo page
        res.render('updateTodo' , {todo});
    } catch (err) {
        res.status(500).render('error', { message: 'An error occurred while getting create todo page.' });
    }
}