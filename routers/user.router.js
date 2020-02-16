const userRouter = require('express').Router();
const adminRouter = require('express').Router();

const {
  findAllUsers,
  findUser,
  updateUser,
} = require('../controllers/users.controller');
const favoritesRouter = require('./favorite.router');

userRouter
  .get('/user', findUser)
  .patch('/user', updateUser)
  .use('/', favoritesRouter);

adminRouter.get('/', findAllUsers);

module.exports = { userRouter, adminRouter };
