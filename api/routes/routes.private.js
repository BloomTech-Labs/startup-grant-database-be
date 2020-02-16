const router = require('express').Router();
const { userRouter } = require('../../routers/user.router');
const { privateGrantRouter } = require('../../routers/grant.router');

router.use('/users', userRouter);
router.use('/grants', privateGrantRouter);

module.exports = router;
