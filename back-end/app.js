/* Import modules */
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/* Import middlewares */
var cors = require('./middlewares/cors');

/* Import routes */
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

/* Create app */
var app = express();

/* Configuration */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* CORS */
app.use(cors.handle);

/* XHR filter */
app.use((req, res, next) => {
    if(!req.xhr) {
        return res.status(405).end();
    }
    next();
});

/* Routes */
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
