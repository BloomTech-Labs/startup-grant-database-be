const userRouter = require('express').Router();
const adminUserRouter = require('express').Router();
const moderatorRouter = require('express').Router();

const {
  findAllUsers,
  findUser,
  updateUser,
  getAllRoles,
  promoteModerator,
  demoteModerator,
  checkUser,
  checkRoleId,
} = require('../controllers/users.controller');
const favoritesRouter = require('./favorite.router');

userRouter
  .get('/user', findUser)
  .patch('/user', updateUser)
  .use('/', favoritesRouter);

moderatorRouter.get('/users', findAllUsers).get('/roles', getAllRoles);

adminUserRouter
  .post('/moderator/:userId', checkRoleId, checkUser, promoteModerator)
  .post('/moderator/remove/:userId', checkRoleId, checkUser, demoteModerator);

module.exports = { userRouter, adminUserRouter, moderatorRouter };
