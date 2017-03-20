const Search = require('../Search');

function sendRecentSearches(err, searches) {
  if (err) return this.res.json({ error: err.message });
  this.res.json(searches.map(search => ({
    term: search.query,
    when: search.time,
  })));
}

module.exports = (req, res) => {
  Search.find()
    .limit(10)
    .sort('-time')
    .exec(sendRecentSearches.bind({ req, res }));
};
