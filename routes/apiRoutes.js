//=============================================
// DEPENDENCIES
// include the path module to allow the JS file to move to the correct path to the specified file
//=============================================

const path = require("path");
const fs = require("fs");
let notesData = [];
let filteredData = [];

//=============================================
// ROUTING
//=============================================

module.exports = function(app) {

    // GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
    app.get("/api/notes", function(req, res) {
        notesData = fs.readFileSync("db/db.json", "utf8");
        notesData = JSON.parse(notesData);
        res.json(notesData);
    });

    // POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client
    app.post("/api/notes", function(req, res) {

        // Read the JSON file:
        notesData = fs.readFileSync("db/db.json", "utf8");
        // Parse the JSON data to get an array of objects that can be changed by JavaScript:
        notesData = JSON.parse(notesData);
        // Set a unique ID for each note object:
        const objectID = notesData[notesData.length - 1];
        req.body.id = objectID.id + 1;
        // Add new note to the array of note objects:
        notesData.push(req.body);
        // Stringify the array that contains the notes so that it can be sent back to the JSON file.
        notesData = JSON.stringify(notesData);
        // Write the new array over the old array in the db.json file
        fs.writeFile("db/db.json", notesData, "utf8", function(err) {
            if (err) throw err;
        })
        // Parse the notesData string back to an array so that it can be sent back to the client:
        res.json(JSON.parse(notesData))

    });

   // DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. 
   app.delete("/api/notes/:id", (req, res) => {

    let noteId = req.params.id;

    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) throw err;

      const allNotes = JSON.parse(data);
      const newAllNotes = allNotes.filter(note => note.id != noteId);

      fs.writeFile("./db/db.json", JSON.stringify(newAllNotes, null, 2), err => {
        if (err) throw err;
        res.sendStatus(200);
        console.log("Note deleted!")
      });
    });
  });

};



