const publicGrantRouter = require('express').Router();
const privateGrantRouter = require('express').Router();
const suggestionRouter = require('./suggestions.router');
const {
  allGrants,
  findGrantById,
  addGrant,
  updateGrant,
  deleteGrant,
} = require('../controllers/grants.controller');

publicGrantRouter.get('/', allGrants).get('/:id', findGrantById);

privateGrantRouter.post('/', addGrant);

privateGrantRouter.use('/', suggestionRouter);

module.exports = { publicGrantRouter, privateGrantRouter };
