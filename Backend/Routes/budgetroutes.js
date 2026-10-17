const express=require("express")
const {budgetcontroler}=require("../Controller/budgetcontroller")
const budgetroutes=express.Router()
budgetroutes.get("/budget",budgetcontroler)
module.exports={budgetroutes}