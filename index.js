const sgMail = require('@sendgrid/mail');
const dotenv = require('dotenv').config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
    to: 'iwokjoseph@gmail.com',
    from: 'igbinobairedia323@gmail.com',
    subject: 'Testing Mic 123',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>'
};
sgMail.send(msg)
    .then(() => console.log('sent'))
    .catch(err => console.log(err));