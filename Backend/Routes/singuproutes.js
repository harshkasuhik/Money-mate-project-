 const express=require("express")
 const signup_aut_controller=require("../Controller/signup_aut_controller")
 const signup_aut=express.Router()
 signup_aut.post("/signup",signup_aut_controller)
 module.exports=signup_aut