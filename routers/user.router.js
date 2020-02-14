const router = require('express').Router();
const {
  findAllUsers,
  findUser,
  updateUser,
} = require('../controllers/users.controller');
const favoritesRouter = require('./favorite.router');

router
  .get('/', findAllUsers)
  .get('/user', findUser)
  .patch('/', updateUser)
  .use('/', favoritesRouter);


module.exports = router;
