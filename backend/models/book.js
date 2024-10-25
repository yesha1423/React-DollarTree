const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    isbn: { type: String, required: true }
});

const bookModel = mongoose.model("Book", bookSchema)

module.exports = bookModel;