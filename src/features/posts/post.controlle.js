import postModel from "./post.schema.js"

export default class PostController{

    async getPost(req, res){
        try{
            const post = await postModel.find();
            return res.status(200).send(post)
        }catch(err){
            console.log("error on post", er)
        }
    }
}