const Suggestions = require('../models/suggestion.model');
const Grants = require('../models/grant.model');

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

async function findGrant(req, res, next) {
  const { grant_id } = req.body;
  try {
    const foundGrant = await Grants.findBy({ id: grant_id });
    if (foundGrant.length > 0) {
      next();
    } else {
      res
        .status(404)
        .json({ message: `The Grant with id:${grant_id} was not found.` });
    }
  } catch (error) {
    next(error);
  }
}

function checkSuggestion(req, res, next) {
  const { grant_id, subject, suggestion } = req.body;
  if (!grant_id || !subject || !suggestion) {
    return res
      .status(400)
      .json({ message: 'grant_id, subject, and suggestion is required.' });
  }
  next();
}

module.exports = {
  allSuggestionsByGrant,
  getSuggestionById,
  addSuggestion,
  findGrant,
  checkSuggestion,
};

/**
 *  @apiDefine SuggestionNotFound
 *  @apiError (404) {json} SuggestionNotFound Suggestion with ID not Found
 *  @apiErrorExample {json} Error-Response:
 *  {
 *    "message": "Suggestion with id:1 was not found."
 *  }
 */

/**
 * @apiDefine RequiredHeaders
 * @apiHeader {String} token Users AccessToken from Auth0
 * @apiHeaderExample {json} Sample-Header:
 * {
 *   "Content-Type": "application/json",
 *   "authorization": "Bearer token"
 * }
 */

/**
 * @apiDefine GrantNotFound
 * @apiError (404) {json} GrantNotFound Grant with grant_id was not found
 * @apiErrorExample {json} Error-Response:
 * {
 *   "message": "The Grant with id:999 was not found."
 * }
 */

/**
 * @apiDefine ValidationError
 * @apiError (400) {json} ValidationError Some Fields were Missing
 * @apiErrorExample {json} Error-Response:
 * {
 *   "message": "grant_id, subject, and suggestion is required."
 * }
 */

/**
 *  @api {get} /api/grants/:id/suggestions Retrieves all the suggestion with the provided Grant Id
 *  @apiUse RequiredHeaders
 *  @apiName All Suggestions By Grant Id
 *  @apiGroup Suggestion
 *  @apiPermission Token
 *  @apiDescription Requires Token
 *  @apiParam {Integer} id The Grant Id
 *  @apiSuccess {json} Suggestions An Array of Suggestions based on the Grant Id
 *
 */

/**
 *  @api {get} /api/grants/suggestion/:id Gets a suggestion by Suggestion Id
 *  @apiUse RequiredHeaders
 *  @apiUse SuggestionNotFound
 *  @apiName Suggestion By Suggestion Id
 *  @apiGroup Suggestion
 *  @apiPermission Token
 *  @apiDescription Requires Token
 *  @apiParam {Integer} id The Suggestion Id
 *  @apiSuccess {json} Suggestion Suggestion
 */

/**
 *  @api {post} /api/grants/suggestion Adds a new Suggestion
 *  @apiUse RequiredHeaders
 *  @apiUse GrantNotFound
 *  @apiUse ValidationError
 *  @apiName Add Suggestion
 *  @apiGroup Suggestion
 *  @apiPermission Token
 *  @apiDescription Requires Token
 *  @apiParam {Integer} grant_id The Grant Id your adding the suggestion for
 *  @apiParam {String} subject The subject of the suggestion
 *  @apiParam {String} suggestion The content of the suggestion
 *  @apiParamExample {json} Sample-Request:
 *  {
 *    "grant_id": 20,
 *    "subject": "ApiDocs",
 *    "suggestion": "Write more documentation"
 *  }
 *  @apiSuccess {json} Suggestion Success Message
 *  @apiSuccessExample {json} Success-Response:
 *  {
 *    "id": 1,
 *    "grant_id": 20,
 *    "subject": "ApiDocs",
 *    "suggestion": "Write more documentation"
 *  }
 *
 */
