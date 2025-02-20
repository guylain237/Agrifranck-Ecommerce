const nodemailer = require('nodemailer');
require('dotenv').config();

const Email = (options) => {
  let transporter = nodemailer.createTransport({
    host: 'ssl0.ovh.net',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.AUTH_EMAIL, // email
      pass: process.env.AUTH_PASSWORD, // password
    },
  });

  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Email envoyé:', info.response);
  });
};

// send email
const EmailSender = ({ fullName, email, phone, message }) => {
  const options = {
    from: `kraft web tv <${process.env.AUTH_EMAIL}>`,
    to: process.env.SEND_TO,
    subject: 'Message de kraft web tv',
    html: `
      <div style="width: 100%; background-color: #f3f9ff; padding: 5rem 0">
        <div style="max-width: 700px; background-color: white; margin: 0 auto">
          <div style="width: 100%; background-color: #000000; padding: 20px 0">
            <a href="${process.env.CLIENT_URL}">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/videokraft-8eaba.appspot.com/o/image%20global%2Fkt.png?alt=media&token=58c26d19-0dac-402a-8334-022e37319d3d"
                style="width: 100%; height: 70px; object-fit: contain"
                alt="kraft"
              />
            </a>
          </div>
          <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
            <p style="font-weight: 800; font-size: 1.2rem; padding: 0 30px">
              CONTACT DE Agrifrank
            </p>
            <div style="font-size: .8rem; margin: 0 30px">
              <p>NOM:  <b>${fullName}</b></p>
              <p>EMAIL: <b>${email}</b></p>
              <p>TÉLÉPHONE: <b>${phone}</b></p>
              <p>MESSAGE: <i>${message}</i></p>
            </div>
          </div>
        </div>
      </div>
    `,
  };

  Email(options);
};

module.exports = EmailSender;
