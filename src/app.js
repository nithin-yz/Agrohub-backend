const express = require('express')
const session = require('express-session')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require("./config/db")
require('dotenv').config()

const app=express()
app.use(cors());
app.use(express.json())
connectDB()

// app.use("/agrohub/farmer")
// app.use("/agrohub/admin")

const Port= process.env.Port||5000
app.listen(Port,()=>{console.log("Agro server Started"+"running on"+""+Port)})