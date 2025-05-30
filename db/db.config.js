
import mongoose from "mongoose";
export const DbConnect=async()=>{
try{
    const con =await mongoose.connect(process.env.MONGO_URL);
    console.log(`Database connected to ${con.connection.host}`);
}
catch(error){
    console.log(error);
    process.exit(1);
}

};