
import express from 'express';
import PostController from './post.controlle.js';

const postRouter = express.Router();

const postController = new PostController();


postRouter.get('/', async (req, res) => {
    await postController.getPost(req, res)
})


export default postRouter;

