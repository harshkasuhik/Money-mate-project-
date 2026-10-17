const userinfo=require("../Database/userinfo")
const usercontroller=(req,res)=>{
try {
    res.json(userinfo)
} catch (error) {
    res.send("errr occure here")
    console.log(error)
}
 }
 module.exports=usercontroller