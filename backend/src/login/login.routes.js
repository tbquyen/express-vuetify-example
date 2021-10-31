const { checkSchema } = require("express-validator");
const ValidatorUtils = require("../plugins/validator.utils");
const validator = require("./login.validator");

module.exports = (app) => {
  const controller = require("./login.controller");
  const router = require("express").Router();

  router.post(
    "/",
    ValidatorUtils(checkSchema(validator.login)),
    controller.login
  );

  router.delete("/", controller.logout);

  app.use("/api/login", router);
};
