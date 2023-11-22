const { authJwt } = require("../middleware");
const campaigns = require("../controllers/campaign.controller.js");

module.exports = app => {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    res.setHeader('Access-Control-Allow-Origin', '*');

    next();
  });


  app.get("/api/campaigns/", [authJwt.verifyToken], campaigns.findAll);
  
  app.post("/api/campaigns/", [authJwt.verifyToken], campaigns.create);

  app.put("/api/campaigns/:id", [authJwt.verifyToken], campaigns.update);
};
