const { authJwt } = require("../middlewares");
const controller = require("../controller/user.controller");
const user = require("../controller/user.controller.js");


module.exports = function (app) {

  app.get('/user', user.findAll);


  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin_Moderator],
    controller.adminBoard
  );
};