const express = require('express');
const router = express.Router();
const {getAllBooks,createBook, updateBook, deleteBook} = require('../controller/bookcontroller')

router.get('/book', getAllBooks);
router.post('/book', createBook);
router.put('/book/:id', updateBook);
router.delete('/book/:id', deleteBook);

module.exports = router;
