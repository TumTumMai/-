module.exports = (app) => {
  const { verifyToken } = require("../middlewares/authJwt");
  const { isAdmin } = require("../middlewares/authJwt");
  const image = require("../controller/Image.controller.js");

  // Create a new Note
  app.post("/image", verifyToken, isAdmin, image.create);

  // app.post("/image", image.create);

  // Retrieve all Notes
  app.get("/api/image", image.findAll);

  // Retrieve a single Note with noteId
  app.get("/image/:id", image.findOne);

  // Update a Note with noteId
  app.put("/image/:ObjectId", verifyToken, isAdmin, image.update);

  // Delete a Note with noteId
  app.delete("/image/:BoothName", verifyToken, isAdmin, image.delete);
  //
  app.get("/imageToday", image.getall);
};
