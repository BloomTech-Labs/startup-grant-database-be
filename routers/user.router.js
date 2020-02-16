const userRouter = require('express').Router();
const adminRouter = require('express').Router();

const {
  findAllUsers,
  findUser,
  updateUser,
  getAllRoles,
} = require('../controllers/users.controller');
const favoritesRouter = require('./favorite.router');

userRouter
  .get('/user', findUser)
  .patch('/user', updateUser)
  .use('/', favoritesRouter);

adminRouter.get('/', findAllUsers).get('/roles', getAllRoles);

module.exports = { userRouter, adminRouter };
