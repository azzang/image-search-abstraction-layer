var GoogleImages = require('google-images');
var client = new GoogleImages(process.env.CX, process.env.API_KEY);
var Search = require('../Search');

function sendImageData(err, search) {
  if (err) return res.json({ error: err.message });
  this.res.json(this.images.map(function(img) {
    return {
      url: img.url ? img.url : null,
      snippet: img.description ? img.description : null,
      thumbnail: img.thumbnail && img.thumbnail.url ? img.thumbnail.url : null
    };
  }));
}

function saveSearch(images) {
  this.images = images;
  Search.create({ query: this.req.params.query, time: new Date() },
  sendImageData.bind(this));
}

module.exports = function(req, res) {
  var page = /^\d+$/.test(req.query.offset) ? Number(req.query.offset) : 0;
  client.search(req.params.query, { page })
    .then(saveSearch.bind({ req, res }))
    .catch(function(err) { res.json({ error: err.message }); });
};
