
import mongoose from 'mongoose';


const todoSchme = mongoose.Schema({
    task: String
})

const todoModel = mongoose.model('todos', todoSchme);

export default todoModel;