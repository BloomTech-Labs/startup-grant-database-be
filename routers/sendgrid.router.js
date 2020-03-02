const privateMailRouter = require('express').Router();
const publicMailRouter = require('express').Router();

const {
  sendMail,
  checkText,
  contactFounderGrants,
  checkContact,
} = require('../controllers/sendGrid.controller');

privateMailRouter.post('/individual', checkText, sendMail);

publicMailRouter.post('/contact', checkContact, contactFounderGrants);

module.exports = { privateMailRouter, publicMailRouter };
