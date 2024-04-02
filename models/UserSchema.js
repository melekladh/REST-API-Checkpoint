// importing mongoose 
const mongoose=require("mongoose")
// creating a schema with a name and an age
const userSchema=mongoose.Schema({
    name: String ,
    age: Number,
})
// creating the model
const User=mongoose.model("user",userSchema )
// exporting the model
module.exports(User)