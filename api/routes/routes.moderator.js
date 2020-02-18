const router = require('express').Router();
const { moderatorRouter } = require('../../routers/user.router');
const { moderator } = require('../../routers/admin.router');

router.use('/moderator', moderatorRouter).use('/moderator', moderator);

module.exports = router;
