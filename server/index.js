import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './routers/posts.js';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3000;

const URI = 'mongodb+srv://admin:Giahoa123@cluster0.a7cdn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.use(bodyParser.json({limit: '30mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '30mb'}));
app.use(cors());

app.use('/posts', posts)

mongoose.connect(URI,  {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
console.log('Connected');
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
}).catch(err => {
    console.log('err',err)
})


