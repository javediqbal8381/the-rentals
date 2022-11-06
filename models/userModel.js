const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
     username : {type:String , required: true},
     usercnic :{type:Number,required:true,unique: true},
     userphone :{type:Number,required:true,unique: true},
     useremail : {type:String , required: true,unique: true},
     password : {type:String , required: true}

})

const userModel = mongoose.model('users' , userSchema)

module.exports = userModel