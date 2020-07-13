//=============================================
// SETUP AND OBTAIN DEPENDENCIES
//=============================================

//=============================================
// CREATE AND CONFIGURE SERVER
// Set up the basic properties of the server
//=============================================

//=============================================
// BUILD ROUTES
// Creates route files that directs the server to take certain actions when users visit or request data from various URLs 
//=============================================

// HTML Routes:

    // GET `/notes` - Should return the `notes.html` file.
    // GET `*` - Should return the `index.html` file

// API Routes:

    // GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
    // POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client
    // DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
    
//=============================================
// START LISTENER
// The code below starts our software server
//=============================================