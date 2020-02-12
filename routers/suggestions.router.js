const router = require('express').Router();
const {
  allSuggestionsByGrant,
  getSuggestionById,
  addSuggestion,
} = require('../controllers/suggestions.controller');

router
  .get('/:id/suggestion', allSuggestionsByGrant)
  .get('/suggestion/:id', getSuggestionById)
  .post('/suggestion', addSuggestion);

module.exports = router;
