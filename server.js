var express = require('express');
var mongoose = require('mongoose');

var apiRouter = require('./api/router');

var app = express();

app.set('json spaces', 3);

mongoose.connect(process.env.MONGOLAB_URI);

app.use('/api', apiRouter);

app.use(function(req, res) { // handle faulty requests
  res.status(400).json({ error: "Hmmm... Couldn't recognize that URL" });
});

app.listen(process.env.PORT || 5000);
