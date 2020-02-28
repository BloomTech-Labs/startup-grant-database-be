const axios = require('axios');
const Grants = require('../models/grant.model');
const modifiedUrl = require('../data/helpers/modifyUrl');

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
    const logo = `https://logo.clearbit.com/${modifiedUrl(
      req.body.website
    )}?size=75`;
    const [newGrant] = await Grants.add({ ...req.body, logo });
    const grants = await Grants.find();
    const grantsAdmin = await Grants.findAdmin();
    res.status(201).json({ grants, grantsAdmin, newGrant });
  } catch (error) {
    next(error);
  }
}

async function whichLogoToUse(req, res, next) {
  const grants = await Grants.findAdmin();
  const selectedGrants = grants.filter(grant => grant.use_logo === null);
  selectedGrants.forEach(async grant => {
    try {
      const response = await axios.get(grant.logo);
      await Grants.update(grant.id, { use_logo: true });
    } catch (error) {
      await Grants.update(grant.id, { use_logo: false });
    }
  });
  next();
}

module.exports = {
  findGrantById,
  allGrants,
  addGrant,
  whichLogoToUse,
};

/**
 *
 */