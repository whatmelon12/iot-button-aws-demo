const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  auth: {
    user: "urbosa507@gmail.com",
    pass: "Charmander_199630"
  },
  secureConnection: "false",
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false
  }
});

const sendEventsEmail = async (recipients, data) => {
  return sendEmail(recipients, "AWS - Button clicked event", data);
};

const sendEmail = async (recipients, subject, data) => {
  const emailOptions = {
    from: "urbosa507@gmail.com",
    to: recipients,
    subject: subject,
    html: `<b>${JSON.stringify(data)}</b>`
  };

  return transporter.sendMail(emailOptions);
};

module.exports = { sendEventsEmail };
