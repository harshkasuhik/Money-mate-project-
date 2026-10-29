const mongoose=require("mongoose")

const connectdb= async()=>{
    try {
        await mongoose.connect(process.env.MONGOOSE)
    } catch (error) {
        console.log(error)
    }
}
module.exports={connectdb}