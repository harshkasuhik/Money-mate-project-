const express= require("express")
const cors=require("cors")
const app=express()
app.use(express.json());
const signuproutes=require("./Routes/singuproutes")
const {transctionroutes}=require("./Routes/transctionroutes")
const loginroutes=require("./Routes/loginroutes")
const deltransroutes=require("./Routes/deltransroutes")
const {budgetroutes}=require("./Routes/budgetroutes")
const goalsroutes=require("./Routes/goalsroutes")
const userinforoutes=require("./Routes/userinforoutes")
app.use(cors())
app.use("/api",signuproutes)
app.use("/api",loginroutes)
app.use("/api",transctionroutes)
app.use("/api",deltransroutes)
app.use("/api",budgetroutes)
app.use("/api",goalsroutes)
app.use("/api",userinforoutes)


app.listen(3000,()=>{
    console.log("the money mate server is running")
})