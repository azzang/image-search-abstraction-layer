var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var searchSchema = new Schema({
  query: String,
  time: Date
});

mongoose.Promise = require('bluebird');

module.exports = mongoose.model('Search', searchSchema);
