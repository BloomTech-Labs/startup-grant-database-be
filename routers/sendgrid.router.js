const privateMailRouter = require('express').Router();
const moderatorMailRouter = require('express').Router();

const {
  sendMail,
  sendHTMLMail,
  sendNewsletter,
  checkText,
  checkHTML,
  checkNewsLetter,
} = require('../controllers/sendGrid.controller');

privateMailRouter
  .post('/individual', checkText, sendMail)
  .post('/individual/web', checkHTML, sendHTMLMail);

moderatorMailRouter.post('/newsletter', checkNewsLetter, sendNewsletter);

module.exports = { privateMailRouter, moderatorMailRouter };
