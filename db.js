//importing mongoose to database file
const mongoose = require('mongoose');

//mongo server personalised URI. Its different for all user. 
const MONGOURI = "mongodb+srv://user:user@cluster0.ku0hq.mongodb.net/example?retryWrites=true&w=majority";


//Connecting dbServer using async method using try and catch incase of any error and printing the message for developer reference
const InitiateMongoServer = async () => {
    try {
        //using mongoose connect method used to connect the server by passing the uri of the same
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to DB !!");
    } catch (e){
        console.log(e);
        throw e;
    }
};

//defining module of the connecting mongoose connect method to connect the server.
module.exports = InitiateMongoServer;