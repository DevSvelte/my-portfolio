import nodemailer from 'nodemailer';

export default (req, res) => {
    if(req.method==='POST'){
        try {
            let body = JSON.parse(req.body);
            if(body.email && body.message){
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
                        res.json({ sent: false, message: error.response });
                    } else {
                        res.json({ sent: true, message: info.response });
                    }
                });
        }
        else {
            res.json({
                sent: false,
                message: 'email or message not given in request body'
            });
        }
        }catch(err){
            res.json({
                sent: false,
                message: err.message
            });
        }
    } else {
        res.json({
            sent: false,
            message: 'Only method(POST) allowed'
        });
    }
}