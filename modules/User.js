import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},

  
    verifyoption:{type:String,default:""},//used to store the token when sent on verfication of email
    verfyexpires:{type:Number,default:0},//set the expiry of token
    isVerified:{type:Boolean,default:false},//set true when ujser is verfied
    resetopt:{type:String,default:""},//save the token for reset pass
    resetoptexpires:{type:Number,default:0},//set the expiry of token
   
});
export const User= mongoose.model('User',userSchema);