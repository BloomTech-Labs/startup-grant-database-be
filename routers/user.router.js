const userRouter = require('express').Router();
const adminRouter = require('express').Router();
const moderatorRouter = require('express').Router();

const {
  findAllUsers,
  findUser,
  updateUser,
  getAllRoles,
  promoteModerator,
  demoteModerator,
} = require('../controllers/users.controller');
const favoritesRouter = require('./favorite.router');

userRouter
  .get('/user', findUser)
  .patch('/user', updateUser)
  .use('/', favoritesRouter);

moderatorRouter.get('/', findAllUsers).get('/roles', getAllRoles);

adminRouter
  .post('/moderator/:userId', promoteModerator)
  .delete('/moderator/:userId', demoteModerator);

module.exports = { userRouter, adminRouter, moderatorRouter };
