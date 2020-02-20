const publicGrantRouter = require('express').Router();
const privateGrantRouter = require('express').Router();
const suggestionRouter = require('./suggestions.router');
const {
  allGrants,
  findGrantById,
  addGrant,
    updateLogoUrl
} = require('../controllers/grants.controller');

publicGrantRouter.get('/', allGrants).get('/:id', findGrantById);

privateGrantRouter.post('/', addGrant).use('/', suggestionRouter).put('/:id', updateLogoUrl);

module.exports = { publicGrantRouter, privateGrantRouter };
