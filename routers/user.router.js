const router = require('express').Router();
const {
  findAllUsers,
  findUser,
  updateUser,
  deleteUser,
} = require('../controllers/users.controller');
const favoritesRouter = require('./favorite.router');

router
  .get('/', findAllUsers)
  .get('/user', findUser)
  .put('/', updateUser)
  .delete('/:id', deleteUser)
  .use('/', favoritesRouter);


module.exports = router;
