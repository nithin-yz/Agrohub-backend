const express = require('express')
const session = require('express-session')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require("./config/db")
require('dotenv').config()
const authRoutes= require("")
const farmerRoutes=require("")
const adminRoutes =require("")

const app=express()
app.use(cors());
app.use(express.json())
connectDB()
app.use("/agrohub/auth", authRoutes)
app.use("/agrohub/farmer",farmerRoutes)
app.use("/agrohub/admin", adminRoutes)

const Port= process.env.Port||5000
app.listen(Port,()=>{console.log("Agro server Started"+"running on"+""+Port)})