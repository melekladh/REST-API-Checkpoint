// importing required libraries
const express =require("express")
const app=express()
const dotenv=require("dotenv")
const mongoose=require("mongoose")
dotenv.config()
// Configure the environment variables with .env

const port=process.env.PORT
mongoose.connect(process.env.MONGO)
.then(()=>console.log("DB connected"))
.catch((err)=>console.log(err))

app.use('/api',require('./routes/Userroute'))
app.use(express.json())


app.listen(port,(err)=>{
    
    
    err?console.log(err):console.log("port is running in port",port)})

