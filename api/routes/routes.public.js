const router = require('express').Router();

const testRoute = (req, res) => res.json({server: "running"});

router.get('/', testRoute);

module.exports = router;
