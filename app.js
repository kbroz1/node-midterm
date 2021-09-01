// dependencies include 4- express, path, body-parser, nodemailer
const express= require("express");
const path= require("path");



//create express app and port 
var app= express();
var PORT = 7000;


//for Jade https://naltatis.github.io/jade-syntax-docs/
// https://html2jade.org/
//Set the view engine as jade
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');




//Routes 
//for jade(html) files in the views folder
//res.render Used in Express to view and send HTML to the client 
app.get("/", function(req,res){
    res.render("home", {title: "Its working, no problem!"})
});






// Start server to listen for request
app.listen(PORT, function(){
    console.log("App is running on Port " + PORT);
});













//npm i nodemon -g 