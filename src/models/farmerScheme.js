const mongoose = require("mongoose");


const farmerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
otpverified:{

type:Boolean,
default:false,

},
profileverified:{

    type:Boolean,
    default:false
}, createdAt:{

type:Date,
default:Date.now()

}

});


const farmerModel = mongoose.model( "Farmer", farmerSchema ,"Farmers" )

module.exports=farmerModel