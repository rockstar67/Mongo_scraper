// Dependencies
var express = require("express");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");

// Initializing the port
var PORT = process.env.PORT || 3000;

// Initializing Express
var app = express();

// Set up an Express Router
var router = express();

// Designate our public folder as a static directory
app.use(express.static(__dirname + "/public"));

app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Use bodyparser in our app
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(router);

// Starting the server
app.listen(PORT, function() {
    console.log("App running on port: " + PORT);
  });