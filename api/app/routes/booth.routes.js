module.exports = (app) => {
    const minibooth = require("../controller/Booth.controller");
    const { verifyToken } = require("../middlewares/authJwt");
    const { isAdmin } = require("../middlewares/authJwt");

    // Create a new Note
    app.post('/minibooth', verifyToken, isAdmin, minibooth.create);

    // // Retrieve all Notes
    app.get('/minibooth', minibooth.findAll);

    // // Retrieve a single Note with noteId
    app.get('/minibooth/:id', minibooth.findOne);

    // // Update a Note with noteId
    app.put('/minibooth/:ObjectId', verifyToken, isAdmin, minibooth.update);

    // // Delete a Note with noteId
    app.delete('/minibooth/:MiniBoothName', verifyToken, isAdmin, minibooth.delete);
}   