const nodemailer = require('nodemailer');
require('dotenv').config();
 



const allowCors = fn => async(req,res)=>{
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST')
        if(req.method == 'GET'){
            res.send({status:"Welcome to Nodemailer API"})

        }else if(req.method == 'POST'){
            let config={
                host: 'smtpout.secureserver.net',
        port: 587,
        secure: false, // true for 465, false for other ports
        
        tls:{},
                auth:{
                    user: process.env.EMAIL, // generated ethereal user
                    pass: process.env.PASSWORD, 
                    
                }
            }
        
            let transporter = nodemailer.createTransport(config);
        
            let mailbody = `
            <div>
            <p>FullName: ${req.body.name} </p>
            <p>Email : ${req.body.email}</p>
            <p>Phone Number: ${req.body.phone_no}</p>
            <p>Postcode: ${req.body.post_code}</p>
            <p>Social media: ${req.body.social_media}</p>
            <p>Message: ${req.body.message}</p>
        </div>
            `
        
            const mailOptions = {
                from: `${process.env.EMAIL}`,
                to:'obadmus912@gmail.com',
                subject:` ${req.body.subject}`,
                html:mailbody,
                
                
            };
        // 'zara.angels.fit@gmail.com'
        
            
                try {
                    const info = await transporter.sendMail(mailOptions);
                    console.log('Email Sent' + info.response)
                    
                } catch (error) {
                    console.log(error);
                    
                    
                }

                res.status(200).json({message:"Email Sent"})
        
        }
        else{
            res.send({status:"Not Allowed"})
        }
}

module.exports = allowCors()
