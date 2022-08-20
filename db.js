const mongoose = require("mongoose");

module.exports = () => {
    const connectionParams = {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    };
    try{
        mongoose.connect(process.env.DB,connectionParams);
        console.log("Connected to database successfully")
    }catch(error){
       console.log(error);
       console.log("could not connect to database!")
    }
};

// const connect = () => {
//     return mongoose.connect("mongodb+srv://chandu:chandu806@cluster0.dtbqqoy.mongodb.net/?retryWrites=true&w=majority")

// }
// module.exports = connect;
