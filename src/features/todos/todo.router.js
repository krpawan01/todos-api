import express from 'express';
import TodoController from './todo.controller.js';

const todoRouter = express.Router();

const todoController = new TodoController();

todoRouter.get('/', async(req, res)=>{
    await todoController.getTodo(req, res)
})

export default todoRouter;