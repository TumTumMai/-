module.exports = (app) => {
    const categories = require("../controller/categories.controller");
    const { verifyToken } = require("../middlewares/authJwt");
    const { isAdmin } = require("../middlewares/authJwt");
    // Create a new Note
    app.post("/categories", verifyToken, isAdmin, categories.create);

    // Retrieve all Notes
    app.get("/categories", categories.findAll);

    // Retrieve a single Note with noteId
    app.get("/categories/:id", categories.findOne);

};
