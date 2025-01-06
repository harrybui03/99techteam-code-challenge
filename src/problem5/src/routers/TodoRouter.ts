import { Router } from "express";
import {
    createTodo,
    deleteTodo,
    getCreateTodo,
    getTodo,
    getTodos,
    getUpdateTodo,
    updateTodo
} from "../controllers/TodoController";


const router = Router();

router.get("/", getTodos);
router.post("/", createTodo);
router.get("/create", getCreateTodo);

router.get("/:id", getTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);
router.get("/edit/:id", getUpdateTodo);

export default router;
