import bookModel from "./book.schema.js"


export default class BookController{

    async getBook(req, res){
        try{
            const book = await bookModel.find();
            return res.status(200).send(book)
        }catch(err){
            console.log("error on book controller", err)
        }
    }
}