const router = require('express').Router();
const { adminRouter } = require('./user.router');
const {
  getGrantsAdmin,
  updateGrant,
  deleteGrant,
  removeSuggestion,
  getSuggestionByGrantId,
} = require('../controllers/admin.controller');

router
  .get('/grants', getGrantsAdmin)
  .get('/suggestions/:grant_id', getSuggestionByGrantId)
  .put('/:id', updateGrant)
  .delete('/:id', deleteGrant)
  .delete('/suggestion/:id', removeSuggestion)
  .use('/users', adminRouter);

module.exports = router;
