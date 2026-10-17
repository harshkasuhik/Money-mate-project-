const express=require("express")
const userinfocontroller=require("../Controller/usercontroller")
const userinforoutes= express.Router()
userinforoutes.get("/profile",userinfocontroller)
 module.exports=userinforoutes