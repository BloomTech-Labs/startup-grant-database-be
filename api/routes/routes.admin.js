const router = require('express').Router();
const { admin } = require('../../routers/admin.router');

router.use('/admin', admin)

module.exports = router;
