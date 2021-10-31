const create = {
  name: {
    notEmpty: {
      errorMessage: "Name field cannot be empty",
      bail: true,
    },
  },
  floor: {
    notEmpty: {
      errorMessage: "Floor field cannot be empty",
      bail: true,
    },
  },
  chair: {
    notEmpty: {
      errorMessage: "Chair field cannot be empty",
      bail: true,
    },
    isInt: {
      errorMessage: "Floor is Int",
      bail: true,
    },
    toInt: true,
  },
};

const remove = {
  id: {
    notEmpty: {
      errorMessage: "Id field cannot be empty",
      bail: true,
    },
  }
};

module.exports = { create, remove };
