const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const from = 'foundergrants@gmail.com';

function sendMail(req, res, next) {
  const { to, subject, text } = req.body;
  try {
    const msg = {
      to,
      subject,
      text,
      from,
    };
    sgMail.send(msg);
    res.json({ message: 'Mail has been sent successfully' });
  } catch (error) {
    next(error);
  }
}

function checkText(req, res, next) {
  const { to, subject, text } = req.body;
  if (!to || !subject || !text) {
    res.status(400).json({ message: 'To, Subject, and Text are required' });
  }
  next();
}

module.exports = {
  sendMail,
  checkText,
};

/**
 *  @apiDefine ServerError
 *  @apiError ServerError An Internal Server Error has occurred
 */

/**
 * @apiDefine ValidationError
 * @apiError ValidationError A Required Field is missing
 */

/**
 * @apiDefine SuccessResponse
 * @apiSuccess {json} message Success message
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "message": "Mail has been sent successfully"
 * }
 */

/**
 *  @api {post} /api/mail/individual Sends an email to a user in plain text
 *  @apiUse ServerError
 *  @apiUse ValidationError
 *  @apiUse SuccessResponse
 *  @apiName IndividualMail
 *  @apiGroup Mail
 *  @apiPermission token
 *  @apiDescription Sends an email to a specified user
 *  @apiParam {String} to Email address to the user
 *  @apiParam {String} subject Email subject
 *  @apiParam {String} text Email Body
 *  @apiParamExample {json} Sample-Request:
 *  {
 *    "to": "test@gmail.com",
 *    "subject": "Test Email",
 *    "text": "This is a test of the Founder Grants Email System.  This is only a test"
 *  }
 *
 */
