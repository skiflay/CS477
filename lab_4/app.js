const express = require('express');
const userRouter= require('./router/user');
const prodRouter= require('./router/product');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended: true}));
app.use('/users', userRouter);
app.use('/products', prodRouter);


app.use('/users/*',(req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'view', '404.html'))
    });



app.listen(3000, ()=>console.log('Server is listening ...'))

