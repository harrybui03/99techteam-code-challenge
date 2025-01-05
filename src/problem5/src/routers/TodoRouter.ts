import { Router } from "express";
import { createTodo, deleteTodo, getTodo, getTodos, updateTodo } from "../controllers/TodoController";


const router = Router();

router.post("/", createTodo);
router.get("/", getTodos);
router.get("/:id", getTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
