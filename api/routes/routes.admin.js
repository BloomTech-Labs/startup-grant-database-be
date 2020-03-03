const router = require('express').Router();
const { admin } = require('../../routers/admin.router');
const { adminUserRouter } = require('../../routers/user.router');

router.use('/admin', admin).use('/admin', adminUserRouter);

module.exports = router;
