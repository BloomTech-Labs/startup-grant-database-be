const axios = require('axios');
const { getToken, config } = require('../../data/auth0.config');

async function checkModerator(req, res, next) {
  const token = await getToken();
  const { sub } = req.user;
  try {
    const userRoles = await axios.get(`/users/${sub}/roles`, config(token));
    if (userRoles.data.filter(role => role.name === 'Moderator').length > 0) {
      next();
    } else {
      res.status(403).json({ message: 'Forbidden' });
    }
  } catch (error) {
    console.log('Error in Moderator: %j', error);
    if (error.response.status === 401) {
      return res.status(401).json(error.response.data);
    }
    next(error);
  }
}

module.exports = checkModerator;
