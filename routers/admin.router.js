const admin = require('express').Router();
const moderator = require('express').Router();

const { adminRouter } = require('./user.router');
const {
  getGrantsAdmin,
  updateGrant,
  deleteGrant,
  removeSuggestion,
  getSuggestionByGrantId,
} = require('../controllers/admin.controller');

admin.use('/users', adminRouter);

moderator
  .get('/grants', getGrantsAdmin)
  .get('/suggestions/:grant_id', getSuggestionByGrantId)
  .put('/grant/:id', updateGrant)
  .delete('/grant/:id', deleteGrant)
  .delete('/suggestion/:id', removeSuggestion);

module.exports = { admin, moderator };
