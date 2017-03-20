const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const searchSchema = new Schema({
  query: String,
  time: Date,
});

mongoose.Promise = require('bluebird');

module.exports = mongoose.model('Search', searchSchema);
