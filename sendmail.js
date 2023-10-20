var mailer = require('nodemailer')

var transporter = mailer.createTransport({
    host: 'smtp.titan.email',
    port: 465,
    secure: true,
    auth: {
        user: 'admin@fedalogistics.co.za',
        pass: 'Welcome2@'
    },
    tls : { rejectUnauthorized: false }
    
})
var mailOptions = {
    from: 'admin@fedalogistics.co.za',
    to: 'samantha.reversal@gmail.com',
    subject: 'node mailer testing',
    html: '<b>hello world testing</b>'
}

transporter.sendMail(mailOptions, function(err, msg){
    if(err){
        console.log(err)
    }else{
        console.log(`message sent ${msg.response}`)
    }
})