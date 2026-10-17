const express=require("express")
const goalscontroller=require("../Controller/goalscontroller")
const goalsroutes=express.Router()
goalsroutes.get("/goals",goalscontroller)

module.exports=goalsroutes