module.exports = function (app) {
   
   //Render the Main home page
   app.get("/",function(req,res){
      res.render("index"); 
   });
   

   //Render the Book Home Page
   app.get("/projects/projBook",function(req,res){
      res.render("project",{
        name : "Book Project",
        description: "First project that demonstrates a simple Book API to store data in mongoose"
      })
   });
   
   //Routing of Books
   var bookRoute = require("../projBook/route")(app);  
   app.use("/projects/projBook/api",bookRoute);   
   
}