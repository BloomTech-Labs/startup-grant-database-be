const router = require('express').Router();
const usersRouter = require('../../routers/user.router');
const { privateGrantRouter } = require('../../routers/grant.router');

router.use('/users', usersRouter);
router.use('/grants', privateGrantRouter);

module.exports = router;
