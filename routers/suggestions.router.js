const router = require('express').Router();
const {
  allSuggestionsByGrant,
  getSuggestionById,
  addSuggestion,
  findGrant,
  checkSuggestion,
} = require('../controllers/suggestions.controller');

router
  .get('/:id/suggestion', allSuggestionsByGrant)
  .get('/suggestion/:id', getSuggestionById)
  .post('/suggestion', checkSuggestion, findGrant, addSuggestion);

module.exports = router;
