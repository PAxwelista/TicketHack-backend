var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var panierRouter = require('./routes/panier.js');
var tripsRouter = require('./routes/trips.js')

require ('./models/connection.js');
var app = express();

const cors = require('cors');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/panier', panierRouter);
app.use('/trips', tripsRouter);

module.exports = app;
