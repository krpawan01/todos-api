import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

// const url = 'mongodb://localhost:27017/restapi'


export const connectWithMongoose = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("db connected using mongoose")
    } catch (err) {
        console.log("error on connecting db", err)
    }
}