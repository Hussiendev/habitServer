import express from 'express';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { DbConnect } from './db/db.config.js';

dotenv.config();
const app = express();
app.use(express.json());//for json data
app.use(cookieParser());//for cookies
const Port=process.env.PORT || 4000;

app.listen(Port,()=>{
    DbConnect();
    console.log(`app is runed at port ${Port}`);
});
app.get("/",(req,res)=>{
    return res.json({message:'hi'});
    
})