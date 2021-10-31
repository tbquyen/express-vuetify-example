const db = require("../models");
const Tutorial = db.tutorials;

// Create and Save a new Tutorial
exports.create = async (req, res, next) => {
  // Create a Tutorial
  const tutorial = new Tutorial({
    name: req.body.name,
  });

  // Save Tutorial in the database
  const data = await tutorial.save().catch(next);

  res.send(data);
};

// Retrieve all Tutorials from the database.
exports.findAll = async (req, res, next) => {
  const data = await Tutorial.find().exec().catch(next);
  res.send(data);
};

// Retrieve all Tutorials from the database.
exports.delete = async (req, res, next) => {
  // Save Tutorial in the database
  const data = await Tutorial.findByIdAndRemove(req.params.id).catch(next);
  res.send(data);
};
