import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Process a POST request

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.REACT_APP_SEND_MAIL_URL,
                pass: process.env.REACT_APP_SEND_MAIL_PASS
            }
        });

        try {
            await transporter.sendMail({
                from: process.env.REACT_APP_SEND_MAIL_URL,
                to: req.body.values.email,
                subject: 'Savannah Global Health Institute Contact',
                html: `<p> <Strong>${req.body.values.name}</strong> sent you an email from sghi-contact form with the following message: <strong>${req.body.values.message}</strong>`
            });
            console.log('email was sent');
        } catch (error) {
            console.log(error);
        }

        res.status(200).json(req.body);
    }
}
