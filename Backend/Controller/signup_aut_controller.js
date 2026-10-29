const  bcrypt=require("bcrypt")
const Userauth = require("../model/userauthmodel")
 
const signup=async(req,res) => {
  try {
    const {name,email,password}=req.body
const check=await Userauth.findOne({email})
if(check){
  console.log("user already exist please login")
  return res.send("user already exist")
}
const hashpassowrd=await bcrypt.hash(password,10)
    let result= await Userauth.create({name:name,email:email,password:hashpassowrd})
     
        return res.json({msg:"user registred successfully",id:result?._id})
  } catch (error) {
    console.log(error)
    res.json({msg:"oops error occur in the backend "})
  }
  
}
module.exports=signup