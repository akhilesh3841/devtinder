const express=require("express");

const app=express();

app.use("/test",(req,res)=>{
    res.send("Welcome to my API");   
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})

//how to push on github