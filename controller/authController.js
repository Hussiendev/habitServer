import { User } from "../modules/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { sendWelcomeEmail } from "../config/Nodmailer.js";
export const register=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        if(!name | !email | !password){
            return res.json({message:'all feilds are required'});
        
        }
        const targetuser=await User.findOne({email});
        if(targetuser){
            return res.json({message:'user arleady exist'});

        }
        const hashedpass=await bcrypt.hash(password,10);
        const user=await User.create({name,email,password:hashedpass});
await user.save();

        return res.status(200).json({user});

    
        
    }
    catch(eror){
        console.log(error);
        return res.status(404).json({message:'error server '});
    }
}
console.log("auth controller loaded");  