var express = require("express");


var routes = function (app) {
  //Master Router
  var bookRouter = express.Router();
  
  bookRouter.route("/")
    .get(function (req, res) {
      var obj = {};
      obj.ram = "shyam";
      res.json(obj);
    });


  return bookRouter;
}

module.exports = routes;