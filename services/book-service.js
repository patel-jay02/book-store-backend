const { ErrorCodes } = require('../models/custom-response');
const Book = require('../models/book.model');
const { default: mongoose } = require('mongoose');

// Get Book List Function
async function getAllBooks() {
    let data = await Book.find();
    if (!data) {
        throw ErrorCodes.INVALID_ID;
    }
    return data;
};

// Get Book By Id Function
async function getBookById(id) {
    const data = await Book.findById(id);
    if (!data) {
        throw ErrorCodes.INVALID_ID;
    }
    return data;
};

// Insert Update Book Function
async function saveBook(body) {
    let bodyObj = {
        name: body.bookName,
        author: body.author,
        description: body.description,
        price: body.price,
        total_reader: body.totalReader,
        book_type: body.bookType,
        published: body.published,
        isbn: body.isbn
    };

    const exist = await Book.exists({ _id: { $ne: new mongoose.Types.ObjectId(body._id) }, name: body.bookName });
    if (exist) {
        throw ErrorCodes.BOOK_NAME_ALREADY_EXISTS;
    }

    if (body._id) {
        const updatedBook = await Book.findByIdAndUpdate(body._id, bodyObj, { new: true });
        return updatedBook;
    } else {
        const exist = await Book.exists({ name: body.bookName });
        if (exist) {
            throw ErrorCodes.BOOK_NAME_ALREADY_EXISTS;
        }
        return await Book.create(bodyObj);
    }
};

// Delete Book Function
async function deleteBookById(id) {
    const book = await Book.findByIdAndDelete({ _id: id });
    if (!book) {
        throw ErrorCodes.INVALID_ID;
    }
    return book;
};

module.exports = {
    getAllBooks,
    saveBook,
    getBookById,
    deleteBookById
};
