const loginRouter = require('./routes/login-router');
const bookRouter = require('./routes/book-router');

module.exports = {

    configure: app => {

        app.use('/book/store/api/v1/login', loginRouter);
        app.use('/book/store/api/v1/books', bookRouter);
        app.get('/', (req, res) => res.send('OK'));

    }
};
