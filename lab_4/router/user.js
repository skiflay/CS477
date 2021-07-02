const express = require('express');
const router = express.Router();
//const path = require('path');


router.get('/', (req, res, next)=>{
    const html = `
    <form action="/users" method="post">
   <input type="text" placeholder="first name" name="fname"><br> <br>
    <input type="text" placeholder="last name" name="lname"><br> <br>
    <input type="submit" value="Submit">
    </form>`;
    res.send(html);
})

router.post('/users', (req,res,next)=>{
    let data = req.body;
    res.status(200)
    res.json(data);  
    //res.redirect('/users')
})


module.exports = router;