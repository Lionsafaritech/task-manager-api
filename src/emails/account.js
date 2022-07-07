const nodemailer=require("nodemailer")


const sendWelcomeEmail=(email,name)=>{
    const msg={
        from:process.env.EMAIL,
        to:email,
        subject:"Thanks for joining us!",
        text:`Welcome to the App ,${name}. Let me know how you get along with the app.`
    }
    nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASS
        }
    }).sendMail(msg,(err)=>{
        if(err){
            return console.log("error occurs",err)
        }else{
            return console.log("email sent")
        }
    })
    
}

const sendCancelationEmail=(email,name)=>{
    const msg={
        from:process.env.EMAIL,
        to:email,
        subject:"Sorry to see you go!",
        text:`Goodbye,${name}.I hope to see you back sometime soon.`
    }
    
    nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASS 
        }
    }).sendMail(msg,(err)=>{
        if(err){
            return console.log("error occurs",err)
        }else{
            return console.log("email sent")
        }
    })
}
// sendWelcomeEmail("chandrawatidevi084@gmail.com","CHANDRAWATI")

module.exports={
    sendWelcomeEmail,
    sendCancelationEmail
}