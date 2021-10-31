const { validationResult } = require('express-validator');

const validate = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);

    // is valid
    if (errors.isEmpty()) {
      return next();
    }

    // is invalid
    const result = {};
    errors.array().map((error) => {
      if (!result[error.param]) {
        result[error.param] = [];
      }

      result[error.param].push(error.msg);
    });

    res.status(400).json(result);
  };
};

module.exports = validate;
