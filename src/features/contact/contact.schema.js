
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({});

const ContactModel = mongoose.model('contact', contactSchema);

export default ContactModel;