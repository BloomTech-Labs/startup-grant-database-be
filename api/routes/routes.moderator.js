const router = require('express').Router();
const { moderatorRouter } = require('../../routers/user.router');
const { moderator } = require('../../routers/admin.router');
const { moderatorMailRouter } = require('../../routers/sendgrid.router');

router
  .use('/moderator', moderatorRouter)
  .use('/moderator', moderator)
  .use('/moderator', moderatorMailRouter);

module.exports = router;
