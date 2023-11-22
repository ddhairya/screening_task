const db = require("../models");
const Campaign = db.campaign;
const Op = db.Sequelize.Op;


// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  const email = req.query.email;
  var condition = email ? { email: { [Op.like]: `%${email}%` } } : null;

  Campaign.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Create and Save a new Campaign
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title && !req.body.description && !req.body.date ) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Campaign
  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    recursive: req.body.recursive,
    frequency: req.body.frequency,
    published: req.body.published ? req.body.published : false
  };

  // Save Campaign in the database
  Campaign.create(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Campaign."
      });
    });
};

// Find a single Campaign with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Campaign.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Campaign with id=" + id
      });
    });
};

// Update a Campaign by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Campaign.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Campaign was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Campaign with id=${id}. Maybe Campaign was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Campaign with id=" + id
      });
    });
};

// Delete a Campaign with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Campaign.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Campaign was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Campaign with id=${id}. Maybe Campaign was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Campaign with id=" + id
      });
    });
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  Campaign.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Users were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};

