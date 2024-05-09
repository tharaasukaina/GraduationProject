import nodemailer from 'nodemailer';

const sendEmail = async (dest, subject, text) => {
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'tharaasukaina@gmail.com',//الايميل اللي بدي ابعث منو رسائل 
            pass: 'fzca ncml psje hkpm'// كلمة مرور التطبيق من حساب جوجل 
        }// هاي كلمة السر عشان ادب رسل ايميلات من هاد الايميل المكتوب 
    });

    let info = await transporter.sendMail({
        from: from,
        to:dest,
        subject: subject,
        text: text
    });

    console.log('Email sent: %s', info.messageId);
};
export const youreExperince = async (req, res) => {
    const { emotion, text } = req.body;
    if (!emotion || !text) {
        return res.status(400).json({ message: 'Emotion and text are required.' });
    }
    try {
        await sendEmail('tharaasukaina@gmail.com', 'New Feedback Received', `Emotion: ${emotion}\nFeedback: ${text}`);
        return res.status(200).json({ message: 'Feedback submitted successfully.' });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Internal server error.' });
    }
};
       
