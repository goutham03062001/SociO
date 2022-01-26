import express from "express";
const app = express()

const port = process.env.port || 8500;


app.get("/",(req,res)=>{
    res.send("hello from express")
})

app.listen(()=>console.log("your port is connected at 8000"))
