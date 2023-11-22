const { authJwt } = require("../middleware");
const users = require("../controllers/user.controller.js");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept, Authorization"
    );
    res.setHeader('Access-Control-Allow-Origin', '*');

    next();
  });
  app.get("/api/users/", [authJwt.verifyToken], users.findAll);

};
