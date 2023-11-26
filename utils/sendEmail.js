const nodeMailer=require("nodemailer");

const sendEmail=async(options)=>{

    let testAccount=await nodeMailer.createTestAccount();

    //connect with the smtp server
   
    const transporter=nodeMailer.createTransport({
        host:'smtp-relay.brevo.com', //u can change the host
        port:587,
        auth:{
            user: process.env.SMPT_MAIL ,
            pass:  process.env.SMPT_PASSWORD  
        }
    });

    const mailOptions={
        from:process.env.SMPT_MAIL,
        to:options.email,
        subject:options.subject,
        text:options.message,
    };

    await transporter.sendMail(mailOptions);

};

module.exports=sendEmail;