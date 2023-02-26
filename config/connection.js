const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/socialnetworkapi",{
    useNewUrlParser:true,
    useUnifiedTopology:true,

})

mongoose.connection.once("open",()=>{
    console.log("Connected to MongoDB!")
})

module.exports=mongoose.connection