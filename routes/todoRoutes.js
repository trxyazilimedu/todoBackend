import express from "express";
import * as todoController from "../controllers/todoController.js";

const router = express.Router();

/**
 * @swagger
 * /todos:
 *   get:
 *     summary: Retrieve a list of todos
 *     responses:
 *       200:
 *         description: A list of todos
 */
router.get("/", todoController.getAllTodos);

/**
 * @swagger
 * /todos/add:
 *   post:
 *     summary: Add a new todo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "New Todo"
 *     responses:
 *       201:
 *         description: Todo created successfully
 */
router.post("/add", todoController.addTodo);

/**
 * @swagger
 * /todos/{id}:
 *   put:
 *     summary: Update a todo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Updated Todo"
 *               completed:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Todo updated successfully
 *       404:
 *         description: Todo not found
 */
router.put("/:id", todoController.updateTodoById);

/**
 * @swagger
 * /todos/{id}:
 *   delete:
 *     summary: Delete a todo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Todo deleted successfully
 *       404:
 *         description: Todo not found
 */
router.delete("/:id", todoController.deleteTodoById);

/**
 * @swagger
 * /todos/{id}/toggle:
 *   patch:
 *     summary: Toggle the completed status of a todo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Todo status toggled successfully
 *       404:
 *         description: Todo not found
 */
router.patch("/:id/toggle", todoController.toggleTodoById);

export default router;
