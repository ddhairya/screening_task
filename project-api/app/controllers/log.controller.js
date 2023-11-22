const db = require("../models");
const Log = db.log;
const Op = db.Sequelize.Op;


// Create and Save a new Log
exports.create = (data) => {
  
  // Create a Log
  const log = {
    title: data.title,
    campaign_id: data.campaign_id,
    email : data.email
  };

  // Save Log in the database
  Log.create(log)
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Log."
      });
    });
};

