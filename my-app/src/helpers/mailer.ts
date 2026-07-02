import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
export const sendEmail = async ({ email, emailType, userId }: any) => {
    try {
//Lets create a hashed token to send for verification or password reset
const hashedToken = await bcryptjs.hash(userId.toString(), 10);
 if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId, {
                verifyToken: hashedToken,
                verifyTokenExpiry: Date.now() + 15 * 60 * 1000, // 15 minutes from now
            });
        } else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId, {
                forgotPasswordToken: hashedToken,
                forgotPasswordTokenExpiry: Date.now() + 15 * 60 * 1000, // 15 minutes from now
            });
        }
var transport = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });


        const mailOptions = {
          from: process.env.ADMIN_MAIL,
          to: email,
          subject:
            emailType === 'VERIFY'
              ? 'Verify your email'
              : 'Reset your password',
          html: `
                <p>Click the button below to 
                <btn style="background-color: #4CAF50; color: white; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer;" href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}"> ${emailType === 'VERIFY' ? 'verify your email' : 'reset your password'}</btn> </p>
                `,
        };
     const mailresponse = await transport.sendMail(mailOptions);
     return mailresponse;

 }
    catch (error: any) {
        throw new Error("Error sending email", error.message);
    }
};