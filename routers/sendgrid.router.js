const privateMailRouter = require('express').Router();

const {
  sendMail,
  checkText,
  contactFounderGrants,
} = require('../controllers/sendGrid.controller');

privateMailRouter
  .post('/individual', checkText, sendMail)
  .post('/contact', checkText, contactFounderGrants);

module.exports = { privateMailRouter };
