import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import posts from './routers/posts.js'
import mongoose from 'mongoose'
const app = express()
const port = process.env.port || 5000

const URI =
  'mongodb+srv://user-123:user-123@conghautest1.5jq4w.mongodb.net/holatex?retryWrites=true&w=majority'

app.use(bodyParser.json({limit : '30mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '30mb'}));
app.use(cors());

app.use('/posts', posts);

mongoose
    .connect(URI, {
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then(() => {
        console.log('connect to DB');
        app.listen(port, () => {
          console.log(`App listening at http://localhost:${port}`)
        })
    })
    .catch((err) => {
        console.log('err', err)
    })

