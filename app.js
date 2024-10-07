const express=require("express");

const app=express();

app.use("/test",(req,res)=>{
    res.send("Welcome to my API");   
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})

//how to push on github

// git init ->mark karega saare files ko
//.gitignore file bana kar->private aur bekar files ko nhi update krnege
//git add . se saare files ko push honge
//git commit -m "kuch bhi"
//github pe jaake new resposutrt bnaahau
//phir jo path milega terminak mein copy krna hai


//how to push on github
