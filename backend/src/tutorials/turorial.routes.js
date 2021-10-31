const { checkSchema } = require("express-validator");
const validator = require("../validator");
const turorialValidator = require("./turorial.validator");

module.exports = (app) => {
  const tutorials = require("../tutorials/tutorial.controller");
  const router = require("express").Router();

  // Create a new Tutorial
  router.post(
    "/",
    validator(checkSchema(turorialValidator.create)),
    tutorials.create
  );

  // Retrieve all Tutorials
  router.get("/", tutorials.findAll);

  // delete Tutorials
  router.delete(
    "/:id",
    validator(checkSchema(turorialValidator.remove)),
    tutorials.delete
  );

  app.use("/api/tutorials", router);
};
