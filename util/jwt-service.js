const jwt = require('jsonwebtoken');
const config = require('../config');


async function generateToken(user) {
    return jwt.sign(user, config.jwtSecret, { expiresIn: process.env.JWT_EXPIRE || '1h' });
};

async function verifyToken(token) {
    try {
        return jwt.verify(token, config.jwtSecret);
    } catch (error) {
        return null;
    }
};

module.exports = {
    generateToken,
    verifyToken
};