const router = require('express').Router();
const {publicGrantRouter} = require('../../routers/grant.router');

const testRoute = (req, res) => res.json({server: "running"});

router.get('/', testRoute);
router.use('/api/grants', publicGrantRouter);

module.exports = router;
