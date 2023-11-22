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


  
  // var router = require("express").Router();

  // // Create a new Campaign
  // // router.post("/", campaigns.create);

  // // Retrieve all Campaigns
  // // router.get("/", campaigns.findAll);

  // // Retrieve all published Campaigns
  // router.get("/published", campaigns.findAllPublished);

  // // Retrieve a single Campaign with id
  // router.get("/:id", campaigns.findOne);

  // // Update a Campaign with id
  // router.put("/:id", campaigns.update);

  // // Delete a Campaign with id
  // router.delete("/:id", campaigns.delete);

  // // Delete all Campaigns
  // router.delete("/", campaigns.deleteAll);

  // app.use('/api/campaigns', router);
};
