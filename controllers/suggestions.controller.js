const Suggestions = require('../models/suggestion.model');

async function allSuggestionsByGrant(req, res, next) {
  const { id } = req.params;
  try {
    const suggestions = await Suggestions.find(id);
    res.json(suggestions);
  } catch (error) {
    next(error);
  }
}

async function getSuggestionById(req, res, next) {
  const { id } = req.params;
  try {
    const suggestion = await Suggestions.findBy({ id });
    if (suggestion.length > 0) {
      res.json(suggestion[0]);
    } else {
      res
        .status(404)
        .json({ message: `Suggestion with id:${id} was not found.` });
    }
  } catch (error) {
    next(error);
  }
}

async function addSuggestion(req, res, next) {
  try {
    const [newSuggestion] = await Suggestions.add(req.body);
    res.status(201).json(newSuggestion);
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

module.exports = {
  allSuggestionsByGrant,
  getSuggestionById,
  addSuggestion,
  removeSuggestion,
};
