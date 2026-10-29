const mongoose= require("mongoose")

const userauth=new mongoose.Schema({
    name:{
        type:String,
        requie:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})
const Userauth= mongoose.model("user",userauth)
module.exports=Userauth