//  const userdata=require("../Database/user_autentication")
 
//  const login_auth_controller=(req ,res)=>{

//     let data=req.body
//     const{email,password}=data
//     const user=userdata.find((item)=>{

//         return item.email===email
//     })

// if(!user){
//     res.json({
// succ:false,
// msg:"user not found"

//     })
// }
// if(user.password!==password){
//     return res.json({
//      succ:false,
// msg:"wrong found"
   
//     })
// }
//  return res.json({
//     succ:true,
//     msg:"sucess",
// user:{
//     email:user.email
// }
// })
//  }
// module.exports = login_auth_controller;

const bcrypt=require("bcrypt")
const Userauth = require("../model/userauthmodel")
const login=async (req,res) => {

    try {
         const{email,password}=req.body
    const existuser= await Userauth.findOne({email})
    if(!existuser){
       return res.json({
            succ:false,
            msg:"User not found"
        })
    }
const verify= await bcrypt.compare(password,existuser?.password)
if(!verify){
   return res.status(500).json({
        succ:false,
        msg: "wrong passoword"
    }
       )
}
return res.status(200).json({
    succ:true,
    msg:"successfully login the account"
})
    } catch (error) {
        console.log(error)
        res.send("oops error occur we are working on it ")
    }
   
}
module.exports=login