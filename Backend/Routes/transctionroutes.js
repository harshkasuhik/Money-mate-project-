const express=require("express")
const {gettransactions}=require("../Controller/transactioncontroller")
const transctionroutes=express.Router()
transctionroutes.get("/transaction",gettransactions)
module.exports={transctionroutes}