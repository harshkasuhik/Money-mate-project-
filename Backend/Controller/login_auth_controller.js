 const userdata=require("../Database/user_autentication")
 
 const login_auth_controller=(req ,res)=>{

    let data=req.body
    const{email,password}=data
    const user=userdata.find((item)=>{

        return item.email===email
    })

if(!user){
    res.json({
succ:false,
msg:"user not found"

    })
}
if(user.password!==password){
    return res.json({
     succ:false,
msg:"wrong found"
   
    })
}
 return res.json({
    succ:true,
    msg:"sucess",
user:{
    email:user.email
}
})
 }
module.exports = login_auth_controller;