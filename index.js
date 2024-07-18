import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import bodyParser from "body-parser";
import cors from 'cors'
import { connectWithMongoose } from "./src/config/mongoose.js";
import todoRouter from "./src/features/todos/todo.router.js";
import bookRouter from "./src/features/book/book.router.js";
import postRouter from "./src/features/posts/post.router.js";
import contactRouter from "./src/features/contact/contact.router.js";

const app = express();

const port = 8000;

// // layouts
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())

// // set a view engine
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static('./src/public'))

app.use(expressEjsLayouts)
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use(express.static('./src/views'));

app.get('/', (req, res) => {
    res.render("index")
})

app.get('/docs', (req, res) => {
    res.render('api_docs')
})

app.use('/api/todos', todoRouter);
app.use('/api/books', bookRouter);
app.use('/api/posts', postRouter);
app.use('/api/contacts', contactRouter);


app.listen(port, () => {
    console.log("server is running on port ::", port);
    connectWithMongoose()
})