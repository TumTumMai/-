module.exports = (app) => {
    const { verifyToken } = require("../middlewares/authJwt");
    const { isAdmin } = require("../middlewares/authJwt");

    // const { checkAuth } = require("../middlewares/auth");

    const event = require("../controller/Event.controller.js");


    // Create a new Note

    app.post('/event', verifyToken, isAdmin, event.create);

    // // Retrieve all Notes
    app.get('/eventall', event.findAll);

    // // Retrieve a single Note with noteId
    app.get('/event/:Nameevent', event.findOne);

    // // Update a Note with noteId
    app.put('/event/:ObjectId', event.update);

    // // Delete a Note with noteId
    app.delete('/event/:Nameevent', event.delete);
}   