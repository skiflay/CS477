const express = require('express');
const userRouter= require('./router/user');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended: true}));
app.use(userRouter);



app.listen(3000, ()=>console.log('Server is listening ...'))

