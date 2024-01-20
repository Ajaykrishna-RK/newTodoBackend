const { default: mongoose } = require("mongoose")





const dbCOnnection =  async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to Database")
    }catch (err){
        console.log(err)
    }
}

module.exports = dbCOnnection