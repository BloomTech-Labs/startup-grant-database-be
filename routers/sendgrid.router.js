const privateMailRouter = require('express').Router();
const moderatorMailRouter = require('express').Router();

const {
  sendMail,
  sendHTMLMail,
  sendNewsletter,
} = require('../controllers/sendGrid.controller');

privateMailRouter
  .post('/individual', sendMail)
  .post('/individual/web', sendHTMLMail);

moderatorMailRouter.post('/newsletter', sendNewsletter);

module.exports = { privateMailRouter, moderatorMailRouter };
