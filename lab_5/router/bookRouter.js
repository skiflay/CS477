const express = require('express');
const  bookController = require('../controllers/bookController');

const router = express.Router();


router.get('/', bookController.getBooks);
router.get('/:bookId', bookController.getBookById);
router.post('/', bookController.save);

// router.get('/', productController.getProducts);
// router.get('/:prodId', productController.getProductById);
// router.post('/', productController.save);





module.exports = router;
