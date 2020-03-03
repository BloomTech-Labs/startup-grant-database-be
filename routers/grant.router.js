const publicGrantRouter = require('express').Router();
const privateGrantRouter = require('express').Router();
const suggestionRouter = require('./suggestions.router');
const {
  allGrants,
  findGrantById,
  addGrant,
  whichLogoToUse,
  checkUrl,
} = require('../controllers/grants.controller');

publicGrantRouter
  .get('/', whichLogoToUse, allGrants)
  .get('/:id', findGrantById);

privateGrantRouter.post('/', checkUrl, addGrant).use('/', suggestionRouter);

module.exports = { publicGrantRouter, privateGrantRouter };
