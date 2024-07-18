import express from 'express';
import ContactConroller from './contact.controller.js';

const contactRouter = express.Router()

const contactConroller = new ContactConroller();

contactRouter.get('/', async(req, res)=>{
    await contactConroller.getContact(req, res);
})

export default contactRouter;
