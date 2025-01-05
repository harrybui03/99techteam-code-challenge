export type CreateTodoRequest = {
  title: string;
  description: string;
};

export type UpdateTodoRequest = {
    title: string;
    description: string;
    isCompleted: boolean;
};

export type Todo = {
    id: number;
    title: string;
    description: string;
    isCompleted: boolean;
    createdAt: Date;
    updatedAt: Date;
};