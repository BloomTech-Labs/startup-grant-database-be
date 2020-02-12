const router = require('express').Router();
const adminRoutes = require('../../routers/admin.router');

router.use('/admin', adminRoutes);

module.exports = router;
