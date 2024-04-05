const { ErrorCodes } = require('../models/custom-response');
const jwtService = require('../util/jwt-service');

function handleUnauthorized(req, res) {
  console.error('error handler: unauthorized access of APIs');
  if (res.headersSent) {
    return;
  }
  const err = ErrorCodes.UNAUTHORIZED;
  res.status(err.status || 500);
  if (err.errorDescription) {
    err.errorDescription = err.errorDescription.trim();
  }
  res.send({
    errors: [{ code: err.code, message: err.message }],
    errorDescription: err.errorDescription,
    meta: err.meta,
  });
}

async function isAuthenticate(req, res, next) {

  const token = await req.headers['authorization'];

  if (!token) {
    handleUnauthorized(req, res);
    return;
  }
  try {
    let verify = await jwtService.verifyToken(token);
    req.user = {
      user: `${verify.username}`
    };
    next();
  } catch (error) {
    handleUnauthorized(req, res);
    return error;
  }
};


module.exports = {
  isAuthenticate
};
