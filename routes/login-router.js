const express = require('express');
const { body } = require('express-validator');
const { ValidationMessages } = require('../models/custom-response');
const asyncHandler = require('../util/async-handler-util');
const router = express.Router();
const loginService = require('../services/login-service');

router.post('/', [
    body('username').notEmpty().withMessage(ValidationMessages.NOT_EMPTY),
    body('password').notEmpty().withMessage(ValidationMessages.NOT_EMPTY),
], asyncHandler(async (req) => {
    return loginService.defaultLogin(req);
})
);

module.exports = router;
