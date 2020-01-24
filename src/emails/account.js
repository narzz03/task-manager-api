const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
        to: email,
        from:'alamar.narciso@xtendops.com',
        subject:'Test email from sgMail',
        text: `Welcome ${name}!`
    })
}

const sendCancelationEmail = (email,name)=>{
    sgMail.send({
        to: email,
        from:'alamar.narciso@xtendops.com',
        subject:'Cancelation',
        text: `Hi ${name}, \n\n thank you for your service`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
