const router = require('express').Router();
const { userRouter } = require('../../routers/user.router');
const { privateGrantRouter } = require('../../routers/grant.router');
const { privateMailRouter } = require('../../routers/sendgrid.router');

router.use('/users', userRouter);
router.use('/grants', privateGrantRouter);
router.use('/mail', privateMailRouter);

module.exports = router;
