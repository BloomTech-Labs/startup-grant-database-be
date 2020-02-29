const router = require('express').Router();
const { publicGrantRouter } = require('../../routers/grant.router');
const { publicMailRouter } = require('../../routers/sendgrid.router');

const testRoute = (req, res) => res.json({ server: 'running' });

router
  .get('/', testRoute)
  .use('/api/grants', publicGrantRouter)
  .use('/api/mail', publicMailRouter);

module.exports = router;
