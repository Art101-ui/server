// const express = require('express')
// const app = express();
// const cors = require('cors')
const nodemailer = require('nodemailer');
require('dotenv').config();


// const PORT = process.env.PORT || 5000

// // Middleware
// // app.use(express.static('public'));
// // app.use(express.json())



// // app.get('/',(req,res)=>{
// //     res.sendFile(__dirname + '/public/index.html')
// // })

// app.post('/sendmail',cors(),async (req,res)=>{
    
//     let config={
//         host: 'smtpout.secureserver.net',
//   port: 587,
//   secure: false, // true for 465, false for other ports
 
//    tls:{},
//         auth:{
//             user: "info@zara-space.co.uk",
//             pass:"D=gM3h$9=k"
            
//             // user: process.env.EMAIL, // generated ethereal user
//             // pass: process.env.PASSWORD, 
            
//         }
//     }

//     let transporter = nodemailer.createTransport(config);

//     let mailbody = `
//     <div>
//     <p>FullName: ${req.body.name} </p>
//     <p>Email : ${req.body.email}</p>
//     <p>Phone Number: ${req.body.phone_no}</p>
//     <p>Postcode: ${req.body.post_code}</p>
//     <p>Social media: ${req.body.social_media}</p>
//     <p>Message: ${req.body.message}</p>
//   </div>
//     `

//     const mailOptions = {
//         from: "info@zara-space.co.uk",
//         // `${process.env.EMAIL}`,
//         to:'obadmus912@gmail.com',
//         subject:` ${req.body.subject}`,
//         html:mailbody,
        
        
//     };

   
    
//         try {
//             const info = await transporter.sendMail(mailOptions);
//             console.log('Email Sent' + info.response)
//             res.send('success');
//         } catch (error) {
//             console.log(error);
//             res.send('error')
            
//         }

//         // if(error){
//         //     console.log(error);
//         //     res.send('error')
//         // }else{
//         //     console.log('Email Sent' + info.response)
//         //     res.send('success');
//         // }
    

    
// })

// app.listen(PORT, ()=>{
//     console.log(`Server running on port ${PORT}`)
// })

// pass:'kvowmiaahpwvwzff'

export default async (req,res)=>{


    res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

    if(req.method == 'GET'){
        res.send({status:"Welcome to Nodemailer API"})

    }else{
        let config={
            host: 'smtpout.secureserver.net',
      port: 587,
      secure: false, // true for 465, false for other ports
     
       tls:{},
            auth:{
                // user: "info@zara-space.co.uk",
                // pass:"D=gM3h$9=k"
                
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
            // ,
            to:'obadmus912@gmail.com',
            subject:` ${req.body.subject}`,
            html:mailbody,
            
            
        };
    
       
        
            try {
                const info = await transporter.sendMail(mailOptions);
                console.log('Email Sent' + info.response)
                
            } catch (error) {
                console.log(error);
                
                
            }

            res.status(200).json({message:"Email Sent"})
       
    }
}