const express = require("express");
const { getTodos, postTodos,deleteTodo, updateTodo, getTodoById } = require("../controllers/TodoControllers");

const router = express.Router();


router.post("/todos", postTodos);
router.get("/todos", getTodos);
router.get("/todos/:id", getTodoById);
router.patch("/todos/:id",updateTodo )
router.delete("/todos/:id",deleteTodo)

module.exports = router;
