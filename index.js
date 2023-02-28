const express=require("express");
const cors=require("cors");
const jwt=require("jsonwebtoken");
const { AdRoute } = require("./router/ad.router");
const { connection } = require("./config/db");
require('dotenv').config()
const app=express();
app.use(express.json());
app.use(cors())
app.use("/ad",AdRoute);
app.listen(process.env.Port,async ()=>{
    try {
        await connection
        console.log("connected to db")
    } catch (error) {
        console.log(error)
    }
})