const router = require('express').Router();
const {
  allSuggestionsByGrant,
  getSuggestionById,
  addSuggestion,
  removeSuggestion,
} = require('../controllers/suggestions.controller');

router
  .get('/:id/suggestion', allSuggestionsByGrant)
  .get('/suggestion/:id', getSuggestionById)
  .post('/suggestion', addSuggestion)
  .delete('/suggestion/:id', removeSuggestion);

module.exports = router;
