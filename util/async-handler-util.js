
const { validationResult } = require('express-validator');
const { BaseResponse } = require('../models/custom-response');

// validation error handling
const asyncHandler = callback => (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw { errorDescription: errors.array().map(e => `${e.path} ${e.msg}`).join(', ') };
    }
    callback(req, res, next)
        .then(BaseResponse)
        .then(result => {
            if (res.headersSent) {
                return this;
            }
            res.send(result);
            return this;
        })
        .catch(next);
};

module.exports = asyncHandler;