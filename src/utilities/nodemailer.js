require('dotenv').config();
const GeneratorOtp = require("./otpGenerator");
const path = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer');

const otps = {};

function MailSender(Mail) {
    const OTP = GeneratorOtp();
    otps[Mail] = OTP;

    // Read image as base64 string
    const imagePath = path.join(__dirname, './../Public/images/plant-a-tree.png');
    const image = fs.readFileSync(imagePath).toString('base64');

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.Email,
            pass: process.env.AppPassword
        }
    });

    let mailOptions = {
        from: process.env.Email,
        to: Mail,
        subject: "Welcome to Agrohub community",
        html: `
            <div style="font-family: Arial, sans-serif; text-align: center; color: green;">
                <p>Thank you,</p>
                <p>Agrohub Community Team</p>
            </div>`,
       
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

module.exports = { MailSender, otps };
