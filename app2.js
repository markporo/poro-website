const express = require("express");
// const bodyParser = require("body-parser");
const path = require("path");
const app = express();




//Get Request for contact.html
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "views", "contact.handlebars"));
    

});






const PORT = 3000;

app.listen("PORT", function(){
    console.log("Server is Running on port 3000.");
});