const goalsdata=require("../Database/goalsdata")
const goalscontroller=(req,res)=>{
try {
    res.json(goalsdata)
    console.log(goalsdata)
} catch (error) {
    res.send("error occur !!")
    console.log(error)
}
}
module.exports=goalscontroller