//=============================================
// SETUP AND OBTAIN DEPENDENCIES
//=============================================

var express = require("express")
//=============================================
// CREATE AND CONFIGURE SERVER
// Set up the basic properties of the server
//=============================================

// Create the "express" server:
var app = express();

// Sets the initial Port that the server will listen through for client-side requests.
// process.env.PORT is a command that means that the server will listen to whatever number is in the environmental variable PORT. 
var PORT = process.env.PORT || 3000

// Sets up the Express app to handle data parsing using middleware.
// json and urlencoded are both part of bodyParse in Express: https://github.com/expressjs/body-parser
app.use(express.urlencoded({ extended: true}));
app.use(express.json()); 


//=============================================
// BUILD ROUTES
// Creates route files that directs the server to take certain actions when users visit or request data from various URLs 
//=============================================

// HTML Routes:
require("./routes/htmlRoutes")

// API Routes:
require("./routes/apiRoutes")

    

//=============================================
// START LISTENER
// The code below starts our software server. Almost like initializing a function after creating the function.
//=============================================

app.listen(PORT, function() {
    console.log(`Listening on Port: ${PORT}`)
} )