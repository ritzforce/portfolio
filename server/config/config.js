var path = require("path");
var root = path.normalize(__dirname + "/../../");

module.exports = {
    production: {
       rootPath :root, 
       db :  "mongodb://user:pass@ds051595.mongolab.com:51595/portfolio",   
       port: process.env.PORT || 80
    },
    development:{
       rootPath : root,  
       db :"mongodb://localhost/portfolio",   
       port :process.env.PORT || 5000
    }
};