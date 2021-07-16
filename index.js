//using node's require function which returns package to use the 'express' module to make an api. Require is similar to import keyword in another programming languages
const express = require("express"); // For making an api

//using same require function to import model of our api
var Task = require('./api/models/todoListModel');

//connecting our api with 'MongoDB'
const InitiateMongoServer = require("./db");

//Starting mongo server using its function
InitiateMongoServer();

//now using the same express variable to initiate the api
const app = express();

//port require to start the api on our local machine
const PORT = process.env.PORT || 4000;


//using reference of express variable to let know passing of post requests to our server.
app.use(express.urlencoded({
  extended: true
}));


app.use(express.urlencoded({extended:true}));

//letting the app know to parse the json values.
app.use(express.json());

//sending and receiveing request to api and printing to know whether the api is working perfectly
app.get("/", (req, res) => {
  res.send({ message:"API Still Working Fine (-_-)!" });
});

//passing our todoListRoute file to our app to let it know our which is our route file.
var routes = require('./api/routes/todoListRoute.js');  
routes(app);


//letting api know to which port it need to request and respond and printed message for developer reference.
app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});