const Grants = require('../models/grant.model');

async function allGrants(req, res, next) {
  try {
    const grants = await Grants.find();
    res.json(grants);
  } catch (error) {
    next(error);
  }
}

async function findGrantById(req, res, next) {
  const { id } = req.params;
  try {
    const grant = await Grants.findBy({ id });
    if (grant.length > 0) {
      res.json(grant[0]);
    } else {
      res.status(404).json({ message: `Grant with id:${id} was not found` });
    }
  } catch (error) {
    next(error);
  }
}

async function addGrant(req, res, next) {
  try {
    const [newGrant] = await Grants.add(req.body);
    const grants = await Grants.find();
    const grantsAdmin = await Grants.findAdmin();
    res.status(201).json({grants, grantsAdmin, newGrant});
  } catch (error) {
    next(error);
  }
}

module.exports = {
  findGrantById,
  allGrants,
  addGrant,
};
