const router = require('express').Router();
const handleImageSearchRequest = require('./imageSearch');
const handleRecentSearchRequest = require('./recentSearches');

router.get('/imagesearch/:query', handleImageSearchRequest);
router.get('/latest/imagesearch', handleRecentSearchRequest);

module.exports = router;
