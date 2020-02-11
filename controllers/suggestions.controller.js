const Suggestions = require('../models/suggestion.model');

async function allSuggestionsByGrant(req, res, next) {
    const {id} = req.params;
    try {
        const suggestions = await Suggestions.find(id);
        res.json(suggestions);
    } catch (error) {
        next(error);
    }
}

module.exports = {allSuggestionsByGrant}
