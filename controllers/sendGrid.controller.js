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
