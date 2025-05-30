import nodemailer from "nodemailer";
//step1 create transporter i used barvo as the email provider
const transporter = nodemailer.createTransport({
    host:"smtp-relay.brevo.com",
    port:587,
    auth:{
        user:"8807ef001@smtp-brevo.com",
        pass:"02SfZdzsxNWcPwJ4" , 
    
    }
}



)

console.log("Auth Object:", transporter.options.auth);
export const sendWelcomeEmail=async(email)=>{
    console.log(process.env.SMTP_USER);
    console.log(process.env.SMTP_PASS);
    try{
        const logoUrl = "https://imgur.com/a/k04aXb7"; // Replace with your hosted image URL

        const mailOptions = {
            from:"hussienzoughaib@gmail.com",
            to: email,
            subject: "Welcome to Habit Flow!",
            text: "Welcome to Habit Flow,let start bulding your new habit ",
            html: `
                <div style="text-align: center; font-family: Arial, sans-serif;">
                    <img src="${logoUrl}" alt="Habit Flow  Logo" style="width: 150px; height: auto; margin-bottom: 20px;">
                    <h1 style="color: #2c3e50;">Welcome to Quantum Code Academy!</h1>
                    <p style="font-size: 16px; color: #34495e;">
                        We're thrilled to have you on board. Let's start journy of making new habits!
                    </p>
                </div>
            `,
        };
    await transporter.sendMail(mailOptions);
    console.log("email sent");
    }
    catch(error){
        console.log(error);
    }
}