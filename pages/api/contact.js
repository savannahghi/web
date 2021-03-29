import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Process a POST request

        const { name, email, message } = req.body;

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'savannahghi.web@gmail.com',
                pass: 'savannahghi'
            }
        });

        try {
            await transporter.sendMail({
                from: email,
                to: 'savannahghi.web@gmail.com',
                subject: 'Savannah Global Health Institute Contact',
                html: `<p> <Strong>${name}</strong> sent you an email from sghi-contact form with the following message: <strong>${message}</strong>`
            });
            console.log('email was sent');
            console.log(req.body);
        } catch (error) {
            console.log(error);
        }

        res.status(200).json(req.body);
    }
}
