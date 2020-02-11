const router = require('express').Router();
const {allSuggestionsByGrant} = require('../controllers/suggestions.controller');

router.get('/:id/suggestions', allSuggestionsByGrant);

module.exports = router;
