const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
    //Extracting form Data
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'velda.dicki74@ethereal.email',
            pass: 'yCGQVQT4DbKu2NpkjE'
        }
    });

    try {
        let info = await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: "email@company.com", // This need to change with actual desination.
            subject: subject,
            text: message,
            html: `<p>${message}</p>`,
        });

        console.log("Message sent: %s", info.messageId);
        res.json(info);
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = sendMail;
