 const express=require("express")
 const login_auth_controller=require("../Controller/login_auth_controller")
 const login_aut=express.Router()
login_aut.post("/login",login_auth_controller)
 module.exports=login_aut