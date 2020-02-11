const publicGrantRouter = require('express').Router();
const privateGrantRouter = require('express').Router();
const {
  allGrants,
  findGrantById,
  addGrant,
  updateGrant,
  deleteGrant,
} = require('../controllers/grants.controller');

publicGrantRouter.get('/', allGrants).get('/:id', findGrantById);

privateGrantRouter
  .post('/', addGrant)
  .put('/:id', updateGrant)
  .delete('/:id', deleteGrant);

module.exports = { publicGrantRouter, privateGrantRouter };
