//=============================================
// DEPENDENCIES
// include the path module to allow the JS file to move to the correct path to the specified file
//=============================================
var PATH = require("path");

//=============================================
// ROUTING
//=============================================

module.exports = function(app) {

    // GET `/notes` - Should return the `notes.html` file:
    app.get("/notes", function() {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });


    // GET `*` - Should return the `index.html` file:
    app.get("*", function() {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

};

