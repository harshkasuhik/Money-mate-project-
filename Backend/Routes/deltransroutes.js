const express=require("express")
const deltrans=require("../Controller/deletetrans")
const deltransroutes=express.Router()
deltransroutes.delete("/transaction/:id",deltrans)
module.exports=deltransroutes