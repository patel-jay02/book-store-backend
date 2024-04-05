const jwtService = require('../util/jwt-service');
const { ErrorCodes } = require('../models/custom-response');
async function defaultLogin(req) {

    const data = req.body;
    const envUsername = process.env.DEFAULT_ADMIN_NAME;
    const envPassword = process.env.DEFAULT_PASSWORD;
    const username = data.username.trim();
    const password = data.password.trim();
    if (username === envUsername && password === envPassword) {
        const token = jwtService.generateToken({ username });
        return token;
    }
    throw ErrorCodes.UNAUTHORIZED;
}

module.exports = {
    defaultLogin
};