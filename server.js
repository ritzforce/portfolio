var express = require("express");

//Create an Express Application
var app = express();
var env = process.env.NODE_ENV || "development";

var config = require("./server/config/config")[env];
//Express JS Configuration
require("./server/config/express")(app, config);
require("./server/config/routes")(app);

var server = app.listen(config.port, function () {
    console.log("Server running on " + server.address().port);
});