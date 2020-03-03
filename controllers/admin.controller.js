const Grants = require('../models/grant.model');
const Suggestions = require('../models/suggestion.model');

async function getGrantsAdmin(req, res, next) {
  try {
    const grants = await Grants.findAdmin();
    const suggestions = await Suggestions.findAdmin();
    const newGrantList = grants.map(grant => {
      const requests = suggestions.filter(
        suggestion => suggestion.grant_id === grant.id
      );
      return { ...grant, requests };
    });
    res.json(newGrantList);
  } catch (error) {
    next(error);
  }
}

async function updateGrant(req, res, next) {
  console.log('Admin Update Grant: %j', req.body);
  const { id } = req.params;
  try {
    const grant = await Grants.findBy({ id });
    if (grant.length > 0) {
      const updatedGrant = await Grants.update(id, req.body);
      res.json(updatedGrant[0]);
    } else {
      res.status(404).json({ message: `Grant with id:${id} was not found.` });
    }
  } catch (error) {
    next(error);
  }
}

async function deleteGrant(req, res, next) {
  const { id } = req.params;
  try {
    const count = await Grants.remove(id);
    if (count > 0) {
      res.json(count);
    } else {
      res.status(404).json({ message: `Grant with id:${id} was not found.` });
    }
  } catch (error) {
    next(error);
  }
}

async function removeSuggestion(req, res, next) {
  const { id } = req.params;
  try {
    const count = await Suggestions.remove(id);
    if (count > 0) {
      res.json(count);
    } else {
      res
        .status(404)
        .json({ message: `Suggestion with id:${id} was not found.` });
    }
  } catch (error) {
    next(error);
  }
}

async function getSuggestionByGrantId(req, res, next) {
  const { grant_id } = req.params;
  try {
    const suggestions = Suggestions.findBy({ grant_id });
    res.json(suggestions);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getGrantsAdmin,
  updateGrant,
  deleteGrant,
  removeSuggestion,
  getSuggestionByGrantId,
};
