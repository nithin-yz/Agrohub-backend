const express = require("express")
const farmerSchema=require("./../models/farmerScheme")

exports.signup= async(req,res)=>{

console.log(req.body)

const {username, fullname,email,password,confirmPasword}=req.body

const newregistration = new farmerSchema({

username,
fullname,
password:password,
email:email,



})

await  newregistration.save()
res.status(200).send("hai")



}
