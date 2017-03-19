var router = require('express').Router();
var handleImageSearchRequest = require('./imageSearch');
var handleRecentSearchRequest = require('./recentSearches');

router.get('/imagesearch/:query', handleImageSearchRequest);
router.get('/latest/imagesearch', handleRecentSearchRequest);

module.exports = router;
