import ContactModel from "./contact.schema.js"


export default class ContactConroller{


   async getContact(req, res ){
        try{
            const contact = await ContactModel.find();
            return res.status(200).send(contact)
        }catch(err){
            console.log("error on book controller", err)
        }
    }
}