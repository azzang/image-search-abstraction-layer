var Search = require('../Search');

function sendRecentSearches(err, searches) {
  if (err) return res.json({ error: err.message });
  this.res.json(searches.map(function(search) {
    return {
      term: search.query,
      when: search.time
    };
  }));
}

module.exports = function(req, res) {
  Search.find()
    .limit(10)
    .sort('-time')
    .exec(sendRecentSearches.bind({ req, res }));
};
