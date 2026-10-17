
const transactiondata=require("../Database/tranasction")

const gettransactions=(req,res)=>{
try {
    res.send(transactiondata)
 
} catch (error) {
    res.send("there is somethin wrong in the backend")
}
}
module.exports={gettransactions}