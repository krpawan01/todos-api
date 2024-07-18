
import express from 'express';
import BookController from './book.controller.js';

const bookRouter = express.Router();


const bookController = new BookController();

bookRouter.get('/', async(req, res)=>{
    await bookController.getBook(req, res);
})

export default bookRouter;