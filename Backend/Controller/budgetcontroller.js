const {budgets}=require("../Database/budgetdata")

const budgetcontroler=(req,res)=>{
try {
   res.json(budgets) 
   
} catch (error) {
    res.send("errr")
    console.log(error)
}
}
module.exports={budgetcontroler}