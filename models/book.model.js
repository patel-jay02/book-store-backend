const mongoose = require('mongoose');

const BookStoreSchema = mongoose.Schema({
    
    name: {
        type: String,
        unique: true
    },
    author: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    total_reader: {
        type: Number
    },
    book_type: {
        type: String
    }
   
}, {
    timestamps: true
});

const Book = mongoose.model('book_store', BookStoreSchema);

module.exports = Book;
