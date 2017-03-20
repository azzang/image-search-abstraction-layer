const GoogleImages = require('google-images');
const Search = require('../Search');

const client = new GoogleImages(process.env.CX, process.env.API_KEY);

function sendImageData(err) {
  if (err) return this.res.json({ error: err.message });
  this.res.json(this.images.map(img => ({
    url: img.url ? img.url : null,
    snippet: img.description ? img.description : null,
    thumbnail: img.thumbnail && img.thumbnail.url ? img.thumbnail.url : null,
  })));
}

function saveSearch(images) {
  this.images = images;
  Search.create({ query: this.req.params.query, time: new Date() },
  sendImageData.bind(this));
}

module.exports = (req, res) => {
  const page = /^\d+$/.test(req.query.offset) ? Number(req.query.offset) : 0;
  client.search(req.params.query, { page })
    .then(saveSearch.bind({ req, res }))
    .catch((err) => { res.json({ error: err.message }); });
};
