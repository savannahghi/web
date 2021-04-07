import nodemailer from 'nodemailer';
import mailgun from 'nodemailer-mailgun-transport';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const auth = {
            auth: {
                api_key: `${process.env.MAILGUN_PRIVATE_API_KEY}`,
                domain: `${process.env.MAILGUN_DOMAIN}`
            }
        };

        const transporter = nodemailer.createTransport(mailgun(auth));

        console.log(req);

        const mailOptions = {
            from: 'adanabdi036@gmail.com',
            to: 'abdi.adan@healthcloud.co.ke',
            subject: 'Test: Savannah Global Health Institute Contact',
            text: '`<p> sent you an email from sghi-contact form with the following message: `'
        };

        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log('Error: ' + err);
            } else {
                console.log('Response: ' + info);
            }
        });

        res.status(200).json(req.body);
    }
}
