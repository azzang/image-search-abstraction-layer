const express = require('express');
const mongoose = require('mongoose');

const apiRouter = require('./api/router');

const app = express();

app.set('json spaces', 3);

mongoose.connect(process.env.MONGOLAB_URI);

app.use('/api', apiRouter);

app.use((req, res) => { // handle faulty requests
  res.status(400).json({ error: "Hmmm... Couldn't recognize that URL" });
});

app.listen(process.env.PORT || 5000);
