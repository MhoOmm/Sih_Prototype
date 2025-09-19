const express = require("express");
const app = express();
require('dotenv').config();
const cors = require("cors");
const aiRouter = require("./src/routes/chatRouter")

app.use(express.json());
app.use(cors({
    origin:"https://aranya-qhdk.onrender.com",
    credentials:true,
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use("/ai",aiRouter);


const initCon =async ()=>{
    try{
        app.listen(4000,()=>{
            console.log("Server is running at port no.4000");
        }) 
    }catch(err){
        console.log("Server Not responding")
    }
}

initCon()