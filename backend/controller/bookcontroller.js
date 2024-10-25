const bookModel = require('../models/book')

const getAllBooks = async (req, res) => {
    try {
        const books = await bookModel.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createBook = async (req, res) => {
    const book = new bookModel({
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        description: req.body.description,
        isbn: req.body.isbn
    });

    try {
        const newBook = await bookModel.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updateBook = async (req, res) => {
    try {
        const book = await bookModel.findById(req.params.id);
        if (book) {
            book.title = req.body.title || book.title;
            book.author = req.body.author || book.author;
            book.price = req.body.price || book.price;
            book.description = req.body.description || book.description;
            book.isbn = req.body.isbn || book.isbn;
            const updatedBook = await book.save();
            res.json(updatedBook);
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteBook = async (req, res) => {
    try {
        const book = await bookModel.findById(req.params.id);
        if (book) {
            await book.remove();
            res.json({ message: 'Book deleted' });
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {getAllBooks,createBook, updateBook, deleteBook}
 