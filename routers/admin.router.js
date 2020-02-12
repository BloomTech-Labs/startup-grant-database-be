const router = require('express').Router();
const {
  getGrantsAdmin,
  updateGrant,
  deleteGrant,
  removeSuggestion,
  getSuggestionByGrantId,
} = require('../controllers/admin.controller');

router
  .get('/', getGrantsAdmin)
  .get('/suggestions/:grant_id', getSuggestionByGrantId)
  .put('/:id', updateGrant)
  .delete('/:id', deleteGrant)
  .delete('/suggestion/:id', removeSuggestion);

module.exports = router;
