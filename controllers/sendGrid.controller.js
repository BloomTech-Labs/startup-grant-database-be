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

function sendHTMLMail(req, res, next) {
  const { to, subject, html } = req.body;
  try {
    const msg = {
      to,
      subject,
      html,
      from,
    };
    sgMail.send(msg);
    res.json({ message: 'Mail has been sent successfully' });
  } catch (error) {
    next(error);
  }
}

function sendNewsletter(req, res, next) {
  const { bcc, subject, html } = req.body;
  try {
    const msg = {
      to: from,
      subject,
      html,
      from,
      bcc,
    };
    sgMail.send(msg);
    res.json({ message: 'Newsletter was sent successfully' });
  } catch (error) {
    next(error);
  }
}

module.exports = { sendMail, sendHTMLMail, sendNewsletter };

/**
 *  @apiDefine ServerError
 *  @apiError ServerError An Internal Server Error has occurred
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

/**
 *  @api {post} /api/mail/individual/web Sends an email to a user in plain text
 *  @apiUse ServerError
 *  @apiUse SuccessResponse
 *  @apiName IndividualMailHTML
 *  @apiGroup Mail
 *  @apiPermission token
 *  @apiDescription Sends an email to a specified user
 *  @apiParam {String} to Email address to the user
 *  @apiParam {String} subject Email subject
 *  @apiParam {String} html Email Body using Markup
 *  @apiParamExample {json} Sample-Request:
 *  {
 *    "to": "test@gmail.com",
 *    "subject": "Test Email",
 *    "html": "<h1>Hello Founder Grants</h1>"
 *  }
 *
 */

/**
 * @api {post} /api/moderator/newsletter Sends a newsletter to all registered users
 * @apiUse ServerError
 * @apiName Newsletter
 * @apiGroup Mail
 * @apiPermission token, moderator
 * @apiDescription Sends a newsletter out to Registered Users
 * @apiParam {String[]} bcc Email addresses in an array format
 * @apiParam {String} subject Email subject
 * @apiParam {String} html Email Body using Markup
 * @apiParamExample {json} Sample-Request:
 * {
 *   "bcc": ["test@gmail.com", "test2@gmail.com"],
 *   "subject": "Test Email",
 *   "html": "<h1>Hello Founder Grants</h1>"
 * }
 * @apiSuccess {json} Success Message
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "message": "Newsletter was sent successfully"
 * }
 */
