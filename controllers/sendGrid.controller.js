const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const founderGrant = 'foundergrants@gmail.com';

function sendMail(req, res, next) {
  const { to, subject, text } = req.body;
  try {
    const msg = {
      to,
      subject,
      text,
      from: founderGrant,
    };
    sgMail.send(msg);
    res.json({ message: 'Mail has been sent successfully' });
  } catch (error) {
    next(error);
  }
}

function contactFounderGrants(req, res, next) {
  const { from, subject, text } = req.body;
  try {
    const msg = {
      to: founderGrant,
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
    return res
      .status(400)
      .json({ message: 'To, Subject, and Text are required' });
  }
  next();
}

function checkContact(req, res, next) {
  const { from, subject, text } = req.body;
  if (!from || !subject || !text) {
    return res
      .status(400)
      .json({ message: 'From, Subject, and Text are required' });
  }
  next();
}

module.exports = {
  sendMail,
  checkText,
  contactFounderGrants,
  checkContact,
};

/**
 *  @apiDefine ServerError
 *  @apiError ServerError An Internal Server Error has occurred
 */

/**
 * @apiDefine RequiredHeaders
 * @apiHeader {String} token Users AccessToken from Auth0
 * @apiHeaderExample {json} Sample-Header:
 * {
 *   "Content-Type": "application/json",
 *   "authorization": "Bearer token"
 * }
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
 *  @api {post} /api/mail/individual Sends an email to a registered user
 *  @apiUse RequiredHeaders
 *  @apiUse ServerError
 *  @apiUse ValidationError
 *  @apiUse SuccessResponse
 *  @apiName Send Mail To User
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

/**
 *  @api {post} /api/mail/contact Contact Form Endpoint
 *  @apiUse ServerError
 *  @apiUse ValidationError
 *  @apiUse SuccessResponse
 *  @apiName Contact Founder Grants
 *  @apiGroup Mail
 *  @apiPermission none
 *  @apiDescription Contact From End Point
 *  @apiParam {String} from Email address to the user
 *  @apiParam {String} subject Email subject
 *  @apiParam {String} text Email Body
 *  @apiParamExample {json} Sample-Request:
 *  {
 *    "from": "test@test.com"
 *    "subject": "Test Email",
 *    "text": "This is a test of the Founder Grants Email System.  This is only a test"
 *  }
 *
 */
