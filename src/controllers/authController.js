const express = require("express")
const farmerSchema=require("./../models/farmerScheme")
const {validateEmail,validatePassword,checkPasswords }=require("./../utilities/uservalidation")
const {MailSender,otps} = require("./../utilities/nodemailer")



exports.signup= async(req,res)=>{

console.log(req.body)

const {username, fullname,email,password,confirmPassword}=req.body
let hashedPassword
if(validateEmail(email)){


if(validatePassword(password)){


if(checkPasswords(password,confirmPassword)){

hashedPassword=await checkPasswords(password,confirmPassword)

const newregistration = new farmerSchema({

    username,
    fullname,
    password:hashedPassword,
    email:email,
    
    
    
    })
    console.log("het")
    await  newregistration.save()
    MailSender(email)
    
    console.log("hello")
    
    res.status(201).send("user registration is done ")
    

    
    
    






}else{


    return res.status(400).send("password doesnt match")

}

}else{

    return res.status(400).send("password is not valid")

}


}else{

return res.status(400).send("email is not valid")

}



}