const mongoose = require("mongoose")
require ("dotenv").config()
const mongourl=  process.env.Mongo_url
console.log(process.env.Port)
console.log(mongourl)
  const  connectDB=async ()=>{
try{

await mongoose.connect(mongourl)

console.log("mongodb connected sucessfully")
}catch(err){

console.log(err)
console.log("mongodb failed to connect")


}



}

module.exports =connectDB