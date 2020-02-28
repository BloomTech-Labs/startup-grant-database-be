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

module.exports = {
  allSuggestionsByGrant,
  getSuggestionById,
  addSuggestion,
};

/**
 *  @apiDefine SuggestionNotFound
 *  @apiError SuggestionNotFound Suggestion with ID not Found
 *  @apiErrorExample {json} Error-Response:
 *  {
 *    "message": "Suggestion with id:1 was not found."
 *  }
 */

/**
 *  @api {get} /api/grants/:id/suggestions Retrieves all the suggestion with the provided Grant Id
 *  @apiName AllSuggestionsByGrantId
 *  @apiGroup Registered User
 *  @apiPermission Token
 *  @apiDescription Retrieves all the suggestion with the provided Grant Id
 *  @apiParam {Integer} id The Grant Id
 *  @apiSuccess {json} Suggestions An Array of Suggestions based on the Grant Id
 *
 */

/**
 *  @api {get} /api/grants
 */
