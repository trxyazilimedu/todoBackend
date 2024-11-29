import Todo from "../models/todo.js";

export const createTodo = async (title) => {
    return await Todo.create({ title });
};

export const getTodos = async () => {
    return await Todo.findAll();
};

export const updateTodo = async (id, data) => {
    return await Todo.update(data, { where: { id } });
};

export const deleteTodo = async (id) => {
    return await Todo.destroy({ where: { id } });
};

export const toggleTodo = async (id) => {
    const todo = await Todo.findByPk(id);
    if (todo) {
        todo.completed = !todo.completed;
        await todo.save();
        return todo;
    }
    return null;
};
