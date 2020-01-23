import nodemailer from 'nodemailer';

export default (req, res) => {
    try {
        console.clear();
    console.log(req.body);
    let body = JSON.parse(req.body);
    console.log(body);
    if(req.method==='POST' && body.email && body.message){
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.email,
                pass: process.env.password
            }
        });

        let mailOptions = {
            from: process.env.email,
            to: process.env.to,
            subject: `${body.subject || body.name || 'No Subject'} | from Portfolio`,
            text: `${body.message}
Sender Name: ${body.name || 'Not Given'}
Sender: ${body.email}
`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.json({ sent: false, error: error.response });
            } else {
                res.json({ sent: true, response: info.response });
            }
        });
    }
    else {
        res.json({
            sent: false,
            message: 'Invalid Request'
        });
    }
    }catch(err){
        console.log(err.message);
    }
}