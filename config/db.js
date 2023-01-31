const mongoose=require("mongoose")
require("colors")
const db =()=>{
    try {
        mongoose.set('strictQuery', true);
        // 2eRi1Xg7GpLUuYdP password
    // mongodb+srv://shivani:2eRi1Xg7GpLUuYdP@cluster0.lh3b6zn.mongodb.net/?   retryWrites=true&w=majority
        mongoose.connect(process.env.MONGO_URL)
        console.log("Db Connected".bgGreen);
    } catch (error) {
        console.log(`Unable to Connected ${error}`);
        process.exit() // stop the Server
        
    }
}
module.exports=db