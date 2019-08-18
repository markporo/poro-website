const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();

// view engine setup
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

//Body Parser Middleware - parses data
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Static Folder
app.use("public", express.static(path.join(__dirname, 'public')));

// get request
app.get("/", (req, res) => {
    res.render('contact', {layout: false});
});

//Get Request for contact.html
// app.get("/", function(req, res) {
//     res.render(path.join(__dirname, "public", "contact.html"));

// });


// app.post("/send", (req, res) => {
   
//     const output = `
//     <p>You have a new contact request</p>
//     <h3>Contact Details</h3>
//     <ul> 
//         <li>First Name: ${req.body.fname}</li>
//         <li>Last Name: ${req.body.lname}</li>
//         <li>Email: ${req.body.email}</li>
//     </ul>
//     <h3>Message</h3>
//     <p>${req.body.message}</p>
//     `;
// });

// app.listen(3000, () => console.log("server started on port 3000"));
app.listen(3000, function(){
    console.log("server started on port 3000")
});