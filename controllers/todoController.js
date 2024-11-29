import * as todoService from "../services/todoService.js";

export const getAllTodos = async (req, res) => {
    const todos = await todoService.getTodos();
    res.json(todos);
};

export const addTodo = async (req, res) => {
    const { title } = req.body;
    const todo = await todoService.createTodo(title);
    res.status(201).json(todo);
};

export const updateTodoById = async (req, res) => {
    const { id } = req.params;
    const updated = await todoService.updateTodo(id, req.body);
    updated[0] ? res.sendStatus(200) : res.sendStatus(404);
};

export const deleteTodoById = async (req, res) => {
    const { id } = req.params;
    const deleted = await todoService.deleteTodo(id);
    deleted ? res.sendStatus(200) : res.sendStatus(404);
};

export const toggleTodoById = async (req, res) => {
    const { id } = req.params;
    const todo = await todoService.toggleTodo(id);
    todo ? res.json(todo) : res.sendStatus(404);
};
