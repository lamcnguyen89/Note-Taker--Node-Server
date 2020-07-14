//=============================================
// DEPENDENCIES
// include the path module to allow the JS file to move to the correct path to the specified file
//=============================================
const path = require("path");

//=============================================
// ROUTING
//=============================================

module.exports = function(app) {

    // GET `/notes` - Should return the `notes.html` file:
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
 
    // GET "/" is index file
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // GET `*` - Should return the `index.html` file. I've got to remember that this * means "all other" and it has to go last in all the get and post requests. Otherwise nothing else will work
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

};

