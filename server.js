var express = require('express');
var mongoose = require('mongoose');

var apiRouter = require('./api/router');

var app = express();

app.set('json spaces', 3);

mongoose.connect('mongodb://localhost/search');

app.use('/api', apiRouter);

app.listen(process.env.PORT || 5000);
