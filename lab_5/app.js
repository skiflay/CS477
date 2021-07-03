const express = require('express');
const bookController = require('./router/bookRouter');
const cors = require('cors');



const app = express();
app.use(cors());
app.use(express.json());

app.use('/books', bookController);

app.use((req, res, next) => {
    res.status(200).json({ error: req.url + ' API not supported!' });
    });

app.use((err, req, res, next) => {
    if (err.message === 'NOT Found') {
    res.status(404).json({ error: err.message });
    } else {
    res.status(500).json({ error: 'Something is wrong! Try later' });
    }
})



app.listen(3000, ()=>console.log('Serving is Working'))
