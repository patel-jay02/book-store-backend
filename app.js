require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


module.exports = async () => {
    require('./util/database-connection');
    const routes = require('./routes');
    const { validationResult } = require('express-validator');
    const { ErrorCodes } = require('./models/custom-response');

    const app = express();
    app.use(cors());


    //check url and host
    app.use((req, res, next) => {
        console.log(`:::::::url:::::: ${req.method}  :: ${req.hostname + req.url}`);
        next();
    })


    //server port
    const http = require('http');
    const server = http.createServer(app);

    app.use(bodyParser.json({ limit: '50mb', extended: true }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

    routes.configure(app);




    app.use(function (error, req, res, next) {
        if (req.error) {
            req.error(`error : ${JSON.stringify(error)}, errorObj: ${error}`);
        }

        //   server error handling
        if (error.message && error.message.includes('invalid input syntax')) {
            error = { ...ErrorCodes.BAD_REQUEST, errorDescription: error.message };
        }
        res.status(error.status || 500);
        if (error.errorDescription) {
            error.errorDescription = error.errorDescription.trim();
        }
        res.send({
            errors: [{ code: error.code, message: error.message }],
            errorDescription: error.errorDescription,
            meta: error.meta,
        });
    });


    return { app, server };

}