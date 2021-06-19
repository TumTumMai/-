module.exports = (app) => {
    const { verifyToken } = require("../middlewares/authJwt");
    const { isAdmin } = require("../middlewares/authJwt");
    const basket = require("../controller/Basket.controller");

    // Create a new Note
    // app.post("/image", verifyToken, isAdmin, image.create);

    app.post("/basket", basket.create);

    // Retrieve all Notes
    app.get("/basket", basket.findAll);

    // Retrieve a single Note with noteId
    app.get("/basket/:id", basket.findOne);

    // Update a Note with noteId
    app.put("/basket/:ObjectId", verifyToken, isAdmin, basket.update);

    // Delete a Note with noteId
    app.delete("/basket/:id", basket.delete);

};
