import todoModel from "./todo.schema.js"


export default class TodoController {

    async getTodo(req, res) {
        try {
            const todo = await todoModel.find();
            return res.status(200).send(todo);
        } catch (err) {
            console.log("error on todo controller", err)
        }
    }

}