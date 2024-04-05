const express = require('express');
const asyncHandler = require('../util/async-handler-util');
const router = express.Router();
const bookService = require('../services/book-service');
const { isAuthenticate } = require('../middleware/authentication');
const { body } = require('express-validator');
const { ValidationMessages } = require('../models/custom-response');

router.get('/', isAuthenticate, asyncHandler(async (req, res) => {
    let bookData = await bookService.getAllBooks();
    return bookData;

}));

router.post('/', [
    body('bookName').notEmpty().withMessage(ValidationMessages.NOT_EMPTY),
    body('author').notEmpty().withMessage(ValidationMessages.NOT_EMPTY),
    body('description').notEmpty().withMessage(ValidationMessages.NOT_EMPTY),
    body('price').notEmpty().withMessage(ValidationMessages.NOT_EMPTY),
    body('totalReader').notEmpty().withMessage(ValidationMessages.NOT_EMPTY),
    body('bookType').notEmpty().withMessage(ValidationMessages.NOT_EMPTY),
], isAuthenticate, asyncHandler(async (req, res) => {
    return await bookService.saveBook(req.body);
}));

router.put('/:_id', [
    body('bookName').notEmpty().withMessage(ValidationMessages.NOT_EMPTY),
    body('author').notEmpty().withMessage(ValidationMessages.NOT_EMPTY),
    body('description').notEmpty().withMessage(ValidationMessages.NOT_EMPTY),
    body('price').notEmpty().withMessage(ValidationMessages.NOT_EMPTY),
    body('totalReader').notEmpty().withMessage(ValidationMessages.NOT_EMPTY),
    body('bookType').notEmpty().withMessage(ValidationMessages.NOT_EMPTY),
], isAuthenticate, asyncHandler(async (req) => {
    req.body._id = req.params._id;
    return bookService.saveBook(req.body);
}));

router.get('/:_id', isAuthenticate, asyncHandler(async (req, res) => {
    return bookService.getBookById(req.params._id);
}));

router.delete('/:_id', isAuthenticate, asyncHandler(async (req, res) => {
    return bookService.deleteBookById(req.params._id);
}));

module.exports = router;
