const express = require('express');
const router = express.Router();

const product = 
    {productName: 'Banana',
    price: '$2.50',
    description: 'delicious Banana'
}

router.post('/products', (req, res, next)=>{
   res.send(JSON.stringify(product)) 
})
module.exports= router;