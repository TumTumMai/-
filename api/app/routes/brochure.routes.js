module.exports = (app) => {
    const brochure = require("../controller/Brochure.controller");
    const { verifyToken } = require("../middlewares/authJwt");
    const { isAdmin } = require("../middlewares/authJwt");
    // Create a new Note
    app.post('/brochure', verifyToken, isAdmin, brochure.create);

    // // Retrieve all Notes
    app.get('/brochureall', brochure.findAll);

    // // Retrieve a single Note with noteId
    app.get('/brochure/:id', brochure.findOne);

    // // Update a Note with noteId
    app.put('/brochure/:ObjectId', verifyToken, isAdmin, brochure.update);

    // // Delete a Note with noteId
    app.delete('/brochure/:BrochureName', verifyToken, isAdmin, brochure.delete);
}   