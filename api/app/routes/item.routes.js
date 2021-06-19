module.exports = (app) => {
    // const { verifyToken } = require("../middlewares/authJwt");
    // const { isAdmin } = require("../middlewares/authJwt");
    const item = require("../controller/Item.controller");

    // Create a new Note
    // app.post("/item", verifyToken, isAdmin, image.create);

    app.post("/item", item.create);

    // Retrieve all Notes
    app.get("/api/item", item.findAll);

    // Retrieve a single Note with noteId
    app.get("/item/:id", item.findOne);

    // Update a Note with noteId
    app.put("/item/:ObjectId", verifyToken, isAdmin, item.update);

    // Delete a Note with noteId
    app.delete("/item/:BoothName", verifyToken, isAdmin, item.delete);
    //
    // app.get("/imageToday", image.getall);
};
