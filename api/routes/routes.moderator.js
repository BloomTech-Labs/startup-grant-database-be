const router = require('express').Router();
const { moderatorRouter } = require('../../routers/user.router');

router.use('/moderator', moderatorRouter);

module.exports = router;
