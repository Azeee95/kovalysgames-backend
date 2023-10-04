require ('dotenv').config();

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var gameRouter = require('./routes/games');

var app = express();
const cors = require('cors');
app.use(cors( {

    origin: ['https://www.kovalys-partners.com', 'http://localhost:3000/']


}));

const mongoose = require('mongoose');
require('./models/connection');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/games', gameRouter);

module.exports = app;
