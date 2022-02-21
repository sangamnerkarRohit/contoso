

var express =require("express");  
var app=express();  

var onAboutUs=function(req, res){
    res.send("Devloper Name :Rohit Sangamnerkar 219149");
};
var onDefault=function(req, res){
    res.send("<h1>Contoso Pvt. Ltd</h1>"+
              "<hr/>"+
              "<ol>"+
                    " <li>Multinational Company</li>"+
                    " <li>Has 12 offices all over the world</li>"+
                    " <li>Want do deploy software</li>"+
                    " <li>Has good work environment</li>"+
             "</ol>");
};
app.get("/",onDefault);  // Request handler functions are registered
app.get("/aboutus",onAboutUs);  // Request handler functions are registered
var server=app.listen(8081);
console.log("Server is running on port 8081");
