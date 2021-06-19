module.exports = (app) => {
    const video = require("../controller/video.controller.js");

    // Create a new Note
    app.post('/video', video.create);

    // Retrieve all Notes
    app.get('/video', video.findAll);

    // Retrieve a single Note with noteId
    app.get('/video/:videoname', video.findOne);

    // Update a Note with noteId
    app.put('/video/:ObjectId', video.update);

    // Delete a Note with noteId
    app.delete('/video/:videoname', video.delete);
}   