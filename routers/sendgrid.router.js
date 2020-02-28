const privateMailRouter = require('express').Router();

const { sendMail, checkText } = require('../controllers/sendGrid.controller');

privateMailRouter.post('/individual', checkText, sendMail);

module.exports = { privateMailRouter };
