const express = require("express");
const app = express();
require('dotenv').config();
const cors = require("cors");
const aiRouter = require("./routes/chatRouter")

app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
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