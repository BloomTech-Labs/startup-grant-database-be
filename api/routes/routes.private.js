const router = require('express').Router();
const usersRouter = require('../../routers/userRouter');
const {privateGrantRouter} = require('../../routers/grant.router');

router.use('/users', usersRouter);
router.use('/grants', privateGrantRouter);

module.exports = router;
